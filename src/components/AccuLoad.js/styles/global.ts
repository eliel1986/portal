import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.accuload {
    background-color: #cfd6d0;
    padding: 40px;
    display: block;
    border-radius: 15px;
}
@media screen and (min-width: 200px) and (max-width: 400px) {
    .tela {
        width: 280px;
        height: 110px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
    div.display {
        width: 220px;
        background-color: #639033;
        display: flex;
        border-radius: 8px;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    div.header {
        position: absolute;
        margin-top: 10px;
        font-size: 14px;
    }
    div.content {
        position: absolute;
        margin-top: 38px;
        font-size: 14px;
    }
    div.footer {
        position: absolute;
        margin-top: 72px;
        font-size: 12px;
    }
    div.upperLeft {
        width: 120px;
        position: absolute;
        margin-top: 5px;
        margin-left: -135px;
        font-size: 12px;
        text-align: center;
    }
    div.lowerLeft {
        width: 120px;
        position: absolute;
        margin-top: 38px;
        margin-left: -135px;
        font-size: 12px;
        text-align: center;
    }
    div.percent {
        width: 60px;
        position: absolute;
        margin-top: 53px;
        margin-left: -25px;
        font-size: 12px;
        text-align: center;
        font-weight: bold;
    }
    div.upperRight {
        width: 130px;
        position: absolute;
        margin-top: 4px;
        margin-left: 4px;
        font-size: 9px;
        text-align: center;
    }
    div.middleRight {
        width: 130px;
        position: absolute;
        margin-top: 25px;
        margin-left: 4px;
        font-size: 9px;
        text-align: center;
    }
    div.lowerRight {
        width: 130px;
        position: absolute;
        margin-top: 46px;
        margin-left: 4px;
        font-size: 9px;
        text-align: center;
    }
    p.titleOperation {
        font-weight: bold;
    }
    .teclado {
        padding-top: 20px;
        margin-top: 28px;
        width: 280px;
        height: 230px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 20px;
        align-items: center;
    }
    .teclado--linha {
        display: flex;
        justify-content: center;
    }
        button {
            width: 40px;
            height: 36px;
            background-color: white;
            color: black;
            font-size: 13px;
            font-style: italic;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            padding: 5px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
        }
}
@media screen and (min-width: 401px) and (max-width: 600px) {
    .tela {
        width: 285px;
        height: 120px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
    div.display {
        width: 220px;
        background-color: #639033;
        display: flex;
        border-radius: 10px;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    div.header {
        position: absolute;
        margin-top: 10px;
        font-size: 14px;
    }
    div.content {
        position: absolute;
        margin-top: 40px;
        font-size: 14px;
    }
    div.footer {
        position: absolute;
        margin-top: 80px;
        font-size: 12px;
    }
    div.upperLeft {
        width: 120px;
        position: absolute;
        margin-top: 3px;
        margin-left: -130px;
        font-size: 12px;
        text-align: center;
    }
    div.lowerLeft {
        width: 120px;
        position: absolute;
        margin-top: 48px;
        margin-left: -130px;
        font-size: 12px;
        text-align: center;
    }
    div.percent {
        width: 60px;
        position: absolute;
        margin-top: 58px;
        margin-left: -25px;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
    }
    div.upperRight {
        width: 130px;
        position: absolute;
        margin-top: 2px;
        margin-left: 2px;
        font-size: 10px;
        text-align: center;
    }
    div.middleRight {
        width: 130px;
        position: absolute;
        margin-top: 26px;
        margin-left: 2px;
        font-size: 10px;
        text-align: center;
    }
    div.lowerRight {
        width: 130px;
        position: absolute;
        margin-top: 52px;
        margin-left: 2px;
        font-size: 10px;
        text-align: center;
    }
    p.titleOperation {
        font-weight: bold;
    }
    .teclado {
        padding-top: 20px;
        margin-top: 28px;
        width: 285px;
        height: 238px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 20px;
        align-items: center;
    }
    .teclado--linha {
        display: flex;
        justify-content: center;
    }
        button {
        width: 42px;
        height: 38px;
        background-color: white;
        color: black;
        font-size: 14px;
        font-style: italic;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
    }
}
@media screen and (min-width: 601px) {
    .tela {
        width: 480px;
        height: 140px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
    div.display {
        width: 300px;
        background-color: #639033;
        display: flex;
        border-radius: 10px;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    div.header {
        position: absolute;
        margin-top: 10px;
        font-size: 20px;
    }
    div.content {
        position: absolute;
        margin-top: 50px;
        font-size: 20px;
    }
    div.footer {
        position: absolute;
        margin-top: 90px;
        font-size: 20px;
    }
    div.upperLeft {
        width: 120px;
        position: absolute;
        margin-top: 0px;
        margin-left: -155px;
        font-size: 18px;
        text-align: center;
    }
    div.lowerLeft {
        width: 120px;
        position: absolute;
        margin-top: 45px;
        margin-left: -155px;
        font-size: 18px;
        text-align: center;
    }
    div.percent {
        width: 60px;
        position: absolute;
        margin-top: 60px;
        margin-left: -25px;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }
    div.upperRight {
        width: 130px;
        position: absolute;
        margin-top: 0px;
        margin-left: 25px;
        font-size: 13px;
        text-align: center;
    }
    div.middleRight {
        width: 130px;
        position: absolute;
        margin-top: 30px;
        margin-left: 25px;
        font-size: 13px;
        text-align: center;
    }
    div.lowerRight {
        width: 130px;
        position: absolute;
        margin-top: 60px;
        margin-left: 25px;
        font-size: 13px;
        text-align: center;
    }
    p.titleOperation {
        font-weight: bold;
    }
    .teclado {
        padding-top: 20px;
        margin-top: 30px;
        width: 480px;
        height: 280px;
        background-color: black;
        border: 2px solid #555;
        border-radius: 20px;
        align-items: center;
    }
    .teclado--linha {
        display: flex;
        justify-content: center;
    }
        button {
        width: 70px;
        height: 50px;
        background-color: white;
        color: black;
        font-size: 25px;
        font-style: italic;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
    }
}
`