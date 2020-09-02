import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import trLocale from '@fullcalendar/core/locales/tr';
import { Birthday } from '../birthday-model/birthday';
import { BirthdayService } from 'src/app/services/birthday.service';

@Component({
  selector: 'app-birthday-calendar',
  templateUrl: './birthday-calendar.component.html',
  styleUrls: ['./birthday-calendar.component.css']
})
export class BirthdayCalendarComponent implements OnInit {

  modalAdd: boolean;
  modalView: boolean;
  birthdaysListDatabase: Observable<Birthday[]>;
  calendarBirthdaysdata = [];
  currentDate = new Date();
  formatCurrentDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  infoEventTitle: string;
  infoEventDate: string;
  birthdayObject: Birthday = new Birthday();
  saveTempDate: Date;
  saveYearCounter: number = 1;

  constructor(private birthdayService: BirthdayService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.birthdaysListDatabase = this.birthdayService.getBirthdaysList();
    this.birthdaysListDatabase.subscribe(elements => {
      elements.forEach((day) => {
        const formatTempDate = formatDate(day.date, 'yyyy-MM-dd', 'en-US');
        if (this.formatCurrentDate > formatTempDate) {
          this.calendarBirthdaysdata.push({ title: day.title, date: formatTempDate, color: '#DC3545' })
        } else if (this.formatCurrentDate < formatTempDate) {
          this.calendarBirthdaysdata.push({ title: day.title, date: formatTempDate, color: '#6C757D' })
        } else {
          this.calendarBirthdaysdata.push({ title: day.title, date: formatTempDate, color: '#17A2B8' })
        }
        this.calendarOptions.events = this.calendarBirthdaysdata;
      })
    })
  }

  calendarOptions: CalendarOptions = {
    height: 600,
    locale: trLocale,
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      center: 'today',
      right: 'prev,next'
    },
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this)

  };

  handleDateClick(arg) {
    this.saveTempDate = new Date(arg.dateStr);
    this.showModalDialogAdd();
  }

  handleEventClick(arg) {
    this.infoEventTitle = arg.event._def.title;
    this.infoEventDate = formatDate(arg.event._instance.range.start, 'yyyy-MM-dd', 'en-US')
    this.showModalDialogView();
  }

  showModalDialogAdd() {
    this.newBirthday();
    this.modalAdd = true;
  }

  showModalDialogView() {
    this.modalView = true;
  }

  onSubmitSave() {
    this.saveBirthday();
  }

  saveBirthday() {
    var loopControl = true;
    this.birthdayObject.date = new Date(this.saveTempDate);
    for (var yearCounter = 0; yearCounter < this.saveYearCounter; yearCounter++) {
      if (loopControl) {
        this.saveWithYears(0);
        loopControl = false;
      } else {
        this.saveWithYears(1);
      }
    }
    this.birthdayObject = new Birthday();
    this.gotoCalendar();
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

  gotoCalendar() {
    this.router.navigate(['/birthday-calendar']);
    this.refreshPage();
  }

  refreshPage(): void {
    window.location.reload();
  }

}
