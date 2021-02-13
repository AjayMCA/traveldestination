import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messageService } from "./msg.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers : [messageService]
})
  
export class AboutUsComponent implements OnInit {

  msgList:any;
  constructor(private formBuilder: FormBuilder, private _msgService: messageService, private http: HttpClient)
  {
    
     }
  feedback: FormGroup;
  editFbk: FormGroup;
  fId: any;
  fName: any;
  fEmail: any;
  fMessage: any;
  submitted = false;
  ngOnInit() {
        this.feedback = this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        email: [null, [Validators.required, Validators.email]],
        message: [null, [Validators.required, Validators.minLength(10)]]
        });
        this.editFbk = this.formBuilder.group({
          name: [null, [Validators.required, Validators.minLength(5)]],
          email: [null, [Validators.required, Validators.email]],
          message: [null, [Validators.required, Validators.minLength(10)]]
        });
    //Calling message service
    this._msgService.getAllMessage().subscribe(data => {
      this.msgList = <any[]>data;
      console.log(data);
    });
  }  
  //update feedback
  editFeedback(id: any, name: string, email: string, message: string) {
    this.fId = id;
    this.fName = name;
    this.fEmail = email;
    this.fMessage = message;

  }
  // Delet feedback {
    delete(id: number) {
      this._msgService.deleteFeedback(id).subscribe(da => {
        console.log(da);
        this._msgService.getAllMessage().subscribe(data => {
          this.msgList = <any[]>data;
          console.log(data);
        });
      })
    }
  
  //Update Feedback form
  updateFeedbackForm() {
    this._msgService.updateFeedbackForm(this.editFbk.value).subscribe(da => {
      console.log(da);
    })
  }
    
  //Form Validation
  onSubmit() {
        // stop here if form is invalid
        if (this.feedback.invalid) {
          alert("Please fill the complete form.")
        } else {
          this._msgService.createPost(this.feedback.value).subscribe(da => {
                  this._msgService.getAllMessage().subscribe(data => {
                  this.msgList = <any[]>data;
                  });
          })
          alert("Form Submitted.")
        }
        this.feedback.reset();
  }
}
 