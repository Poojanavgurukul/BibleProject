import Alert from '../common/Alert';
import { useContext } from "react";
import { useState } from "react";
import { BibleContext } from "../../contexts/bible";
import { CommonContext } from "../../contexts/commonContext";
import { LanguageContext } from "../../contexts/language";
import { VersionContext } from "../../contexts/version";

const AddForm = () => {
    const [languagename,setLanguageName] = useState('');
    const [versionname,setVersionName] = useState('');
    const {data:language} = useContext(LanguageContext);
    const {data:version} = useContext(VersionContext);
    const {data} = useContext(BibleContext);
    const {classes,handleClick} = useContext(CommonContext);
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        const bible = {
            languagename,
            versionname,
            versioncode:versionname.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),''),
            id:data.length+1
        }
        fetch('http://localhost:8000/bible',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(bible)
        }).then(()=>{
            window.location.reload();
        })
    }
    
    return ( 
       <div> 
            <form className={classes.box} onSubmit={onHandleSubmit}>
                <label>Language</label>
                <select
                className={classes.space}
                required
                value={languagename}
                onChange={(e)=>setLanguageName(e.target.value)}
                >
                    <option>Select</option>
                    {
                    language.map((element,index)=>(
                        <option key={index}>{element.name}</option>
                    ))
                    }
                </select>
                <label>Version Name</label>
                <select
                    required
                    className={classes.space}
                    value={versionname}
                    onChange={(e)=>setVersionName(e.target.value)}
                >
                    <option>Select</option>
                    {
                        version.map((elment,index)=>(
                            <option key={index}>{elment.name}</option>
                        ))
                    }
                </select>
                <button onClick={(e)=>handleClick("Bible Added SucessFuly!!!")} className={classes.addBtn}>Add</button>
            </form>
            <Alert />
        </div>
     );
}
 
export default AddForm;