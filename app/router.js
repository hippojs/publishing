import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route(
    'authentication',
    {
      path: '/',
      resetNamespace: true,
    },
    function() {
      this.route(
        'post',
        {
          path: '/',
          resetNamespace: true,
        },
        function() {
          this.route('new', function() {
            this.route('drafts');
            this.route('published');
          });

          this.route('edit', function() {
            this.route('index', { path: '/:post_id' });
            this.route('drafts');
            this.route('published');
          });

          this.route('redirect', { path: '/*wildcard' });
        }
      );
    }
  );

  this.route('logout', { resetNamespace: true });

  this.route('login', { resetNamespace: true });
});

export default Router;
