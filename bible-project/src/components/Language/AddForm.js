import Alert from '../common/Alert';
import { useContext, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";
import { LanguageContext } from "../../contexts/language";

 const AddForm = () => {
  const {data} = useContext(LanguageContext);
  const {classes,handleClick,history} = useContext(CommonContext);
  const [name,setName] = useState('');
  const [direction,setDirection] = useState('');
  const onHandleSubmit =(e) =>{
    e.preventDefault()
    const language = {name,code:name.slice(0,3),direction,id:data.length+1}
    fetch('http://localhost:8000/language',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(language)
    }).then(()=>{
      history.push('/')
      window.location.reload();
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
          <label> Direction To Read </label>
          <select 
            value={direction}
            required
            className={classes.space}
            onChange={(e)=>setDirection(e.target.value)}
             >
            <option>Select</option>
            <option>Left To Right</option>
            <option>Right To Left</option>
          </select>
        <button onClick={(e)=>handleClick("Language added SucessFuly!!!")} className={classes.addBtn}>ADD</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default AddForm;