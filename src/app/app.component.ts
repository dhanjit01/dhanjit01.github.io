import { Component,AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'photography';

  constructor(private eleRef:ElementRef){}

  ngAfterViewInit(): void {
      window.addEventListener('resize',(event:any)=>{
        this.onresize(event);
      })
  }

  imgUrl="./assets/main.jpg";
  private onresize(event:any){
    if(window.innerWidth<800) this.imgUrl='./assets/main-phone.jpg';
    else this.imgUrl='./assets/main.jpg';
  }
}