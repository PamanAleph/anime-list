import { ALL_ANIME, TOP_ANIME, TOP_CHARACTER } from "../../../config";
import BlogCard from "../component/main/BlogCard";
import CharacterCard from "../component/main/CharacterCard";

export default async function Home() {
  const responseTop = await fetch(TOP_ANIME);
  const topAnime = await responseTop.json();
  const responseAll = await fetch(ALL_ANIME);
  const allAnime = await responseAll.json();
  const responseCharacter = await fetch(TOP_CHARACTER);
  const topCharacter = await responseCharacter.json();

  console.log(topCharacter)


  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-semibold text-lg py-10">Top Anime</h1>
        <BlogCard api={topAnime}/>
        <h1 className="font-semibold text-lg py-10">Top Character</h1>
        <BlogCard api={allAnime}/>
        <h1 className="font-semibold text-lg py-10">Top Character</h1>
        <CharacterCard api={topCharacter}/>
          
        </div>
      </div>
  );
}
