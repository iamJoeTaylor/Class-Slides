

	var snippets = document.querySelectorAll('.snippet');
	for(var i=0; i<snippets.length; i++) {
		new CSSSnippet(snippets[i]);
	}

	var cssControls = document.querySelectorAll('.css-control');
	for(var i=0; i<cssControls.length; i++) {
		new CSSControl(cssControls[i]);
	}


	//console.log("here");
  document.addEventListener('DOMContentLoaded', function()	{
	
	
	$$('.selector-snippet').forEach(function(field) {
		CSSEdit.elastic(field);
		window.Incrementable && new Incrementable(field);
		addEventListener('hashchange', interactive, false);
		interactive();
		function interactive() {
			if (isDescendant($$('.current')[0], field)) {

				field.css = document.createElement('style');
				document.head.appendChild(field.css);
				(field.oninput = field.onkeyup = function () {
					var prefix = this.getAttribute('data-prefix') || '.slide ';
					selector = this.value.replace(/(^|,\s*)/g, '$1' + prefix),
					unselected = this.getAttribute('data-style-unselected') || '';
					if(unselected) {
						var unSelector = prefix;
						// Add star if it ends in a combinator
						if(/\s*(>|\+|~|\s)\s*$/.test(prefix)) {
							unSelector += '*';
						}
						unselected = unSelector + '{' + unselected + '}';
					}
					this.css.innerHTML = unselected + selector + '{' + this.getAttribute('data-style') + '}';
					}).call(field);
			}else if(field.css) {
				document.head.removeChild(field.css);
				field.css = null;
			}

		}
	});
	
	
}, false);
	
	
	if (!Array.prototype.forEach)
	{
	  Array.prototype.forEach = function(fun /*, thisp*/)
	  {
	    var len = this.length;
	    if (typeof fun != "function")
	      throw new TypeError();

	    var thisp = arguments[1];
	    for (var i = 0; i < len; i++)
	    {
	      if (i in this)
	        fun.call(thisp, this[i], i, this);
	    }
	  };
	}
	
	function isDescendant(parent, child) {
	     var node = child.parentNode;
	     while (node != null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	}
