const certificates={
"BX-INT-2026-002":{
name:"Ankit Gurjar",
role:"Influencer Marketing Executive",
start:"16 August 2026",
end:"16 October 2026",
company:"BrandX Mediia",
udyam:"UDYAM-UP-39-0073662",
id:"BX-INT-2026-002"
}};
const id=new URLSearchParams(location.search).get("id");
const result=document.getElementById("result");
const c=certificates[id];
if(!c){
result.innerHTML='<div class="status">Certificate Not Found</div><h1 class="title">No matching certificate record</h1>';
}else{
result.innerHTML=`<div class="status">✓ Certificate Verified</div>
<h1 class="title">${c.name}</h1>
<div class="grid">
<div class="item"><div class="label">Certificate ID</div><div class="value">${c.id}</div></div>
<div class="item"><div class="label">Role</div><div class="value">${c.role}</div></div>
<div class="item"><div class="label">Internship Start</div><div class="value">${c.start}</div></div>
<div class="item"><div class="label">Internship End</div><div class="value">${c.end}</div></div>
<div class="item"><div class="label">Issued By</div><div class="value">${c.company}</div></div>
<div class="item"><div class="label">Udyam Registration</div><div class="value">${c.udyam}</div></div>
</div>`;
}