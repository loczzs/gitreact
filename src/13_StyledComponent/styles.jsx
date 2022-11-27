import styled, { css } from "styled-components";
 export const Button = styled.button `
    padding: 10px 20px;
    border-radius:8px ;
    /* background-color: red; */
    color: ${({theme}) => theme.black};
    border: 1px solid  ${({theme}) => theme.black};
    // xác định giá trị của thuộc tính cursor bằng prop disabled
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
     /* Xác định giá trị thuộc tính opacity bằng prop disabled */
  opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};

    // kiểm tr nếu prop variant là primary sẽ thêm những thuộc tính css sau
    
    ${props => props.variant === "primary" && css`
        background-color: ${props.theme.blue};
        color: white;
        border-color:blue ;
    
    `}
    ${({variant,theme}) => variant === "success" && css`
    background-color:${theme.green};
    color: white;
    border-color: green;
    
    
    ` } 
    


`;

