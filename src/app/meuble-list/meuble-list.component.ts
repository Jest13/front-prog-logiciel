import { Component, OnInit } from '@angular/core';
import {Meuble} from "../meuble";
import {MeubleService} from "../meuble.service";


@Component({
  selector: 'app-meuble-list',
  templateUrl: './meuble-list.component.html',
  styleUrls: ['./meuble-list.component.css']
})
export class MeubleListComponent implements OnInit {

  meubles: Meuble[] = [];

  constructor(private meubleService: MeubleService) { }

  ngOnInit(): void {
    this.getMeubles();
  }

  private getMeubles(){
    this.meubleService.getMeublesList().subscribe(data => {
      this.meubles = data;
    });
  }
}
