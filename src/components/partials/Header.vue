<template>
  <div class="header">
    
    <!-- <div class="top"></div> -->

    <div style="max-width:640px;margin:0 auto;">
        
      <!-- Left side -->
      <div style="float:left;margin-top:16px;">
        <!-- #375471 -->
        <div @click="toTop">
        <router-link :to="homePath" class="logo" >
          Thinking Errors
        </router-link>
        </div>
      </div>

      <!-- Right side -->

      <div v-if="$parent.menuOpen" @click="menuClick" class="app-button" style="width:28px;">
        ▷
      </div>

      <div v-if="!$parent.menuOpen" @click="menuClick" class="app-button" style="width:66px;" title="Cognitive Behavioral Therapy App">
        CBT App
      </div>

      <!-- New card -->
      <div v-if="$parent.menuOpen" @click.prevent="$parent.cardCreate" class="app-button" title="New record" style="margin-right: 25px; padding-left: 4px; padding-right: 7px; width: 40px;">
        New
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        homePath: homePath,
        homeThemeAssetsPath: homeThemeAssetsPath,
        buttonContent: 'App'
      }
    },
    methods: {
      toTop: function() {
        window.scrollTo(0,0);
        if (this.$parent.menuOpen) {
          this.$parent.menuOpen = false;
          this.$router.push(this.homePath);
        }
      },
      menuClick: function () {
        this.$parent.menuOpen = !this.$parent.menuOpen;
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
</style>