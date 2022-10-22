import QuizsAnswer from "./QuizsAnswer";
import QuizsMultipleChoice from "./QuizsMultipleChoice";
import QuizsQuestions from "./QuizsQuestions";
import QuizsTitle from "./QuizsTitle";
import QuizsContainer from "./QuizsContainer";

const Quizs = Object.assign(QuizsContainer, {
  MultipleChoice: QuizsMultipleChoice,
  Answer: QuizsAnswer,
  Questions: QuizsQuestions,
  Title: QuizsTitle,
});

export default Quizs;
