// /*eslint-disable*/
// import React, {useState, useEffect} from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";
// import { Info, AccountBox, House } from "@material-ui/icons";
// import Button from "components/CustomButtons/Button.js";
// import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
// import { useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { useTranslation } from "react-i18next";
// import { Select, MenuItem  } from '@material-ui/core';
// import moment from 'moment/min/moment-with-locales';
// import EmailIcon from '@material-ui/icons/Email';
// const useStyles = makeStyles(styles);

// export default function HeaderLinks(props) {
//   const classes = useStyles();
//   const auth = useSelector(state => state.auth);
//   const settings = useSelector(state => state.settingsdata.settings);
//   const languagedata = useSelector(state => state.languagedata);
//   const { i18n,t } = useTranslation();
//   const [loggedIn, setLoggedIn] = useState(false);
//   let history = useHistory();

//   const [langSelection, setLangSelection] = useState();
//   const [multiLanguage,setMultiLanguage] = useState();

//   const handleLanguageSelect = (event) => {
//     i18n.addResourceBundle(multiLanguage[event.target.value].langLocale, 'translations', multiLanguage[event.target.value].keyValuePairs);
//     i18n.changeLanguage(multiLanguage[event.target.value].langLocale);
//     setLangSelection(event.target.value);
//     moment.locale(multiLanguage[event.target.value].dateLocale);
//   };

//   useEffect(()=>{
//     if(languagedata.langlist){
//       for (const key of Object.keys(languagedata.langlist)) {
//         if(languagedata.langlist[key].langLocale === i18n.language){
//           setLangSelection(key);
//         }
//       }
//       setMultiLanguage(languagedata.langlist);
//     }

//   },[languagedata.langlist]);

//   useEffect(()=>{
//     if(auth.info && auth.info.profile){
//       setLoggedIn(true);
//     }else{
//       setLoggedIn(false);
//     }
//   },[auth.info]);

//   return (
//     <List className={classes.list}>
//       <ListItem className={classes.listItem}>
//         <Button
//           color="transparent"
//           className={classes.navLink}
//           onClick={(e) => { e.preventDefault(); history.push('/') }}
//         >
//           <House className={classes.icons} />{t('home')}
//         </Button>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//         <Button
//           color="transparent"
//           className={classes.navLink}
//           onClick={(e) => { e.preventDefault(); history.push('/bookings') }}
//         >
//           {loggedIn?
//             <AccountBox className={classes.icons} />
//             :
//             <AccountBox className={classes.icons} />
//           }

//           {loggedIn?
//             t('myaccount')
//             :
//            t('login_signup')
//           }
//         </Button>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//         <Button
//           color="transparent"
//           className={classes.navLink}
//           onClick={(e) => { e.preventDefault(); history.push('/about-us') }}
//         >
//           <Info className={classes.icons} />{t('about_us')}
//         </Button>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//         <Button
//           color="transparent"
//           className={classes.navLink}
//           onClick={(e) => { e.preventDefault(); history.push('/contact-us') }}
//         >
//         <EmailIcon className={classes.icons} />{t('contact_us')}
//         </Button>
//       </ListItem>
//       {settings && settings.FacebookHandle?
//       <ListItem className={classes.listItem}>
//         <Tooltip
//           id="instagram-facebook"
//           title={t('follow_facebook')}
//           placement={window.innerWidth > 959 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             color="transparent"
//             href={settings.FacebookHandle}
//             target="_blank"
//             className={classes.navLink}
//           >
//             <i className={classes.socialIcons + " fab fa-facebook"} />
//           </Button>
//         </Tooltip>
//       </ListItem>
//       :null}
//       {settings && settings.TwitterHandle?
//       <ListItem className={classes.listItem}>
//         <Tooltip
//           id="instagram-twitter"
//           title={t('follow_twitter')}
//           placement={window.innerWidth > 959 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             href={settings.TwitterHandle}
//             target="_blank"
//             color="transparent"
//             className={classes.navLink}
//           >
//             <i className={classes.socialIcons + " fab fa-twitter"} />
//           </Button>
//         </Tooltip>
//       </ListItem>
//       :null}
//       {settings && settings.InstagramHandle?
//       <ListItem className={classes.listItem}>
//         <Tooltip
//           id="instagram-twitter"
//           title={t('follow_instagram')}
//           placement={window.innerWidth > 959 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             href={settings.InstagramHandle}
//             target="_blank"
//             color="transparent"
//             className={classes.navLink}
//           >
//             <i className={classes.socialIcons + " fab fa-instagram"} />
//           </Button>
//         </Tooltip>
//       </ListItem>
//       :null}
//       <ListItem className={classes.listItem}>
//         {multiLanguage?
//         <Select
//           id="booking-type-native1"
//           className={classes.input}
//           value={langSelection}
//           onChange={handleLanguageSelect}
//           style={{backgroundColor:'#fff', marginTop:'8px',paddingLeft:'5px',borderRadius:'5px'}}
//         >
//           {
//             Object.keys(multiLanguage).map((key)=> <MenuItem key={key} value={key}>
//             {multiLanguage[key].langName}
//             </MenuItem>)
//           }
//         </Select>
//         :null}
//       </ListItem>
//     </List>
//   );
// }
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, animateScroll as scroll } from "react-scroll";
import { useStateContext } from "../../contexts/ContextProvider";

function HeaderLinks({ fontWeight, icons, title, href, colorInvert = false }) {
  const theme = useTheme();
  const { mode, currentColor } = useStateContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  // useEffect(() => {
  //   setActiveLink(window && window.location ? window.location.pathname : "");
  // }, []);

  const linkColor = colorInvert ? "text.primary" : "common.white";
   const styles = {
     nav: {
       a: {
         fontSize: "20px",
         fontWeight: "body",
         marginRight: "10px",
         cursor: "pointer",
         lineHeight: "1.2",
         transition: "all 0.15s",
         color: `${mode === "light" ? "black" : "#fff"}`,
         "&:hover": {
           color: "#00FFFF",
         },
         "&.active": {
           color: "#00FFFF",
         },
       },
     },
   };
  return (
    <Box
    as="nav"
      sx={styles.nav}
      // style={{
      //   textDecoration: "none",
      //   cursor: "pointer",
      //   fontSize: "20px",
      //   marginRight: "10px",
      //   display: "inline-block",
      //   color: `${mode === "light" ? "black" : "white"}`,
      //   "&:hover": {
      //     fontWeight: 700,
      //   },
      //   "&.active": {
      //     fontWeight: 700,
      //     color: "red",
      //   },
      // }}
    >
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {title}
      </Link>

      {/* <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          ".MuiPaper-root": {
            maxWidth: items.length > 12 ? 350 : 250,
            padding: 2,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
              <Button
                component={"a"}
                href={p.href}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color:
                    activeLink === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                {p.title}
                {p.isNew && (
                  <Box
                    padding={0.5}
                    display={"inline-flex"}
                    borderRadius={1}
                    bgcolor={"primary.main"}
                    marginLeft={2}
                  >
                    <Typography
                      variant={"caption"}
                      sx={{ color: "common.white", lineHeight: 1 }}
                    >
                      new
                    </Typography>
                  </Box>
                )}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Popover> */}
    </Box>
  );
}

HeaderLinks.propTypes = {
  title: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default HeaderLinks;
