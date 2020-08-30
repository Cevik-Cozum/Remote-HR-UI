import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement-model/announcement';
import { AnnouncementService } from './../../services/announcement.service';


@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  announcement: Observable<Announcement[]>;
  modalAdd: boolean;

  constructor(
    private announcementService: AnnouncementService,
  
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.announcement = this.announcementService.getAnnouncementList();
  }

  deleteAnnouncement(id: number) {
    this.announcementService.deleteAnnouncement(id).subscribe(
      (data) => {
        
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateAnnouncement(id: number) {
    this.router.navigate(['/announcement-update', id]);
  }
  showBasicDialog() {
    this.modalAdd = true;
  }




}
