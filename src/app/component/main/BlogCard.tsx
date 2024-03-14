import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  image?: string;
  description?: string;
  status?: string;
}

export default function BlogCard({
  title,
  image,
  description,
  status,
}: BlogCardProps) {
  return (
    <article className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <p className="text-sm">{status}</p>
      </div>

      {image && (
        <div className="hidden sm:block sm:basis-56">
          <Image
            alt=""
            src={image}
            className="aspect-square h-full w-full object-cover"
            width={350}
            height={350}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {description}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>
  );
}
