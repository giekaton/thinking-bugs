<template>
  <div class="header">

    <div style="max-width:640px;margin:0 auto;">
        
      <!-- Left side -->
      <div style="float:left;">
        <!-- #375471 -->
        <div @click="toTop" class="logo">
          <router-link :to="homePath">
            <div class="logo-icon"></div>
            <div class="logo-text heading">Thinking Bugs</div>
          </router-link>
        </div>
      </div>

      <!-- Right side -->
      <router-link v-if="this.$route.name == 'CbtApp'" to="/">
        <div class="app-button heading" style="width:34px;">
          ▷
        </div>
      </router-link>

      <router-link v-if="this.$route.name != 'CbtApp'" to="/cbt-app">
        <div class="app-button heading" style="width:75px;font-weight:bold;" title="Cognitive Behavioral Therapy App">
          CBT App
        </div>
      </router-link>

      <!-- New card -->
      <div v-if="this.$route.name == 'CbtApp'" @click.prevent="cardCreate" class="app-button heading" title="New record" style="font-weight:bold;margin-right:15px;width:55px;">
        New
      </div>

    </div>
    
  </div>

</template>

<script>

  export default {
    data() {
      return {
        homePath: '/',
        buttonContent: 'App'
      }
    },
    methods: {
      
      cardCreate: function() {
        this.$emit('header-new');
      },

      toTop: function() {
        window.scrollTo(0,0);
        if (this.$parent.menuOpen) {
          this.$parent.menuOpen = false;
        }
      },
      menuClick: function () {

        window.scrollTo(0, 0);
        if (this.$parent.menuOpen) {
          this.$router.push('cbt-app');
        }
        else {
          this.$router.push(this.homePath);
        }
      }
    },

    mounted: function() {

      if (this.$route.name == 'CbtApp') {
        this.$parent.menuOpen = true;
      }

    },

    updated: function() {
      if (this.$parent.menuOpen) {
        this.buttonContent = 'x';
      }
      else {
        this.buttonContent = 'App';
      }
    }
  }

</script>

<style>

.app-button {
  height:30px;
  padding-top:4px;
  border:1px solid #999999;
  border-radius:3px;
  width:45px;
  float:right;
  text-align:center;
  font-size:13px;
  margin-top:18px;
  cursor: pointer;
  text-decoration:none;
  background-color:#dce2e6;
}

.app-button:hover {
  background-color:#f5f7ff;
}

.app-button:active {
  background-color: #e9eff3;
}

.logo {
  margin-top:22px;
  cursor: pointer;
}

.logo-text {
  
  color:#000!important;
  /* margin-right:25px; */
  font-size:15px;
  border-bottom:0px!important;
  display:inline-block;
  /* font-weight: 600; */
  /* letter-spacing: 1px; */
  float:left;
  padding-left:10px;
  font-weight: bold;
  margin-top:1px;
}

.logo-icon {
  background-color: #c8ffaf!important;
  border: 2px solid rgb(38, 226, 0);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display:inline-block;
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
  background-color: #F1F1F2;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.1), 0 2px 10px 0 rgba(0,0,0,.15);
}

@media only screen and (max-width: 600px) {
  .header {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.top {
  position: absolute;
  height: 5px;
  width: 100%;
  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
}

/* Animated HAMBURGER menu */

.menu-wrapper {
  position: relative;
  float: right;
  width: 24px;
  top: 5px;
  height: 40px;
  cursor: pointer;
}

.hamburger-menu,
.hamburger-menu:after,
.hamburger-menu:before {
  width: 24px;
  height: 3px;
}

.hamburger-menu {
  position: relative;
  transform: translateY(25px);
  background: #757575;
  transition: all 0ms 150ms;
}
.hamburger-menu.animate {
  background: #F1F1F2;
}

.hamburger-menu:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 8px;
  background: #757575;
  transition: bottom 150ms 150ms cubic-bezier(0.23, 1, 0.32, 1), transform 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu:after {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  background: #757575;
  transition: top 150ms 150ms cubic-bezier(0.23, 1, 0.32, 1), transform 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 150ms cubic-bezier(0.23, 1, 0.32, 1), transform 150ms 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 150ms cubic-bezier(0.23, 1, 0.32, 1), transform 150ms 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

/* End of animated HAMBURGER menu */

</style>