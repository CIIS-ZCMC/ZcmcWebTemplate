import {
  Avatar,
  Box,
  Divider,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/joy";
import { sidebarRoutes } from "../Routes/PageRoutes";
import { isActive } from "../Utils/PathChecker";
import { Link } from "react-router-dom";
import BrandLogo from "../component/Sidebar/BrandLogo";
import usePageTitleHook from "../hooks/PageTitleHook";
import { GoReport } from "react-icons/go";
import useUserHook from "../hooks/UserHook";
import { BiPowerOff } from "react-icons/bi";

function Sidebar() {
  const theme = useTheme();
  const color = theme.palette.custom;
  const { user } = useUserHook();
  const { setTitle, setDescription } = usePageTitleHook();

  const CustomLink = styled(({ ...props }) => <Link {...props} />)(
    ({ theme, path }) => ({
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2), // Adjusted for better spacing
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
      textDecoration: "none",
      color: "white",
      fontWeight: isActive(path.replace("/", "")) ? 600 : 400,
      backgroundColor: isActive(path.replace("/", ""))
        ? color.active
        : "transparent",
      borderRadius: 10,
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: color.hover || "rgba(255, 255, 255, 0.1)",
      },
    })
  );

  // SIDEBAR CONTAINER
  const CustomBox = styled(({ ...props }) => <Box {...props} />)(
    ({ theme }) => ({
      backgroundColor: color.light,
      borderRadius: 10,
      padding: `${theme.spacing(2)}`,
    })
  );

  // LOGOUT
  const logout = () => {
    clearLocalStorage();
    window.location.href = BASE_URL.production_landing_page;
  };

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
          {sidebarRoutes?.map(({ path, name, description, icon }, key) => (
            <CustomLink
              to={path}
              path={path}
              key={key}
              onClick={() => {
                setTitle(name);
                setDescription(description);
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: 16, md: 20 }, // Responsive font size
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {icon}
              </Box>
              <Typography color="white" fontSize={{ xs: 12, md: 14 }}>
                {name}
              </Typography>
            </CustomLink>
          ))}
        </Stack>
      </Stack>
      <Stack gap={2} p={{ xs: 1.5, sm: 2.5 }}>
        <CustomBox>
          <Typography
            sx={{ color: "white" }}
            fontSize={15}
            fontWeight={600}
            mb={1}
          >
            Help and support
          </Typography>
          <Typography
            sx={{ color: "white" }}
            fontSize={12}
            fontWeight={400}
            mb={2}
          >
            Let us know about your experience. Your feedback is invaluable in
            ensuring the stability of the new PR Monitoring System.
          </Typography>
          <Link>
            <Typography
              sx={{
                display: "flex",
                color: "white",
                textDecoration: "none",
                alignItems: "center",
                gap: 1,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Report an issue <GoReport />
            </Typography>
          </Link>
        </CustomBox>
        <CustomBox>
          <Stack gap={1.5}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Avatar sx={{ border: 2, borderColor: "white" }} />
              <Stack>
                <Typography
                  sx={{ color: "white" }}
                  fontSize={14}
                  fontWeight={500}
                >
                  {user?.name ?? "Mang Juan"}
                </Typography>
                <Typography
                  sx={{ color: "white" }}
                  fontSize={12}
                  fontWeight={400}
                >
                  {user?.area_assigned ?? "Office of Medical Center Chief"}
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ mx: 1, borderColor: "white" }} />

            <Link onClick={logout}>
              <Typography
                sx={{
                  display: "flex",
                  color: "white",
                  textDecoration: "none",
                  alignItems: "center",
                  gap: 1,
                  fontSize: 14,
                }}
              >
                <BiPowerOff fontSize={22} color="white" /> Logout
              </Typography>
            </Link>
          </Stack>
        </CustomBox>
      </Stack>
    </Box>
  );
}

export default Sidebar;
