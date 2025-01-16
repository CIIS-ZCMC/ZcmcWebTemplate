import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Badge, Box, Typography } from "@mui/joy";
import { IoNotificationsOutline } from "react-icons/io5";

const MenuNotification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const notifications = [
    { id: 1, message: "New user signed up", time: "2 mins ago" },
    { id: 2, message: "Server backup completed", time: "10 mins ago" },
    { id: 3, message: "New comment on your post", time: "30 mins ago" },
  ];

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    if (open) {
      return handleClose();
    }

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        variant="plain"
        color="neutral"
        onClick={handleOpen}
        aria-label="notifications"
        aria-controls={open ? "notification-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Badge badgeContent={notifications.length} color="danger" size="sm">
          <Typography sx={{ fontSize: "xl" }}>
            <IoNotificationsOutline />
          </Typography>
        </Badge>
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        placement="bottom-end"
        sx={{ minWidth: 250, maxWidth: 350 }}
      >
        <Box sx={{ p: 1 }}>
          <Typography level="h6">Notifications</Typography>
        </Box>
        {notifications.map((notification) => (
          <MenuItem key={notification.id} onClick={handleClose}>
            <Box>
              <Typography>{notification.message}</Typography>
              <Typography level="body2" color="neutral">
                {notification.time}
              </Typography>
            </Box>
          </MenuItem>
        ))}
        {notifications.length === 0 && (
          <MenuItem>
            <Typography>No new notifications</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default MenuNotification;
