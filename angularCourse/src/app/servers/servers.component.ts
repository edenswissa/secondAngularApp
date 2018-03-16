import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus: String = 'no server was created';
  serverName : string = '';
  serverCreated : boolean = false;
  servers = [];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onAddServer()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  

}
