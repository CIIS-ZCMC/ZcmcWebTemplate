import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/joy";
import { isActive } from "../../../Utils/PathChecker";
import usePageTitleHook from "../../../hooks/PageTitleHook";

const SidebarMenu = styled(({ path, name, description, ...props }) => {
  const { setTitle, setDescription } = usePageTitleHook();

  function handleClick() {
    setTitle(name);
    setDescription(description);
    console.log("Click", props);
  }

  return <Link {...props} onClick={handleClick} />;
})(({ path }) => {
  const muiTheme = useTheme();

  return {
    display: "flex",
    alignItems: "center",
    gap: muiTheme.spacing(2), // Adjusted for better spacing
    padding: `${muiTheme.spacing(1.5)} ${muiTheme.spacing(2)}`,
    textDecoration: "none",
    color: "white",
    fontWeight: isActive(path.replace("/", "")) ? 600 : 400,
    backgroundColor: isActive(path.replace("/", ""))
      ? muiTheme.palette.custom.active
      : "transparent",
    borderRadius: 10,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor:
        muiTheme.palette.custom.hover || "rgba(255, 255, 255, 0.1)",
    },
  };
});

export default SidebarMenu;
