import UniqueSection from "@/src/components/UniqueSection";

const marketingTabs = [
  {
    id: 1,
    title: "Market Research",
    image: "/learn.png",
    heading: "Market Research",
    description: "Deep insights for better decision-making.",
  },
  {
    id: 2,
    title: "Brand Strategy",
    image: "/customer.png",
    heading: "Brand Strategy",
    description: "Build a strong and consistent brand identity.",
  },
];

const marketingContent = {
  title: {
    normalStart: "What Makes",
    highlight: "Marketing",
    normalEnd: "Academy Stand Out?",
  },
  subtitle: "Marketing Academy helps optimize brand performance.",
};

export default function Page() {
  return <UniqueSection tabs={marketingTabs} sectionContent={marketingContent} />;
}
