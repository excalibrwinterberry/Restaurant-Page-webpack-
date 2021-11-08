import Background from './background.jpeg'

function homePage(){
    //div container with id home
    const parentTag = document.createElement('div')
    parentTag.setAttribute('id', 'home')

    //header
    const header = document.createElement('h1')
    header.textContent = "Welcome to My restaurant"

    //image
    const restaurantImg = new Image()
    restaurantImg.src = Background

    //greeting
    const greet = document.createElement('p')
    greet.textContent = "You have entered one of the most finest places to enjoy your evening"

    //adding all the elements to parentTag
    parentTag.appendChild(header)
    parentTag.appendChild(restaurantImg)
    parentTag.appendChild(greet)
    return parentTag
}

export default homePage