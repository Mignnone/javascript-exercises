
function Triangle (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.isTriangle = function() {
        return (a>0) && (b>0) && (c>0);
    }
    this.returnPerimeter = function (){
        return (a+b+c);
    };
}

var js = new Triangle (13,16,19);
console.log (js.isTriangle());
console.log (js.returnPerimeter());

var ph = new Triangle (-3,5,10);
console.log (ph.isTriangle());
console.log (ph.returnPerimeter());

var ht = new Triangle (3,-4,2);
console.log (ht.isTriangle());
console.log (ht.returnPerimeter());