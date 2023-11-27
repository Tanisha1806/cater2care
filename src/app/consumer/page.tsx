"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Box as JoyBox, Sheet, Table } from "@mui/joy";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/material/Typography";
// import Button from "@mui/joy/Button";
// import List from "@mui/joy";
// import Typography as JoyTypography from '@mui/joy/Typography';
import Home from "@mui/icons-material/Home";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
// import { Typography as MuiTypography } from "@mui/material";

// Import the Typography component from MUI Joy and alias it as JoyTypography
import { Typography as JoyTypography } from "@mui/joy";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const data = [
  { name: "Aditya Dubey", date: "2pm pickup" },
  { name: "Mrutunjay Kinagi", date: "3pm pickup" },
  // Add more items as needed
];

export default function StickyFooter() {
  // const [acceptStatus, setAcceptStatus] = React.useState({});
  const [acceptStatus, setAcceptStatus] = React.useState(
    Array(data.length).fill({})
  );
  // const [acceptStatusPerm, setAcceptStatusPerm] = React.useState({});
  // const [actionType, setActionType] = React.useState("");

  const [finalAction, setFinalAction] = React.useState("");

  // const handleAccept = (index) => {
  //   setFinalAction("accept");
  //   setAcceptStatus((prevStatus) => ({ ...prevStatus, [index]: "accepted" }));
  //   // setAcceptStatusPerm((prevStatus) => ({
  //   //   ...prevStatus,
  //   //   [index]: "accepted",
  //   // }));
  //   // setActionType("accept");
  //   setTimeout(() => {
  //     setAcceptStatus((prevStatus) => ({ ...prevStatus, [index]: undefined }));
  //   }, 5000);
  // };

  const handleAccept = (index: any) => {
    setAcceptStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = { action: "accepted" };
      return newStatus;
    });

    // setTimeout(() => {
    //   setAcceptStatus((prevStatus) => {
    //     const newStatus = [...prevStatus];
    //     newStatus[index] = {};
    //     return newStatus;
    //   });
    // }, 5000);
  };

  // const handleReject = (index) => {
  //   setFinalAction("reject");
  //   setAcceptStatus((prevStatus) => ({ ...prevStatus, [index]: "rejected" }));
  //   // setAcceptStatusPerm((prevStatus) => ({
  //   //   ...prevStatus,
  //   //   [index]: "rejected",
  //   // }));
  //   // setActionType("reject");
  //   setTimeout(() => {
  //     setAcceptStatus((prevStatus) => ({ ...prevStatus, [index]: undefined }));
  //   }, 5000);
  // };

  const handleReject = (index: any) => {
    setAcceptStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = { action: "rejected" };
      return newStatus;
    });

    // setTimeout(() => {
    //   setAcceptStatus((prevStatus) => {
    //     const newStatus = [...prevStatus];
    //     newStatus[index] = {};
    //     return newStatus;
    //   });
    // }, 5000);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Shri Vidya Orphanage
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"Shahu Nagar, Shivaji Circle"}
            {"Vijayapura, Karnataka, 586101"}
          </Typography>
          <Typography variant="body1">Since: 2014</Typography>
        </Container>

        <Container>
          <Typography variant="h4" component="h2" gutterBottom marginTop={5}>
            New Donation Requests
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <nav aria-label="main mailbox folders">
              <List>
                {data.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      <ListItemText primary={item.date} />
                      {acceptStatus[index]?.action === "accepted" && (
                        <Typography variant="body2" color="success">
                          Accepted
                        </Typography>
                      )}
                      {acceptStatus[index]?.action === "rejected" && (
                        <Typography variant="body2" color="error">
                          Rejected
                        </Typography>
                      )}
                      {acceptStatus[index]?.action !== "accepted" && (
                        <Stack spacing={2} direction="row">
                          <Button
                            variant="outlined"
                            onClick={() => handleAccept(index)}
                          >
                            Accept
                          </Button>
                          {acceptStatus[index]?.action !== "rejected" && (
                            <Button
                              variant="contained"
                              onClick={() => handleReject(index)}
                            >
                              Reject
                            </Button>
                          )}
                        </Stack>
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
            <Divider />
          </Box>

          <Typography variant="h4" component="h2" gutterBottom marginTop={5}>
            Donation History
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Aditya Dubey" />
                    <ListItemText primary="3rd Dec" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Aditya Dubey" />
                    <ListItemText primary="1st Dec" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
