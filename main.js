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





