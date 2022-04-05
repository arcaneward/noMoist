replaceText(document.body)
// recursive function that loops through every element until it finds the word "moist"
function replaceText(element) {
  // loops through child nodes & calls replaceText function for each child node
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  // if there are no children, check if in a text node
  } else if (element.nodeType === Text.TEXT_NODE) {
    // modify text in node
    if (element.textContent.match(/moist/gi)) {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(moist)/gi,
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }
  }
}
