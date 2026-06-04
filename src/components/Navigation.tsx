"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

interface NavLink {
  href: string;
  label: string;
  icon: IconDefinition;
}

const todasLasOpciones: Record<string, NavLink> = {
  home: {
    href: "/",
    label: "home",
    icon: faListCheck,
  },
  about: {
    href: "/about",
    label: "about",
    icon: faListCheck,
  },
};

export default function Navigation() {
  // links
  const menuItems: NavLink[] = [todasLasOpciones.home, todasLasOpciones.about];

  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all",
                  // Estilos: Hover azul, Activo azul sólido
                  "hover:bg-[#174681] hover:text-white text-gray-700",
                  isActive && "bg-[#174681] text-white shadow-md",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
