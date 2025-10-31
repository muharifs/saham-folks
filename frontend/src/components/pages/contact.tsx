import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import Banner from "@/assets/cs.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex w-full flex-col mx-auto my-20 px-10 sm:px-0 gap-16"
    >
      <div className="w-full lg:w-1/2">
        <AspectRatio
          className="mx-auto my-5 px-10 md:flex md:items-center md:max-w-screen-sm"
          ratio={4 / 3}
        >
          <img src={Banner} alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className="w-full lg:w-1/2 md:px-10">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full text-primary my-2">
          Kontak Kami
        </h2>
        <Field>
          {/* Input, Select, Switch, etc. */}
          <div className="grid w-full gap-2">
            <div className="flex flex-row gap-2">
              <Input type="name" placeholder="Nama Depan" />
              <Input type="name" placeholder="Nama Belakang" />
            </div>
            <Input type="email" placeholder="Email" />
            <Textarea className="h-30" placeholder="Tulis pesan anda disini." />
            <Button>
              <SendHorizontal />
              Kirim Pesan
            </Button>
          </div>
        </Field>
      </div>
    </section>
  );
}
