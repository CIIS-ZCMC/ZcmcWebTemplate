import { Box, styled, useTheme } from "@mui/joy";

// SIDEBAR CONTAINER
const SidebarCustomBox = styled(({ ...props }) => <Box {...props} />)(() => {
  const muiTheme = useTheme();

  return {
    backgroundColor: muiTheme.palette.custom.light,
    borderRadius: 10,
    padding: `${muiTheme.spacing(2)}`,
  };
});

export default SidebarCustomBox;
