import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Doğum Günü',
        icon: 'pi pi-th-large pi-pencil',
        items: [
          {
            label: 'Liste Görünümü',
            icon: 'pi pi-list pi-align-left',
            routerLink:'/birthday-list'
          },
          {
            label: 'Takvim Görünümü',
            icon: 'pi pi-calendar pi-align-right',
            routerLink:'/birthday-calendar'
          },
        ]
      },
      {
        label: 'Toplantı Odası',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Toplantı Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/meeting-create'
          },
          {
            label: 'Toplantıları Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/meeting-list'
          },
        ]
      },
      {
        label: 'Eğitimler',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Eğitim Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/education-add'
          },
          {
            label: 'Eğitimleri Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/education-list'
          },
        ]
      },
      {
        label: 'Ekip Duyuruları',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Duyuru Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/team-create'
          },
          {
            label: 'Duyuru Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/team-list'
          },
        ]
      },
      {
        label: 'Servis Rezervasyon',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Servis Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/reservation-add'
          },
          {
            label: 'Servis Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/reservation-list'
          },
        ]
      },
      {
        label: 'Şirket İçi Duyurular',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Duyuru Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/announcement-add'
          },
          {
            label: 'Duyuru Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/announcement-list'
          },
        ]
      },
      {
        label: 'Çıkış',
        icon: 'pi pi-fw pi-power-off'
      }
    ]
  }
}
