const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:  [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker        //ou {icon: icon}

L
.marker([lat, lng], {icon})
.addTo(map)

//image gallery   UM MONTE DE PROBLEMA
function selectImage(event) {
    // button = event(clique).currentTarget(botão que fou clicado)
    const button = event.currentTarget

    //remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
                 //pesquisar arrow function
    buttons.forEach(removeActiveClass)
    console.log(button.children);
    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    console.log(imageContainer);
    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para esse botão
    button.classList.add('active')
}
