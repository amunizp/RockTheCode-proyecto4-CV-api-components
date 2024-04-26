import './circle.css'
export function circle(aboutArticle, cvData, cycles) {
  //the parent

  const circleElement = document.createElement('div')
  circleElement.className = 'circle'
  const aboutImage = document.createElement('img')
  aboutImage.src = cvData.avatar
  aboutArticle.appendChild(circleElement)
  circleElement.appendChild(aboutImage)
  circleElement.style.clipPath = 'circle(30% at 50% 50%)'

  let isTransitioning = false
  let positions = [
    'circle(15% at 0% 50%)',
    'circle(15% at 100% 50%)',
    'circle(15% at 82% 25%)',
    'circle(15% at 63% 33%)',
    'circle(15% at 63% 33%)',
    'circle(50% at 50% 50%)',
    'circle(30% at 50% 50%)'
  ]
  circleElement.style.transition = 'clip-path 1s' // Set transition duration to 1 second
  aboutImage.addEventListener('click', async () => {
    if (isTransitioning) {
      // If currently transitioning, cancel the transition
      isTransitioning = false
      console.log('Stopped transitioning')
      return
    }
    console.log('Click on image to stop transition')
    isTransitioning = true
    let index = 0
    const LIMIT = positions.length * cycles // Go through the list twice

    async function transitionClipPath() {
      if (index >= LIMIT || isTransitioning === false) {
        isTransitioning = false
        return
      }

      const position = positions[index % positions.length]
      circleElement.style.clipPath = position
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Delay for 1000ms

      index++
      transitionClipPath()
    }

    transitionClipPath()
  })
}
