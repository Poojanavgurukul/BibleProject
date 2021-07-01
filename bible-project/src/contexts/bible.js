import { createContext } from "react";
import { useQuery } from 'react-query';

export const BibleContext = createContext();
const BibleContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('bibleData', () =>
     fetch('http://localhost:8000/bible').then(res =>
       res.json()
     )
   )
    return ( 
        <BibleContext.Provider value={{isLoading,error,data}}>
            {props.children}
        </BibleContext.Provider>
     );
}
 
export default BibleContextProvider;