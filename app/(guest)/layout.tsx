import Banner from "@/components/ui/banner";
import React from "react";

function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}

export default GuestLayout;
