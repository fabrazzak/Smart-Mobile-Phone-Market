const loadData= () => {
    const inputText= document.getElementById('search-input').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
     document.getElementById('search-input').value="";
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
}



const displayData= (phones) =>{
    
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
  
  if(phones.length==[]){
        spainer.innerHTML=` <h3 class=" text-center text-primary " ><img src="img/search.png" alt="" class="flat-icon"> No results found</h3>`;
    
    return ;
  }
 
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
    spainerDiv.innerHTML= ` <h3 class=" text-center text-primary " ><img src="img/search.png" alt="" class="flat-icon"> Some results found</h3>`;
  
   

}

const loadPhone=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data))

}
const displayPhone= (phone) => {
   
    const storageS=phone.data.mainFeatures.storage;

    const offCanvasRight= document.getElementById('offcanvasRight');
    offCanvasRight.innerHTML=`<div class="offcanvas-header">
                               <h5 id="offcanvasRightLabel"><span class="text-primary fw-bold fs-4">Storage: </span>${storageS}</h5>
                                <button type="button" class="btn-close text-reset fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                             </div>
                              <div class="offcanvas-body">
                              <div class="card">
                              <img src="${phone.data.image}" class=" w-75 mx-auto my-lg-5 my-3" alt="...">
                              <div class="card-body">
                              

                               <div class="row">
                                 <div class="col-lg-8 col-12"> <h3 class=" my-lg-3"> <span class="text-primary fw-bold fs-3">Name: </span> ${phone.data.name}</h3>
                                 <span class="  card-title">${phone.data.releaseDate ? phone.data.releaseDate : "Coming up soon"
                                  
                                 }</span>
                                 </div>
                                 <div class="col-lg-4 col-12"><h5 class=" my-lg-3 text-lg-end  my-3"> <span class="text-primary fw-bold fs-4">Brand: </span> ${phone.data.brand}</h5></div>
                               </div>
                               <div class="col-12 col-lg-12">
                               <h3 class="my-3 text-primary">Info: </h3>
                                <ul class="fs-6">
                                   <li><h5>Chipset:</h5> <p>${phone.data.mainFeatures.chipSet}</p></li>
                                   <li><h5>Display-Size:</h5> <p>${phone.data.mainFeatures.displaySize}</p></li>
                                   <li><h5>Sensor:</h5> <p>${phone.data.mainFeatures.sensors}</p></li>
                                   <li><h5>Memory:</h5> <p>${phone.data.mainFeatures.memory}</p></li>
                                   
                                 </ul>
                               </div>
                               <div class="col-12 col-lg-12">
                               <h3 class="my-3 text-primary">Others: </h3>
                                <ul class="fs-6">
                                   <li><h5>Bluetooth :</h5> <p>${phone.data. others ?.Bluetooth ? phone.data.others.Bluetooth : "Not avalable"}</p></li>
                                   <li><h5>GPS:</h5> <p>${phone.data.others ?. GPS ? phone.data.others.GPS : "Not avalable"}</p></li>
                                   <li><h5>NFC:</h5> <p>${phone.data.others?.NFC ? phone.data.others.NFC : "Not avalable"}</p></li>
                                   <li><h5>USB:</h5> <p>${phone.data.others?.USB ? phone.data.others.USB : "Not avalable"}</p></li>
                                   <li><h5>WLAN:</h5> <p>${phone.data.others?.WLAN ? phone.data.others.WLAN : "Not avalable"}</p></li>
                                   
                                 </ul>
                               </div>
 
                                
                              </div>
                            </div>
                             </div>`

}