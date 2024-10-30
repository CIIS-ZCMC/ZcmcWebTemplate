export const getModeColorScheme = (type) => {
  let color = "";

  switch (type) {
    case "competitive":
      color = "success";
      break;
    case "alternative":
      color = "primary";
      break;
  }

  return color;
};

// STATUS
export const getStatusColorScheme = (type) => {
  let color = "";

  switch (type) {
    case "pending":
      color = "neutral";
      break;
    case "received":
      color = "success";
      break;
    case "returned":
      color = "warning";
      break;
    case "cancelled":
      color = "danger";
      break;
    case "completed":
      color = "primary";
      break;
  }

  return color;
};

// STATUS
export const getAlertColorScheme = (statusCode) => {
  let color = "";

  switch (statusCode) {
    case 200:
      color = "success.100";
      break;
    case 401:
      color = "danger.100";
      break;
    case 500:
      color = "danger.100";
      break;
    default:
      color = "warning.100";
      break;
  }

  return color;
};
