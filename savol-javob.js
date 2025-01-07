function selectOption(option) {
    // Variantni tanlash va o'zgarishlarni ko'rsatish
    if (option === 'telegram') {
        // Telegram botga yo'naltirish
        window.location.href = "https://t.me/YourBotUsername";  // Telegram bot manzilingiz
    } else if (option === 'site') {
        // Sayt formasi ko'rsatish
        document.getElementById("formSection").style.display = "block";
        document.getElementById("answerSection").style.display = "none"; // Javobni yashirish
    }

    // Savolni va variantlarni yashirish
    document.querySelector('.options').style.display = "none";
}

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const question = document.getElementById("question").value.trim();

    if (name === "" || surname === "" || phone === "" || question === "") {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    // Savol yuborilgandan so'ng, javobni ko'rsatish
    document.getElementById("answerSection").style.display = "block";
    document.getElementById("formSection").style.display = "none";

    // Bu yerda form ma'lumotlarini serverga yuborish mumkin
    // Misol: sendToServer(name, surname, phone, question);
}
