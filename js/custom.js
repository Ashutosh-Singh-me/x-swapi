var mainElement = document.getElementById('output');
document.getElementById('people').addEventListener('click', getInfo.bind(null,'people'));
document.getElementById('planets').addEventListener('click', getInfo.bind(null,'planets'));
document.getElementById('species').addEventListener('click', getInfo.bind(null,'species'));
document.getElementById('vehicles').addEventListener('click', getInfo.bind(null,'vehicles'));
document.getElementById('starships').addEventListener('click', getInfo.bind(null, 'starships'));

function getInfo(target) {
    const API = "http://swapi.dev/api/"+target+"/";
    fetch(API)
    .then( function(rsp) { 
        return rsp.json()
    })
    .then( function(data) {
        setData(data, target)
    })
}

function setData(data, c) {
    let output = '', test = ' ?';
    if (c === 'people'){
        output = '';
        data.results.forEach(element => {
            test = getGender(element.gender);
            let temp = `<div class="col-lg-6 colour">
            <div class="card">
                <h5 class="card-header">${element.name}${test}</h5>
                    <div class="card-body">
                        <ul type="none" class="list list list-side">
                            <li>Birth Year : </li>
                            <li>Eye Colour : </li>
                            <li>Skin Colour : </li>
                            <li>Hair Colour : </li>
                            <li>Height : </li>
                            <li>Mass : </li>
                        </ul>
                        <ul type="none" class="list">
                            <li>${element.birth_year}</li>
                            <li>${element.eye_color}</li>
                            <li>${element.skin_color}</li>
                            <li>${element.hair_color}</li>
                            <li>${element.height}</li>
                            <li>${element.mass}</li>
                        </ul>
                    </div>
            </div>
        </div>        
            `;
            output += temp;
        });
    }

    if (c === 'planets') {
        output = '';
        data.results.forEach(element => {
            let temp = `<div class="col-lg-6 colour">
            <div class="card">
                <h5 class="card-header">${element.name}</h5>
                    <div class="card-body">
                        <ul type="none" class="list list list-side">
                            <li>Climate : </li>
                            <li>Diameter : </li>
                            <li>Gravity : </li>
                            <li>Orbital Period : </li>
                            <li>Population : </li>
                            <li>Rotation Period : </li>
                            <li>Surface Water : </li>
                            <li>Terrain : </li>
                        </ul>
                        <ul type="none" class="list">
                            <li>${element.climate}</li>
                            <li>${element.diameter}</li>
                            <li>${element.gravity}</li>
                            <li>${element.orbital_period}</li>
                            <li>${element.population}</li>
                            <li>${element.rotation_period}</li>
                            <li>${element.surface_water}</li>
                            <li>${element.terrain}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
        output += temp;

        });
    }
    
    if (c == 'species') {
        output = '';
        data.results.forEach(element => {
            let temp = `<div class="col-lg-6 colour">
            <div class="card">
                <h5 class="card-header">${element.name}</h5>
                    <div class="card-body">
                        <ul type="none" class="list list list-side">
                            <li>Classification : </li>
                            <li>Language : </li>
                            <li>Skin Colour : </li>
                            <li>Eye Colour : </li>
                            <li>Hair Colour : </li>
                            <li>Designation : </li>
                            <li>Lifespan : </li>
                            <li>Height : </li>
                        </ul>
                        <ul type="none" class="list">
                            <li>${element.classification}</li>
                            <li>${element.language}</li>
                            <li>${element.skin_colors}</li>
                            <li>${element.eye_colors}</li>
                            <li>${element.hair_colors}</li>
                            <li>${element.designation}</li>
                            <li>${element.average_lifespan}</li>
                            <li>${element.average_height}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
        output += temp;

        });
    }

    if (c == 'vehicles') {
        output = '';
        data.results.forEach(element => {
            let temp = `<div class="col-lg-6 colour">
            <div class="card">
                <h5 class="card-header">${element.name}</h5>
                    <div class="card-body">
                        <ul type="none" class="list list list-side">
                            <li>Model : </li>
                            <li>Class : </li>
                            <li>Cost : </li>
                            <li>Length : </li>
                            <li>Speed : </li>
                            <li>Crew : </li>
                            <li>Passengers : </li>
                            <li>Consumables : </li>
                        </ul>
                        <ul type="none" class="list">
                            <li>${element.model}</li>
                            <li>${element.vehicle_class}</li>
                            <li>${element.cost_in_credits}</li>
                            <li>${element.length}</li>
                            <li>${element.max_atmosphering_speed}</li>
                            <li>${element.crew}</li>
                            <li>${element.passengers}</li>
                            <li>${element.consumables}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
        output += temp;

        });
    }

    if (c == 'starships') {
        output = '';
        data.results.forEach(element => {
            let temp = `<div class="col-lg-6 colour">
            <div class="card">
                <h5 class="card-header">${element.name}</h5>
                    <div class="card-body">
                        <ul type="none" class="list list list-side">
                            <li>Model : </li>
                            <li>Class : </li>
                            <li>Cost : </li>
                            <li>Length : </li>
                            <li>Speed : </li>
                            <li>Crew : </li>
                            <li>Passengers : </li>
                            <li>Consumables : </li>
                        </ul>
                        <ul type="none" class="list">
                            <li>${element.model}</li>
                            <li>${element.starship_class}</li>
                            <li>${element.cost_in_credits}</li>
                            <li>${element.length}</li>
                            <li>${element.max_atmosphering_speed}</li>
                            <li>${element.crew}</li>
                            <li>${element.passengers}</li>
                            <li>${element.consumables}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
        output += temp;

        });
    }

    mainElement.innerHTML = output;
}

function getGender(gender) {
    if (gender === 'male')
        return '<span> &#x2642</span>';//' &#x2642';
    else
    if (gender === 'female')
        return '<span> &#x2640</span>';//' &#x2640';
    else
    return '<span style="font-weight: 400"> &#x3f</span>'//' &#x3f';
}