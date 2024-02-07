const Message = () => {
  return (
    <div className={`message ${true && "owner"}`}>
      <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        {true && <img src="" alt="" />}
      </div>
    </div>
  );
};
export default Message;
