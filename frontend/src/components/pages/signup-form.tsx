import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { User, CircleUser, MailIcon, Lock, Eye, EyeOff } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col gap-1 text-center items-center">
          <h1 className="text-2xl font-bold text-primary">Registrasi</h1>
          <p className="text-muted-foreground text-sm">
            Buat akun baru untuk memulai perjalanan Anda bersama saham-folk.
          </p>
        </div>
        <Field>
          <InputGroup>
            <InputGroupInput
              id="name"
              type="text"
              placeholder="Nama Lengkap"
              required
            />
            <InputGroupAddon>
              <CircleUser />
            </InputGroupAddon>
          </InputGroup>
        </Field>
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
            <InputGroupInput
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            <InputGroupAddon>
              <MailIcon />
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
          <FieldDescription>Panjangnya minimal 8 karakter.</FieldDescription>
        </Field>
        <Field>
          <InputGroup>
            <InputGroupInput id="confirm-password" type="password" required />
            <InputGroupAddon>
              <Lock />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Harap konfirmasi kata sandi Anda.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Buat Akun</Button>
        </Field>
        <FieldSeparator>Atau Lanjutkan dengan Akun</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            Daftar dengan Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Kamu sudah memiliki akun?{" "}
            <Link to="/auth/login" className="text-primary">
              Masuk
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
