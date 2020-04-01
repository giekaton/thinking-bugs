<template>
  <div>
    <div class="footer-top-space"></div>
    <div class="footer site-footer">
      <div class="footer-content">
        
        <router-link to="/about">
          <div class="app-button-3 noselect">About</div>
        </router-link>

        <div style="display:inline-block;width:22px;padding-top:1px;margin-left:34px;" class="noselect">
          <a href="https://github.com/giekaton/thinking-bugs" title="GitHub" target="_blank">
            <svg viewBox="0 0 124.11 124.11"><title>GitHub</title><path d="M411.45,335a62.06,62.06,0,0,0-19.61,120.94c3.1,0.57,4.24-1.35,4.24-3,0-1.47-.05-5.38-0.08-10.55-17.26,3.75-20.9-8.32-20.9-8.32-2.82-7.17-6.89-9.08-6.89-9.08-5.63-3.85.43-3.77,0.43-3.77,6.23,0.44,9.51,6.39,9.51,6.39,5.53,9.48,14.52,6.74,18.06,5.16,0.56-4,2.17-6.74,3.94-8.3-13.78-1.57-28.27-6.89-28.27-30.67a24,24,0,0,1,6.39-16.65c-0.64-1.57-2.77-7.88.61-16.42,0,0,5.21-1.67,17.06,6.36a58.79,58.79,0,0,1,31.07,0c11.85-8,17-6.36,17-6.36,3.39,8.54,1.26,14.85.62,16.42A23.94,23.94,0,0,1,451,393.81c0,23.84-14.51,29.08-28.33,30.62,2.22,1.91,4.21,5.7,4.21,11.49,0,8.29-.08,15-0.08,17,0,1.66,1.12,3.59,4.27,3A62.06,62.06,0,0,0,411.45,335h0Z" transform="translate(-349.4 -335)" style="fill:#b9b9b9;fill-rule:evenodd"/></svg>
          </a>
        </div>

        <span style="float:right;">
          <div style="float:right;cursor:pointer;padding-top:2px;">
            <div @click="$parent.themeSwitch" id="theme-switch-icon" class="noselect" style="width:19px;" title="Switch theme">
              <svg id="svg-contrast" viewBox="0 0 893 893"><title>Switch theme</title><path d="M130.78,130.78A445.22,445.22,0,1,0,272.69,35.1,444.95,444.95,0,0,0,130.78,130.78ZM446.5,818A371.5,371.5,0,0,1,183.81,183.81,369.07,369.07,0,0,1,446.5,75V818Z" style="fill:#fff;fill-rule:evenodd"/></svg>
            </div>
          </div>
        </span>

      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      homePath: '/',
    }
  },
  methods: {      
    menuClose: function () {
      this.$parent.menuOpen = false;
    },
    menuClick: function () {
      this.$parent.menuOpen = true;
      window.scrollTo(0, 0);
    },
    toTop: function() {
      window.scrollTo(0,0);
      if (this.$parent.menuOpen) {
        this.$parent.menuOpen = false;
        this.$router.push(this.homePath);
      }
    },
  }
};
</script>

<style>


  .footer {
    width: 100%;
    background-color:#444;
    left: 0;
    padding-top: 35px;
    padding-bottom: 45px;
    min-height: 70px;
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .footer-link {
    color: #e7e7e7!important;
  }

  @media only screen and (max-width: 600px) {
    .footer {
      padding-left:5px;
      padding-right:6px;
    }
  }

  .footer-content {
    max-width: 640px;
    margin: 0 auto;
  }

  .footer-top-space {
    height: 90px;
  }

  @media only screen and (max-width: 600px) {
    .footer-content {
      padding-left:15px;
      padding-right:15px;
    }
    .footer-top-space {
      height: 80px;
    }
  }

  .footer-column {
    width: 310px;
    float: left;
  }

  .footer {
    font-size: 14px;
    color: rgb(226, 226, 226);
  }

  .footer a {
    font-size: 14px;
    color: rgb(226, 226, 226);
    text-decoration: underline;
    line-height:22px;
    border-bottom: 0px!important;
  }
</style>