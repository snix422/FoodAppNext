import DefaultPlaceholder from "@/components/Placeholders/DefaultPlaceholder"

const Loading = () => {
    return(
        <main className="w-[100vw] h-[100vh] flex justify-center pt-24">
            <DefaultPlaceholder lines={8} height={150} />
        </main>
    )
}

export default Loading