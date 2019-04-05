//Write a JavaScript program that accept two integers and display the larger.
function maxInteger(num1, num2) {
    if (num1 === num2) {
        return null;
    } else {
        if (num1 > num2) {
            return num1;
            return num2;
        }
    }}
        maxInteger(35, 33)

/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
Sample numbers : 3, -7, 2 
Output : The sign is - */
        
function whatSign(a,b,c) {
var a = 3;
var b = -7;
var c = 2;
if (a*b*c<0){
    return ('alert -');
}else{
    return ('alert +');
}
        }

        function whatSign(x) {
            var x = whatSign (3,-7,2);
            if (x<0){
                return ('alert -');
            }else{
                return ('alert +');
            }
                    }
/*3.	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1*/       

var numbers = [0, -1, 4 ]
numbers.sort(function(a,b){
    return b-a;
});
console.log (numbers)

/*4.	Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */