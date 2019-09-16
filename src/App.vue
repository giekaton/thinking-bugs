<template>
  <div id="app" data-server-rendered="true" class="page-wrapper">

    <app-header @header-new="headerNew" />
    
    <div class="box" v-cloak>
      <div class="site-content">
        <router-view></router-view>
      </div>
    </div>
    
    <app-footer/>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {

  name: 'App',

  data() {
    return {
      menuOpen: false,
      version: 'v0.0.1-beta',
      createNew: false,
    };
  },

  computed: {

  },

  components: {
    appHeader: Header,
    appFooter: Footer,
  },

  watch: {

  },

  methods: {

    headerNew: function() {
      this.createNew = true;
    },
    
    toTop: function() {
      document.body.scrollTop = 0;
    },

    initialDataLoad: function () {
      let self = this;
    },
  },

  beforeMount() {

  },

  mounted () {

  }
  
};
</script>

<style>

h3 {
  margin-top: 30px;
  margin-bottom: 60px;
  line-height: 140%;
}

h1 {
  line-height: 120%;
  margin-top: 0px;
  font-size: 26px;
}

h4 {
  margin-top: 50px;
}

.site-content {
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 60px;

  @media (--desktop) {
    max-width: 1200px;
  }

}

  .link-basic {
    color: rgb(0, 174, 255);
    cursor: pointer;
  }

  .link-basic:hover {
    text-decoration: underline;
  }

  body {
  /* font-family: 'Work Sans', sans-serif; */
  font-family: 'Open Sans', sans-serif;
  color: #222;
  font-size: 15px;
  line-height: 23px;
}

::placeholder {
  color: rgb(202, 202, 202);
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 13px;
}



.font-smaller {
  font-size: 14px;
}


.te-div-text { 
  float:left;
  margin-left:4px;
  padding-top:0px; 
}

.small {
  font-size: 13px;
}

.strike {
  text-decoration: line-through;
}

.color-orange {
  color: orange;
}

a, a:link, a:visited, a:active, a:hover {
  color: #222;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  margin-bottom:10px;
  border-bottom: 2px solid #6ca8c580;
}

.link {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  margin-bottom: 0px!important;
  border-bottom: 2px solid #6ca8c580;
}

.link-icon {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
}

.underline {
  border-bottom: 1px solid grey;
}

.active:active {
  border-bottom: 1px solid grey;
}

html {
  position: relative;
  min-height: 100%;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

#app {
  height: 100%;
}

[v-cloak] {display: none}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.block-margin {
  margin-bottom:60px;
}

.block-image {
  margin-top:20px;
  min-height:100px;
  background-image:url(https://stress.toys/img/fidget-loader.gif);
  background-repeat:no-repeat;
  background-position:center center;
}

.block-rating-info {
  padding-top:3px;
}

.block-rating-info a {
  text-decoration: underline!important;
  color: #007EAB!important;
  border-bottom: 0px!important;
}

.block-rating {
  padding: 10px;
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: lightgoldenrodyellow;
}

.block-product {
  padding: 10px;
  border: 1px solid #999999;
  border-radius: 3px;
  text-align: center;
  margin-bottom: 20px;
}

.block-product-description {
  font-size: 14px;
  margin-bottom: -15px;
}

.block-bottom-text {
  padding-top: 25px;
  margin-bottom: -15px;
}

.social-icon-outer {
  float:left;
  width:30px;
  margin-right: 15px;
}

.social-icon {
  fill:rgb(226, 226, 226);
}

.social-icon:hover path {
  fill: rgb(255, 255, 255);
}

.social-icon-menu {
  fill:rgb(109, 109, 109);
}

.social-icon-menu:hover path {
  fill: rgb(202, 202, 202);
}

.empty-space {
  clear:both;
  height: 20px;
}

.icon-div {
  float:left;
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#ffdada;
  border: 1px solid rgb(255, 170, 170);
  margin-right:5px;
  text-align: center;
  padding-top: 8px;
  font-size:14px;
  margin-bottom:50px;
}

.icon-div-extra {
  float:left;
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#daf0ff;
  border: 1px solid #a4c9c2;
  margin-right:5px;
  text-align: center;
  padding-top: 8px;
  font-size:14px;
  margin-bottom:50px;
}


h2 {
  margin-top: 0px;
}

.pointer {
  cursor: pointer;
}


/* Layout */

.wrapper {
  height: 100%;
}

.box-outer {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: visible;
  /* padding: 10px; */
  /* padding-left: 13px;
  padding-right: 13px; */
  background-color: white;
  line-height: 18px;
  padding-top: 0px;
  margin: 0 auto;
}

.box {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
}

.te-div {
  width:50%;
  float:left;
  margin-bottom:30px;
  padding-right:10px;
}

.icon-text {
  padding-left: 52px;
}


/* Custom scrollbars */

/* ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
  background: #c5c5c5; 
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(180, 180, 180); 
} */


/* Mobile */

@media only screen and (max-width: 630px) {
  .box {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0px;
    border-radius: 0px;
  }
  .right-menu {
    margin-right: 6px;
  }
  .dig {
    margin-bottom: 15px;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 18px;
    
  }
  .sticky {
    padding-left: 5px;
  }
  /* ::-webkit-scrollbar {
    width: 5px;
  } */
  .te-div {
    display:block;
    width:100%;
  }
}
</style>