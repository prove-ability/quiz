import { motion } from "framer-motion";
import { IQuiz } from "./constants";
import { container, item } from "./styles";
import { shuffle } from "./utils";

interface Props {
  multipleChoice: IQuiz["multipleChoice"];
  handleClickedInputChange: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function QuizsMultipleChoice({
  multipleChoice,
  handleClickedInputChange,
}: Props) {
  return (
    <motion.ul
      className={`w-full h-full grid overflow-hidden m-0 grid-cols-7 grid-rows-2 gap-[16px] drop-shadow-2xl p-4`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {shuffle(multipleChoice).map((syllable, id) => (
        <motion.li
          key={id}
          className="h-[50px] bg-amber-700/20 rounded-md flex items-center justify-center hover:cursor-pointer"
          variants={item}
          whileHover={{ scale: 1.2 }}
          onClick={handleClickedInputChange}
        >
          {syllable}
        </motion.li>
      ))}
    </motion.ul>
  );
}
