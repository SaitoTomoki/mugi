import React from "react";
import styled from "styled-components";

// 便宜上今は一つのICONタグでまとめていますが、将来的には分けてOK
const ICON= styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
  cursor:pointer;
  // transition:800ms ease all;
  &:hover {
   color: #00acee;
   box-shadow: none;
  // }
  &:active {
    color: yellow;
  }
`;

const FooterWrapper = styled.div`
  width: 300px;
  height: 500px;
  justify-content: space-around;
`;
function ReplyAll(){
  alert("全員に返信");
};
function Reply(){
  alert("返信");
};
function Retweet(){
  alert("リツート");
};
function QuoteRetweet(){
  alert("引用リツイート");
};
function Favorite(){
  alert("ファボ");
};
const Footer = () => {
  return (
    <FooterWrapper style={{  position: "absolute",
      bottom: 0,
      width: "300px",
      height: "50px"}}>

      <ICON 
        onClick={ReplyAll}
        className="fas fa-reply-all" 
      ></ICON>

      <ICON
        onClick={Reply}
        className="fas fa-reply"
      ></ICON>

      <ICON
        onClick={Retweet}
        className="fas fa-retweet"
      ></ICON>

      <ICON
        onClick={QuoteRetweet}
        className="fas fa-quote-right"
      ></ICON>

      <ICON
        onClick={Favorite}
        className="fas fa-star"
      ></ICON>

    </FooterWrapper>
  );
};
export default Footer;
