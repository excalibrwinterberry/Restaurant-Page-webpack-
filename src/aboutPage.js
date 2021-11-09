export default function aboutPage(){
    //div container with id about
    const parentTag = document.createElement('div')
    parentTag.setAttribute('id', 'about')
    parentTag.classList.add('restPage')

    //header
    const header = document.createElement('header')
    header.classList.add('title')
    header.textContent = "About My Restaurant"

    parentTag.appendChild(header)
    return parentTag
}