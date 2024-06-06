import React from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { Grid, Stack } from '@mui/material'

function products() {
  return (
    <>
      <Grid container >
        <Grid item xs={12} >
          <Stack>
            <ProductsTable />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default products
