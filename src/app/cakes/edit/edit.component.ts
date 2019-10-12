import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Cake } from '../cake';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  cakeForm: FormGroup;
  id: number = null;

  constructor(
    private formBuilder: FormBuilder,
    private activeAouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {

    this.getDetail(this.activeAouter.snapshot.params.id);

    this.cakeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
    });
  }

  getDetail(id) {
    this.api.getCake(id)
      .subscribe(data => {
        this.id = data.id;
        this.cakeForm.setValue({
          name: data.name
        });
        console.log(data);
      });
  }

  updateCake(form: NgForm) {
    // this.api.updateCake(this.id, form)
    //   .subscribe(res => {
    //     this.router.navigate(['/']);
    //   }, (err) => {
    //     console.log(err);
    //   }
    //   );
  }

}
