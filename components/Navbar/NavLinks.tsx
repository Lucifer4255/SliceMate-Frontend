import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:text-red-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
};

export const NavLinks: React.FC = () => {
  return (
    <nav className="flex space-x-1">
      <NavLink href="/">Deals</NavLink>
      <NavLink href="/menu">Menu</NavLink>
      {/* <NavLink href="/menu">Buckets</NavLink> */}
      <NavLink href="/locations">Locations</NavLink>
      <NavLink href="/track">Track Order</NavLink>
      <NavLink href="/rewards">Rewards</NavLink>
    </nav>
  );
};