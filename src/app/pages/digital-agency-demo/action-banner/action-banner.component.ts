import { Router } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-action-banner',
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.scss']
})
export class ActionBannerComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) {

   }

  ngOnInit(): void {
  }

  navigateContactUs() {
    // this.router.navigate([], { 
    //   fragment: 'contact'
    // })
    const contactArea = this.renderer.selectRootElement('#contact');
    contactArea.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

}
