import { WindowRef } from '../common/utils/window-ref';
import { MapsService } from '../common/stores/maps/maps.service';
import { GoogleMapsApiService } from '../common/services/google-maps-api.service';

export const APP_PROVIDERS = [
  WindowRef,
  MapsService,
  GoogleMapsApiService
];
