<template>
  <div id="app" data-server-rendered="true" class="page-wrapper">

    <app-header @header-new="headerNew" />
    
    <div class="box" id="scroll-to-top" v-cloak>
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
      themeLight: true,
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

    themeSwitch: function() {
      
      if (this.themeLight) {
        document.body.setAttribute('data-theme', 'dark');

        dexie.props.put({prop_name: 'theme', prop_value: 'dark'})
          .catch(e => {console.log('errorThemeSwitchDB', e)})
          .then(e => {
            if (this.$route.name == 'CbtApp') {
              scrollTo(document.getElementById('scroll-to-top'), 0, 0);
            }
          });

        // this.$cookies.set('lcTheme', 'dark', Infinity);
        // console.log(this.$cookies.get('lcTheme'));
        
        
      }
      else {
        document.body.removeAttribute('data-theme');

        dexie.props.put({prop_name: 'theme', prop_value: 'light'})
          .catch(e => {console.log('errorThemeSwitchDB', e)})
          .then(e => {
            if (this.$route.name == 'CbtApp') {
              scrollTo(document.getElementById('scroll-to-top'), 0, 0);
            }
          });

        // this.$cookies.set('lcTheme', 'light', Infinity);
        // console.log(this.$cookies.get('lcTheme'));

        
      }
      this.themeLight = !this.themeLight;
    },
  },

  beforeMount() {
    dexie.props.get('theme', (e)=>{
      let dbTheme = e.prop_value;
      if (typeof(dbTheme) == 'undefined' || dbTheme == 'light') {
        this.themeLight = true;
        document.body.removeAttribute('data-theme');
      }
      else {
        this.themeLight = false;
        document.body.setAttribute('data-theme', 'dark');
      }
    });
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
    font-Size: 15px;
    color: var(--color-font);
    line-height: 140%;
    background-color: var(--color-bg);
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
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    line-height: 120%;
    font-size: 1.6em;
    margin-bottom:-5px;
  }

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


  .h5px {
    clear: both;
    height: 5px;  
  }

  .h10px {
    clear: both;
    height: 10px;  
  }

  .h15px {
    clear: both;
    height: 15px;  
  }

  .h20px {
    clear: both;
    height: 20px;  
  }

  .bug-spacer {
    height: 5px;
  }

  .content-contribution {
    border:1px solid #999;
    background-color: #f1f1f1;
    padding: 14px 25px 18px 25px;
    border-radius: 3px;
    margin-top: 80px;
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

  .icon-text {
    padding-left: 55px;
    padding-top: 5px;
  }

  .bug-link:hover span:first-of-type { 
    text-decoration: underline; 
  }


  /* THEMES */
  :root {
    /* --color-bg: #342d52; */
    /* --color-bg: #151129; */

    /* --color-bg: #1c1a25; */
    /* --color-bg: #110f1b; */
    --color-logo: #e8e8e8;
    --color-bg: #1f1e21;

    --color-font: #f7f7f7;
    /* --color-font: #e6e6e6; */
    /* --color-bg-header: #342d52; */
    /* --color-bg-header: #0f0c1d; */
    --color-bg-header: #201d2b;
    --color-borderbottom-header: 1px solid #6f7d81;
    --color-a: #7bb6e8;
    --color-svg-contrast: #ffffff;
    --color-svg-logo: #ffffff;
    --color-logo-text: #ffffff;
    /* --color-bg-footer: #342d52; */
    --color-bg-footer: #201d2b;
    --color-bordertop-footer: 1px solid #6f7d81;
    --color-np-loading:rgb(238, 238, 238);
    /* --color-button-check-bg: #3c3750;
    --color-button-check-border: #998dc7; */
    --color-button-check-bg: #33333e;
    --color-button-check-border: #9c9c9c;
    --color-button-text: #d0d0d0;

    --color-input-text: #e6e6e6;
    --color-input-background: #252535;
    --color-input-underline: #d5d5d5;

    --header-bg: #444;

    --app-button-bg: #454545;
    --app-button-hover: #555;
    --app-button-active: #565656;
    --app-button-text: #f9f9f9;

    --app-button-2-bg: #333;
    --app-button-2-hover: #3d3d3d;
    --app-button-2-active: #424242;
    --app-button-2-border: #adb0b1;
    --app-button-2-text: #e0e0e0;

    --app-button-3-bg: #333;
    --app-button-3-hover: #3d3d3d;
    --app-button-3-active: #424242;
    --app-button-3-border: #7e7e7e;
    --app-button-3-text: #f9f9f9;

    --bug-bg: #ffbdbd;

    --theme-switch-icon-fill: #fff;
    
    --content-quickstart-bg:#222;
    --content-quickstart-border:#444;

    --textarea-color: #f5f5f5;
    --border: #555;
    --bug-off-bg: #9a9a9a;
    --bug-off-border: rgb(130, 130, 130);
    --card-move-fill: white;
    --error-title-grey: #6c6c6c;

    --card-errors-bg: #001c38;
    --textarea-font: 'Nunito', sans-serif;
    --error-title: 'Nunito', sans-serif;

    --record-error-fixed-circle-bg: #a6de8c;
    /* --record-error-fixed-circle-bg: #a7d690; */
    --record-error-fixed-circle-border: rgb(31, 187, 0);

    /* --record-error-fixed-circle-bg: #3384bd;
    --record-error-fixed-circle-border: rgb(0, 132, 226); */

    --textarea-cbt-record-thought-padding: 4px 2px 6px 2px;
    --textarea-cbt-record-bug-padding: 3px 2px 6px 2px;   
  }


  [data-theme="dark"] {
    --color-logo: #000;
    --color-bg: #ffffff;
    --color-font: #303030;
    --color-bg-header: #ffffff;
    --color-borderbottom-header: 1px solid #dddddd;
    /* --color-a: #5a43ce; */
    /* --color-a: #467ed2; */
    --color-a: #467ed2;
    --color-svg-contrast: #342D52;
    --color-svg-logo: #39298c;
    --color-logo-text: #222222;;
    --color-bg-footer: #ffffff;
    --color-bordertop-footer: 1px solid #dddddd;
    --color-np-loading:#42318C;
    --color-button-check-bg: #868686;
    --color-button-check-border: #b9b9b9; 
    /* --color-button-check-bg: #3c3750;
    --color-button-check-border: #998dc7; */
    --color-button-text: #fff;

    --color-input-underline:rgb(109, 109, 224);

    --app-button-bg: #dce2e6;
    --app-button-bg-hover: #e7ecee;
    --app-button-active: #e9eff3;
    --app-button-text: #325ea0;

    --app-button-2-bg: #dce2e6;
    --app-button-2-hover: #e7ecee;
    --app-button-2-active: #e9eff3;
    --app-button-2-border: #adb0b1;
    --app-button-2-text: #1b1b1b;

    --app-button-3-bg: #676767;
    --app-button-3-hover: #6f6f6f;
    --app-button-3-active: #858585;
    --app-button-3-border: #8e8e8e;
    --app-button-3-text: #f9f9f9;

    --bug-bg: #FFDADA;

    --header-bg: #F1F1F2;

    /* --theme-switch-icon-fill: #201D2B; */
    /* --theme-switch-icon-fill: #3dbdff; */
    --theme-switch-icon-fill: #e2e2e2;

    --content-quickstart-bg:#f1f1f2;
    --content-quickstart-border:#bdbdbd;

    --textarea-color: #000;
    --border: #b6b6b6;
    --bug-off-bg: #e2e2e2;
    --bug-off-border: rgb(180, 180, 180);
    --card-move-fill: black;
    --error-title-grey: #b4b4b4;

    /* --card-errors-bg: #e5ffc2; */
    /* --card-errors-bg: #f1ffcc; */
    --card-errors-bg: #FFFFCC;
    --textarea-font: 'Times New Roman', Times, serif;
    --error-title: 'Times New Roman', Times, serif;

    --record-error-fixed-circle-bg: #c8ffaf;
    --record-error-fixed-circle-border: rgb(38, 226, 0);

    --textarea-cbt-record-thought-padding: 6px 2px 2px 2px;
    --textarea-cbt-record-bug-padding: 0px 2px 2px 2px;
  }

  /* .textarea-cbt-record-thought {
    padding: var(--textarea-cbt-record-thought-padding);
  } */

  /* .textarea-cbt-record-bug {
    padding: var(--textarea-cbt-record-bug-padding);
  } */



  /* #theme-switch-icon {
    fill:var(--theme-switch-icon-fill);
  } */


  a, a:link, a:visited {
    /* color: #467ed2; */
    color: var(--color-a);
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

  a, a:visited, a:active, a:hover {
    color:var(--color-a);
  }
  
  .bug-link:a, .bug-link:a-visited  {
    color: black;
  }

  .link {
    color: #016e96;
    /* border-bottom: 1px solid rgb(0, 200, 255); */
    font-size: 16px;
  }

  .links-content a:hover {
    text-decoration: underline;
  }

  .menu-link {
    /* display:inline-block; */
    float: right;
    top: 15px;
  }

  .app-button {
    height:30px;
    padding-top:4px;
    border:1px solid #adb0b1;
    border-radius:3px;
    width:45px;
    float:right;
    text-align:center;
    font-size:13px;
    margin-top:18px;
    cursor: pointer;
    text-decoration:none;
    color: var(--app-button-color);
    background-color:var(--app-button-bg);
  }

  .app-button:hover {
    /* background-color:var(--app-button-hover); */
    filter: brightness(110%);
  }

  .app-button:active {
    /* background-color:var(--app-button-active); */
    filter: brightness(110%);
  }

  .app-button-2 {
    width: 86px;
    margin-right: 10px;
    border:1px solid  var(--app-button-2-border);
    color:#666!important;
    border-radius:3px;
    float:left;
    text-align:center;
    font-size:14px;
    padding:5px;
    cursor: pointer;
    text-decoration:none;
    color: var(--app-button-2-text)!important;
    background-color:var(--app-button-2-bg);
    margin-top:15px;
  }

  .app-button-2:active,
  .app-button-2:hover,
  .app-button:hover,
  .app-button:active {
    filter: brightness(110%);
  }

  .app-button-3 {
    width: 86px;
    border:1px solid  var(--app-button-3-border);
    border-radius:3px;
    float:left;
    text-align:center;
    font-size:14px;
    height: 30px;
    padding-top: 4px;
    margin-top: -2px;
    cursor: pointer;
    text-decoration:none;
    color: var(--app-button-3-text)!important;
    background-color:var(--app-button-3-bg);
  }

  .app-button-3:hover {
    /* background-color:var(--app-button-3-hover); */
    filter: brightness(110%);
  }

  .logo {
    width:144px;
    margin-top:22px;
    cursor: pointer;
  }

  .logo-text {
    color:var(--color-logo)!important;
    font-size:15px;
    border-bottom:0px!important;
    display:inline-block;
    padding-left:10px;
    font-weight: bold;
    margin-top:2px;
    letter-spacing: 0.5px;
  }

  .logo-icon {
    background-color: #c8ffaf!important;
    border: 2px solid rgb(38, 226, 0);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    float:left;
  }

  .button-new {
    float:right;
    width:22px;
    height:22px;
    margin-right:30px;
    margin-top:21px;
  }

  .header {
    margin-bottom: 80px;
  }

  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    max-width: 100%;
    margin: 0 auto;
    z-index: 10;
    height: 66px;
    background-color: var(--header-bg);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1), 0 2px 10px 0 rgba(0,0,0,.15);
  }


  @media screen and (max-width:680px) {
    .site-content {
      padding-left: 40px;
      padding-right: 40px;
    }
    .header {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media screen and (max-width:550px) {
    .site-content {
      padding-left: 30px;
      padding-right: 30px;
    }
    .header {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media screen and (max-width:450px) {
    .site-content {
      padding-left: 20px;
      padding-right: 20px;
    }
    .header {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .top {
    position: absolute;
    height: 5px;
    width: 100%;
    background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
  }

  .icon-div {
    float:left;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color: var(--bug-bg);
    border: 1px solid rgb(255, 170, 170);
    margin-right:5px;
    text-align: center;
    padding-top: 8px;
    font-size:14px;
    color: black;
    font-weight: bold;
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

  .content-quickstart {
    background-color:var(--content-quickstart-bg);
    border: 1px solid var(--content-quickstart-border);
  }

  .card-errors {
    background-color: var(--card-errors-bg);
  }

  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
  }
</style>