 const data = new Date();
 const ano = String(data.getFullYear());
 const mes = String(data.getMonth()+1).padStart(2,'0');
 const dia = String(data.getDate()-1).padStart(2,'0');
 const diaAnterior = ano+'-'+mes+'-'+dia;
 
 
 //fetch(`https://newsapi.org/v2/everything?q=brasil&from=${diaAnterior}&sortBy=publishedAt&apiKey=366a4893cc3440b486f45b01e7fe90a5`).then(response => response.json()).then(data => {
    //const noticiaUrl= 'https://exemplo.com/noticia2';
    //const artigo= data.articles.find((article) => article.url === noticiaUrl);
    //console.log(artigo);
    fetch(`bancoDados.json`).then(response => response.json()).then(data => {
    const container = document.createElement('div');
    data.articles .forEach( article =>
    {
        const noticia = document.createElement('div');
        noticia.innerHTML = `
        <a href="./noticia.html?id=${article.url}" target="_black"">
        <h1>${article.title}</h1>
        <p>${article.author}</p>
        <img src="${article.urlToImage}">
        </a>
        `;
        container.appendChild(noticia);

    }

    )
    const noticias = document.querySelector('#noticias');
    noticias.appendChild(container)
}
)