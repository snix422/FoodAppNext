import { useRef, useState } from "react";
import Image from "next/image";

interface ImagePickerProps {
    label:string,
    name:string
}

const ImagePicker:React.FC<ImagePickerProps> = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState<string | null>(null);

    // Typowanie dla imageInput
    const imageInput = useRef<HTMLInputElement>(null);
  
    function handlePickClick() {
        if (imageInput.current) {
            imageInput.current.click();
        }
    }
  
    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            // Rzutowanie `result` na `string` w przypadku, gdy `result` jest typu `string`
            if (fileReader.result && typeof fileReader.result === 'string') {
                setPickedImage(fileReader.result);
            }
        };

        fileReader.readAsDataURL(file);
    }
  
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white mt-8">
        <label htmlFor={name} className="text-lg font-semibold mb-2">{label}</label>
        <div className="w-full flex flex-col items-center">
            <div className="w-full mb-4">
                <div className="relative w-64 h-64 border border-gray-300 rounded-lg overflow-hidden">
                    {!pickedImage ? (
                        <p className="absolute inset-0 flex items-center justify-center text-gray-500">No image picked yet.</p>
                    ) : (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            layout="fill"
                            objectFit="cover"
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
            <input
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={imageInput}
                className="hidden"
                onChange={handleImageChange}
            />
            <button
                type="button"
                onClick={handlePickClick}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Pick an Image
            </button>
        </div>
    </div>
    );
  }

  export default ImagePicker
  