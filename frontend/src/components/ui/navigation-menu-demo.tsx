"use client";

import * as React from "react";
import { Video, Notebook, Newspaper } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
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

const components: {
  title: string;
  href: string;
  description: string;
  iconsnav: React.ElementType;
}[] = [
  {
    title: "Online Courses",
    href: "/course",
    description: "Belajar Melalui Vidio yang menarik dan interaktif.",
    iconsnav: Notebook,
  },
  {
    title: "Bootcamp",
    href: "/",
    description: "Belajar Secara Intensif dengan mentor berpengalaman.",
    iconsnav: Video,
  },
];

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
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  iconsnav={component.iconsnav}
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
                    <FaDiscord />
                    Saham Folks Discord
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/blog" className="flex-row items-center gap-2">
                    <Newspaper />
                    Blog
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
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

function ListItem({
  title,
  children,
  href,
  iconsnav: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  iconsnav?: React.ElementType;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href} className="flex flex-row items-left gap-3 w-full">
          <div className="flex items-start gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
            {Icon ? (
              <Icon className="h-12 w-12 text-primary mb-2 size-14" />
            ) : null}
            <div className="flex flex-col">
              <div className="text-sm font-medium">{title}</div>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </div>
          </div>
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
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Program
                  </h4>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Video className="text-primary" />
                      <Link to="/course">Online Course</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Notebook />
                      Botcamp
                    </DropdownMenuItem>
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
                      <FaDiscord />
                      <Link to="/comunity">Saham Folks Discord</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Newspaper />
                      <Link to="/blog">Blog</Link>
                    </DropdownMenuItem>
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
