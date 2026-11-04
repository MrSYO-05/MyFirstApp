// Chuyen tab
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));}));
// May tinh voi bieu thuc gioi han ky tu
let expr='',done=false;const exprEl=document.getElementById('expr'),out=document.getElementById('result');
function show(){exprEl.textContent=expr||'Sẵn sàng';}
function calc(){try{let s=expr.replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-').replace(/(\d+(?:\.\d+)?)%/g,'($1/100)');if(!/^[0-9+\-*/().\s]+$/.test(s))throw 0;let n=Function('"use strict";return ('+s+')')();if(!Number.isFinite(n))throw 0;out.textContent=Number(n.toPrecision(10)).toString();done=true;}catch{out.textContent='Không hợp lệ';}}
document.querySelectorAll('[data-key]').forEach(b=>b.addEventListener('click',()=>{let k=b.dataset.key;if(k==='AC'){expr='';out.textContent='0';done=false;}else if(k==='DEL'){expr=expr.slice(0,-1);done=false;}else if(k==='='){calc();}else{if(done&&/[0-9.]/.test(k))expr='';expr+=k;done=false;out.textContent='0';}show();}));
// Chuyen doi don vi
const sets={length:{mm:.001,cm:.01,m:1,km:1000,inch:.0254,ft:.3048,mile:1609.344},weight:{mg:.000001,g:.001,kg:1,'tấn':1000,oz:.0283495,lb:.453592},data:{B:1,KB:1000,MB:1e6,GB:1e9,TB:1e12,KiB:1024,MiB:1048576,GiB:1073741824},temperature:{'°C':1,'°F':1,K:1}};
const kind=document.getElementById('kind'),from=document.getElementById('from'),to=document.getElementById('to'),amount=document.getElementById('amount'),converted=document.getElementById('converted');
function fill(){let u=Object.keys(sets[kind.value]);from.innerHTML=u.map(x=>`<option>${x}</option>`).join('');to.innerHTML=u.map(x=>`<option>${x}</option>`).join('');if(kind.value==='length'){from.value='km';to.value='m'}if(kind.value==='weight'){from.value='kg';to.value='g'}if(kind.value==='data'){from.value='MB';to.value='GB'}if(kind.value==='temperature'){from.value='°C';to.value='°F'}convert();}
function convert(){let n=Number(amount.value),a=from.value,b=to.value,r;if(amount.value.trim()===''){converted.textContent='—';return;}if(kind.value==='temperature'){let c=a==='°C'?n:a==='°F'?(n-32)*5/9:n-273.15;r=b==='°C'?c:b==='°F'?c*9/5+32:c+273.15;}else r=n*sets[kind.value][a]/sets[kind.value][b];converted.textContent=`${Number(r.toPrecision(9)).toLocaleString('vi-VN')} ${b}`;}
kind.addEventListener('change',fill);[from,to,amount].forEach(x=>x.addEventListener('input',convert));fill();
// Dem nguoc
let left=300,id=null;const mins=document.getElementById('mins'),secs=document.getElementById('secs'),clock=document.getElementById('clock'),start=document.getElementById('start'),status=document.getElementById('timer-status');
function draw(){clock.textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;}
function stop(){clearInterval(id);id=null;start.textContent='Tiếp tục';}
start.addEventListener('click',()=>{if(id){stop();status.textContent='Đã tạm dừng.';return;}if(left<=0)left=Math.max(0,Number(mins.value)*60+Number(secs.value));if(left<=0){status.textContent='Hãy nhập thời gian lớn hơn 0.';return;}start.textContent='Tạm dừng';status.textContent='Đang đếm ngược…';id=setInterval(()=>{left--;draw();if(left<=0){stop();start.textContent='Bắt đầu';status.textContent='Đã hết giờ!';}},1000);});
document.getElementById('reset').addEventListener('click',()=>{if(id)stop();left=Math.max(0,Math.min(59999,Number(mins.value||0)*60+Number(secs.value||0)));draw();start.textContent='Bắt đầu';status.textContent='Đã đặt lại.';});
[mins,secs].forEach(x=>x.addEventListener('change',()=>{if(!id){left=Math.max(0,Number(mins.value||0)*60+Number(secs.value||0));draw();}}));draw();
// Ghi chu chi luu tren thiet bi, khong gui len may chu
const note=document.getElementById('note'),noteStatus=document.getElementById('note-status');try{note.value=localStorage.getItem('pocket-tools-note')||'';}catch{}
document.getElementById('save').addEventListener('click',()=>{try{localStorage.setItem('pocket-tools-note',note.value);noteStatus.textContent='Đã lưu trên thiết bị này.';}catch{noteStatus.textContent='Không thể lưu trong trình duyệt này.';}});
// PWA offline
if('serviceWorker'in navigator&&location.protocol.startsWith('http'))addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
