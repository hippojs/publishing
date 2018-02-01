import Component from '@ember/component';
import Quill from 'Quill';
import { SAVE_AND_VALIDATE_DEBOUNCE_TIME } from 'publishing/constants/global';
import { debounce } from '@ember/runloop';

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

    this.quill.on('text-change', () => this.validateAndSaveDebounce());
  },
  validateAndSaveDebounce() {
    debounce(this, this.validateAndSave, SAVE_AND_VALIDATE_DEBOUNCE_TIME);
  },
  validateAndSave() {
    if (this.validateContent()) {
      this.autoSaveHandler();
    }
  },
  /**
   * Handles autosaving the article on a debounced input poll
   */
  autoSaveHandler() {
    const content = this.quill.getContents();
    this.get('onSave')(this.model, 'content', content);
  },
  validateContent() {
    // Note even when Quill is empty, there is still a blank line represented by ‘\n’, so getLength will return 1.
    const isContentValid = this.quill.getLength() !== 1;
    return isContentValid;
  },
});
