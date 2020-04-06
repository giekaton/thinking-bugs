<template>
  <div>
    <h1>
      Overgeneralization
    </h1>

    <h3>You view a single negative event as a never-ending pattern of defeat.</h3>

    <h4>
      <strong>Example</strong>
    </h4>

    <p>Bob has once won a lottery. He then overgeneralized that the particular store where he bought the ticket and the particular time of a day was his lucky combination. Throughout the following years, Bob continued to buy lottery tickets in the same store and at the same time of a day, but never had any significant wins again.</p>

    <h4>
      <strong>Explained</strong>
    </h4>

    <p>This thinking error happens when our mind makes a universal rule out of a single isolated event. The made-up rule is a broad conclusion about life in general, derived from a tiny detail.</p>

    <p>Overgeneralization is a form of lazy thinking. Instead of openly investigating different possible alternatives and trying to better understand the whole picture, the mind decides that it’s enough – “I now know it all”.</p>

    <p>It is a thinking error because it contradicts widely-accepted facts about reality.</p>

    <h4>
      How to fix it
    </h4>

    <p>
      You can fix your thinking bugs with the help of the <a href="https://thinkingbugs.com/cbt-app" target="_blank">CBT app</a> - a digital version of the classical Cognitive Behavioral Therapy practice.
    </p>

    <p>
      Take a fresh look at the situation. Do you see any other variables besides the single overgeneralized conclusion that the mind had made? Challenge the thought by rewriting it in a more realistic and rational way, considering the possible positive alternatives, looking at the situation individually, and not trying to make out of it a general rule about life.
    </p>

    <menu-bottom v-bind:current="'Ovg'"></menu-bottom>
    
  </div>
</template>

<script>
  import MenuBottom from '../components/MenuBottom.vue';

  export default {
    components: {
      MenuBottom
    }
  }
</script>