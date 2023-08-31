import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  persona={
    nombre:'',
    email:'',
    password:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Sus datos han sido almacenados!',
      buttons: ['OK'],
    });

    await alert.present();

    this.persona.nombre='';
    this.persona.email='';
    this.persona.password='';


  }


}
