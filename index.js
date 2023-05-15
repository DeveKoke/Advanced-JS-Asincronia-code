// *1
function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
            .then(res=>res.json())
            .then(json => {
                let dogBreeds = [];
                for(let i in json['message'])  {
                    dogBreeds.push(i)
                }
                return dogBreeds
                })
            .catch(error => console.log (error));
}console.log(getAllBreeds())


// * 2
function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(res=>res.json())
    .then(json => json.message[0]
        )
    .catch(error => console.log (error));
}
console.log(getRandomDog())


// *3
// function getAllImagesByBreed(breed) {
//     return fetch(`https://dog.ceo/api/breed/${breed}/images`)
//     .then(res=>res.json())
//     .then(json => json.message)
//     .catch(error => console.log (error));
// }
// console.log(getAllImagesForBreed())

function getAllImagesByBreed(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => data.message)
      .catch(error => console.log (error));
  }


// *4
function getAllImagesByBreed2(dogBreed) {
    return fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
    .then(res=>res.json())
    .then(json => json.message)
    .catch(error => console.log (error));
}
console.log(getAllImagesByBreed2('hound'))





// * 5
function getGitHubUserProfile(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(res =>res.json())
    .then(json => json)
    .catch(error => console.log (error));
}
console.log(getGitHubUserProfile('DeveKoke'))



// *6  
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(dataUser => {
        const card = document.createElement('article');
        const image = document.createElement('img');
        const login = document.createElement('h3');

        image.src = dataUser.avatar_url;
        login.innerHTML = dataUser.name;
        card.appendChild(image);
        card.appendChild(login);

        const cuerpoWeb = document.querySelector('body');

        const printedCard = cuerpoWeb.appendChild(card);
      

        return ({ img: dataUser.avatar_url, name: dataUser.name})
    })
    .catch(error => console.log (error));
}
console.log(printGithubUserProfile('DeveKoke'))


function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(res=>res.json())
    .then(data => {
    let { name, avatar_url } = data;
    document.body.innerHTML += `
    <section>
        <img id="1" src="${avatar_url}" alt="${name}">
        <h1>${name}</h1>
    </section>`;
    return { name, avatar_url };
  });
};

console.log(printGithubUserProfile('DeveKoke'))



// *7
function getAndPrintGitHubUserProfile(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(res=>res.json())
    .then(json => {
        let { name, avatar_url  } = json;
            fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res=>res.json())
            .then(data => {
                let repos = Object.keys(data).length;
                return document.body.innerHTML += `
                    <section>
                        <img src="${avatar_url}" alt="imagen de usuario">
                        <h1>${name}</h1>
                        <p>Public repos: ${repos} </p>
                    </section>`;  
                }
            )      
        }
    )
}
console.log(getAndPrintGitHubUserProfile('DeveKoke'))



// * 8
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Buscar';
input.setAttribute('class', 'inputValue');
button.setAttribute('class', 'button');
input.addEventListener('click', (getAndPrintGitHubUserProfile(input.value)))
function getAndPrintGitHubUserProfile(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
    .then(res=>res.json())
    .then(data => {
        let { name, avatar_url } = data;
        document.body.innerHTML += `
        <section>
            <img id="1" src="${avatar_url}" alt="${name}">
            <h1>${name}</h1>
        </section>`;
        return { name, avatar_url };

    })
    
}console.log(getAndPrintGitHubUserProfile('DeveKoke'))

// * 9
// function fetchGithubUsers(userNames){
//     return fetch(`https://api.github.com/users/${userNames}`)
//     .then(res=>res.json())
//     .then(data => {
//         data.map((infoUsers)=> infoUsers['login']['repos_url']);

//             Promise.all([p1, p2, p3, p4]).then(function(value) {
//             console.info('', value)
//         }, function(reason) {
//             console.log("Ups...hubo algún error!", reason)
//         });
//     })



// const p1 = fetch("/robots.txt");
// const p2 = fetch("/index.css");
// const p3 = fetch("/index.js");

// Promise.all([p1, p2, p3])
//   .then(responses => {
//     responses.forEach(response => {
//       console.log(response.status, response.url);
//     })
//   });

//   Promise.all([p1, p2, p3, p4]).then(function(value) {
//     console.info("Promise.all -> TODAS las promesas terminadas", value)
//   }, function(reason) {
//     console.log("Ups...hubo algún error!", reason)
//   });

// }


function fetchGithubUsers(userNames) {
    const promises = userNames.map((name) =>
      fetch(`https://api.github.com/users/${name}`)
      .then((response) =>
        response.json()
      )
    );
    return Promise.all(promises);
  }