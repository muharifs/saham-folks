"use client";

import * as React from "react";
import { CircleHelpIcon, CircleIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Logo from "@/assets/logo1.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Online Courses",
    href: "/docs/primitives/alert-dialog",
    description: "Belajar Melalui Vidio yang menarik dan interaktif.",
  },
  {
    title: "Bootcamp",
    href: "/docs/primitives/hover-card",
    description: "Belajar Secara Intensif dengan mentor berpengalaman.",
  },
];

function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="home">Beranda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="about">Tentang Kami</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Komunitas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="comunity" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    WhatsApp
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    Instagram
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Kontak</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed z-50 flex h-20 w-full items-center px-6 bg-background">
      <div className="mr-auto">
        <img src={Logo} alt="Logo" className="h-60 w-auto color:transparent" />
      </div>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <NavigationMenuDemo />
      </div>
      <div className="ml-auto gap-2 flex">
        <ModeToggle />
        <div className="md:hidden">
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
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Program
                  </h4>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Link to="/course">Online Course</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Botcamp</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Komunitas
                  </h4>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Link to="/comunity">Saham Folks Discord</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Blog</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
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
