import Alert from '../common/Alert';
import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";

 const UpdateForm = () => {
  const {classes,handleClick,id,history} = useContext(CommonContext);
  const [name,setName] = useState('');
  const [direction,setDirection] = useState('');
  
  const onHandleSubmit =() =>{
    const language = {name,code:name.slice(0,3),direction}
    fetch(`http://localhost:8000/language/${id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(language)
    }).then(()=>{
      history.push('/')
      window.location.reload()
    })
  }
useEffect(() => {
    fetch(`http://localhost:8000/language/${id}`)
    .then(res => res.json())
    .then(data => {
        setName(data.name)
        setDirection(data.direction)
    }, [])
}, [id])
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
            className={classes.space}
            required
            onChange={(e)=>setDirection(e.target.value)}
             >
            <option>Select</option>
            <option>Left To Right</option>
            <option>Right To Left</option>
          </select>
        <button onClick={(e)=>handleClick("Language Updated SucessFuly!!!")} className={classes.addBtn}>Update</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default UpdateForm;