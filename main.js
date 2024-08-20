function fetched(contry,city){
fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${contry}`
).then(function(respons){

if (respons.status>=200 & respons.status<300){
 return respons.json()}else{
 }
  
}).then(function(respons) {
 
 const trans = {
      'Fajr': 'الفجر',
      'Dhuhr': 'الظهر',
      'Asr': 'العصر',
      'Maghrib': 'المغرب',
      'Isha': 'العشاء',
      'Sunrise': 'الشروق'
    };  

  let timings = respons.data.timings;
    for (let [key, value] of Object.entries(timings)) { 
let keys= trans[key] || key;
 if (! keys.includes(key)) {
 
document.getElementById('timep').innerHTML+=`     
      <div class="time" >
        <h1>${keys}</h1>
         <h2>${value}</h2>
      </div> 
  `
} 
  
 }      

document.getElementById('date').innerHTML+=`${respons.data.date.hijri.weekday.ar+ respons.data.date.readable} `
 
}).catch(function(error) {
  console.error('Error:', error);
});    
} 

 function onchanged(){
btn=document.getElementById('btn')
if(btn.value==""){
    document.getElementById("imgpray").style.display="block"
}
btn.onchange=function (){
     
for(cite of cites){
if (this.value !== "") {
   if( cite.arabname==this.value) {
    remove()
    let contry=cite.contry
    let city=cite.city
    fetched(contry,city) 
      document.getElementById("imgg").style.display="block"; 
document.getElementById ('city').innerHTML=this.value;

document.getElementById("imgpray").style.display="none"
    break;
  } 
}else{
    remove()
    
document.getElementById("imgpray").style.display="block"   


}
}}}

var cites=[
{
arabname:"",
contry:"",
city:""
}, 
{
arabname:"الجزائر",
contry:"DZ", 
city:"Algeries"}, 
{
arabname:"العراق-بابل", 
contry:"IQ", 
city:"Bābil"    
},
{
arabname:"السعودية-الرياض",
contry:"SA", 
city:"Riyadh"}, 
{
arabname:"الأردن", 
contry:"JO", 
city:"Al Mafraq"
}, 
] 
for(let cite of cites){
const contents= `
<option>${cite.arabname}</option>

` 
 document.getElementById("btn").innerHTML += contents
   
}
onchanged()
function remove(){
document.getElementById('timep').innerHTML ='';
    document.getElementById('date').innerHTML = '';
    document.getElementById('city').innerHTML = '';
document.getElementById("imgg").style.display="none";    
}