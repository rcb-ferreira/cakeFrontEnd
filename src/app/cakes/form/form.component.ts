import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  pageTitle: string;
  canEdit: boolean;
  cakeForm: FormGroup;
  id: number = null;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private activeAouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.pageTitle = this.activeAouter.snapshot.data.title;
    this.canEdit =
      this.activeAouter.snapshot.data.type === 'edit' ? true : false;

    // Only get details if on edit page
    if (this.canEdit) {
      this.getDetail(this.activeAouter.snapshot.params.id);
    }

    this.cakeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      comment: ['', Validators.compose([Validators.required])],
      imageUrl: ['', Validators.compose([Validators.required])],
      yumFactor: ['', Validators.compose([Validators.required])]
    });
  }

  getDetail(id) {
    this.api.getCake(id).subscribe(data => {
      this.data = data;
      this.id = this.data.id;

      this.cakeForm.setValue({
        name: this.data.name,
        comment: this.data.comment,
        imageUrl: this.data.imageUrl,
        yumFactor: this.data.yumFactor
      });
    });
  }

  submitCakeForm(form: NgForm) {
    if (this.canEdit) {
      this.updateCake(form);
    } else {
      this.addCake(form);
    }
  }

  updateCake(payload) {
    this.api.updateCake(this.id, payload.value).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

  addCake(payload) {
    this.api.addCakes(payload.value).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
