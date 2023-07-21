export const DefaultSleepTime = 500;

export const sleep = (ms: number = DefaultSleepTime) => {
  const startTime = performance.now();

  while (performance.now() < startTime + ms) {}
};
