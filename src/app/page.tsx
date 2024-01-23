import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import RateForm from "@/components/RateForm";
import RateTab from "@/components/RateTab";
import SubscribeSection from "@/components/Subscribe";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="w-full relative hidden lg:block">
      <Navbar />
      <Hero />
      <section className="w-full relative">
        <div className="bg-yellow-500 p-10  absolute -top-16 right-10 left-10 rounded-lg z-20">
          <SubscribeSection />
        </div>
      </section>
      <section className="min-h-screen bg-gray-100 pt-40 pb-10 ">
        {/* <div className="bounceimg">
          <Image src="/image-1.png" width={500} height={500} alt="image" />
        </div> */}
        <div className="container mx-auto grid grid-cols-2 gap-10">
          <div className="">
            <Title
              title="Todays Exchange Rate"
              className="text-gray-800 mb-5"
            />
            <RateTab />
          </div>
          <div className="flex flex-col justify-center rounded-lg p-5">
            <Title title="Get Exchanged Now" className="text-gray-800 mb-5" />
            <RateForm />
          </div>
        </div>
      </section>
      <section className="py-20 section_gradient">
        <Gallery />
      </section>
      <section className="bg-gray-50 py-20">
        <Features />
      </section>
      <section className="bg-white py-20">
        <News />
      </section>
      <section className="bg-gray-50">
        <Contact />
      </section>
      <section className="bg-gray-50">
        <Footer />
      </section>
    </main>
  );
}
