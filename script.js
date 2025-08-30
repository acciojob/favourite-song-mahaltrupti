//your code here
// Minimal JS to demonstrate interactivity without changing the anchor's valid href.
(function(){
const link = document.getElementById('songLink');
const openBtn = document.getElementById('openBtn');
const copyBtn = document.getElementById('copyBtn');


openBtn.addEventListener('click', () => {
// Open the same URL in a new tab (keeps a valid href on the anchor)
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


// small accessibility enhancement: allow Enter key on focused link to behave like click
link.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') link.click(); });
})();
</script>