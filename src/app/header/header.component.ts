import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showSubmenu:boolean = false;
  submenuTitle:String;
  childMenu = [];
  menus = [
    {
      label: 'Invention',
      path: './invention',
      children: [
        {
          label: '5G',
          path:'./invention/5G'
        },
        {
          label: 'Artificial Intelligence',
          path:'./invention/ai'
        },
        {
          label: 'Extended Reality',
          path:'./invention/extrel'
        },
        {
          label: 'University Relations',
          path:'./invention/univrel'
        }
      ]
    },
    {
      label: 'Products',
      path: './products',
      children: [
        {
          label: 'Platforms',
          path:'./products/platforms'
        },
        {
          label: 'Mobile Processors',
          path:'./products/mobileprocessors'
        },
        {
          label: 'Server Processors',
          path:'./products/serverprocessors'
        },
        {
          label: 'Embedded Platformss',
          path:'./products/embeddedplatforms'
        }
      ]
    },
    {
      label: 'Solutions',
      path: './solutions',
      children: [
        {
          label: 'Automitive',
          path:'./solutions/automitive'
        },
        {
          label: 'Health Care',
          path:'./solutions/hc'
        },
        {
          label: 'Internet Of Things',
          path:'./solutions/iot'
        },
        {
          label: 'Mobile Computing',
          path:'./solutions/mc'
        }
      ]
    },
    {
      label: 'Company',
      path: './company  '
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  toggleSubmenu(label, submenu){
    this.submenuTitle = label;
    this.showSubmenu = !this.showSubmenu
    this.childMenu  = submenu;
  }

}
