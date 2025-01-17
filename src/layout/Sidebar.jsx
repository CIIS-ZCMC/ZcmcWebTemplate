import { Box, Stack, styled, Typography, useTheme } from "@mui/joy";
import ProfileAndSignout from "../component/ProfileAndSignout";
import BrandLogo from "../component/Sidebar/BrandLogo";
import { sidebarRoutes } from "../Routes/PageRoutes";
import Report from "../component/Report";
import SidebarMenuList from "../component/Sidebar/SidebarMenuList";

function Sidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Stack p={{ xs: 1.5, sm: 2.5 }}>
        <BrandLogo />
        <Stack mt={4} gap={1}>
          <SidebarMenuList menus={sidebarRoutes} />
        </Stack>
      </Stack>
      <Stack gap={2} p={{ xs: 1.5, sm: 2.5 }}>
        <Report />
        <ProfileAndSignout />
      </Stack>
    </Box>
  );
}

export default Sidebar;
