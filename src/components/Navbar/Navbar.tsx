"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

interface NavItemProps {
  path: string;
  label: string;
}

const Navbar = () => {
  const pathName = usePathname();

  const getClass = (path: string) => {
    const activeClass = "font-semibold text-xl";
    return pathName === path ? activeClass : "";
  };

  const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
    const linkClass = getClass(path);

    const firstChar = label.charAt(0);
    const restLabel = label.slice(1);
  

    return (
      <motion.li
        // animate={{ fontSize: activeIndex === index ? "24px" : "16px" }}
        // animate={{fontSize: "30px" }}
        // transition={{ duration: 0.3 }}
        className={"hover:line-through " + linkClass}
      >
        <Link href={path}><i>{firstChar}</i>{restLabel}</Link>
      </motion.li>
    );
  };

  return (
    <nav className="mb-5">
      <ul className="flex justify-between mt-5 items-end">
        <NavItem path="/about" label="About" />
        <NavItem path="/work" label="Work" />
        {/* <NavItem path="/blog" label="Blog" /> */}
        <NavItem path="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default memo(Navbar);
