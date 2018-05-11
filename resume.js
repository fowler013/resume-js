var name= "Tevin Fowler"
var career="Web Developer/ Student"
var bio="I am a web-developer student at Innovation Depot. I am from Birmingham Alabama and grew up in Homewood, Alabama."
var interests=["soccer", "music", "video games", "reading", "coding"]
var past=[job="homewood city schools, assistant teacher", "B&N: I worked at the front desk and also assisted students with looking and picking certain text books", "Homewood Soccer Club; was a youth soccer coach for a few years"]
var mySkills=[{skillName: "HTML", isCool: true},{skillName: "CSS", isCool: true},{skillName: "Javascript", isCool: false}, {skillName: "soccer", isCool: true}]

console.log("NAME" + ":" + " " + name);
console.log("CAREER" + ":" + " " + career);
console.log("BIO" + ":" + " " + bio);

//this section is for my Interest
//this also contain a LOOP
function myInterests(){
    console.log("MY INTEREST:");
    for(i=0; i<interests.length; i++){
        console.log("*" + interests[i]);
    };
}myInterests(interests);

//add displayPosition


// this section is for my past work experience
//thi also contains a LOOP
function myPast(){
    console.log("MY PREVIOUS EXPERIENCE:");
    for (let i = 0; i < past.length; i++){
       console.log("*" + past[i]);
        
    };
}myPast()

// any skills I would like to add
//this also contains a LOOP
function Skills(){
    console.log("MY SKILLS:");
    for ( i=0; i < mySkills.length; i++){
        displaySkill(mySkills[i].skillName, mySkills[i].isCool);
    }
}Skills()


//what is displaySkill??
function displaySkill(skillName, isCool){
    if(isCool === true){
        console.log("* BAM" +" "+ skillName);
    }else{
        console.log("*" +" "+ skillName);
    }
}displaySkill()