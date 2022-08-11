import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps !: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title : 'Cattoo',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl : 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
        createdDate : new Date(),
        snaps : 0,
        location : 'Tunis'
      },
      {
        title : 'Doggyy',
        description: 'Mon ami Doggy est là!',
        imageUrl : 'https://wallpaperaccess.com/full/1101027.jpg',
        createdDate : new Date(),
        snaps : 250,
        location : 'Manouba'
      },
      {
        title : 'Birdy',
        description: 'Mon ami Birdy est là aussi!',
        imageUrl : 'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png',
        createdDate : new Date(),
        snaps : 0
      },
      {
        title : 'Birdy',
        description: 'Mon ami Birdy est là aussi!',
        imageUrl : 'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png',
        createdDate : new Date(),
        snaps : 0
      }
    ];
  }
}
