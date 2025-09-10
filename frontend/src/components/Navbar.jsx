import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    // Track modal opening
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "open_contact_modal");
    }
    setIsContactModalOpen(true);
    setOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition ${
        elevate ? "backdrop-blur bg-white/80 border-slate-200 shadow" : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
        {/* Brand */}
        <Link to="/" className="font-extrabold tracking-tight text-slate-900">
          MatchAGig
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-slate-700 md:flex">
          <li><a className="hover:underline hover:decoration-lime-400" href="#top">Home</a></li>
          <li><a className="hover:underline hover:decoration-lime-400" href="#about">About Us</a></li>
          <li><a className="hover:underline hover:decoration-lime-400" href="#testimonials">Testimonials</a></li>
          <li><a className="hover:underline hover:decoration-lime-400" href="/book-demo">Book a Demo</a></li>
          <li><button className="hover:underline hover:decoration-lime-400" onClick={openContactModal}>Contact Us</button></li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a href="#demo" className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Begin interactive demo</a>
          <Link to="/signin" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">Sign In</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="block h-0.5 w-6 bg-slate-900" />
          <span className="block h-0.5 w-6 bg-slate-900" />
          <span className="block h-0.5 w-6 bg-slate-900" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          <div className="space-y-3 border-t border-slate-200 bg-white px-4 py-4">
            <a className="block text-slate-800" href="#top" onClick={() => setOpen(false)}>Home</a>
            <a className="block text-slate-800" href="#about" onClick={() => setOpen(false)}>About Us</a>
            <a className="block text-slate-800" href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
            <a className="block text-slate-800" href="/book-demo" onClick={() => setOpen(false)}>Book a Demo</a>
            <button className="block text-slate-800 w-full text-left" onClick={openContactModal}>Contact Us</button>
            <a className="block rounded-md bg-emerald-600 px-3 py-2 font-semibold text-white hover:bg-emerald-700"
               href="#demo" onClick={() => setOpen(false)}>Begin interactive demo</a>
            <div className="pt-1">
              <Link className="rounded-md border border-slate-300 px-3 py-2 font-semibold text-slate-800"
                 to="/signin" onClick={() => setOpen(false)}>Sign In</Link>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </nav>
  );
}
