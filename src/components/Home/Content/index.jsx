import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Grid, Stack } from '@mui/material'
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import UserCard from './Card'
import Filter from './Filter'
import './style.css';

export default function Content() {
    const [totalPost,setTotalPost] = useState(6);
    const [loading,setLoading] = useState(false);
    const loadmore = () => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false)
            setTotalPost(totalPost + 6)
        },2000)
    }
    return (
        <>
        <Box className="contentBox">
            <Container>
                <Filter />
                <Grid container spacing={3}>
                    {Array(totalPost).fill(1).map(item => <Grid key={nanoid()} item xs={12} sm={4}><UserCard /></Grid>)}
                </Grid>
                <Stack>
                    <LoadingButton loading={loading} onClick={loadmore}>Load more..</LoadingButton>
                </Stack>
            </Container>
        </Box>
        </>
    )
}
