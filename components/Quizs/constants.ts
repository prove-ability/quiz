export interface IQuiz {
  questions: string;
  answer: string;
  multipleChoice: string[];
}

export const quizs: IQuiz[] = [
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
