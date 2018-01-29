import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      currentPost: {},
    };
  },
  actions: {
    save(content) {
      console.log(`press save, content: ${JSON.stringify(content)}`);
    },
  },
});
