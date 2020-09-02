import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToplantiOdasi } from '../toplantiodasi-model/toplantiodasi';
import { ToplantiOdasiService } from './../../services/toplanti-odasi.service';
@Component({
  selector: 'app-toplanti-odasi-update',
  templateUrl: './toplanti-odasi-update.component.html',
  styleUrls: ['./toplanti-odasi-update.component.css']
})
export class ToplantiOdasiUpdateComponent implements OnInit {

  id: number;
  toplantiodasi: ToplantiOdasi;
  modalAdd: boolean;
  calendarLocateTr: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  
    private toplantiodasiService: ToplantiOdasiService
  ) {}

  ngOnInit(): void {
    this.toplantiodasi = new ToplantiOdasi();
    this.id = this.route.snapshot.params['id'];
    this.toplantiodasiService.getToplantiOdasi(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.toplantiodasi = data;
      },
      (error) => console.log(error)
    );
  }

  updateToplantiOdasi() {
    this.toplantiodasiService.updateToplantiOdasi(this.id, this.toplantiodasi).subscribe(
      (data) => {
        
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

  update() { this.toplantiodasiService.updateToplantiOdasi(this.id, this.toplantiodasi).subscribe(
    (data) => {
      
    },
    (error) => console.log(error)
  );
  }



  onSubmitUpdate() {
    this.update();
  }

  showBasicDialog() {
    this.modalAdd = true;
  }

}
