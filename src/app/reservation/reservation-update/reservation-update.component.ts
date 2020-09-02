import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from './../../services/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  id: number;
  reservation: Reservation;
  modalAdd: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.reservation = new Reservation();
    this.id = this.route.snapshot.params['id'];
    this.reservationService.getReservation(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.reservation = data;
      },
      (error) => console.log(error)
    );
  }

  updateReservation() {
    this.reservationService.updateReservation(this.id, this.reservation).subscribe(
      (data) => {
        
      },
      (error) => console.log(error)
    );

  }
  

  
  onSubmitUpdate() {
    this.updateReservation();
  }

  showBasicDialog() {
    this.modalAdd = true;
  }

}
