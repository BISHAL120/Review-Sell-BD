import Main from "@/components/Shared/Main";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="">
      <Main />
      <div>
        <Link
          href={"https://wa.me/+8801994506240"}
          className="fixed hidden md:block bottom-10 right-10"
        >
          <FaWhatsapp size={50} />
        </Link>
      </div>
    </main>
  );
}
