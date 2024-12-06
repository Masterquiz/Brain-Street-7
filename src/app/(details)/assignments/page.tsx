import Link from "next/link";

import { IconArrowLeft, IconDownload, IconLink } from "@tabler/icons-react";

import { assignments } from "@/data/assignments";

export default function Assignment() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <IconArrowLeft />
            <h1 className="text-2xl">Compiti</h1>
          </div>
        </Link>

        <Link
          href="/assignments_brainstreet7.zip"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <div className="flex gap-1">
            <p>Scarica tutto</p>
            <IconDownload />
          </div>
        </Link>
      </div>

      {assignments
        .filter((assignment) => assignment.files.length)
        .map((assignment) => {
          return (
            <div key={assignment.folder} className="flex flex-col gap-2">
              <h2 className="mt-4 text-xl font-bold md:mt-8">
                {assignment.name}
              </h2>
              <>
                {assignment.files.map((file) => {
                  return (
                    <Link
                      key={file.name}
                      href={file.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex gap-2 align-center my-3">
                        {(file.type === "pdf" && <IconDownload />) ||
                          (file.type === "link" && <IconLink />)}
                        <p>{file.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </>
            </div>
          );
        })}
    </>
  );
}
