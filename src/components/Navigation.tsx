"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <>
      {/* ==== LOGO ==== */}
      <div style={{ background: "red" }}>
        <h1>Manager System</h1>
      </div>

      {/*==== NAVIGATION ==== */}
      <nav style={{ backgroundColor: "yellow" }}>
        <ul>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 flex",
                    // Estilos: Hover azul, Activo azul sólido
                    //group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all
                    "hover:bg-[#174681] hover:text-white",
                    isActive && "bg-[#174681] text-white",
                  )}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <p>{item.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
