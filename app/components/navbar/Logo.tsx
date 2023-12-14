"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="md:block cursor-pointer"
      src="/images/servifyLogo.png"
      height={100}
      width={70}
      alt="Logo"
    />
  );
};

export default Logo;
