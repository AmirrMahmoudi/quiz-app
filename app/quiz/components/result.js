export default function Result({ result, questions }) {
  return (
    <div className="quiz-container">
      <h3>نتایج</h3>
      <h3>به طور کلی {(result.score / 25) * 100}% سولات جواب داده شده</h3>
      <p>کل سولات : {questions.length}</p>
      <p>کل امتیاز : {result.score}</p>
      <p>سولات درست : {result.correctAnswers}</p>
      <p>سولات غلط : {result.worngAnswers}</p>
      <button onClick={() => window.location.reload()}>شروع مجدد آزمون</button>
    </div>
  );
}
