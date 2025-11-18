import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Banner from "@/assets/dumy-class-01.jpg";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  const go = () => navigate("/course/123");
  return (
    <section
      id="course"
      className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center md:px-8"
    >
      <div className="flex-1 md:min-h-min mx-3 py-10">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-left w-full text-primary md:text-4xl">
          Course Saham Folks
        </h2>
        <p className="text-muted-foreground text-md mt-3 text-left">
          Mau mulai investasi saham tapi bingung harus mulai dari mana? Tenang,
          Folks hadir buat bantu kamu! Ikuti online course kami yang mudah
          dipahami, fleksibel, dan langsung dipandu mentor-mentor andal di
          bidangnya. Yuk, mulai perjalanan investasimu bareng Folks sekarang
          juga!
        </p>
        <div className="flex flex-row gap-3 mt-5">
          <Button size="lg">Pilih Course</Button>
          <Button size="lg" variant="outline">
            Konsultasi Gratis
          </Button>
        </div>
        <div className="flex flex-col my-5 gap-6 lg:grid lg:grid-cols-3">
          <Card
            onClick={go}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") go();
            }}
            className="gap-1 cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
          >
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <img
                  src={Banner}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary lg:text-xl">
                  Pahami Saham, Bangun Portofolio: Kursus Investasi dari Dasar
                  hingga Lanjutan
                </h3>
              </CardTitle>
              <CardDescription className="text-lg font-semibold">
                Rp. 199.000/bulan
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="gap-1">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <img
                  src={Banner}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary lg:text-xl">
                  Mengenal Dunia Saham: Dari Pemula hingga Ahli Investasi
                </h3>
              </CardTitle>
              <CardDescription className="text-lg font-semibold">
                Rp. 199.000/bulan
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="gap-1">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <img
                  src={Banner}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary lg:text-xl">
                  Investasi Cerdas: Menguasai Saham, Obligasi, dan Instrumen
                  Keuangan Lainnya
                </h3>
              </CardTitle>
              <CardDescription className="text-lg font-semibold">
                Rp. 199.000/bulan
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
