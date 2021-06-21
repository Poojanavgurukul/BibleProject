import { createContext } from "react";
import { useQuery } from 'react-query';

export const LanguageContext = createContext();
const LanguageContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('languageData', () =>
     fetch('http://localhost:8000/language').then(res =>
       res.json()
     )
   )
    return ( 
        <LanguageContext.Provider value={{isLoading,error,data}}>
            {props.children}
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;