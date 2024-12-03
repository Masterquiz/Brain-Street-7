import Link from "next/link";
import Image from "next/image";

import fs from "fs";

export default function Team() {
  const profiles = fs.readdirSync("public/profile");

  return (
    <>
      <div className="flex mb-4">
        <Link href="/" className="flex gap-2 items-center">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <h1 className="text-2xl">Il team</h1>
        </Link>
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <p>
          Studenti di Ingegneria Informatica del Politecnico di Milano [...].
        </p>

        <p>Corso di Human-Computer Interaction [...].</p>
      </div>

      <div className="grid grid-cols-2 gap-6 justify-items-center md:grid-cols-3">
        {profiles.map((profile) => {
          const name = profile
            .replace(/\-|.jpg|.webp/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <div key={profile} className="">
              <Image
                src={`/profile/${profile}`}
                alt="Profile picture"
                width={240}
                height={265}
                className="object-contain object-center mb-2"
              />
              <p className="text-lg italic">{name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
