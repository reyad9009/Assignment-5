// if click historyBtn hide Donation Section and  Show the  History section
function historyBtn() {
    const historySection = document.getElementById("history");
        historySection.classList.remove("hidden");

    const donationSection = document.getElementById("donation");
        donationSection.classList.add("hidden");

    //Donate first.   
    //const NoHistoryText = document.getElementById("noHistory")
     //   NoHistoryText.classList.remove("hidden");   

    //for change btn colour
    const changeHistoryColour = document.getElementById("historyColour");
        changeHistoryColour.classList.add('bg-[#b4f461]', "border-none");

    const changeDonationColour = document.getElementById("donationColour");
        changeDonationColour.classList.remove("bg-[#b4f461]");
        changeDonationColour.classList.add("border-black");
}

// if click DonationBtn hide History Section and Show the  Donation Section
function donationBtn(){
    const donationSection = document.getElementById("donation");
        donationSection.classList.remove("hidden");

    const historySection = document.getElementById("history");
        historySection.classList.add("hidden");

    //Donate first.   
    const NoHistoryText = document.getElementById("noHistory")
        NoHistoryText.classList.add("hidden"); 

    //for change btn colour
    const changeHistoryColour = document.getElementById("historyColour");
        changeHistoryColour.classList.remove('bg-[#b4f461]', "border-none");

    const changeDonationColour = document.getElementById("donationColour");
        changeDonationColour.classList.add("bg-[#b4f461]");
        changeDonationColour.classList.remove("border-black");

    const hideHistorys = document.getElementById("history");
        hideHistorys.classList.add("hidden");
}

// this function used for donation system & show donation history

function donateNowBtn(totalAmountId, donateForId, donationAmountId, myAmountId){
    //Input
    const inputAmount = document.getElementById(donationAmountId).value;
    let donatedAmount = parseFloat(inputAmount);

    //donated amount show and change it string to float
    const showingAmount = document.getElementById(totalAmountId);
    let currentAmount = parseFloat(showingAmount.innerText);

    //my account money 
    const myCurrentAmount = document.getElementById(myAmountId);
    let myAmount = parseFloat(myCurrentAmount.innerText);


    if(!isNaN(donatedAmount) && donatedAmount > 0){

        if(donatedAmount <= myAmount){
            const intotalAmount = donatedAmount + currentAmount;
                showingAmount.innerText = intotalAmount; 

            const myNewAmount = myAmount - donatedAmount;
                myCurrentAmount.innerText = myNewAmount;

            // Show history section if hidden
            const historySection = document.getElementById("history");
               historySection.classList.remove("hidden");

            // Create a div for new history section
            const newHistory = document.createElement("div");
                newHistory.classList.add("text-black", "font-extrabold", "text-xl", "mb-10", "p-8","rounded-xl", "border-[1px]", "border-[#cacaca]");

            // Add span tag in div for store donated amount
            const donatedAmountHistory = document.createElement("span");
                donatedAmountHistory.innerText = `${donatedAmount} Taka is `;

            //Add span tag in div for store description 
            const amountDonateFor = document.getElementById(donateForId).innerText;
            const description = document.createElement("span");
                description.innerText = `${amountDonateFor}`;

            //Add div for store date and time
            const currentDate = new Date();
            const donatedTime = document.createElement("div");
                donatedTime.classList.add("text-sx", "font-normal", "mt-2");
                donatedTime.innerText = `Date: ${currentDate}`;

            // Append amount, description, date & time to the new history
            newHistory.appendChild(donatedAmountHistory);
            newHistory.appendChild(description);
            newHistory.appendChild(donatedTime);

            // Append the new history section
            historySection.appendChild(newHistory);

            const showCongratesPopup = document.getElementById("congratesPopup");
                showCongratesPopup.classList.remove("hidden");

        }

        else if (donatedAmount >= myAmount){
            alert("Your balance is zero");
        }
    } 

    else if(donatedAmount < 0){
        alert("Invalid donation Amount");
    }

    else{
        alert("Invalid donation Amount");
    }
}







donateNowBtn('totalAmoumt', 'donateFor', 'donationAmount', 'myAmount');
donateNowBtn('totalAmoumt2', 'donateFor2', 'donationAmount2', 'myAmount');
donateNowBtn('totalAmoumt3', 'donateFor3', 'donationAmount3', 'myAmount');


function closeConfirmation(){
    const showCongratesPopup = document.getElementById("congratesPopup");
        showCongratesPopup.classList.add("hidden");


}
// Call donateNowBtn function for every card









