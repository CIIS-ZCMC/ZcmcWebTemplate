import { Divider, Stack } from "@mui/joy";
import Profile from "./Profile";
import Signout from "./Signout";
import SidebarCustomBox from "../SidebarCustomBox";

const ProfileAndSignout = () => {
  return (
    <SidebarCustomBox>
      <Stack gap={1.5}>
        <Profile />
        <Divider sx={{ mx: 1, borderColor: "white" }} />
        <Signout />
      </Stack>
    </SidebarCustomBox>
  );
};

export default ProfileAndSignout;
