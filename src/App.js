import './App.css';
import { Message } from './messageList';
import { Form } from './Form';
import { useEffect, useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  
  const updateMessage = (value) => {
      setMessageList(pervState => [...pervState, value])
  }

  const MESSAGE_ROBOT = [
      "Ну вот мы и встретились, кожаный мешок!"
    , "Поиграем в игру?! Я вожу, ты пытаешься выжить!"
    , "А ты неплох, хоть ты и кусок мяса."
    , "I'll be back"
    , "Людской цивилизации тотальный демонтаж! Па пара пам!"]

  useEffect(() => {

    if (messageList.length !== 0 && messageList[messageList.length - 1].author !== 'ROBOT') {
      setTimeout(() => {
        setMessageList(pervState => [...pervState, {author: 'ROBOT', text: MESSAGE_ROBOT[Math.floor(Math.random() * MESSAGE_ROBOT.length)] }])
      }, 1000)
    }
  })

  return (
    <div className="App">
      <Form updateMessage = { updateMessage }></Form>
      <Message messageList = { messageList }/>
    </div>
  );
}

export default App;

