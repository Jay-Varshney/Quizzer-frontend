import React, { useState } from "react";

const QuizForm = ({ onSubmit, initialTopic = "", initialNumQuestions = 5, initialIsTextMode = false }) => {
  const [topic, setTopic] = useState(initialTopic);
  const [numQuestions, setNumQuestions] = useState(initialNumQuestions);
  const [isTextMode, setIsTextMode] = useState(initialIsTextMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit({ topic, numQuestions, isTextMode });
    }
  };

  return (
    <div className="glass-card">
      <div className="form-header">
        <h1>Quizzer 🧠</h1>
        <button 
          type="button" 
          className="mode-toggle"
          onClick={() => setIsTextMode(!isTextMode)}
        >
          {isTextMode ? "📝 Simple Topic" : "📄 Paste Text Content"}
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="topic">{isTextMode ? "Full Text Content" : "Quiz Topic"}</label>
          {isTextMode ? (
            <textarea
              id="topic"
              placeholder="Paste your notes, articles, or any data here. The more the better! 🚀"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className="large-textarea"
            />
          ) : (
            <input
              id="topic"
              type="text"
              placeholder="e.g. React Hooks, Universe, Cooking..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              autoFocus
              required
            />
          )}
        </div>
        <div className="input-group">
          <label htmlFor="numQuestions">Number of Questions</label>
          <input
            id="numQuestions"
            type="number"
            min="1"
            max="20"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default QuizForm;
