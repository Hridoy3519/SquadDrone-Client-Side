import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouteMatch } from "react-router";
import { NavLink, Switch, Route } from "react-router-dom";
import { Button } from "@mui/material";
import MakePayment from "../MakePayment/MakePayment";
import MyOrders from "../MyOrders/MyOrders";
import GiveReviews from "../GiveReviews/GiveReviews";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";

const drawerWidth = 200;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { logOut, isAdmin } = useAuth();

  console.log(isAdmin);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {!isAdmin && (
          <Box>
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Home
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={`${url}/makePayment`}
            >
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Make Payment
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={`${url}/myOrders`}>
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                My Orders
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={`${url}/giveReviews`}
            >
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Give Reviews
              </Button>
            </NavLink>
            <Button onClick={logOut} sx={{ width: 130, mb: 2 }} variant="text">
              Log Out
            </Button>
          </Box>
        )}
        {isAdmin && (
          <Box>
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Home
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={`${url}/manageOrders`}>
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Manage Orders
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button sx={{ width: 130, mb: 2 }} variant="text">
                Make Admin
              </Button>
            </NavLink>
            <Button onClick={logOut} sx={{ width: 130, mb: 2 }} variant="text">
              Log Out
            </Button>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/makePayment`}>
            <MakePayment />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/giveReviews`}>
            <GiveReviews />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageAllOrders/>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
