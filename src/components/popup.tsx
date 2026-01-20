import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        className="font-bold bg-white text-white hover:bg-gray-200 transition-all px-6 py-2 rounded-full text-sm font-bold active:scale-95"
        aria-describedby={id}
        onClick={handleClick}
      >
        <p className="font-bold"> QR Men</p>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="max-w-90 rounded-lg">
          <img src="./src/assets/QR.png"></img>
        </div>
      </Popover>
    </div>
  );
}
