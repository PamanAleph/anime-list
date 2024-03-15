import React from "react";
import { ALL_ANIME } from "../../../../../config";
import BlogCard from "@/app/component/main/BlogCard";

export default async function page({ params }: any) {

  const decodedKeywords = decodeURIComponent(params.keyword).replace(/%20/g, ' ')
  const responseAll = await fetch(`${ALL_ANIME}?q=${decodedKeywords}`);
  const AllAnime = await responseAll.json();

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="pt-20">
        <h1 className="text-xl text-white">
            pencarian untuk... {decodedKeywords}
        </h1>
          <BlogCard api={AllAnime}/>
      </div>
    </div>
  );
}
