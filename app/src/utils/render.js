import { fetchData } from "./utlis.js";

export const characters = async() => {
  const { results } = await fetchData('https://swapi.dev/api/people/')

  results.forEach(({name}) => {
    const eachCharacterDiv = document.querySelector('.eachCharacter');
    const characterInfo = `
    <h3 class='names'>${name}</h3>
    `;
    eachCharacterDiv.innerHTML += characterInfo;
  });
}