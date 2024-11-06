import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2022-2024",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Technical University of Mombasa</h3>
          <p className=" md:text-sm font-normal mb-4 text-sm/6 text-gray-600 dark:text-white">
            Diploma in Information Communication and Technology
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            Technical Skills: <span className="max-w-xl">Windows and Linux OS, Network Administration, VPN Configuration, Cybersecurity Protocols</span>
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            Soft Skills: Effective Communication, Time Management, Critical Thinking, Team Collaboration, Leadership
          </p>
        </div>
      ),
    },
    {
      title: "May 2023 – August 2023",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">ICT Officer - Nyamira Law Courts</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Shanzu, Mombasa, Kenya
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm space-y-1">
            <li>Network Security: Managed and secured network infrastructure to prevent breaches.</li>
            <li>System Optimization: Enhanced system efficiency and minimized downtime.</li>
            <li>Technical Support: Resolved hardware and software issues with high first-contact resolution.</li>
            <li>Project Management: Coordinated IT projects to improve system performance and user experience.</li>
            <li>Enhanced system performance by installing and upgrading software/hardware, improving efficiency and stability.</li>
            <li>Configured VPNs, enabling secure and reliable remote work for users.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017-2021",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Nyambaria High School</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Kenya Certificate of Secondary Education
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
