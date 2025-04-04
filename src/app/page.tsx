import Banner from "@/components/banner/Banner";
import CareerAuditing from "@/components/career-auditing/CareerAuditing";
import CareerConsultationForm from "@/components/career-consulation/CareerConsultationForm";
import DreamJob from "@/components/dream-job/DreamJob";
import FAQSection from "@/components/faq-section/FAQSection";
import HighPayingCareer from "@/components/high-paying-career/HighPayingCareer";
import PricingPlans from "@/components/pricing-plans/PricingPlans";
import SecureFuture from "@/components/secure-future/SecureFuture";
import SuccessStories from "@/components/success-stories/SuccessStories";
import TicketToSuccess from "@/components/ticket-to-success/TicketToSuccess";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <TicketToSuccess />
      <HighPayingCareer />
      <DreamJob />
      <SuccessStories />
      <WhyChooseUs />
      <PricingPlans />
      <FAQSection />
      <CareerAuditing />
      <CareerConsultationForm />
      <SecureFuture />
    </div>
  );
}
