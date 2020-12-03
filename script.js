let year;
let age;
let name;
$(".calculate").click(function(){
  year= Number($ (".year").val())
  name=$(".name").val;
  console.log (name)
  console.log(year)
});
let currentYear=new Date ().getFullYear();
age= currentYear - year;
$(".message").text(${name}), you seem to be ${age} years old.);
