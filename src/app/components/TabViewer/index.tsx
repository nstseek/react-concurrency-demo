import React from "react";

export function TabViewer<T>({
  currentValue,
  tabValue,
  children,
}: {
  currentValue: T;
  tabValue: T;
  children: JSX.Element;
}): JSX.Element | null {
  return currentValue === tabValue ? children : null;
}
