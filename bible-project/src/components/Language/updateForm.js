import Alert from '../common/Alert';
import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";

 const UpdateForm = () => {
  const {classes,handleClick,id,history} = useContext(CommonContext);
  const [name,setName] = useState('');
  const [code,setCode] = useState('');
  const [direction,setDirection] = useState('');
  
  const onHandleSubmit =() =>{
    const language = {name,code,direction}
    fetch(`http://localhost:8000/language/${id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(language)
    }).then(()=>{
      history.push('/')
    })
  }
useEffect(() => {
    fetch(`http://localhost:8000/language/${id}`)
    .then(res => res.json())
    .then(data => {
        setName(data.name)
        setCode(data.code)
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
        <button onClick={(e)=>handleClick("Language Updated SucessFuly!!!")} className={classes.addBtn}>Update</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default UpdateForm;