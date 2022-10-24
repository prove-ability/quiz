import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "../components/Modal";
import { quizs } from "../components/Quizs/constants";
import Quizs from "../components/Quizs";
import { shuffle } from "../components/Quizs/utils";

const Home: NextPage = () => {
  const { answer, questions, multipleChoice } = quizs[0];

  const [clickedInput, setClickedInput] = useState<string[]>([]);
  const handleClickedInputChange = (e: React.MouseEvent<HTMLLIElement>) => {
    if (clickedInput.length === answer.length) return;
    const value = (e.target as HTMLElement).innerText;
    setClickedInput((state) => [...state, value]);
  };

  useEffect(() => {
    if (clickedInput.length === answer.length) {
      setTimeout(() => {
        if (clickedInput.join("") === answer) {
          setModalText("정답");
        } else {
          setModalText("실패");
          setShuffledMultipleChoice(shuffle(multipleChoice));
        }
        openModal();
      }, 300);
    }
  }, [clickedInput, answer, multipleChoice]);

  const [shuffledMultipleChoice, setShuffledMultipleChoice] = useState<
    string[]
  >([]);

  useEffect(() => {
    setShuffledMultipleChoice(shuffle(multipleChoice));
  }, [multipleChoice]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const closeModal = () => {
    setModalVisible(false);
    setClickedInput([]);
  };
  const openModal = () => setModalVisible(true);
  return (
    <>
      <Head>
        <title>퀴즈</title>
        <meta name="description" content="퀴즈 !!" />
        <link rel="icon" href="/quiz/favicon.ico?" />
      </Head>
      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {modalVisible && <Modal text={modalText} handleClose={closeModal} />}
      </AnimatePresence>
      <Quizs>
        <Quizs.Title title="단어 퀴즈" />
        <Quizs.Questions questions={questions} />
        <Quizs.Answer
          clickedInput={clickedInput}
          answerLength={answer.length}
        />
        <Quizs.MultipleChoice
          multipleChoice={shuffledMultipleChoice}
          handleClickedInputChange={handleClickedInputChange}
        />
      </Quizs>
    </>
  );
};

export default Home;
