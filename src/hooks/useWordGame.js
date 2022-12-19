import { useEffect, useState, useRef } from "react";

const useWordGame = (startingTime = 10) => {

   const [text, setText] = useState("");
   const [timeRemaining, setTimeRemaining] = useState(startingTime);
   const [isTimeRunning, setIsTimeRunning] = useState(false);
   const [wordCount, setWordCount] = useState(0);

   const textareaRef = useRef(null);

   function handleChange(e) {
      const { value } = e.target
      setText(value)
   }

   function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
   }

   useEffect(() => {
      if (isTimeRunning && timeRemaining > 0) {
         setTimeout(() => {
            setTimeRemaining(time => time - 1)
         }, 1000)
      } else if (timeRemaining === 0) {
         setIsTimeRunning(false)
         setWordCount(calculateWordCount(text))
      }
   }, [timeRemaining, isTimeRunning])

   function handleClick() {
      setIsTimeRunning(true);
      setTimeRemaining(startingTime);
      setText('');
      setWordCount(0);
      textareaRef.current.disabled = false;
      textareaRef.current.focus();
   }

   return { handleChange, text, isTimeRunning, textareaRef, timeRemaining, handleClick, wordCount }
}

export default useWordGame;