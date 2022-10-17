import styled from "styled-components";

export const AdminEditModelStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

`;

export const ModalContent = styled.div`
    width: 635px;
    background: #fff;
`;

export const ModalHeader = styled.div`
    position: relative;
    height: 60px;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-top: 1%;
    color: #012A4A;

`

export const ModalBody = styled.div`

`

export const CloseButton = styled.button`
    position: absolute;
    right: 57px;
    border: 0;
    opacity: 0.5;
    background: transparent;
    font-weight: bold;
    font-size: 30px;
    color: #21334F;
    cursor: pointer;
    
    :hover {
        opacity: 1;
    }
`


// width: 100%;
//   height: 100vh;
//   background: #e5e5e5;
//   padding: 10% 29%;

//   .modal-container {
//     background: #ffffff;
//     padding-top: 5%;
//     margin-bottom: 10%;
//   }

//   .modal-container img {
//     width: 100%;
//   }

//   .modal-container p {
//     text-align: center;
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 16px;
//     color: #012a4a;
//   }

//   form {
//     padding: 5% 9%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   form label {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     color: #012a4a;
//   }

//   #amount-receive {
//     background: rgba(0, 0, 0, 0.05);
//     border: none;
//   }

//   form input {
//     width: 100%;
//     padding: 3%;
//     background: #ffffff;
//     border: 1px solid #d9d9d9;
//     margin-top: 1%;
//     margin-bottom: 6%;
//     outline: none;
//   }

//   form button {
//     width: 40%;
//     background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
//     border: none;
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 12px;
//     color: #ffffff;
//     padding: 3%;
//   }

//   form ::placeholder {
//     color: #012a4a;
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//   }

//   ul {
//     background: #FFFFFF;
//     width: 50%;
//     padding-top: 1%;
//     padding-bottom: 1%;
//     border-radius: 8px;
//     box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.1), 0px 2px 4px -2px rgba(33, 33, 33, 0.06);
//   }

//   ul li {
//     list-style: none;
//     padding: 6%;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 20px;
//     color: #212121;
//   }

//   ul li:hover {
//     background: #e5e5e5;
//   }
