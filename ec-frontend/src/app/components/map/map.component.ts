import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Leaflet from 'leaflet';
import {MapService} from "../../services/map.service";
import {CameraModel} from "../../models/camera.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() cameras: CameraModel[];
  @Input() selectedCameraNr: string;

  mapElement: Leaflet.Map;

  constructor(private mapService: MapService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCameraNr']?.currentValue) {
      const cameraNr = changes['selectedCameraNr'].currentValue;
      this.mapService.openMarkerPopup(cameraNr);
    }
  }

  ngAfterViewInit() {
    this.mapElement = Leaflet.map('map');
    this.mapService.drawMap(this.mapElement);
    this.mapService.plotCameras(this.mapElement, this.cameras);
  }
}
