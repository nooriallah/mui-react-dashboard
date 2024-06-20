import React, { useState } from 'react'
import { Button, Card, CardContent, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';

function Personal() {
    const [state, setState] = useState({
        name: "Nooriallah",
        lastname: "Qayoumi",
        bio: "A full stack developer",
        phone: "0 773 77 17 16",
        email: "nooriallah18@gmail.com",
        url: "https://nooriallah.netlify.app",
        address: "Kabul, Afghanistan"
    });

    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setState({...state, [name]: value})
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card >
                        <CardContent>
                            <Stack spacing={3}>
                                <Typography variant='h5' mb={5} marginTop={3}>Personal Information</Typography>
                                <Divider />
                                <Stack direction={"row"} spacing={2} mt={4}>
                                    <Grid item xs={12}>
                                        <TextField label="Name" name='name' fullWidth variant="outlined" onChange={handleOnChange} value={state.name} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Location" name='lastname' fullWidth variant="outlined" onChange={handleOnChange} value={state.lastname} />
                                    </Grid>
                                </Stack>

                                <Stack>
                                    <TextField label="Bio" name='bio' fullWidth variant="outlined" onChange={handleOnChange} value={state.bio} />
                                </Stack>
                                <Stack>
                                    <TextField label="User Type" variant='outlined' select defaultValue={"admin"}>
                                        <MenuItem value={"admin"}>Admin</MenuItem>
                                        <MenuItem value={"user"}>User</MenuItem>
                                    </TextField>
                                </Stack>

                                <Stack alignItems={"start"}>
                                    <Button type='button'>Save</Button>
                                </Stack>

                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Stack spacing={3}>
                                <Typography variant='h5' mb={5} marginTop={3}>Contact Information</Typography>
                                <Divider />
                                <Stack direction={"row"} spacing={2} mt={4}>
                                    <Grid item xs={12}>
                                        <TextField label="Phone No." name='phone' fullWidth variant="outlined" onChange={handleOnChange} type='phone' value={state.phone} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="E-mail" name='email' fullWidth variant="outlined" onChange={handleOnChange} type='email' value={state.email} />
                                    </Grid>
                                </Stack>

                                <Stack>
                                    <TextField label="URL" name='url' fullWidth variant="outlined" onChange={handleOnChange} type='url' value={state.url} />
                                </Stack>
                                <Stack>
                                    <TextField label="Address" name='address' fullWidth variant="outlined" onChange={handleOnChange} type='address' value={state.address} />
                                </Stack>
                                <Stack alignItems={"end"}>
                                    <Button type='button'>Save</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Personal
