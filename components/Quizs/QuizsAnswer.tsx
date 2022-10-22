import { motion } from "framer-motion";
import { container, item } from "./styles";

interface Props {
  clickedInput: string[];
  answerLength: number;
}

export default function QuizsAnswer({ clickedInput, answerLength }: Props) {
  const answerWidth = `w-[${answerLength * 50}px]`;
  const commonClass = `${
    answerLength ? answerWidth : ""
  } h-[38px] grid overflow-hidden m-0 grid-cols-4 grid-rows-1 gap-[16px]`;

  return (
    <>
      <motion.ul
        className={`${commonClass} relative top-[54px] mt-[-54px]`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {Array.from({ length: answerLength }).map((_, id) => (
          <motion.li
            key={id}
            className="bg-black/20 rounded-[12px]"
            variants={item}
          />
        ))}
      </motion.ul>
      <motion.ul
        className={commonClass}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {clickedInput.map((input, id) => (
          <motion.li
            key={id}
            className="flex items-center justify-center"
            variants={item}
          >
            {input}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
