const API = `http://star-cors.herokuapp.com`;
const endpoints = ['people', 'films', 'vehicles', 'starships'];
const urls = endpoints.map( endpoint => {
  return `${API}/${endpoint}`;
});
const promises = urls.map( url => {
  return fetch(url)
    .then( response => response.json())
});

const renderPeople = (people)=> {
  const div = document.querySelector('#people');
  let html = people.results.map( person => {
    return `
      <li>
        ${ person.name }
      </li>
    `;
  }).join('');
  html = `<h2>People</h2><ul>${html}</ul>`;
  div.innerHTML = html;
};

const renderFilms = (films)=> {
  const div = document.querySelector('#films');
  let html = films.results.map( film => {
    return `
      <li>
        ${ film.title }
      </li>
    `;
  }).join('');
  html = `<h2>Films</h2><ul>${html}</ul>`;
  div.innerHTML = html;

};

const renderVehicles = (vehicles)=> {
  const div = document.querySelector('#vehicles');
  let html = vehicles.results.map( vehicle => {
    return `
      <li>
        ${ vehicle.name }
      </li>
    `;
  }).join('');
  html = `<h2>Vehicles</h2><ul>${html}</ul>`;
  div.innerHTML = html;
};

const renderStarships = (starships)=> {
  const div = document.querySelector('#starships');
  let html = starships.results.map( starship => {
    return `
      <li>
        ${ starship.name }
      </li>
    `;
  }).join('');
  html = `<h2>Starships</h2><ul>${html}</ul>`;
  div.innerHTML = html;

};

Promise.all(promises)
  .then( result => {
    const [ people, films, vehicles, starships ] = result;
    renderPeople(people);
    renderFilms(films);
    renderVehicles(vehicles);
    renderStarships(starships);
  });
