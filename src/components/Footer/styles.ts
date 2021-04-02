import styled from 'styled-components';

export const FooterComponents =  styled.div`
  padding: 4rem 7.4rem 4rem 7.4rem;
  text-align: center;

  p {
    font: 500 1.2rem Spectral;
    color: white;
    width: 21.7rem;
  }

  p:first-child {
    padding-bottom: 1.6rem;
  }

  p:nth-child(2) {
    padding-bottom: 0.4rem;
  }

  a {
    font: 500 1.1rem Lato;
    color: #FC8129;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    p {
    font: 500 2rem Spectral;
    width: 55.9rem;
   }
    a {
      font: 500 1.8rem Lato;
      color: #FC8129;
      cursor: pointer;
    }

  }
`