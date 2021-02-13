import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { editPostData, postData } from './updateMsg';

@Injectable()

export class messageService {
  constructor(private _http : HttpClient) {
    
  }

  //Get Method
  getAllMessage() {
    return this._http.get('http://localhost:4800/posts');
  }
  
  //Post Method
  createPost(data : postData){
    return this._http.post('http://localhost:4800/posts', data);
  }

  //Delete 
  deleteFeedback(id:any) {
    return this._http.delete('http://localhost:4800/posts/' +id);
  }

  //Update form
  updateFeedbackForm(dataUpdate : editPostData) {
    return this._http.put('http://localhost:4800/posts/', dataUpdate);
  }
}