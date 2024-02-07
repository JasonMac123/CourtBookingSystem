import Link from "next/link";
import localFont from "next/font/local";

import { FaVolleyballBall } from "react-icons/fa";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition hidden md:flex items-center justify-center gap-x-2">
        <FaVolleyballBall size={24} />
        <p
          className={cn(
            "text-lg text-neutral-700 items-center justify-center",
            headingFont.className
          )}
        >
          Court Booking
        </p>
      </div>
    </Link>
  );
};
