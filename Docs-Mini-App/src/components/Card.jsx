import React from "react";
import { FaDownload, FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="py-3 px-6 flex items-center justify-between mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 cursor-pointer bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".99em" color="#000" />
            ) : (
              <FaDownload size=".9em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h3 className="cursor-pointer text-sm font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
