import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from './TinderCards';
import SwiperButtons from './SwiperButtons';
import Chats from './Chats';
import ChatsScreen from './ChatsScreen'

const App = () => {
  // <Header/>を2つ用意することで片方はpropsの設定する→Header.jsで条件分岐することができる
  return (
    <div className="App">

      <Router>
      
        <Switch>
          {/* 1個目のheaderはチャットメッセージの左上マークを押すとchat.jsに戻る */}
          <Route  path="/chat/:person">
          <Header backButton="/chat"/>
            <ChatsScreen/>
            
            </Route>
            {/* 2つ目のheaderは左上マークを押すとhome画面に戻る */}
            <Route  path="/chat">
          <Header backButton="/"/>
            <Chats/>

          </Route>
          <Route  path="/">
          <Header />
            <TinderCard />
            <SwiperButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

