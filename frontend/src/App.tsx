import { ThemeProvider } from "@/components/ui/theme-provider";
import NavbarDemo from "./components/ui/navigation-menu-demo.tsx";
import Home from "./components/ui/home.tsx";
import Footer from "./components/ui/footer.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
        <NavbarDemo />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
