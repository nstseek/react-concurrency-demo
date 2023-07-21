import { InfoBoxContainer } from "./styles";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";

export const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <InfoBoxContainer>
      <InfoIcon />
      <Box display="flex" flexDirection="column" gap="8px">
        <Typography variant="subtitle1">
          <b>{title}</b>
        </Typography>
        {children}
      </Box>
    </InfoBoxContainer>
  );
};
