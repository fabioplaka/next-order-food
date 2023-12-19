import { ImagePicker } from "@/components";
import React from "react";

interface ShareMealProps {}

const ShareMealProps: React.FC<ShareMealProps> = ({}) => {
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className="text-5xl mb-4 font-bold">
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text	text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-base text-[#ddd8d8]">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full py-2 px-4 rounded-[4px] border border-[#454952] border-solid bg-[#1c2027] text-xl text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full py-2 px-4 rounded-[4px] border border-[#454952] border-solid bg-[#1c2027] text-xl text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
                required
              />
            </p>
          </div>
          <p className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full py-2 px-4 rounded-[4px] border border-[#454952] border-solid bg-[#1c2027] text-xl text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              required
            />
          </p>
          <p className="mb-4">
            <label
              htmlFor="summary"
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="block w-full py-2 px-4 rounded-[4px] border border-[#454952] border-solid bg-[#1c2027] text-xl text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              required
            />
          </p>
          <p className="mb-4">
            <label
              htmlFor="instructions"
              className="block mb-2 text-base uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              className="block w-full py-2 px-4 rounded-[4px] border border-[#454952] border-solid bg-[#1c2027] text-xl text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Pick an image" />
          <p className="actions text-right">
            <button
              type="submit"
              className="
                py-3 
                px-8 
                bg-gradient-to-r 
                from-orange-500 
                to-yellow-300 
                text-white 
                rounded-md 
                shadow-md 
                border-none 
                cursor-pointer 
                text-lg 
                transition-colors 
                duration-300 
                ease-in-out 
                hover:from-orange-600 
                hover:to-yellow-400 
                focus:from-orange-600 
                focus:to-yellow-400 
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-500 
                focus:ring-opacity-50 
                disabled:bg-gray-300 
                disabled:text-gray-500 
                disabled:cursor-not-allowed 
                disabled:hover:bg-gray-300 
                disabled:focus:bg-gray-300
              "
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealProps;
