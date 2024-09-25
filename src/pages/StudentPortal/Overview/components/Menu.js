import React from "react";
import { styled, Typography } from "@mui/material";
import { FormatBold, KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
const StyledMenu = styled((props) => (
  <Menu
    elevation={1}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
      zIndex: "9999999999",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
      zIndex: "99999999999",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    color: "rgb(20, 21, 34)",
    fontSize: 1,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 1,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        backgroundColor: "#193D66",
        color: "#FFFFFF",
        borderRadius: 12,
      },
    },
  },
}));
const MenuWeek = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="overview__activity__sortButton"
      >
        <div className="sortMenuHead">
          <p>This Week</p>
        </div>
        <KeyboardArrowDownIcon className="overview__activity__sortButton__icon" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>This Week</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>Last Week</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>Two Weeks Ago</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
export default MenuWeek;
