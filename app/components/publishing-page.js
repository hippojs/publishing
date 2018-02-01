import Component from '@ember/component';

export default Component.extend({
  // TODO:
  //   1. Set valide title && CP
  //   2. Pass it to Nav-bar
  setContentValid(isValid) {
    this.get('currentPost').set('hasValidContent', isValid);
  },
});
