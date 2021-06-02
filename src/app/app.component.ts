import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocktracking';

  checkToPage(){
    if(window.location.pathname===""){
      return true;
    }
    else{
      return false;
    }
  }
  
}
