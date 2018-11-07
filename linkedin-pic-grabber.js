var pic = document.querySelectorAll("div[class='pv-top-card-section__photo presence-entity__image EntityPhoto-circle-9 ember-view']");
var baseURL = pic[0].style.backgroundImage;
url = baseURL.replace("url(\"", "");
url = url.replace("\")", "");
console.log(url);
window.location.replace(url);
