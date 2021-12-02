export default function(htmlstring){
  const template = document.createElement('template');
  template.innerHTML = htmlstring;
  return template.content.firstChild;
}
