"use client";

import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

import Link from "next/link";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
