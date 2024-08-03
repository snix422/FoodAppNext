
import LatestPosts from "@/components/Blog/LatestPosts";
import AddYourMealsOffer from "@/components/Offers/AddYourMealsOffer";
import OffersContainer from "@/components/Offers/OffersContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <LatestPosts />
       <OffersContainer />
       <AddYourMealsOffer />   
    </main>
  );
}
