import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/*==== CONTENT ==== */}

      <div className="flex flex-1">
        {/*==== NAVIGATION ==== */}
        <div
          className="w-[200px] bg-green-500
                          bg-gray-500 m-4 p-2"
        >
          <Navigation />
        </div>
      </div>
    </>
  );
}
