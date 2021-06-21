import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Alert from '../common/Alert'
import ResponsiveDialog from './DialogLanguageAdd';

import { makeStyles } from '@material-ui/core/styles';
import { LanguageContext } from '../../contexts/language';
import { CommonContext } from '../../contexts/commonContext';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const LanguageTable = () => {
   const classes = useStyles();
   const { isLoading,error,data,history } = useContext(LanguageContext)
   const {setOpen,setMessage,handleClicked} = useContext(CommonContext);
   const handleDelete=(id,message)=>{
      fetch(`http://localhost:8000/language/${id}`,{
        method:'DELETE'
      }).then(()=>{
        history.push('/')
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
              <TableCell>Language Id</TableCell>
              <TableCell>Language Name</TableCell>
              <TableCell>Language Code</TableCell>
              <TableCell>Direction To Read</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((language,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {language.id}
                </TableCell>
                <TableCell>{language.name}</TableCell>
                <TableCell>{language.code}</TableCell>
                <TableCell>{language.direction}</TableCell>
                <TableCell>
                  <Button
                    onClick={()=>handleDelete(language.id,'Deleted SuccesFuly!!')}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
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
 
export default LanguageTable;