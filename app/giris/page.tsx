"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <Card className="w-full max-w-md border-primary">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-4">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artenpreneur%20Logo%20PNG%20%281%29-LDpQslivMoLmYgWJVTV30XTdiGEUQI.png"
                alt="Artenpreneur Logo"
                width={180}
                height={60}
              />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-primary-foreground">Giriş Yap</CardTitle>
          <p className="text-sm text-text-secondary">Hesabınıza giriş yaparak eğitimlerinize erişebilirsiniz</p>
        </CardHeader>

        <CardContent>
          {/* Google ile giriş */}
          <Button
            onClick={() => signIn("google")}
            className="w-full mb-6 bg-white text-black border hover:bg-gray-100"
            variant="outline"
          >
            Google ile Giriş Yap
          </Button>

          {/* E-posta ile giriş alanı (şu an aktif değil ama ileride desteklenebilir) */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@mail.com"
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="border-primary/30 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Beni hatırla
                </Label>
              </div>
              <Link href="/sifremi-unuttum" className="text-sm text-primary-foreground hover:text-primary-dark">
                Şifremi unuttum
              </Link>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
              Giriş Yap
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary">
              Henüz hesabınız yok mu?{" "}
              <Link href="/kayit" className="text-primary-foreground hover:text-primary-dark font-medium">
                Kayıt Ol
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
