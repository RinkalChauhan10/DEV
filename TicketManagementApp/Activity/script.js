let allFilters=document.querySelectorAll(".filter");
let ticketscontainer=document.querySelector(".ticket-container");
let openmodal=document.querySelector(".open-modal");
let closemodal=document.querySelector(".close-modal");
let ticketmodalopen=false;
let isTextTyped=false;

for(let i=0;i<allFilters.length;i++){
    allFilters[i].addEventListener("click",selectFilter);
}

function selectFilter(e){
   let filterselected= e.target.classList[1];
   if(ticketscontainer.classList.length>1){
       ticketscontainer.classList.remove(ticketscontainer.classList[1]);
   }
   ticketscontainer.classList.add(filterselected);
}

openmodal.addEventListener("click",openticketmodal);
closemodal.addEventListener("click",closeticketmodal);

function openticketmodal(e){
    if(ticketmodalopen){
        return;
    }
    let ticketmodal=document.createElement("div");
    ticketmodal.classList.add("ticket-modal");
    ticketmodal.innerHTML=`<div class="ticket-text" spellcheck="false" contenteditable="true">Enter your Text !</div>
    <div class="ticket-filter">
      <div class="ticket-filters red selected-filter"></div>
      <div class="ticket-filters blue"></div>
      <div class="ticket-filters green"></div>
      <div class="ticket-filters yellow"></div>
      <div class="ticket-filters purple"></div>
    </div>`
    document.querySelector("body").append(ticketmodal);
    ticketmodalopen=true;
    isTextTyped=false;

let ticketTextDiv = ticketmodal.querySelector(".ticket-text");
ticketTextDiv.addEventListener("keypress",handlekeypress);

let ticketfilter=ticketmodal.querySelectorAll(".ticket-filters");
for(let i=0; i<ticketfilter.length; i++){
  ticketfilter[i].addEventListener("click", function(e){
      if(e.target.classList.contains("selected-filter")){
          return;
      }
      document.querySelector(".selected-filter").classList.remove("selected-filter");
      e.target.classList.add("selected-filter");
  })  
}
}

function closeticketmodal(e) {
 if(ticketmodalopen){
     document.querySelector(".ticket-modal").remove();
     ticketmodalopen=false;
     isTextTyped=false;
 }   
}
function handlekeypress(e){
    if(e.key=="Enter" && isTextTyped && e.target.textContent){
        let selectedfilter=document.querySelector(".selected-filter").classList[1];
        let ticketInfoObject={ticketFilter:selectedfilter,ticketValue:e.target.textContent};
        appendticket(ticketInfoObject);
        closemodal.click();
       
    }
 if(!isTextTyped){
     isTextTyped = true;
     e.target.textContent="";
 } 
   
}

function appendticket(ticketInfoObject){
    let ticketDiv=document.createElement("div");
    ticketDiv.classList.add("ticket");
    let{ticketFilter,ticketValue}=ticketInfoObject;
    ticketDiv.innerHTML=`<div class="ticket-header ${ticketFilter}"></div>
     <div class="ticket-content">
     <div class="ticket-info">
       <div class="ticket-id">#fc5c65</div>
           <div class="ticket-delete">
             <i class="fas fa-trash"></i>
           </div>
         </div>
         <div class="ticket-value">
           ${ticketValue}
         </div>
       </div>`

    ticketscontainer.append(ticketDiv);

}

 