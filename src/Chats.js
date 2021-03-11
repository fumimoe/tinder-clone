import React from "react";
import "./Chats.css";
import Chat from './Chat'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="大石凌"
        message="元気出していこう！"
        timestamp="4時間前"
        profilePic="https://www.axa-direct.co.jp/s/pet/img/library/mv_library_dog_labrador_retriever.png"
      />
      <Chat
        name="田口和希"
        message="ランニング使用"
        timestamp="14分前"
        profilePic="https://static.retrip.jp/spot/7166fb8e-bb12-44db-b018-44b1019821ff/images/73359b8d-dbb3-4fa3-8334-5f3836ee7c77_m.jpg"
      />
      <Chat
        name="綾野尭"
        message="バトミント"
        timestamp="１時間前"
        profilePic="https://houndcom-news.com/cms/wp-content/uploads/asg20190402_fv.jpg"
      />
      <Chat
        name="石黒大樹"
        message="先生"
        timestamp="二週間前"
        profilePic="https://dekiru.net/upload_docs/img/d25c_13_kitami_fig1.jpg"
      />
    </div>
  );
};

export default Chats;
