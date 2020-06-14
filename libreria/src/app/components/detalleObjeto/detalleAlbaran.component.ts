import { Component, OnInit } from '@angular/core';
import { AlbaranService } from 'src/app/services/albaran.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleAlbaran',
  templateUrl: './detalleAlbaran.component.html',
  // styleUrls: ['./detalleAlbaran.component.css']
})
export class DetalleAlbaranComponent implements OnInit {
  currentAlbaran = null;
  message = '';

  constructor(
    private albaranService: AlbaranService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getAlbaran(this.route.snapshot.paramMap.get('id'));
  }

  getAlbaran(id: any) {
    this.albaranService.get(id)
      .subscribe(
        data => {
          this.currentAlbaran = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAlbaran() {
    this.albaranService.update(this.currentAlbaran.id, this.currentAlbaran)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El Albaran se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteAlbaran() {
    this.albaranService.delete(this.currentAlbaran.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/albaranes']);
        },
        error => {
          console.log(error);
        });
  }
}