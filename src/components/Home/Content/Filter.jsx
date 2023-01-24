import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Stack } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Filter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='inherit' className='rounded-2' elevation={0}>
                    <Toolbar>
                        <Typography>Filter</Typography>
                        <Stack direction={{sm:"row",xs:'column'}} justifyContent="space-evenly" sx={{width:'100%',ml:2}}>
                            <FormControl size="small" sx={{width:100}}>
                                <InputLabel>Age</InputLabel>
                                <Select
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>0 - 20</MenuItem>
                                <MenuItem value={20}>20 - 40</MenuItem>
                                <MenuItem value={30}>40 - 60</MenuItem>
                                <MenuItem value={40}>60 - 80</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl size="small" sx={{width:100}}>
                                <InputLabel>Budget</InputLabel>
                                <Select
                                value={age}
                                label="Budget"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>0 - 20</MenuItem>
                                <MenuItem value={20}>20 - 40</MenuItem>
                                <MenuItem value={30}>40 - 60</MenuItem>
                                <MenuItem value={40}>60 - 80</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl size="small" sx={{width:100}}>
                                <InputLabel>Location</InputLabel>
                                <Select
                                value={age}
                                label="Location"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>0 - 20</MenuItem>
                                <MenuItem value={20}>20 - 40</MenuItem>
                                <MenuItem value={30}>40 - 60</MenuItem>
                                <MenuItem value={40}>60 - 80</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
