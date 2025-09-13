import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CameraModel} from "../models/camera.model";

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private readonly url: string = 'http://localhost:8080/camera-list'

  constructor(private http: HttpClient) {}

  public getCameraList(): Observable<CameraModel[][]> {
    return this.http.get<any>(`${this.url}`);
  }

}
