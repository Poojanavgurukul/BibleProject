import { createContext } from "react";
import { useQuery } from "react-query";

export const BookContext = createContext()
const BookContextProvider = (props) => {
    const { isLoading, error, data} = useQuery('bibleData', () =>
    fetch('http://localhost:8000/book').then(res =>
      res.json()
    )
  )
    return ( 
        <BookContext.Provider value={{isLoading,error,data}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;