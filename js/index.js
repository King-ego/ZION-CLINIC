(function () {
    const containerImg = document.querySelector('.carrocelImg');
    const ArrayImg = containerImg.querySelectorAll('.biochectomia')
    const imgActive = document.querySelector('.biochectomia')
    function selectEvent(e) {
        const el = e.target;
        let m = 0;
        if (el.classList.contains('rightImgCarrocel')) {addClass()}
        if (el.classList.contains('leftImgCarrocel')) {
            for (let i in ArrayImg) {
                console.log(ArrayImg.length, i)
                if (i >= 0 && ArrayImg[i].classList.contains('active')) {
                    if (i - 1 >= 0) {
                        ArrayImg[i].classList.remove('active');
                        m = 1
                    } else {
                        ArrayImg[i].classList.remove('active');
                        ArrayImg[ArrayImg.length - 1].classList.add('active')
                        break;
                    }

                }
                if (m === 1) {
                    ArrayImg[i - 1].classList.add('active')
                    return;
                }
            }
            return;
        }
    }
    function addClass(){
        let n =0 ;
            for (let valor in ArrayImg) {
                console.log(ArrayImg.length, valor)
                if (n === 1) {
                    ArrayImg[valor].classList.add('active')
                    break
                }
                if (ArrayImg[valor].classList.contains('active')) {
                    ArrayImg[valor].classList.remove('active');
                    n = 1;
                }
                if (valor == ArrayImg.length - 1) {
                    ArrayImg[valor].classList.remove('active')
                    ArrayImg[0].classList.add('active')
                    break;
                }
            }
    }
    setInterval(() => {
        addClass();
    }, 10000);
    containerImg.addEventListener('click', selectEvent);
})();