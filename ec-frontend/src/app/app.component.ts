import {Component, OnInit} from '@angular/core';
import {CameraService} from "./services/camera.service";
import {take} from "rxjs";
import {CameraModel} from "./models/camera.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'everybody-codes';

  cameraList: CameraModel[][];
  selectedCameraNr: string;

  constructor(private cameraService: CameraService) {
  }

  ngOnInit() {
    this.fetchCameras();
  }


  fetchCameras(): void {
    this.cameraService.getCameraList()
      .pipe(take(1))
      .subscribe((data: CameraModel[][]) => {
        this.cameraList = data;
      })
    ;
  }

  selectCamera(cameraNr: string): void {
    this.selectedCameraNr = cameraNr;
  }
}
