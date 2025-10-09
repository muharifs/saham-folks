"use client";
import { Button } from "@/components/ui/button";
import Banner from "@/assets/dumy-class-01.jpg";
import Grub from "@/assets/scgrub.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRoundCog, UsersRound, FileVideoCamera } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative mt-20 w-screen h-[90vh] max-h-[1080px]"
      >
        <div className="container relative mx-auto flex h-full items-center justify-center px-4 sm:px-0">
          <div className="flex flex-col items-center md:gap-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-4">
              Belajar <span className="text-primary">Saham, </span> <br></br>{" "}
              Capai Tujuan Keuangan Bersama{" "}
              <span className="text-primary">Folk</span>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-center lg:text-xl">
              Folk bukan hanya soal investasi, tapi soal membangun pemahaman
              yang kuat dan keputusan yang bijak.
            </p>
            <Button size="lg" className="mt-5 font-semibold text-lg ">
              Belajar Sekarang
            </Button>
          </div>
        </div>
      </section>
      <section className="container flex flex-col mx-auto my-10 px-10 sm:px-10 sm:flex-row md:px-0 gap-16 items-center">
        <div className="w-full lg:w-1/2 ">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
            Ambil Harga Spesial Sebelum Kehabisan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg">
            Dapatkan akses penuh kursus Pahami Saham sekarang dan kuasai
            investasi saham dari dasar hingga lanjutan dengan harga spesial!
          </p>
          <Button size="lg" className="mt-5 font-semibold">
            Lihat Detail Course
          </Button>
        </div>
        <div className="w-full lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                  Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar
                  hingga Lanjutan
                </h3>
              </CardTitle>
              <CardDescription> Rp. 199.000/bulan</CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <img
                  src={Banner}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto my-10 sm:px-0 flex gap-16 items-center">
        <div className="bg-muted/50 flex-1 rounded-xl md:min-h-min mx-10 px-10 py-15">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-center w-full text-primary  ">
            Mengapa Memilih Saham Folks
          </h2>
          <div className="border-b-4 w-30 border-primary mx-auto mb-3" />
          <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-2">
            <UserRoundCog className="mx-auto my-10 w-15 h-15 mb-2 border-3 rounded-lg p-2 bg-muted p-3" />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Mentor Berpengalaman
            </h4>
            <p className="text-muted-foreground text-md">
              Belajar langsung dari praktisi investasi berpengalaman
            </p>
            <UsersRound className="mx-auto my-10 w-15 h-15 mb-2 border-3 rounded-lg p-2 bg-muted p-3" />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Komunitas Aktif
            </h4>
            <p className="text-muted-foreground text-md">
              Bergabung dengan ratusan investor pemula lainnya
            </p>
            <FileVideoCamera className="mx-auto my-10 w-15 h-15 mb-2 border-3 rounded-lg p-2 bg-muted p-3" />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Akses Selamanya
            </h4>
            <p className="text-muted-foreground text-md">
              Sekali beli course, kamu bisa akses selamanya tanpa batas waktu.
            </p>
          </div>
        </div>
      </section>
      <section
        id="comunity"
        className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center flex text-center"
      >
        <div className="hidden w-full md-basis-[50%] md:flex ">
          <AspectRatio ratio={5 / 4}>
            <img
              src={Grub}
              alt="Image"
              className="block rounded-md object-fit"
            />
          </AspectRatio>
        </div>
        <div className="w-full px-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            Gabung Komunitas Folks
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg">
            Bergabunglah dengan komunitas kami untuk mendapatkan tips investasi,
            berita pasar terbaru, dan diskusi seru seputar dunia saham.
          </p>
          <div className="space-y-4 !mt-8">
            <div className="flex flex-col gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <small className="text-base leading-none font-medium">
                  Bangun Jaringan
                </small>
                <p className="text-muted-foreground text-sm">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <small className="text-base leading-none font-medium">
                  Kembangkan Skill
                </small>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <small className="text-base leading-none font-medium">
                  Dapat Dukungan & Mentor
                </small>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <Button size="lg" className="mt-5 font-semibold">
            Join Komunitas Discord
          </Button>
        </div>
      </section>
    </>
  );
}
