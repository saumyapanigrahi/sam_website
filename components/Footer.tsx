import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const socialLinks = [["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedin.com"], ["YouTube", "https://youtube.com"], ["Facebook", "https://facebook.com"], ["X / Twitter", "https://x.com"]];
export default function Footer() {
  return <footer className="bg-[#1e1b19] px-6 py-14 text-stone-200 md:px-12">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><p className="serif text-4xl"><span className="text-[#b53a40]">S</span>am.</p><p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">A considered space for meaningful work, thoughtful ideas, and the things I’m building.</p></div>
      <div><p className="mb-4 text-xs uppercase tracking-[.18em] text-stone-500">Get in touch</p><a className="block text-sm hover:text-[#d2696e]" href="mailto:hello@sam.com">hello@sam.com</a><a className="mt-2 block text-sm hover:text-[#d2696e]" href="tel:+910000000000">+91 00000 00000</a><p className="mt-3 text-sm text-stone-400">Your city, India</p></div>
      <div><p className="mb-4 text-xs uppercase tracking-[.18em] text-stone-500">Find me</p><div className="grid grid-cols-2 gap-y-3">{socialLinks.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm hover:text-[#d2696e]">{name}<ArrowUpRightIcon className="h-3 w-3" /></a>)}</div></div>
    </div>
    <p className="mx-auto mt-14 max-w-6xl border-t border-stone-700 pt-5 text-xs text-stone-500">© {new Date().getFullYear()} Sam. All rights reserved.</p>
  </footer>;
}
