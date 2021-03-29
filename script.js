const images = document.getElementsByClassName("image");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", action, false);
}
function action(ev) {
  console.log(ev.target.alt);

  const articles = document.getElementsByTagName("article");
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.remove("article-active");
  }

  const articleId = ev.target.alt;
  const article = document.getElementById(articleId);
  console.log({ article });
  article.classList.add("article-active");
}
