import * as React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FaSearch } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Course() {
  const [query, setQuery] = React.useState("");

  const courses = React.useMemo(() => {
    return [
      {
        id: "123",
        title:
          "Strategi investasi saham:  analisis teknikal dan manajemen risiko",
        price: "Rp. 199.000",
        lessons: 23,
        duration: "1 hr 33 min",
        image:
          "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "c2",
        title: "Analisis Fundamental: Menilai Kesehatan Perusahaan",
        price: "Rp. 249.000",
        lessons: 18,
        duration: "2 hr 10 min",
        image:
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "c3",
        title: "Portofolio & Manajemen Risiko untuk Investor Pemula",
        price: "Rp. 179.000",
        lessons: 12,
        duration: "1 hr 5 min",
        image:
          "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "c4",
        title: "Sinyal & Strategi Trading Saham Harian",
        price: "Rp. 159.000",
        lessons: 10,
        duration: "0 hr 50 min",
        image:
          "https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "c5",
        title: "Psikologi Trading: Mengatasi Emosi saat Investasi",
        price: "Rp. 129.000",
        lessons: 8,
        duration: "0 hr 40 min",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "c6",
        title: "Analisa Teknikal Lanjutan: Pattern & Indicator",
        price: "Rp. 299.000",
        lessons: 30,
        duration: "3 hr 20 min",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((c) => {
      return (
        c.title.toLowerCase().includes(q) ||
        String(c.price).toLowerCase().includes(q) ||
        String(c.lessons).includes(q)
      );
    });
  }, [query, courses]);

  return (
    <section
      id="course"
      className="container mx-auto mt-20 my-10 px-4 sm:px-0 gap-16 items-center md:px-8"
    >
      <div className="flex-1 md:min-h-min mx-3 py-10">
        <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 justify-center text-center w-full text-primary md:text-3xl lg:text-4xl">
          Kelas Saham Terbaik untuk Membangun Karier Finansialmu
        </h2>
        <p className="text-muted-foreground text-md mt-3 text-center lg:text-lg">
          Dapatkan insight dan strategi terbaru seputar saham, investasi, dan
          pengembangan finansial.
        </p>
        <div className="flex flex-row mt-5 justify-center">
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

        <div className="flex flex-col my-5 gap-6 lg:grid lg:grid-cols-3">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center text-muted-foreground py-10">
              Tidak ditemukan kelas untuk "{query}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
}: {
  course: {
    id: string;
    title: string;
    price: string;
    lessons: number;
    duration: string;
    image: string;
  };
}) {
  const navigate = useNavigate();
  const go = () => navigate(`/course/${course.id}`);
  return (
    <Card>
      <CardHeader>
        <img
          src={course.image}
          alt={course.title}
          className="rounded-md object-cover mb-2 w-full h-44"
        />
        <CardDescription className="flex flex-row gap-4 justify-between items-center lg:text-lg ">
          <div className="flex flex-row gap-2 items-center">
            <FaGraduationCap className="w-4 h-4" /> {course.lessons} lesson
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoTime className="w-4 h-4" /> {course.duration}
          </div>
          <div className="text-primary">{course.price}</div>
        </CardDescription>
        <CardTitle>
          <h3
            className="scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight text-accent-foreground hover:text-primary cursor-pointer"
            onClick={go}
          >
            {course.title}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button onClick={go} className="mt-5 font-semibold">
          Belajar Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
}
