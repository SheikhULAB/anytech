import ContactHero from "@/components/ContactHero";
import CustomerInsight from "@/components/CustomerInsight";
import FinanceFuture from "@/components/FinanceFuture";
import FinancialServices from "@/components/FinancialServices";
import HeroSection from "@/components/HeroSection";
import HumanCentredInnovation from "@/components/HumanCentredInnovation";
import LogoGrid from "@/components/LogoGrid";
import SolutionCards from "@/components/SolutionCards";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
   <div>
    <HeroSection />
    <CustomerInsight />
    <HumanCentredInnovation />
    <SolutionCards />
    <FinanceFuture />
    <FinancialServices />
    <StatsSection />
    <LogoGrid />
    <ContactHero />
   </div>
  );
}
