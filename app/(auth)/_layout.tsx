import "@/global.css";

import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />; // Hide the header for all screens in the stack
}
