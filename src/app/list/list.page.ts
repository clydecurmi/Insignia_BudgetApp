import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { Tab4Page } from '../tab4/tab4.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(
    public dataService: DataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  async showGoalsModal(){
    const model = await this.modalCtrl.create({
      component: Tab4Page
    })
    await model.present();
  }

  async showModal(){
    const model = await this.modalCtrl.create({
      component: AddItemModalPage
    })
    await model.present();
  }

}
