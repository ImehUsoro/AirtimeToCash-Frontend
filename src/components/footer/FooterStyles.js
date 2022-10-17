import styled from 'styled-components';

export const FooterStyles = styled.nav`
    .footer-container {
        width: 100%;
        /* height: 284px; */
        background: #21334F;
        padding: 40px 100px 32px 100px;
    }
    .logo-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 34px;
        margin-bottom: 34px;
    }
    .footer-text {
        display: flex;
        justify-content: space-evenly;
        height: 26px;
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        font-feature-settings: 'liga' off;
        color: #F2F2F2;
        gap: 30px;
    }
    .footer-text a {
        text-decoration: none;
        color: inherit;
    }
    hr {
        width: 100%;
        border: 0.0004px solid #fff;
        margin-bottom: 20px;
    }
    .footer-copyright {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .footer-copyright p{
        width: 273px;
        height: 24px;
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        font-feature-settings: 'liga' off;
        color: #FFFFFF;
    }
    @media screen and (max-width: 1280px) {
        .footer-container {
            /* position: relative; */
            width: 100%;
            /* height: 20rem; */
            /* left: 0px; */
            /* top: 0; */
            background: #21334F;
            padding: 60px;
        }
        .footer-logo img {
            width: 15rem;
        }
        .footer-text {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-top: 15px;
        }
        hr {
            width: 100%;
            border: 0.0004px solid #fff;
            margin-bottom: 21px;
            margin-top: 20px;
        }
        .footer-copyright {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
        }
 
    }
    @media screen and (max-width: 912px) {
        .footer-container {
            width: 100%;
            /* height: 300px; */
            /* left: 0px; */
            /* top: 0; */
            background: #21334F;
            padding: 50px;
        }
        .footer-logo img {
            width: 10rem;
        }
        .footer-text {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-top: 10px;
        }
        hr {
            width: 100%;
            border: 0.0004px solid #fff;
            margin-bottom: 20px;
            margin-top: 60px;
        }
        .footer-copyright {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
        }
 
    }
    @media screen and (max-width: 540px) {
        .footer-container {
            width: 100%;
            /* height: 400px; */
            /* left: 0px; */
            /* top: 0; */
            background: #21334F;
            padding: 50px;
        }
        .footer-logo img {
            width: 10rem;
        }
        .footer-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
        }
        hr {
            width: 100%;
            border: 0.0004px solid #fff;
            margin-bottom: 20px;
            margin-top: 60px;
        }
        .footer-copyright {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
    }
    @media screen and (max-width: 280px) {
        .footer-container {
            /* position: relative; */
            width: 100%;
            height: 450px;
            /* left: 0px; */
            /* top: 0; */
            background: #21334F;
            padding: 50px;
        }
        .footer-logo img {
            width: 9rem;
        }
        .footer-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 30px;
        }
        hr {
            width: 100%;
            border: 0.0004px solid #fff;
            margin-bottom: 20px;
            margin-top: 60px;
        }
        .footer-copyright {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
        .footer-copyright p {
            width: 60%;
            text-align: center;
        }
        .footer-icons {
            position: relative;
            top: 4em;
        }
    }
`