import { Avatar, Skeleton, Stack, Typography } from "@mui/joy";
import useUserHook from "../../hooks/UserHook";
import { useState } from "react";

const Profile = () => {
  const { user } = useUserHook();
  const [loading, setLoading] = useState(true);

  if (loading) {
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Skeleton animation="wave" variant="circular" width={48} height={48} />
      <Stack>
        <Typography sx={{ color: "white" }} fontSize={14} fontWeight={500}>
          {user?.name ?? "Mang Juan"}
        </Typography>
        <Typography sx={{ color: "white" }} fontSize={12} fontWeight={400}>
          {user?.area_assigned ?? "Office of Medical Center Chief"}
        </Typography>
      </Stack>
    </Stack>;
  }

  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Avatar sx={{ border: 2, borderColor: "white" }} />
      <Stack>
        <Typography sx={{ color: "white" }} fontSize={14} fontWeight={500}>
          {user?.name ?? "Mang Juan"}
        </Typography>
        <Typography sx={{ color: "white" }} fontSize={12} fontWeight={400}>
          {user?.area_assigned ?? "Office of Medical Center Chief"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
