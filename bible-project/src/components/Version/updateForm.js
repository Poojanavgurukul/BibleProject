import Alert from '../common/Alert';
import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";

 const UpdateForm = () => {
  const {classes,handleClick,id} = useContext(CommonContext);
  const [name,setName] = useState('');
  const [revision,setRevision] = useState('');
  
  const onHandleSubmit =() =>{
    const version = {name,code:name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),''),revision}
    fetch(`http://localhost:8000/version/${id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(version)
    }).then(()=>{
      window.location.reload()
    })
  }
    useEffect(() => {
        fetch(`http://localhost:8000/version/${id}`)
        .then(res => res.json())
        .then(data => {
            setName(data.name)
            setRevision(data.revision)
        }, [])
    }, [id])
  return ( 
    <div>
    <form className={classes.box} onSubmit={onHandleSubmit}>
    <label> Version Name </label>
            <input  
                type='text'
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <label>Revision</label>
            <input 
                type="number"
                className={classes.space}
                required
                value={revision}
                onChange={(e)=>setRevision(e.target.value)}
            />
        <button onClick={(e)=>handleClick("Version Updated SucessFuly!!!")} className={classes.addBtn}>Update</button>
    </form>
    <Alert />
    </div>
  );
}
 
export default UpdateForm;