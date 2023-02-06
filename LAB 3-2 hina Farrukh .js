var OurTeam=["Waleed","Hina","Amelia","maryum","zainab"];
var Num=0+1;
var OurTeamLength=OurTeam.length;
console.log(OurTeam);
OurTeam.pop(5);
console.log(OurTeam);
//OurTeam.push("Sean");
//console.log(OurTeam);
OurTeam.unshift("Sean");
console.log(OurTeam);
//OurTeam.sort;
console.log(OurTeam.sort());//why doesn't it put maryum before waleed on console as alphabetically m comes before w.
console.log(OurTeam.length);
alert("we have"+" "+OurTeamLength+"members in our group");
alert(OurTeamLength);
for(i=0;i<=5;i=5-1)
{
	//console.log(OurTeam[i]+"is"+" "+"number"+i+1);//why am i getting the increment of 10 after each iteration of i+1?
	console.log(OurTeam[i]+"is"+" "+"number"+i+0);//why is it skipping the next element after each iteration on the console?

//console.log(OurTeam[i]+" "+"is"+" "+"number"+" "+i+1);//why does this statement give me an infinite loop?

//console.log(OurTeam[i]); //+"is"+" "+"number"+i=0);
}
