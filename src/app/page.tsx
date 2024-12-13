import Image from "next/image";

import { Indicator } from "@mantine/core";

import HomeSection from "@/components/HomeSection";
import Honeycomb from "@/components/Honeycomb";

import { assignments } from "@/data/assignments";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4">
      <HomeSection title="Il team" link="/team">
        <Honeycomb />
      </HomeSection>

      <HomeSection title="Il progetto" link="/project">
        <div className="flex gap-4">
          <Image
            src="/logo.webp"
            width={500}
            height={500}
            alt="SafeWay logo"
            className="rounded-xl object-contain w-32"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">SafeWay</h2>
            <p className="italic">
              Percorsi sicuri, libertà di muoversi, sempre!
            </p>
            {/*<Button type="button" disabled>
              Vai all'app
            </Button>*/}
          </div>
        </div>
      </HomeSection>

      <HomeSection title="I compiti" link="/assignments">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assignments.map((assignment, idx) => (
            <div key={assignment.name} className="flex rounded-lg items-center">
              <Indicator
                inline
                processing={assignment.status === "yellow"}
                color={assignment.status}
                size={12}
              >
                <div className="w-16 ml-2 border-2 border-neutral-500 aspect-square rounded-lg flex items-center justify-center">
                  <h1 className="text-2xl font-bold">{idx + 1}</h1>
                </div>
              </Indicator>
              <div className="p-3">
                <h2 className="text-xl">{assignment.name}</h2>
                <p className="text-sm text-slate-400">
                  {assignment.deadline?.toLocaleDateString("it-It", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) ?? "Non ancora fissata"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
