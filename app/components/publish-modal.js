import Component from '@ember/component';

export default Component.extend({
  actions: {
    publishPost() {
      this.get('publishPost')();
    },
  },
});
