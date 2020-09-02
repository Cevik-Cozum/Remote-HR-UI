import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from './../../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

  reservation: Reservation = new Reservation();

  constructor(
    private reservationService: ReservationService,
  
    private router: Router) 
    { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.reservation = new Reservation();
  }

  save() {
    this.reservationService.createReservation(this.reservation).subscribe(
    (data) => {

  },
  (error) => console.log(error)
 );

}
onSubmitSave() {
this.save();
}
}