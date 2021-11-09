import homePage from "./homePage"
import menuPage from "./menuPage"
import aboutPage from "./aboutPage"
import './style.css'

const clearTag = tagName =>{
      
    while(tagName.firstChild) {
        tagName.removeChild(tagName.firstChild);
    }
}

const handleHomeEvent = (e) =>{

    clearTag(page)
    page.appendChild(homePage())
}

const handleMenuEvent = (e) =>{

    clearTag(page)
    page.appendChild(menuPage())
}

const handleAboutEvent = (e) =>{

    clearTag(page)
    page.appendChild(aboutPage())
}

const RestarantPage = (() =>{
    const content = document.getElementById('content')

    const page = document.createElement('div')
    page.setAttribute('id', 'page')

    const tabSwitch = document.createElement('div')
    tabSwitch.classList.add('tabs')

    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'Home'

    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'Menu'

    const aboutBtn = document.createElement('button')
    aboutBtn.textContent = 'About'

    const initialLoad = () =>{
        //adding event listeners
        //adding children to respective parent nodes


        homeBtn.addEventListener('click', handleHomeEvent)
        menuBtn.addEventListener('click', handleMenuEvent)
        aboutBtn.addEventListener('click', handleAboutEvent)


        tabSwitch.appendChild(homeBtn)
        tabSwitch.appendChild(menuBtn)
        tabSwitch.appendChild(aboutBtn)

        content.appendChild(tabSwitch)

        page.appendChild(homePage())
        content.appendChild(page)
    }

    return {initialLoad}
})()

RestarantPage.initialLoad()
