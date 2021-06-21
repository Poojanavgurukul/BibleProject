import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import UpdateForm from '../Language/updateForm';
import { useTheme } from '@material-ui/core/styles';
import { useContext } from 'react';
import { CommonContext } from '../../contexts/commonContext';

export default function ResponsiveDialogBox() {
  const {openDialogBox,setOpenDialogBox} = useContext(CommonContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpenDialogBox(false)
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openDialogBox}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
        <DialogTitle id="responsive-dialog-title">{"Add Language"}</DialogTitle>
        <DialogContent>
            <UpdateForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}