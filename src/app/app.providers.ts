import { UserActions } from '../common/stores/user/user.actions';
import { UserService } from '../common/stores/user/user.service';
import { WindowRef } from '../common/utils/window-ref';
import { MapsService } from '../common/stores/maps/maps.service';
import { GoogleMapsApiService } from '../common/services/google-maps-api.service';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  WindowRef,
  MapsService,
  GoogleMapsApiService
];
