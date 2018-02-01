import EmberObject from '@ember/object';
import RouteActionsPostsMixin from 'publishing/mixins/route-actions/posts';
import { module, test } from 'qunit';

module('Unit | Mixin | route actions/posts');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteActionsPostsObject = EmberObject.extend(RouteActionsPostsMixin);
  let subject = RouteActionsPostsObject.create();
  assert.ok(subject);
});
