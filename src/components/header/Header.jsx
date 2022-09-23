import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../../assets/img/logo138x75black.png";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateContext } from "../../contexts/ContextProvider";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import HeaderLinks from "./HeaderLinks";

export function Header({ pages, onSidebarOpen, colorInvert = false }) {
  const theme = useTheme();
  console.log(theme.palette);
  const { mode } = theme.palette;
  const linkColor = colorInvert ? "common.white" : "text.primary";

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const [activeLink, setActiveLink] = useState("");
  const { openModal, setOpenModal, currentColor, setCurrentColor } =
    useStateContext();
  console.log(currentColor);
  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };
  const hasActiveLink = () => pages.find((i) => i.href === activeLink);
  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  // const [activeLink, setActiveLink] = useState("");
  // useEffect(() => {
  //   setActiveLink(window && window.location ? window.location.pathname : "");
  // }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box component={"img"} fontSize={40} src={logo} height={1} width={1} />
      </Box>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
          {pages.map((p, i) => (
            <HeaderLinks
              fontWeight={hasActiveLink() ? 700 : 400}
              key={i}
              title={p.title}
              href={p.href}
              icons={p.icons}
              colorInvert={colorInvert}
            />
          ))}
        </Box>
        {/* <Box marginLeft={4}>
          <HeaderLinks
            title={"Company"}
            id={"company-pages"}
            items="companyPages"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <HeaderLinks
            title={"Account"}
            id={"account-pages"}
            items="accountPages"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <HeaderLinks
            title={"Pages"}
            id={"secondary-pages"}
            items="secondaryPages"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <HeaderLinks
            title={"Blog"}
            id={"blog-pages"}
            items="blogPages"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <HeaderLinks
            title={"Portfolio"}
            id={"portfolio-pages"}
            items="portfolioPages"
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button
              component="a"
              sx={{
                marginRight: "5px",
                textTransform: "none",
                // color: currentColor,
                // borderColor: currentColor,
                // "&:hover": {
                //   borderColor: currentColor,
                //   boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
                // },
              }}
              color={currentColor}
              target="blank"
              onClick={() => setOpenModal(true)}
              size="large"
              variant="outlined"
            >
              Sign in
            </Button>
          </Link>
          <Button
            variant="contained"
            component="a"
            sx={{
              textTransform: "none",
              color: "white",
              background: currentColor,
              "&:hover": {
                background: currentColor,
              },
            }}
            color={currentColor}
            target="blank"
            size="large"
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            margin: "2px",
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.array,
  colorInvert: PropTypes.bool,
};

export default Header;
