const Component1 = {
  template: '#landing'

};
const Component2 = {
  template: '#boaters'
};
const Component3 = {
  template: '#dolphins'
};
const Component4 = {
  template: '#sharks'
};
const Component5 = {
  template: '#merch'
};

const NotFoundComponent = {
  template: '#NotFound'
};

Vue.component('landing', {
  template: '#landing'
})

const routes = [
  { path: '', component: Component1 },
  { path: '/boaters', component: Component2 },
  { path: '/dolphins', component: Component3 },
  { path: '/sharks', component: Component4 },
  { path: '/merch', component: Component5 },
  { path: '/:catchAll(.*)', component: NotFoundComponent, name: 'NotFound' }
]

const router = new VueRouter({
  routes
});

const eventBus = new Vue({});

new Vue({
  data: {
    direction: 'fade'
  },
  mounted () {
    eventBus.$on('change-direction', (newDirection) => {
      this.direction = newDirection;
    });
  },
  router
}).$mount('#app');
