import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

export const Header = styled(AppBar)(() => ({
  backgroundColor: "#444",
  paddingTop: 16,
}));

export const STab = styled(Tab)(() => ({
  color: "white",
}));
