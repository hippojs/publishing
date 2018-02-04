import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
/**
 * A component that displays the current status of the `post-status` service.
 * The message is automatically displayed whenever the `setMessage` property is
 * updated on the service (typically through PostStatusService#setMessage).
 *
 * Implementation can be done using either the inline form:
 *
 *     {{post-status}}
 *
 * Or, the block form:
 *
 *     {{post-status as|message type|}}
 *        {{if message message}}
 *     {{/post-status}}
 *
 * @name PostStatusComponent
 * @extends Ember.Component
 */
export default Component.extend({
  /**
   * The `post-status` service.
   * @type {PostStatusService}
   */
  postStatus: service('post-status'),

  /**
   * Updates the message to display from the `post-status` service
   * @type {string|null}
   */
  message: alias('postStatus.message'),

  /**
   * Type of the status message
   * @type {string}
   */
  messageType: alias('postStatus.messageType'),
});
