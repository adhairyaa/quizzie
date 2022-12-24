import "./QuizCard.css";
import React from "react";
import { Props } from "./types";

export function QuizCard({ coverImage, title }: Props) {
  return (
    <div className="quiz-card">
      <img className="quiz-img" src={coverImage} alt={title} />
      <p className="quiz-title">{title}</p>
    </div>
  );
}
