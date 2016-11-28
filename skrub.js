(function(window){
	'use strict'; // only applies to this function

	// This function will contain all our code
	function Skrub(){
		// Private variables
		var document = window.document;
		var settings = {};
		
		// Public functions / variables
		var _public = {};
		_public.text = {};
		_public.dom  = {};

		 _public.text.substringByStrings = function(mainString, string1, string2) {
			/*
				gets a substring between two strings in a given string
				
				example:
					params: {mainString: "We have 5 dogs", string1: "have ", string2: " "}
					output: "5"
			*/
			return mainString.substring(
				mainString.indexOf(string1)+string1.length,
				mainString.indexOf(string2, mainString.indexOf(string1)+string1.length)
			);
		};
		
		_public.dom.insertAfter = function(newElement, referenceElement) {
			/*
				adds an element after a reference element
			*/
			referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
		};
		
		_public.dom.eventFire = function(el, etype) {
			/*
				fires an event on the given element
				* used from http://stackoverflow.com/questions/2705583/simulate-click-javascript
			*/
			if (el.fireEvent) {
				(el.fireEvent('on' + etype));
			} else {
				var evObj = document.createEvent('Events');
				evObj.initEvent(etype, true, false);
				el.dispatchEvent(evObj);
			}
		};
		
		_public.dom.interval = function(wait, times, runImmediately, func){
			/*
				this function will execute code at an interval.
				you can also specify how many times max it should run, and if it should run immediately.
				to stop the interval, simple throw something in the function. throw undefined if there's nothing to catch.
				the supplied function will be given the current iteration of the interval as a parameter, starting from 0.
				* modified from http://www.thecodeship.com/web-development/alternative-to-javascript-evil-setinterval/
			*/
			var interv = function(w, t){
				var iterationIndex = 0;
				return function(){
					if(typeof t === "undefined" || t == null || t === false || t-- > 0){
						setTimeout(interv, w);
						try {
							func.call(null, iterationIndex);
						}
						catch(e){
							t = 0;

							if (typeof e === "undefined") {
								return;
							} else {
								throw e;
							}
						}
						iterationIndex++;
					}
				};
			}(wait, times);

			if (runImmediately) {
				interv();
			} else {
				setTimeout(interv, wait);
			}
		};

		return _public;
	}

	// Make the library globally available
	if (typeof(window.Skrub) === 'undefined') {
		window.Skrub = Skrub();
	}
})(window); // Allow window access in Skrub