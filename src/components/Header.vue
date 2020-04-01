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
        <div @click="enterCBT()" v-if="this.$route.name != 'CbtApp'" class="app-button heading noselect" style="width:75px;font-weight:bold;float:right;" title="Cognitive Behavioral Therapy App">
          CBT App
        </div>
      </div>

      <!-- In App -->
      <div v-if="this.$route.name == 'CbtApp'" @click="exitCBT()" class="app-button heading noselect" style="width:34px;">
        ▷
      </div>

      <div style="float:right;">
        <div v-if="this.$route.name == 'CbtApp'" @click.prevent="cardCreate" class="app-button heading noselect" style="font-weight:bold;margin-right:15px;width:55px;">
          New
        </div>
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

</style>