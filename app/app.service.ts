import {Injectable} from "@angular/core";
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()
export class AppService{
    headers : any = new Headers({'content-Type':'application/json'});

    http: any;
    constructor(http:Http){
        this.http = http;
    }
    create(body,controller,action){
        let options = new RequestOptions({headers: this.headers});
        this.http = new Http(this.headers,options);
        let url  =  "/Api/"+controller+"/"+action;
        return this.http.post(url,body,this.headers).toPromise.then((res:Response) => res.json());
    }
    update(body,id,controller,action){
        let options = new RequestOptions({headers:this.headers});
        this.http = new Http(this.headers,options);
        let url = "/Api/"+controller+"/"+action;
        return this.http.put(url,id,body,this.headers).toPromise.then((res:Response) => res.json());
    }

    delete(_id,controller,action){
        let Options = new RequestOptions({headers:this.headers})
        this.http = new Http(this.headers,Options);
        let url = "/Api/"+controller+"/"+action+"/"+_id;
        return this.http.delete(url);
    }
    get(controller,action){

    }
}