import React, { useRef } from "react";
import { Card } from "./Card";

const Forground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed p-6 z-[3] w-full h-full flex gap-5 flex-wrap "
    >
      {data.map((item, index) => (
        <Card data={item} refrence={ref} />
      ))}
    </div>
  );
};

export default Forground;
