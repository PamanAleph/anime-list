import Navbar from "../component/ui/Navbar";


export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex min-h-screen flex-col scroll-smooth">
         <Navbar/>
         <div className="flex-1 bg-[#31363F]">{children}</div>
      </div>
   );
}
