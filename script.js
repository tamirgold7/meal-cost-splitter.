function addFriends() {
    const numFriends = parseInt(document.getElementById("num_friends").value);
    const friendsContainer = document.getElementById("friends_container");
    friendsContainer.innerHTML = '';

    for (let i = 0; i < numFriends; i++) {
        const friendDiv = document.createElement("div");
        friendDiv.className = "friend";
        friendDiv.innerHTML = [
            '<label>Enter the name of friend ' + (i + 1) + ':</label>',
            '<input type="text" class="friend_name">',
            '<label>Enter the cost of dishes ordered by friend ' + (i + 1) + ':</label>',
            '<input type="number" step="0.01" class="friend_cost">'
        ].join('');
        friendsContainer.appendChild(friendDiv);
    }
}

function calculateCost(e) {
    e.preventDefault();

    const fixedDeliveryCost = parseFloat(document.getElementById("fixed_delivery_cost").value);
    const numFriends = parseInt(document.getElementById("num_friends").value);
    const friendNames = document.getElementsByClassName("friend_name");
    const friendCosts = document.getElementsByClassName("friend_cost");
    const resultsDiv = document.getElementById("results");

    let totalCost = fixedDeliveryCost;
    let sharedDeliveryCost = fixedDeliveryCost / numFriends;
    resultsDiv.innerHTML = '';
    for (let i = 0; i < numFriends; i++) {
        const name = friendNames[i].value;
        const cost = parseFloat(friendCosts[i].value);
        totalCost += cost;
        const totalOwed = cost + sharedDeliveryCost;
        const resultP = document.createElement("p");
        resultP.textContent = name + ' owes $' + totalOwed.toFixed(2);
        resultsDiv.appendChild(resultP);
    }

    const totalCostP = document.createElement("p");
    totalCostP.textContent = 'Total cost including delivery: $' + totalCost.toFixed(2);
    resultsDiv.appendChild(totalCostP);
}

document.getElementById("restart").addEventListener("click", restartApp);

function restartApp() {
    document.getElementById("mealForm").reset();
    document.getElementById("results").innerHTML = '';
    document.getElementById("friends_container").innerHTML = '';
}


document.getElementById("add_friends").addEventListener("click", addFriends);
document.getElementById("mealForm").addEventListener("submit", calculateCost);