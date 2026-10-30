import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

function Footer() {
  const { links } = personalData;

  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-4 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalData.name}. Faisalabad, Pakistan.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/tools" className="transition-colors hover:text-ink">
              Dev tools
            </Link>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              GitHub
            </a>
          </li>
          <li>
            <a href={links.linkedIn} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={links.studio} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              CodingStack
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
