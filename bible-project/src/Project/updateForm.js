import Alert from '../components/common/Alert';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useContext, useEffect, useState } from "react";
import { CommonContext } from '../contexts/commonContext';
import { BookContext } from '../contexts/book';

 const UpdateForm = () => {
  const {classes,id} = useContext(CommonContext);
  const {isLoading,error,data:book} = useContext(BookContext)
  const [books,setBooks] = useState(book)
  const [name,setName] = useState('');
  const [sourcelanguage, setSourceLanguage] = useState('');
  const [targetlanguage,setTargetLanguage] = useState('');
  
  const onHandleCheck=(e)=>{
    let tempBook = books.map((item)=>{
      if(item.book===e.target.name){
        console.log(item.status, e.target.checked)
        item.status = e.target.checked
      }
      return item;
    })
    return setBooks(tempBook)
  }

  const handleUpdate=()=>{
    const project= {name,sourcelanguage,targetlanguage,books}
    fetch(`http://localhost:8000/project/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(project)
    })
  }

  useEffect(()=>{
    fetch(`http://localhost:8000/project/${id}`)
    .then(res => res.json())
    .then(data => {
      setSourceLanguage(data.sourcelanguage)
      setName(data.name)
      setTargetLanguage(data.targetlanguage)
      setBooks(data.books?data.books:book)
      })
  },[id,setSourceLanguage,setName, setBooks,book])
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return ( 
    <div>
    <form className={classes.box} onSubmit={handleUpdate}>
        {/* <button onClick={(e)=>handleClick("Version Updated SucessFuly!!!")} className={classes.addBtn}>Update</button> */}
        <label> Project Name </label>
                <input  
                    disabled
                    type='text'
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Source Language</label>
                <input 
                    disabled
                    type="text"
                    className={classes.space}
                    required
                    value={sourcelanguage}
                    onChange={(e)=>setSourceLanguage(e.target.value)}
                />
                <label>Target Language</label>
                <input 
                    disabled
                    type="text"
                    className={classes.space}
                    required
                    value={targetlanguage}
                    onChange={(e)=>setTargetLanguage(e.target.value)}
                />
              <Grid container>
              {
                books.map((item,index)=>(
                   <Grid item xs={2} key={index}>
                     <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox
                          color="primary"  
                          value={item.book}
                          name={item.book}
                          checked={item.status}
                          onChange={onHandleCheck} />}
                          label={item.abbreviation}
                        />
                      </FormGroup>
                  </Grid>
                ))  }
              </Grid>
          <button className={classes.addBtn} >Update</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default UpdateForm;