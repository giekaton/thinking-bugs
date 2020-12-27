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
      <div style="float:right;">
        <div @click="enterCBT()" class="app-button heading noselect" style="width:75px;font-weight:bold;float:right;" title="Cognitive Behavioral Therapy App">
          CBT App
        </div>

        <div class="theme-switch">
          <div @click="$parent.themeSwitch" id="theme-switch-icon" class="noselect" style="width:18px;" title="Switch theme">
            <svg v-if="!$parent.themeLight" id="svg-contrast" viewBox="0 0 893 893"><title>Switch theme</title><path d="M130.78,130.78A445.22,445.22,0,1,0,272.69,35.1,444.95,444.95,0,0,0,130.78,130.78ZM446.5,818A371.5,371.5,0,0,1,183.81,183.81,369.07,369.07,0,0,1,446.5,75V818Z" style="fill:#444;fill-rule:evenodd"/></svg>
            <svg v-else id="svg-contrast" viewBox="0 0 893 893"><title>Switch theme</title><path d="M130.78,130.78A445.22,445.22,0,1,0,272.69,35.1,444.95,444.95,0,0,0,130.78,130.78ZM446.5,818A371.5,371.5,0,0,1,183.81,183.81,369.07,369.07,0,0,1,446.5,75V818Z" style="fill:#fff;fill-rule:evenodd"/></svg>
          </div>
        </div>
      </div>

      <!-- In App -->
      <!-- <div v-if="this.$route.name == 'CbtApp'" @click="exitCBT()" class="app-button heading noselect" style="width:34px;">
        ▷
      </div>

      <div style="float:right;">
        <div v-if="this.$route.name == 'CbtApp'" @click.prevent="cardCreate" class="app-button heading noselect" style="font-weight:bold;margin-right:15px;width:55px;">
          New
        </div>
      </div> -->

    </div>
    
  </div>

</template>

<script>

  export default {
    data() {
      return {
        homePath: '/',
        lastBug: '/',
        buttonContent: 'App',
        // themeLight: true
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
      },
      

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
  .theme-switch {
    float:right;
    cursor:pointer;
    padding-top:24px;
    padding-right:34px;
  }

  @media screen and (max-width: 400px) {
    .theme-switch {
      padding-right: 25px;
    }
  }
</style>