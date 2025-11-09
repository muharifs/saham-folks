import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Banner from "@/assets/dumy-class-01.jpg";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BlogPage() {
  return (
    <>
      <section
        id="blog"
        className="container flex flex-col w-full mx-auto px-5 gap-6 md:px-15"
      >
        <div className="flex flex-col my-25 lg:gap-8 lg:flex-row-reverse lg:items-center">
          <img
            src={Banner}
            alt="Image"
            className="h-auto w-full rounded-lg object-cover lg:w-3/5 lg:max-h-[480px]"
          />
          <div className="flex flex-col px-2 gap-3 lg:w-2/5 lg:justify-center">
            <CardDescription className="pt-5">
              <code className="relative rounded px-[0.3rem] py-[0.2rem] text-sm font-semibold lg:text-base">
                Artikel Terbaru
              </code>
            </CardDescription>
            <CardTitle className="">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary lg:text-4xl">
                Analsis Fundamental : Cara Menilai Kesehatan Perusahaan
              </h3>
            </CardTitle>
            <CardContent className="flex flex-col px-0 gap-4">
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground lg:text-lg">
                Memahami laporan keuangan dan rasio-rasio kunci untuk menentukan
                nilai intrinsik sebuah saham.
              </p>
              <Button className="w-1/2" size="lg">
                Baca Selengkapnya
              </Button>
            </CardContent>
          </div>
        </div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-primary">
          Semua Artikel
        </h2>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
          <Card className="mx-5 pt-0">
            <CardHeader className="px-0">
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <img
                  src={Banner}
                  alt="Image"
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </AspectRatio>
              <CardDescription className="px-6 pt-5">
                <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] text-sm font-semibold">
                  Artikel Terbaru
                </code>
              </CardDescription>
              <CardTitle className="px-6">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                  Analsis Fundamental : Cara Menilai Kesehatan Perusahaan
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                Memahami laporan keuangan dan rasio-rasio kunci untuk menentukan
                nilai intrinsik sebuah saham.
              </p>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
              <p className="text-muted-foreground text-sm w-full">
                5 menit baca
              </p>
              <Button variant="outline" className="">
                Baca Selengkapnya
              </Button>
            </CardFooter>
          </Card>
          <Card className="mx-5 pt-0">
            <CardHeader className="px-0">
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <img
                  src={Banner}
                  alt="Image"
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </AspectRatio>
              <CardDescription className="px-6 pt-5">
                <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] text-sm font-semibold">
                  Strategi
                </code>
              </CardDescription>
              <CardTitle className="px-6">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                  Mengelola Risiko dalam Portfolio Investasi
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                Teknik manajemen risiko yang efektif untuk melindungi portfolio
                dari fluktuasi pasar yang ekstrem.
              </p>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
              <p className="text-muted-foreground text-sm w-full">
                10 menit baca
              </p>
              <Button variant="outline" className="">
                Baca Selengkapnya
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}
