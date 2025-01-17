import { Box, Stack, Typography } from "@mui/joy";
import SidebarMenu from "../SidebarMenu";

const SidebarMenuList = ({ menus }) => {
  return (
    <Stack mt={4} gap={1}>
      {menus?.map((props, key) => {
        const { path, name, icon } = props;

        return (
          <SidebarMenu to={path} key={key} {...props}>
            <Box
              sx={{
                fontSize: { xs: 16, md: 20 },
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
            </Box>
            <Typography color="white" fontSize={{ xs: 12, md: 14 }}>
              {name}
            </Typography>
          </SidebarMenu>
        );
      })}
    </Stack>
  );
};

export default SidebarMenuList;
