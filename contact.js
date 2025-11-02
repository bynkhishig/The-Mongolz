document.addEventListener("DOMContentLoaded", () => {
    // Монголз багийн логог тогтмол ашиглана
    const mongolzLogo = "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/the-mongolz.png";

    // Тоглолтын массив (Team2-ийн лого нэмсэн)
    const matches = [
        { team1: "The Mongolz", team2: "HEROIC", team2Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9swqtCrkiclUiRx65ivMf4BabPRcEqpMAiPQBt-bacRN4ZK1XccQNmAMSt4JKrxUNG8&usqp=CAU", date: "2025-11-03 15:00", result: "upcoming" },
        { team1: "The Mongolz", team2: "Aurora", team2Logo: "https://pickem-mongolia.com/wp-content/uploads/2025/08/Aurora-CS2-logo.webp", date: "2025-10-19 19:30", result: "lose" },
        { team1: "The Mongolz", team2: "Natus Vincere", team2Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIcXOjhk79334FM0kCWLdpTtDLW7us01NpLRrdhh8vwSuhlYlsKjFZtJ510tVeLg8T6M&usqp=CAU", date: "2025-10-19 01:30", result: "lose" },
        { team1: "The Mongolz", team2: "9z", team2Logo: "https://media.printables.com/media/prints/890160/images/6845250_32cf7cc5-b987-4ad0-b00f-af6c668f1ba8_172c7f34-9c6a-4004-908a-e495df517bc5/thumbs/cover/320x240/jpg/9z-print-red.webp", date: "2025-10-17 21:00", result: "win" },
    ];

    const container = document.querySelector(".matches-container");
    container.innerHTML = "";

    matches.forEach(match => {
        const matchDate = new Date(match.date);
        const now = new Date();
        let status = match.result;
        if(matchDate > now) status = "upcoming";

        const card = document.createElement("div");
        card.classList.add("match-card");
        card.innerHTML = `
            <div class="match-info">
                <div class="teams">
                    <span class="team-name team1">${match.team1}</span>
                    <span class="team-name team2">${match.team2}</span>
                </div>
                <div class="date-time">
                    ${matchDate.toLocaleDateString('mn-MN')} ${matchDate.toLocaleTimeString('mn-MN', {hour:'2-digit', minute:'2-digit'})}
                </div>
                <span class="result ${status}">
                    ${status === 'win' ? 'Ялалт' : status === 'lose' ? 'Ялагдал' : 'Ирэх тоглолт'}
                </span>
            </div>
            <div class="team-logos">
                <img src="${mongolzLogo}" alt="${match.team1}"> <!-- Монголз логог үргэлж харуулах -->
                <img src="${match.team2Logo}" alt="${match.team2}"> <!-- Team2-ийн логог өөрчлөх -->
            </div>
        `;
        container.appendChild(card);
    });
});
