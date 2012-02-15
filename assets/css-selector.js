function $$(expr, con) { return [].slice.call((con || document).querySelectorAll(expr)); }
$$('.selector-snippet').forEach(function(field) {
	CSSEdit.elastic(field);
	window.Incrementable && new Incrementable(field);
	addEventListener('hashchange', interactive, false);
	interactive();
	function interactive() {
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
			}
	});
	
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
