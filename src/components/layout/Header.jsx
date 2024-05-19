/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  const [mounted, setMounted] = useState(false);
  console.log("path", path);
  useEffect(() => {
    setMounted(true);
  }, []);
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: "Services",
      href: "#",
    },
    {
      name: "Customers",
      href: "#",
    },
    {
      name: "Contact us",
      href: "#",
    },
  ];
  return (
    <Navbar
      classNames={{
        wrapper: "px-4 md:px-8 xl:px-0 max-w-[1216px] border-0",
        base: "dark:bg-[#151D2E]",
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="shadow"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <p className="font-medium text-inherit uppercase text-secondary">
            Smarter's
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex" justify="start">
        <NavbarBrand>
          <p className="font-medium uppercase text-secondary text-inherit">
            Smarter's
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-0.5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`text-sm px-4 py-2 ${
                path === item.href
                  ? "border-b-2 border-secondary text-secondary font-medium "
                  : "hover:border-b-2 hover:border-secondary hover:text-secondary"
              }`}
              href={item.href}
              aria-current="page"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="gap-1" justify="end">
        <NavbarItem>
          {mounted && (
            <Button
              isIconOnly
              radius="full"
              // color="secondary"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-secondary-50 dark:bg-gray-600"
            >
              {theme === "dark" ? <LuSun /> : <BsMoon />}
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`hover:border-b-2 hover:border-secondary ${
              path === "/loginorsignup"
                ? "text-secondary border-b-2 border-secondary"
                : ""
            } px-3 py-2 hover:text-secondary text-sm`}
            href="/loginorsignup"
          >
            Login/Signup
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            className="text-secondary text-sm border-b-2 border-secondary px-3 py-2"
            href="#"
          >
            Sign Up
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu className="dark:bg-[#151D2E]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={() => setIsMenuOpen(false)}
            key={`${item}-${index}`}
          >
            <Link
              className={`text-sm ${
                path === item.href
                  ? "text-white bg-secondary-500 px-4 py-1 "
                  : "bg-secondary-100 bg-opacity-0 px-4 py-1"
              }`}
              href={item.href}
              size=""
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
