import { Suspense } from "react";
import Loading from "../loading";

export default function Answers({
  answers,
  onAnswerSelect,
  selectedAnswerIndex,
}) {
  return answers.map((answer, index) => (
    <li
      key={index}
      onClick={() => onAnswerSelect(answer, index)}
      className={selectedAnswerIndex === index ? "li-selected" : "li-hover"}
    >
      <Suspense fallback={<Loading count={1} />}>
        <span>{answer}</span>
      </Suspense>
    </li>
  ));
}
