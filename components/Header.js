import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
`;

const Logo = styled.Image`
  width: 20px;
  height: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  letter-spacing: 0.1px;
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <ArrowBackIcon />
      <Title>Top Movies</Title>
    </Container>
  );
};

export default Header;
