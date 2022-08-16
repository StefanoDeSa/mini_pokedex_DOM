cod = 0
function buscarPokemon(){
    const pokemon_input = document.getElementById('pokemon').value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon_input
    let card_pokemon = document.getElementById('card_pokemon')
    document.getElementById('pokemon').value='';
    fetch(url)
    .then(function(response){
        response.json().then(pokemon => {
            let card = document.createElement("div")
            let img = document.createElement("img")
            let card_body = document.createElement("div")
            let card_text = document.createElement("p")
            let shiny_button = document.createElement("button")

            if(cod != 0){
                card_pokemon.innerHTML = ''
                shiny_div.innerHTML = ''
   
            }

            card.className = "card borda_pesquisa"
            card.style = "width: 18rem;"

            img.className = "card-img-top"
            img.src = pokemon.sprites.other['official-artwork'].front_default

            card_body.className = "card-body"
            card_text.className = "card-text"
            
            card_text.innerText = `Nome: ${pokemon.name}\n Id: ${pokemon.id}\n Altura: ${pokemon.height}\n Peso: ${pokemon.weight}`

            shiny_button.className = "btn btn-light"
            shiny_button.type = "button"
            shiny_button.innerText = "Shiny"
            shiny_button.setAttribute("onclick", "mudarShiny()")

            card_body.appendChild(card_text)
            card.appendChild(img)
            card.appendChild(card_body)
            card_pokemon.appendChild(card)
            shiny_div.appendChild(shiny_button)
            cod = 1
        })
    })
}
function buscarPokemon_lista(url){
    let card_pokemon = document.getElementById('card_pokemon')
    let shiny_div = document.getElementById('shiny_div')
    document.getElementById('pokemon').value='';
    fetch(url)
    .then(function(response){
        response.json().then(pokemon => {
            let card = document.createElement("div")
            let img = document.createElement("img")
            let card_body = document.createElement("div")
            let card_text = document.createElement("p")
            let shiny_button = document.createElement("button")

            if(cod != 0){
                card_pokemon.innerHTML = ''
                shiny_div.innerHTML = ''
   
            }

            card.className = "card borda_pesquisa"
            card.style = "width: 18rem;"

            img.className = "card-img-top"
            img.src = pokemon.sprites.other['official-artwork'].front_default

            card_body.className = "card-body"
            card_text.className = "card-text"
            
            card_text.innerText = `Nome: ${pokemon.name}\n Id: ${pokemon.id}\n Altura: ${pokemon.height}\n Peso: ${pokemon.weight}`

            shiny_button.className = "btn btn-light"
            shiny_button.type = "button"
            shiny_button.innerText = "Shiny"
            shiny_button.setAttribute("onclick", "mudarShiny()")

            card_body.appendChild(card_text)
            card.appendChild(img)
            card.appendChild(card_body)
            card_pokemon.appendChild(card)
            shiny_div.appendChild(shiny_button)
            cod = 1
        })
    })
}

function listaPokemon(){
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset="+Math.floor(Math.random() * 1145)
    let lista_pokemon = document.getElementById('lista_pokemon')
    fetch(url).then(function(response){
        response.json().then(lista => {
            if(cod != 0){
                lista_pokemon.innerHTML = ''
   
            }
            let ul = document.createElement("ul")
            ul.className = "list-group"
            for(pokemon in lista['results']){
                let li = document.createElement("li")
                let a = document.createElement("a")
                let url = lista['results'][pokemon].url
                li.className = "list-group-item"
                a.setAttribute("onclick", `buscarPokemon_lista("${url}")`)  
                a.innerText = `Nome ${Number(pokemon)+1}: ${lista['results'][pokemon].name}`

                li.appendChild(a)
                ul.appendChild(li)     
            }
            lista_pokemon.appendChild(ul)
            cod = 1
        })
    })
}
let is_shiny = "n"
function mudarShiny(){
    let card_pokemon = document.getElementsByClassName("card-img-top")
    if(card_pokemon[0].src.includes("other") || is_shiny == "n"){
        url_slice = card_pokemon[0].src.split("other/official-artwork/")
        url = url_slice[0]+"shiny/"+url_slice[1]  
        card_pokemon[0].src = url
        is_shiny = "y"
    }
    else{
        alert("Pokemon já se encontra na versão shiny")
    }
    
}