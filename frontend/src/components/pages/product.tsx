import { AspectRatio } from "@/components/ui/aspect-ratio";
import Banner from "@/assets/dumy-class-01.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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

const materiCourse = [
  {
    title: "Pengenalan Investasi Saham",
    content: [
      "Apa itu saham dan bagaimana cara kerjanya",
      "Perbedaan antara trading dan investing",
    ],
  },
  {
    title: "Dasar Analisis Fundamental",
    content: ["Membaca laporan keuangan", "Menilai valuasi perusahaan"],
  },
  {
    title: "Analisis Teknikal untuk Pemula",
    content: ["Pola grafik (chart pattern)", "Indikator teknikal populer"],
  },
  {
    title: "Manajemen Risiko dan Psikologi Investor",
    content: ["Cara menghindari fear & greed", "Diversifikasi portofolio"],
  },
  {
    title: "Membangun Portofolio Investasi Pribadi",
    content: [
      "Strategi jangka panjang vs jangka pendek",
      "Praktik langsung melalui simulasi",
    ],
  },
  {
    title: "Kelas Lanjutan: Strategi Profesional",
    content: ["Membaca sentimen pasar", "Studi kasus dan analisis real market"],
  },
];

const platformCourse = [
  {
    title: "Learning Platform",
    description: "LMS custom berbasis React & Django",
  },
  {
    title: "Simulasi Saham",
    description: "API real-time (Yahoo Finance / Alpha Vantage)",
  },
  {
    title: "Community Chat",
    description: "Discord Private Group",
  },
  {
    title: "Quiz & Evaluasi",
    description: "Google Forms terintegrasi",
  },
  {
    title: "Certificate Generator",
    description: "System berbasis PDF.js",
  },
];

export default function Course() {
  return (
    <section
      id="product"
      className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center md:px-6"
    >
      <div className="flex-1 md:min-h-min mx-3 py-10">
        <AspectRatio ratio={4 / 3}>
          <img src={Banner} alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-left w-full text-primary">
          Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar hingga
          Lanjutan
        </h2>
        <p className="text-muted-foreground text-md text-center mt-3 text-left">
          Kursus komprehensif untuk membantu pemula memahami dunia saham dari
          nol hingga mampu membangun portofolio investasi yang menguntungkan dan
          berkelanjutan. Dirancang interaktif dengan studi kasus nyata dan
          simulasi pasar.
        </p>
        <div className="flex flex-row gap-3 mt-5">
          <Button size="lg">Dapatkan Promo</Button>
          <Button size="lg" variant="outline">
            Konsultasi Gratis
          </Button>
        </div>
        <div className="my-20">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            Tentang Course
          </h3>
          <p className="text-muted-foreground text-md text-center mt-3 text-left">
            Kursus “Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar
            hingga Lanjutan” dirancang untuk siapa pun yang ingin memulai
            perjalanan investasi dengan pemahaman yang kuat dan terarah. Di
            sini, peserta akan belajar dari nol tentang konsep dasar saham,
            mekanisme pasar modal, hingga strategi membangun portofolio yang
            sehat dan menguntungkan. Setiap materi disusun secara bertahap agar
            mudah dipahami, bahkan bagi yang belum pernah berinvestasi
            sebelumnya. Pendekatannya tidak hanya teoritis, tetapi juga praktis
            dengan banyak contoh kasus nyata, latihan analisis, dan panduan
            langkah demi langkah untuk membuat keputusan investasi yang lebih
            cerdas dan terukur.
          </p>
          <p className="text-muted-foreground text-md text-center mt-3 text-left">
            Selain itu, kursus ini menghadirkan pengalaman belajar yang
            interaktif dengan kombinasi video pembelajaran, kuis, dan simulasi
            pasar saham berbasis data real-time. Peserta akan diajak memahami
            bagaimana membaca tren, menganalisis laporan keuangan, hingga
            mengenali psikologi pasar yang sering memengaruhi keputusan
            investor. Dengan dukungan komunitas belajar eksklusif dan bimbingan
            langsung dari mentor berpengalaman, kursus ini menjadi wadah ideal
            untuk membangun kepercayaan diri dalam berinvestasi serta
            mengembangkan strategi finansial jangka panjang yang berkelanjutan.
          </p>
        </div>
        <div className="flex flex-col my-20 gap-5">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            Benefit yang akan kamu dapatkan
          </h3>
          {benefits.map((text) => (
            <Card className="bg-primary">
              <CardHeader>
                <CardTitle>
                  <h4 className="scroll-m-20 text-md font-semibold tracking-tight text-muted">
                    {text}
                  </h4>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="my-20">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary mb-6">
            Platform yang akan kamu gunakan
          </h3>

          <Card className="bg-muted hover:bg-muted/80 transition">
            <CardHeader>
              {platformCourse.map((platform) => (
                <CardTitle>
                  <div className="text-lg font-semibold">{platform.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {platform.description}
                  </div>
                </CardTitle>
              ))}
            </CardHeader>
          </Card>
        </div>
        <div className="my-20">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            Materi yang akan kamu pelajari
          </h3>
          <Accordion type="single" collapsible>
            {materiCourse.map((materi, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{materi.title}</AccordionTrigger>
                <AccordionContent>
                  {materi.content.map((point, i) => (
                    <p key={i} className="text-sm text-muted-foreground mb-2">
                      {point}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
