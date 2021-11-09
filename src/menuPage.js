export default function menuPage(){
    //div container with id menu
    const parentTag = document.createElement('div')
    parentTag.setAttribute('id', 'menu')
    parentTag.classList.add('restPage')

    //header
    const header = document.createElement('header')
    header.classList.add('title')
    header.textContent = "Menu of My Restaurant"


    parentTag.appendChild(header)
    return parentTag

}

