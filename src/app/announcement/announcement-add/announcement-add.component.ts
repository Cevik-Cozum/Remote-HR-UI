import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement-model/announcement';
import { AnnouncementService } from './../../services/announcement.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-announcement-add',
  templateUrl: './announcement-add.component.html',
  styleUrls: ['./announcement-add.component.css']
})
export class AnnouncementAddComponent implements OnInit {
  announcement: Announcement = new Announcement();

  constructor(
    private announcementService: AnnouncementService,
  
    private router: Router) 
    { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.announcement = new Announcement();
  }

  save() {
    this.announcementService.createAnnouncement(this.announcement).subscribe(
    (data) => {

  },
  (error) => console.log(error)
 );

}
onSubmitSave() {
this.save();
}


}

