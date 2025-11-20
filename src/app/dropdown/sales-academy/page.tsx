import Hero from "@/src/components/Hero/Hero";
import { heroSections, brandSections } from "@/utils/utils";

export default function SalesAcademyPage() {
  return (
    <Hero
      heroData={heroSections["sales-academy"]}
      brandData={brandSections.default}
    />
  );
}
