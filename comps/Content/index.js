import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:100%;
height:100%;
background-color:${props=>props.bgcolor ? props.bgcolor: "#DEFECD"};
min-width:10px;
min-height:10px;
background-image:${props=>props.bgimg ? props.bgimg: ""};
color:white;
font-size:28px;
font-family: "Roboto", sans-serif;
`;

const Content = ({children, bgcolor, bgimg}) =>{
    return <Container bgcolor={bgcolor} bgimg={bgimg}>
        {children}
    </Container>
}

Content.defaultProps = {
    bgcolor:"#DEFECD",
    children:"Hello"
}

export default Content;