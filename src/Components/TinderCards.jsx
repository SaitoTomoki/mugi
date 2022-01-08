import TinderCard from "react-tinder-card";
import { Tweet } from "react-twitter-widgets";
import "../styles.css";
import React from "react";


//スワイプした方向が出力される、と"TinderCards"に"direction"の引数を渡すことで定義。"direction"の意味はまじでわかん。cosole.log以降がどこに出力されているかも不明。
export default function TinderCards (){
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

//スワイプした方向が出力される、と"TinderCards"に"myIdentifier"の引数を渡すことで定義。"myIdentifier"の意味はまじでわかん。cosole.log以降がどこに出力されているかも不明。
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  //onCardLeftScreenにreturnするものを記述
  return (
    <div classname ="TinderCards">
      <TinderCard
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
          
          <Tweet tweetId="841418541026877441" />
        
            <div 
              style={{
                zIndex: "1",
                position: "absolute",
                top: "0px",
                width: "100%",
                height: "50%"
              }}
            ></div>
            
          </TinderCard>
 
    </div>
  );
};

