import styled from 'styled-components';

export const Global = styled.body`

.box-peso {
    background-color: rgba(0, 0, 0, 0.6);
    height: 60vh;
    padding: 5px;
    color: white;  
    border: 1px solid black  
} 

p {
    margin: 4px;
    font-size: 14px;
    
}

input {
    text-align: center;
     padding: 2px;
    outline: none;
    font-size: 14px; 
}

button {
    background-color: slateblue;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 5px;
    border: none;
    /* outline: none; */
    color: white;
    cursor: pointer;
    transition: 0.5s;
}

button:hover {
    background-color: cornflowerblue;
}

`
