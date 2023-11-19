// Liste des images et de leurs descriptions
const descrptions = [
    {
        name: "Amazon",
        image: "../Src/Images/amazon.jpg",
        content: "En 2019, AWS (Amazon Web Services) a lancé un centre d'informatique quantique, avec l'idée d'accélérer le développement d'ordinateurs quantiques, en ayant le rôle ambitieux de créer un ordinateur quantique qui est capable de tolérer des variations dans spn environnement sans problème majeur. Ils ont fait un partenariat avec l'Institut Technologique de Californie afin d'accélérer encore leur travail."
    }, 
    {
        name: "D-Wave Systems",
        image: "../Src/Images/d-wave.jpg",
        content: "D-Wave, une entreprise canadienne, est très connue pour ses progrès dans l'informatique quantique. Ils ont notamment été les premiers à vendre un ordinateur quantique commercial. Ses derniers systèmes ont une architecture de plus de 5000 qubits !"
    },
    {
        name: "Google",
        image: "../Src/Images/google.jpg",
        content: "Google est une autre entreprse ayant fait de gros progrès dans l'informatique quantique. Son ordinateur quantque le plus puissant, Sycamore, possède 54 qubits, avec des portes logiques de haute fidélité. Avec cet ordinateur quantique, Google estime avoir accompli une perfecton de l'informatique quantique : avec, ils ont pu effectuer des calculs en quelques minutes, alors qu'ils auraient pris eznviron 10000 ans à des super-ordinateurs ordinaires à faire ! Depuis, ils l'ont utiliser pour effectuer des simunations chmiques, et plus."
    },
    {
        name: "IBM",
        image: "../Src/Images/ibm.jpg",
        content: "IBM est une autre entreprise ayant de grands succès en informatique quantique, en ayant des objectifs très ambiteux pour 2025 : ils espèrent pouvoir construire des processuers ayant plusieurs \"chips\". Ainsi, leur futur processeur, Kookaburra, aura 4158 qubits !"
    },
    {
        name: "QCI",
        image: "../Src/Images/qci.jpg",
        content: "QCI (Quantum Computing Incorporation) est une entreprise qui se consacre entièrement à la constructon d'ordinateurs quantiques, et dont le but est de rendre l'informatique quantique plus accessible, afin de pouvoir l'utiliser sans avoir à être un expert dans ce domaine."
    },
    {
        name: "Et bien plus...",
        image: "",
        content: "Il y a évidemment beaucoup plus d'entreprises qui trvaillent sur ce secteur, mais je n'ai présenté que les plus connues."
    }
]


const button1 = document.querySelector("#button1") // Bouton entreprise suivante
const button2 = document.querySelector("#button2") // Bouton entreprise précédente

const image = document.querySelector("#descImage")
const title = document.querySelector("#titleDesc")
const paragraphe = document.querySelector("#paragrapheDesc")


let page = -1

button1.addEventListener("click", () => {
    if(page === 5) return // Ne rien faire si on est à la dernière image
    page = page + 1

    image.alt = "Photo partielle d'un ordnateur quantique" 
    image.src = descrptions[page].image //Actualiser l'image
    title.textContent = descrptions[page].name //Actualiser le titre
    paragraphe.textContent = descrptions[page].content //Actualiser le paragraphe
})

button2.addEventListener("click", () => {
    if(page === 0) return // Ne rien faire si on est à la première image
    page = page - 1

    image.alt = "Photo partielle d'un ordnateur quantique" 
    image.src = descrptions[page].image //Actualiser l'image
    title.textContent = descrptions[page].name //Actualiser le titre
    paragraphe.textContent = descrptions[page].content //Actualiser le paragraphe
})