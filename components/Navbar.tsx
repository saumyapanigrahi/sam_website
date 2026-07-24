"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"], ["Portfolio", "/portfolio"], ["Blogs", "/blogs"],
  ["Services", "/services"], ["Business", "/business"]
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <nav className="menu-enter absolute z-20 flex w-full items-center justify-between px-6 py-7 text-stone-100 md:px-12">
      <Link href="/" className="serif text-3xl tracking-tight" aria-label="Sam home"><span className="text-[#a63238]">S</span>am<span className="text-[#a63238]">.</span></Link>
      <div className="hidden items-center gap-8 text-xs uppercase tracking-[.18em] lg:flex">
        {links.map(([label, href]) => <Link key={label} href={href} className="nav-link">{label}</Link>)}
      </div>
      <Link href="/kart" className="nav-link flex items-center gap-2 text-xs uppercase tracking-[.18em]" aria-label="Kart"><ShoppingBagIcon className="h-5 w-5" /><span className="hidden sm:inline">Kart</span></Link>
    </nav>
  );
}
