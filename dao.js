async function loadProposals(contractAddress, wallet) {
    const contract = new ethers.Contract(contractAddress, DAO_ABI, wallet);

    const count = await contract.getProposalCount();
    const proposals = [];

    for (let i = 0; i < count; i++) {
        const data = await contract.getProposal(i);
        proposals.push({
            id: i,
            title: data[0],
            votes: data[1].toString()
        });
    }

    return proposals;
}
