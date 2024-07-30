const wordPosition = 2; // Change this number to target a different word position

// Function to highlight the nth word in a text node and add <br> tag after it
function highlightNthWordInText(text, position) {
  const words = text.split(/\s+/);
  if (words.length >= position) {
    words[position] = `<span class="highlight">${words[position]}</span><br>`;
  }
  return words.join(" ");
}

// Function to recursively highlight words in the element's child nodes
function highlightNthWordInElement(element, position) {
  element.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      const newText = highlightNthWordInText(child.textContent, position);
      const newElement = document.createElement("span");
      newElement.innerHTML = newText;
      child.replaceWith(...newElement.childNodes);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      highlightNthWordInElement(child, position);
    }
  });
}

// Fetching the h1 element
const header = document.querySelector(".home-hero__content__header");

// Highlighting the nth word in the header element
highlightNthWordInElement(header, wordPosition);

// If the nth word position comes from the backend, you can fetch it as follows:
/*
  fetch('/api/word-position') // Replace with your actual API endpoint
  .then(response => response.json())
  .then(data => {
      const wordPosition = data.wordPosition;
      highlightNthWordInElement(header, wordPosition);
  })
  .catch(error => console.error('Error fetching word position:', error));
  */
