const urlParams = new URLSearchParams(window.location.search)
const urlNoticia = urlParams.get('id');
document.querySelector('#LerMais').href = urlNoticia;

fetch("https://newsapi.org/v2/everything?q=brasil&from=2025-10-27&sortBy=publishedAt&apiKey=366a4893cc3440b486f45b01e7fe90a5").then(response => response.json()).then(data => {
    const noticiaUrl= urlNoticia;
    const artigo= data.articles.find((article) => article.url === noticiaUrl);
    document.querySelector("#titulo").innerHTML=artigo.title;
    document.querySelector("#autor").innerHTML=artigo.author;
    document.querySelector("#imagem").src=artigo.urlToImage;
    document.querySelector("#conteudo").innerHTML=artigo.description;

}
)