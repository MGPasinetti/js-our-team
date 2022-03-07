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
const eleContainer = document.getElementsByClassName(`.team-container`);
const eleCard = document.createElement(`div`);
eleCard.className(`.team-card`);
eleContainer.append(eleCard);
