import "@theme/front/init.scss";

import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "jquery/dist/jquery.min";

import "nette.ajax.js/nette.ajax";
import naja from "naja";

// import "@/front/cookie";

import Nette from "@/front/netteForms";
Nette.initOnLoad();
window.Nette = Nette;


// on scroll events
const $nav = document.querySelector("#navbar");
const $scrollTopBtn = document.querySelector("#scrollTopBtn");
const links = document.querySelectorAll(".nav-link");
const navbarUl = document.querySelector("#navbarToggler");

function runOnScroll() {
	var currentScrollPos = window.pageYOffset;

	if ((currentScrollPos > 0 && window.innerWidth <= 992) || (currentScrollPos > 110 && window.innerWidth > 992)) {
		$nav.classList.add("navbar-bg");
	} else if (currentScrollPos < 190) {
		$nav.classList.remove("navbar-bg");
	}

	if (currentScrollPos > window.innerHeight) {
		$scrollTopBtn.style.display = "block";
	} else {
		$scrollTopBtn.style.display = "none";
	}

}

document.addEventListener("DOMContentLoaded", () => {
	naja.initialize();

	// close navbar on link click
	links.forEach((link) => {
		link.addEventListener("click", () => {
			if (navbarUl.classList.contains("show")) {
				navbarUl.classList.remove("show");
			}
		});
	});

	//gdpr
	$(".gdpr button").click(function() {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 10);
		document.cookie = "gdpr=1; path=/; expires=" + date.toGMTString();
		$(".gdpr").hide();
	});

	// on scroll events
	// eslint-disable-next-line no-undef
	runOnScroll();
	// eslint-disable-next-line no-undef
	window.addEventListener("scroll", runOnScroll);

	// smooth scroll
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$(".scroll").on("click", function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$("html, body").animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});
});
