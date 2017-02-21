document.addEventListener('DOMContentLoaded',function(){
   if('indexedDB' in window){
       console.log("Present");
   }
   var dbinstance=indexedDB.open('sample',2);

   dbinstance.onupgradeneeded=function(){
       console.log('Upgrading .....');
   }
   dbinstance.onsuccess=function(result){
       console.log('Opened.....');
       console.log(result.target.result);
   }
   dbinstance.onerror=function(){
       console.log('Closed....');
   }
});