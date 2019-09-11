import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-gpsnear-places',
  templateUrl: './gpsnear-places.component.html',
  styleUrls: ['./gpsnear-places.component.css']
})
export class GPSNearPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 17.544220;
  lng: number = 78.367750;


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 17.544220,
		  lng: 70.367750,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 17.544220,
		  lng: 78.367750,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 17.582280,
		  lng: 78.344520,
		  label: 'C',
		  draggable: true
    },
    {
		  lat: 16.582280,
		  lng: 78.344520,
		  label: 'D',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}


