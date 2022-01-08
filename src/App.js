import React from "react";
import Header from "./Components/Header";
import "./styles.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import styled from "styled-components";
import TinderCards from "./Components/TinderCards";
import Footer from "./Components/Footer";

const DivWrapper = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function App() {
  return (
    <DivWrapper className="App">
      <Header />
      <TinderCards />
      <Footer />
    </DivWrapper>
  );
}
