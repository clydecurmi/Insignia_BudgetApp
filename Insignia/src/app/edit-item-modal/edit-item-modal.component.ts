import { Component, Inject, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {

   constructor(
  //   // public dialogRef: MatDialogRef<EditItemModalComponent>,
  //   // @Inject(MAT_DIALOG_DATA) public item: BudgetItem) 
  public EditService: EditServiceService){ }

   ngOnInit() {}

   onSubmitted(updatedItem: BudgetItem){
  //   this.dialogRef.close(updatedItem);
   }
}
