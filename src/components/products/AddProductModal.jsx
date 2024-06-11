import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../context/ContextApi';
import { Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { CategoryOutlined } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const categories = [
    {
        brand: "Apple",
        value: 'Mobile',
    },
    {
        brand: "Dell",
        value: 'Computer',
    },
    {
        brand: "HP",
        value: 'Device',
    },
    {
        brand: "Benz",
        value: 'Engin',
    },
    {
        brand: "Others...",
        value: 'Others...',
    },
];

export default function AddProductModal({ openModal, handleCloseModal }) {

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


    const handleAddProduct = () => {
        console.log(productsInfo);
    }


    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h5' mb={3}>Add new product</Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <TextField
                                    value={productsInfo.productName}
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
                                    {categories.map(cat => <MenuItem key={cat.value} value={cat.value}>{cat.value}</MenuItem>)}
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
                                    {categories.map(cat => <MenuItem key={cat.brand} value={cat.brand}>{cat.brand}</MenuItem>)}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} >
                                <Button variant='outlined' onClick={handleAddProduct}>Add new</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
