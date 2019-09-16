import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home.vue";
import CbtApp from "./views/CbtApp.vue";
import Page from "./views/Page.vue";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home,
      meta: {title: 'Thinking Errors - CBT Cognitive Distortions List'}
    },
    {
      path: '/cbt-app',
      name: "CbtApp",
      component: CbtApp,
      meta: {title: 'Cognitive Behavioral Therapy Practice Online - CBT App'}
    },
    {
      path: '/about',
      component: Page,
      meta: {title: 'About - Thinking Errors'}
    },
    {
      path: "/all-or-nothing-thinking",
      component: Page,
      meta: {title: 'All or Nothing Thinking - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/discounting-positives",
      component: Page,
      meta: {title: 'Discounting Positives - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/emotional-reasoning",
      component: Page,
      meta: {title: 'Emotional Reasoning - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/fortune-telling",
      component: Page,
      meta: {title: 'Fortune Telling - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/jumping-to-conclusions",
      component: Page,
      meta: {title: 'Jumping to Conclusions - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/labeling",
      component: Page,
      meta: {title: 'Labeling - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/magnification-or-minimization",
      component: Page,
      meta: {title: 'Magnification or Minimization - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/mental-filter",
      component: Page,
      meta: {title: 'Mental Filter - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/mind-reading",
      component: Page,
      meta: {title: 'Mind Reading - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/other-blame",
      component: Page,
      meta: {title: 'Other Blame - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/overgeneralization",
      component: Page,
      meta: {title: 'Overgeneralization - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/personalization",
      component: Page,
      meta: {title: 'Personalization - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/self-blame",
      component: Page,
      meta: {title: 'Self Blame - CBT Cognitive Distortion | Thinking Errors'}
    },
    {
      path: "/should-statements",
      component: Page,
      meta: {title: 'Should Statements - CBT Cognitive Distortion | Thinking Errors'}
    },
  ]
})
