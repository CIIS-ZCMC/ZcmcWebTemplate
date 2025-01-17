import { Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import { BASE_URL } from "../../Services/Config";
import useUserHook from "../../hooks/UserHook";

const Signout = () => {
  const { signOut } = useUserHook();

  // LOGOUT
  const logout = () => {
    signOut((status, feedback) => {
      if (!(status >= 200 && status < 300)) {
        // Trigger toust for error
        return;
      }

      clearLocalStorage();
      window.location.href = BASE_URL.production_landing_page;
    });
  };

  return (
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
  );
};

export default Signout;
