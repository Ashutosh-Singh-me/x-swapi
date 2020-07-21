var mainElement = document.getElementById('output');
document.getElementById('people').addEventListener('click', getInfo.bind(null,'people'));
document.getElementById('planets').addEventListener('click', getInfo.bind(null,'planets'));
document.getElementById('species').addEventListener('click', getInfo.bind(null,'species'));
document.getElementById('vehicles').addEventListener('click', getInfo.bind(null,'vehicles'));
document.getElementById('starships').addEventListener('click', getInfo.bind(null, 'starships'));
document.getElementById('pages').style.display = 'none';

var previous_link =  document.getElementById('previous');
var next_link = document.getElementById('next');
var next = '', prev = '', target_global = '';
var loader = `<div class="text-center">
    <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
    </div>
    </div>`;

previous_link.addEventListener('click', getInfoLink.bind(null, 'previous'));
next_link.addEventListener('click', getInfoLink.bind(null, 'next'));


function getInfo(target) {
    target_global = target;
    let API = "https://swapi.dev/api/"+target+"/";

    document.getElementById('start-text').style.display = 'none';
    document.getElementById('pages').style.display = 'none';
    mainElement.innerHTML = loader;

    fetch(API)
    .then( function(rsp) { 
        console.log(rsp);
        return rsp.json()
    })
    .then( function(data) {
        setData(data, target)
        movement(data.next, data.previous)
    })
}

function getInfoLink(link_name) {

    if (link_name === 'previous')
        API = prev;
    if (link_name === 'next')
        API = next;
        
    document.getElementById('pages').style.display = 'none';
    mainElement.innerHTML = loader;

    fetch('https' + API.slice(4))
    .then( function(rsp) { 
        return rsp.json()
    })
    .then( function(data) {
        setData(data, target_global)
        movement(data.next, data.previous)
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
                <h3 class="card-header">${element.name}${test}</h3>
                    <div class="card-body">
                        <ul type="none" class="list list-side">
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
                <h3 class="card-header">${element.name}</h3>
                    <div class="card-body">
                        <ul type="none" class="list list-side">
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
                <h3 class="card-header">${element.name}</h3>
                    <div class="card-body">
                        <ul type="none" class="list list-side">
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
                <h3 class="card-header">${element.name}</h3>
                    <div class="card-body">
                        <ul type="none" class="list list-side">
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
                <h3 class="card-header">${element.name}</h3>
                    <div class="card-body">
                        <ul type="none" class="list list-side">
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
    
    document.getElementById('pages').style.display = 'flex';
    mainElement.innerHTML = output;
    setEventListener();
}

function getGender(gender) {
    if (gender === 'male')
        return '<span> &#x2642</span>';
    else
    if (gender === 'female')
        return '<span> &#x2640</span>';
    else
    return '<span style="font-weight: 400"> &#x3f</span>';
}

function movement(temp_next, temp_previous) {
    
    next = temp_next;
    prev = temp_previous;   

    if (!temp_next)
        next_link.classList.add('disabled');
    else
        next_link.classList.remove('disabled');

    if (!temp_previous)
        previous_link.classList.add('disabled');
    else
        previous_link.classList.remove('disabled');
}

function setEventListener(){
    var elements = document.getElementsByClassName('card');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', showCurrentModal, false);
    }
}

function showCurrentModal() {
    var card_header = this.getElementsByClassName('card-header');
    var card_body = this.getElementsByClassName('card-body');

    document.getElementById('m-head').innerHTML =  card_header[0].innerHTML  ;
    document.getElementById('m-body').innerHTML = card_body[0].innerHTML;

    $('#myModal').modal('toggle');
}   
