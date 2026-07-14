import { auth, provider, signInWithPopup } from "./firebase.js";
const btn = document.getElementById("createBtn");

btn.onclick = function(){

const text = document.getElementById("prompt").value;

if(text==""){
    alert("Matn kiriting");
    return;
}

document.getElementById("result").innerHTML =
"<h3>✅ So'rov qabul qilindi</h3><p>Keyingi bosqichda internetdan mos videolar izlanadi.</p>";

}

const googleBtn = document.getElementById("googleLogin");

googleBtn.onclick = async function () {

    try {

        const result = await signInWithPopup(auth, provider);

        document.getElementById("result").innerHTML =
        "<h3>✅ Xush kelibsiz!</h3><p>" +
        result.user.displayName +
        "<br>" +
        result.user.email +
        "</p>";

    } catch (error) {

        alert("Google Login xatosi: " + error.message);

    }

}
