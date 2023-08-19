import styled, { createGlobalStyle } from "styled-components"
import Lecquer from "../assets/fonts/Lacquer-Regular.ttf"


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }
`

export const colors = {
    primary: "#690000",
    secondary: "#D9D9D9",
    black: "#000",
    white: "#fff"
  }

export const Fonts = {
    Lecquer,
};