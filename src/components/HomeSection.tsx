import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

export default function HomeSection({
  children,
  title,
  link,
}: {
  children: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <section className="w-full mb-8">
      <div className="w-full mb-6 flex justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link href={link} className="flex items-center">
          <div className="flex">
            <p>Leggi di più</p>
            <IconArrowRight />
          </div>
        </Link>
      </div>

      {children}
    </section>
  );
}
