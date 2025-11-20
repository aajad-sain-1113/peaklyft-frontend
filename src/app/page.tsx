import Hero from "../components/Hero/Hero";
import AcademiesSection from "../components/AcademiesSection";
import UniqueSection from "../components/UniqueSection";
import Methodology from "../components/Methodology";
import ComparisonTable from "../components/ComparisonTable";
import { academiesData, brandSections, comparisonData, heroSections } from "@/utils/utils";
import Trust from "../components/trust";
import WhatsNew from "../components/WhatsNew";

export default function HomePage() {
  return (
    <div style={{background: "radial-gradient(at top right, #4E5FF545 20%, #DBDFFF00 50%)"}}>
      <Hero 
      heroData={heroSections.default}
      brandData={brandSections.default}
    />

      <AcademiesSection data={academiesData} defaultCategory="growth" />
      <UniqueSection />
      <Methodology />
      <ComparisonTable data={comparisonData} />
      <Trust />
      <WhatsNew />
    </div>
  );
}
