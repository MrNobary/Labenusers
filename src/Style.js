import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 100vh;
`

export const Window = styled.div`
    border: 5px solid black;
    border-radius: 20px;
    width: 100vh;
    height: 50vh;
    overflow: hidden;
    margin: 24px 0px;
    display: flex;
    flex-direction: column;
`

export const Topbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    width: 100%;
    border-bottom: 5px solid black;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 12px;
        gap: 6px;
        width: 1fr;

        input {
            padding: 6px 12px;
            border: 1px solid black;
            background-color: #F8F5DF;
            border-radius: 10px;
            width: 100%;
            outline: none;
            :focus {
                padding: 12px;
                transition: .5s;
            }
        }
    }

    span {
        text-align: end;
        padding-right: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
`

export const OrangeBall = styled.div`
    width: 15px;
    height: 15px;
    border: 3px solid black;
    background-color: #F98509;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        transform: scale(1.2);
    }
`

export const YellowBall = styled.div`
    width: 15px;
    height: 15px;
    border: 3px solid black;
    background-color: #F2E018;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        transform: scale(1.2);
    }
`

export const WhiteBall = styled.div`
    width: 15px;
    height: 15px;
    border: 3px solid black;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    
    :hover {
        transform: scale(1.2);
    }
`