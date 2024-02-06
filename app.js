const startBtn = document.querySelector("#start");

const stopBtn = document.querySelector("#stop");

const speakBtn = document.querySelector("#speak");


const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition =new speechRecognition();

recognition.onstart = function(){
    console.log("vr active");
    readOut("hello sir, how was your day today?")
};



recognition.onresult= function(event){

    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript;

    transcript= transcript.toLowerCase();

    let userdata= localStorage.getItem("jarvis_setup")

    console.log(transcript);

    if (transcript.includes("What's up jarvis")) {
      readOut("hello sir, what can i do for you today? i can search anything for you");
    }

    if (transcript.includes("hello jarvis")) {
      readOut("hello sir, what can i do for you today? i can search anything for you");
    }

    if(transcript.includes("hi jarvis")){
        readOut("hello sir, what can i do for you today? i can search anything for you");
    }

    if(transcript.includes("hi jarvis")){
        readOut("hello sir, what can i do for you today? i can search anything for you");
    }

    if(transcript.includes("open youtube")){
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }

    if(transcript.includes("open cricbuzz")){
        readOut("opening cricbuzz sir");
        window.open("https://www.cricbuzz.com/")
    }

    if(transcript.includes("open incognito tab")){
        readOut("opening incognito tab sir");
    }
    if(transcript.includes("open valorant")){
        readOut("opening valorant sir");
    }

    if(transcript.includes("open amazon")){
        readOut("opening amazon sir");
        window.open("https://www.amazon.in/");

    }
    if(transcript.includes("search for")){

        readOut("here's the result sir");

        let input = transcript.split("")

        input.splice(0,11)

        input.pop();

        input = input.join("").split(" ").join("+");

        window.open(`https://www.google.com/search?q=${input}`);

    }
    if (transcript.includes("how are you")) {

      readOut("i am fine sir, thank you");
    }
    if (transcript.includes("play")) {

      readOut("here's the result sir");

      let input = transcript.split("");

      input.splice(0, 5);

      input.pop();

      input = input.join("").split(" ").join("+");

      window.open(`https://www.youtube.com/search?q=${input}`);

    }

    if(transcript.includes("weather today")){

        readOut("here's the details about today's weather sir");

        window.open(
          "https://www.google.com/search?q=weather+today&sca_esv=5cded6f1e83ac200&rlz=1C1UEAD_enIN1021IN1021&sxsrf=ACQVn09Xr-ZANChTNHYhOKsSXhvzttP8KA%3A1707225809773&ei=0TLCZdXXLqegnesP6fe2mAM&oq=weather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3dlYXRoZXIqAggAMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMg0QABiABBiKBRhDGLADMg0QABiABBiKBRhDGLADSP0FUABYAHABeAGQAQCYAQCgAQCqAQC4AQHIAQDiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp"
        );
    }

    if(transcript.includes("open github")){

        readOut("opening your github profile sir")

        window.open(`https://github.com/${JSON.parse(userdata).github}`);

    }
    if (transcript.includes("open instagram")) {

      readOut("opening your instagram profile sir");

      window.open(`https://instagram.com/${JSON.parse(userdata).instagram}`);

    }

    if(transcript.includes("what is my name")){

        readOut(`sir your name is ${JSON.parse(userdata).namee}`);

    }

}


const setup = document.getElementById("jarvis_setup");

setup.style.display="none";

if(localStorage.getItem("jarvis_setup")=== null){

    setup.style.display="block";

    setup.querySelector("button").addEventListener("click", userInfo)

}


function userInfo(){

    let setupInfo = {
        
      namee: setup.getElementsByTagName("input")[0].value,

      bio: setup.getElementsByTagName("input")[1].value,

      instagram: setup.getElementsByTagName("input")[2].value,

      github: setup.getElementsByTagName("input")[3].value

    };

    let testArr=[]

    setup.querySelectorAll("input").forEach((e)=>{

        testArr.push(e.value)

    })
    if(testArr.includes("")){

        readOut("sir please enter your complete information")

    }

    else{
        localStorage.clear()

        localStorage.setItem("jarvis_setup", JSON.stringify(setupInfo))

        setup.style.display="none";
    }
}

recognition.onend = function(e){

    console.log("vr deactive");

};
recognition.continuous = true;

startBtn.addEventListener("click",()=>{
    recognition.start();
})
stopBtn.addEventListener("click", () =>{
    recognition.stop();
})

function readOut(message){

    const speech = new SpeechSynthesisUtterance()

    const allVoices = speechSynthesis.getVoices()

    speech.voice = allVoices[8];

    speech.text = message;

    speech.volume= 1;

    window.speechSynthesis.speak(speech);

    console.log("speaking out");

}


window.onload = function(){

    readOut();
}

