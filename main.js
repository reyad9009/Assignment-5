// if click historyBtn hide Donation Section and  Show the  History section
function historyBtn() {
    const historySection = document.getElementById("history");
        historySection.classList.remove('hidden');

    const donationSection = document.getElementById("donation");
      donationSection.classList.add('hidden');
           
}

// if click DonationBtn hide History Section and Show the  Donation Section
function donationBtn(){
    const donationSection = document.getElementById("donation");
        donationSection.classList.remove("hidden");

    const historySection = document.getElementById("history");
        historySection.classList.add('hidden');

}
//////////////////////////////////////////////////////////////

function donateNowBtn(){

    const inputAmount = document.getElementById("donationAmount").value;
    let donatedAmount = parseFloat(inputAmount);

    const showingAmount = document.getElementById("totalAmoumt");
    let currentAmount = parseFloat(showingAmount.innerText);

    const myCurrentAmount = document.getElementById("myAmount");
    let myAmount = parseFloat(myCurrentAmount.innerText);


    if(!isNaN(donatedAmount) && donatedAmount > 0){

        if(donatedAmount <= myAmount){
            const intotalAmount = donatedAmount + currentAmount;
            showingAmount.innerText = intotalAmount; 

            const myNewAmount = myAmount - donatedAmount;
            myCurrentAmount.innerText = myNewAmount;
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






