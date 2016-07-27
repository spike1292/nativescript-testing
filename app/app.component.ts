import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public items:Array<{date:String, body:String, custom:boolean, type:string}> = [{
        date:'2011-06-24',
        body:'Hello',
        custom:true,
        type:'start'
    }, {
        date:'2011-06-25',
        body:'Hello 2',
        custom:false,
        type:'start'
    }, {
        date:'2011-06-26',
        body:'Hello 3',
        custom:false,
        type:'end'
    },{
        date:'2011-06-27',
        body:'Hello 4',
        custom:true,
        type:'start'
    },{
        date:'2011-06-28',
        body:'Hello 5',
        custom:false,
        type:'start'
    }]
}
