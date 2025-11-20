import AcademiesSection from "@/src/components/AcademiesSection";
import { academiesData } from "@/utils/utils";

export default function GrowthPage() {
  return (
    <AcademiesSection
      data={[academiesData.find(cat => cat.id === "growth")!]}
      defaultCategory="growth"
    />
  );
}
