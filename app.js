(function(){
'use strict';
var ICON={
 makeup:'<path d="M9 21v-7h6v7zM10 14V9l2-5 2 5v5"/>',
 skincare:'<path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"/>',
 hair:'<path d="M4 8c3-3 5 3 8 0s5 3 8 0M4 14c3-3 5 3 8 0s5 3 8 0"/>',
 lingerie:'<path d="M12 12L5 8v8l7-4zm0 0l7-4v8l-7-4z"/>'
};
var CATS=[
 {id:'makeup',name:'Makeup',note:'Lips, face and eyes'},
 {id:'skincare',name:'Skincare',note:'Cleanse, treat and protect'},
 {id:'hair',name:'Hair care',note:'Wash, treat and style'},
 {id:'lingerie',name:'Bras and underwear',note:'Everyday comfort'}
];
/* The product feed is loaded from data/products.json, in the same way an app would call a real API. */
var API={products:function(cats){
  return fetch('data/products.json').then(function(r){
    if(!r.ok)throw new Error('Could not load the product feed.');
    return r.json();
  }).then(function(all){
    return all.filter(function(x){return cats.indexOf(x.c)>-1}).map(function(x){
      return Object.assign({},x,{now:Math.round(x.p*(1-x.off/100))});
    });
  });
}};

var $=function(i){return document.getElementById(i)};
var chosen=[],items=[];
function money(n){return 'N$'+n.toLocaleString('en-US')}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function catName(id){return CATS.filter(function(c){return c.id===id})[0].name}

function buildCats(){
  $('cats').innerHTML=CATS.map(function(c){
    return '<button class="pick" type="button" aria-pressed="false" data-id="'+c.id+'"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">'+ICON[c.id]+'</svg></span><span><b>'+c.name+'</b><small>'+c.note+'</small></span><span class="ck">Selected</span></button>'}).join('');
}
function updateStart(){
  var n=chosen.length;
  $('go').disabled=!n;
  $('go').textContent=n>1?'Continue with '+n+' choices':'Continue';
  $('hint').textContent=n?(n===1?'1 selected. You can add more or continue.':n+' selected. Ready when you are.'):'Nothing selected yet';
}
$('cats').addEventListener('click',function(e){
  var b=e.target.closest('.pick');if(!b)return;
  var id=b.getAttribute('data-id'),i=chosen.indexOf(id);
  if(i>-1)chosen.splice(i,1);else chosen.push(id);
  b.setAttribute('aria-pressed',i>-1?'false':'true');updateStart();
});
$('go').addEventListener('click',function(){location.hash='results'});
$('back').addEventListener('click',function(){location.hash='start'});

function drawResults(){
  var sale=$('saleOnly').checked,sort=$('sort').value;
  var html='';
  chosen.forEach(function(cid){
    var list=items.filter(function(x){return x.c===cid&&(!sale||x.off>0)});
    if(sort==='lo')list.sort(function(a,b){return a.now-b.now});
    if(sort==='hi')list.sort(function(a,b){return b.now-a.now});
    html+='<h2>'+esc(catName(cid))+'</h2>';
    html+=list.length?'<div class="prods">'+list.map(function(x){
      return '<article class="card">'+(x.off?'<span class="badge">'+x.off+'% OFF</span>':'')+
      '<span class="brand2">'+esc(x.b)+'</span><span class="pn">'+esc(x.n)+'</span><span class="pd">'+esc(x.d)+'</span>'+
      '<div class="price">'+(x.off?'<b class="now">'+money(x.now)+'</b><s>'+money(x.p)+'</s>':'<b>'+money(x.p)+'</b>')+'</div>'+
      '<div class="where"><span>Find it at</span><br>'+esc(x.s)+', '+esc(x.l)+'</div></article>'}).join('')+'</div>':'<p class="empty">No sale items in this category right now.</p>';
  });
  $('out').innerHTML=html;
}
function show(){
  var r=location.hash==='#results'&&chosen.length;
  $('start').hidden=!!r;$('results').hidden=!r;
  window.scrollTo(0,0);
  if(!r){if(location.hash==='#results')location.hash='start';return}
  $('chips').innerHTML=chosen.map(function(c){return '<span class="chip">'+esc(catName(c))+'</span>'}).join('');
  $('out').innerHTML='<p class="empty">Finding your picks...</p>';
  API.products(chosen).then(function(r){items=r;drawResults()}).catch(function(e){$('out').innerHTML='<p class="empty">'+esc(e.message)+' If you opened the file directly, run it through a web server or GitHub Pages.</p>'});
}
$('sort').addEventListener('change',drawResults);
$('saleOnly').addEventListener('change',drawResults);
window.addEventListener('hashchange',show);
buildCats();updateStart();show();
})();
