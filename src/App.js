import useWordGame from "./hooks/useWordGame"

function App() {
  const { handleChange, text, isTimeRunning, textareaRef, timeRemaining, handleClick, wordCount } = useWordGame();

  return (
    <div className="container">
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textareaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={handleClick}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
