import BlogCard from "../component/main/BlogCard";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime`);
  const anime = await response.json();
  console.log(anime);

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1>test</h1>
        <div className="grid grid-cols-3 gap-2">
          {anime.data.map(
            (data: {
              status: string | undefined;
              images: any;
              synopsis: string | undefined;
              title: string;
            }) => (
              <BlogCard
                key={data.title} // Make sure to add a unique key
                title={data.title}
                image={data.images.webp.image_url}
                description={data.synopsis}
                status={data.status}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
