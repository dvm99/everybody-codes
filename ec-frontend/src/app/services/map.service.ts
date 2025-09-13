import { Injectable } from '@angular/core';
import * as Leaflet from "leaflet";
import {CameraModel} from "../models/camera.model";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markers: Leaflet.Marker[] = [
    Leaflet.marker([52.0914, 5.1115]) // Utrecht, NL
  ];

  markerDefaultOptions = {
    icon: Leaflet.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })
  };

  constructor() { }

  drawMap(map: Leaflet.Map): void {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    Leaflet.tileLayer(baseMapURl).addTo(map);
  }

  plotCameras(map: Leaflet.Map, cameras: CameraModel[]): void {
    cameras.forEach(cam => {
      const markerOptions = {
        ...this.markerDefaultOptions,
        title: cam.cameraNr
      }
      const marker = Leaflet.marker([cam?.latitude, cam?.longitude], markerOptions);
      marker.bindPopup(`Camera ${cam.cameraNr}: ${cam.name}`);
      marker.addTo(map);
      this.markers.push(marker);
    });

    const bounds = Leaflet.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    map?.fitBounds(bounds);
  }

  openMarkerPopup(cameraNr: string): void {
    const marker = this.markers.find(m => m.options.title === cameraNr);
    if (marker) {
      marker.openPopup();
    }
  }
}
