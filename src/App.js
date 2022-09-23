import React, { useRef, useEffect, useMemo } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";
import { LandingPage, MainComponent } from "./views";
import appstore from "./assets/img/appstore.png";
import playstore from "./assets/img/playstore.png";
import { Container } from "./components";
import { Box, IconButton, Tooltip, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useStateContext } from "./contexts/ContextProvider";
import { ThemeSettings } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import AuthLoading from './views/AuthLoading';
// import { Provider } from "react-redux";
// import { FirebaseProvider, store } from "common";
// import { FirebaseConfig } from './config/FirebaseConfig';
import { GoogleMapApiConfig } from "./config/GoogleMapApiConfig";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AppCat } from "./config/AppCat";
import Page from "./components/Page";
import { LoginPage, AddBookings } from "./views";
i18n.use(initReactI18next).init({
  resources: {},
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
  },
});

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

var hist = createBrowserHistory();

function App() {
  const theme = useTheme();
  const {
    openModal,
    themeSettings,
    setThemeSettings,
    currentColor,
  } = useStateContext();
  console.log(currentColor);
  const loaded = useRef(false);
  if (typeof window !== "undefined" && !loaded.current && !window.google) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=" +
          GoogleMapApiConfig +
          "&libraries=geometry,drawing,places",
        document.querySelector("head"),
        "google-maps"
      );
    }
    loaded.current = true;
  }

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);
  console.log(currentColor);
  return (
    // <Provider store={store}>
    //   <FirebaseProvider config={FirebaseConfig} appcat={AppCat}>
    //     <AuthLoading>
    <>
      <Box position={"fixed"} left={20} bottom={20} style={{ zIndex: "1000" }}>
        {/* <TooltipComponent content="Settings" position="Top"> */}
        <Box
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={"img"} style={{ width: "30%" }} src={appstore} />
          <Box component={"img"} style={{ width: "35%" }} src={playstore} />
        </Box>
      </Box>
      <Box position={"fixed"} right={10} bottom={20} style={{ zIndex: "1000" }}>
        <Tooltip title="Setting" placement="top" arrow>
          <IconButton
            sx={{
              marginRight: "5px",
              textTransform: "none",
              background: currentColor,
              // color: currentColor,
              // borderColor: currentColor,
              "&:hover": {
                background: currentColor,
                boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
              },
            }}
            onClick={() => setThemeSettings(true)}
          >
            <SettingsIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>
      {themeSettings && <ThemeSettings />}

      <Router>
        <Routes history={hist}>
          {/* <ProtectedRoute exact component={BookingHistory} path="/bookings" permit={"rider,admin,driver,fleetadmin"} />
              <ProtectedRoute exact component={MyProfile} path="/profile" permit={"rider,admin,driver,fleetadmin"} />
              <ProtectedRoute exact component={Dashboard} path="/dashboard" permit={"admin,fleetadmin"} />
              <ProtectedRoute exact component={CarTypes} path="/cartypes" permit={"admin"} />
              <ProtectedRoute exact component={CancellationReasons} path="/cancelreasons" permit={"admin"} />
              <ProtectedRoute exact component={AddBookings} path="/addbookings" permit={"admin"} />
              <ProtectedRoute exact component={Promos} path="/promos" permit={"admin"} />
              <ProtectedRoute exact component={Riders} path="/riders" permit={"admin"} />
              <ProtectedRoute exact component={Drivers} path="/drivers" permit={"admin,fleetadmin"} />
              <ProtectedRoute exact component={CreateAdmin} path="/alladmin" permit={"admin"} />
              <ProtectedRoute exact component={FleetAdmins} path="/fleetadmins" permit={"admin"} />
              <ProtectedRoute exact component={DriverEarning} path="/driverearning" permit={"admin,fleetadmin"} />
              <ProtectedRoute exact component={Notifications} path="/notifications" permit={"admin"} />
              <ProtectedRoute exact component={Earningreports} path="/earningreports" permit={"admin"} />
              <ProtectedRoute exact component={AddMoney} path="/addtowallet" permit={"admin"} />
              <ProtectedRoute exact component={Withdraws} path="/withdraws" permit={"admin"} />
              <ProtectedRoute exact component={Settings} path="/settings" permit={"admin"} />
              <ProtectedRoute exact component={AppInformation} path="/appinfo" permit={"admin"} />
              <ProtectedRoute exact component={LanguageSetting} path="/languagesetting" permit={"admin"} />     
              <Route path="/contact-us" component={ContactUs} />                 
              <Route path="/about-us" component={AboutUs} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />*/}
          <Route path="/" element={<MainComponent />}>
            <Route path="signin" element={<LoginPage />} />
            <Route path="addbookings" element={<AddBookings />} />
          </Route>
        </Routes>
        {openModal ? (
          <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/addbookings" element={<AddBookings />} />
          </Routes>
        ) : null}
      </Router>
    </>
  );
}

export default App;
