import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ComponentProps, useDeferredValue, useState } from "react";
import { FilteredList } from "../FilteredList";
import { InfoBox } from "../InfoBox";
import { DefaultSleepTime } from "@/app/utils/sleep";

export const DeferredValueSearch = () => {
  const [value, setValue] = useState("");
  const query = useDeferredValue(value);

  const handleChange: ComponentProps<typeof TextField>["onChange"] = (
    event
  ) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <InfoBox title="This is the concurrent mode (deferred value). You can switch between modes in the top bar.">
        <Typography variant="body2">
          Every time you type something in this input field, React will do its
          best with concurrent mode to search for movies with the string you
          just entered while keeping the UI responsive
        </Typography>

        <Typography variant="body2">
          The deferred value strategy creates a value that consumes a React
          state primitive value and will lag in time compared to the real state.
        </Typography>

        <Typography variant="body2">
          Imagine that we have a React state variable called A and a deferred
          value called ADef.
        </Typography>

        <Typography variant="body2">
          In the first render, the deferred value will have the state&lsquo;s
          initial value. In the upcoming renders caused by A changes/setA calls,
          React will first render the main component that contains A and ADef
          with an updated value of A but without changing ADef.
        </Typography>

        <Typography variant="caption">
          (Note that we have a caching mechanism implemented here so React can
          reuse his previous work on filtering movies and provide an instant
          response when he tries to render the page with an old ADef value.
          Without this caching mechanism, this re-render with an old ADef value
          would still trigger a CPU-intensive job and it would take a lot of
          time to complete, making the UI non-responsive anyways)
        </Typography>

        <Typography variant="body2">
          Then, React will start a background re-render of the main component
          with an updated value of ADef. If something changes A state, React
          will pause the background re-render and will prioritize re-rendering
          the main component wih the new state of A, leaving ADef to a later
          moment.
        </Typography>

        <Typography variant="body2">
          This should make the user feel like the UI is always responding
          instead of freezing while trying to render the page again with a new
          ADef value. Remember that this approach will bring in more value if
          changing ADef triggers a re-render that will take some time. If it is
          very simple/light, you probably will not see any difference.
        </Typography>
      </InfoBox>
      <TextField
        value={value}
        onChange={handleChange}
        label="Search"
        variant="outlined"
        fullWidth
      />
      {value !== query && (
        <Typography variant="subtitle2">Loading new results...</Typography>
      )}
      <FilteredList query={query} />
    </Box>
  );
};
