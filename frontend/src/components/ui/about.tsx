import Banner from "@/assets/pexels-photo-7414273.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto my-10 px-4 sm:px-0 gap-16 items-center"
    >
      <div className="bg-muted/50 flex-1 rounded-xl md:min-h-min px-20 py-20">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-center w-full text-primary">
          Tentang Saham Folks
        </h2>
        <p className="text-muted-foreground text-md text-center mt-3">
          "membantu masyarakat Indonesia lebih melek finansial"
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 lg-text-lg text-center">
          Saham Folks adalah platform edukasi online yang membantu siapa saja
          memahami dunia investasi saham dengan cara yang sederhana, praktis,
          dan terarah. Kami percaya bahwa investasi bukan hanya untuk kalangan
          tertentu, tetapi bisa dipelajari oleh siapa saja yang ingin mengelola
          keuangan dengan lebih baik dan membangun masa depan finansial yang
          kuat.
        </p>
      </div>
      <AspectRatio className="mx-auto my-5" ratio={4 / 3}>
        <img src={Banner} alt="Image" className="rounded-md object-cover" />
      </AspectRatio>
      <div className="flex flex-col mx-auto my-7 gap-y-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Misi Kami
        </h3>
        <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
          Memberikan edukasi investasi yang berkualitas dan mudah dipahami untuk
          menciptakan investor cerdas dan berpengalaman di Indonesia.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Visi Kami
        </h3>
        <p className="leading-7 [&:not(:first-child)] text-muted-foreground">
          Menjadi platform edukasi investasi nomor satu di Indonesia yang
          membantu jutaan investor mencapai kebebasan finansial.
        </p>
      </div>
    </section>
  );
}
