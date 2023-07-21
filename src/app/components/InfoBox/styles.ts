import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const InfoBoxContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "24px 1fr",
  gridTemplateRows: "1fr",
  gap: "12px",
  color: "#444",
  backgroundColor: "lightgray",
  borderRadius: 8,
  padding: 16,
  margin: "12px 0",
}));
