import { Header } from "components/Header";
import React from "react";

export default function Dashboard() {
  const user = { name: "Malak" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends, and popular destinations in real time."
      />
      Dashboard content here.
    </main>
  );
}
