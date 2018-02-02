import Route from '@ember/routing/route';
import { ROUTES } from 'publishing/constants/global';

export default Route.extend({
  beforeModel() {
    this.transitionTo(ROUTES.POST_NEW);
  },
});
