import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { ReservationService } from './../../services/reservation.service';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations:Reservation[];
  reservation: Observable<Reservation[]>;
  modalAdd: boolean;

  constructor(
    private reservationService: ReservationService,
  
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  
  }

  reloadData() {
    this.reservation = this.reservationService.getReservationList();
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(
      (data) => {
        
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateReservation(id: number) {
    this.router.navigate(['reservation-update', id]);
  }
  showBasicDialog() {
    this.modalAdd = true;
  }
}
