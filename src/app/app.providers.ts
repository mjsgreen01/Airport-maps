import { UserActions } from '../common/stores/user/user.actions';
import { UserService } from '../common/stores/user/user.service';

export const APP_PROVIDERS = [
  UserActions,
  UserService
];
