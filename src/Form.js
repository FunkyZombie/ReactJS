import { useRef, useState, useEffect} from "react";
import { Button,
          FormControl,
          InputLabel,
          OutlinedInput } from '@mui/material';
import { ChatList } from './ChatList';

export const Form = ({ updateMessage }) => {
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const [submit, setSubmit] = useState(false)

  const [messageBody, setMessageBody] = useState({
    author: '',
    text: '',
  });

  useEffect(() => {
    if (submit) {
      textRef.current?.focus();
      setSubmit(false)
    } 
  })

  const clearForm = () => {
    textRef.current.value = '';
    setMessageBody(pervState => ({...pervState, text: ''}))
  }

  const setMessageAuthor = (event) => {
      setMessageBody(pervState => ({...pervState, author: event.target.value}))
  };
  
  const setMessageText = (event) => {
      setMessageBody(pervState => ({...pervState, text: event.target.value}))
  };

  return (
    <div className="wrp">
      <div className="message__form">
        <FormControl >
          <InputLabel htmlFor="name">Your name</InputLabel>
          <OutlinedInput inputRef={ nameRef } autoFocus id="name" variant="outlined" onChange={ setMessageAuthor } label="Your name"/>
        </FormControl> 
        <FormControl>
          <InputLabel htmlFor="message">Message</InputLabel>
          <OutlinedInput sx={{ minHeight: '120px', alignItems: 'flex-start' }} inputRef={ textRef } multiline={true} id="message" variant="outlined" onChange={ setMessageText } label="message" />
        </FormControl> 
        <Button variant="contained"
              onClick={(event) => { 
              event.preventDefault()
              updateMessage(messageBody)
              clearForm();
              setSubmit(true)
            }}>
            Отправить
        </Button>
      </div>
      <ChatList>

      </ChatList>
    </div>
  )
}