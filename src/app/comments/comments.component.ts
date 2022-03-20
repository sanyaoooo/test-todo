import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {
  allcomments;
  errorMessage;
  constructor(private http: HttpClient) {  }
  ngOnInit() {
    this.getComments()
  }
  getComments(){
    this.http.get('https://gorest.co.in/public/v2/posts/100/comments').subscribe({
        next: data => {
            this.allcomments = data;
            console.log(this.allcomments)
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }
  commentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    body: new FormControl()
  });

  onSubmit(): void {
    console.log(this.commentForm.value)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token'
    });
    let options = {
      headers
    };
    let formData = this.commentForm.value
    this.http.post<any>('https://gorest.co.in/public/v2/posts/100/comments', formData, options).subscribe({
      next: data => {
        this.allcomments = data;
        console.log(data)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
    // this.commentForm.reset()
  }

}
