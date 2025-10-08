import { ThemeProvider } from "@/components/ui/theme-provider";
import NavbarDemo from "./components/ui/navigation-menu-demo.tsx";
import Home from "./components/ui/home.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
        <NavbarDemo />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
