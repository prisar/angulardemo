/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";

declare var google: any;

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.scss"]
})
export class RoutesComponent implements OnInit {
  map: google.maps.Map;

  constructor() {}

  ngOnInit() {}
}
