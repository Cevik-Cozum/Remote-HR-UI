import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement-model/announcement';
import { AnnouncementService } from './../../services/announcement.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-announcement-update',
  templateUrl: './announcement-update.component.html',
  styleUrls: ['./announcement-update.component.css']
})
export class AnnouncementUpdateComponent implements OnInit {
  id: number;
  announcement: Announcement;
  modalAdd: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.announcement = new Announcement();
    this.id = this.route.snapshot.params['id'];
    this.announcementService.getAnnouncement(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.announcement = data;
      },
      (error) => console.log(error)
    );
  }

  updateAnnouncement() {
    this.announcementService.updateAnnouncement(this.id, this.announcement).subscribe(
      (data) => {
        
      },
      (error) => console.log(error)
    );

  }
  

  onSubmitUpdate() {
    this.updateAnnouncement();
  }

  showBasicDialog() {
    this.modalAdd = true;
  }

}
