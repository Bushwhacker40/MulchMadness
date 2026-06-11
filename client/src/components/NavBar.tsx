import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router';


export default function NavBar() {
   return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Button color="inherit" component={Link} to="/">Mulch Madness</Button>
          <Button color="inherit" component={Link} to="/createaccount">Create Account</Button>
          <Button color="inherit" component={Link} to="/createorder">Create Order</Button>
          <Button color="inherit" component={Link} to="/crews">Crews</Button>
          <Button color="inherit" component={Link} to="/orders">Orders</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}