import React, { createContext, useEffect, useState } from 'react'


export const AppContext = createContext();


function ContextApi({ children }) {

  // AppBar menu open and close
  const [open, setOpen] = useState(true);
  let apiLink = "https://dummyjson.com/products/";
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);




  useEffect(() => {
    if (window.screen.width < 768) {
      setOpen(false)
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  // Getting products api
  const getProducts = async () => {
    let data = await fetch(apiLink)
    data = await data.json()
    setRows(data.products)
  }


  // Adding product 
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenEditModal = (id) => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);


  return (
    <AppContext.Provider value={{
      open,
      handleDrawerClose,
      handleDrawerOpen,
      apiLink,
      rows,
      setRows,
      getProducts,
      openModal,
      setOpenModal,
      handleCloseModal,
      handleOpenModal,
      openEditModal,
      setOpenEditModal,
      handleOpenEditModal,
      handleCloseEditModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}



export default ContextApi
