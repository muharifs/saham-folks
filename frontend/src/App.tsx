
import { ThemeProvider } from "@/components/ui/theme-provider"
import NavbarDemo from "./components/ui/navigation-menu-demo.tsx"
import { Button } from "@/components/ui/button"
import Banner from "./assets/dumy class 01.jpg"
import Grub from "./assets/scgrub.jpeg"
import ig from "./assets/icons8-instagram-30.png"
import fb from "./assets/icons8-facebook-logo-30.png"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "@/assets/logo1.png"

function App() {
  

  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
      <NavbarDemo />
      <section id="home" className="relative mt-20 w-screen h-[90vh] max-h-[1080px] overflow-x-hidden">
        <div className="container relative mx-auto flex h-full items-center justify-center px-4 sm:px-0">
          <div className="flex flex-col items-center md:gap-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-4 text-3xl">
              Belajar <span className="text-primary">Saham, </span> <br></br> Capai Tujuan Keuangan Bersama <span className="text-primary">Folk</span>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
              Folk bukan hanya soal investasi, tapi soal membangun pemahaman yang kuat dan keputusan yang bijak.
            </p>
              <Button size="llg" className="mt-5 font-semibold text-lg ">Belajar Sekarang</Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 px-4 sm:px-0 flex gap-16 items-center">
        <div className="w-full lg:w-1/2 ">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">Ambil Harga Spesial Sebelum Kehabisan</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg">
            Dapatkan akses penuh kursus Pahami Saham sekarang dan kuasai investasi saham dari dasar hingga lanjutan dengan harga spesial!
          </p>
          <Button size="lg" className="mt-5 font-semibold">Lihat Detail Course</Button>
        </div>
        <div className="w-full lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                  Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar hingga Lanjutan
                </h3 >
              </CardTitle>
              <CardDescription> Rp. 199.000/bulan</CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <img src={Banner} alt="Image" className="rounded-md object-cover" />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="about" className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center">
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min px-20 py-10" >
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-center w-full text-primary">
          Tentang Saham Folks
          </h2>
          <p className="text-muted-foreground text-md text-center mt-3">
          "membantu masyarakat Indonesia lebih melek finansial"
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg text-center">
          Saham Folks adalah platform edukasi online yang membantu siapa saja memahami dunia investasi saham dengan cara yang sederhana, praktis, dan terarah.

          Kami percaya bahwa investasi bukan hanya untuk kalangan tertentu, tetapi bisa dipelajari oleh siapa saja yang ingin mengelola keuangan dengan lebih baik dan membangun masa depan finansial yang kuat.
          </p>
        </div>
      </section>
      <section id="comunity" className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center flex">
       <div className="w-full lg:w-1/2">
          <AspectRatio ratio={5 / 4}>
            <img src={Grub} alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
        <div className="w-full lg:w-1/2 ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            Gabung Komunitas Folks
          </h3 >
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg">
            Bergabunglah dengan komunitas kami untuk mendapatkan tips investasi, berita pasar terbaru, dan diskusi seru seputar dunia saham.
          </p>
          <div className="space-y-4 !mt-8">
            <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <small className="text-base leading-none font-medium">Bangun Jaringan</small>
                <p className="text-muted-foreground text-sm">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <small className="text-base leading-none font-medium">Kembangkan Skill</small>
              <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <small className="text-base leading-none font-medium">Dapat Dukungan & Mentor</small>
              <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          </div>
          <Button size="lg" className="mt-5 font-semibold">Join Komunitas WA</Button>
        </div>
      </section>
      <footer className="bg-primary py-6 mt-10 text-white">
        <div className="container mx-auto px-4 sm:px-0 text-center">
          <div className="flex gap-y-4">
            <div className="basis-4/12 space-y-2 ">
              <img src={Logo} alt="Logo" className="h-15 w-auto color:transparent"/>
              <p className="text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi quibusdam est aliquam nihil magnam minus aspernatur dolorem? Expedita, minus?</p>
              <div className="flex flex-row gap-4 mt-2">
                <Link to="/">
                  <img src={ig} alt="Insta" className="h-7 w-auto color:transparent"/>
                </Link>
                <Link to="/">
                  <img src={fb} alt="Face" className="h-7 w-auto color:transparent"/>
                </Link>
              </div>
            </div>
            <div className="basis-4/12 space-y-2">

            </div>
          </div>
          <div className="flex flex-row gap-y-3 justify-between border-t border-gray-700 pt-4 mt-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6">&copy; 2025 Saham Folks. All rights reserved.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:underline mx-2">Privacy Policy</a>
              <a href="#" className="hover:underline mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
    </ThemeProvider>
      
    </>
  )
}

export default App
