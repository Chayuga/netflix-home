import React from "react";
import ReactDOM from "react-dom";

import { StatusBar, Dimensions } from "react-native";

import styled from "styled-components/native";

import Movies from "../components/Movies";

const api = [
  require("../assets/movie1.jpg"),
  require("../assets/movie2.jpg"),
  require("../assets/movie3.jpg"),
  require("../assets/movie4.jpg"),
];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #070818;
`;

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Movies label="Top Movies" item={api} />
      </Container>
    </>
  );
};

export default Home;
