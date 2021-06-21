import Alert from '../common/Alert';
import { useContext, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";
import { LanguageContext } from "../../contexts/language";

 const AddForm = () => {
  const {data,history} = useContext(LanguageContext);
  const {classes,handleClick} = useContext(CommonContext);
  const [name,setName] = useState('');
  const [code,setCode] = useState('');
  const [direction,setDirection] = useState('');
  const onHandleSubmit =() =>{
    const language = {name,code,direction,id:data.length+1}
    fetch('http://localhost:8000/language',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(language)
    }).then(()=>{
      history.push('/')
    })
  }
  return ( 
    <div>
    <form className={classes.box} onSubmit={onHandleSubmit}>
        <label> Language Name </label>
        <input  
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <label> Language Code </label>
          <input 
            type="text"
            value={code}
            className={classes.space}
            onChange={(e)=>setCode(e.target.value)}
            required
          />
          <label> Direction To Read </label>
          <input 
            type="text"
            value={direction}
            className={classes.space}
            onChange={(e)=>setDirection(e.target.value)}
            required
          />
        <button onClick={(e)=>handleClick("Language added SucessFuly!!!")} className={classes.addBtn}>ADD</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default AddForm;