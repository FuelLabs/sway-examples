import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableRowsIcon from "@mui/icons-material/TableRows";

import { IconButton, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "./Link";
import { NFTRoutes } from "src/routes";

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: 'hsla(0,0%,7%,.4)',
    backdropFilter: 'blur(5px)',
    color: 'hsla(0,0%,100%,.5)',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '8px 0',
    '& .MuiMenu-list': {
      padding: 0,
    },
    '& .MuiMenuItem-root:hover': {
      backgroundColor: 'hsla(0,0%,100%,.1)',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
        color: '#FFF',
        width: 30,
        marginRight: 0,
      },
      '& .MuiListItemText-root': {
        color: '#FFF',
      },
      '&:hover': {
        backgroundColor: 'hsla(0,0%,7%,.6)',
      },
      '&:active': {
        backgroundColor: 'hsla(0,0%,7%,.8)',
      },
    },
  },
});

export const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TableRowsIcon className="rounded-sm active:bg-gray-600 text-gray-400" />
      </IconButton>
      {/** We need to specify root as the container to get tailwind css to work for material ui */}
      <StyledMenu
        container={() => document.getElementById("root")}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 40,
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={NFTRoutes.explore}>Explore</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={NFTRoutes.create}>Create</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={NFTRoutes.collection}>My Account</Link>
        </MenuItem>
      </StyledMenu>
    </>
  );
};
