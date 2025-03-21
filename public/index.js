async function aside(){
    let result=await fetch("index.json")
    let data= await result.json()
return data;
}
let asidedata;
async function main(){
     asidedata= await aside()
     asidecontent(asidedata)
}
main()
let sidedatainput=document.getElementById("sidedata")
function asidecontent(asidedata){
    let display=asidedata.map((item)=>{
        return `<div class="flex gap-4 items-center mt-8"><img src="${item.img}" alt="">
            <div>
                <p>${item.title}</p>
                <p>${item.llc}</p>
                <div class="flex items-center gap-1">
                    <p>${item.rating}</p><img class="w-3" src="${item.star}" alt="">
                </div>
            </div>
        </div>`
    }).join("")
    sidedatainput.innerHTML=display
}

async function review(){
    let result=await fetch("index1.json")
    let data= await result.json()
return data;
}
let reviewdata;
async function main1(){
     reviewdata= await review()
     reviewcontent(reviewdata)
}
main1()
let reviewdatainput=document.getElementById("review")
function reviewcontent(reviewdata){
    let display1=reviewdata.map((item)=>{
 return `<div class="pt-16">
            <div class="flex items-center justify-between mr-8 ">
                <div class="flex items-center gap-4"><img class="rounded-full w-8 h-8"
                        src="${item.img1}" alt="">
                    <p>${item.name}</p>
                </div>
                <div><img class="w-4 " src="${item.img2}" alt=""></div>
            </div>
            <div class="flex items-center gap-2 pt-4">
                <div class="flex"><img class="w-3 h-3 " src="${item.img3}"
                        alt=""> <img class="w-3 h-3 " src="${item.img4}"
                        alt=""> <img class="w-3 h-3 " src="${item.img5}"
                        alt=""> <img class="w-3 h-3 " src="${item.img6}"
                        alt=""> <img class="w-3 h-3 " src="${item.img7}"
                        alt=""></div>
                <p class="text-gray-500 text-xs">${item.date}</p>
            </div>
            <div class="pt-2">
                <p class="text-gray-500">${item.review}</p>
            </div>
            <div class="pt-2 text-gray-500 text-xs">
                <p>${item.users}</p>
            </div>
            <div class="pt-2 text-gray-500 text-xs flex items-center gap-4">
                <p>${item.help}</p>
                <div class=" flex items-center justify-center gap-2 rounded-3xl p-2 border  w-14 h-6">
                    <p class="text-gray-500">${item.yes}</p>
                </div>
                <div class=" flex items-center justify-center gap-2 rounded-3xl p-2  border  w-14 h-6">
                    <p class="text-gray-500">${item.no}</p>
                </div>
            </div>
        </div><div class="${item.style}">
            <div class="flex justify-between items-center ">
                <p>${item.replyname}</p>
                <p class="text-gray-500 text-xs">${item.replydate}</p>
            </div>
            <p class="text-gray-500 text-sm">${item.reply}</p>
        </div> `
    }).join("")
    reviewdatainput.innerHTML=display1

}
let bodyinput=document.getElementById("body")
let writedata=document.getElementById("write")
function rate(){
  
if(writedata.style.display=="none"){
   
 writedata.style.display="block" 
//  bodyinput.style.background="fadeTo(200, 1)";
 
}
else{
    writedata.style.display="none"
}
}

function comment(){
    writedata.style.display="none" 
}