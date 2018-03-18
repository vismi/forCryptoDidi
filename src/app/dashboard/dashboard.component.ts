import { Component, OnInit } from '@angular/core';
import * as config from '../config/config.json';
@Component({
		  selector: 'app-dashboard',
		  templateUrl: './dashboard.component.html',
		  styleUrls: ['./dashboard.component.css']
		})

/*==================Exporting Dashboard Class===================*/

export class DashboardComponent implements OnInit {
		public word= (<any>config).dashboard;
		 constructor() { }
		  ngOnInit() {
		  }
		}
