import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

  
  

  constructor( private router : Router ) { 
  
  }

  ngOnInit(): void {
  }
  
  searchClientRedirect(){
    this.router.navigate( ['/search-client'] );
  }
  
  salesDetailRedirect(){
    this.router.navigate( ['/sales-detail'] );
  }

}
