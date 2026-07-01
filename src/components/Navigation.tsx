"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
  icon: IconDefinition;
}

const todasLasOpciones: Record<string, NavLink> = {
  home: {
    href: "/dashboard",
    label: "dashboard",
    icon: faListCheck,
  },
  inventory: {
    href: "/dashboard/inventory",
    label: "inventory",
    icon: faListCheck,
  },
  production: {
    href: "/dashboard/production",
    label: "production",
    icon: faListCheck,
  },
  profile: {
    href: "/dashboard/profile",
    label: "profile",
    icon: faListCheck,
  },
  finances: {
    href: "/dashboard/finance",
    label: "finances",
    icon: faListCheck,
  },
  tasks: {
    href: "/dashboard/tasks",
    label: "tasks",
    icon: faListCheck,
  },
};

export default function Navigation() {
  const router = useRouter();

  const menuOrder = [
    "home",
    "inventory",
    "production",
    "profile",
    "finances",
    "tasks",
  ];

  // links
  const menuItems: NavLink[] = menuOrder.map((key) => todasLasOpciones[key]);

  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* ==== LOGO ==== */}
      <div style={{ background: "red" }}>
        <h1>Manager System</h1>
      </div>

      {/*==== NAVIGATION ==== */}
      <nav className="flex-1" style={{ backgroundColor: "yellow" }}>
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

      {/* Bottom section */}
      <div className="bg-red-200">
        <button onClick={() => router.push("/login")}>Logout</button>
      </div>
    </div>
  );
}
