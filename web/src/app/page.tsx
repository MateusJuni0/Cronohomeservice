import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";

export default function Home() {
  return (
    <>
      <CursorDot />
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Method />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
