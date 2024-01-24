function editElement(element, math, replacer) {
  let shallow = element.textContent;
  element.textContent = shallow.split(math).join(replacer);
}
