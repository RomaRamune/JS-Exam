/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


let btnElement = document.getElementById("btn__element");
let CountBtnClicks = 0;
let clicksCount = document.getElementById("btn__state");

btnElement.addEventListener("click", function() {
    CountBtnClicks += 1;
    clicksCount.innerHTML = CountBtnClicks;
    console.log(CountBtnClicks);
});

