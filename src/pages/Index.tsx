import Header from "@/src/components/header/Header";
import Hero from "@/src/components/Hero/Hero";
import { brandSections, heroSections } from "@/utils/utils";

const Index = () => {
  return (
    <div>
      <Header />
      <Hero heroData={heroSections.default} brandData={brandSections.default} />
    </div>
  );
};

export default Index;
