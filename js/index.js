(function(){
    const containerImg = document.querySelector('.carrocelImg');
    const ArrayImg = containerImg.querySelectorAll('.biochectomia')
    const imgActive = document.querySelector('.biochectomia')
    function selectEvent(e){
        const el = e.target;
        let n = 0;
        let m =0;
        if(el.classList.contains('rightImgCarrocel')){
            for(let valor in ArrayImg){
                console.log(ArrayImg.length, valor)
                if(valor == ArrayImg.length-1){
                    ArrayImg[valor].classList.add('active')
                    break;
                }
                if(n===1){
                    ArrayImg[valor].classList.add('active')
                    break
                }
                if(ArrayImg[valor].classList.contains('active')){
                    ArrayImg[valor].classList.remove('active')
                     n = 1;
                }
            }
        }
        if(el.classList.contains('leftImgCarrocel')){
            for(let i in ArrayImg){
                console.log(ArrayImg.length, i)
                if(i>=1 && ArrayImg[i].classList.contains('active')){
                    if(i-1>=0){
                        ArrayImg[i].classList.remove('active');
                        m = 1
                    }
                }
                if(m===1){
                    ArrayImg[i-1].classList.add('active')
                    return;
                }
            }
            return;
        }
    }
    containerImg.addEventListener('click',selectEvent);
})();