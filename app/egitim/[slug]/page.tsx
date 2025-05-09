// app/egitim/[slug]/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    slug: string;
  };
}

export default async function VideoPage({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/giris");
  }

  const video = await prisma.video.findUnique({
    where: { id: params.slug },
  });

  if (!video) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-red-600">Video bulunamadı</h2>
        <p className="mt-2">Geçerli bir eğitim sayfası değil.</p>
      </div>
    );
  }

  const purchase = await prisma.purchase.findFirst({
    where: {
      user: { email: session.user?.email || "" },
      videoId: video.id,
    },
  });

  if (!purchase) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-red-600">Erişim Reddedildi</h2>
        <p className="mt-2">
          Bu videoya erişim izniniz bulunmuyor. Satın almak için{" "}
          <a href="/egitimler" className="text-primary underline">
            buraya tıklayın
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <p className="mb-4 text-gray-600">{video.description}</p>
      <video controls className="w-full rounded" src={video.videoUrl} />
    </div>
  );
}
