'use strict';
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const target=(event.notification.data&&event.notification.data.url)||new URL('./fila-alertas.html',self.registration.scope).href;
 event.waitUntil((async()=>{
  const windows=await clients.matchAll({type:'window',includeUncontrolled:true});
  for(const client of windows){
   if(client.url===target&&'focus' in client){await client.focus();return}
  }
  if(clients.openWindow)await clients.openWindow(target);
 })());
});