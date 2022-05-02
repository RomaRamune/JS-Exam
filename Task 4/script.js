/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'cars.json';

function loadCarsOnLoad() {

    let renderer = getApi4data => {
        let output = "";
        output += `<tr>
    <th style="border:1px solid black">Brand</th>
    <th style="border:1px solid black">Models</th>
    </tr>`
        getApi4data.forEach((item, index) => {
            output += `<tr>
    <td style="border:1px solid black">${item.brand}</td>
    <td style="border:1px solid black">${item.models}</td>
    </tr>`
        })
        console.log(getApi4data)

        document.getElementById("OurCarsList").innerHTML = output;
        document.getElementById("OurCarsList").style.backgroundColor = "lightgrey";
        document.getElementById("OurCarsList").style.border = "3px solid red";
        document.getElementById("OurCarsList").style.borderCollapse = "collapse";
    }


    const ENDPOINT = fetch('cars.json')
        .then(pageResponse => {
            if (pageResponse.ok) {
                console.log("duomenys gauti")
                return pageResponse.json();

            }
            else {
                console.log("Kazkas negerai")
            }
        });
        ENDPOINT

        .then(renderer)

        .catch(err => console.log("nepavyko", err))


}
