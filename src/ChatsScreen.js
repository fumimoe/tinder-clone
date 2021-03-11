import React, { useState } from "react";
import "./ChatsScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatsScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {
      name: "大樹",
      image: "https://dekiru.net/upload_docs/img/d25c_13_kitami_fig1.jpg",
      message: "こんにちは",
    },
    {
      name: "大樹",
      image: "https://dekiru.net/upload_docs/img/d25c_13_kitami_fig1.jpg",
      message: "こんばんは",
    },
    {
      message: "おやすみ",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...messages,{message : input}])
    setInput("")
  }
  return (
    <div className="chatSchrcreen">
      <p className="chatSchrcreen__title">
        マッチングしました！連絡をとってみましょう！
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              //   altにnameを指定することでアバターがないときは名前を表示してくれる
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__text__right">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
        onChange={(e) =>setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="メッセージを入力"
          className="chatScreen__inputField"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">送信</button>
      </form>
    </div>
  );
};

export default ChatsScreen;
