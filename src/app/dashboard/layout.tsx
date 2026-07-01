import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-1">
        {/*==== NAVIGATION ==== */}
        <div className="w-[200px] bg-green-500 bg-gray-500 m-4 p-2">
          <Navigation />
        </div>

        {/*==== CHILDREN ==== */}
        <div className="flex-1 flex flex-col bg-red-200 m-4 p-2">
          <div className="h-12 bg-white">header</div>
          <div className="flex-1 bg-yellow-100">{children}</div>
        </div>
      </div>
    </>
  );
}
