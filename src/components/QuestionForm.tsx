import React, { useState, ChangeEvent } from "react";
import Button from "./Button";

type TTest = {
  name: string,
  questions: TQuestion[]
}

type TAnswer = {  
  name: string,
  correct: boolean,
}

type TQuestion = {
  id: number | null;
  qName: string;
  aName: string;
  answers?: TAnswer[]
};

type Props = {};

const MAX_QUESTION_NUMBER = 5;

const QuestionForm = (props: Props) => {
  const initQuestionState = {
    id: null,
    qName: "",
    aName: "",
  };

  const [formData, setFormData] = useState<TQuestion>(initQuestionState);
  const [questions, setQuestions] = useState<TQuestion[]>([]);

  const handleQuestion = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, qName: e.target.value });
  };

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, aName: e.target.value });
  };

  const handleSave = () => {
    setQuestions([...questions, formData]);
    setFormData(initQuestionState);
  };

  return (
    <div>
      {questions.length < MAX_QUESTION_NUMBER && (
        <div>
          QuestionForm
          <div>
            Question Name:
            <input
              type="text"
              value={formData.qName}
              onChange={handleQuestion}
            />
          </div>
          <div>
            Answer Name:
            <input type="text" value={formData.aName} onChange={handleAnswer} />
          </div>
          <Button onClick={handleSave}>Save</Button>
        </div>
      )}
      {questions.length > 0 && (
        <div>
          Questions
          <div>
            {questions.map((q: TQuestion, i: number) => (
              <div key={i}>
                {q.qName}: {q.aName}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
