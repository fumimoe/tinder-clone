import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link,useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {/* if文でpropsが渡された時とそうでない時で分ける */}
      {backButton ? (
        // useHistoryは常に同じオブジェクトである
        // LocationはURLが変わるたびに再レンダリングされる
        // 今回はhistory.replaceで引数に渡した値に置き換えられる
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      {/* Link toはRouterの中で使用する */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          alt="tinder-log"
        />
      </Link>

      {/* LInkで指定することでそのページに飛ぶことができる */}
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
