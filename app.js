const API = `http://star-cors.herokuapp.com`;
const endpoints = ['people', 'films', 'vehicles', 'starships'];
const urls = endpoints.map( endpoint => {
  return `${API}/${endpoint}`;
});
const promises = urls.map( url => {
  return fetch(url)
    .then( response => response.json())
});

const renderData = (endpoint, data, itemRenderer)=> {
  const div = document.querySelector(`#${ endpoint }`);
  let html = data.results.map( item => {
    return `
      <li>
        ${ itemRenderer( item )}
      </li>
    `;
  }).join('');
  html = `<h2>${endpoint}</h2><input /><ul>${html}</ul>`;
  div.innerHTML = html;
  const input = div.querySelector('input');
  input.addEventListener('keyup', (ev) => {
    const search = ev.target.value;
    const ul = div.querySelector(i'l)
  }
};

const renderPeople = (people)=> {
  renderData(
    'people',
    people,
    function(person){
      return `
          The name is: ${ person.name }
          <br />
          Has appeared in ${ person.films.length } films.
      `;
    }
  );
};

const renderFilms = (films)=> {
  renderData(
    'films',
    films,
    (film)=> {
      return `
        <b>${ film.title }</b>
        <br />
        Released On ${ ['Su', 'Mo', 'Tues', 'Wed', 'Thurs', 'Friday', 'Sat'][((new Date(film.release_date)).getDay())] } ${ film.release_date}
      `;
    }
  );
};

const renderVehicles = (vehicles)=> {
  renderData(
    'vehicles',
    vehicles,
    (vehicle)=> {
      return `
        ${ vehicle.name }
        <br />
        ${ vehicle.manufacturer }
      `;
    }
  );
};

const renderStarships = (starships)=> {
  renderData(
    'starships',
    starships,
    (starship)=> {
      return `
        ${ starship.name }
        <br />
        ${ starship.manufacturer }
      `;
    }
  );
};

Promise.all(promises)
  .then( result => {
    const [ people, films, vehicles, starships ] = result;
    renderPeople(people);
    renderFilms(films);
    renderVehicles(vehicles);
    renderStarships(starships);
  });

  function filterFunc (){

  }
