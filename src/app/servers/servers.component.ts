import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer:Boolean=false;
serverCreatedMessage="server was not created";
serverName="";
userName="";
serverShow=false;
servers=['TestServer','test2'];
constructor(){
  setTimeout(() => {
    this.allowNewServer=true;
  }, 2000);
}
createServer(){
  this.servers.push(this.serverName);
  this.serverShow=true;
  this.serverCreatedMessage="server was created";
}
updateServer(event:any){
this.serverName=event.target.value;
}
}
