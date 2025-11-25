import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto my-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl shadow-md p-6 sm:p-8 lg:p-10 flex flex-col gap-8">
          <div className=" flex flex-col">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-primary mb-3">
              Kontak Kami
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Silakan isi formulir di samping untuk menghubungi tim kami. Kami
              akan merespons secepatnya.
            </p>
          </div>

          <div className="">
            <Field>
              <form className="grid w-full gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium mb-1">Nama Depan</span>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Nama Depan"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm font-medium mb-1">
                      Nama Belakang
                    </span>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Nama Belakang"
                    />
                  </label>
                </div>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Email</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@contoh.com"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Pesan</span>
                  <Textarea
                    className="min-h-[140px] resize-y"
                    placeholder="Tulis pesan anda disini."
                  />
                </label>

                <div className="pt-2">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <SendHorizontal className="h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </div>
              </form>
            </Field>
          </div>
        </div>
      </div>
    </section>
  );
}
