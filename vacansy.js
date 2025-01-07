// Qidiruv tizimi uchun funksiya
function searchVacancy() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let vacancies = document.querySelectorAll(".vacancy");

    vacancies.forEach(vacancy => {
        let title = vacancy.querySelector("h3").textContent.toLowerCase();
        let description = vacancy.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            vacancy.style.display = "block";  // Agar topilgan bo'lsa, ko'rsatish
        } else {
            vacancy.style.display = "none";  // Aks holda yashirish
        }
    });
}
