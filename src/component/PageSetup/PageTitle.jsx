import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/joy";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import MenuNotification from "../Notification/MenuNotification";

PageTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subPage: PropTypes.string,
  subPath: PropTypes.string,
};

function PageTitle({ title, description, subPage, subPath }) {
  return (
    <Stack gap={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BreadcrumbsComponent
          homePath={"/dashboard"}
          currentPage={title}
          subPage={subPage}
          subPath={subPath}
        />
        <Box>
          <MenuNotification />
        </Box>
      </Box>

      <Box>
        <Typography fontSize={30} fontWeight={600}>
          {title}
        </Typography>
        <Typography level="body-sm">{description}</Typography>
      </Box>
    </Stack>
  );
}

export default PageTitle;
