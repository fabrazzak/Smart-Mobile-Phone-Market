const loadData= () => {
    const inputText= document.getElementById('search-input').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
}



const displayData= (phones) =>{
    if(phones==phones.true){
        console.log('nul vai'+  phones);
    }
    const cardGroupe= document.getElementById('card-groupe');
    
    cardGroupe.innerHTML="";
    const spainerDiv=document.createElement('div');
    const spainer=document.getElementById('spainer');
    spainer.innerHTML=``;
   
    spainerDiv.innerHTML=`<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
    spainer.appendChild(spainerDiv);
    phones.forEach(phone =>{
        
        
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
                <div class="card">
                  <img src="${phone.image}" class=" w-50 mx-auto my-lg-5 my-3" alt="...">
                  <div class="card-body">
                    <h3 class="card-title my-3">${phone.phone_name}</h3>
                    <h5 class="card-text my-3">${phone.brand}</h5>
                    <button type="button" onclick="loadPhone('${phone.slug}')" class="btn btn-primary btn-lg my-3" data-bs-toggle="offcanvas"         data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Details</button>
                    
                  </div>
                </div>
        
        `;
       
       
        cardGroupe.appendChild(div);
        
    })
    spainerDiv.innerHTML=`<h3 class=" text-center text-primary " >This search is found below</h3>`;
  
   

}

const loadPhone=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data))

}
const displayPhone= (phone) => {
   
    const storageS=phone.data.mainFeatures.storage;
    console.log(phone.data);

    const offCanvasRight= document.getElementById('offcanvasRight');
    offCanvasRight.innerHTML=`<div class="offcanvas-header">
                               <h5 id="offcanvasRightLabel">${storageS}</h5>
                                <button type="button" class="btn-close text-reset fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                             </div>
                              <div class="offcanvas-body">
                              <div class="card">
                              <img src="${phone.data.image}" class=" w-75 mx-auto my-lg-5 my-3" alt="...">
                              <div class="card-body">
                              <p class="  text-center card-title">${phone.data.releaseDate}</p>

                               <div class="row">
                                 <div class="col"> <h3 class=" my-3"> Name: ${phone.data.name}</h3>
                                 </div>
                                 <div class="col"><h5 class=" my-3 text-end"> Brand: ${phone.data.brand}</h5></div>
                               </div>
                                <ol class="fs-5">
                                   <li>Chipset: ${phone.data.mainFeatures.chipSet}</li>
                                   <li>Display-Size: ${phone.data.mainFeatures.displaySize}</li>
                                   <li>Sensor:  ${phone.data.mainFeatures.sensors}</li>
                                   <li>Memory:  ${phone.data.mainFeatures.memory}</li>
                                 </ol>
                                
                                
                                
                              </div>
                            </div>
                             </div>`

}