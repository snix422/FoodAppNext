import OfferPlaceholder from "@/components/Placeholders/OfferPlaceholder"

const Loading = () => {
    return(
        <main className="w-[100vw] h-[90vh] flex items-center justify-center pt-24">
            <OfferPlaceholder lines={3} height={200}/>
        </main>
    )
}

export default Loading