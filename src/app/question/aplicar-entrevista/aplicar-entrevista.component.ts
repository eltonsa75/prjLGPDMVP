import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aplicar-entrevista',
  templateUrl: './aplicar-entrevista.component.html',
  styleUrls: ['./aplicar-entrevista.component.css']
})
export class AplicarEntrevistaComponent implements OnInit {

  title = "Planejar Entrevistas";

  public formAplicarEntrevista: FormGroup = new FormGroup({
    'cliente': new FormControl(null, [ Validators.required ]),
    'filial': new FormControl(null, [ Validators.required ]),
    'area': new FormControl(null, [ Validators.required ]),
    'questionariodisponivel': new FormControl(null, [ Validators.required ]),
    'entrevistado1': new FormControl(null, [ Validators.required ]),
    'entrevistado2': new FormControl(null),
    'entrevistado3': new FormControl(null),
    'entrevistado4': new FormControl(null),
    'entrevistado5': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }

  public gravarPlanejarEntrevista(): void {
    if (this.formAplicarEntrevista.status === 'INVALID') {
      console.log('formulario está inválido')

      this.formAplicarEntrevista.get('cliente').markAllAsTouched()
      this.formAplicarEntrevista.get('filial').markAllAsTouched()
      this.formAplicarEntrevista.get('area').markAllAsTouched()
      this.formAplicarEntrevista.get('questionariodisponivel').markAllAsTouched()
      this.formAplicarEntrevista.get('entrevistado1').markAllAsTouched()
      this.formAplicarEntrevista.get('entrevistado2').markAllAsTouched()
      this.formAplicarEntrevista.get('entrevistado3').markAllAsTouched()
      this.formAplicarEntrevista.get('entrevistado4').markAllAsTouched()
      this.formAplicarEntrevista.get('entrevistado5').markAllAsTouched()

    } else {
      console.log('Formulário está válido')
    }
  }

}
