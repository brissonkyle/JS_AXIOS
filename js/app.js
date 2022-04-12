function showNav() {
    let styleNav = document.getElementById('navBar');
    styleNav.style.display = 'block';
}

function closeNav() {
    let styleNav = document.getElementById('navBar');
    styleNav.style.display = 'none';
}

function boredAPI() {
    axios.request({
        method : "GET",
        url : "http://www.boredapi.com/api/activity/"
    }).then(complete).catch(fail)
}

function complete(response) {
    console.log(response);
    console.log(response.data.activity);
    let responseVar = response.data.activity;
    let textShow = document.getElementById('text');
    textShow.innerText = responseVar
   
}

function fail(cantGet) {
    let cantGeter = document.getElementById('container');
    cantGeter.innerText = 'Fail';
}

function parBased() {
    axios.request ({
        mehtod : "GET",
        url : 'http://www.boredapi.com/api/activity?participants=1'
    }).then(parWorked).catch(parFailed)
}

function parWorked(response) {
    console.log(response);
    console.log(response.data.activity);
    let responseVar = response.data.activity;
    let textShow = document.getElementById('acti1');
    textShow.innerText = responseVar

}

function parFailed(error) {
   
}

function parBased2() {
    axios.request ({
        mehtod : "GET",
        url : 'http://www.boredapi.com/api/activity?participants=2'
    }).then(parWorked2).catch(parFailed2)
}

function parWorked2(response) {
    console.log(response);
    console.log(response.data.activity);
    let responseVar = response.data.activity;
    let textShow = document.getElementById('acti2');
    textShow.innerText = responseVar
}

function parFailed2(error) {
   
}

function parBased3() {
    axios.request ({
        mehtod : "GET",
        url : 'http://www.boredapi.com/api/activity?participants=3'
    }).then(parWorked3).catch(parFailed3)
}

function parWorked3(response) {
    console.log(response);
    console.log(response.data.activity);
    let responseVar = response.data.activity;
    let textShow = document.getElementById('acti3');
    textShow.innerText = responseVar
}

function parFailed3(error) {
   
}

function parBased4() {
    axios.request ({
        mehtod : "GET",
        url : 'http://www.boredapi.com/api/activity?participants=4'
    }).then(parWorked4).catch(parFailed4)
}

function parWorked4(response) {
    console.log(response);
    console.log(response.data.activity);
    let responseVar = response.data.activity;
    let textShow = document.getElementById('acti4');
    textShow.innerText = responseVar
}

function parFailed4(error) {
   
}

let par = document.getElementById('1par').addEventListener('click', parBased);
let par2 = document.getElementById('2par').addEventListener('click', parBased2);
let par3 = document.getElementById('3par').addEventListener('click', parBased3);
let par4 = document.getElementById('4par').addEventListener('click', parBased4);
let nav2 = document.getElementById('closeNav').addEventListener('click', closeNav);
let nav = document.getElementById('openMenu').addEventListener('click', showNav);
let click = document.getElementById('getActivity').addEventListener('click', boredAPI);
