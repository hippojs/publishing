import Mixin from '@ember/object/mixin';

export default Mixin.create({
  actions: {
    /**
     * Actually updates the post content and headline, does validation as well
     * TODO validation
     * @param  {string} The post content (alias: contentHtml)
     */
    updatePost(model, key, value = '') {
      // TODO: Remove console.log
      console.log(`call from mixin model: ${model}`);
      console.log(`call from mixin model: ${value}`);

      if (!key || !value) {
        return;
      }

      model.set(key, value);

      return model
        .save()
        .then(() => console.log('model saved'))
        .catch(err => console.log(err));
    },
  },
});
