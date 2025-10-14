import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavbarDemo from "./components/ui/navigation-menu-demo.tsx";
import Home from "./components/ui/home.tsx";
import Footer from "./components/ui/footer.tsx";
import About from "./components/ui/about.tsx";
import Course from "./components/ui/course.tsx";
import Product from "./components/ui/product.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
        <NavbarDemo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/123" element={<Product />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
