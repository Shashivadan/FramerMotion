import React from "react";
import Link from "next/link";

interface listLinks {
  title: string;
  route: string;
}

export default function Links({ listLinks }: { listLinks: listLinks[] }) {
  return (
    <div>
      {listLinks.map((item: listLinks, idx: number) => (
        <>
          {" "}
          <Link
            key={idx}
            href={item.route}
            className=" bg-zinc-900 px-3 py-1 rounded-lg"
          >
            {item.title}
          </Link>
        </>
      ))}
    </div>
  );
}
