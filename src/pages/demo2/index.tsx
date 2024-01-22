import Contact from "@/components/contact";
import FeaturesAlt from "@/components/featureAlt";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import HeroAlt from "@/components/heroAlt";
import NavbarAlt from "@/components/navbarAlt";
import NewsAlt from "@/components/newsAlt";
import RateTab from "@/components/rateTab";
import Title from "@/components/title";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function HomeAlt() {
  return (
    <main className={`w-full hidden lg:block relative ${poppins.className}`}>
      <NavbarAlt />
      <HeroAlt />
      <section className="bg-gray-50 py-20">
        <FeaturesAlt />
      </section>
      <section className="min-h-screen section_gradient py-10 ">
        {/* <div className="bounceimg">
          <Image src="/image-1.png" width={500} height={500} alt="image" />
        </div> */}
        <div className="container mx-auto flex justify-between items-center py-20">
          <div className="w-6/12">
            <Title title="Todays Exchange Rate" className="text-white mb-5" />
            <RateTab />
          </div>
          <div className="bounceimg">
            <Image src="/image-1.png" width={500} height={500} alt="image" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <NewsAlt />
      </section>
      <section className="py-20 section_gradient">
        <Gallery />
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
