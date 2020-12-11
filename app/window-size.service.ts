import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  $device = new BehaviorSubject<string>('');

  constructor() {
  }

  setDevice(device: string) {
    this.$device.next(device);
  }

  getDevice() {
    return this.$device.getValue();
  }
}
