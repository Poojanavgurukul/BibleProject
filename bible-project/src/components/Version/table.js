import React, { useContext } from 'react';
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
import Alert from '../common/Alert';
import ResponsiveDialogBox from '../Version/updateDialog';
import ResponsiveDialog from '../Version/DialogVersionAdd';

import { VersionContext } from '../../contexts/version';
import { CommonContext } from '../../contexts/commonContext';

const TableVersion = () => {
    const {isLoading,error,data} = useContext(VersionContext);
    const {classes,handleClicked,setMessage,setOpen,handleClickedBox} = useContext(CommonContext);
    const handleDelete=(id,message)=>{
      fetch(`http://localhost:8000/version/${id}`,{
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
              <TableCell>Version Id</TableCell>
              <TableCell>Version Name</TableCell>
              <TableCell>Version Code</TableCell>
              <TableCell>Revision</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {element.id}
                </TableCell>
                <TableCell>{element.name}</TableCell>
                <TableCell>{element.code}</TableCell>
                <TableCell>{element.revision}</TableCell>
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
 
export default TableVersion;