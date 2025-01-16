import { Outlet } from "react-router-dom";
import { Box, Grid, useTheme } from "@mui/joy";
import Sidebar from "./Sidebar";
import PageTitle from "../component/PageSetup/PageTitle";
import usePageTitleHook from "../hooks/PageTitleHook";

function Layout() {
  const theme = useTheme();
  const color = theme.palette.custom;
  const { title, description } = usePageTitleHook();

  return (
    <Grid container sx={{ maxHeight: "100vh" }}>
      {/* Sidebar */}
      <Grid
        item="item" // use this format rather just [item] it result warning of ["Received `true` for a non-boolean attribute `item`."]
        xs={12} // Full width on extra small screens
        sm={4} // 4/12 width on small screens
        md={3} // 3/12 width on medium screens
        lg={2} // 2/12 width on large screens
        sx={{
          position: "fixed", // Make sidebar fixed
          top: 0,
          left: 0,
          bottom: 0,
          height: "100vh",
          backgroundColor: color.main,
        }}
      >
        <Sidebar />
      </Grid>

      {/* Outlet is where the child routes will be rendered */}
      <Grid
        item="item" // use this format rather just [item] it result warning of ["Received `true` for a non-boolean attribute `item`."]
        xs={12} // Full width on extra small screens
        sm={8} // 8/12 width on small screens
        md={9} // 9/12 width on medium screens
        lg={10} // 10/12 width on large screens
        p={4}
        pt={3}
        sx={{
          marginLeft: { sm: "33.33%", md: "25%", lg: "16.67%" }, // Adjust margin based on sidebar width
          backgroundColor: color.lightBg,
          height: "100vh", // Ensure the main content area fills the screen
          overflowY: "auto", // Allow scrolling if content overflows
        }}
      >
        <Box>
          <PageTitle title={title} description={description} />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Layout;
