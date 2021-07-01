import Alert from '../common/Alert';
import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../contexts/commonContext";
import { LanguageContext } from '../../contexts/language';
import { VersionContext } from '../../contexts/version';

 const UpdateForm = () => {
  const {classes,handleClick,id} = useContext(CommonContext);
  const [languagename,setLanguageName] = useState('');
  const [versionname,setVersionName] = useState('');
  const {data:language} = useContext(LanguageContext);
  const {data:version} = useContext(VersionContext);
  
  const onHandleSubmit =() =>{
    const bible = {
      languagename,
      versionname,
      versioncode:versionname.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),''),
    }
    fetch(`http://localhost:8000/bible/${id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(bible)
    }).then(()=>{
      window.location.reload()
    })
  }
    useEffect(() => {
        fetch(`http://localhost:8000/bible/${id}`)
        .then(res => res.json())
        .then(data => {
          setLanguageName(data.languagename)
          setVersionName(data.versionname)
        }, [])
    }, [id])
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
          <button onClick={(e)=>handleClick("Bible Updated SucessFuly!!!")} className={classes.addBtn}>Add</button>
        </form>
    <Alert />
    </div>
  );
}
 
export default UpdateForm;