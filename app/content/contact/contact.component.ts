import {Component, OnInit} from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import {transform} from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {WindowSizeService} from '../../window-size.service';
import VectorSource from 'ol/source/Vector';
import {Geometry} from 'ol/geom';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {FormBuilder, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';

declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map: Map;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],

  });

  constructor(private windowSizeService: WindowSizeService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.scrollWindow();
    this.setMap();
  }

  onSubmit() {
    this.confirmationEmail();
    this.sentFeedbackFromGuest();
  }

  private scrollWindow() {
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

  private setMap() {
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

    const mapMarker = new VectorLayer({
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
    this.map.addLayer(mapMarker);

    const openLayerLink = document.getElementsByTagName('ul')[0];
    openLayerLink.setAttribute('style', 'position: absolute; bottom: 0; right: 0');
  }

  private confirmationEmail() {
    Email.send({
      Host: environment.Host,
      Username: environment.Username,
      Password: environment.Password,
      To: this.contactForm.get('email').value,
      From: 'sikora.katarzyna.waw@gmail.com',
      Subject: 'Email send successfully',
      Body: `
        <i>Hello ${this.contactForm.get('name').value},</i> <br> Thank You so much for contact. <br>` +
        `This auto-reply is just to let you know that your message was sent successfully. <br>` +
        `<br> Best Regards <br /> Katarzyna Sikora`
    }).then(message => {
      alert(message);
      this.contactForm.reset();
    });
  }

  private sentFeedbackFromGuest() {
    Email.send({
      Host: environment.Host,
      Username: environment.Username,
      Password: environment.Password,
      To: 'sikora.katarzyna.waw@gmail.com',
      From: this.contactForm.get('email').value,
      Subject: this.contactForm.get('subject').value,
      Body: `
        <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: ${this.contactForm.get('name').value}</b> ` +
        `<br /> <b>Email: ${this.contactForm.get('email').value}</b><br /> <b>Subject: ${this.contactForm.get('subject').value}</b><br />`
        + `<b>Message:</b> <br /> ${this.contactForm.get('message').value}<br /><br>`
    }).then(message => {
      alert(message);
      this.contactForm.reset();
    });
  }
}
