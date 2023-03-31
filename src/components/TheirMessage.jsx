const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessagegByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
  return (
    <div className="message-row">
      {isFirstMessagegByUser && (
        <div
            className="message-avatar"
            style={{backgroundImage: `url(${message?.sender?.avatar})`}}
        />

      )}
      
         {message?.attachments?.length > 0
              ? (
                <img
                    src={message.attachments[0].file}
                    alt="message-attachments"
                    className="message-image"
                    style={{marginLeft: isFirstMessagegByUser ? '4px' : '48px' }}
                />
              ) : (
                <div className="message" style={{float: 'left',  backgroundColor: '#6d9496', marginLeft: isFirstMessagegByUser ? '4px' : '48px'  }}>
                     {message.text}
                </div>
              )
          }
      
    </div>
  );
}

export default TheirMessage;