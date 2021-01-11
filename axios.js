const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
const div = document.querySelector('#simpson');

const getSimpsonQuote = () => {
    axios.get(url)
    .then(function (response) {
        return response.data;
    })
    .then(function (simpson) {
            const h2 = document.createElement('h2');
            h2.innerHTML = simpson[0].character;
            div.appendChild(h2);
    
            const img = document.createElement('img');
            img.setAttribute('src', simpson[0].image);
            div.appendChild(img);
    
            const p = document.createElement('p');
            p.innerHTML = simpson[0].quote
            div.appendChild(p);
        })
        .catch(function (error) {
            console.log(error);
        });
};

getSimpsonQuote();

const divContainer = document.querySelector("#container");
const btn = document.createElement('button');
btn.innerHTML = "Un autre !";
divContainer.appendChild(btn);

btn.addEventListener('click', () => {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    getSimpsonQuote();
    console.log("Et un autre !");
});