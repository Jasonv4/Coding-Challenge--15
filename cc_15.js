// Task 1 Creating the Basic Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("risk dashboard loaded") ; 


//Task 2 Adding Risk Items Dynamically 
function addRiskItem (riskName, riskLevel, department )
{const riskCard = document.createElement("div");
    riskCard.classList.add ="riskcard" ;
    
    riskCard.innerHTML = `
    <p>${riskName}</p>
    <p> Risk Level: ${riskLevel}</p>
    <p> Department: ${department}</p>
    `
    riskDashboard.appendChild(riskCard);
    
    
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");