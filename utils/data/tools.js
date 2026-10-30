import { personalData } from "./personal-data";

export const tools = [
  { slug: "password-generator", name: "Password Generator", description: "Random passwords with the character sets you choose." },
  { slug: "text-case-converter", name: "Text Case Converter", description: "Switch text between upper, lower, camel and snake case." },
  { slug: "base64-encoder-decorde", name: "Base64 Encoder/Decoder", description: "Encode text to Base64 or decode it back." },
  { slug: "timestamp-converter", name: "Timestamp Converter", description: "Unix timestamps to readable dates and back." },
  { slug: "unit-converter", name: "Unit Converter", description: "Convert length, weight and temperature." },
  { slug: "regex-tester", name: "Regex Tester", description: "Try a regular expression against a test string." },
  { slug: "qr-code-generator", name: "QR Code Generator", description: "Turn text or a URL into a downloadable QR code." },
  { slug: "json-formatter-validator", name: "JSON Formatter/Validator", description: "Check that JSON parses and pretty-print it." },
  { slug: "css-minifier-beautifier", name: "CSS Minifier/Beautifier", description: "Compress CSS for production or expand it to read." },
  { slug: "http-header-inspector", name: "HTTP Header Inspector", description: "See the response headers a URL sends back." },
  { slug: "file-compressor", name: "File Compressor", description: "Bundle files into a single zip in the browser." },
  { slug: "color-palette-generator", name: "Color Palette Generator", description: "Lighter and darker shades around a base color." },
  { slug: "markdown-editor", name: "Markdown Editor", description: "Write Markdown with a live preview." },
  { slug: "image-converter", name: "Image Converter", description: "Convert images between PNG, JPEG and WebP." },
];

// Pages that override `openGraph` lose the root opengraph-image, so they point
// at the same generated image explicitly.
export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${personalData.name}, ${personalData.title}`,
};

// Each tool page is a client component and can't export metadata itself, so a
// tiny layout.js next to it calls this. Every tool gets its own title and
// canonical URL instead of inheriting the /tools index's.
export function toolMetadata(slug) {
  const tool = tools.find((item) => item.slug === slug);
  const url = `/tools/${slug}`;
  const title = `${tool.name}, free online tool`;
  const description = `${tool.description} Free, no sign-up, runs in your browser. Built by ${personalData.name}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: personalData.name, type: "website", images: [shareImage] },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}
