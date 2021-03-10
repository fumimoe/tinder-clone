import React from "react";
import "./SwiperButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwiperButtons = () => {
  return (
    <div className="swiperButtons">
      <IconButton className="swiperButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swiperButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swiperButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swiperButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swiperButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwiperButtons;
