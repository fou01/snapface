import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
  @Input() faceSnap! :  FaceSnap; 
  snaplabel! : string; 

ngOnInit() {
  this.snaplabel='SnapIt'; 
  }
  onSnap() {
   if(this.snaplabel==='SnapIt') {
    this.faceSnap.snaps++; 
    this.snaplabel='Unsnap'; 
   }
   else {
    this.faceSnap.snaps--; 
    this.snaplabel='SnapIt'; 
   }
  }
}


