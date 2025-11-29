import Banner from "@/assets/pexels-photo-7414273.jpeg";

const valuesData = [
  {
    id: 1,
    desc: "Edukasi Investasi Terstruktur",
    detail:
      "Kelas video jelas dan berurutan untuk membantu user memahami investasi dari dasar hingga mahir.",
  },
  {
    id: 2,
    desc: "Tools Produktivitas & Sosial Media",
    detail:
      "Fitur autopost yang memudahkan pengguna mempublikasikan konten ke banyak platform sekaligus.",
  },
  {
    id: 3,
    desc: "Insight Eksklusif & Komunitas Aktif",
    detail:
      "Akses ke Stock Pick harian, komunitas WhatsApp & Discord, serta pengumuman Live langsung dari admin.",
  },
  {
    id: 4,
    desc: "Kelas Premium dengan Pembayaran Fleksibel",
    detail:
      "Berbagai kelas berbayar yang dapat diakses dengan metode pembayaran lengkap dan mudah.",
  },
];

export default function About() {
  return (
    <section id="about" className="container w-full mx-auto mt-25 min-h-screen">
      <main className="flex flex-col w-full gap-4 px-4 md:px-15 xl:gap-10">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="bg-muted rounded-xl mx-3 px-10 py-10 md:mx-10 lg:basis-1/2 lg:mx-0">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-primary mb-5">
              About
            </h4>
            <h2 className="scroll-m-20 pb-2 text-3xl font-normal tracking-tight first:mt-0 w-full lg:text-5xl">
              Membantu Masyarakat Indonesia Lebih Melek Finansial
            </h2>
            <p className="leading-6 lg:leading-7 [&:not(:first-child)]:mt-30 text-muted-foreground lg:text-lg ">
              Saham Folks adalah platform edukasi online yang membantu siapa
              saja memahami dunia investasi saham dengan cara yang sederhana,
              praktis, dan terarah. Kami percaya bahwa investasi bukan hanya
              untuk kalangan tertentu, tetapi bisa dipelajari oleh siapa saja
              yang ingin mengelola keuangan dengan lebih baik dan membangun masa
              depan finansial yang kuat.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:mx-7 lg:basis-1/2 lg:mx-0 ">
            <img
              src={Banner}
              alt="Image"
              className="mx-3 rounded-md object-cover lg:mx-0 lg:object-fill"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted rounded-xl mx-3 p-6 lg:mx-0">
              <div className="bg-muted-foreground/5 rounded-lg p-5">
                <h2 className="scroll-m-20 pb-2 text-2xl md:text-3xl font-normal tracking-tight first:mt-0 w-full">
                  10.000+
                </h2>
                <p className="leading-4 [&:not(:first-child)] text-muted-foreground text-sm">
                  Anggota Komunitas Investor
                </p>
              </div>
              <div className="bg-muted-foreground/10 rounded-lg p-5">
                <h2 className="scroll-m-20 pb-2 text-2xl md:text-3xl font-normal tracking-tight first:mt-0 w-full">
                  100
                </h2>
                <p className="leading-4 [&:not(:first-child)] text-muted-foreground text-sm">
                  Jam Pembelajaran
                </p>
              </div>
              <div className="bg-muted-foreground/10 rounded-lg p-5">
                <h2 className="scroll-m-20 pb-2 text-2xl md:text-3xl font-normal tracking-tight first:mt-0 w-full">
                  200+
                </h2>
                <p className="leading-4 [&:not(:first-child)] text-muted-foreground text-sm">
                  Materi & Artikel Edukasi
                </p>
              </div>
              <div className="bg-muted-foreground/10 rounded-lg p-5">
                <h2 className="scroll-m-20 pb-2 text-2xl md:text-3xl font-normal tracking-tight first:mt-0 w-full">
                  95%
                </h2>
                <p className="leading-4 [&:not(:first-child)] text-muted-foreground text-sm">
                  Pengguna Merasakan Manfaat Belajar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="rounded-xl mx-3 px-8 py-6 md:mx-10 lg:mx-0 lg:px-0">
            <h2 className="scroll-m-20 pb-2 text-4xl font-normal tracking-tight first:mt-0 w-full">
              Apa yang membuat kita
              <span className="text-primary"> Berbeda</span>
            </h2>
            <p className="leading-6 lg:leading-7 [&:not(:first-child)]:mt-5 text-muted-foreground lg:text-lg ">
              Website ini menyediakan video kelas investasi yang terstruktur,
              blog edukatif, Stock Pick eksklusif, akses komunitas WhatsApp &
              Discord, pengumuman Live langsung dari admin, serta pilihan kelas
              berbayar dengan metode pembayaran lengkap.
            </p>
          </div>
          <div className="flex flex-col mx-3 gap-4 lg:py-7">
            {valuesData.map((value) => (
              <div key={value.id} className="flex flex-row gap-4">
                <div className="basis-1/3 content-center justify-items-center">
                  <h4 className="bg-primary scroll-m-20 text-4xl font-semibold tracking-tight text-primary-foreground w-12 h-12 flex items-center justify-center rounded-lg">
                    {value.id}
                  </h4>
                </div>
                <div className="basis-2/3">
                  <h2 className="scroll-m-20 pb-2 text-2xl font-normal tracking-tight first:mt-0 w-full">
                    {value.desc}
                  </h2>
                  <p className="leading-6 lg:leading-7 [&:not(:first-child)]:mt-1 text-muted-foreground lg:text-lg ">
                    {value.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
