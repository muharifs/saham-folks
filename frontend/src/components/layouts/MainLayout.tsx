import { Outlet } from "react-router-dom";
import NavbarDemo from "@/components/ui/navigation-menu-demo";
import Footer from "@/components/ui/footer";
export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarDemo />
        <main className="flex-1 min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
