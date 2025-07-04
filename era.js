const btn = document.querySelector('#talk');
const content = document.querySelector('.content');

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 1;
    utterance.volume = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}
window.addEventListener('load', () => {
    speak("Vipul Gaikwad ne banaye huye AI pe aapka swagat hai...");
    wishMe();
});


function wishMe() {
    const hour = new Date().getHours();

    if (hour>=0 && hour<12) {
        speak("Good Morning Vipul...");
    } else if (hour>= 12 && hour<17) {
        speak("Good Afternoon Vipul...");
    } else {
        speak("Good Evening Vipul...");
    }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = () => {
    speak("Sorry, maine suna nahi phirse boliye.");
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});
window.addEventListener('load', () => {
    speak("Vipul Gaikwad ne banaye huye AI pe aapka swagat hai...");
    wishMe();
    5000});


function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak(" hello sir, mai aapki kaise madad kar sakti hoon")
    }
    if (message.includes('thank you') || message.includes('thanks')) {
        speak("its my pleasure vipul sir")
    }
    if (message.includes('tell me') || message.includes('about your guide')) {
        speak("my guide name is vipul gaikwad he is from kherda in latur district his age is 21 and he made me for only entertainment and my owner is a very intelligent guy that's why he made me and thanx to him")
    }
     if (message.includes('badshah')) {
        speak("Hello vicky bhai")
    }
    if (message.includes('varsha')) {
        speak("Hello varsha tapghale mai aapke bhai ki assistant hu ")
    }
    if (message.includes('pappa')) {
        speak("Hello gaikwad sir kaise he aap?")
    }
      if (message.includes('ok baby')) {
        speak("please shut up")
    }

    else if (message.includes("open google")) {
        speak("Opening Google this is for you vipul sir");
        window.open("https://google.com", "_blank");
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube this is for you vipul sir");
        window.open("https://youtube.com", "_blank");
    }
    else if (message.includes("open facebook")) {
        speak("Opening Facebook this is for you vipul sir");
        window.open("https://facebook.com", "_blank");
    }
    else if (message.includes("wikipedia")) {
        const query = message.replace("wikipedia", "").trim();
        speak("This is what I found on Wikipedia about " + query);
        window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
    }
    else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        const query = message.replace(/ /g, "+");
        speak("Here is what I found on Google regarding " + message);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
    else if (message.includes("time")) {
        const time = new Date().toLocaleTimeString();
        speak("The current time is " + time);
    }
    else if (message.includes("date")) {
        const date = new Date().toLocaleDateString();
        speak("Today's date is " + date);
    }
    else if (message.includes("calculator")) {
        speak("Opening Calculator...");
        window.open("https://www.google.com/search?q=calculator", "_blank");
    }
     
    else {
        const query = message.replace(/ /g, "+");
        speak("this is your search " + message + " sir.");
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }



}