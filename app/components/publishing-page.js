import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  postStatus: service('post-status'),

  init() {
    this._super(...arguments);
    this.setProperties({
      showPublishModal: false,
    });
  },
  // TODO:
  //   1. Set valide title && CP
  //   2. Pass it to Nav-bar
  setContentValid(isValid) {
    this.get('currentPost').set('hasValidContent', isValid);
  },
  actions: {
    openPublishModal() {
      // TODO: validate title / content, if not ok, don't set following to true
      // if ([not valid]) {
      //   this.get('postStatus').setMessage('hello world');
      // }
      this.set('showPublishModal', true);
    },
    closePublishModal() {
      this.set('showPublishModal', false);
    },
  },
});
