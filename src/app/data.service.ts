import { Injectable } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from './budget-item-list/budget-item-list.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public totalBudget = 0;
  budgetItems: BudgetItem[] = [];
  totalIncome: number = 0;
  totalExpense: number = 0;

  constructor() { }

  public addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    
    if (newItem.amount > 0){
      this.totalIncome += newItem.amount
    }
    else{
      this.totalExpense -= newItem.amount
    }
  }

  public deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
    
    if(item.amount > 0){
    this.totalIncome -= item.amount;
    }
    else{
      this.totalExpense += item.amount
    }
  }

  // public updateItem(updateEvent: UpdateEvent){
  //           //result is the updated budget item
  //       //replace the item with the submitted/updated item from the actual form
  //       this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

  //       //update the total budget
  //       this.totalBudget -= updateEvent.old.amount;
  //       this.totalBudget += updateEvent.new.amount;
  // }

  addNumbers(a: number){
    return a+this.totalBudget;
  }

   sum: number = this.addNumbers(10+this.totalBudget)
}
