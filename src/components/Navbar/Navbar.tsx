"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  path: string;
  label: string;
}

const Navbar = () => {
  const pathName = usePathname();

  const getClass = (path: string) => {
    const activeClass = "font-bold";
    return pathName === path ? activeClass : "";
  };

  const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
    const linkClass = getClass(path);

    return (
      <li className={"hover:line-through " + linkClass}>
        <Link href={path}>{label}</Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="flex justify-between">
        <NavItem path="/about" label="About" />
        <NavItem path="/work" label="Work" />
        <NavItem path="/blog" label="Blog" />
        <NavItem path="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
