
//toggle for activating
let toggleContainer = document.querySelector(".toggle")
let toggleButton = document.querySelector(".toggle-button")

let yearly = 0


toggleContainer.addEventListener("click", function(){
	toggleContainer.classList.toggle("toggle-active");
	toggleButton.classList.toggle("toggle-button-active");

	if (yearly === 0){
		yearly = 1;
	} else {
		yearly =0;
	}
	checkYearly()	
	inputValue()


});


//slider step values

let sliders = document.querySelector(".slider")
let pageviewBox = document.querySelector(".pageviews")
let priceBox = document.querySelector(".price-box")
let priceBoxMobile = document.querySelector(".price-box-mobile")

let shadow = document.querySelector(".shadow")


let page = ["10K PAGEVIEWS", "50K PAGEVIEWS", "100K PAGEVIEWS", "500K PAGEVIEWS", "1M PAGEVIEWS"]
let price1 = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"]
let price2 = ["$6.00", "$9.00", "$12.00", "$18.00", "$27.00"]
let inputnumber = 2
let outputview = "100K PAGEVIEWS"
let outputprice = "$16"

function inputValue(){
	pageviewBox.innerHTML = outputview;
	priceBox.innerHTML = outputprice + '&nbsp;';
	priceBoxMobile.innerHTML = outputprice + '&nbsp;';
}

function checkYearly(){
	if (yearly === 0){
		outputview = page[inputnumber];
		outputprice = price1[inputnumber];
	} else {
		outputview = page[inputnumber];
		outputprice = price2[inputnumber];
	}
}

function shadowFollow(){
	shadow.style.width = sliders.value + "%";
	
}


inputValue()

sliders.addEventListener("input", function(){
	this.setAttribute('value',this.value);
	inputnumber = sliders.value/25;


	checkYearly()	
	inputValue()
	shadowFollow()

})



butt()






