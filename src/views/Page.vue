<template>
  <div v-cloak>

    <template>

      <component v-bind:is="autoRoute"></component>

      <div style="height:40px;"></div>

    </template>

  </div>
</template>

<script>
import AllOrNothingThinking from '../content/all-or-nothing-thinking.vue';
import DiscountingPositives from '../content/discounting-positives';
import EmotionalReasoning from '../content/emotional-reasoning';
import FortuneTelling from '../content/fortune-telling';
import JumpingToConclusions from '../content/jumping-to-conclusions';
import Labeling from '../content/labeling';
import MagnificationOrMinimization from '../content/magnification-or-minimization';
import Personalization from '../content/personalization';
import MentalFilter from '../content/mental-filter';
import MindReading from '../content/mind-reading';
import OtherBlame from '../content/other-blame';
import Overgeneralization from '../content/overgeneralization';
import SelfBlame from '../content/self-blame';
import ShouldStatements from '../content/should-statements';

import About from '../content/about';

export default {
  
  name: 'Page',

  data() {
    return {
      autoRoute: this.$route.path.substr(1),
      content: '',
    }
  },

  components: {
    AllOrNothingThinking,
    DiscountingPositives,
    EmotionalReasoning,
    FortuneTelling,
    JumpingToConclusions,
    Labeling,
    MagnificationOrMinimization,
    Personalization,
    MentalFilter,
    MindReading,
    OtherBlame,
    Overgeneralization,
    SelfBlame,
    ShouldStatements,
    About
  },

  watch:{
    '$route' (to, from){
      if (to != from) {
        this.autoRoute = this.$route.path.substr(1)
      }
    }
  },

  mounted() {
    if (this.$route.path.substr(1) == 'cbt-app') {
      this.$parent.menuOpen = true;
    }
  },

}

</script>
