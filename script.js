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


function reflecteCharacterData(jsonData) {
    // 各要素にデータを反映
    // console.log(jsonData.Character.Name);
    charaName.innerText = jsonData.Character.Name;
    charaImg.src = jsonData.Character.Portrait;
    jsonData.Character.ClassJobs.map((jobData, i) => {
        switch (i) {
            case 0:
                pld.lastElementChild.innerText = jobData.Level;
                break;
            case 1:
                war.lastElementChild.innerText = jobData.Level;
                break;
            case 2:
                drk.lastElementChild.innerText = jobData.Level;
                break;
            case 3:
                gnb.lastElementChild.innerText = jobData.Level;
                break;
            case 4:
                whm.lastElementChild.innerText = jobData.Level;
                break;
            case 5:
                sch.lastElementChild.innerText = jobData.Level;
                break;
            case 6:
                ast.lastElementChild.innerText = jobData.Level;
                break;
            case 7:
                mnk.lastElementChild.innerText = jobData.Level;
                break;
            case 8:
                drg.lastElementChild.innerText = jobData.Level;
                break;
            case 9:
                nin.lastElementChild.innerText = jobData.Level;
                break;
            case 10:
                sam.lastElementChild.innerText = jobData.Level;
                break;
            case 11:
                brd.lastElementChild.innerText = jobData.Level;
                break;
            case 12:
                mcn.lastElementChild.innerText = jobData.Level;
                break;
            case 13:
                dnc.lastElementChild.innerText = jobData.Level;
                break;
            case 14:
                blm.lastElementChild.innerText = jobData.Level;
                break;
            case 15:
                smn.lastElementChild.innerText = jobData.Level;
                break;
            case 16:
                rdm.lastElementChild.innerText = jobData.Level;
                break;
            case 17:
                blu.lastElementChild.innerText = jobData.Level;
                break;
            case 18:
                crp.lastElementChild.innerText = jobData.Level;
                break;
            case 19:
                bsm.lastElementChild.innerText = jobData.Level;
                break;
            case 20:
                arm.lastElementChild.innerText = jobData.Level;
                break;
            case 21:
                gsm.lastElementChild.innerText = jobData.Level;
                break;
            case 22:
                ltw.lastElementChild.innerText = jobData.Level;
                break;
            case 23:
                wvr.lastElementChild.innerText = jobData.Level;
                break;
            case 24:
                alc.lastElementChild.innerText = jobData.Level;
                break;
            case 25:
                cul.lastElementChild.innerText = jobData.Level;
                break;
            case 26:
                min.lastElementChild.innerText = jobData.Level;
                break;
            case 27:
                btn.lastElementChild.innerText = jobData.Level;
                break;
            case 28:
                fsh.lastElementChild.innerText = jobData.Level;
                break;
            default:
                break;
        }
    });

  };
  
  function push(){
      const inputText = document.getElementById('lodestoneId').value;
      fetch(`https://xivapi.com/character/${inputText}?data=CJ`).then(response => response.json()).then(jsonData => reflecteCharacterData(jsonData));
  };

