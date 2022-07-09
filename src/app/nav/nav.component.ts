import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public navOpen!: boolean;

  constructor() { }

  
  scroll(id: any) {
    console.log(`scrolling to ${id}`);
    let transition = document.getElementById(id);
    transition!.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    this.navOpen = false;
  }

  ngOnInit() {
    this.navOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.pageYOffset > 300) {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.add('nav--sticky');
    } else {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.remove('nav--sticky');
    }
  }
}
