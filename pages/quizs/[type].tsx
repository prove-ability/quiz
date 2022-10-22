import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

interface IQuiz {
  questions: string;
  answer: string;
  multipleChoice: string[];
}
const quizs: IQuiz[] = [
  {
    questions:
      "사용자에게 편리한 인터페이스 환경을 제공하고 컴퓨터 시스템의 자원을 효율적으로 관리하는 소프트웨어를 OOOO이라고 합니다.",
    answer: "운영체제",
    multipleChoice: [
      "운",
      "절",
      "상",
      "연",
      "체",
      "한",
      "제",
      "원",
      "본",
      "영",
      "술",
      "미",
      "정",
      "추",
    ],
  },
];

export default function QuizType() {
  const router = useRouter();
  const { type } = router.query;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.07,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const quiz = quizs[0];

  const [clickedInput, setClickedInput] = useState<string[]>([]);
  const handleClickedInputChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLElement).innerText;
    setClickedInput((state) => [...state, value]);
  };

  useEffect(() => {
    if (clickedInput.length === quiz.answer.length) {
      setTimeout(() => {
        if (clickedInput.join("") === quiz.answer) {
          setModalText("정답");
        } else {
          setModalText("실패");
        }
        openModal();
        setClickedInput([]);
      }, 500);
    }
  }, [clickedInput, quiz.answer]);

  const answerWidth = `w-[${quiz.answer.length * 50}px]`;
  const commonClass = `${
    quiz.answer.length ? answerWidth : ""
  } h-[38px] grid overflow-hidden m-0 grid-cols-4 grid-rows-1 gap-[16px]`;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const closeModal = () => setModalVisible(false);
  const openModal = () => setModalVisible(true);

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
        mode="wait"
      >
        {modalVisible && <Modal text={modalText} handleClose={closeModal} />}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* max 576px wrapper */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-center mb-4">단어 퀴즈</h1>
          <div className="flex flex-col items-center gap-[16px]">
            {/*  questions  */}
            <h2>{quiz.questions}</h2>
            {/*  answer  */}
            <motion.ul
              className={`${commonClass} relative top-[54px] mt-[-54px]`}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {Array.from({ length: quiz.answer.length }).map((_, id) => (
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
            {/*  multiple choice */}
            <motion.ul
              className={`w-full h-full grid overflow-hidden m-0 grid-cols-7 grid-rows-2 gap-[16px] drop-shadow-2xl p-4`}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {quiz.multipleChoice.map((syllable, id) => (
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
          </div>
        </div>
      </div>
    </>
  );
}
