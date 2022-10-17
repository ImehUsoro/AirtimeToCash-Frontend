import styled from "styled-components";

export const AdminFormStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7% 10%;
  background: #fff;

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-image: linear-gradient(to right, #eb8ba7 80%, #fac2a6 100%);
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #21334f;
    margin-bottom: 5%;
  }

  form label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #21334f;
  }

  form input {
    width: 100%;
    padding: 2%;
    margin-top: 1%;
    margin-bottom: 4%;
    border: 1px solid #d9d9d9;
  }

  form button {
    width: 100%;
    background: linear-gradient(91.85deg, #de3d6d 49.47%, #f5844c 100.15%);
    border: none;
    padding: 4% 5%;
    color: #fff;
    cursor: pointer;
  }
`;
