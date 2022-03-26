import React, { useRef } from 'react'

const Start = ({ setUsername}) => {
    const inputRef = useRef();
    const message = `Welcome To MIllionaire Quiz App!`;

    const handleClick = () => {
       inputRef.current.value && setUsername(inputRef.current.value);

    }
  return (
    <>
        {/* <h1 className='h1'> {message} </h1> */}
        <div className='start'>
        <input placeholder='Enter your name' className='startInput' ref={inputRef}/>
        <button className='startButton' onClick={handleClick}>
                Start
        </button>
    </div>

    
    </>
    
  )
}

export default Start