import Alert from '../components/common/Alert';
import { useContext, useState } from "react";
import { ProjectContext } from '../contexts/project';
import { BookContext } from '../contexts/book';
import { CommonContext } from '../contexts/commonContext';

const AddForm = () => {
    const {classes,handleClick} = useContext(CommonContext)
    const [name,setName] = useState('');
    const [sourcelanguage, setSourceLanguage] = useState('');
    const [targetlanguage,setTargetLanguage] = useState('');
    const {data} = useContext(ProjectContext);
    const {data:book} = useContext(BookContext);
    const onHandleSubmit=()=>{
        const project = {name,sourcelanguage,targetlanguage,book,id:data.length+1}
        fetch('http://localhost:8000/project',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(project)
        }).then(()=>{
            window.location.reload();
        })
    }
    return (  
        <div>
            <form className={classes.box} onSubmit={onHandleSubmit}>
                <label> Project Name </label>
                <input  
                    type='text'
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Source Language</label>
                <input 
                    type="text"
                    className={classes.space}
                    required
                    value={sourcelanguage}
                    onChange={(e)=>setSourceLanguage(e.target.value)}
                />
                <label>Target Language</label>
                <input 
                    type="text"
                    className={classes.space}
                    required
                    value={targetlanguage}
                    onChange={(e)=>setTargetLanguage(e.target.value)}
                />
                <button onClick={(e)=>handleClick("Project Added SucessFuly!!!")} className={classes.addBtn}>Add</button>
            </form>
            <Alert />
        </div>
    );
}
 
export default AddForm;