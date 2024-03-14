import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CharacterCardProps {
  api: any;
}

export default function CharacterCard({ api }: CharacterCardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 pb-10">
      {api.data.map((character : any) => (
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          alt=""
          src={character.images.webp.image_url}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <h1  className="block text-xs text-white/90"> {character.name_kanji}</h1>
      
            <Link href="#">
              <h3 className="mt-0.5 text-lg text-white">{character.name}</h3>
            </Link>
      
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {character.about}
            </p>
          </div>
        </div>
      </article>
      ))}
    </div>
  );
}
