import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../context/ContextApi';
import { Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { CategoryOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};



export default function EditProductModal({ openEditModal, handleCloseEditModal }) {

    const { apiLink, rows } = useContext(AppContext)
    const [productsInfo, setProductsInfo] = useState({
        productName: "",
        price: "",
        category: "",
        brand: ""
    })



    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
        setProductsInfo({ ...productsInfo, [name]: value })
    }


    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        handleCloseEditModal()

        Swal.fire({
            title: "UPDATED",
            text: "Your product added successfuly updated",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        })
    }


    const getSingleProduct = async (id) => {
        fetch(apiLink + id)
            .then(data => data.json())
            .then(data => setProductsInfo(data))

        // setProductsInfo(data)
    }
    useEffect(() => {
        getSingleProduct(1)

        console.log(productsInfo.category);

    }, [])

    return (
        <div>
            <Modal
                open={openEditModal}
                onClose={handleCloseEditModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h5' mb={3}>Add new product</Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleOnSubmit}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <TextField
                                    value={productsInfo.title}
                                    onChange={handleOnChange}
                                    name='productName' fullWidth
                                    label="Product name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    value={productsInfo.price}
                                    onChange={handleOnChange}
                                    name='price'
                                    type='number' fullWidth
                                    label="Price ($)"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <PaidOutlinedIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    value={productsInfo.category}
                                    onChange={handleOnChange}
                                    name='category'
                                    select fullWidth
                                    label="Category"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <FilterAltOutlinedIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                >
                                    {[...new Set(rows.map(products => products.category))].map((category) => (
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    value={productsInfo.brand}
                                    onChange={handleOnChange}
                                    name='brand'
                                    select fullWidth
                                    label="Brand" variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <CategoryOutlined />
                                            </InputAdornment>
                                        )
                                    }}
                                >
                                    {[...new Set(rows.map(products => products.brand))].map((brand, i) => (
                                        <MenuItem key={i} value={brand}>
                                            {brand}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} >
                                <Button variant='outlined' type='submit' >UPDATE</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
