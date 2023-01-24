import { Card, CardContent, Container, TextField, Stack, CardHeader, CardActions, Link, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const sx = {
    background: 'linear-gradient(31deg, rgba(24,28,37,1) 26%, rgba(255,2,168,1) 100%)'
}

export default function LoginPage() {
    const [showPassword,setShowPassword] = useState(false);
    return (
        <>
            <Container sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Card >
                    <CardHeader title="Login to" subheader="Dinner Datting App" />
                    <CardContent>
                        <Stack direction="column" spacing={2}>
                        <TextField label="Email" variant="outlined" />
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={e=>setShowPassword(!showPassword)}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <LoadingButton variant="contained" color="success" size="large">
                            Login
                        </LoadingButton>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Link underline='hover' href='#'>Forgot password ?</Link>
                        <Link underline='hover' href='/register'>Create account</Link>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}
