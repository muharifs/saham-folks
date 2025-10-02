"use client"

import * as React from "react"
import { CircleHelpIcon, CircleIcon } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Logo from "@/assets/logo1.png"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-scroll"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Online Courses",
    href: "/docs/primitives/alert-dialog",
    description:
      "Belajar Melalui Vidio yang menarik dan interaktif.",
  },
  {
    title: "Bootcamp",
    href: "/docs/primitives/hover-card",
    description:
      "Belajar Secara Intensif dengan mentor berpengalaman.",
  },
 
]

function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false} >
      <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="home" smooth={true}
            duration={500} offset={-70} >Beranda</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="about" smooth={true}
            duration={500} offset={-70}>Tentang Kami</Link>
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
                  <Link to="comunity" className="flex-row items-center gap-2" smooth={true}
            duration={500} offset={-70}>
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
  )
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
  )
}

export default function Header() {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center px-6 bg-background">
      <div className="mr-auto">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto color:transparent"/>
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <NavigationMenuDemo  />
      </div>
      <div className="ml-auto gap-2 flex">
        <Button variant="outline">Daftar</Button>
        <Button>Masuk</Button>
        <ModeToggle />
      </div>
    </header>
  )
}