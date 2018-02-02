import Mixin from '@ember/object/mixin';
import { ROUTES } from 'publishing/constants/global';

export default Mixin.create({
  actions: {
    publishPost(model) {
      console.log('call from mixin: publishPost');

      return model
        .save()
        .then(model => {
          console.log('call from mixin: model saved');
          // TODO: transition to pulse/detail
          // this.transitionTo(ROUTES.POST_EDIT, model.get('id'))
        })
        .catch(err => console.log(err));
    },

    /**
     * Actually updates the post content and headline, does validation as well
     * TODO validation
     * @param  {string} The post content (alias: contentHtml)
     */
    updatePost(model, key, value = '') {
      console.log('call from mixin: updatePost');

      if (!key || !value) {
        return;
      }

      model.set(key, value);

      if (model.get('isNew')) {
        return model
          .save()
          .then(model => this.transitionTo(ROUTES.POST_EDIT, model.get('id')))
          .catch(err => console.log(err));
      }

      // return model
      //   .save()
      //   .then(() => console.log('model saved'))
      //   .catch(err => console.log(err));
    },
  },
});
