import React from 'react';

const Results = ({ questions, userAnswers, onRestart, onRepeat, suggestion}) => {
  // Simple scoring logic for demo - in a real app, this would be more complex
  // since these are descriptive answers. We'll simulate a score.
  const score = suggestion.totalScore;
  const totalPossible = questions.length * 5;

  const getScoreColor = (s) => {
    if (s < 2) return { main: '#ff8a98', bg: 'rgba(239, 68, 68, 0.15)', border: '#ef4444' };
    if (s < 4) return { main: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)', border: '#f59e0b' };
    return { main: '#69f0ae', bg: 'rgba(16, 185, 129, 0.15)', border: 'var(--success)' };
  };

  return (
    <div className="glass-card">
      <h1>Quiz Results</h1>
      <div className="score-badge">
        {score} / {totalPossible}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Great effort! Here is a detailed breakdown of your performance.
      </p>

      <div className="results-list">
        {questions.map((q, i) => {
          const s = suggestion.results[i].score;
          const colors = getScoreColor(s);

          return (
            <div 
              key={i} 
              className="result-item"
              style={{ borderLeftColor: colors.border }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <h3 style={{ margin: 0, flex: 1, paddingRight: '1rem' }}>{i + 1}. {q}</h3>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  border: '1px solid var(--card-border)',
                  color: colors.main
                }}>
                  Marks: {s} / 5
                </div>
              </div>
              <p><strong>Your Answer:</strong> {userAnswers[i]}</p>
              <div 
                className="tip"
                style={{
                  background: colors.bg,
                  color: colors.main,
                  border: `1px solid ${colors.border}33` // Adding some transparency to the border
                }}
              >
                <strong>💡 Suggestion:</strong> {suggestion.results[i].detailedFeedback}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={onRepeat} style={{ background: 'var(--secondary)' }}>Repeat Same Topic</button>
        <button onClick={onRestart}>Try Another Topic</button>
      </div>
    </div>
  );
};

export default Results;
