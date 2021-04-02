import styled from 'styled-components';

export const HeaderComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 10rem;
    width: 10rem;
  }

  h1 {
    font: 900 2.2rem Lato;
    color: white;
    padding-top: 2.2rem;
  }

  h2 {
    font: 400 1rem Cutive Mono;
    color: white;
    width: 21.2rem
  }
  

  h1 + h2 {
    padding-top: 1.2rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 16rem 1fr;
    grid-template-rows: 8rem 8rem;
    grid-template-areas:
    "logo title"
    "logo subtitle";

    img {
    grid-area: logo;
    height: 13.8rem;
    width: 13.8rem;
    }

    h1 {
    grid-area: title;
    font: 900 4rem Lato;
    color: white;
    padding: 0;
    align-self: end;
    }

    h2 {
    grid-area: subtitle;
    font: 400 2rem Cutive Mono;
    color: white;
    width: 42rem;
    align-self: start;
    }
  }
`
