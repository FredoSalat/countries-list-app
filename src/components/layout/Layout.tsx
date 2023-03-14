import React from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <NavBar />
    </>
  );
}

export default Layout;
