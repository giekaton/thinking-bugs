<template>
  <div>
    <div class="footer-top-space"></div>
    <div class="footer site-footer">
      <div class="footer-content" style="padding-top:12px;">
        
        <span style="float:left;"><router-link to="/about" class="footer-link" style="border-bottom: 1px solid #e7e7e7!important;">About</router-link></span>

        <span style="float:right;">

            <div style="display:inline-block;width:22px;margin-right:13px;">
              <a href="https://twitter.com/thinkingerrors_" title="Twitter" target="_blank">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.11 124.11"><title>Twitter</title><path d="M199.05,335a62.05,62.05,0,1,0,62.05,62.05A62.05,62.05,0,0,0,199.05,335h0Zm46.81,39.49a35.82,35.82,0,0,1-10.3,2.82,18,18,0,0,0,7.88-9.92,35.93,35.93,0,0,1-11.39,4.35,17.94,17.94,0,0,0-30.55,16.35,50.9,50.9,0,0,1-37-18.74,18,18,0,0,0,5.55,23.94,17.87,17.87,0,0,1-8.12-2.24c0,0.07,0,.15,0,0.22a18,18,0,0,0,14.38,17.58,17.95,17.95,0,0,1-8.09.31A18,18,0,0,0,185,421.62,36.16,36.16,0,0,1,158.48,429,50.74,50.74,0,0,0,186,437.1c33,0,51-27.32,51-51q0-1.17-.05-2.32a36.45,36.45,0,0,0,8.94-9.28h0Z" transform="translate(-137 -335)" style="fill:#d2d2d2;fill-rule:evenodd"/></svg>
              </a>
            </div>
            <div style="display:inline-block;width:22px;">
              <a href="https://github.com/giekaton/thinking-errors" title="GitHub" target="_blank">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.11 124.11"><title>GitHub</title><path d="M411.45,335a62.06,62.06,0,0,0-19.61,120.94c3.1,0.57,4.24-1.35,4.24-3,0-1.47-.05-5.38-0.08-10.55-17.26,3.75-20.9-8.32-20.9-8.32-2.82-7.17-6.89-9.08-6.89-9.08-5.63-3.85.43-3.77,0.43-3.77,6.23,0.44,9.51,6.39,9.51,6.39,5.53,9.48,14.52,6.74,18.06,5.16,0.56-4,2.17-6.74,3.94-8.3-13.78-1.57-28.27-6.89-28.27-30.67a24,24,0,0,1,6.39-16.65c-0.64-1.57-2.77-7.88.61-16.42,0,0,5.21-1.67,17.06,6.36a58.79,58.79,0,0,1,31.07,0c11.85-8,17-6.36,17-6.36,3.39,8.54,1.26,14.85.62,16.42A23.94,23.94,0,0,1,451,393.81c0,23.84-14.51,29.08-28.33,30.62,2.22,1.91,4.21,5.7,4.21,11.49,0,8.29-.08,15-0.08,17,0,1.66,1.12,3.59,4.27,3A62.06,62.06,0,0,0,411.45,335h0Z" transform="translate(-349.4 -335)" style="fill:#d2d2d2;fill-rule:evenodd"/></svg>
              </a>
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
      homePath: '/'
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
  .footer-top-space {
    height: 60px;
  }

  .footer {
    width: 100%;
    border-top: 1px solid grey;
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
    background-blend-mode: multiply,multiply;
    left: 0;
    padding-top: 5px;
    /* padding-bottom: 45px; */
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
      padding-left:0px;
      padding-right:3px;
    }
  }

  .footer-content {
    max-width: 640px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 600px) {
    .footer-content {
      padding-left:15px;
      padding-right:15px;
    }
    .footer-top-space {
      height: 50px;
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