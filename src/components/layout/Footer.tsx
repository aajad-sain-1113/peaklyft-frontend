"use client";

import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/utils/utils";

const Footer = () => {
  return (
    <footer
      className="text-white pt-16 pb-10"
      style={{
        background: "linear-gradient(180deg, #4E5FF5 0%, #2E378F 100%)",
      }}
    >
      <div className="w-[1440px] mx-auto px-6">
        <div className="flex justify-end mb-10">
          <Link
            href={footerData.contactUs.link}
            className="flex items-center gap-2"
          >
            <Image src="/icons/user-white.svg" width={24} height={24} alt="" />
            <span className="font-medium">Contact Us</span>
          </Link>
        </div>

        <hr className="border-blue-300/40 mb-10 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
          <div>
            {footerData.offices.map((office, i) => (
              <div key={i} className="mb-6">
                <p className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-2xl">{office.flag}</span>
                  {office.title}
                </p>
                {office.lines.map((line, j) => (
                  <p key={j} className="text-sm opacity-80 mt-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="border-l border-blue-300/30 pl-4">
            {footerData.columns.slice(0, 2).map((col, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-base text-[#FAA843] font-medium leading-[30px] mb-3">
                  {col.title}
                </h3>

                <ul className="space-y-2">
                  {col.links.map((lnk, idx) => (
                    <li key={idx} className="m-0">
                      <Link
                        className="text-[#D5D8FF] text-[13px] font-normal leading-[19.5px] hover:text-primary transition-colors"
                        href={lnk.href}
                      >
                        {lnk.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-l border-blue-300/30 pl-4">
            {footerData.columns.slice(2, 4).map((col, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-base text-[#FAA843] font-medium leading-[30px] mb-3">
                  {col.title}
                </h3>

                <ul className="space-y-2">
                  {col.links.map((lnk, idx) => (
                    <li key={idx} className="m-0">
                      <Link
                        className="text-[#D5D8FF] text-[13px] font-normal leading-[19.5px] hover:text-primary transition-colors"
                        href={lnk.href}
                      >
                        {lnk.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-l border-blue-300/30 pl-4">
            {footerData.columns.slice(4).map((col, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-base text-[#FAA843] font-medium leading-[30px] mb-3">
                  {col.title}
                </h3>

                <ul className="space-y-2">
                  {col.links.map((lnk, idx) => (
                    <li key={idx} className="m-0">
                      <Link
                        className="text-[#D5D8FF] text-[13px] font-normal leading-[19.5px] hover:text-primary transition-colors"
                        href={lnk.href}
                      >
                        {lnk.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
