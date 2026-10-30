import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { shareImage, tools } from "@/utils/data/tools";

const title = "Free developer tools";
const description =
  "Free developer tools that run in your browser: JSON formatter, regex tester, Base64, timestamp and unit converters, QR codes and more.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/tools" },
  openGraph: { title, description, url: "/tools", siteName: personalData.name, type: "website", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export default function ToolsPage() {
  return (
    <>
      <header className="max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight">Developer tools</h1>
        <p className="mt-3 text-ink-2">
          Small utilities I built for everyday development work. They run in your browser.
        </p>
      </header>
      <ul className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool.slug} className="border-b border-r border-line">
            <Link
              href={`/tools/${tool.slug}`}
              className="block h-full p-5 transition-colors duration-150 hover:bg-paper-2"
            >
              <span className="font-medium">{tool.name}</span>
              <span className="mt-1 block text-sm text-ink-2">{tool.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
