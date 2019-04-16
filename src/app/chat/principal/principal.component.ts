import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  msgtxt = '';
  username = '';
  losmsgs = null;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.getMensajes().subscribe(data=>{
      this.losmsgs=data;
    })
  }

  ngOnDestroy() {
  }

  envia() {
    this._chatService.sendMess({ user: this.username, txt: this.msgtxt });
  }

}
