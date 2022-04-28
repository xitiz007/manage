import Cta from "./components/Cta";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Manage
      </title>
    </Head>
    <Nav />
    <Hero />
    <Features />
    <Testimonials />
    <Cta />
    <Footer />
    </>
  )
}
