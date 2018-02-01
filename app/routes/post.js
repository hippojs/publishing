import Route from '@ember/routing/route';
import PostsActions from 'publishing/mixins/route-actions/posts';

export default Route.extend(PostsActions, {});
