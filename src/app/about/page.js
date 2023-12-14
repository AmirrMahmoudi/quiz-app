import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

export default async function About() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signIn?callbackUrl=/about");
  }
  const photo =
    "https://lh3.googleusercontent.com/ogw/AKPQZvxOkzt7k2r92-Pjt8mVrI1VHWmICwnCh7mab7ZC=l320";

  return (
    <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded">
      <div>
        <div className="text-gray-300 text-center mb-5">
          <h1 className="text-lg">امیرحسین محمودی</h1>
          <h2>برنامه نویس</h2>
        </div>
        {/* <Info/> */}
        <Link href={`about/photo`}>
          <Image
            alt=""
            src={photo}
            height={400}
            width={400}
            className="mx-auto rounded object-cover aspect-square"
          />
        </Link>{" "}
      </div>
    </main>
  );
}
