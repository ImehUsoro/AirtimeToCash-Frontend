import styled from 'styled-components';

export const AboutUsStyles = styled.div`

  width: 100%;
  padding: 5% 10%;

  .dir-one {
    display: flex;
    width: 100%;
    margin-bottom: 6%;
  }

  .border-div {
    width: 12px;
    margin-right: 0.3%;
    height: 100;
    background: #DE3D6D;
    border-radius: 10px 10px 0px 0px;
  }

  .dir-one img {
    height: inherit;
  }

  .text-content {
    width: 45%;
    margin-left: 2%;
  }

  .text-content h2 {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 1.3em;
    color: #03435F;
    margin-bottom: 3%;
  }

  .text-content p {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1.05em;
    line-height: 1.2em;
    color: #03435F;
  }

  .box-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5%;
    margin-bottom: 7%;
    height: 17em
  }

  #box-1 {
    background: rgba(226, 0, 16, 0.05);
    height: 16em;
  }

  #box-2 {
    background: rgba(245, 132, 76, 0.05);
    height: 16em;
  }

  #box-3 {
    background: rgba(85, 166, 48, 0.05);
    height: 16em;
  }

  .best-platform-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0% 9%;
    border-radius: 2em;
    background: var(--gradient-iphone);
    margin-bottom: 7%;
  }

  .first-section {
    width: 55%;
  }

  .first-section h3 {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 1.4em;
    color: #03435F;
    margin-bottom: 4%;
    margin-top: 15%;
  }

  .first-section p {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 0.9em;
    line-height: 1.6em;
    color: #03435F;
    width: 70%;
    margin-bottom: 3%;
  }

  .first-section button {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    padding: 15px 45px;
    background: linear-gradient(107.45deg, #DE3D6D 47.58%, #F5844C 104.23%);
    border-radius: 4px;
    color: #FFFFFF;
    border: none;
    margin-bottom: 15%;
    cursor: pointer;
  }

  .second-section {
    width: 40%;
    margin-top: 4em;
    position: relative
  }

  .picture {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .card-text {
    position: absolute;
    left: 23%;
    top: 13%;
    width: 40%;
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .testimonial h3 {
    width: 100%;
    text-align: center;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 1.4em;
    color: #03435F;
  }

  .testimonial p {
    width: 37%;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6em;
    text-align: center;
    color: #03435F;
    margin-top: 1.2em;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .carousel-wrapper h3 {
    width: 100%;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    color: #012A4A;
  }

  .carousel-wrapper p {
    width: 100%;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5em;
    color: #012A4A;
  }

  @media screen and (max-width: 1167px) {
          .best-platform-section {
            flex-direction: column;
            align-items: center;
            padding: 5% 8% 0 8%;
            height: 55em;
          }
          .first-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 1%;
          }
          .first-section h3 {
            font-size: 3em;
            margin-top: 0;
            text-align: center;
          }
          .first-section p {
            text-align: center;
            font-size: 1.2em;
            width: 80%;
          }
          .second-section {
            width: 50%;
            height: 40em;
          }
          .picture {
            width: 100%;
            height: 100%;
          }
        }
        @media screen and (max-width: 1047px) {
          .box-container {
            grid-template-columns: repeat(2, 1fr);
            height: 34em;
          }
        }
        @media screen and (max-width: 760px) {
          .box-container {
            grid-template-columns: repeat(1, 1fr);
            height: 54em;
          }
          .text-content {
            width: 100%;
          }
        }
        @media screen and (max-width: 697px) {
          .first-section h3 {
            font-size: 2.5em;
          }
          .first-section p {
            font-size: 1em;
          }
          .second-section {
            width: 60%;
            height: 35em;
          }
          .picture {
            width: 100%;
            height: 100%;
          }
        }
        @media screen and (max-width: 521px) {
          .best-platform-section {
            height: 60em;
          }
          .first-section h3 {
            font-size: 2.5em;
          }
          .first-section p {
            font-size: 1em;
          }
          .second-section {
            width: 60%;
            height: 45em;
          }
          .picture {
            width: 100%;
            height: 100%;
          }
        }
        @media screen and (max-width: 360px) {
          .first-section h3 {
            font-size: 2em;
            line-height: 1.3em;
            margin-bottom: 7%;
          }
        }

        @media screen and (max-width: 312px) {
           .box-container {
            height: 70em;
           }

            #box-1 {
              height: 20em;
            }
            #box-2 {
              height: 20em;
            }
            #box-3 {
              height: 20em;
            }
        }

`