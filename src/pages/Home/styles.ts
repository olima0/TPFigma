import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
    p{
        position: absolute;
        display: flex;       
        left: 6%;
        @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
        font-family: 'Lacquer';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        color: ${colors.white};
        
    }
    img{
        position: absolute;
        display: flex;
        top: 23%;
        left: 5%;
        width: 25%;
        height: 65%;
        border-radius: 34px;
    }
    @media(max-width: 1000px){
        p{
            font-size: 24px;
        }
        img{
            width: 20%;
            height: 60%;
            top: 27%
        }
    }
    @media(max-width: 850px){
        p{
            font-size: 22px;
            left: 5%;
            top: 19%;
        }
        img {
            width: 28%;
            height: 55%;
            top: 28%;
            left: 2%;
        }
    }
    @media(max-width: 665px){
        p{
            font-size: 18px;
        }
    }
    @media(max-width: 470px){
        p{
            font-size: 14px;
            left: 40%;
            top: 15%;
        }
        img {
            display: none;
        }
    }
    @media(max-width: 340px){
        p {
            left: 33%;
        }
    }
`

export const Lp = styled.div`
    img{
        position: absolute;
        display: flex;
        width: 11%;
        height: 18%;
        left: 38%;
        top: 20%;
        border-radius: 16px;
    }
    p{
        position: absolute;
        display: flex;
        width: 50%;
        height: 10%;
        left: 50%;
        top: 20%;
        @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
        font-family: 'Lacquer';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: ${colors.white};
    }
    @media(max-width: 1000px){
        img{
            width: 10%;
            height: 16%;
            left: 28%;
            top: 21%;
        }
        p {
            font-size: 14px;
            width: 50%;
            top: 20%;
            left: 40%;
        }
    }
    @media(max-width: 850px){
        img{
            width: 9%;
            height: 14%;
            left: 33%;
            top: 23%;
        }
        p{
            left: 44%;
            font-size: 12px;
        }
    }
    @media(max-width: 665px){
        img {
            top: 20%;
            left: 38%;
        }
        p {
            top: 35%;
            left: 32%;
            font-size: 10px;
            width: 22%;
        }
    }
    @media(max-width: 570px){
        p{
            font-size: 8px;
        }

    }
    @media(max-width: 470px){
        img{
            width: 16%;
            left: 10%;
            top: 22%;
        }
        p{
            left:2%;
            width: 30%;
            top: 36%;
        }  
    }
    @media(max-width: 340px){
        img{
            width: 20%;
            height: 11%;
            left: 7%;
            top: 22%;
        }
        p {
            font-size: 7px;
        }
    }
`
export const Show = styled.div`

    img{
        position: absolute;
        width: 11%;
        height: 18%;
        left: 38%;
        top: 42%;
        border-radius: 16px;
    }
    p{
        position: absolute;
        width: 50%;
        height: 10%;
        left: 50%;
        top: 42%;
        @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
        font-family: 'Lacquer';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: ${colors.white};
    }
    @media(max-width: 1000px){
        img{
            width: 10%;
            height: 16%;
            top: 44%;
            left: 28%;
        }
        p {
            font-size: 14px;
            width: 50%;
            top: 42%;
            left: 40%;
        }
    }
    @media(max-width: 850px){
        img{
            width: 9%;
            height: 14%;
            left: 33%;
            top: 44%;
        }
        p{
            left: 44%;
            top: 42%;
            font-size: 12px;
        }
    }
    @media(max-width: 750px){
        img{
            width: 9%;
            height: 14%;
            left: 33%;
            top: 47%;
        }
        p{
            left: 44%;
            top: 45%;
            font-size: 12px;
        }
    }
    @media(max-width: 665px){
        img {
            top: 20%;
            left: 60%;
        }
        p {
            top: 35%;
            left: 55%;
            font-size: 10px;
            width: 20%;
        }
    }
    @media(max-width: 570px){
        p{
            font-size: 8px;
        }
    }
    @media(max-width: 470px){
        img{
            width: 16%;
            left: 40%;
            top: 22%;
        }
        p{
            left:35%;
            top: 36%;
            width: 30%;
        }  
    }
    @media(max-width: 340px){
        img{
            width: 20%;
            height: 11%;
            left: 40%;
            top: 22%;
        }
        p {
            font-size: 7px;
        }
    }
`

export const Encore = styled.div`

    img{
        position: absolute;
        width: 11%;
        height: 18%;
        left: 38%;
        top: 63%;
        border-radius: 16px;
    }
    p{
        position: absolute;
        width: 50%;
        height: 10%;
        left: 50%;
        top: 63%;
        @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
        font-family: 'Lacquer';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: ${colors.white};
    }
    @media(max-width: 1000px){
        img{
            width: 10%;
            height: 16%;
            left: 28%;
            top: 67%;
        }
        p {
            font-size: 14px;
            width: 50%;
            top: 65%;
            left: 40%;
        }
    }
    @media(max-width: 850px){
        img{
            width: 9%;
            height: 14%;
            left: 33%;
            top: 65%;
        }
        p{
            left: 44%;
            top: 62%;
            font-size: 12px;
        }
    }
    @media(max-width: 750px){
        img{
            width: 9%;
            height: 14%;
            left: 33%;
            top: 70%;
        }
        p{
            whidth: 50%;
            left: 44%;
            top: 67%;
            font-size: 12px;
        }
    }
    @media(max-width: 665px){
        img {
            top: 20%;
            left: 80%;
        }
        p {
            top: 35%;
            left: 77%;
            font-size: 10px;
            width: 20%;
        }
    }
    @media(max-width: 570px){
        p{
            font-size: 8px;
        }
    }
    @media(max-width: 470px){
        img{
            width: 16%;
            left: 73%;
            top: 22%;
        }
        p{
            left:68%;
            top: 36%;
            width: 30%;
        }  
    }
    @media(max-width: 340px){
        img{
            width: 20%;
            height: 11%;
            left: 73%;
            top: 22%;
        }
        p {
            font-size: 7px;
        }
    }
`