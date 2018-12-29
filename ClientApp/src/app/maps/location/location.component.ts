/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { LocationService } from "../location.service";

declare let google: any;

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
  providers: [LocationService]
})
export class LocationComponent implements OnInit {
  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;

  latitude: number;
  longitude: number;
  marker: google.maps.Marker;

  locationStr: string;
  public result: any;

  countMarkers = 0;

  directionsService: google.maps.DirectionsService;
  directionsDisplay: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;

  constructor(public geoService: LocationService) {}

  ngOnInit() {
    this.setCurrentPosition();
    // tslint:disable-next-line:prefer-const
    let mapProp = {
      center: new google.maps.LatLng(0, 0),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
  }

  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  setCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Set position", position.coords);
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
          title: "You Loation!"
        });
        this.marker.setLabel("You");
        this.marker.setMap(this.map);
      } else {
        this.marker.setPosition(location);
      }
    });
  }

  setMarker(label = ".") {
    const location = new google.maps.LatLng(this.latitude, this.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        draggable: false,
        title: "You Loation!"
      });
      this.marker.setLabel(label);
      this.marker.setMap(this.map);
    } else {
      this.marker.setLabel(label);
      this.marker.setPosition(location);
    }
  }

  addMarker(label = "") {
    const location = new google.maps.LatLng(this.latitude, this.longitude);
    // this.map.panTo(location);

    const newMarker = new google.maps.Marker({
      position: location,
      map: this.map,
      draggable: false,
      title: "You Loation!"
    });
    this.countMarkers++;
    label = this.countMarkers.toString();
    newMarker.setLabel(label);
    newMarker.setMap(this.map);

    const request = {
      origin: "Mumbai",
      destination: "Pune",
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      waypoints: [
        {
          location: newMarker.getPosition(),
          stopover: true
        }
      ]
    };

    this.directionsService.route(
      request,
      response => (
        (this.directionsResult = response),
        console.log(response),
        this.directionsDisplay.setDirections(this.directionsResult)
      )
    );
  }

  findLocation(): void {
    this.geoService
      .getLocation(this.locationStr)
      .subscribe(
        (data: any) => (
          (this.result = data.results[0].geometry.location),
          console.log(data.results[0].geometry.location),
          (this.latitude = data.results[0].geometry.location.lat),
          (this.longitude = data.results[0].geometry.location.lng),
          this.map.setCenter(
            new google.maps.LatLng(this.latitude, this.longitude)
          ),
          this.addMarker()
        ),
        (err: any) => console.log(err),
        () => console.log("All done getting location.")
      );
  }
}
