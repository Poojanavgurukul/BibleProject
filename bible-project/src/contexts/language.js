import { createContext } from "react";
import useFetch from "../customHook/useFetch";

export const LanguageContext = createContext();
const LanguageContextProvider = (props) => {
    const { data:languageData } = useFetch("http://localhost:8000/language")
    return ( 
        <LanguageContext.Provider value={{languageData}}>
            {props.children}
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;