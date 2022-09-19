export const Message = ({messageList}) => {
  
  return (
    <div className="message">
      { messageList.map(el => 
      <div className="user__message">
          <div className="message__descript">
            <span>Author:</span>
            <p>{ el.author }</p>
          </div>
          <div className="text">
            <span>Message:</span>
            <p>{el.text}</p>
          </div>
      </div>
      )}
    </div>
  );
}