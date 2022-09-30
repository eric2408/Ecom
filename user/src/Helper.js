import {css} from "styled-components";

export const mobileScreen = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `
}
