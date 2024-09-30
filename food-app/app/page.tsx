import AddYourMealsOffer from "@/components/Offers/AddYourMealsOffer";
import DefaultPlaceholder from "@/components/Placeholders/DefaultPlaceholder";
import Image from "next/image";
import React, { Suspense } from "react";
const OffersContainer = React.lazy(() => import('@/components/Offers/OffersContainer'));
const LatestPosts = React.lazy(()=>import("@/components/Blog/LatestPosts"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
       <Suspense fallback={<DefaultPlaceholder lines={3} height={200} />}>
        <LatestPosts />
       </Suspense>
       <Suspense fallback={<DefaultPlaceholder lines={3} height={200} />}>
        <OffersContainer />
      </Suspense>
       <AddYourMealsOffer />
       
    </main>
  );
}
