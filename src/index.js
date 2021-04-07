/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app');

const formatPrice = (price) =>{

    const newPrice = window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

    return newPrice;
};

//API INTL

/*
WEB API

Para conectarme hay que realizar varios pasos:
1. Conectarnos al sevidor
2. Procesar la respuesta y convertirla en JSON
3. JSON --> Data --> Rendering info browser
*/

//1.
window.
    fetch(`${baseUrl}/api/avo`)
//2.
    .then((respuesta) => respuesta.json())
//3.
    .then((responseJSON) => {
        const todosLosItems = [];
        responseJSON.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement('img');
            //url de la imagen
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            
            //crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'text-lg';
            
            //crear precio
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            price.className = 'text-gray-600';
            
            //Wrap price & title
            const priceAndTitle = document.createElement('div')
            priceAndTitle.className = 'text-center md:text-left'
            priceAndTitle.append(title, price)

            //Wrap Img and priceAndTitle
            const card = document.createElement('div')
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
            card.append(imagen, priceAndTitle)
            console.log(card)

            todosLosItems.push(card)
        })
        appNode.append(...todosLosItems)
    })

//También se puede utilizar async/await pero ya es como aprendizaje personal

