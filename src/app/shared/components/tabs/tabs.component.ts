import { Component, OnInit } from '@angular/core';
import {Dogs} from "../../interfaces";
import {DogsService} from "../../dogs.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor( public dogService: DogsService) { }



  ngOnInit(): void {
    this.dogService.getAll('https://api.thedogapi.com/v1/images/search').subscribe(value =>{
        console.log(value, 'собаки')
      });
  }

}
