/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'https://api.github.com/users';

let showUsers = document.getElementById("btn");
let messageP = document.getElementById("message");

showUsers.addEventListener("click", () => {

    let renderer = getApi1data => {
        let output = "";
        output += `<tr>
    <th style="border:1px solid black">Login</th>
    <th style="border:1px solid black">Avatar</th>
    </tr>`
        getApi1data.forEach((item, index) => {
            output += `<tr>
    <td style="border:1px solid black">${item.login}</td>
    <td style="border:1px solid black"> <img src="${item.avatar_url}" alt="User avatar"></img></td>
    </tr>`
        })
        console.log(getApi1data)

        document.getElementById("githubUsers").innerHTML = output;
        document.getElementById("githubUsers").style.backgroundColor = "grey";
        document.getElementById("githubUsers").style.border = "3px solid purple";
        document.getElementById("githubUsers").style.borderCollapse = "collapse";
    }


    const ENDPOINT = fetch('https://api.github.com/users')
        .then(pageResponse => {
            if (pageResponse.ok) {
                console.log("duomenys gauti")
                messageP.style.display = 'none';
                return pageResponse.json();

            }
            else {
                console.log("Kazkas negerai")
            }
        });
        ENDPOINT
        //pirmas then papraso grazinti saita apskritai - jei toks saitas yra tai duomenys gauti ir return json, jei nepavyksta pasiekti - error - kazkas negerai

        //antras then jau ima duomenis kuriu mums reikia
        .then(renderer)

        .catch(err => console.log("nepavyko", err))


})



