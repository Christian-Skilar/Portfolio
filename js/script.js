// Select DOM items
const navLink = document.querySelectorAll(".navigation__item"); // nav item class
const checkbox = document.querySelector(".navigation__checkbox"); //checkbox class

// Add Event Listener to every nav link
for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", checkboxOff);
}

// Uncheck checkbox
function checkboxOff() {
	checkbox.checked = false;
}


//---------- HIDE "HOVER ME" ICON  AND TEXT

function hideArrow() {
	const arrow = document.querySelector(".arrow")
	arrow.style.opacity = "0";
}

//---------- SHOW MORE/LESS BUTTON PORTFOLIO

const showAll = document.querySelector(".more-cards");
const showHideBtn = document.querySelector(".read-more");

showHideBtn.addEventListener("click", (event)=> {
	showAll.classList.toggle("show-hide");

	if(showHideBtn.innerHTML === "Show All"){
		showHideBtn.innerHTML = "Hide";
	} else{
		showHideBtn.innerHTML = "Show All";
	}
})

//---------- SHOW MORE/LESS BUTTON SKILL/EDUCATION

const showEducation = document.querySelector(".learned");
const showHideEducation = document.querySelector(".education");

showHideEducation.addEventListener("click", (event)=> {
	showEducation.classList.toggle("show-btn");

	if(showHideEducation.innerHTML === "More Details"){
		showHideEducation.innerHTML = "Hide";
	} else{
		showHideEducation.innerHTML = "More Details";
	}
})

//---------- NEON NAME

const neonName = document.querySelector(".neon");

neonName.addEventListener("click", (event)=> {
	neonName.classList.toggle("neon-click");

})
