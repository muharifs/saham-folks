import * as React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogViewPage() {
  const [query, setQuery] = React.useState("");
  const images = [
    "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const blogs = React.useMemo(() => {
    return [
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
        author: "Lek sono",
        date: "01 Des 2025",
        count_category: 20,
      },
      {
        id: 4,
        image: images[3],
        category: "Strategi",
        title: "Swing Trading untuk Semua Level",
        date: "07 Okt 2025",
        author: "Bambang",
        count_category: 15,
      },
      {
        id: 5,
        image: images[4],
        category: "Tips",
        title: "Cara Menyusun Portofolio Anti Rugi",
        date: "09 Nov 2025",
        author: "Alex",
        count_category: 25,
      },
    ];
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter((c) => {
      return (
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.author.toLowerCase().includes(q)
      );
    });
  }, [query, blogs]);

  return (
    <>
      <section
        id="blog-all"
        className="container w-full mx-auto mt-25 min-h-screen"
      >
        <main className="flex flex-col w-full gap-4 px-4 md:px-15">
          <div className="bg-primary-foreground h-40 mx-2 px-7 rounded-md content-center md:mx-8 lg:h-50 lg:mx-20 lg:rounded-lg xl:rounded-xl xl:mx-30">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5 place-self-center text-primary">
              Popular All Blogs
            </h1>
            <div className="flex flex-row justify-center">
              <InputGroup className="h-12 w-full max-w-2xl">
                <InputGroupInput
                  placeholder="Cari Kelas"
                  value={query}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setQuery(e.target.value)
                  }
                />
                <InputGroupAddon>
                  <FaSearch />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          {/* Blog list would go here */}
          {/* test filter */}
          <div className="flex flex-col mx-10 gap-5 md:gap-7 md:mx-25 lg:gap-10 lg:my-10 lg:mx-35 xl:mx-75">
            {filtered.map((c) => (
              <ListPage key={c.id} blog={c} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center text-muted-foreground py-10">
                Tidak ditemukan kelas untuk "{query}".
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
function ListPage({
  blog,
}: {
  blog: {
    id: number;
    image: string;
    category: string;
    title: string;
    author: string;
    avatar?: string;
    date: string;
    count_category: number;
  };
}) {
  const navigate = useNavigate();
  const go = () => navigate(`/blog/${blog.id}`);
  return (
    <>
      <div
        className="flex flex-col gap-3 md:gap-5 lg:flex lg:flex-row-reverse lg:gap-7 lg:items-stretch xl:gap-10 cursor-pointer"
        onClick={go}
      >
        <div className="md:basis-1/3">
          <img
            src={blog.image}
            className="rounded-md object-cover h-30 w-full md:h-35 lg:rounded-lg xl:rounded-xl"
          />
        </div>
        <div className="md:basis-2/3 lg:h-full lg:flex lg:flex-col lg:justify-between">
          <div className="text-xs font-semibold bg-primary text-background rounded-xs w-25 h-5 content-center mb-2 flex items-center justify-center md:rounded-sm">
            <span>{blog.category}</span>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {blog.title}
          </h4>
          <p className="leading-7 lg:leading-5 [&:not(:first-child)]:mt-2">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
          <small className="text-sm leading-none font-bold flex mt-3 text-primary">
            {blog.author}
            <ul className="ml-6 list-disc">
              <li>
                <div className="text-muted-foreground">{blog.date}</div>
              </li>
            </ul>
          </small>
        </div>
      </div>
    </>
  );
}
