import { useConnectUI, useDisconnect } from "@fuels/react";
import { useActiveWallet } from "hooks/useActiveWallet";
import { getTruncatedAddress } from "src/utils/address";
import {
  Button as MuiButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import CopyIcon from "@mui/icons-material/ContentCopyOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtmOutlined";

import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "./Button";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Address copied to clipboard");
};

type ConnectButtonProps = {
  showTopUpButton: boolean;
  onTopUp: () => Promise<string | void>;
};

const StyledButton = styled(MuiButton)({
  boxShadow: "none",
  textTransform: "none",
  backgroundColor: "#B6B6B6",
  padding: "4px 16px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "hsla(0,0%,30%,.6)",
    color: "#FFF",
  },
});

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "hsla(0,0%,7%,.4)",
    backdropFilter: "blur(5px)",
    color: "hsla(0,0%,100%,.5)",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "8px 0",
    "& .MuiMenu-list": {
      padding: 0,
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "hsla(0,0%,100%,.1)",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: "#FFF",
        width: 30,
        marginRight: 0,
      },
      "& .MuiListItemText-root": {
        color: "#FFF",
      },
      "&:hover": {
        backgroundColor: "hsla(0,0%,7%,.6)",
      },
      "&:active": {
        backgroundColor: "hsla(0,0%,7%,.8)",
      },
    },
  },
});

export const ConnectButton = ({
  showTopUpButton,
  onTopUp,
}: ConnectButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { wallet, isPending: isLoading, isConnected } = useActiveWallet();
  const { connect } = useConnectUI();
  const { disconnect } = useDisconnect();

  const onClick = isConnected ? disconnect : connect;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (wallet) {
    return (
      <div>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleClick}
          endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          className="text-gray-600 dark:hover:text-[#fff] dark:hover:bg-[hsla(0,0%,100%,.1)] dark:bg-[hsla(0,0%,100%,.04)] dark:text-[hsla(0,0%,100%,.5)]"
        >
          {getTruncatedAddress(wallet.address.toAddress())}
        </StyledButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 40,
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              copyToClipboard(wallet.address.toAddress());
              handleClose();
            }}
          >
            <ListItemIcon>
              <CopyIcon />
            </ListItemIcon>
            <ListItemText>Copy address</ListItemText>
          </MenuItem>
          {showTopUpButton && (
            <MenuItem
              onClick={() => {
                onTopUp();
                handleClose();
              }}
            >
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText>Faucet</ListItemText>
            </MenuItem>
          )}
          <MenuItem
            onClick={() => {
              onClick();
              handleClose();
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Disconnect</ListItemText>
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }

  return (
    <Button disabled={isLoading} onClick={() => onClick()}>
      {isLoading ? "Loading..." : "Connect"}
    </Button>
  );
};
