import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ResponsiveDialog from './DialogAdd';
import ResponsiveDialogBox from './updateDialog';
import Alert from '../common/Alert';
import { useContext } from 'react';
import { CommonContext } from '../../contexts/commonContext';
import { BibleContext } from '../../contexts/bible';
const BibleTable = () => {
    const {classes,handleClicked,setMessage,setOpen,handleClickedBox} = useContext(CommonContext);
    const {isLoading,error,data} = useContext(BibleContext); 

    const handleDelete=(id,message)=>{
      fetch(`http://localhost:8000/bible/${id}`,{
        method:'DELETE'
      }).then(()=>{
        window.location.reload();
      })
      setOpen(true);
      setMessage(message);
   }

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return ( 
        <div>
        <Button
          onClick={handleClicked}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
        <ResponsiveDialog />
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Bible Id</TableCell>
              <TableCell>Language Name</TableCell>
              <TableCell>Version Name</TableCell>
              <TableCell>Version Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element) => (
              <TableRow key={element.id}>
                <TableCell component="th" scope="row">
                  {element.id}
                </TableCell>
                <TableCell>{element.languagename}</TableCell>
                <TableCell>{element.versionname}</TableCell>
                <TableCell>{element.versioncode}</TableCell>
                <TableCell>
                  <Button
                    onClick={()=>handleDelete(element.id,'Deleted SuccesFuly!!')}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={()=>handleClickedBox(element.id)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <ResponsiveDialogBox />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Alert />
      </div>
     );
}
 
export default BibleTable;