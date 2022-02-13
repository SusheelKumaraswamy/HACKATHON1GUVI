document.addEventListener('DOMContentLoaded',submitdata);
async function submitdata()
{
        let len=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
        let lenobj=await len.json();
        //lenobj.length
            for(var i=1;i<=lenobj.length;i++){
                try{
                    let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${i}.json`);
                    let data=await response.json();
                    // console.log(data.id);
                    var divele=document.querySelector(".image");
    
                    var maindiv=document.createElement("div");
                    maindiv.setAttribute("class","row");
                    maindiv.setAttribute("id","main-id");
    
    
                    var diveach=document.createElement("div");
                    diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
                    var imagemakeup=document.createElement("img");
                    imagemakeup.setAttribute("class","image_"+data.id);
                    diveach.setAttribute("id","hello");
                    imagemakeup.src=data.image_link;
                    imagemakeup.alt="no img available"
                    diveach.append(imagemakeup);
                    maindiv.append(diveach);
                    
                    //name
                    var divname=document.createElement("div");
                    divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
                    var para1=document.createElement("p");
                    divname.setAttribute("id","hello");
                    para1.setAttribute("id","para-name");
                    para1.innerHTML="<b>Name: </b>"+data.name;
                    divname.append(para1); 
                    
                    //Brand
                    var para2=document.createElement("p");
                    para2.setAttribute("id","para-name");
                    para2.innerHTML="<b>Brand:</b>"+data.brand;
                    divname.append(para2); 
                    
    
                    //PRICE
                    var para3=document.createElement("p");
                    para3.setAttribute("id","para-name");
                    para3.innerHTML="<b>Price: </b>"+data.price+"$";
                    divname.append(para3); 
                    //PRODUCTLINK
                    var para4=document.createElement("p");
                    para4.setAttribute("id","para-name");
                    para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
                    divname.append(para4); 
                    //DISCRIPTION
                    
                    var para5=document.createElement("p");
                    para5.setAttribute("id","para-name");
                    para5.innerHTML="<b>Description:</b>"+data.description;
                    divname.append(para5); 
    
    
                    maindiv.append(divname); 
                    divele.appendChild(maindiv);
                }
                catch (error){
                    console.warn(error);
                }
                
            }   
}

//blush details
let countblush=0;
var a=document.getElementById("blushid1");
a.addEventListener("click",blush);
async function blush(){
    console.log(countblush)
    if(countblush===0){
        countblush++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".blushimage").style.display="block";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipstick").style.display="none";

        console.log("hello");
        let blusharr=[];
        let blushresponse= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
       
        console.log(blusharr)
        for(let i=0;i<blusharr.length;i++){
            try{
                let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
                let data=await response.json();
                console.log(data.id);
                
                var divele=document.querySelector(".blushimage");

                var maindiv=document.createElement("div");
                maindiv.setAttribute("class","row");    
                maindiv.setAttribute("id","main-id");


                var diveach=document.createElement("div");
                diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
                var imagemakeup=document.createElement("img");
                imagemakeup.setAttribute("class","image_"+data.id);
                diveach.setAttribute("id","hello");
                imagemakeup.src=data.image_link;
                imagemakeup.alt="no img available"
                diveach.append(imagemakeup);
                maindiv.append(diveach);
                
                //name
                var divname=document.createElement("div");
                divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
                var para1=document.createElement("p");
                divname.setAttribute("id","hello");
                para1.setAttribute("id","para-name");
                para1.innerHTML="<b>Name: </b>"+data.name;
                divname.append(para1); 
                
                //Brand
                var para2=document.createElement("p");
                para2.setAttribute("id","para-name");
                para2.innerHTML="<b>Brand:</b>"+data.brand;
                divname.append(para2); 
                

                //PRICE
                var para3=document.createElement("p");
                para3.setAttribute("id","para-name");
                para3.innerHTML="<b>Price: </b>"+data.price+"$";
                divname.append(para3); 
                //PRODUCTLINK
                var para4=document.createElement("p");
                para4.setAttribute("id","para-name");
                para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
                divname.append(para4); 
                //DISCRIPTION
                
                var para5=document.createElement("p");
                para5.setAttribute("id","para-name");
                para5.innerHTML="<b>Description:</b>"+data.description;
                divname.append(para5); 


                maindiv.append(divname); 
                divele.appendChild(maindiv);
            }
                catch (error){
                    console.warn(error);
            }
        
    }
}

else
{       
    document.querySelector(".image").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".blushimage").style.display="block";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipstick").style.display="none";
}   
 

}

//bronzedetails
var countbronze=0;
document.getElementById("blushid2").addEventListener("click",bronze);
async function bronze(){
    if(countbronze===0){
        countbronze++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="block";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipstick").style.display="none";
        console.log("hello bronze");
        let blusharr=[];
        let blushresponse= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".bronzeimage");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".bronzeimage").style.display="block";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipstick").style.display="none";
}
    
}


//eyelashimage
var counteyelash=0;
document.getElementById("blushid3").addEventListener("click",eyelash);
async function eyelash(){
    if(counteyelash===0){
        counteyelash++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="block";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipstick").style.display="none";

        console.log("hello eyelashimage");
        let blusharr=[];
        let blushresponse= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".eyelashimage");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="block";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipstick").style.display="none";
}
    
}


//eyeliner
var counteyeliner=0;
document.getElementById("blushid4").addEventListener("click",eyeliner);
async function eyeliner(){
    if(counteyeliner===0){
        counteyeliner++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="block";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipstick").style.display="none";
        
        
        console.log("hello eyeliner");
        let blusharr=[];
        let blushresponse= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".eyeliner");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="block";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipstick").style.display="none";
}
    
}

//eyeshadow
var counteyeshadow=0;
document.getElementById("blushid5").addEventListener("click",eyeshadow);
async function eyeshadow(){
    if(counteyeshadow===0){
        counteyeshadow++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".eyeshadow").style.display="block";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".lipstick").style.display="none";
        
        
        console.log("hello eyeliner");
        let blusharr=[];
        let blushresponse= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".eyeshadow");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".eyeshadow").style.display="block";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".lipstick").style.display="none";
}
    
}


//lipliner

var countlipliner=0;
document.getElementById("blushid6").addEventListener("click",lipliner);
async function lipliner(){
    if(countlipliner===0){
        console.log("lipliner in")
        countlipliner++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipliner").style.display="block";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".lipstick").style.display="none";
        
        
        console.log("hello eyeliner");
        var blusharr=[];
        let blushresponse= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".lipliner");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipliner").style.display="block";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".lipstick").style.display="none";
}
    
}

//foundation

var countfoundation=0;
document.getElementById("blushid7").addEventListener("click",foundation);
async function foundation(){
    if(countfoundation===0){
        console.log("foundation in")
        countfoundation++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="block";
        document.querySelector(".lipstick").style.display="none";
        
        console.log("hello eyeliner");
        var blusharr=[];
        let blushresponse= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".foundation");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="block";
    document.querySelector(".lipstick").style.display="none";
}
    
}


//lipstick

var countlipstick=0;
document.getElementById("blushid8").addEventListener("click",lipstick);
async function lipstick(){
    if(countlipstick===0){
        console.log("foundation in")
        countlipstick++;
        document.querySelector(".image").style.display="none";
        document.querySelector(".blushimage").style.display="none";
        document.querySelector(".bronzeimage").style.display="none";
        document.querySelector(".eyelashimage").style.display="none";
        document.querySelector(".eyeliner").style.display="none";
        document.querySelector(".eyeshadow").style.display="none";
        document.querySelector(".lipliner").style.display="none";
        document.querySelector(".foundation").style.display="none";
        document.querySelector(".lipstick").style.display="block";
        
        console.log("hello eyeliner");
        var blusharr=[];
        let blushresponse= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`);
        let blushdata=await blushresponse.json();
        blushdata.forEach(element => {
            blusharr.push(element.id);
        });
        console.log(blusharr);

    for(let i=0;i<blusharr.length;i++){
        try{
            let response=await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${blusharr[i]}.json`);
            let data=await response.json();
            console.log(data.id);
            
            var divele=document.querySelector(".lipstick");

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","row");    
            maindiv.setAttribute("id","main-id");


            var diveach=document.createElement("div");
            diveach.setAttribute("class","col-sm-12 col-xl-3 col-md-3 col-xxl-3 diveach_"+data.id);
            var imagemakeup=document.createElement("img");
            imagemakeup.setAttribute("class","image_"+data.id);
            diveach.setAttribute("id","hello");
            imagemakeup.src=data.image_link;
            imagemakeup.alt="no img available"
            diveach.append(imagemakeup);
            maindiv.append(diveach);
            
            //name
            var divname=document.createElement("div");
            divname.setAttribute("class","col-sm-12 col-xl-9 col-md-9 col-xxl-9 divname"+data.id);
            var para1=document.createElement("p");
            divname.setAttribute("id","hello");
            para1.setAttribute("id","para-name");
            para1.innerHTML="<b>Name: </b>"+data.name;
            divname.append(para1); 
            
            //Brand
            var para2=document.createElement("p");
            para2.setAttribute("id","para-name");
            para2.innerHTML="<b>Brand:</b>"+data.brand;
            divname.append(para2); 
            

            //PRICE
            var para3=document.createElement("p");
            para3.setAttribute("id","para-name");
            para3.innerHTML="<b>Price: </b>"+data.price+"$";
            divname.append(para3); 
            //PRODUCTLINK
            var para4=document.createElement("p");
            para4.setAttribute("id","para-name");
            para4.innerHTML="<b>Product Link: </b>"+`<a target="_blank" href="${data.product_link}">View Product</a>`;
            divname.append(para4); 
            //DISCRIPTION
            
            var para5=document.createElement("p");
            para5.setAttribute("id","para-name");
            para5.innerHTML="<b>Description:</b>"+data.description;
            divname.append(para5); 


            maindiv.append(divname); 
            divele.appendChild(maindiv);
        }
        catch (error){
            console.warn(error);
        }
        
    }   
}

else{
    document.querySelector(".image").style.display="none";
    document.querySelector(".blushimage").style.display="none";
    document.querySelector(".bronzeimage").style.display="none";
    document.querySelector(".eyelashimage").style.display="none";
    document.querySelector(".eyeliner").style.display="none";
    document.querySelector(".eyeshadow").style.display="none";
    document.querySelector(".lipliner").style.display="none";
    document.querySelector(".foundation").style.display="none";
    document.querySelector(".lipstick").style.display="block";
}
    
}






