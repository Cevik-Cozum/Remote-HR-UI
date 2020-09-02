import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EkipDuyuru } from './../ekipduyuru-model/ekipduyuru';
import { EkipduyuruService } from './../../services/ekipduyuru.service';


@Component({
  selector: 'app-ekipduyuru-update',
  templateUrl: './ekipduyuru-update.component.html',
  styleUrls: ['./ekipduyuru-update.component.css']
})
export class EkipduyuruUpdateComponent implements OnInit {

  id: number;
  ekipduyuru: EkipDuyuru;
  modalAdd: boolean;
  calendarLocateTr: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ekipduyuruService: EkipduyuruService
  ) {}

  ngOnInit(): void {
    this.ekipduyuru = new EkipDuyuru();
    this.id = this.route.snapshot.params['id'];
    this.ekipduyuruService.getEkipDuyuru(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.ekipduyuru = data;
      },
      (error) => console.log(error)
    );
  }
reloadCalendarData() {
    this.calendarLocateTr = {
      firstDayOfWeek: 1,
      dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
      dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      dayNamesMin: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
      monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
      today: 'Bugün',
      clear: 'Temizle'
    }
  }

 update() {
  }
  onSubmitUpdate() {
    this.update();
  }

  showBasicDialog() {
    this.modalAdd = true;
  }

}
