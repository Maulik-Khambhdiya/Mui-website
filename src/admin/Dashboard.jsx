import * as React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import { Button } from "@mui/material";

const drawerWidth = 240;

const Dashboard = ({ children }) => {
  const location = useLocation();

  const icon = [
    <DashboardIcon sx={{ fontSize: "32px" }} />,
    <LocalOfferIcon sx={{ fontSize: "32px" }} />,
    <DoubleArrowIcon sx={{ fontSize: "32px" }} />,
    <CategoryIcon sx={{ fontSize: "32px" }} />,
    <BedroomParentIcon sx={{ fontSize: "32px" }} />,
    <StorefrontIcon sx={{ fontSize: "32px" }} />,
  ];

  const arrayName = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Offer Section", path: "/offersection" },
    { name: "Navigation Menu", path: "/navmenu" },
    { name: "Furniture By Category", path: "/furniturecategory" }, 
    { name: "Specific Items", path: "/specific_item" },
    { name: "Best Seller", path: "/bestsellerproduct" },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "black" }} />
      <Divider />
      <List>
        {arrayName.map((text, index) => {
          const isActive = location.pathname === text.path;
          return (
            <ListItem key={text.name} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={text.path}
                sx={{
                  backgroundColor: isActive ? "black" : "transparent",
                  color: isActive ? "white" : "black",
                  "& .MuiListItemIcon-root": {
                    color: isActive ? "white" : "inherit",
                  },
                  ":hover": {
                    backgroundColor: "black",
                    color: "white",
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
                onClick={handleDrawerClose}
              >
                <ListItemIcon>{icon[index]}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{ color: "white", cursor: "pointer" }}
              variant="h6"
              noWrap
              component={RouterLink}
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Student Record Dashboard
            </Typography>

            <Button
              component={RouterLink}
              to="/"
              sx={{
                color: "white",
                ":hover": {
                  backgroundColor: "ButtonShadow",
                  color: "black",
                },
              }}
            >
              <LogoutIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
