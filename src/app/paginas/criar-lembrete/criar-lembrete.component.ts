import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreService } from 'src/app/services/lembre.service';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreService, private router: Router) { }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.errorMsgComponent.setError('Falha ao adicionar lembrete'); });
  }
}
