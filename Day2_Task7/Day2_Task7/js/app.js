function toggleVisibility() {
  var paragraph = document.getElementById('myParagraph');
  var button = document.querySelector('button');

  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    button.innerText = 'Hide';
  } else {
    paragraph.style.display = 'none';
    button.innerText = 'Show';
  }
}
