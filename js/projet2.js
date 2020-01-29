//appel perso  api
function charger() {
    fetch('https://swapi.co/api/people/')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                for (let i = 0; i < data.results.length; i++) {
                    var divp = document.createElement("div");
                    divp.setAttribute("id", "aligne" + i)
                    divp.innerHTML = " ";
                    var parent = document.getElementById("pokemons");
                    parent.appendChild(divp);
                    var pokemonf = document.createElement("p");
                    pokemonf.innerHTML = data.results[i].name;
                    divp.appendChild(pokemonf);
                    var infof = document.createElement("p");
                    infof.innerHTML = "voir les details";
                    infof.addEventListener("click", function() { infoperso(data.results[i].url) })
                    divp.appendChild(infof);
                }
            }
        )
}

//affiche detail perso
function infoperso(url) {
    var visible = document.getElementById("infos");
    visible.className = "vue"
    fetch(url)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                var parent = document.getElementById("infos");
                parent.innerHTML = " ";

                var nam = document.createElement("h3");
                nam.innerHTML = "name";
                var parent = document.getElementById("infos");
                parent.appendChild(nam);
                var nom = document.createElement("p");
                nom.innerHTML = data.name;
                var parent = document.getElementById("infos");
                parent.appendChild(nom);

                var heigh = document.createElement("h3");
                heigh.innerHTML = "height";
                var parent = document.getElementById("infos");
                parent.appendChild(heigh);
                var hauteur = document.createElement("p");
                hauteur.innerHTML = data.height;
                var parent = document.getElementById("infos");
                parent.appendChild(hauteur);

                var mas = document.createElement("h3");
                mas.innerHTML = "mass";
                var parent = document.getElementById("infos");
                parent.appendChild(mas);
                var ma = document.createElement("p");
                ma.innerHTML = data.mass;
                var parent = document.getElementById("infos");
                parent.appendChild(ma);

                var hai = document.createElement("h3");
                hai.innerHTML = "hair";
                var parent = document.getElementById("infos");
                parent.appendChild(hai);
                var cheveux = document.createElement("p");
                cheveux.innerHTML = data.hair_color;
                var parent = document.getElementById("infos");
                parent.appendChild(cheveux);

                var ski = document.createElement("h3");
                ski.innerHTML = "skin";
                var parent = document.getElementById("infos");
                parent.appendChild(ski);
                var peau = document.createElement("p");
                peau.innerHTML = data.skin_color;
                var parent = document.getElementById("infos");
                parent.appendChild(peau);

                var oeil = document.createElement("h3");
                oeil.innerHTML = "eye";
                var parent = document.getElementById("infos");
                parent.appendChild(oeil);
                var yeux = document.createElement("p");
                yeux.innerHTML = data.eye_color;
                var parent = document.getElementById("infos");
                parent.appendChild(yeux);

                var bir = document.createElement("h3");
                bir.innerHTML = "birth";
                var parent = document.getElementById("infos");
                parent.appendChild(bir);
                var nais = document.createElement("p");
                nais.innerHTML = data.birth_year;
                var parent = document.getElementById("infos");
                parent.appendChild(nais);

                var gen = document.createElement("h3");
                gen.innerHTML = "gender";
                var parent = document.getElementById("infos");
                parent.appendChild(gen);
                var ge = document.createElement("p");
                ge.innerHTML = data.gender;
                var parent = document.getElementById("infos");
                parent.appendChild(ge);
            }
        )
}

//suivant


var page = 1

function suivant() {
    page++
    fetch('https://swapi.co/api/people/page=' + page)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {

                var tab = data;
                // var p = document.getElementById("")
                // p.innerHTML = " "
                var info = document.getElementById("infos")
                info.innerHTML = " "
                var pok = document.getElementById("pokemons")
                pok.innerHTML = " "

                for (let i = 0; i <= 9; i++) {
                    var divp = document.createElement("div");
                    divp.setAttribute("id", "aligne" + i)
                    divp.innerHTML = " ";
                    var parent = document.getElementById("pokemons");
                    parent.appendChild(divp);
                    var pokemonf = document.createElement("p");
                    pokemonf.innerHTML = data.results[i].name;
                    divp.appendChild(pokemonf);
                    var infof = document.createElement("p");
                    infof.innerHTML = "voir les details";
                    infof.addEventListener("click", function() { infoperso(data.results[i].url) })
                    divp.appendChild(infof);
                }
            }
        )
}

//precedent

// var page = 1
// document.getElementById("pre").addEventListener("click", function() { precedent() });

// function precedent() {
//     page--
//     fetch(prev)
//         .then(
//             function(response) {
//                 return response.json();
//             }
//         )
//         .then(
//             function(data) {
//                 nex = data.next
//                 prev = data.previous
//                 for (let i = 0; i <= 9; i++) {
//                     var divp = document.createElement("div");
//                     divp.setAttribute("id", "aligne" + i)
//                     divp.innerHTML = " ";
//                     var parent = document.getElementById("pokemons");
//                     parent.appendChild(divp);
//                     var pokemonf = document.createElement("p");
//                     pokemonf.innerHTML = data.results[i].name;
//                     divp.appendChild(pokemonf);
//                     var infof = document.createElement("p");
//                     infof.innerHTML = "voir les details";
//                     infof.addEventListener("click", function() { infoperso(data.results[i].url) })
//                     divp.appendChild(infof);
//                 }
//             }
//         )
// }




//appel nom planete

function charger1() {
    fetch('https://swapi.co/api/planets/')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                for (let i = 0; i < data.results.length; i++) {
                    var divp = document.createElement("div");
                    divp.setAttribute("id", "aligne" + i)
                    divp.innerHTML = " ";
                    var parent = document.getElementById("pokemons");
                    parent.appendChild(divp);
                    var pokemonf = document.createElement("p");
                    pokemonf.innerHTML = data.results[i].name;
                    divp.appendChild(pokemonf);
                    var infof = document.createElement("p");
                    infof.innerHTML = "voir les details";
                    infof.addEventListener("click", function() { infopersos(data.results[i].url) })
                    divp.appendChild(infof);
                }
            }
        )
}

//detail planete

function infopersos(url) {
    var visible = document.getElementById("infos");
    visible.className = "vue"
    fetch(url)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                var parent = document.getElementById("infos");
                parent.innerHTML = " ";

                var nam = document.createElement("h3");
                nam.innerHTML = "name";
                var parent = document.getElementById("infos");
                parent.appendChild(nam);
                var nom = document.createElement("p");
                nom.innerHTML = data.name;
                var parent = document.getElementById("infos");
                parent.appendChild(nom);

                var heigh = document.createElement("h3");
                heigh.innerHTML = "rotation_period";
                var parent = document.getElementById("infos");
                parent.appendChild(heigh);
                var hauteur = document.createElement("p");
                hauteur.innerHTML = data.rotation_period;
                var parent = document.getElementById("infos");
                parent.appendChild(hauteur);

                var mas = document.createElement("h3");
                mas.innerHTML = "orbital_period";
                var parent = document.getElementById("infos");
                parent.appendChild(mas);
                var ma = document.createElement("p");
                ma.innerHTML = data.orbital_period;
                var parent = document.getElementById("infos");
                parent.appendChild(ma);

                var hai = document.createElement("h3");
                hai.innerHTML = "diameter";
                var parent = document.getElementById("infos");
                parent.appendChild(hai);
                var cheveux = document.createElement("p");
                cheveux.innerHTML = data.diameter;
                var parent = document.getElementById("infos");
                parent.appendChild(cheveux);

                var ski = document.createElement("h3");
                ski.innerHTML = "climate";
                var parent = document.getElementById("infos");
                parent.appendChild(ski);
                var peau = document.createElement("p");
                peau.innerHTML = data.climate;
                var parent = document.getElementById("infos");
                parent.appendChild(peau);

                var oeil = document.createElement("h3");
                oeil.innerHTML = "gravity";
                var parent = document.getElementById("infos");
                parent.appendChild(oeil);
                var yeux = document.createElement("p");
                yeux.innerHTML = data.gravity;
                var parent = document.getElementById("infos");
                parent.appendChild(yeux);

                var bir = document.createElement("h3");
                bir.innerHTML = "terrain";
                var parent = document.getElementById("infos");
                parent.appendChild(bir);
                var nais = document.createElement("p");
                nais.innerHTML = data.terrain;
                var parent = document.getElementById("infos");
                parent.appendChild(nais);

                var gen = document.createElement("h3");
                gen.innerHTML = "surface";
                var parent = document.getElementById("infos");
                parent.appendChild(gen);
                var ge = document.createElement("p");
                ge.innerHTML = data.surface_water;
                var parent = document.getElementById("infos");
                parent.appendChild(ge);

                var pop = document.createElement("h3");
                pop.innerHTML = "popuation";
                var parent = document.getElementById("infos");
                parent.appendChild(pop);
                var po = document.createElement("p");
                po.innerHTML = data.population;
                var parent = document.getElementById("infos");
                parent.appendChild(po);

                // for (let i = 0; i < data.results.residents; i++) {


                var res = document.createElement("h3");
                res.innerHTML = "residents";
                var parent = document.getElementById("infos");
                parent.appendChild(res);
                var re = document.createElement("p");
                re.innerHTML = data.residents;
                var parent = document.getElementById("infos");
                parent.appendChild(re);
                // }
            }
        )
}

//Pour la recherche

// function recherche() {
//     fetch('https://swapi.co/api/people/' + inp)
//         .then(
//             function(response) {
//                 return response.json()
//             }
//         )
//         .then(
//             function(name) {

//                 for (let i = 0; i < name.results.length; i++) {
//                     var liste = document.createElement("p");

//                     var sect = document.getElementById("sect");

//                     sect.insertBefore(liste, sect.firstChild);

//                     liste.innerHTML = name.results[i].name;

//                 }
//             }

//             sect.innerHTML = " ";
//             var inp = document.getElementById("input").value;
//         )
// }