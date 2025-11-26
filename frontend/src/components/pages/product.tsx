import * as React from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FaCheck, FaFileAlt, FaRegPlayCircle, FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { AiFillFolderOpen } from "react-icons/ai";
import { PiMonitorPlayBold } from "react-icons/pi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Akses seumur hidup ke seluruh materi dan update kursus.",
  "Dapat sertifikat resmi setelah menyelesaikan kursus.",
  "Belajar dengan studi kasus dan simulasi nyata.",
  "Akses komunitas eksklusif investor pemula.",
  "Bimbingan langsung dari mentor berpengalaman.",
];

const keyobjectives = [
  "Memahami konsep dasar investasi saham.",
  "Mampu menganalisis laporan keuangan perusahaan.",
  "Mengajarkan teknik analisis fundamental dan teknikal.",
  "Membekali peserta dengan strategi membangun portofolio.",
];

const materiCourse = [
  {
    id: "m1",
    title: "Pengenalan Investasi Saham",
    content: [
      "Apa itu saham dan bagaimana cara kerjanya",
      "Perbedaan antara trading dan investing",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m2",
    title: "Dasar Analisis Fundamental",
    content: ["Membaca laporan keuangan", "Menilai valuasi perusahaan"],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m3",
    title: "Analisis Teknikal untuk Pemula",
    content: ["Pola grafik (chart pattern)", "Indikator teknikal populer"],
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m4",
    title: "Manajemen Risiko dan Psikologi Investor",
    content: ["Cara menghindari fear & greed", "Diversifikasi portofolio"],
    image:
      "https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m5",
    title: "Membangun Portofolio Investasi Pribadi",
    content: [
      "Strategi jangka panjang vs jangka pendek",
      "Praktik langsung melalui simulasi",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m6",
    title: "Kelas Lanjutan: Strategi Profesional",
    content: ["Membaca sentimen pasar", "Studi kasus dan analisis real market"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Course() {
  return (
    <>
      <div className="flex mt-20 w-screen overflow-hidden">
        <div
          className="relative w-screen h-70 md:h-96 lg:h-125"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <h2 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar
              hingga Lanjutan
            </h2>
          </div>
        </div>
      </div>

      <section
        id="product"
        className="container mx-auto my-5 px-4 sm:px-0 gap-16 items-center md:px-6"
      >
        <div className="lg:flex lg:flex-row">
          <div className="lg:basis-2/3 md:min-h-min mx-3 py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
              Tentang Course
            </h3>
            <p className="text-muted-foreground text-md mt-3 text-left">
              Kursus “Pahami Saham, Bangun Portofolio: Kursus Investasi dari
              Dasar hingga Lanjutan” dirancang untuk siapa pun yang ingin
              memulai perjalanan investasi dengan pemahaman yang kuat dan
              terarah. Di sini, peserta akan belajar dari nol tentang konsep
              dasar saham, mekanisme pasar modal, hingga strategi membangun
              portofolio yang sehat dan menguntungkan. Setiap materi disusun
              secara bertahap agar mudah dipahami, bahkan bagi yang belum pernah
              berinvestasi sebelumnya. Pendekatannya tidak hanya teoritis,
              tetapi juga praktis dengan banyak contoh kasus nyata, latihan
              analisis, dan panduan langkah demi langkah untuk membuat keputusan
              investasi yang lebih cerdas dan terukur.
            </p>
            <p className="text-muted-foreground text-md mt-3 text-left">
              Selain itu, kursus ini menghadirkan pengalaman belajar yang
              interaktif dengan kombinasi video pembelajaran, kuis, dan simulasi
              pasar saham berbasis data real-time. Peserta akan diajak memahami
              bagaimana membaca tren, menganalisis laporan keuangan, hingga
              mengenali psikologi pasar yang sering memengaruhi keputusan
              investor. Dengan dukungan komunitas belajar eksklusif dan
              bimbingan langsung dari mentor berpengalaman, kursus ini menjadi
              wadah ideal untuk membangun kepercayaan diri dalam berinvestasi
              serta mengembangkan strategi finansial jangka panjang yang
              berkelanjutan.
            </p>
            <div className="flex flex-col my-8">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                Tujuan Utama
              </h3>
              <div className="flex flex-col my-3 gap-4">
                {keyobjectives.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 tracking-tight text-muted-foreground"
                  >
                    <FaCheck />
                    <Label htmlFor="terms">{text}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-10">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                Materi yang akan kamu pelajari
              </h3>
              <Accordion
                type="single"
                collapsible
                className="my-5 border border-primary rounded-md"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="border-primary border-b rounded-none px-4 py-3">
                    <div className="flex flex-row">
                      <div>
                        <div className="mx-5 bg-primary text-white rounded-full p-3 flex items-center justify-center">
                          <AiFillFolderOpen className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-lg font-semibold">
                          Pengenalan Portofolio
                        </label>
                        <div className="flex items-center gap-5 text-muted-foreground">
                          <div className="flex items-center gap-2 ">
                            <FaFileAlt className="w-4 h-4 text-muted-foreground" />
                            3 Courses
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegPlayCircle className="w-4 h-4 text-muted-foreground" />
                            12m
                          </div>
                          <div className="flex items-center gap-2">
                            <PiMonitorPlayBold className="w-4 h-4 text-muted-foreground" />
                            Video
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" px-10 py-7 mb-5">
                    <label className="my-3 text-md font-semibold">
                      Ringkasan
                    </label>
                    <div className="flex my-2">
                      <ReadMore
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ini hanya contoh teks yang panjang untuk mencoba fitur read more."
                        max={160}
                      />
                    </div>
                    <div className="flex flex-col my-3">
                      <label className="text-md font-semibold">Topik</label>
                      <div className="flex my-2">
                        <label className="bg-sidebar-ring h-5 rounded-full text-sm px-3 mr-2 text-muted">
                          Trading
                        </label>
                        <label className="bg-sidebar-ring h-5 rounded-full text-sm px-3 mr-2 text-muted">
                          Investing
                        </label>
                      </div>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      className="border border-primary rounded-lg bg-primary"
                    >
                      {materiCourse.map((materi, idx) => {
                        return (
                          <AccordionItem key={idx} value={`item-${idx + 1}`}>
                            <AccordionTrigger className="rounded-none text-white px-5 py-2 rounded-t-md h-10">
                              {materi.title}
                            </AccordionTrigger>
                            <AccordionContent className="px-3 py-3 bg-background">
                              {materi.content.map((point, i) => (
                                <div className="flex flex-row w-full py-2">
                                  <div key={idx} className="mx-2">
                                    <img
                                      src={materi.image}
                                      alt={materi.title}
                                      className="h-10 object-contain rounded-md"
                                    />
                                  </div>

                                  <div className="flex flex-col w-full px-3 ">
                                    <label
                                      key={i}
                                      className="text-md font-semibold"
                                    >
                                      {point}
                                    </label>
                                    <div className="flex items-center text-muted-foreground">
                                      <div className="flex items-center gap-2 text-sm">
                                        <FaRegPlayCircle className="w-4 h-4 text-muted-foreground" />
                                        00 : 14 : 20
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mx-2 content-center">
                                    <FaLock size="15" />
                                  </div>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Card Kanan di bagi */}
          <div className="basis-1/3 mx-6">
            <Card>
              <CardHeader>
                <CardTitle>Pahami Saham, Bangun Portofolio</CardTitle>
                <CardDescription>
                  Mulai Perjalananmu dengan Kursus Investasi dari Dasar hingga
                  Lanjutan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2 rounded-xl border px-4 py-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <div className="flex flex-col">
                      <Label htmlFor="option-one" className="text-md">
                        Rp.199.000
                        <span className="text-muted-foreground text-sm">
                          / Bulan
                        </span>
                      </Label>
                      <Label
                        htmlFor="option-two"
                        className="text-sm text-muted-foreground"
                      >
                        Lorem ipsum dolor sit amet.
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-xl border px-4 py-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <div className="flex flex-col">
                      <Label htmlFor="option-two" className="text-md">
                        Rp.300.000
                      </Label>
                      <Label
                        htmlFor="option-two"
                        className="text-sm text-muted-foreground"
                      >
                        Lorem ipsum dolor sit amet.
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
                <div className="flex items-center my-3">
                  <div className="h-px flex-grow bg-primary"></div>
                  <span className="mx-3 text-sm text-muted-foreground">
                    Metode Pembayaran
                  </span>
                  <div className="h-px flex-grow bg-primary"></div>
                </div>
                <div className="flex flex-col my-3 gap-4">
                  {benefits.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 tracking-tight text-muted-foreground text-sm"
                    >
                      <FaCircleCheck />
                      <Label htmlFor="terms">{text}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Daftar Sekarang</Button>
              </CardFooter>
            </Card>
            <Card className="my-5">
              <CardHeader className="border-b">
                <CardTitle className="text-lg">Instuktor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-10 w-10  rounded-full"
                  />
                  <label className="mx-3 text-lg font-semibold content-center">
                    Aziz
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function ReadMore({ text, max = 150 }: { text: string; max?: number }) {
  const [expanded, setExpanded] = React.useState(false);

  const isLong = text.length > max;
  const visibleText = expanded
    ? text
    : text.slice(0, max) + (isLong ? "..." : "");

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground leading-relaxed">
        {visibleText}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-medium hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
