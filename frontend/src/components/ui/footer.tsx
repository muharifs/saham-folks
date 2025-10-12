import Logo from "@/assets/logo1.svg";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-scroll";

export function Footer() {
  return (
    <footer className="bg-primary py-6 mt-10 text-white">
      <div className="container mx-auto px-4 sm:px-0 text-center">
        <div className=" flex flex-col mx-5 gap-y-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-30 object-cover object-center color:transparent"
          />
          <p className="px-2 text-sm text-left">
            Saham Folks adalah platform edukasi investasi terdepan untuk
            investor pemula di Indonesia.
          </p>
          <div className="flex flex-row mx-2 my-2 gap-4 ">
            <div className="px-2 py-2 bg-ring rounded-lg">
              <Instagram />
            </div>
            <div className="px-2 py-2 bg-ring rounded-lg">
              <Facebook />
            </div>
            <div className="px-2 py-2 bg-ring rounded-lg">
              <Youtube />
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-2 mx-2 my-2 text-left">
            <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Program
              </h4>
              <Link to="/a">Online Courses</Link>
              <Link to="/v">Bootcamp</Link>
              <a href="/s">tes</a>
            </div>
            <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Company
              </h4>
              <Link to="/a">Tentang Kami</Link>
              <Link to="/a">Blog</Link>
              <Link to="/a">Komunitas</Link>
            </div>
            <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Support
              </h4>
              <Link to="/s">Hubungi Kami</Link>
              <Link to="/s">Syarat dan Ketentuan</Link>
              <Link to="/s">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row border-t pt-4 mt-10 h-20">
          <p className="leading-7 [&:not(:first-child)]:mx-auto w-full align-content-center">
            &copy; 2025 Saham Folks. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
