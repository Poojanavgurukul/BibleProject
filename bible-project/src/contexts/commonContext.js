import { createContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    button: {
      margin: theme.spacing(1),
    },
    box:{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
      },
      space:{
          marginBottom:"0.5rem"
      },
      addBtn:{
          outline:"none",
          background:'#3f51b5',
          padding:'0.5rem',
          border:'none',
          color:'#fff',
          letterSpacing:'0.12rem',
          borderRadius:"4px",
          boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);"
      }
  }));

export const CommonContext = createContext();
const CommonContextProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [id,setId] = useState(null);
    const [openDialogBox, setOpenDialogBox] = useState(false);

    const [message,setMessage] = useState('')
    const classes = useStyles();
    const history= useHistory();
    const handleClick = (message) => {
        setOpen(true);
        setMessage(message);
    };
    const handleClicked = () => {
        setOpenDialog(true);
    };
    const handleClickedBox = (id) => {
        setId(id)
        setOpenDialogBox(true);
    };
     
    return ( 
        <CommonContext.Provider value={
            {
                open,
                message,
                setOpen,
                setOpenDialog,
                openDialog,
                setMessage,
                handleClick,
                handleClicked,
                classes,
                openDialogBox,
                handleClickedBox,
                setOpenDialogBox,
                id,
                history
            }
            }>
            {props.children}
        </CommonContext.Provider>
     );
}
 
export default CommonContextProvider;