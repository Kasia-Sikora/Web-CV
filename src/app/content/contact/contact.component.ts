import {Component, HostListener, OnInit} from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {BehaviorSubject} from 'rxjs';
import {WindowSizeService} from '../../window-size.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  map: Map;

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    // document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'start'});
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: olProj.fromLonLat([20.9796975, 52.2675944]),
        zoom: 14
      })
    });

    const z = document.getElementsByTagName('ul')[0];
    z.setAttribute('style', 'position: absolute; bottom: 0; right: 0');
  }

}
