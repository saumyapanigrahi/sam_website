import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Placeholder({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const title = section === "kart" ? "Kart" : section.charAt(0).toUpperCase() + section.slice(1);
  return <main><section className="relative min-h-[65vh] bg-[#28211e]" style={{ backgroundImage: "linear-gradient(rgba(25,20,18,.76), rgba(25,20,18,.88)), url('/images/hero-background.svg')", backgroundSize: "cover", backgroundPosition: "center" }}><Navbar /><div className="flex min-h-[65vh] items-center justify-center px-6 pt-16 text-center text-stone-100"><div><p className="text-xs uppercase tracking-[.25em] text-[#d18b8e]">{title}</p><h1 className="serif mt-4 text-6xl md:text-8xl">Coming soon.</h1><p className="mx-auto mt-6 max-w-md leading-7 text-stone-300">This page is being thoughtfully prepared. Please check back soon.</p></div></div></section><Footer /></main>;
}
