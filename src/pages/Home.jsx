
import { Box, Card, CardActionArea, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import './homeStyle.scss'
import AccordionDash from '../components/AccordionDash';
import { BarChart } from '../components/BarChart';
function Home() {
  return (
    <>
      <Grid container spacing={3} >

        <Grid item xs={8} >
          <Stack spacing={2} direction={'row'} >
            <Card sx={{ width: "49%", background: "darkblue", color: "#fff" }}>
              <CardActionArea>
                <CardContent>
                  <ShoppingBagOutlinedIcon />
                  <Typography gutterBottom variant="h4" component="div" marginBottom={3}>
                    500.00$
                  </Typography>
                  <Typography variant='p' component={'span'} color={"#dfdfdf"}>Total Income</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: "49%", backgroundColor: "darkgreen", color: "#FFF" }}>
              <CardActionArea>
                <CardContent>
                  <CreditCardOutlinedIcon />
                  <Typography gutterBottom variant="h4" component="div">
                    4849.00$
                  </Typography>
                  <Typography variant='p' color={"#dfdfdf"}>Total Orders</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={4}  >
          <Stack spacing={3} >

            <Card>
              <CardActionArea>
                <CardContent sx={{ display: "flex", alignItems: "center", background: "darkblue", color: "white", padding: "2px 10px" }}>
                  <StoreIcon />
                  <Stack marginLeft={2}>
                    <Typography variant='h6' component={"h6"} >
                      200K
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                      Total income
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card>
              <CardActionArea>
                <CardContent sx={{ display: "flex", alignItems: "center", background: "black", color: "white", padding: "2px 10px" }}>
                  <StoreIcon />
                  <Stack marginLeft={2}>
                    <Typography variant='h6' component={"h6"} >
                      200K
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                      Total income
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>




          </Stack>
        </Grid>

      </Grid >

      <Box height={500} marginTop={3} >
        <Grid container spacing={3} >

          <Grid item xs={8}  >

            <Card >
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={4} >
            <Stack>
              <Card >
                <CardContent>
                  <AccordionDash />
                </CardContent>
              </Card>


            </Stack>
          </Grid>
        </Grid>
      </Box>


    </>
  )
}

export default Home
