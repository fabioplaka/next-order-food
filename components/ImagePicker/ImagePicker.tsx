"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name?: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const imageInputRef = useRef<HTMLInputElement>(null!);

  const [pickedImage, setPickedImage] = useState<string>();

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files && event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="flex items-start gap-6 mb-4">
        <div className="flex justify-center items-center text-center w-40 h-40 border-2 border-solid border-[#a4abb9] text-[#a4abb9] relative">
          {!pickedImage && (
            <p className="text-base m-0 p-4">No image picked yet</p>
          )}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Selected Image"
              fill
              className="object-cover"
            />
          )}
        </div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name ?? "Pick an image"}
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e)}
        />
        <button
          type="button"
          onClick={handlePickClick}
          className=" border-0 py-2 px-6 bg-[#a4abb9] rounded-md cursor-pointer font-inherit focus:bg-[#b3b9c6] hover:bg-[#b3b9c6]"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
