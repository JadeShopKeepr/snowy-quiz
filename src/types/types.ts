export type Answer = {
  sys: {
    id: string;
  };
};

export interface QuestionData {
  questionTitle: string;
  possibleAnswers: AnswerBase[];
  currentIndex: number;
  total: number;
  nextId?: string;
  prevId?: string;
}

export type AnswerBase = {
  fields: {
    title: string;
    value: string;
    isCorrect: boolean;
    [key: string]: any;
  };
  sys?: {
    id?: string;
  };
};
