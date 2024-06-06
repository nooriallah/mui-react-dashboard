import React, { createContext } from 'react'


export const AppContext = createContext();


function ContextApi({children}) {

  // AppBar menu open and close
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      
  return (
    <AppContext.Provider value={{open, handleDrawerClose, handleDrawerOpen}}>
        {children}
    </AppContext.Provider>
  )
}



export default ContextApi
