
var res;
var y;
var opp;
var z;
function one()
{
if(opp==undefined)
{if(y==undefined)
y=1;
else
y=y*10+1;
document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=1;
else
z=z*10+1;
document.getElementById("number").value=z;
}
}
function two()
{
if(opp==undefined)
{if(y==undefined)
y=2;
else
y=y*10+2;
document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=2;
else
z=z*10+2;document.getElementById("number").value=z;
}
}
function three()
{
if(opp==undefined)
{if(y==undefined)
y=3;
else
y=y*10+3;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=3;
else
z=z*10+3;document.getElementById("number").value=z;
}
}
function four()
{
if(opp==undefined)
{if(y==undefined)
y=4;
else
y=y*10+4;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=4;
else
z=z*10+4;document.getElementById("number").value=z;
}

}
function five()
{
if(opp==undefined)
{if(y==undefined)
y=5;
else
y=y*10+5;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=5;
else
z=z*10+5;document.getElementById("number").value=z;
}
}
function six()
{
if(opp==undefined)
{if(y==undefined)
y=6;
else
y=y*10+6;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=6;
else
z=z*10+6;document.getElementById("number").value=z;
}
}
function seven()
{
if(opp==undefined)
{if(y==undefined)
y=7;
else
y=y*10+7;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=7;
else
z=z*10+7;document.getElementById("number").value=z;
}
}
function eight()
{
if(opp==undefined)
{if(y==undefined)
y=8;
else
y=y*10+8;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=8;
else
z=z*10+8;document.getElementById("number").value=z;
}
}
function nine()
{
if(opp==undefined)
{if(y==undefined)
y=9;
else
y=y*10+9;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=9;
else
z=z*10+9;document.getElementById("number").value=z;
}
}
function zero()
{
if(opp==undefined)
{if(y==undefined)
y=0;
else
y=y*10+0;document.getElementById("number").value=y;
}
else
{ 
if(z==undefined)
z=0;
else
z=z*10+0;document.getElementById("number").value=z;
}
}
function calc()
{
var num1=Number(y);
var num2=Number(z);
if(opp=="add")
res=num1+num2;
else if(opp=="sub")
res=num1-num2;
else if(opp=="mul")
res=num1*num2;
else if(opp=="div")
{
if(num2==0)
alert("Cannot divide with zero");
else
res=num1/num2;
}
else if(opp=="mod1")
res=num1*(num2/100);
else if(opp=="sqrt1")
res=Math.sqrt(num1);
else
if(opp=="abs")
{res=Math.abs(num1);
}
//y=undefined;

document.getElementById("number").value=res;
//document.getElementById("number").value=" ";
z=undefined;
opp=undefined;
y=res;
//alert(y+" "+z+" "+res);
return res;
}
function oper1(op)
{//alert("hii");
opp=op.value;
if(opp==undefined)
{
res=undefined;
y=undefined;
z=undefined;
op=undefined;
}
document.getElementById("number").value=" ";
//document.getElementById("number").value=" ";
//alert(opp);
}
/*
                                            extra code written in jquery (open)

var y;var x;
var op;
$(document).ready(function(){
$("#1").click(function(){
  $("#number").val($("#number").val()+"1");
});
});
$(document).ready(function(){
$("#2").click(function(){
  $("#number").val($("#number").val()+"2");
});
});
$(document).ready(function(){
$("#3").click(function(){
  $("#number").val($("#number").val()+"3");
});
});
$(document).ready(function(){

$("#4").click(function(){
   $("#number").val($("#number").val()+"4");
});
});
$(document).ready(function(){
$("#5").click(function(){
  $("#number").val($("#number").val()+"5");
});
});
$(document).ready(function(){
$("#6").click(function(){
  $("#number").val($("#number").val()+"6");
});
});
$(document).ready(function(){
$("#7").click(function(){
  $("#number").val($("#number").val()+"7");
});
});
$(document).ready(function(){
$("#8").click(function(){
  $("#number").val($("#number").val()+"8");
});
});
$(document).ready(function(){
$("#9").click(function(){
  $("#number").val($("#number").val()+"9");
});
});
$(document).ready(function(){
$("#0").click(function(){
  $("#number").val($("#number").val()+"0");
});
});
$(document).ready(function(){
$("#div").click(function(){
y=$("#number").val();
op=$("#div").val();
  $("#number").val(" ");

});
});
$(document).ready(function(){
$("#mul").click(function(){
y=$("#number").val();
op=$("#mul").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#add").click(function(){
y=$("#number").val();
op=$("#add").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#sub").click(function(){
y=$("#number").val();
op=$("#sub").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#clear").click(function(){
y=$("#number").val();
op=$("#clear").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#abs").click(function(){
y=$("#number").val();
op=$("#abs").val();
calc();
});
});
$(document).ready(function(){
$("#mod1").click(function(){
y=$("#number").val();
op=$("#mod1").val();
$("#number").val(" ");
});
});
$(document).ready(function(){
$("#sqrt1").click(function(){
y=$("#number").val();
op=$("#sqrt1").val();
calc();
});
});

function calc()
{ x=Number(document.getElementById("number").value);
y=Number(y);
if(op=='add')
var c=x+y;
if(op=='sub')
{
var c=y-x;
}
if(op=='mul')
var c=x*y;
if(op=='div')
{
if(x!="0")
var c=y/x;
else
alert("error");
}
if(op=='abs')
{
var c=x;
if(x<0)
var c=x-2*x;
}
if(op=="mod1")
{//alert("hii");
var c=(y/100)*x;}//
if(op =="sqrt1")
{
var c=Math.sqrt(x);
}
document.getElementById("number").value = c;
return c;
}
                              extra code written in jquery (close)
*/
                                                        

//validation function


function validate()
{//alert("hii");
var flag=0;
var name=document.getElementById("name").value;
var phno=document.getElementById("phno").value;
var email=document.getElementById("email").value;
if(name.charCodeAt(0)>=48&&name.charCodeAt(0)<=57)
{alert("error:The first letter of the name is an integer");
return false;
}
if(phno.length<10)
{
alert("error:phone number is less than 10 numbers");
return false;
}
for(var i=0;i<phno.length;i++)
{if(phno.charCodeAt(i)>=48&&phno.charCodeAt(i)<=57)
flag=0;
else
flag=1;
}
if(flag==1)
{alert("error:Phone number is wrong");return false;}
flag=0;
for(var i=0;i<email.length;i++)
{
if(email.charAt(i)=='@')
flag=1;
}
if(flag==0)
{alert("error:Email is wrong");
return false;}
return true;
}

//palindrome and anagram function

function palindrome()
{
var str="";
var x=document.getElementById("word").value;
var temp=x;
var n=x.length-1;
while(n>=0)
{
str=str+x.charAt(n--);
}
if(str==temp)
{
alert("palindrome");
return true;
}
else
{//document.getElementById("result").value="false";
alert("not palindrome");
return false;
}
var y=document.getElementById("word1").value;
var z=document.getElementById("word2").value;
y=y.toLowerCase();
z=z.toLowerCase();
var res=y.split(" ");
var s=z.split(" ");
var text="";
var str="";
for(i=0;i<res.length;i++)
{
str=str+res[i];
text=text+s[i];
}
//str=str.sort();
//alert(str);
res=str.split('').sort().join('');
//alert(res);
var res1=text.split('').sort().join('');
var sres=res.search(res1);
//alert(sres);
if(sres>=0)
{alert("They are Anagrams");return true;}
else
{alert("They are not anagrams");return false;}
}

//game play function


function gameplay()
{
var x=Math.floor((Math.random() * 10) + 1);
var y=Math.floor((Math.random() * 10) + 1);
document.getElementById("rnum1").value=x;
document.getElementById("rnum2").value=y;
var ob1=x%3;
var ob2=y%3;
var diff=Math.abs(ob1-ob2);
if(diff==2)
{
result="Human Dies";
}
if(diff==1)
{
if(ob1==0&&ob2==1)
result="Cockroach dies"
else
result="cockroach survives"
}
if(diff==0)
result="TIE";
//alert(ob1+" "+ob2);
document.getElementById("result").value=result;	
return result;
}








