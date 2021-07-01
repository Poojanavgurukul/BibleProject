import Alert from '../common/Alert';
import { useContext, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";
import { VersionContext } from '../../contexts/version';

const AddForm = () => {
    const {classes,handleClick} = useContext(CommonContext)
    const [name,setName] = useState('');
    const [revision,setRevision] = useState('');
    const {data} = useContext(VersionContext);
    const onHandleSubmit=()=>{
        const version = {name,code:name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),''),revision,id:data.length+1}
        fetch('http://localhost:8000/version',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(version)
        }).then(()=>{
            window.location.reload();
        })
    }
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
                <button onClick={(e)=>handleClick("Version Added SucessFuly!!!")} className={classes.addBtn}>Add</button>
            </form>
            <Alert />
        </div>
    );
}
 
export default AddForm;