import {Component} from '@angular/core';
@Component
({
    selector: 'app-my',
    templateUrl: './point.component.html'
})
export class PointComponent {
    xar:number[]=[0];
    yar:number[]=[0];
    belar:boolean[]=[false];
    xn=0;
    xk=0;
    hx=0;
    yn=0;
    yk=0;
    hy=0;
    r=0;
    Belong(x:number, y:number, r:number):boolean{
        if(x>=-r && x<=r && y>=-r && y<=r && x*x+y*y>=r*r){
            return true;    
        }
        else
        return false;
    }
    setall(xnn:string, xkk:string, hxx:string, ynn:string, ykk:string, hyy:string, rr:string){
        let s = "";
        s=xnn;
        this.xn=parseFloat(s);
        s=xkk;
        this.xk=parseFloat(s);
        s=hxx;
        this.hx=parseFloat(s);
        s=ynn;
        this.yn=parseFloat(s);
        s=ykk;
        this.yk=parseFloat(s);
        s=hyy;
        this.hy=parseFloat(s);
        s=rr;
        this.r=parseFloat(s);
        //виклик методу для додавання крапки у масив
        this.addPoint();
    }
    addPoint(){
        let x = this.xn;
        let y = this.yn;
        let belong = false;
        //видаляємо перший елемент масиву
        this.xar.pop();
        this.yar.pop();
        this.belar.pop();
        while (x<=this.xk){
            while(y<=this.yk){
                belong=this.Belong(x,y,this.r);
                this.xar.push(x);
                this.yar.push(y);
                this.belar.push(belong);
                y=y+this.hy;
            }
            x=x+this.hx;
            y=this.yn;
        }
    }
    getColor(b:boolean) {
        return b === true ? 'green' : 'red'; 
    }
}