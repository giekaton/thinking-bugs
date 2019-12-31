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
      version: 'v0.0.2-beta',
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
html {
  position: relative;
  min-height: 100%;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;  
  font-family: 'Nunito', sans-serif;
  Font-Size: 15px;
  color: #222;
  line-height: 140%;
}

#app {
  height: 100%;
}


[v-cloak] {display: none}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

h1 {
  font-family: 'Nunito';
  font-weight: 600;
  line-height: 120%;
  font-size: 1.6em;
  margin-bottom:-5px;
}

/* h2 {

} */

h3 {
  margin-bottom: 50px;
  line-height: 150%;
  font-size: 18px;
  font-weight: normal;
}

h4 {
  font-weight: bold;
  margin-top: 50px;
  font-size: 16px;
}


.site-content {
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 60px;
}

.bug-title {
  font-weight:bold;
  font-size: 16px;
  /* text-decoration: underline; */
}

::placeholder {
  color: rgb(202, 202, 202);
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 13px;
}

.te-div-text { 
  float:left;
  margin-left:4px;
  padding-top:0px; 
}

a, a:link, a:visited {
  color: #467ed2;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  margin-bottom:10px;
}

a:active, a:hover {
  text-decoration: underline;
}

.bug-link:a, .bug-link:a-visited  {
  color: black;
}

.bug-spacer {
  height: 5px;
}

.link {
  color: #016e96;
  /* border-bottom: 1px solid rgb(0, 200, 255); */
  font-size: 16px;
}

/* .link {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  margin-bottom: 0px!important;
  border-bottom: 2px solid #6ca8c580;
} */

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
  color: black;
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
  max-width:305px;
  float:left;
  margin-bottom:70px;
}

@media screen and (min-width:600px) {
  .te-div:not(:nth-child(2n)) {
    margin-right:30px;
  }
}

@media screen and (max-width:600px) {
  .site-content {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.icon-text {
  padding-left: 55px;
  padding-top: 5px;
}

/* .icon-text:nth-child(2):hover {
  text-decoration:underline;
  cursor:pointer;
} */

/* .bug-link:hover:nth-child(3) {
  text-decoration: underline!important;
} */

.bug-link:hover span:first-of-type { text-decoration: underline; }

/* .bug-link span:first-of-type { text-decoration: underline!important; } */





</style>