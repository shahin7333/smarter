import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Comment from "@/components/home/Comment";
import Count from "@/components/home/Count";
import Discover from "@/components/home/Discover";
import Happy from "@/components/home/Happy";
import Products from "@/components/home/Products";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <div className="px-4 md:px-8 xl:px-0 max-w-[1216px] mx-auto ">
      <Banner />
      <Count />
      <Categories />
      <Products />
      <Happy />
      <Comment />
      <Team />
      <Discover />
    </div>
  );
}
