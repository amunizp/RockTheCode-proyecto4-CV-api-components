import './header.css'
import { writer } from '../writer'
export function header() {
  const headerElement = document.querySelector('header')
  headerElement.classList.add('flex-container', 'row')
  const nameElement = document.createElement('h1')
  headerElement.appendChild(nameElement)

  nameElement.textContent = 'Andrés Muñiz Piniella'
  nameElement.addEventListener('mouseover', async () => {
    var headerText = `Help me I am inside an easter egg!`
    var headerTextEnd = 'Andrés Muñiz Piniella'
    nameElement.innerText = ''
    writer(headerText, 50, nameElement, headerTextEnd)
    // nameElement.innerText = ''
    // writer(headerTextEnd, 50, nameElement)
    //nameElement.textContent = 'Andrés Muñiz Piniella'
  })
}
