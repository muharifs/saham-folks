"use client";

import * as React from "react";
import Logo from "@/assets/logo1.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Beranda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">Tentang Kami</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/course">Kelas</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={{ pathname: "/", hash: "#comunity" }}>Komunitas</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact">Kontak</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed z-50 flex h-20 w-full items-center px-6 bg-background">
      <div className="mr-auto">
        <img src={Logo} alt="Logo" className="h-60 w-auto color:transparent" />
      </div>
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
        <NavigationMenuDemo />
      </div>
      <div className="ml-auto gap-2 flex lg:gap-4">
        <Button size="lg" variant="outline" className="hidden lg:inline-flex">
          <Link to="/auth/register">Daftar</Link>
        </Button>
        <Button size="lg" className="hidden lg:inline-flex">
          <Link to="/auth/login">Masuk</Link>
        </Button>
        <div className="lg:hidden">
          <DropdownMenu onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="md : w-[14rem] px-4 my-2"
            >
              <DropdownMenuLabel>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Menu
                </h4>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to="/">Beranda</Link>
                </h4>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to="/about">Tentang Kami</Link>
                </h4>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to="/course">Kelas</Link>
                </h4>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to={{ pathname: "/", hash: "#comunity" }}>
                    Komunitas
                  </Link>
                </h4>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to="/blog">Blog</Link>
                </h4>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  <Link to="/contact">Kontak</Link>
                </h4>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="my-2">
                <Button variant="ghost" className="w-full">
                  <Link to="/auth/register">Daftar</Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="my-2">
                <Button className="w-full">
                  <Link to="/auth/login">Masuk</Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
