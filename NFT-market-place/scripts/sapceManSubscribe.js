import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getDatabase, ref, child, get, set, update, remove, push} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAk98BnRqfyaEWaD6WlwruYLZIFwnAr324",
  authDomain: "login-form-nft.firebaseapp.com",
  databaseURL: "https://login-form-nft-default-rtdb.firebaseio.com",
  projectId: "login-form-nft",
  storageBucket: "login-form-nft.appspot.com",
  messagingSenderId: "803404994934",
  appId: "1:803404994934:web:5d46dbaef701178cf9c257"
};


const app = initializeApp(firebaseConfig);


const db = getDatabase();



function spaceManSubscribe(){
    try{
        const createBtn = document.getElementById('subscribeSecond');

        createBtn.addEventListener('click', (event) =>{
            event.preventDefault();
        
            const inputSubscribe = document.getElementById("spEmail").value;


            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(inputSubscribe)) {
                alert("Please enter a valid email address.");
                return;
            }
        
            const newSubscribeRef = push(ref(db, 'Subscribe'));
        
            set(newSubscribeRef, {
                subscribeEmail: {
                    email: inputSubscribe
                }
            }).then(() => {
                alert("Subscribe !!!");
                const defaults = {
                    spread: 360,
                    ticks: 50,
                    gravity: 0,
                    decay: 0.94,
                    startVelocity: 30,
                    shapes: ["star"],
                    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
                  };
                  
                  function shoot() {
                    confetti({
                      ...defaults,
                      particleCount: 40,
                      scalar: 1.2,
                      shapes: ["star"],
                    });
                  
                    confetti({
                      ...defaults,
                      particleCount: 10,
                      scalar: 0.75,
                      shapes: ["circle"],
                    });
                  }
                  
                  setTimeout(shoot, 0);
                  setTimeout(shoot, 100);
                  setTimeout(shoot, 200);
                document.getElementById("spEmail").value = "";
        
            }).catch((error) => {
                alert("Not successful");
                console.log(error);
            });
        });
    }catch{
        console.log(error)
    }
}
    

    spaceManSubscribe();