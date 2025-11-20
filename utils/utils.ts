export const headerMenu = [
  {
    label: "Solution",
    type: "mega",
    sections: [
      {
        title: "Sales Academy",
        description: "Transform your salesforce into high performing teams.",
        href: "/academies/sales-academy",
      },
      {
        title: "Customer Success Academy",
        description: "Drive retention and customer loyalty.",
        href: "/academies/customer-success-academy",
      },
      {
        title: "Finance Academy",
        description: "Build high calibre finance teams.",
        href: "/academies/finance",
      },
      {
        title: "Engineering Academy",
        description: "Strengthen engineering teams with modern skills.",
        href: "/academies/engineering",
      },
    ],
  },

  {
    label: "Industries",
    type: "mega",
    sections: [
      {
        title: "Sales Academy",
        description: "Structured capability-building programs.",
        href: "/solutions/learning-suite",
      },
      {
        title: "Customer Success Academy",
        description: "Leverage generative AI for workforce acceleration.",
        href: "/solutions/ai",
      },
      {
        title: "Assessments",
        description: "Measure and benchmark skill gaps.",
        href: "/solutions/assessments",
      },
    ],
  },

  {
    label: "Why AntWalk?",
    type: "mega",
    sections: [
      {
        title: "Our Process",
        description: "Discover how AntWalk powers capability building.",
        href: "/why/process",
      },
      {
        title: "Impact Stories",
        description: "Success stories from global teams.",
        href: "/why/stories",
      },
    ],
  },

  {
    label: "Partners",
    type: "link",
    href: "/partners",
  },

  {
    label: "Research Center",
    type: "link",
    href: "/research-center",
  },
];


// Hero content ======================>
export const heroSections = {
  default: {
    type: "complex",
    topTagline: "Built by McKinsey Alums, Powered by Industry Leaders",
    title: {
      line1Start: "Build",
      highlight1: "Capability Academies",
      line1End: "",
      line2Start: "to achieve",
      highlight2: "Strategic Objectives",
      line2End: "",
    },
    description:
      'AntWalk <b>Business Capability Platform</b> empowers your workforce to achieve your business goals by driving organization-wide capability building through end-to-end Capability Academy​',
    button: { label: "Schedule a Demo!" },
    heroImage: "/hero.png",
  } as const,

  growth: {
    type: "complex",
    topTagline: "Accelerate Organizational Growth",
    title: {
      line1Start: "Elevate Your",
      highlight1: "Growth Teams",
      line1End: "",
      line2Start: "with",
      highlight2: "High-Impact Academies",
      line2End: "",
    },
    description: "Specialized capability academies designed...",
    button: { label: "Explore Growth" },
    heroImage: "/growth-hero.png",
  } as const,

  people: {
    type: "complex",
    topTagline: "Transform Your Workforce",
    title: {
      line1Start: "Build Strong",
      highlight1: "People Leaders",
      line1End: "",
      line2Start: "with",
      highlight2: "Leadership Academies",
      line2End: "",
    },
    description: "Leadership, talent and HR academies built...",
    button: { label: "Explore People" },
    heroImage: "/people-hero.png",
  } as const,

  "sales-academy": {
    type: "simple",
    topTagline: "AntWalk Sales Academy",
    simpleTitle: "Close More Deals, Faster!",
    description:
      "Transform your salesforce with a dedicated Sales Capability Academy that builds skills, drives consistency, and accelerates revenue growth.",
    buttonText: "Schedule a Demo!",
    image: "/images/sales.png",
  } as const,

  "marketing-academy": {
    type: "simple",
    badge: "AntWalk Marketing Academy",
    simpleTitle: "Grow Your Brand, Smarter!",
    description:
      "Boost your marketing performance with structured capability building...",
    buttonText: "Talk to Experts",
    image: "/images/marketing-academy.png",
  } as const,
} as const;





interface Academy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TitleStructure {
  normalStart: string;
  highlight: string;
  normalEnd: string;
}

interface Category {
  id: string;
  name: string;
  title?: TitleStructure;   // ✔ FIXED (object allowed)
  subtitle?: string;
  academies: Academy[];
}

export const academiesData: Category[] = [
  {
    id: "growth",
    name: "Growth Acceleration",

    title: {
      normalStart: "Achieve Your",
      highlight: "Business Strategies",
      normalEnd: "with Targeted Academies",
    },

    subtitle: "Empower your workforce with future-ready skills",

    academies: [
      {
        id: "sales",
        title: "Sales Academy",
        description:
          "Equip your sales team to close deals faster and drive revenue growth.",
        icon: "wrench",
      },
      {
        id: "customer-success",
        title: "Customer Success Academy",
        description:
          "Enable your team to build lasting relationships and turn customer success into business growth.",
        icon: "wrench",
      },
      {
        id: "finance",
        title: "Finance Academy",
        description:
          "Equip account managers to grow key accounts and deliver consistent, measurable value.",
        icon: "wrench",
      },
      {
        id: "marketing",
        title: "Marketing Academy",
        description:
          "Transform your marketing team into growth drivers with data-driven strategies and campaigns.",
        icon: "wrench",
      },
      {
        id: "business-dev",
        title: "Business Development Academy",
        description:
          "Expand market reach and identify new opportunities for sustainable business growth.",
        icon: "wrench",
      },
      {
        id: "revenue-ops",
        title: "Revenue Operations Academy",
        description:
          "Optimize revenue generation through streamlined operations and strategic alignment.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "people",
    name: "People Transformation",

    title: {
      normalStart: "Transform Your",
      highlight: "People Function",
      normalEnd: "with Expert-Led Academies",
    },

    subtitle:
      "Develop leaders, nurture talent, and build a thriving organizational culture.",

    academies: [
      {
        id: "leadership",
        title: "Leadership Academy",
        description:
          "Develop strong leaders who inspire teams and drive organizational excellence.",
        icon: "wrench",
      },
      {
        id: "hr",
        title: "HR Excellence Academy",
        description:
          "Transform your HR function into a strategic business partner.",
        icon: "wrench",
      },
      {
        id: "talent",
        title: "Talent Development Academy",
        description:
          "Build a culture of continuous learning and employee growth.",
        icon: "wrench",
      },
      {
        id: "culture",
        title: "Culture & Engagement Academy",
        description:
          "Foster a positive workplace culture that drives engagement and retention.",
        icon: "wrench",
      },
      {
        id: "diversity",
        title: "Diversity & Inclusion Academy",
        description:
          "Build inclusive teams that leverage diverse perspectives for innovation.",
        icon: "wrench",
      },
      {
        id: "change-management",
        title: "Change Management Academy",
        description:
          "Lead organizational transformations with confidence and strategic planning.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "technology",
    name: "Technology Transformation",

    title: {
      normalStart: "Upgrade Your",
      highlight: "Technology Teams",
      normalEnd: "for the Future of Work",
    },

    subtitle:
      "Build excellence in cloud, AI/ML, agile, data, and cybersecurity.",

    academies: [
      {
        id: "digital",
        title: "Digital Innovation Academy",
        description:
          "Drive digital transformation and stay ahead in the technology landscape.",
        icon: "wrench",
      },
      {
        id: "data",
        title: "Data Analytics Academy",
        description:
          "Leverage data-driven insights to make informed business decisions.",
        icon: "wrench",
      },
      {
        id: "agile",
        title: "Agile Delivery Academy",
        description:
          "Master agile methodologies to accelerate product delivery and innovation.",
        icon: "wrench",
      },
      {
        id: "cloud",
        title: "Cloud Engineering Academy",
        description:
          "Build scalable cloud infrastructure and modern application architectures.",
        icon: "wrench",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Academy",
        description:
          "Protect your organization with advanced security practices and threat management.",
        icon: "wrench",
      },
      {
        id: "ai-ml",
        title: "AI & Machine Learning Academy",
        description:
          "Harness the power of artificial intelligence to innovate and automate.",
        icon: "wrench",
      },
    ],
  },
];


export const uniqueSectionContent = {
  title: {
    normalStart: "What Makes an",
    highlight: "AntWalk",
    normalEnd: "Academy Unique?",
  },
  subtitle:
    "AntWalk Academies are end-to-end capability-building solutions that go beyond traditional training.",
};

// ⭐ Unique Section Tabs Data
export const uniqueTabs = [
  {
    id: 1,
    title: "Consulting-led Success Profiles",
    image: "/success.png",
    heading: "Consulting-led Success Profiles",
    description:
      "Develop tailored competency frameworks that align directly with your organization’s strategic goals.",
  },
  {
    id: 2,
    title: "Multifaceted Assessments",
    image: "/candidate.png",
    heading: "Multifaceted Assessments",
    description:
      "Evaluate learners using multi-dimensional skill assessments for deep performance insights.",
  },
  {
    id: 3,
    title: "Comprehensive Learning Interventions",
    image: "/learn.png",
    heading: "Comprehensive Learning Interventions",
    description:
      "Deliver curated learning journeys designed to build scalable capabilities across teams.",
  },
  {
    id: 4,
    title: "Integrated Analytics Dashboard",
    image: "/dashboard.png",
    heading: "Integrated Analytics Dashboard",
    description:
      "Monitor performance and connect learning outcomes to business results with advanced analytics.",
  },
  {
    id: 5,
    title: "World Class Customer Success",
    image: "/customer.png",
    heading: "World Class Customer Success",
    description:
      "Ensure smooth implementation, ongoing engagement, and maximum ROI with dedicated support.",
  },
];



// utils/methodologyData.ts
export interface MethodologyItem {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export const comparisonData = {
  headings: ["Strategic Consultants", "Training Consultants", "LXP/LMS", "MOOCS", "AntWalk"],
  features: [
    {
      name: "Strategic Advisory",
      values: [true, false, true, false, true]
    },
    {
      name: "Customised Success Profiles",
      values: [false, true, false, false, true]
    },
    {
      name: "Skill Assessments",
      values: [false, false, false, true, true ]
    },
    {
      name: "Self-Paced Learning",
      values: [false, false, true, true, true]
    },
    {
      name: "Live-Customised Learning",
      values: [false, true, false, false, true]
    },
    {
      name: "Integrated Analytics and KPI Dashboard",
      values: [false, false, true, true, true]
    },
    {
      name: "Scalability",
      values: [false, false, true, true, true]
    },
    {
      name: "Industry Expertise",
      values: [true, true, true, false, true]
    },
    {
      name: "End-to-End Execution",
      values: [false, false, true, false, true]
    }
  ]
};

export const methodologyData: MethodologyItem[] = [
  {
    id: 0,
    title: "Design",
    icon: "/svgviewer-output.svg",
    description:
      "Highly customised learning blueprints designed by experts to align workforce capabilities with business objectives.",
  },
  {
    id: 1,
    title: "Measure",
    icon: "/cload.svg",
    description:
      "Data-driven assessment insights to accurately understand current team competency and benchmark skill gaps.",
  },
  {
    id: 2,
    title: "Build",
    icon: "/darkrender.svg",
    description:
      "Specific learning assets created by experts to upskill employees and improve business productivity.",
  },
];



//footerData

export const footerData = {
  contactUs: {
    label: "Contact Us",
    link: "/contact",
  },

  offices: [
    {
      title: "Corporate Headquarters",
      flag: "🇺🇸",
      lines: [
        "© AntWalk Inc.",
        "1521 Concord Pike Ste 301 #250 Wilmington, DE 19803",
      ],
    },
    {
      title: "India Corporate Office",
      flag: "🇮🇳",
      lines: [
        "3rd Floor, Building No. 380, 23rd Cross, 9th Main Rd, Sector 7,",
        "HSR Layout, Bengaluru, Karnataka 560102",
      ],
    },
  ],

  social: [
    { name: "Email", icon: "/icons/mail.svg", link: "mailto:info@antwalk.com" },
    { name: "Facebook", icon: "/icons/fb.svg", link: "https://facebook.com" },
    { name: "LinkedIn", icon: "/icons/linkedin.svg", link: "https://linkedin.com" },
    { name: "Twitter", icon: "/icons/twitter.svg", link: "https://twitter.com" },
  ],

  columns: [
    {
      title: "Why AntWalk?",
      links: [
        { name: "Why AntWalk - AntWalk Difference", href: "/why-antwalk" },
        { name: "Why Capability Academy?", href: "/capability-academy" },
        { name: "Choose the right Assessment for team", href: "/assessment" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "About us", href: "/about" },
        { name: "Careers at AnWalk", href: "/careers" },
      ],
    },

    {
      title: "Industries",
      links: [
        { name: "Financial Services", href: "/industries/financial" },
        { name: "Technology", href: "/industries/technology" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
      ],
    },

    {
      title: "Academies",
      links: [
        { name: "Sales Academy", href: "/academies/sales" },
        { name: "Customer Success Academy", href: "/academies/customer-success" },
        { name: "Finance Academy", href: "/academies/finance" },
        { name: "Leadership & EI Academy", href: "/academies/leadership" },
        { name: "Human Resource Academy", href: "/academies/hr" },
        { name: "PowerSkills Academy", href: "/academies/powerskills" },
        { name: "Data and AI Academy", href: "/academies/data-ai" },
        { name: "Cybersecurity Academy", href: "/academies/cybersecurity" },
        { name: "Software Engineering​ Academy", href: "/academies/software" },
        { name: "Cloud & Infrastructure​ Academy​", href: "/academies/cloud" },
        { name: "Product & Design Academy", href: "/academies/design" },
        { name: "Gen AI Academy", href: "/academies/gen-ai" },
      ],
    },

    {
      title: "Initiatives",
      links: [
        { name: "Financial Services", href: "/initiatives/financial" },
        { name: "Technology/ IT Services", href: "/initiatives/technology" },
        { name: "Manufacturing", href: "/initiatives/manufacturing" },
      ],
    },

    {
      title: "Partners",
      links: [
        { name: "Knowledge Partners", href: "/partners/knowledge" },
        { name: "Content Partners", href: "/partners/content" },
        { name: "Integration Partners", href: "/partners/integration" },
      ],
    },

    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "/resources/blogs" },
        { name: "Podcasts", href: "/resources/podcasts" },
        { name: "Events", href: "/resources/events" },
        { name: "eBook", href: "/resources/ebook" },
        { name: "Newsletters", href: "/resources/newsletters" },
        { name: "Case Studies", href: "/resources/case-studies" },
      ],
    },
  ],

  bottomLinks: [
    { name: "Terms and conditions", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ],
};




// utils/newsData.ts
export const whatsNewContent = {
  title: {
    normalStart: "What's new at",
    highlight: "AntWalk?",
    normalEnd: "",
  },
  subtitle: "Stay Connected, Stay Informed",
  description: "AntWalk in news, Blogs, Case Studies, Events",
};

export const newsData = [
  {
    tag: "UNCATEGORIZED",
    image: "/craft.png",
    title:
      "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc:
      "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/devops-2025",
  },
  {
    tag: "BFSI",
    image: "/macbook.png",
    title:
      "Transformed Collaboration and Customer Experience at a well-known Small Finance Bank",
    desc: "Frontline Operations Associate Excellence Program",
    link: "/news/bfsi-cx",
  },
  {
    tag: "UNCATEGORIZED",
    image: "/craft.png",
    title:
      "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    desc:
      "As businesses accelerate their digital transformation, the DevOps landscape is evolving faster than ever before.",
    link: "/news/devops-2025",
  },
];




//////////////////////////////////////////
export const brandSections = {
  default: {
    title: "Trusted by Brands Globally",
    brands: [
      { name: "Kotak", logo: "/kotak.png" },
      { name: "Tata", logo: "/tata.png" },
      { name: "Tata Capital", logo: "/tatacapital.png" },
      { name: "Chola", logo: "/chola.png" },
      { name: "Aditya", logo: "/aditya.png" },
      { name: "Pocket", logo: "/pocket.png" },
      { name: "Purdue", logo: "/purdue.png" },
      { name: "RCF", logo: "/rcf.png" },
      { name: "PIL", logo: "/pil.png" },
      { name: "Perfios", logo: "/perfios.png" },
    ],
  },

  finance: {
    title: "Trusted by Finance Leaders",
    brands: [
      { name: "HDFC", logo: "/hdfc.png" },
      { name: "ICICI", logo: "/icici.png" },
      { name: "Axis Bank", logo: "/axis.png" },
    ],
  },

  healthcare: {
    title: "Trusted by Healthcare Organizations",
    brands: [
      { name: "Apollo", logo: "/apollo.png" },
      { name: "Fortis", logo: "/fortis.png" },
      { name: "Manipal", logo: "/manipal.png" },
    ],
  },
};
