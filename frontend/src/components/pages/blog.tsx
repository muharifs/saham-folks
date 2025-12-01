import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const images = [
  "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
interface Post {
  id: number;
  image: string;
  category: string;
  title: string;
  author?: string; // optional, karena tidak semua ada
  avatar?: string; // optional
  date: string;
  count_category: number;
}

const posts: Post[] = [
  {
    id: 1,
    image: images[0],
    category: "Saham Dasar",
    title: "Cara Memulai Investasi Saham untuk Pemula",
    author: "John Doe",
    avatar: "https://i.pravatar.cc/50?img=1",
    date: "15 Nov 2025",
    count_category: 50,
  },
  {
    id: 2,
    image: images[1],
    category: "Analisis Teknikal",
    title: "Mengenal Pola Candlestick",
    date: "05 Nov 2025",
    avatar: "https://i.pravatar.cc/50?img=1",
    author: "Malika",
    count_category: 34,
  },
  {
    id: 3,
    image: images[2],
    category: "Market Update",
    title: "IHSG Hari Ini Naik 2%",
    date: "01 Des 2025",
    count_category: 20,
  },
  {
    id: 4,
    image: images[3],
    category: "Strategi",
    title: "Swing Trading untuk Semua Level",
    date: "07 Okt 2025",
    count_category: 15,
  },
  {
    id: 5,
    image: images[4],
    category: "Tips",
    title: "Cara Menyusun Portofolio Anti Rugi",
    date: "09 Nov 2025",
    count_category: 25,
  },
];

function HeroArticle({ post }: { post: Post }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };
  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-lg"
        onClick={handleClick}
      >
        {/* Bagian Gambar Utama */}
        <img
          src={post.image}
          className="rounded-md object-cover w-full lg:h-145 h-auto transform transition-all duration-500 ease-out filter hover:scale-105 hover:brightness-90 cursor-pointer"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-md">
          {/* Kategori */}
          <span className="text-xs bg-primary h-5 px-4 rounded inline-block mb-2 place-content-center font-thin">
            {post.category}
          </span>

          {/* Judul */}
          <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

          {/* Author + Avatar + Tanggal */}
          <div className="flex items-center gap-3">
            <img
              src={post.avatar}
              className="w-8 h-8 rounded-full object-cover "
            />
            <div className="flex flex-row gap-5 items-center">
              <span className="text-base font-medium">{post.author}</span>
              <span className="text-xs text-gray-300">{post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ListArticle({
  cardClass = "border py-5 cursor-pointer hover:shadow-lg hover:text-primary ",
  headerClass = "flex gap-3",
}) {
  const navigate = useNavigate();
  const go = () => navigate("/detail-blog");
  return (
    <>
      {[...posts.slice(1), ...posts.slice(1)].map((post) => (
        <Card className={cardClass} onClick={go} key={post.id}>
          <CardHeader className={headerClass}>
            <CardAction className="self-center basis-1/3">
              <img
                src={post.image}
                className="rounded-md object-cover h-20 w-25 xl:w-full"
              />
            </CardAction>
            <CardAction className="self-center basis-2/3">
              <CardTitle className="text-xs bg-primary/60 px-3 py-1 mb-1 rounded-sm w-fit text-primary-foreground ">
                {post.category}
              </CardTitle>
              <CardTitle className="text-base leading-5">
                {post.title}
              </CardTitle>
              <CardDescription className="text-sm">{post.date}</CardDescription>
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}

export default function BlogPage() {
  const navigate = useNavigate();
  const go = () => navigate("/blog/all");
  return (
    <>
      <section
        id="blog"
        className="container w-full mx-auto mt-25 px-5 md:px-15 min-h-screen"
      >
        <main className="flex flex-col lg:flex-row w-full gap-4 ">
          <div className="lg:basis-1/2 relative">
            <HeroArticle post={posts[0]} />
          </div>
          {/* 4 Gambar Lain */}
          <div className="lg:basis-1/2 grid grid-cols-2 gap-4">
            {posts.slice(1, 6).map((post) => (
              <div
                className="relative w-full overflow-hidden rounded-lg"
                key={post.id}
              >
                {/* Bagian Gambar Utama */}
                <img
                  src={post.image}
                  className="rounded-md object-cover w-full md:h-56 lg:h-70 h-auto transform transition-all duration-500 ease-out filter hover:scale-105 hover:brightness-90 cursor-pointer"
                  onClick={() => navigate(`/blog/${post.id}`)}
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white       pointer-events-none rounded-md lg:p-7">
                  <span className="text-xs bg-primary px-3 py-1 rounded w-fit mb-2">
                    {post.category}
                  </span>

                  <h3 className="text-sm font-light leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </main>
        <div className="lg:flex lg:flex-row lg:gap-5 lg:my-6">
          {/* artikel populer dan lainnya - left*/}
          <div className="lg:basis-2/3">
            <div className="flex flex-col my-4">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary my-5 flex justify-between">
                Popular Artikel
                <Button
                  variant="outline"
                  className="w-32 mb-5 text-secondary-foreground"
                  onClick={go}
                >
                  Lihat Semua
                </Button>
              </h3>

              <div className="w-full relative">
                <HeroArticle post={posts[0]} />
              </div>
              <div className="flex flex-col gap-3 my-5 md:grid md:grid-cols-2 md:gap-4">
                <ListArticle />
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
            </div>
            <div className="flex flex-col my-4">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary my-5 flex justify-between">
                Artikel Terbaru
                <Button
                  variant="outline"
                  className="w-32 mb-5 text-secondary-foreground"
                  onClick={go}
                >
                  Lihat Semua
                </Button>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <HeroArticle post={posts[0]} />
                <HeroArticle post={posts[1]} />
              </div>
              <div className="flex flex-col gap-3 my-5 md:grid md:grid-cols-2 md:gap-4">
                <ListArticle />
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
            </div>
          </div>
          <div className="lg:basis-1/3">
            {/* right */}
            <div className="flex flex-col my-4 px-5 py-5 border shadow-sm bg-card rounded-xl">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary my-5 mx-1">
                Other Artikel
              </h3>
              <div className="flex flex-col">
                <ListArticle
                  cardClass="rounded-none shadow-none border-none py-2 cursor-pointer hover:text-primary"
                  headerClass="flex px-1 gap-3"
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-col my-4 px-5 py-5 border shadow-sm bg-card rounded-xl">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary my-5 mx-1">
                Kategori
              </h3>
              <div className="flex justify-between">
                <ul className="ml-6 list-disc [&>li]:mt-2 font-normal">
                  {posts.slice(1).map((post) => (
                    <li key={post.id}>{post.category}</li>
                  ))}
                </ul>
                <ul className="mx-5 ml-6 list-disc [&>li]:mt-2">
                  {posts.slice(1).map((post) => (
                    <li key={post.id} className="flex text-primary">
                      {post.count_category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
