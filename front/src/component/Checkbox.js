import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckBoxIcon } from "../asset/icon-check-mono.svg"

const CheckBoxStyled = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 34px;
    width: 34px;
    border: 2px solid var(--mainYellow);
    border-radius: 3px ;
    background-color: var(--mainYellow);
` 

const UnCheckBoxStyled = styled.button`
    height: 34px;
    width: 34px;
    border: 2px solid var(--mainLighitGray);
    border-radius: 3px ;
`

// const Aaaaaa = styled.input`
//     accent-color :  var(--mainYellow);
//     height: 34px;
//     width: 34px;
//     border: 2px solid var(--mainLighitGray);
// `

function CheckBox (props) {
    return(
        props.isChecked === true ?
            <CheckBoxStyled>
                <CheckBoxIcon width="24px" fill="#303134"/> 
            </CheckBoxStyled>

        :
            // <Aaaaaa type="checkbox"/>
            <UnCheckBoxStyled/>
    )
  }
  
export default CheckBox;