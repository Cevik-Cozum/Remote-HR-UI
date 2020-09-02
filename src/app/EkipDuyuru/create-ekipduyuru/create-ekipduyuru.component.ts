import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipDuyuru } from '../ekipduyuru-model/ekipduyuru';
import { EkipduyuruService } from './../../services/ekipduyuru.service';

@Component({
  selector: 'app-create-ekipduyuru',
  templateUrl: './create-ekipduyuru.component.html',
  styleUrls: ['./create-ekipduyuru.component.css']
})
export class CreateEkipDuyuruComponent implements OnInit {
  ekipduyuru: EkipDuyuru = new EkipDuyuru();
  submitted = false;

  constructor(
   private ekipduyuruService: EkipduyuruService,
    private router: Router
  ) {}

  ngOnInit(): void {
	      this.reloadCalendarData();

  }



  newProduct(): void {
    this.ekipduyuru = new EkipDuyuru();
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


  save() {
    this.ekipduyuruService.createEkipDuyuru(this.ekipduyuru).subscribe(
    (data) => {
      },
     (error) => console.log(error)
  );
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }




}