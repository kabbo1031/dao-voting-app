function showProposals(proposals) {
    const list = document.getElementById("proposalList");
    list.innerHTML = "";

    proposals.forEach(function (p) {
        const div = document.createElement("div");
        div.innerText = p.id + ". " + p.title + " | Votes: " + p.votes;
        list.appendChild(div);
    });
}
