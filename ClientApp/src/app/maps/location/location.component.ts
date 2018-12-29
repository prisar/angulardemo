/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";

declare let google: any;

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})
export class LocationComponent implements OnInit {
  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;

  latitude: number;
  longitude: number;
  marker: google.maps.Marker;
  selectedAddressMarker: any;

  constructor() {}

  ngOnInit() {
    this.setCurrentPosition();
    var mapProp = {
      center: new google.maps.LatLng(0, 0),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  setCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Set position', position.coords);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

      const location = new google.maps.LatLng(this.latitude, this.longitude);
      this.map.panTo(location);

      if (!this.marker) {
        this.marker = new google.maps.Marker({
          position: location,
          map: this.map,
          draggable: false,
          title: 'You Loation!'
        });
        this.marker.setLabel('You');
        this.marker.setMap(this.map);
      } else {
        this.marker.setPosition(location);
      }
    });
  }

}
