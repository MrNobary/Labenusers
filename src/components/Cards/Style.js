import styled from "styled-components";

export const CardContainer = styled.div`
    width: 160px;
    height: 180px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 12px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 6px;
    overflow: hidden;
    background-color: #F8F5DF;

    :hover {
        transform: translateY(-2px);
    }
`

export const Hero = styled.section`
    display: flex;
    align-items: flex-start;
    height: 50%;

    img {
        width: 90%;
        border-radius: 50%;
        overflow: hidden;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        :hover {
            transform: scale(1.1);
            color: red;
        }
    }
`

export const Bio = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6px;

    label {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    h3 {
            margin: 0;
            font-weight: 500;
            font-size: 20px;
        }

    p {
        margin: 0;
        font-weight: 300;
        font-size: 14px;
    }

    img {
        width: 9px;
        height: 9px;
        cursor: pointer;
        
        :hover {
            transform: scale(1.2)
        }
    }
`