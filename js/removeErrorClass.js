function removeErrorClass(element) {
  element.classList.remove('error');
  element.nextElementSibling.classList.add('hidden');
}

module.exports = removeErrorClass;