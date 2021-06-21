import { createContext } from "react";
import { useQuery } from 'react-query';
import { useHistory } from "react-router-dom";


export const LanguageContext = createContext();
const LanguageContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('languageData', () =>
     fetch('http://localhost:8000/language').then(res =>
       res.json()
     )
   )
   const history = useHistory()

    return ( 
        <LanguageContext.Provider value={{isLoading,error,data,history}}>
            {props.children}
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;