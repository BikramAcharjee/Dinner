import { Box, Button, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <Box className="header">
            <Container sx={{height:'100%'}}>
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{height:'100%'}}
                >
                    <Grid item xs={12} sm={8}>
                        <Stack spacing={2} direction="column" alignItems={{xs:"center",sm:'flex-start'}}>
                            <Typography component="label" variant="h2">Welcome to,<br /> Dinner app</Typography>
                            <Typography component="p" sx={{textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia, ab facere reprehenderit sint doloribus, modi quibusdam, quidem quae omnis quaerat qui. Debitis eveniet cum, nemo sit impedit corrupti ducimus!
                            </Typography>
                            <Button component={Link} to="login" size="large" variant='contained' color="secondary">Get Started</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box className="animate">
                            <img src='/images/header.png' alt='dinner' width={350} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
