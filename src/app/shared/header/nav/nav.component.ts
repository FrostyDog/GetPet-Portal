import { Component, OnInit } from '@angular/core';
import { menuItem } from '../../../models/menuItem';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public menuItems: menuItem[] = [
    { link: '23', title: 'All Ads' },
    { link: '23', title: 'New Add' },
    {
      title: 'Profile',
      children: [
        { link: '23', title: 'My Ads' },
        {
          link: 'profile',
          title: 'My Profile',
        },
      ],
    },

    { link: '23', title: 'Logout' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
