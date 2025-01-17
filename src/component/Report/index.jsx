import { Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { GoReport } from "react-icons/go";
import CustomBox from "../SidebarCustomBox";

const Report = () => {
  return (
    <CustomBox>
      <Typography sx={{ color: "white" }} fontSize={15} fontWeight={600} mb={1}>
        Help and support
      </Typography>
      <Typography sx={{ color: "white" }} fontSize={12} fontWeight={400} mb={2}>
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
  );
};

export default Report;
