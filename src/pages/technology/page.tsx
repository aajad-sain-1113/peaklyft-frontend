import AcademiesSection from "@/src/components/AcademiesSection";
import { academiesData } from "@/utils/utils";

export default function TechnologyPage() {
  return (
    <AcademiesSection
      data={[academiesData.find(cat => cat.id === "technology")!]}
      defaultCategory="technology"
    />
  );
}
