import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from '../assets/play.mp3'
import correct from '../assets/sounds_correct.mp3'
import wrong from '../assets/wrong.mp3'


const Trivia = ({ 
    data, 
    setStop, 
    questionNumber, 
    setQuestionNumber,
     }) => {
  
        const [question, setQuestion] = useState(null);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [className, setClassName ] = useState("answer");
        const [letsPlay] = useSound(play)
        const [correctSong] = useSound(correct)
        const [wrongSong] = useSound(wrong)

        useEffect( () => {
            letsPlay(); //every time loaded play on site

        }, [letsPlay] );

        useEffect ( () => {
            setQuestion(data[questionNumber - 1] );
        }, [data, questionNumber]);

        const delay = (duration, callback) => {
            setTimeout( () => {
                callback();
            }, duration);
        };

        const handleClick = (a) => {
            setSelectedAnswer(a);
            setClassName("answer active");
            delay(3000, () =>
                setClassName(a.correct ? "answer correct" : " answer wrong")
            );
            delay(6000, () => {
                if (a.correct) { 
                    correctSong(); // applying song in answering answers 
                    delay(1000, () => {
                        setQuestionNumber( (prev) => prev + 1);
                        setSelectedAnswer(null);
                    });

                } else {
                    wrongSong();
                    delay(1000, () => {
                        setStop(true);
                    });
                }
            });
            //setClassName(a.correct ? "answer correct" : "answer wrong" )

            // setStop(()=>{
            //     setClassName(a.correct ? " answer correct" : "answer wrong" )

            // }, 3000)
        };
  
        return (
          <div className='trivia'>
            <div className='question'>{ question?.question}</div>
            <div className='answers'>
                 {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className :  "answer" } 
                         onClick={() => handleClick(a) }>
                        {a.text} 
                    </div>
             ))}
         </div>
    </div>
  );
}

export default Trivia