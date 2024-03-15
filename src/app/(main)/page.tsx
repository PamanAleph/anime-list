import Link from "next/link";
import { ALL_ANIME, TOP_ANIME, TOP_CHARACTER } from "../../../config";
import BlogCard from "../component/main/BlogCard";
import CharacterCard from "../component/main/CharacterCard";
import Header from "../component/main/Header";
import Hero from "../component/main/Hero";

export default async function Home() {
  const responseTop = await fetch(`${TOP_ANIME}?limit=3`);
  const topAnime = await responseTop.json();
  const responseAll = await fetch(ALL_ANIME);
  const allAnime = await responseAll.json();
  const responseCharacter = await fetch(`${TOP_CHARACTER}?limit=4`);
  const topCharacter = await responseCharacter.json();

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 md:px-0 pt-20">
        {/* anime  */}
        <Header title="Top Anime" />
        <BlogCard api={topAnime} />

        {/* character  */}
        <Header title="Top Character" />
        <CharacterCard api={topCharacter} />
      </div>
    </div>
  );
}
