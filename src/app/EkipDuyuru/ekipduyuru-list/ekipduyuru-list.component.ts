import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EkipDuyuru } from './../ekipduyuru-model/ekipduyuru';
import { EkipduyuruService } from './../../services/ekipduyuru.service';

@Component({
  selector: 'app-ekipduyuru-list',
  templateUrl: './ekipduyuru-list.component.html',
  styleUrls: ['./ekipduyuru-list.component.css']
})
export class EkipduyuruListComponent implements OnInit {
  ekipduyuru: Observable<EkipDuyuru[]>;
  constructor(
   private ekipduyuruService: EkipduyuruService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.ekipduyuru = this.ekipduyuruService.getekipduyuruList();
  }

  deleteEkipDuyuru(id: number) {
    this.ekipduyuruService.deleteEkipDuyuru(id).subscribe(
    (data) => {
    this.reloadData();
     },
     (error) => console.log(error)
   );
  }

  updateEkipDuyuru(id: number) {
    this.router.navigate(['/ekipduyuru-update', id]);
  }

showBasicDialog() {
    this.modalAdd = true;
}
}