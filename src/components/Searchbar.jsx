import React from "react";
import arrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";

export default function Searchbar({ setIpAddress }) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }

  function search(e) {
    e.preventDefault();
    setIpAddress(input);
  }
  return (
    <div>
      <form
        className="flex justify-center mx-10  mt-8 overflow-hidden rounded-2xl lg:max-w-2xl lg:mx-auto cursor-pointer z-50"
        onSubmit={(e) => search(e)}
      >
        <input
          type="text"
          className="p-5 w-full text-xl focus:outline-none"
          placeholder="Search for any API Address"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className=" w-16 bg-black p-4 flex items-center justify-center hover:bg-slate-500 transition-all"
        >
          <img src={arrow} alt="icon arrow right " />
        </button>
      </form>
    </div>
  );
}
