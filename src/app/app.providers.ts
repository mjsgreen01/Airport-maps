import { UserActions } from '../common/stores/user/user.actions';
import { UserService } from '../common/stores/user/user.service';
import { WindowRef } from '../common/utils/window-ref';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  WindowRef
];
