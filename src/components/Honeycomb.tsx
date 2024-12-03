import Image from "next/image";

import fs from "fs";

import styles from "@/components/Honeycomb.module.css";

export default function Honeycomb() {
  const unordered_profiles = fs
    .readdirSync("public/profile")
    .map((path) => `/profile/${path}`);
  const profiles = [5, 4, 1, 2, 0, 6, 3].map((idx) => unordered_profiles[idx]);

  const profilesList = profiles.map((profile) => (
    <div
      key={profile}
      className="block relative w-[20.5vw] h-[calc(265/240*20.5vw)] md:w-[calc(0.95*15vw)] md:h-[calc(265/240*0.95*15vw)]"
    >
      <Image
        src={profile}
        alt="Profile picture"
        fill
        className={`${styles.hex} hexagon-clip md:grayscale md:hover:grayscale-0 aspect-w-1 aspect-h-1`}
      />
    </div>
  ));

  return (
    <>
      <div className="m-auto">
        <div className="flex">{profilesList.slice(0, 4)}</div>
        <div
          className="flex
            translate-x-[calc(20.5vw/2)] translate-y-[calc(-265/240*20.5vw/4)]
            md:translate-x-[calc(0.95*15vw/2)] md:translate-y-[calc(-265/240*0.95*15vw/4)]"
        >
          {profilesList.slice(4, 7)}
        </div>
      </div>
    </>
  );
}
