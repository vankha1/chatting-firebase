const Chats = () => {
  return (
    <div className="chats">
      {/* {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => ( */}
        <div
          className="userChat"
          // key={chat[0]}
          // onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src="" alt="" />
          <div className="userChatInfo">
            <span>Vankhafc123</span>
            <p>Vankhafc123</p>
          </div>
        </div>
      {/* ))} */}
    </div>
  )
}
export default Chats