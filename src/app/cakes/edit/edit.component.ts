import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  cakeForm: FormGroup;
  id: number = null;
  data: any;

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
      comment: ['', Validators.compose([Validators.required])],
      imageUrl: ['', Validators.compose([Validators.required])],
      yumFactor: ['', Validators.compose([Validators.required])]
    });
  }

  getDetail(id) {
    this.api.getCake(id)
      .subscribe(data => {
        this.data = data;
        this.id = this.data.id;

        this.cakeForm.setValue({
          name: this.data.name,
          comment: this.data.comment,
          imageUrl: this.data.imageUrl,
          yumFactor: this.data.yumFactor,
        });
      });
  }

  updateCake(form: NgForm) {
    this.api.updateCake(this.id, form)
      .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

}
