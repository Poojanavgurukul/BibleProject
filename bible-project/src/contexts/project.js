import { createContext } from "react";
import { useQuery } from "react-query";

export const ProjectContext = createContext();
const ProjectContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('projectData', () =>
    fetch('http://localhost:8000/project').then(res =>
      res.json()
    )
    )
    return ( 
        <ProjectContext.Provider value={{isLoading,error,data}}>
            {props.children}
        </ProjectContext.Provider>
     );
}
 
export default ProjectContextProvider;