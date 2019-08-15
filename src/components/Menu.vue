<template>
  <div>

    <!-- Content -->
    <div style="height:15px;"></div>

    <slot></slot>

    <br><br><br>
    
  </div>
</template>

<script>
export default {
  components: {

  },
  data: function () {
    return {
      homeThemeAssetsPath: homeThemeAssetsPath
    }
  },

  head: {
    title: function () {
      return {
        inner: 'Cognitive Behavioral Therapy (CBT) App',
        separator: '-',
        complement: 'Thinking Errors'
      }
    },
    meta: [
      { name: 'description', content: 'Cognitive Behavioral Therapy (CBT) App @ thinkingerrors.org', id: 'desc' }
    ]
  },

};
</script>