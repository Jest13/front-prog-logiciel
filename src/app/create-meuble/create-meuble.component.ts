import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Meuble} from '../meuble';
import { MeubleService } from '../meuble.service';

@Component({
  selector: 'app-create-meuble',
  templateUrl: './create-meuble.component.html',
  styleUrls: ['./create-meuble.component.css']
})
export class CreateMeubleComponent implements OnInit {

  meuble: Meuble = new Meuble();

  constructor(private meubleService: MeubleService,
              private router: Router ) {}

  ngOnInit(): void {
  }

  saveMeuble(){
    this.meubleService.createMeuble(this.meuble).subscribe( data =>{
      console.log(data);
      this.goToMeubleList();
    },
      error => console.log(error));
  }

  goToMeubleList(){
  this.router.navigate(['/meubles']);
  }
  onSubmit() {
    console.log(this.meuble);
    this.saveMeuble();
  }


}
