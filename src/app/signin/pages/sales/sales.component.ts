import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { ISalle } from './interfaces/sales';
import { SalleService } from './services/salle/salle.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  salle$: Observable<ISalle[]>;
  optionsIcon = faEllipsisV;

  constructor(
    private salleService: SalleService,
    private dialog: MatDialog,
    private title: Title,
  ) {
    this.salle$ = this.salleService.getAll();
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Vendas`);
    scrollToTop();
  }

  showModal(): void {
    this.dialog.open(ModalCreateComponent);
  }
}
