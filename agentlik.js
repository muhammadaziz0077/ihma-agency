function openTab(tabId) {
    // Barcha tablarni yopamiz
    let tabs = document.querySelectorAll('.tab-agentlik');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Tanlangan tabni ochamiz
    document.getElementById(tabId).style.display = 'block';
}

// Dastlabki tabni ko'rsatamiz
openTab('agentlik-haqida');
