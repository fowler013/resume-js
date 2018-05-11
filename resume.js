var name= "Tevin Fowler"
var career="Web Developer/ Student"
var bio="I am a web-developer student at Innovation Depot. I am from Birmingham Alabama and grewup in Homewood, Alabama."
var interests=["soccer", "music", "video games", "reading", "coding"]
var past=[job="homewood city schools, assistant teacher", "B&N: I orked at the front desk and also assisted students with looking and picking certain text books", "Homewood Soccer Club; was a youth soccer coach for a few years"]
var mySkills=["HTML", "CSS", "Javascript"]
var BAM=true

console.log("NAME" + ":" + " " + name);
console.log("CAREER" + ":" + " " + career);
console.log("BIO" + ":" + " " + bio);


function myInterests(){
    console.log("MY INTEREST:");
    for(i=0; i<interests.length; i++){
        console.log("*" + interests[i]);
    };
}myInterests(interests);

function myPast(){
    console.log("MY PREVIOUS EXPERIENCE:");
    for (let i = 0; i < past.length; i++){
       console.log("*" + past[i]);
        
    };
}myPast()


function Skills(){
    console.log("MY SKILLS:");
    for ( let i=0; i < mySkills.length; i++){
        console.log("*" + mySkills[i]);
    }
}Skills()

function displaySkill(){

}