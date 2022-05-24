import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles"
import { RiLoginCircleFill } from "react-icons/ri";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // make sets of 6 tags and make a list of them

 // style the StyledListItem
  const StyledListItem = styled(ListItem)({
    padding:"20px 20px",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      borderLeft: "4px solid black",
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h3" sx={{ textAlign: "center", mt: 3 }}>
        <CloseIcon onClick={toggleDrawer(anchor, false)} /> Menu
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1,alignItems:'center',justifyContent:'center' }}>
        <StyledListItem>
          <Link to="/seller/login">
            {" "}
            <Typography variant="h6">
              {" "}
              <RiLoginCircleFill /> Check Present Stock Price
            </Typography>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/seller/login" >
            {" "}
            <Typography variant="h6">
              {" "}
              <RiLoginCircleFill /> Predict Future Stock Price
            </Typography>
          </Link>
          </StyledListItem>
          <StyledListItem>
          <Link to="/seller/login" >
            {" "}
            <Typography variant="h6">
              {" "}
              <RiLoginCircleFill /> About Us
            </Typography>
          </Link>
          </StyledListItem>
          <StyledListItem>
          <Link to="/seller/login" >
            {" "}
            <Typography variant="h6">
              {" "}
              <RiLoginCircleFill /> Budget Profile
            </Typography>
          </Link>
        </StyledListItem>
      
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Typography
            sx={{ mr: 2.5, cursor: "pointer" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Typography>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
