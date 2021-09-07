import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html'
})
export class SearchClientComponent implements OnInit {

  modeModal : string[] = ['Registrar','Modificar'];

  constructor( private router : Router ) { }
  
  ngOnInit(): void {
  }

  salesRedirect(){
    this.router.navigate( ['/sales'] );
  }
}
