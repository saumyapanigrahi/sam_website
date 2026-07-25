import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-[#090909] text-stone-100">
      <section className="relative flex min-h-[65vh] items-center justify-center px-6 text-center">
        <Navbar />
        <div className="pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">Services</p>
          <h1 className="serif mt-5 text-6xl md:text-8xl">Coming soon.</h1>
          <p className="mx-auto mt-6 max-w-md leading-7 text-stone-400">
            Thoughtful articles and ideas will be shared here soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}