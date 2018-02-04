import Service from '@ember/service';
import { POST_STATUS_MESSAGE_TYPE } from 'publishing/constants/global';

/**
 * Service that allow set the status of the current post.
 * @name PostStatusService
 * @extends Ember.Service
 */
export default Service.extend({
  /**
   * The current status messag.
   * @type {string}
   */
  message: '',

  /**
   * Timestamp when the current status message was set.
   * @type {number|null}
   */
  messageTime: null,

  /**
   * Type of the status message
   * @type {string}
   */
  messageType: POST_STATUS_MESSAGE_TYPE.INFO,

  /**
   * Sets the current message, its type, and updates the message time.
   * @param {string} message The contents of the new message
   * @param {string} type The new message type
   */
  setMessage(message, type = POST_STATUS_MESSAGE_TYPE.INFO) {
    if (!message) {
      return;
    }

    this.set('message', message);
    this.set('messageType', type);
    this.set('messageTime', Date.now());
  },
});
