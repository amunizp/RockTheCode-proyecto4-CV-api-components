export function skills(aboutArticle, cvData) {
  const skillElement = document.createElement('div')
  skillElement.classList.add('flex-container', 'row')
  aboutArticle.appendChild(skillElement)

  for (const skill in cvData.skills) {
    var skillBotton = document.createElement('button')
    skillBotton.textContent = skill
    skillElement.appendChild(skillBotton)
    var subskillsElement = document.createElement('div')
    skillBotton.addEventListener('click', () => {
      if (document.getElementById(skill)) {
        subskillsElement.remove()
        return
      }
      const subskills = cvData.skills[skill]
      // ################
      subskillsElement.classList.add('flex-container', 'row', 'widescreen')
      subskillsElement.innerHTML = ''
      skillElement.insertAdjacentElement('afterend', subskillsElement)
      // ################

      subskillsElement.id = skill

      subskills.forEach((subskill) => {
        var subskillElement = document.createElement('aside')
        subskillElement.textContent = subskill
        subskillsElement.appendChild(subskillElement)
      })
    })
  }
  var allskillBotton = document.createElement('button')
  allskillBotton.textContent = 'all skills'

  skillElement.appendChild(allskillBotton)
  allskillBotton.addEventListener('click', () => {
    if (document.getElementById('all_skills')) {
      subskillsElement.remove()
      return
    }
    //TODO mucho rollo hacer solo estas 3 líneas una funcion? ################
    subskillsElement.classList.add('flex-container', 'row', 'widescreen')
    subskillsElement.innerHTML = ''
    skillElement.insertAdjacentElement('afterend', subskillsElement)
    // ################

    subskillsElement.id = 'all_skills'
    for (const skill in cvData.skills) {
      if (Object.hasOwnProperty.call(cvData.skills, skill)) {
        const subskills = cvData.skills[skill]
        subskills.forEach((subskill) => {
          var subskillElement = document.createElement('aside')
          subskillElement.textContent = subskill
          subskillsElement.appendChild(subskillElement)
        })
      }
    }
  })
}
