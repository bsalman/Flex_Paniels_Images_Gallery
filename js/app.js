const panels = document.querySelectorAll('.panel')
const panelsArr = [...panels]

// const toggleOpen = ()=>{
   
// }
    panelsArr.forEach(panel => {
        panel.addEventListener('click',function(e){
            e.preventDefault;
            this.classList.toggle('open-active')
        })
    });
