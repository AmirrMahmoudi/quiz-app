"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="container">
      <h2 className="quiz-container">مشکلی پیش اماده 🧐</h2>
      <button onClick={() => reset()}>دوباره تلاش کن 😅</button>
    </div>
  );
}
