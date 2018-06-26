<template>
    <div :class="classname">    	
		<span class="vue-dropdown-header"><slot></slot></span>
		<ul class="vue-dropdown-body">
			<li v-for="item in data"><router-link :to="item.url">{{ item.title }}</router-link></li>
		</ul>
	</div>
</template>
<script>
export default {
    name: 'vue-dropdown',
    data: function(){
        return {
        	classname: 'vue-dropdown'
        }
    },
    props: ['data','cls'],
    created: function(){
        var that = this;
        this.classname = this.classname + ' vue-dropdown-' + ($util.empty(this.cls)?'default':this.cls);
    },
    methods: {
        
    }
}
</script>
<style lang="postcss" scoped>
.vue-dropdown {
	display: inline-block;	
	position: relative;
	margin-bottom: 0;	
	vertical-align: middle;	
	font-weight: normal;	
	white-space: nowrap;	
	border-radius: 0;
	cursor: pointer;
	outline: none;	
}
.vue-dropdown:hover {
	background-color: #19a7f0;
}
.vue-dropdown > .vue-dropdown-header {
	width:100%;
	display: inline-block;
	float: left;
	clear: both;
}
.vue-dropdown > .vue-dropdown-header::after {
	position: absolute;
    right: 8px;
    top: 10px;
    width: 0;
    height: 0;
    content: "";
    border-width: 5px 5px 0 5px;     /*border-width: 6px 6px 6px 6px;*/
    border-style: solid;
    border-color: #fff transparent;    /*red transparent transparent transparent;*/
    -webkit-transition: all .25s;
       -moz-transition: all .25s;
        -ms-transition: all .25s;
         -o-transition: all .25s;
            transition: all .25s;
}
.vue-dropdown > ul.vue-dropdown-body {
	position: absolute;
	width:100%;
	float: left;
	left: 0px;
	top: 28px;
	display: none;
}
.vue-dropdown > ul.vue-dropdown-body > .active, .vue-dropdown:hover > ul.vue-dropdown-body {
	display: block;
}
.vue-dropdown > ul.vue-dropdown-body, .vue-dropdown > ul.vue-dropdown-body li {
	float: left;
	list-style: none;
	clear: both;	
	line-height: 2;
}
.vue-dropdown > ul.vue-dropdown-body {
	width: auto;
	background-color: #ffffff;	
}
.vue-dropdown > ul.vue-dropdown-body li {
	width: 100%;
	padding-left: 6px;
	padding-right: 3px;
	background-color: #fff000;
	margin-bottom: 1px;
}
.vue-dropdown > ul.vue-dropdown-body li, .vue-dropdown > ul.vue-dropdown-body li a {
	display: block;	
}
.vue-dropdown > ul.vue-dropdown-body li:hover {
	background-color: #ffff00;
}
/* button */
.vue-dropdown-button {
	background-image: none;
	border: 1px solid transparent;
	line-height: 1.2;
	padding: 0.5em 1em;
	background-color: #3bb4f2;
}
.vue-dropdown-button > .vue-dropdown-header {	
	color: #ffffff;
	margin-right: 16px;
}
.vue-dropdown-button:hover {
	background-color: #19a7f0;
}
/* default */
.vue-dropdown-default {
	background-image: none;
	border: 1px solid transparent;
	line-height: 1em;
	padding: 0em 0em;
}
.vue-dropdown-default > .vue-dropdown-header {	
	color: #000000;
	margin-right: 16px;
}
.vue-dropdown-default:hover {
	background-color: #f3f3f3;
}
.vue-dropdown-default > .vue-dropdown-header::after {
	border-color: #000 transparent;
	right: 0em;
    top: 0.25em;
}
.vue-dropdown-default > ul.vue-dropdown-body li:hover {
	background-color: #ffff00;
}
.vue-dropdown-default > ul.vue-dropdown-body {
	top: 1.1em;
	left: -0.5em;	
}
</style>


