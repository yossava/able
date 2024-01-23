"use client";
import Contact from "@/components/Contact";
import FeaturesAlt from "@/components/FeatureAlt";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroAlt from "@/components/HeroAlt";
import NavbarAlt from "@/components/NavbarAlt";
import NewsAlt from "@/components/NewsAlt";
import RateForm from "@/components/RateForm";
import RateTab from "@/components/RateTab";
import SubscribeSection from "@/components/Subscribe";
import Title from "@/components/Title";
import { motion } from "framer-motion";

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInWhenVisibleOpacity({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeAlt() {
  return (
    <main className={`w-full relative`}>
      <NavbarAlt />
      <HeroAlt />

      <section className="lg:py-20 lg:pt-32 py-10 bg-tertiary z-40 relative">
        {/* <div className="bounceimg">
          <Image src="/image-1.png" width={500} height={500} alt="image" />
        </div> */}
        <FadeInWhenVisibleOpacity>
          <div className="hidden lg:block absolute -top-12 left-10 right-10 bg-white py-7 rounded-md ">
            <SubscribeSection />
          </div>
        </FadeInWhenVisibleOpacity>

        <div className="container mx-auto flex flex-col justify-between items-center p-5 lg:flex-row lg:justify-center lg:space-x-10 lg:items-start">
          <FadeInWhenVisible>
            <div className="grow lg:max-w-lg">
              <Title title="Get Exchanged Now" color="text-gray-800 mb-5" />
              <RateForm />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="mt-10 grow lg:max-w-lg lg:mt-0">
              <Title title="Todays Exchange Rate" color="text-gray-800 mb-5" />
              <RateTab />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="bg-gray-50 lg:py-20 py-10">
        <FadeInWhenVisible>
          <FeaturesAlt />
        </FadeInWhenVisible>
      </section>

      <section className="bg-white py-10 lg:py-20">
        <FadeInWhenVisible>
          <NewsAlt />
        </FadeInWhenVisible>
      </section>

      <section className="py-10 lg:py-20 bg-gray-100">
        <FadeInWhenVisible>
          <Gallery />
        </FadeInWhenVisible>
      </section>
      <section className="bg-white">
        <FadeInWhenVisible>
          <Contact />
        </FadeInWhenVisible>
      </section>

      <section className="bg-gray-50">
        <Footer />
      </section>
    </main>
  );
}
