import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";

import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthLayout from "@/components/layouts/AuthLayout.tsx";

import Home from "./components/pages/home.tsx";
import About from "./components/pages/about.tsx";
import Course from "./components/pages/course.tsx";
import Product from "./components/pages/product.tsx";
import Contact from "./components/pages/contact.tsx";
import SignupPage from "./components/pages/register.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/123" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<SignupPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
