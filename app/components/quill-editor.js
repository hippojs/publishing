import Component from '@ember/component';
import Quill from 'Quill';

export default Component.extend({
  didInsertElement() {
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ],
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    });
  },
  /**
   * Handles autosaving the article on a debounced input poll
   */
  autoSaveHandler() {
    const content = this.quill.getContents();
    this.get('onSave')(this.model, 'content', content);
  },
  actions: {
    save() {
      this.autoSaveHandler();
    },
  },
});
