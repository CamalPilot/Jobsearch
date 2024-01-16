import React, { useState } from "react";
import { useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../features/data/dataSlice'

function HeartIcon({id}) {
  const dispatch = useDispatch();
  const {favorite} = useSelector ((state) => state.mainData);
  const [hovered, setHovered] = useState(favorite.includes(id));
  const [clicked, setClicked] = useState(favorite.includes(id));
  useEffect(() => {
    setClicked(favorite.includes(id));
  },[favorite])

  const handleHover = () => {
    setHovered(!hovered);
  };
  const handleClick = () => {
    setClicked(!clicked);
    if(favorite.includes(id)){
      dispatch(removeFavorite(favorite.filter((favoritedID) => favoritedID != id)))
    } else {
      dispatch(addFavorite(id))
    }
  };

  return (
    <div
      // onMouseEnter={handleHover}
      // onMouseLeave={handleHover}
      onClick={handleClick}
      className={`heart-icon ${ clicked ? "filled" : ""}`}
    >
      <BsHeartFill />
    </div>
  );
}

export default HeartIcon;
