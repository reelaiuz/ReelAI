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