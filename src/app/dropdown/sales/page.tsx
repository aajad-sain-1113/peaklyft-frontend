import UniqueSection from "@/src/components/UniqueSection";

const salesTabs = [
  {
    id: 1,
    title: "Sales Coaching",
    image: "/success.png",
    heading: "Sales Coaching",
    description: "Boost your sales teams with targeted coaching.",
  },
  {
    id: 2,
    title: "Pipeline Training",
    image: "/candidate.png",
    heading: "Pipeline Training",
    description: "Strengthen your pipeline strategy end-to-end.",
  },
];

const salesContent = {
  title: {
    normalStart: "Why Choose",
    highlight: "Sales",
    normalEnd: "Academy?",
  },
  subtitle: "Sales Academy helps teams convert faster and better.",
};

export default function Page() {
  return <UniqueSection tabs={salesTabs} sectionContent={salesContent} />;
}
