/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membri del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.

BONUS:
Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

// STEPS:

// definisco un array di oggetti che rappresentano i membri del team (con Nome, Ruolo, Foto)
const arrMembers = [
    {
        nome: `Wayne Barnett`,
        ruolo: `Founder & CEO`,
        foto: `img/wayne-barnett-founder-ceo.jpg`
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `img/angela-caroll-chief-editor.jpg`
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `img/walter-gordon-office-manager.jpg`
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Spcial Media Manager`,
        foto: `img/angela-lopez-social-media-manager.jpg`
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        foto: `img/scott-estrada-developer.jpg`
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `Graphic Designer`,
        foto: `img/barbara-ramos-graphic-designer.jpg`
    },
];

// stampo dinamicamente una card per ogni membro del team
const eleContainer = document.getElementsByClassName(`team-container`);

for (let index = 0; index <= arrMembers.length; index++) {
    const eleCard = document.createElement(`div`);
    eleCard.className = `team-card`;
    eleContainer[0].append(eleCard);

    // stampo la card-image
    const eleCardImage = document.createElement(`div`);
    eleCardImage.className = `card-image`;
    eleCard.append(eleCardImage);

    const eleMemberImage = document.createElement(`img`);
    eleMemberImage.src = arrMembers[index].foto;
    eleCardImage.append(eleMemberImage);

    // stampo la card-text
    const eleCardText = document.createElement(`div`);
    eleCardText.className = `card-text`;
    eleCard.append(eleCardText);

    const eleMemberName = document.createElement(`h3`);
    eleMemberName.innerHTML = arrMembers[index].nome;
    eleCardText.append(eleMemberName);

    const eleMemberRole = document.createElement(`p`);
    eleMemberRole.innerHTML = arrMembers[index].ruolo;
    eleCardText.append(eleMemberRole);    
    
}



// creo una funzione che si reiteri con i dati giusti per ogni card





// FUNCTIONS
// function createAndAppendElement(container) {
//     let newElement = document.createElement(`div`);
//     container[0].append(newElement);

//     return newElement;
// }

// function addDatasToCard() {
//     if (arrCards[index] === arrMembers.length) {
//         eleMemberImage.src = arrMembers.length.foto;
//         eleMemberName.innerHTML = arrMembers.length.nome;
//         eleMemberRole.innerHTML = arrMembers.length.ruolo;
//     }

//     return eleCard;
// }
