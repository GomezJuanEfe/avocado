/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app');
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
            
            //crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            
            //crear precio
            const price = document.createElement('div');
            price.textContent = item.price;
            
            //creo un contenedor para que cada información de cada item se vea más organizada
            const container = document.createElement('div');
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });

        appNode.append(...todosLosItems);
    });

//También se puede utilizar async/await pero ya es como aprendizaje personal

