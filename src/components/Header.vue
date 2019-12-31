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
      <span v-if="this.$route.name == 'CbtApp'" @click="exitCBT()">
        <div class="app-button heading" style="width:34px;color:#325ea0;">
          ▷
        </div>
      </span>

      <span @click="enterCBT()" v-if="this.$route.name != 'CbtApp'">
        <div class="app-button heading" style="width:75px;font-weight:bold;color:#325ea0;" title="Cognitive Behavioral Therapy App">
          CBT App
        </div>
      </span>

      <!-- New card -->
      <div v-if="this.$route.name == 'CbtApp'" @click.prevent="cardCreate" class="app-button heading" title="New record" style="color:#325ea0;font-weight:bold;margin-right:15px;width:55px;">
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
        lastBug: '/',
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
      },

      enterCBT: function() {
        this.lastBug = this.$route.path;
        this.$router.push('/cbt-app');
      },

      exitCBT: function() {
        this.$router.push(this.lastBug);
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
  border:1px solid #adb0b1;
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
  background-color:#e7ecee;
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
  margin-top:2px;
  letter-spacing: 0.5px;
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


</style>