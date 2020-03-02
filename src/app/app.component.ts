import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hourList = [ ...Array(24).keys(), 0 ].slice(1);

  hoursCoords = [];

  hoursLeftMargin = '10px';

  trackList = [];

  minDragGridWidth = 0;

  getCoordinates(hourIdx) {
    if (this.hoursCoords[hourIdx] !== undefined) return;
    const elem = document.getElementById('hour' + hourIdx);
    const coords = { left: elem.offsetLeft, right: elem.offsetLeft + parseInt(this.hoursLeftMargin) };
    this.hoursCoords[hourIdx] = coords;
    if (hourIdx === 1) this.minDragGridWidth = `${coords.right}px`;
  }

  uploadTrack(event) {
    this.trackList.push( ...event.srcElement.files );
    event.srcElement.value = '';
  }

  removeTrack(trackIdx) {
     this.trackList.splice(trackIdx, 1);
  }

  getRandomColor(track) {
    if (track.color) return track.color;
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return track.color = color;
  }
}
