import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CameraModel} from "../../models/camera.model";
import {MatTableModule} from '@angular/material/table';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-camera-table',
  templateUrl: './camera-table.component.html',
  styleUrls: ['./camera-table.component.scss'],
  imports: [MatTableModule, NgIf],
  standalone: true
})

export class CameraTableComponent {
  @Input() tableData: CameraModel[] | null = [];
  @Output() rowClicked: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = ['cameraNr', 'name', 'latitude', 'longitude'];

  onRowClicked(row: CameraModel) {
    this.rowClicked.emit(row.cameraNr);
  }
}
