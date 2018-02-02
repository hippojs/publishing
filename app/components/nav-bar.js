import Component from '@ember/component';

export default Component.extend({
  actions: {
    publish() {
      // TODO: refactor valide to a util, also update it in `quill-editor`
      // if user haven't type anything, quill-editor not set content => content
      // is null
      // if user type, then delete, there is still a blank line represented by
      // ‘\n’, so getLength will return 1.
      if (
        !this.get('model.content.length') ||
        // FIX: need to figure out a way to get currentContent from quill-editor
        this.get('model.content.length') === 1
      ) {
        console.log("error: don't have content");
        return;
      }
      this.get('onPublish')(this.model);
    },
  },
});
