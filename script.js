let detailsBtn = document.querySelectorAll(".showDetails");
let searchValue = document.querySelector(".sphone");
let searchBtn = document.querySelector(".sbtn");

let allPhones = document.querySelector(".allPhones");
let phoneList = document.querySelectorAll(".phoneList");
let popUP = document.querySelector(".popUp");


let fetchingData = async ()=>{

   
    
    console.log(searchValue.value);

    allPhones.innerHTML="";

         let raw = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue.value}`);
         let data = await raw.json();

         console.log(data);
         
         let details = data.data;
   
         console.log(details);
         details.map((prod)=>{
  
            let div = document.createElement("div");
            let img = document.createElement("img");
            let DtlBtn = document.createElement("button");
            // let brandName = document.createElement("h3");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");

            
            img.classList = "appendImg";
            div.classList = "prodDiv";
            DtlBtn.classList = "closeBtn";

            DtlBtn.innerText = "Show Details";
            img.src = prod.image;
            // brandName.innerText = prod.brand;
            p1.innerText = prod.phone_name;
            p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto ab totam aliquam at corrupti asperiores error quibusdam accusantium, a voluptate eius repellendus, doloremque obcaecati est omnis voluptatibus dolor voluptates";

            
            div.appendChild(img);
            div.appendChild(p1);
            // div.appendChild(brandName);
            div.appendChild(p2);
            div.appendChild(DtlBtn);

            
            allPhones.appendChild(div);

           DtlBtn.addEventListener("click", (e)=>{

            let sDiv = document.createElement("div");
            let wBtn = document.createElement("button");
            
            wBtn.innerText = "CLOSE";
            
            sDiv.appendChild(img);
            sDiv.appendChild(p1);
            // div.appendChild(brandName);
            sDiv.appendChild(p2);
            sDiv.appendChild(wBtn);

            popUP.style.display = "flex";
            popUP.appendChild(sDiv);
            console.log(popUP);
            console.log(sDiv);

            wBtn.addEventListener("click", ()=>{
               popUP.style.display = "none";
            })
            

           })

            
            
   })
}
searchBtn.addEventListener("click", fetchingData);