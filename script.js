//your code here
(function(){
const link = document.getElementById('songLink');
const openBtn = document.getElementById('openBtn');
const copyBtn = document.getElementById('copyBtn');


openBtn.addEventListener('click', () => {
const url = link.href;
window.open(url, '_blank', 'noopener');
});


copyBtn.addEventListener('click', async () => {
try{
await navigator.clipboard.writeText(link.href);
copyBtn.textContent = 'Copied!';
setTimeout(()=> copyBtn.textContent = 'Copy Link', 1500);
}catch(e){
copyBtn.textContent = 'Failed';
setTimeout(()=> copyBtn.textContent = 'Copy Link', 1500);
}
});