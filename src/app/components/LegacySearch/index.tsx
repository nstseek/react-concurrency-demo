import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ComponentProps, useState } from "react";
import { FilteredList } from "../FilteredList";
import { InfoBox } from "../InfoBox";
import { DefaultSleepTime } from "@/app/utils/sleep";

export const LegacySearch = () => {
  const [value, setValue] = useState("");

  const handleChange: ComponentProps<typeof TextField>["onChange"] = (
    event
  ) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <InfoBox title="This is the legacy mode. You can switch between modes in the top bar.">
        <Typography variant="body2">
          Every time you type something in this input field, the field will
          freeze for {DefaultSleepTime}ms.
        </Typography>

        <Typography variant="body2">
          This happens because React is trying to search the array for items
          that contain the characters you typed and it is taking too long.
        </Typography>

        <Typography variant="body2">
          In legacy mode, React can not update the state and the input element
          while it is still searching the array for matching items. It will be
          updated as soon as the search finishes. But the search takes some
          time.
        </Typography>
      </InfoBox>
      <TextField
        value={value}
        onChange={handleChange}
        label="Search"
        variant="outlined"
        fullWidth
      />
      <FilteredList query={value} />
    </Box>
  );
};
