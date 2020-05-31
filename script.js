const lodestoneId = document.getElementById('lodestoneId');
const charaName = document.getElementById('charaName');
const charaImg = document.getElementById('charaImg');
const pld = document.getElementById('pld');
const war = document.getElementById('war');
const drk = document.getElementById('drk');
const gnb = document.getElementById('gnb');
const whm = document.getElementById('whm');
const sch = document.getElementById('sch');
const ast = document.getElementById('ast');
const mnk = document.getElementById('mnk');
const drg = document.getElementById('drg');
const nin = document.getElementById('nin');
const sam = document.getElementById('sam');
const brd = document.getElementById('brd');
const mcn = document.getElementById('mcn');
const dnc = document.getElementById('dnc');
const blm = document.getElementById('blm');
const smn = document.getElementById('smn');
const rdm = document.getElementById('rdm');
const blu = document.getElementById('blu');
const crp = document.getElementById('crp');
const bsm = document.getElementById('bsm');
const arm = document.getElementById('arm');
const gsm = document.getElementById('gsm');
const ltw = document.getElementById('ltw');
const wvr = document.getElementById('wvr');
const alc = document.getElementById('alc');
const cul = document.getElementById('cul');
const min = document.getElementById('min');
const btn = document.getElementById('btn');
const fsh = document.getElementById('fsh');


function push(){
    fetch("https://xivapi.com/character/22728375").then(response => response.json()).then(jsonData => console.log(jsonData.Character.Name));
}

// war.lastElementChild.innerText = 50