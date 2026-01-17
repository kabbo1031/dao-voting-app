let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    log("Wallet connected");
});

document.getElementById("loadBtn").addEventListener("click", async function () {
    const address = document.getElementById("contractAddress").value;
    if (!wallet || !address) {
        alert("Connect wallet and enter contract address");
        return;
    }

    const proposals = await loadProposals(address, wallet);
    showProposals(proposals);
});
