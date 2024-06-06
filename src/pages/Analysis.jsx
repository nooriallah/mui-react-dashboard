import { Card, CardActionArea, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import GeoChart from '../components/GeoChart'
import PieChart from '../components/PieChart'
import HBarChart from '../components/HBarChart'

function Analysis() {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item  xs={12} md={8} lg={4}>
          <Stack spacing={2} direction={'row'} >

            <Card sx={{ width: "250px", background: "darkblue", color: "#fff" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Visitors
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" >
                    500
                  </Typography>
                  <Typography variant='p' component={'span'} color={"#dfdfdf"}>Since last week</Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ width: "250px", backgroundColor: "darkgreen", color: "#FFF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Visitors
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    3200
                  </Typography>
                  <Typography variant='p' color={"#dfdfdf"}>Since last week</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>

          <Stack direction={"row"} spacing={2} marginTop={2}>
            <Card sx={{ width: "250px", backgroundColor: "darkblue", color: "#FFF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Visitors
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    2000
                  </Typography>
                  <Typography variant='p' color={"#dfdfdf"}>Since last week</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: "250px", backgroundColor: "darkgreen", color: "#FFF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Visitors
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    2300
                  </Typography>
                  <Typography variant='p' color={"#dfdfdf"}>Since last week</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ height: "235px", padding: "10px" }}>
            <HBarChart />
          </Card>
        </Grid>
      </Grid>

      <Grid container marginTop={2}>
        <Grid item xs={12} md={8}>
          <Stack >
            <Card sx={{ height: "300px", padding: "10px" }}>
              <GeoChart />
            </Card>
          </Stack>
        </Grid>

        <Grid item  xs={12} md={4}>
          <Stack >
            <Card sx={{ height: "300px", padding: "10px" }}>
              <PieChart />
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default Analysis
