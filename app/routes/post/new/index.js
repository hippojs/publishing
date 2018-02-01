import Route from '@ember/routing/route';

export default Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('post').set('currentPost', model);
  },
  model() {
    return this.store.createRecord('post');
  },
});
