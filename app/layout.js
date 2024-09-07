import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ayan Naseer - Mern Stack Developer",
  description:
    "My name is Ayan Naseer. I am a dedicated and enthusiastic MERN Stack Developer with a passion for technology and problem-solving. I thrive on learning and exploring new technologies, driven by a self-motivated attitude and a quick learning ability. My expertise lies in JavaScript, enabling me to build robust and scalable web applications. I am committed to making the web more accessible and open to everyone. Whether it's frontend, backend, or full-stack development, I am eager to contribute to exciting projects that align with my skills and interests. I am available for job opportunities that offer growth and challenge in the field of web development.",
  keywords: "Ayan Naseer, MERN Stack Developer, JavaScript, React, Node.js, Full-Stack Developer, Web Developer",
  author: "Ayan Naseer",
  openGraph: {
    title: 'Portfolio of Ayan Naseer - Mern Stack Developer',
    description:
      "Dedicated and enthusiastic MERN Stack Developer with a passion for technology and problem-solving.",
    url: 'https://portfolio-ayan.netlify.app/',
    siteName: 'Ayan Naseer Portfolio',
    images: [
      {
        url: 'https://i.postimg.cc/jSpRNrS1/Portfolio.png',
        alt: 'Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="aLIaDF4hw2F9DQ8adjH9okk3hc2uT1zFVBZmdBp-wlU" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayan Naseer",
            "url": "https://portfolio-ayan.netlify.app/",
            "sameAs": [
              "https://github.com/ghost-67-g",
              "https://www.linkedin.com/in/ayan-naseer/"
            ],
            "jobTitle": "MERN Stack Developer",
            "description": "My name is Ayan Naseer. I am a dedicated and enthusiastic MERN Stack Developer with a passion for technology and problem-solving. I thrive on learning and exploring new technologies, driven by a self-motivated attitude and a quick learning ability. My expertise lies in JavaScript, enabling me to build robust and scalable web applications. I am committed to making the web more accessible and open to everyone. Whether it's frontend, backend, or full-stack development, I am eager to contribute to exciting projects that align with my skills and interests. I am available for job opportunities that offer growth and challenge in the field of web development.",
            "image": 'https://i.postimg.cc/jSpRNrS1/Portfolio.png'
          })}
        </script>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
