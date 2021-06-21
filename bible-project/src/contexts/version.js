import { createContext } from "react";
import { useQuery } from "react-query";

export const VersionContext = createContext();
const VersionContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('languageData', () =>
     fetch('http://localhost:3030/version').then(res =>
       res.json()
     )
   )
    return ( 
        <VersionContext.Provider value={{isLoading,error,data}}>
            {props.children}
        </VersionContext.Provider>
     );
}
 
export default VersionContextProvider;