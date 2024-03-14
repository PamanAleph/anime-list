import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  api: any;
}

export default function BlogCard({ api }: BlogCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {api.data.map((anime: any) => (
        <article className="flex bg-white transition hover:shadow-xl" key={anime.title}>
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <p className="text-sm">{anime.status}</p>
          </div>

          {anime.images && (
            <div className="hidden sm:block sm:basis-56">
              <Image
                alt=""
                src={anime.images.webp.image_url}
                className="aspect-square h-full w-full object-cover"
                width={350}
                height={350}
              />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <Link href="#">
                <h3 className="font-bold uppercase text-gray-900 ">{anime.title}</h3>
              </Link>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 text-justify">
                {anime.synopsis}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <Link
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
