import CreateForm from "@/components/Blog/CreateForm"
import HeadingTitle from "@/components/Blog/HeadingTitle"

const CreatePost = () => {

    return(
        <main className="flex flex-col items-center pt-12 pb-12">
            <HeadingTitle title="Dodaj post" />
            <CreateForm />
        </main>
    )
}

export default CreatePost