import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineErrorOutline, MdWarningAmber } from "react-icons/md";

export const getAlertIcon = (statusCode) => {
  let icon = "";

  switch (statusCode) {
    case 200:
      icon = <IoMdCheckmarkCircleOutline fontSize={56} color={"green"} />;
      break;
    case 401:
      icon = <MdOutlineErrorOutline fontSize={56} color={"red"} />;
      break;
    default:
      icon = <MdWarningAmber fontSize={56} color={"orange"} />;
      break;
  }

  return icon;
};
