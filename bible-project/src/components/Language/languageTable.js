import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { LanguageContext } from '../../contexts/language';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const LanguageTable = () => {
    const classes = useStyles();
    const {languageData} = useContext(LanguageContext)
    return (
        <div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Language Id</TableCell>
              <TableCell>Language Name</TableCell>
              <TableCell>Language Code</TableCell>
              <TableCell>Direction To Read</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {languageData.map((language,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {language.id}
                </TableCell>
                <TableCell>{language.name}</TableCell>
                <TableCell>{language.code}</TableCell>
                <TableCell>{language.direction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
     );
}
 
export default LanguageTable;