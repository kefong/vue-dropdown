import view from './components/view'
import Vue from 'vue'
var Dropdown = {
	    bus: new Vue(),
	    opts: {
	        type: 'down',    //down,heng
	    }
	}
	Dropdown.install = function(Vue, options){
	    var that = this;
	    Vue.component(view.name, view);
	    // opt
	    for (var property in options) {
	    	Dropdown.opt[property] = options[property];
	    }
	}
	export default Dropdown;