import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false, tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
      <Tabs.Screen name="aktivitas" options={{ title: "Aktivitas", headerShown: false, tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} /> }} />
      <Tabs.Screen name="transaksi" options={{ title: "Transaksi", headerShown: false, tabBarIcon: ({ color }) => <Ionicons name="cash" size={24} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false, tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
    </Tabs>
  );
}
