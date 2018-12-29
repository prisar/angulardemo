/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

declare var google: any;

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
  API_KEY: string = 'AIzaSyDlmJcgSeJ1SYx5XrxjVdNXg2fKtFKWQEw';
  selectedAddress: any;

  ngOnInit(): void {
  }

  setSelectedAddress(address: any) {
    this.selectedAddress = address.description;
    console.log(address);
  }

}
