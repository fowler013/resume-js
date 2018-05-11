var name= "Tevin Fowler"
var career="Web Developer/ Student"
var bio="I am a web-developer student at Innovation Depot. I am from Birmingham Alabama and grewup in Homewood, Alabama."
var interests=["soccer", "music", "video games", "reading", "coding"]
var past=[job="homewood city schools, assistant teacher"]
var mySkills=["HTML", "CSS", "Javascript"]

console.log("name" + ":" + " " + name);
console.log("career" + ":" + " " + career);
console.log("My Bio" + ":" + " " + bio);


function myInterests(){
    for(i=0; i<interests.length; i++){
        console.log("My Interest" + ":" + " " + interests[i]);
    };
}myInterests(interests);

function myPast(){
    for (let i = 0; i < past.length; i++){
       console.log("My Previous Experience" + ":" + " " +  past[i]);
        
    }
}myPast()


function Skills(){
    for ( let i=0; i < mySkills.length; i++){
        console.log("My Skills" + ":" + " " + mySkills[i]);
    }
}Skills()

