<template>
  <div>
    <div style="height:10px;"></div>

    <h4>CBT thinking errors list</h4>

    <div v-if="current != 'AoN'">
      <router-link to="/all-or-nothing-thinking">
        <div class="footer-div">
          AoN
        </div>
        <div class="footer-div-label">
          All or Nothing Thinking
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        AoN
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        All or Nothing Thinking
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'MoM'">
      <router-link to="/magnification-or-minimization">
        <div class="footer-div">
          MoM
        </div>
        <div class="footer-div-label">
          Magnification or Minimization
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        MoM
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Magnification or Minimization
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'MF'">
      <router-link to="/mental-filter">
        <div class="footer-div">
          MF
        </div>
        <div class="footer-div-label">
          Mental Filter
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        MF
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Mental Filter
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'DP'">
      <router-link to="/discounting-positives">
        <div class="footer-div">
          DP
        </div>
        <div class="footer-div-label">
          Discounting Positives
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        DP
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Discounting Positives
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'Lab'">
      <router-link to="/labeling">
        <div class="footer-div">
          Lab
        </div>
        <div class="footer-div-label">
          Labeling
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        Lab
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Labeling
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'Per'">
      <router-link to="/personalization">
        <div class="footer-div">
          Per
        </div>
        <div class="footer-div-label">
          Personalization
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        Per
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Personalization
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'FT'">
      <router-link to="/fortune-telling">
        <div class="footer-div">
          FT
        </div>
        <div class="footer-div-label">
          Fortune Telling
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        FT
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Fortune Telling
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'MR'">
      <router-link to="/mind-reading">
        <div class="footer-div">
          MR
        </div>
        <div class="footer-div-label">
          Mind Reading
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        MR
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Mind Reading
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'Ovg'">
      <router-link to="/overgeneralization">
        <div class="footer-div">
          Ovg
        </div>
        <div class="footer-div-label">
          Overgeneralization
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        Ovg
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Overgeneralization
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'SS'">
      <router-link to="/should-statements">
        <div class="footer-div">
          SS
        </div>
        <div class="footer-div-label">
          Should Statements
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        SS
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Should Statements
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'SB'">
      <router-link to="/self-blame">
        <div class="footer-div">
          SB
        </div>
        <div class="footer-div-label">
          Self Blame
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        SB
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Self Blame
      </div>
    </div>

    <div class="footer-div-spacer"></div>
    
    <div v-if="current != 'OB'">
      <router-link to="/other-blame">
        <div class="footer-div">
          OB
        </div>
        <div class="footer-div-label">
          Other Blame
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        OB
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Other Blame
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'ER'">
      <router-link to="/emotional-reasoning">
        <div class="footer-div">
          ER
        </div>
        <div class="footer-div-label">
          Emotional Reasoning
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        ER
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Emotional Reasoning
      </div>
    </div>

    <div class="footer-div-spacer"></div>

    <div v-if="current != 'Mag'">
      <router-link to="/magical-thinking">
        <div class="footer-div">
          Mag
        </div>
        <div class="footer-div-label">
          Magical Thinking
        </div>
      </router-link>
    </div>
    <div v-else>
      <div class="footer-div footer-div-fixed">
        Mag
      </div>
      <div class="footer-div-label footer-div-label-inactive">
        Magical Thinking
      </div>
    </div>

    <div style="clear:both;height:5px;"></div>

  </div>
</template>

<script>

  export default {

    data: function() {
      return {

      }
    },

    methods: {
      resizeTextarea () {
        
      },
    },

    mounted () {
      // console.log(this.current);
    },

    beforeDestroy () {
      
    },

    render () {
      
    },

    props: [ 'current' ]
    
  }

</script>


<style scoped>

  .footer-div {
    margin-right: 5px;
    text-align: center;
    font-size: 11px;
    cursor: pointer;
    float: left;
    width: 32px;
    height: 29px;
    border-radius: 50%;
    color: black;
    display: inline-table;
    padding-top: 4px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: #ffdada!important;
    border: 1px solid rgb(255, 170, 170)!important;
    font-weight: bold;
  }

  .footer-div:hover + .footer-div-label {
    text-decoration: underline;
  }

  .footer-div-fixed {
    background-color: #c8ffaf!important;
    border: 1px solid #26e200!important;
  }

  .footer-div-label {
    position:absolute;
    margin-left:39px;
    margin-top:3px;
  }

  .footer-div-spacer {
    clear:both;
    height:15px;
  }

  .footer-div-label:hover {
    text-decoration: underline;
  }

  .footer-div-label-inactive {
    text-decoration: none!important;
  }
</style>