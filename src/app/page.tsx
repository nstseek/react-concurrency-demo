"use client";

import React, { ComponentProps } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Header, STab } from "./styles";
import { TabViewer } from "./components/TabViewer";
import { LegacySearch } from "./components/LegacySearch";
import { DeferredValueSearch } from "./components/DeferredValueSearch";
import { InfoBox } from "./components/InfoBox";
import { DefaultSleepTime } from "./utils/sleep";

export default function Home() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange: ComponentProps<typeof Tabs>["onChange"] = (
    _,
    newTab
  ) => {
    setCurrentTab(newTab);
  };

  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Typography variant="h6">React Concurrency Example (2023)</Typography>
        </Toolbar>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="React modes"
        >
          <STab label="Legacy Mode" />
          <STab label="Concurrent Mode (deferred value)" />
        </Tabs>
      </Header>

      <Box padding={2}>
        <InfoBox title="This is a demonstration of React Concurrent Features. (a.k.a. Concurrent Mode)">
          <Typography variant="body2">
            Every time you type something in this input field, the page will
            search for the string you typed in a hardcoded JSON.
          </Typography>

          <Typography variant="body2">
            The search method will also block the JS execution by{" "}
            {DefaultSleepTime}ms to simulate some heavy processing on the main
            thread.
          </Typography>

          <Typography variant="body2">
            If you choose Legacy Mode, you will see that the input field will
            freeze every time you type something, because React is now doing
            some simulated heavy computing searching the list for your typed
            string.
          </Typography>

          <Typography variant="body2">
            If you turn Concurrent Mode, you will see that React will prioritize
            your typing instead of blocking the main thread completely while
            doing the heavy search, making the interface responsible at all
            times.
          </Typography>

          <Typography variant="caption">
            (Remember that Concurrent Mode is the way it was called a few years
            ago by the React team, it is now called Concurrent Features since
            there is not a switch or anything like that that turns Concurrent
            Mode on, it is just there, in React&lsquo;s engine on v18+)
          </Typography>
        </InfoBox>

        <TabViewer currentValue={currentTab} tabValue={0}>
          <LegacySearch />
        </TabViewer>
        <TabViewer currentValue={currentTab} tabValue={1}>
          <DeferredValueSearch />
        </TabViewer>
      </Box>
    </div>
  );
}
