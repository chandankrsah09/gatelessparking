import Link from "next/link";
import React from "react";
import ActiveLink from "./active-link";

export interface MenuItem {
  id: string;
  href: string;
  title: string;
}
function sidebar() {
  return (
    <div className="flex flex-col z-10 w-[256px] bg-gray-800 text-white h-full overflow-auto p-4">
      <h1 className="text-2xl pl-4">
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col space-y-2 w-full pt-8">
          <li>
            <ActiveLink href="/dashboard/locations/tileview">
              Locations
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/dashboard/bookings">
              Bookings
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/dashboard/revenue">
              Revenue
            </ActiveLink>
          </li>
        </ul>

        <div className="pl-4 text-blue-600">
            UserButton
        </div>
      </div>
    </div>
  );
}

export default sidebar;
