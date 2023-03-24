var Reconhece_fala=window.webkitSpeechRecognition;
var conteudo;
var Reconhecimento=new Reconhece_fala();
var img;

function Iniciar(){
    Reconhecimento.start();
}
Reconhecimento.onresult=function(evento){
    conteudo=evento.results[0][0].transcript.toLowerCase();
    if(conteudo=="selfies"){
        Fala();
    }
}
function Fala(){
    var Reconhece_texto=window.speechSynthesis;
    Webcam.attach(Camera)
    var Dado_da_fala;
    setTimeout(
        function(){
            img="selfie1";
            Selfie();
            Dado_da_fala="Tirando sua selfie em 5 segundos!";
            var Dado_do_texto=new SpeechSynthesisUtterance(Dado_da_fala);
            Reconhece_texto.speak(Dado_do_texto);
        },
        5000
    );
    setTimeout(
        function(){
            img="selfie2";
            Selfie();
            Dado_da_fala="Tirando sua selfie em 10 segundos!";
            var Dado_do_texto=new SpeechSynthesisUtterance(Dado_da_fala);
            Reconhece_texto.speak(Dado_do_texto);
        },
        10000
    );
    setTimeout(
        function(){
            img="selfie3";
            Selfie();
            Dado_da_fala="Tirando sua selfie em 15 segundos!";
            var Dado_do_texto=new SpeechSynthesisUtterance(Dado_da_fala);
            Reconhece_texto.speak(Dado_do_texto);
        },
        15000
    );
}
var Camera=document.getElementById("webcam");
Webcam.set({
    width:500,
    height:400,
    image_format:"png",
    png_quality:90
});
function Selfie(){
    Webcam.snap(function(data_URI){
        if(img=="selfie1"){
            document.getElementById("img1").src=data_URI;
        }
        else if(img=="selfie2"){
            document.getElementById("img2").src=data_URI;
        }
        else if(img=="selfie3"){
            document.getElementById("img3").src=data_URI;
        }
    });
}