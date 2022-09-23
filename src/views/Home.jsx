import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/pic1.png"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typewriter from "typewriter-effect";
import Container from "../components/container/Container";
import { useStateContext } from "../contexts/ContextProvider";

const images = [
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img1.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img4.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png",
      },
    ],
  },
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img13.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img10.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img7.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png",
      },
    ],
  },
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img6.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img24.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img17.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img12.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png",
      },
    ],
  },
];

function Home() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const { openModal, setOpenModal, mode, currentColor } = useStateContext();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: "repeat-x",
        position: "relative",
      }}
      id="home"
    >
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: "50%" }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                // background:
                //   "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
                // backgroundClip: "text",
                // textFillColor: "transparent"
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Turn your ideas into Reality!")
                    .start();
                }}
              />
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              theFront will make your product look modern and professional while
              saving you precious time.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
              marginTop={4}
            >
              <Link to="/addbookings" style={{ textDecoration: "none" }}>
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
                  onClick={() => setOpenModal(true)}
                  size="large"
                  variant="outlined"
                  fullWidth={isMd ? false : true}
                >
                  Book now
                </Button>
              </Link>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: "100%", md: "auto" }}
              >
                <Button
                  variant="contained"
                  component="a"
                  sx={{
                    textTransform: "none",
                    color: "white",
                  }}
                  color={currentColor}
                  target="blank"
                  size="large"
                  fullWidth={isMd ? false : true}
                  // href={"/home"}
                >
                  View pages
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <Box
            display={"flex"}
            width={"50rem"}
            left={"50%"}
            top={0}
            position={"absolute"}
           
          >
       
              <Box  marginY={10} marginX={1}>
             
                    <Box
                      component={"img"}
                      effect="blur"
                      src={
                        pic1
                      }
                
                      height={1}
                      width={1}
                      maxWidth={700}
                    />
                  </Box>
        
    
          </Box>
        </Box>
      </Box>
      <Box
        component={"svg"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
}

export default Home;
