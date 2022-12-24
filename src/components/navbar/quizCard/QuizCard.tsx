import "./QuizCard.css";
import React from "react";
import { Props } from "./types";

export function QuizCard({ coverImage, title }: Props) {
  return (
    <div className="quiz-card">
      <img src={coverImage} alt={title} />
      <p>{title}</p>
    </div>
  );
}
