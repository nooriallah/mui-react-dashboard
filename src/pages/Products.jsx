import React, { useContext } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { Grid } from '@mui/material'

function Products() {



  return (
    <>
      <Grid container >
        <Grid item xs={12} >
          <ProductsTable />
        </Grid>
      </Grid>
    </>
  )
}

export default Products
