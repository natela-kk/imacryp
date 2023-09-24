import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../button";
import { FORM_TEXT } from "./constants";

export const Form = () => {
  const [name, setName] = useState("doliacat.eth");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex max-w-[640px] min-h-[484px] px-[60px] py-[30px] bg-cyan-200 bg-opacity-10 rounded-[20px] border border-cyan-100 border-opacity-20 backdrop-blur-[100px] flex-col justify-start items-center gap-5">
      <p className="text-center text-cyan-300 text-[27.65px] font-semibold">
        {FORM_TEXT.title}
      </p>
      <p className="self-stretch text-center text-base whitespace-pre-line">
        {FORM_TEXT.description}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex-col justify-start items-center gap-5 inline-flex"
      >
        <div>
          <label htmlFor="input" className="text-zinc-500 text-sm">
            {FORM_TEXT.name}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex min-w-[520px] min-h-14 px-4 py-[18px] rounded-lg border border-cyan-300  justify-start items-center gap-2.5 bg-transparent"
            id="input"
          />
        </div>
        <div>
          <label htmlFor="textarea" className="text-zinc-500 text-sm">
            {FORM_TEXT.about}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex min-w-[520px] min-h-[116px] px-4 py-[18px] rounded-lg border border-cyan-300  justify-start items-center gap-2.5 bg-transparent"
            id="textarea"
          />
        </div>
        <Button>
          <span className="min-w-[520px] inline-block">Finish</span>
        </Button>
      </form>
    </div>
  );
};
