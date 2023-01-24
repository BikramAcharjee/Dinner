import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function UserCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box className="py-3">
            <Card>
            <CardMedia
                component="img"
                height="454"
                image="/user/user1.jpg"
                alt="Paella dish"
            />
            <Box sx={{position:'relative'}}>
                <Box className="userDetails">
                    <List
                    sx={{ width: '100%', maxWidth: 360 }}
                    aria-label="contacts"
                    >
                    <ListItem disablePadding>
                        <ListItemText primary="Chelsea Otakan" primaryTypographyProps={{sx:{fontSize:35,color:'yellow'}}} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <OnlinePredictionOutlinedIcon color='success' />
                        </ListItemIcon>
                        <ListItemText primary="Online" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LocationOnOutlinedIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="154 km distance" />
                    </ListItem>
                    </List>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <IconButton sx={{border:'1px solid yellow'}}>
                                <StarBorderIcon sx={{fontSize:40}} color='warning' />
                            </IconButton>
                            <IconButton sx={{border:'1px solid aqua'}}>
                                <FavoriteIcon sx={{fontSize:50}} color='error' size="large" />
                            </IconButton>
                            <IconButton sx={{border:'1px solid red'}}>
                                <DoDisturbAltIcon sx={{fontSize:40}} color='error' size="large" />
                            </IconButton>
                        </Stack>
                    </CardContent>
                </Box>
            </Box>
            </Card>
        </Box>
    );
}