const createBtn = document.getElementById("createBtn");
const result = document.getElementById("result");

createBtn.addEventListener("click", () => {

    const prompt = document.getElementById("prompt").value.trim();

    if (prompt === "") {
        alert("Iltimos, matn kiriting!");
        return;
    }

    result.innerHTML = `
        <h3>✅ So'rov qabul qilindi</h3>
        <p><b>Mavzu:</b> ${prompt}</p>
        <p>Keyingi bosqichda internetdan mos videolar qidiriladi.</p>
    `;

});
