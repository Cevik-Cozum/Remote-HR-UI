import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToplantiOdasi } from '../toplantiodasi-model/toplantiodasi';
import { ToplantiOdasiService } from './../../services/toplanti-odasi.service';

@Component({
  selector: 'app-toplanti-odasi-create',
  templateUrl: './toplanti-odasi-create.component.html',
  styleUrls: ['./toplanti-odasi-create.component.css']
})
export class ToplantiOdasiCreateComponent implements OnInit {
  toplantiodasi: ToplantiOdasi = new ToplantiOdasi();
  calendarLocateTr: any;
  constructor(
    private toplantiodasiService: ToplantiOdasiService,
  
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadCalendarData();
  }



  newProduct(): void {
    this.toplantiodasi = new ToplantiOdasi();
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
        this.toplantiodasiService.createToplantiOdasi(this.toplantiodasi).subscribe(
        (data) => {
  
      },
      (error) => console.log(error)
     );

  }
  onSubmitSave() {
    this.save();
  }

  

}
