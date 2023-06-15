import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from "react-router-dom";




import "./Dashbord.css";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const logout = () => {
  signOut(auth);
};

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user] = useAuthState(auth);
  const [admin,setAdmin] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  React.useEffect(() => {
    if (user && user.email) { 
      fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
        .catch(error => {
         
          console.error('Error fetching user data:', error);
        });
    }
  }, [user?.email]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
     {
      admin && <Box>
         <List>
      <ListItem disablePadding>
      <ListItemButton>
             <Link to="/dashboard/addTeacher" style={{textDecoration:'none', marginLeft:'20px'}}>
              Add Teacher
             </Link>
      </ListItemButton>
      </ListItem> 
     
      <ListItem disablePadding>
      <ListItemButton>
      <Link to="/dashboard/researchList" style={{textDecoration:'none', marginLeft:'20px'}}>
              Update Materials
            </Link> 
      </ListItemButton>
      
      </ListItem> 
      <ListItem disablePadding>
      <ListItemButton>
      <Link to="/dashboard/makeadmin" style={{textDecoration:'none', marginLeft:'20px'}}>
              Make Admin
            </Link> 
      </ListItemButton>
      
      </ListItem> 

  </List>

      </Box>
     
     }
     {/* logout */}
      <ListItem disablePadding>
      <ListItemButton>
      <Link to="/" style={{textDecoration:'none', marginLeft:'20px'}}>
              Logout
              {logout()}
            </Link> 
      </ListItemButton>
      
      </ListItem> 
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{'paddingBottom': '50px', 'paddingTop': '50px'}}>
           Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        
         <Outlet />
        </Typography>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
 
  window: PropTypes.func,
};

export default Dashboard;
