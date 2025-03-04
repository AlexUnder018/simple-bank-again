import ThemeToggler from "@/components/toggles/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto pt-2">
    <ThemeToggler></ThemeToggler>
    </main>
  );
}
