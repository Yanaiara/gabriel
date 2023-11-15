import styled from "styled-components";

export const ContentList = styled.nav`
    background-color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const List = styled.ul`
    display: flex;
    margin: 0;
    height: 70px;
`

export const Item = styled.a`
    text-decoration: none;
    color: #868d97;
    line-height: 50px;
    font-weight: 500;
    font-size: 26px;
`;

export const ListItem = styled.li`
    align-items: center;
    display: flex;
    margin: 0 30px 0 30px;
`
export const Img = styled.img`
    width: 50px;
    margin: 10px 0 0 10px;
`