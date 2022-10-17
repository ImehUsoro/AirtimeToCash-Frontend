import styled from "styled-components";

export const NavBarStyles = styled.nav`
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  .user-avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
  }
  .user-info-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #012a4a;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .user-info-container img {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    .navbar-logo img {
      width: 200px;
      /* height: 60px; */
    }
    .navbar-container {
      padding: 0;
      justify-content: space-around;
    }
    .user-info-container .name {
      /* display: none; */
    }
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0.6rem 7rem;
    width: 100%;
  }

  .navbar-logo img {
    width: 269px;
    height: 60px;
  }
  .navbar-links {
    display: flex;
    align-items: center;
  }

  .navbar-links p {
    margin-right: 30px;
    font-family: var(--font-family);
    cursor: pointer;
  }
  .login-button {
    padding: 10px;
    background: linear-gradient(101.31deg, #de3d6d 42.62%, #f5844c 104.19%);
    border: none;
    color: #fff;
    width: 100px;
    height: 39px;
    cursor: pointer;
  }
  .home-text {
    color: #de3d6d;
  }
  .navbar-menu {
    display: none;
  }
  .navbar-menu-container {
    display: flex;
    flex-direction: column;
    background: #ffaa4f;
    position: absolute;
    top: 80%;
    right: 0;
    margin-top: 1rem;
    min-width: 90%;
    min-height: 100%;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .navbar-menu-container-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 3rem;
    position: relative;
  }
  .navbar-menu-container-links p:hover {
    background: #de3d6d;
  }
  .navbar-menu-container-button button {
    padding: 1rem 2rem;
    color: #fff;
    background: #de3d6d;
    font-family: var(--font-family);
    line-height: 25px;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  .navbar-menu-container-links a {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;
    margin: 0 1rem;
  }

  .drop {
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .drop-menu {
    position: absolute;
    width: 216px;
    padding: 1rem 0 2rem 0;
    top: 57px;
    right: 0px;
    background-color: #fff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
  }
  .drop-item {
    display: flex;
    align-items: center;
    gap: 20.5px;
    padding: 0.5rem 0 0.5rem 1rem;
    cursor: pointer;
  }

  .drop-item:hover {
    box-shadow: 0px 1px 7px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 7px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 7px -7px rgba(0, 0, 0, 0.75);
    font-weight: 500;
  }

  .drop-icon {
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 10px 100px;
      width: 100%;
    }
    .navbar-logo img {
      width: 150px;
      height: 50px;
    }
    .navbar-menu {
      display: none;
    }
  }

  @media screen and (max-width: 910px) {
    .navbar-links {
      display: none;
    }
    .navbar-menu {
      display: flex;
    }
  }
  @media screen and (max-width: 700px) {
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 10px 40px;
      width: 100%;
    }
    .navbar-logo img {
      width: 150px;
      height: 50px;
    }
    .navbar-links {
      display: none;
    }
    .navbar-menu {
      display: flex;
    }
  }
  @media screen and (max-width: 550px) {
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 10px 40px;
      width: 100%;
    }
    .navbar-logo img {
      width: 150px;
      height: 50px;
    }
    .navbar-links {
      display: none;
    }
    .navbar-menu {
      display: flex;
    }

    .navbar-menu-container {
      /* height: calc(100vh - 10rem);
            width: calc(80%);
            transition: transform 2s ease-in-out;
            right: 0; */
    }
    /* .navbar-menu-container-links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 70px;
            position: relative;
            top: -1rem;
            left: -6.5rem;
        }
        .navbar-menu-container-links p:hover {
            background: #DE3D6D;
            padding: 10px;
        } */
  }

  @media screen and (max-width: 380px) {
    .user-info-container .name {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    .user-info-container .user-avatar {
      display: none;
    }
  }

  @media screen and (max-width: 280px) {
    .navbar-logo img {
      width: 120px;
      height: 40px;
    }
  }
`;
