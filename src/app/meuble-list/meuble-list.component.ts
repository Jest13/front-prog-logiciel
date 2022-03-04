import { Component, OnInit } from '@angular/core';
import {Meuble} from "../meuble";
import {MeubleService} from "../meuble.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-meuble-list',
  templateUrl: './meuble-list.component.html',
  styleUrls: ['./meuble-list.component.css']
})
export class MeubleListComponent implements OnInit {
  meubles: Meuble[] = [];


  constructor(private meubleService: MeubleService,
              private router: Router) { }

  ngOnInit(): void {
    this.getMeubles();
  }

  private getMeubles(){
    this.meubleService.getMeublesList().subscribe(data => {
      this.meubles = data;
      console.log(data);
    });
  }
  updateMeuble(id: number){
    this.router.navigate(['update-meuble', id]);
  }

  deleteMeuble(id: number) {
    this.meubleService.deleteMeuble(id).subscribe( data => {
      console.log(data);
      this.getMeubles();
    })
  }
}
