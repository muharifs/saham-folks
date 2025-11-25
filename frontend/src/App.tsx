import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthLayout from "@/components/layouts/AuthLayout.tsx";

import Home from "./components/pages/home.tsx";
import About from "./components/pages/about.tsx";
import Course from "./components/pages/course.tsx";
import Product from "./components/pages/product.tsx";
import Contact from "./components/pages/contact.tsx";
import SignupPage from "./components/pages/register.tsx";
import LoginPage from "./components/pages/login-form.tsx";
import BlogPage from "./components/pages/blog.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Routes>
        {ScrollToTop()}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/register" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
