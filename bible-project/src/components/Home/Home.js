import VerticalTabs from "./Tab";
import Header from "./Header";
import CommonContextProvider from "../../contexts/commonContext";
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()

const HomePage = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
            <Header />
        <CommonContextProvider>
            <VerticalTabs />
        </CommonContextProvider>
        </QueryClientProvider >
     );
}
 
export default HomePage;