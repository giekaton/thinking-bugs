import _ from "lodash";
import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/Home.vue";
import CbtApp from "../components/CbtApp.vue";
import Page from "../components/Page/Page.vue";

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: homePath,
      name: "Home",
      component: Home
    },
    {
      path: homePath+'cbt-app',
      name: "CbtApp",
      component: CbtApp
    },
    {
      path: homePath+":pageSlug",
      name: "Page",
      component: Page
    },
  ],
  mode: "history",
  base: "",

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.afterEach((to, from) => {
  // Add a body class specific to the route we're viewing
  let body = document.querySelector("body");
  let bodyClasses = body.className.split(" ");

  if (bodyClasses.length > 0) {
    const newBodyClasses = bodyClasses.filter(theClass =>
      theClass.startsWith("vue--page--")
    );
  }

  const slug = _.isEmpty(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add("vue--page--" + slug);
});

export default router;
