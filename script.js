const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) O que é preconceito?",
        alternativas: [
            {
            texto: "a) Uma opinião baseada em evidências científicas.",
            afirmacao: "1) Incorreto."
            },
            {
            texto:"b) Um julgamento ou atitude negativa formada sem conhecimento adequado.",
            afirmacao: "1) Correto."
            }
    ]
    },

    {
        enunciado: "2) Qual é um exemplo de preconceito?",
        alternativas: [
            {
            texto:"a) Julgar uma pessoa apenas com base em sua aparência ou origem.",
            afirmacao: "2) Correto."
            },
            {
            texto: "b) Conhecer bem uma pessoa antes de formar uma opinião sobre ela.",
            afirmacao: "2) Incorreto."
            }
        ]
           
    },
    {
        enunciado: "3) Como podemos combater o preconceito?",
        alternativas: [
            {
            texto:"a)  Ignorar a diversidade e manter as próprias crenças sem questionar.",
            afirmacao: "3) Incorreto."
        },
         {   
            texto: "b) Promover a educação e o diálogo aberto sobre diferentes culturas e experiências",
            afirmacao: "3) Correto."
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Combater o preconceito começa com a empatia e a abertura para entender o outro. Cada pessoa tem uma história única e valiosa. Ao acolher a diversidade e julgar menos, contribuímos para uma sociedade mais justa e rica.  Seu Resultado :)";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    