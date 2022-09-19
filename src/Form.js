import { useState } from "react";

export const Form = ({ updateMessage }) => {

  const [messageBody, setMessageBody] = useState({
    author: '',
    text: '',
  });

  const setMessageAuthor = (event) => {
    setMessageBody(pervState => ({...pervState, author: event.target.value}))
  };
  
  const setMessageText = (event) => {
    setMessageBody(pervState => ({...pervState, text: event.target.value}))
  };

  return (
    <div className="message__form">
      <form>
        <fieldset>
          <legend>Message</legend>
          <label>Your name:</label>
          <input type="text" onChange={ setMessageAuthor }></input>
          <label>message:</label>
          <textarea onChange={ setMessageText }></textarea>
          <button className='message__submit' 
          onClick={(event) => {
            event.preventDefault()
            updateMessage(messageBody)
          }}>
          Добавить сообщение
          </button>
        </fieldset>
      </form>
    </div>
  )
}