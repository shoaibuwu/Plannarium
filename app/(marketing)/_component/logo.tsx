import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        alt="Logo"
        src={"/logo.svg"}
        height={40}
        width={40}
        className="dark:hidden"
      />
      <Image
        alt="Logo"
        src={"/logo-dark.svg"}
        height={40}
        width={40}
        className="hidden dark:block"
      />

      <p className={cn("font-semibold", font.className)}>Planarium</p>
    </div>
  );
};

export default Logo;
