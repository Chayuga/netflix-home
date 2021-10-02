import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import { Feather, Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 8px;
`;

const Banner = styled.Image`
  height: 100px;
`;

const Tags = styled.View`
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
`;

const Title = styled.Text`
  color: #fff;
  padding: 0 8px;
  font-size: 48px;
`;

// const Separator = styled.View`
//   width: 3px;
//   height: 3px;
//   background-color: #e8e8e8;
//   margin: 6px 0;
//   border-radius: 3px;
// `;
const Details = styled.View`
  width: 90%;
  margin-top: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// const WardImage = styled.Image`
//   height: 5px;
// `;

const CategoryDetails = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
`;

const MovieDescription = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
`;

const Play = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.596);
  width: 142px;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const StartRate = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
`;

const Hero = () => {
  return (
    <Container>
      <Banner resizeMode="contain" source={require("../assets/banner.png")} />

      <Tags>
        <Details>
          <Title>Envolvente</Title>
          <CategoryDetails>
            2019 . Fantasy / Science Fiction . 2h 5m
          </CategoryDetails>

          <MovieDescription>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </MovieDescription>

          <Play>
            <StartRate>AStars</StartRate>
          </Play>
        </Details>
      </Tags>
    </Container>
  );
};

export default Hero;
