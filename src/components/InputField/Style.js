import styled from "styled-components";

export const Content = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: #F98509;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    span {
        width: 50%;
        text-align: start;
    }

    input {
        width: 50%;
        padding: 12px;
        outline: none;
        border: none;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif
    }

    button {
        width: 50%;
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: 10px;
        color: #18181a;
        display: inline-block;
        font-size: 15px;
        margin-top: 12px;
        padding: 12px;
        text-decoration: none;
        cursor: pointer;
        background: #fff;
        user-select: none;

        span:first-child {
            position: relative;
            transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
            z-index: 10;
        }

        span:last-child {
            color: white;
            display: block;
            position: absolute;
            transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
            z-index: 100;
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: translateY(215%) translateX(-50%);
            height: 14px;
            line-height: 13px;
        }

        :after {
            content: "";
            position: absolute;
            bottom: -50%;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            transform-origin: bottom center;
            transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
            transform: skewY(2deg) scaleY(0);
            z-index: 50;
        }

        :focus:after {
            transform-origin: bottom center;
            transform: skewY(3deg) scaleY(2);
        }

        :focus span:last-child {
            transform: translateX(-25%) translateY(-50%);
            opacity: 1;
            transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
        }
    }

`