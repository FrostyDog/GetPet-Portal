import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public menuItems: { link: string, title: string }[] = [
    {link: '23', title: "All Ads"},
    {link: '23', title: "New Add"},
    {link: '23', title: "My Profile"},
    {link: '23', title: "My Ads"},
    {link: '23', title: "Logout"},

  ];
  
  constructor() { }


  ngOnInit(): void {
  }

}
