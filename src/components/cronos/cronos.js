export function cronos(mainElement, cvData) {
  const cronoSection = document.createElement('section')
  mainElement.appendChild(cronoSection)
  cronoSection.classList.add('flex-container', 'column', 'pagebreak')

  const educationBotton = document.createElement('button')
  educationBotton.textContent = 'EDUCATION'

  cronoSection.appendChild(educationBotton)
  const educationElement = document.createElement('article')
  educationBotton.addEventListener('click', () => {
    if (document.getElementById('all_education')) {
      educationElement.remove()
      return
    }
    // TODO que se esconda un boton pero que aparezca el otro ################
    // if (educationBotton) {
    //   educationBotton.remove()
    // }

    educationElement.classList.add(
      'flex-container',
      'column',
      'widescreen',
      'cuadricula'
    )
    educationElement.innerHTML = ''
    educationElement.id = 'all_education'
    educationBotton.insertAdjacentElement('afterend', educationElement)
    cvData.education.forEach((school) => {
      const schoolName = document.createElement('h3')
      schoolName.textContent = school.degree
      educationElement.appendChild(schoolName)
      const educationProvider = document.createElement('p')
      educationProvider.textContent = ` ${school.university}`

      const schoolYear = document.createElement('p')
      schoolYear.textContent = `Finishing Year: ${school.graduationYear}`

      const honorElement = document.createElement('p')
      honorElement.textContent = `${school.honors}`

      const courses = document.createElement('p')
      courses.textContent = `${school.relevantCourses.join(', ')}`
      educationElement.appendChild(educationProvider)
      educationElement.appendChild(schoolYear)
      educationElement.appendChild(honorElement)
      educationElement.appendChild(courses)
    })
  })

  const experienceBotton = document.createElement('button')
  experienceBotton.textContent = 'EXPERIENCE'

  cronoSection.appendChild(experienceBotton)
  const experienceElement = document.createElement('article')
  experienceBotton.addEventListener('click', () => {
    if (document.getElementById('all_experience')) {
      experienceElement.remove()

      return
    }
    // ################
    experienceElement.classList.add(
      'flex-container',
      'column',
      'widescreen',
      'cuadricula'
    )
    experienceElement.innerHTML = ''
    experienceElement.id = 'all_experience'
    experienceBotton.insertAdjacentElement('afterend', experienceElement)
    cvData.workExperience.forEach((job) => {
      const jobName = document.createElement('h3')
      jobName.textContent = job.position

      const companyElement = document.createElement('p')
      companyElement.textContent = ` ${job.company}`

      const companyYearElement = document.createElement('p')
      companyYearElement.textContent = `${job.startDate} to ${job.endDate} `

      const jobDescriptionElement = document.createElement('p')
      jobDescriptionElement.textContent = `${job.description}`

      experienceElement.appendChild(jobName)
      experienceElement.appendChild(companyElement)
      experienceElement.appendChild(companyYearElement)
      experienceElement.appendChild(jobDescriptionElement)
    })
  })
}
