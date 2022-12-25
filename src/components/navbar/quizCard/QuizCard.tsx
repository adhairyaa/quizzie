import "./QuizCard.css";
import React from "react";
import { Props } from "./types";
import { Link } from "react-router-dom";

export function QuizCard({ coverImage, title, index }: Props) {
  return (
    <Link to={`/quiz/${index}`}>
      <div className="quiz-card">
        <img className="quiz-img" src={coverImage} alt={title} />
        <p className="quiz-title">{title}</p>
      </div>
    </Link>
  );
}
