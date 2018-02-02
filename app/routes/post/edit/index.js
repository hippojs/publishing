import Route from '@ember/routing/route';

export default Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('post').set('currentPost', model);
  },
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
});
