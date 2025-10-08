import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  type NavItem =
    | {
        label: string;
        type: "link";
        to: string;
      }
    | {
        label: string;
        type: "dropdown";
        children: {
          label: string;
          href: string;
        }[];
      };

  // 🧠 Semua menu dikontrol lewat array ini
  const navItems: NavItem[] = [
    { label: "Beranda", to: "home", type: "link" },
    { label: "Tentang Kami", to: "about", type: "link" },
    {
      label: "Program",
      type: "dropdown",
      children: [
        { label: "Kelas Dasar", href: "#program-basic" },
        { label: "Kelas Lanjutan", href: "#program-advance" },
      ],
    },
    {
      label: "Komunitas",
      type: "dropdown",
      children: [
        { label: "WhatsApp", href: "#whatsapp" },
        { label: "Instagram", href: "#instagram" },
      ],
    },
    { label: "Kontak", to: "contact", type: "link" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-slate-800">Saham Folks</div>

        {/* Desktop Navigation */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.type === "link" ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-2 w-[250px]">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={child.href}
                              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition"
                            >
                              {child.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle Menu"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-100 mt-2 bg-white shadow-lg border rounded-lg"
              >
                {navItems.map((item) =>
                  item.type === "link" ? (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="w-full cursor-pointer px-3 py-2 hover:bg-slate-100 rounded-md"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem key={item.label} asChild>
                      <details className="w-full">
                        <summary className="cursor-pointer px-3 py-2 hover:bg-slate-100 rounded-md">
                          {item.label}
                        </summary>
                        <div className="flex flex-col mt-2 space-y-1 px-4">
                          {item.children?.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="text-sm text-slate-600 hover:text-blue-500"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </details>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
