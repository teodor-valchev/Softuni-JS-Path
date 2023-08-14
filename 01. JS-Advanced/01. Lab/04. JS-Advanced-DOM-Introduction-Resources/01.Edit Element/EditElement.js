function editElement(ref, match, replacer) {
  let context = ref.textContent;
  let matcher = new RegExp(match, "g");
  let editer = context.replace(matcher, replacer);
  ref.textContent = editer;
}
