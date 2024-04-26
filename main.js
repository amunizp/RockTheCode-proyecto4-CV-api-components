//TODO Enfoque, Requisitos y Entrega
// Para el enfoque os recomendamos crear un pequeño CV, el estilo y la funcionalidad irán a vuestro gusto, aunque os recomendamos que si no se os da muy bien diseñar busquéis un ejemplo en figma e intentéis replicar los estilos sobre todo.
// Este proyecto deberá ir gestionado con VITE y utilizando el sistema de componentes que hemos visto previamente.
//TODO Requisitos
// En cuanto a requisitos para este proyecto tendremos lo siguiente:
// 1️⃣ Responsive / Buena semántica / CSS variables
// 2️⃣ El código dividido en componentes, con su js y su css respectivamente.
// 3️⃣ Mínimo 2 funcionalidades con eventos
// 4️⃣ Pintado de datos utilizando variables (no introducir datos a mano directamente a los elementos que creemos)
// 5️⃣ No crear ningún elemento dentro del body del html que no venga creado ya por defecto en VITE
//TODO Ejemplo de proyecto CV
// En este ejemplo podréis ver una funcionalidad clara que es la del botón que cambia el contenido que estamos viendo en directo con la acción click del usuario y la otra funcionalidad es un secreto que tendréis que averiguar por vosotros mismos, os invitamos a que también pongáis este tipo de "easter eggs" en vuestros proyectos y así será más entretenido mostrárselo a otras personas y que busquen ellas ese pequeño secreto.
// https://vite-cv-kappa.vercel.app/

import './style.css'

import { cvData } from './src/data/cv-data'
import { Card } from './src/components/Card/Card'
import { socials } from './src/components/socials/socials'
import { footer } from './src/components/footer/footer'
import { header } from './src/components/header/header'
import { circle } from './src/components/circle/circle'
import { skills } from './src/components/skills/skills'
import { cronos } from './src/components/cronos/cronos'
header()

const mainElement = document.querySelector('main')
const aboutSection = document.createElement('section')
aboutSection.className = 'RML-LinedPaper'
const aboutArticle = document.createElement('article')
aboutArticle.classList.add('splatter', 'flex-container', 'column')
const h2Heading = document.createElement('h2')
h2Heading.textContent = 'About me'
mainElement.appendChild(aboutSection)
aboutSection.appendChild(aboutArticle)
aboutArticle.appendChild(h2Heading)
circle(aboutArticle, cvData, 2)

skills(aboutArticle, cvData)

const aboutText = document.createElement('article')
const pAboutText = document.createElement('p')
pAboutText.textContent = cvData.aboutMe
aboutText.appendChild(pAboutText)
aboutArticle.appendChild(aboutText)
aboutText.classList.add('side-box', 'stickynote')
const address = document.createElement('address')
aboutArticle.appendChild(address)
address.textContent = cvData.address
const email = document.createElement('a')
email.href = `mailto:amp-cv@c4ad.eu?subject=CV Page Contact &body=Hi Andres, %0D%0A
just saw your page it is awesome! %0D%0A
I was thinking you would be great for ... %0D%0A
[write your amazing offer here]`
email.textContent = 'Contact me'
const headingContact = document.createElement('h3')
headingContact.appendChild(email)
aboutArticle.appendChild(headingContact)

cronos(mainElement, cvData)

const projectSection = document.createElement('section')
mainElement.appendChild(projectSection)
const projectTitle = document.createElement('h2')
projectSection.classList.add('flex-container', 'column')
projectTitle.textContent = 'projects'
projectSection.appendChild(projectTitle)
const projectListElement = document.createElement('ul')
projectListElement.classList.add('flex-container', 'row')
projectSection.appendChild(projectListElement)

cvData.projects.forEach((project) => {
  const itemElement = document.createElement('li')
  projectListElement.appendChild(itemElement)
  Card(
    itemElement,
    project.preview,
    project.title,
    project.description,
    project.link
  )
})
const socialSection = document.createElement('section')
socialSection.classList.add(
  'flex-container',
  'column',

  'cuadricula'
)
mainElement.appendChild(socialSection)
const socialTitle = document.createElement('h2')
socialTitle.textContent = 'socials'
socialSection.appendChild(socialTitle)

socials(
  socialSection,
  'https://fosstodon.org',
  '109252538730886070',
  '@amunizp',
  5
)
//TODO averiguar como poner socials de linkedin.  https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api
//por lo que parece solo puedo importar un perfil? ya cree el perfil de compañia necesaria.

footer()
