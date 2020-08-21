import {Component, OnInit} from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {WindowSizeService} from '../../window-size.service';
import {icon} from '@fortawesome/fontawesome-svg-core';
import VectorSource from 'ol/source/Vector';
import {Geometry} from 'ol/geom';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {transform} from 'ol/proj';


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
        zoom: 14,
      })
    });

    const iconLayer = new VectorLayer({
      source: new VectorSource<Geometry>({
        features: [new Feature<Geometry>({
          geometry: new Point(transform([20.9796975, 52.2675944], 'EPSG:4326', 'EPSG:3857'))
        })]
      }),
      style: new Style({
        image: new Icon({
          src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png',
          anchor: [0.5, 1],
          scale: 0.05
        })
      })
    });
    this.map.addLayer(iconLayer);

    const z = document.getElementsByTagName('ul')[0];
    z.setAttribute('style', 'position: absolute; bottom: 0; right: 0');
  }

}
