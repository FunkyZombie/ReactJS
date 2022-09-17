import './App.css';

function App() {
  const userMessage = 'Рандомный текст введенный рандомным пользователем';

  return (
    <div className="App">
      <Message userMessage = {userMessage}/>
    </div>
  );
}

export default App;

const Message = ({userMessage}) => {
  return (
    <div className="user__message">
      { userMessage }
    </div>
  );
}