"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import BrandSlider from "../Slider";

interface ComplexHero {
  type: "complex";
  topTagline: string;
  title: {
    line1Start: string;
    highlight1: string;
    line1End: string;
    line2Start: string;
    highlight2: string;
    line2End: string;
  };
  description: string;
  button: { label: string };
  heroImage: string;
}

interface SimpleHero {
  type: "simple";
  topTagline: string;
  simpleTitle: string;
  description: string;
  buttonText: string;
  image: string;
}

type HeroData = ComplexHero | SimpleHero;

interface HeroProps {
  heroData: HeroData;
  brandData: {
    title: string;
    brands: { name: string; logo: string }[];
  };
}

const Hero: React.FC<HeroProps> = ({ heroData, brandData }) => {
  return (
    <section
      className="w-full"
      style={{
        background: "radial-gradient(at top right, #4E5FF545 0%, #DBDFFF00 60%)",
      }}
    >
      <div className="container flex flex-col-reverse sm:flex-row justify-between items-center pt-5">
        
        <div className="w-full flex flex-col sm:text-left text-center sm:gap-[10px] sm:px-0 px-8">

          {heroData.type === "simple" && (
            <p className="text-[#4A4848] font-poppins sm:text-[14px] text-[12px] font-medium italic underline sm:leading-[20px]">
              {heroData.topTagline}
            </p>
          )}

          {heroData.type === "complex" && (
            <p className="text-[#4A4848] font-poppins sm:text-[14px] text-[12px] font-medium italic underline sm:leading-[20px]">
              {heroData.topTagline}
            </p>
          )}

          {heroData.type === "complex" ? (
            <h1 className="text-[#1C1C1C] font-poppins sm:text-[40px] text-[26px] font-semibold sm:leading-[60px]">
              {heroData.title.line1Start}{" "}
              <span className="text-secondary">{heroData.title.highlight1}</span>{" "}
              {heroData.title.line1End}
              <br />
              {heroData.title.line2Start}{" "}
              <span className="text-secondary">{heroData.title.highlight2}</span>{" "}
              {heroData.title.line2End}
            </h1>
          ) : (
            <h1 className="text-[#1C1C1C] font-poppins sm:text-[40px] text-[26px] font-semibold sm:leading-[60px]">
              {heroData.simpleTitle}
            </h1>
          )}

          <p
            className="text-[#5A5A5A] font-poppins sm:text-[18px] text-[14px] font-medium leading-[30px]"
            dangerouslySetInnerHTML={{ __html: heroData.description }}
          />

          <div className="mt-5">
            <Button
              variant="destructive"
              className="rounded-[4px] py-[22.5px] shadow-[0px_14.13px_29.01px_0px_rgba(0,0,0,0.18)] text-main font-poppins text-[15px] font-medium leading-[30px] w-[208px] transition-all cursor-pointer bg-gradient-to-r from-[#FF802C] via-[#FF802C] to-[#994D1A] bg-blend-normal hover:bg-secondary hover:bg-blend-multiply"
            >
              {heroData.type === "complex"
                ? heroData.button.label
                : heroData.buttonText}
            </Button>
          </div>
        </div>

        <div className="p-2.5 w-full sm:pl-[24px] pl-[20px] pt-[10.5px]">
          <Image
            src={heroData.type === "complex" ? heroData.heroImage : heroData.image}
            alt="hero"
            width={635}
            height={562}
            className="sm:w-[635px] sm:h-[562px] w-[335px] h-[296px]"
          />
        </div>
      </div>

      <BrandSlider title={brandData.title} brands={brandData.brands} />
    </section>
  );
};

export default Hero;
