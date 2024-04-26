//! https://stackoverflow.com/a/31773876/23263154
export function writer(txt, speed, element, endtxt) {
  var soFar = ''
  var visibleSpan = document.createElement('span')
  visibleSpan.className = 'visible'
  visibleSpan.textContent = soFar
  var invisibleSpan = document.createElement('span')
  invisibleSpan.className = 'invisible'
  invisibleSpan.textContent = txt
  element.appendChild(visibleSpan)
  element.appendChild(invisibleSpan)

  var t = setInterval(function () {
    ;(soFar += txt.substr(0, 1)), (txt = txt.substr(1))

    visibleSpan.innerHTML = soFar
    invisibleSpan.innerHTML = txt

    if (txt.length === 0) {
      //
      clearInterval(t)
      // Output a different text after the interval is finished
      setTimeout(function () {
        // Change the text content of visibleSpan and invisibleSpan to the new text
        visibleSpan.classList.toggle('visible')
        visibleSpan.innerHTML = endtxt
        invisibleSpan.innerHTML = ''
      }, speed * 2) // Adjust the delay as needed
    }
  }, speed)
  //element.textContent = endtxt
}
