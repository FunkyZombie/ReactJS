export const Message = ({messageList}) => {
  
  return (
    <div className="message">
      { messageList.map((el, i) => 
      <div className="user__message" key={i}>
          <div className="message__descript">
            <span>Author:</span>
            <p>{ el.author }</p>
          </div>
          <div className="text">
            <span>Message:</span>
            <p className="message__text" style={{ width: '600px' }}>{el.text}</p>
          </div>
      </div>
      )}
    </div>
  );
}