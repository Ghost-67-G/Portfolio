import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

// `mobile` links stay visible on small screens; the rest appear from md up.
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work", mobile: true },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact", mobile: true },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md supports-[backdrop-filter]:bg-paper/75">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <Link href="/" className="text-[15px] font-medium tracking-tight">
          {personalData.name}
        </Link>
        <nav aria-label="Main">
          <ul className="-mr-2.5 flex items-center text-sm text-ink-2">
            {links.map((link) => (
              <li key={link.href} className={link.mobile ? undefined : "hidden md:block"}>
                <Link
                  href={link.href}
                  className="block px-2.5 py-1.5 transition-colors duration-150 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
