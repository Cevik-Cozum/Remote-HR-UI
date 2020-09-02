import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Birthday } from './../birthday-model/birthday'
import { BirthdayService } from './../../services/birthday.service'

@Component({
  selector: 'app-birthday-list',
  templateUrl: './birthday-list.component.html',
  styleUrls: ['./birthday-list.component.css']
})
export class BirthdayListComponent implements OnInit {

  modalAdd: boolean;
  modalUpdate: boolean;
  birthdaysListDatabase: Observable<Birthday[]>
  pastBirthdays: Observable<Birthday[]>
  currentBirthdays: Observable<Birthday[]>
  nextBirthdays: Observable<Birthday[]>
  birthdayObject: Birthday = new Birthday();
  updateTempId: number;
  updateTempTitle: string;
  updateTempDate: Date;
  saveYearCounter: number = 1;
  currentDate = new Date();
  formatCurrentDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  calendarLocateTr: any;

  constructor(
    private birthdayService: BirthdayService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reloadData();
    this.reloadCalendarData();
    this.reloadTablesData();
  }

  reloadData() {
    this.birthdaysListDatabase = this.birthdayService.getBirthdaysList();
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

  reloadTablesData() {
    this.pastBirthdays = this.birthdaysListDatabase.pipe(
      map(items => items.filter((day) => {
        const formatTempArrayDay = formatDate(day.date, 'yyyy-MM-dd', 'en-US');
        return this.formatCurrentDate > formatTempArrayDay;
      }))
    );
    this.currentBirthdays = this.birthdaysListDatabase.pipe(
      map(items => items.filter((day) => {
        const formatTempArrayDay = formatDate(day.date, 'yyyy-MM-dd', 'en-US');
        return this.formatCurrentDate == formatTempArrayDay;
      }))
    );
    this.nextBirthdays = this.birthdaysListDatabase.pipe(
      map(items => items.filter((day) => {
        const formatTempArrayDay = formatDate(day.date, 'yyyy-MM-dd', 'en-US');
        return this.formatCurrentDate < formatTempArrayDay;
      }))
    );
  }

  showModalDialogAdd() {
    this.newBirthday();
    this.modalAdd = true;
  }

  onSubmitSave() {
    this.saveBirthday();
  }

  saveBirthday() {
    var loopControl = true;
    for (var yearCounter = 0; yearCounter < this.saveYearCounter; yearCounter++) {
      if (loopControl) {
        this.saveWithYears(0);
        loopControl = false;
      } else {
        this.saveWithYears(1);
      }
    }
    this.birthdayObject = new Birthday();
    this.gotoList();
  }

  saveWithYears(a: number) {
    var tempBirthdayDate = new Date(this.birthdayObject.date);
    tempBirthdayDate.setFullYear(tempBirthdayDate.getFullYear() + a)
    this.birthdayObject.date = tempBirthdayDate;
    this.birthdayService.createBirthday(this.birthdayObject).subscribe(
      (data) => { },
      (error) => console.log(error)
    );
  }

  newBirthday(): void {
    this.birthdayObject = new Birthday();
  }

  deleteBirthday(id: number) {
    this.birthdayService.deleteBirthday(id).subscribe(
      (data) => {
        this.reloadData();
      },
      (error) => console.log(error)
    );
    this.gotoList();
  }

  showModalDialogUpdate(birthday: Birthday) {
    this.updateTempDataReload(birthday);
    this.modalUpdate = true;
  }

  updateTempDataReload(birthday: Birthday) {
    this.updateTempDate = new Date(birthday.date);
    this.updateTempId = birthday.id;
    this.updateTempTitle = birthday.title;
  }

  onSubmitUpdate() {
    this.updateBirthday();
  }

  updateBirthday() {
    this.birthdayObject.date = new Date(this.updateTempDate);
    this.birthdayObject.title = this.updateTempTitle;
    this.birthdayService.updateBirthday(this.updateTempId, this.birthdayObject).subscribe(
      (data) => { },
      (error) => console.log(error)
    );
    this.birthdayObject = new Birthday();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/birthday-list']);
    this.refreshPage();
  }

  refreshPage(): void {
    window.location.reload();
  }

}
