import styled from 'styled-components'

export const Card = styled.div`
  width: 100vw;
  padding: 4rem;
  background-color: #AA3F1A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font: 900 1.5rem Lato;
    color: #FC8129;
    text-align: center;
  }

  h4 {
    font: 900 1.2rem Lato;
    color: white;
    padding-top: 0.8rem;
  }

  h5 {
    font: 400 1.1rem Roboto;
    color: white;
    padding-bottom: 0.4rem;
  }

  p {
    font: 400 1.1rem Cutive Mono;
    color: white;
    padding-bottom: 1.2rem;
    padding-top: 1.6rem;
    text-align: center;
  }


  button { 
    width: 21.3rem;
    height: 2.3rem;
    background-color:#FC8129;
    text-align: center;
    text-decoration: none;
    border: 0;
    transition: background-color 1s; 
    margin-top: 0.4rem;

    a {
      font: 400 1.1rem Roboto;
      padding-top: 0.6rem;
      color: #79290E;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  button:hover {
    cursor: pointer;
    background-color: #D65900;
  }

  button:focus {
    outline: none;
  }

  div.donations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
    font: 900 2.5rem Lato;
    text-align: center;
    }

    h4 {
      font: 900 2.2rem Lato;
      text-align: center;
    }

    h5 {
      font: 400 1.8rem Roboto;
      text-align: center;
    }

    p {
      font: 400 2rem Cutive Mono;
      text-align: center;
    }

    button { 
    width: 30rem;
    height: 3rem;
    
    a {
      font: 400 1.8rem Roboto;
    }
  } 

  @media (min-width: 1300px) {
  display: grid;
  grid-template-columns: 64rem 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "description donations socials"; 
  
    
  h3 {
    font: 900 2.5rem Lato;
    text-align: start;
  }

  h4 {
    font: 900 2.2rem Lato;
    text-align: center;
  }

  h5 {
    font: 400 1.8rem Roboto;
    text-align: center;

  }

  p {
    font: 400 2rem Cutive Mono;
    text-align: start;
  }

  button { 
  width: 30rem;
  height: 3rem;

  a {
    font: 400 1.8rem Roboto;
  }

  div.description {
    width: 63.5rem;
    grid-area: description;
  }
  div.donations {
    grid-area: donations;
    max-width: 27.4rem;
  }
  div.socials {
    grid-area: socials;
  }}

  @media (min-width: 2000px) {
  display: grid;
  grid-template-columns: 90rem 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "description donations socials"; 
 }

}}
`