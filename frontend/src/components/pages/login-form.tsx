import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo1.png";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { User, Lock } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-primary">Masuk</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Selamat datang di platform Saham-Folk
          </p>
        </div>
        <Field>
          <InputGroup>
            <InputGroupInput
              id="username"
              type="text"
              placeholder="Username"
              required
            />
            <InputGroupAddon>
              <User />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <InputGroup>
            <InputGroupInput id="password" type="password" required />
            <InputGroupAddon>
              <Lock />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex items-center">
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline text-primary"
            >
              Lupa password Kamu?
            </a>
          </div>
        </Field>
        <Field>
          <Button type="submit">Masuk</Button>
        </Field>
        <FieldSeparator>Atau Lanjutkan dengan Akun</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            Masuk dengan Google
          </Button>
          <FieldDescription className="text-center">
            Kamu belum memiliki akun?{" "}
            <Link to="/auth/register" className="text-primary">
              Registrasi
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="lg:hidden flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="text-primary-foreground flex size-40 items-center justify-center rounded-md">
              <img src={Logo} alt="Logo" className="color:transparent" />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={Logo}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
