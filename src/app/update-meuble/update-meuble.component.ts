import { Component, OnInit } from '@angular/core';
import {Meuble} from "../meuble";
import {MeubleService} from "../meuble.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-meuble',
  templateUrl: './update-meuble.component.html',
  styleUrls: ['./update-meuble.component.css']
})
export class UpdateMeubleComponent implements OnInit {

  id: number;
  meuble: Meuble = new Meuble();

  constructor(private meubleService: MeubleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.meubleService.getMeubleById(this.id).subscribe(data => {
      this.meuble = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.meubleService.updateMeuble(this.id, this.meuble).subscribe(data => {
      this.goToMeubleList()
    }
    , error => console.log(error));
  }

  goToMeubleList() {
    this.router.navigate(['/meubles']);
  }
}
