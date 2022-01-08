import React from "react";
import styled from "styled-components";

const ICON1 = styled.i`
  font-size: 2.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;
const ICON2 = styled.i`
  font-size: 4rem;
  padding: 0.3rem;
  color:#00acee;
`;
const HeaderWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      {/* 自身のプロフィールを表示 */}
      <ICON1
       className="far fa-user-circle"
      ></ICON1>
      {/* 投稿 */}
      <ICON2
        className="fab fa-twitter-square"
      ></ICON2>
      {/* DM */}
      <ICON1 
       className="far fa-envelope"
      ></ICON1>

    </HeaderWrapper>
  );
};
export default Header;
