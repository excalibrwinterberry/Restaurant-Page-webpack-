import homePage from "./homePage"
import menuPage from "./menuPage"
import aboutPage from "./aboutPage"

function clearTag(tagName) {
      
    while(tagName.firstChild) {
        tagName.removeChild(tagName.firstChild);
    }
}

const handleHomeEvent = (e) =>{
    console.log('home')
    clearTag(page)
    page.appendChild(homePage())
}

const handleMenuEvent = (e) =>{
    console.log('menu')
    clearTag(page)
    page.appendChild(menuPage())
}

const handleAboutEvent = (e) =>{
    console.log('about')
    clearTag(page)
    page.appendChild(aboutPage())
}

const content = document.getElementById('content')

const page = document.createElement('div')
page.setAttribute('id', 'page')

const tabSwitch = document.createElement('div')
tabSwitch.setAttribute('id', 'tabs')

const homeBtn = document.createElement('button')
homeBtn.textContent = 'Home'

const menuBtn = document.createElement('button')
menuBtn.textContent = 'Menu'

const aboutBtn = document.createElement('button')
aboutBtn.textContent = 'About'

homeBtn.addEventListener('click', handleHomeEvent)
menuBtn.addEventListener('click', handleMenuEvent)
aboutBtn.addEventListener('click', handleAboutEvent)

tabSwitch.appendChild(homeBtn)
tabSwitch.appendChild(menuBtn)
tabSwitch.appendChild(aboutBtn)

content.appendChild(tabSwitch)

page.appendChild(homePage())
content.appendChild(page)