(function () {
    const containerImg = document.querySelector('.carrocelImg');
    const ArrayImg = containerImg.querySelectorAll('.biochectomia')
    const imgActive = document.querySelector('.modeloImg')
    const ArrayImgActive = imgActive.querySelectorAll('.newClass')
    function selectEvent(e) {
        const el = e.target;
        if (el.classList.contains('rightImgCarrocel')) {addRightClass()}
        if (el.classList.contains('leftImgCarrocel')) {addLeftClass()}
    }
    function addRightClass(){
        let n =0 ;
            for (let valor in ArrayImg) {
                if (n === 1) {
                    ArrayImg[valor].classList.add('active')
                    addClassImg(valor)
                    break
                }
                if (ArrayImg[valor].classList.contains('active')) {
                    ArrayImg[valor].classList.remove('active');
                    removeClassImg(valor)
                    n = 1;
                }
                if (valor == ArrayImg.length - 1) {
                    ArrayImg[valor].classList.remove('active')
                    ArrayImg[0].classList.add('active')
                    addRemoveClassImg(valor)
                    break;
                }
            }
    }
    function addLeftClass(){
        let m =0 ;
        for (let i in ArrayImg) {
            if (i >= 0 && ArrayImg[i].classList.contains('active')) {
                if (i - 1 >= 0) {
                    ArrayImg[i].classList.remove('active');
                    removeClassImg(i)
                    m = 1
                } else {
                    ArrayImg[i].classList.remove('active');
                    ArrayImg[ArrayImg.length - 1].classList.add('active')
                    addRemoveClassImg(i, ArrayImgActive.length -1 )
                    break;
                }

            }
            if (m === 1) {
                ArrayImg[i - 1].classList.add('active')
                addClassImg(i-1)
                return;
            }
        }
        return;
    }
    function addClassImg(valor){
        ArrayImgActive[valor].classList.add('active')
        console.log(valor, "adicionado")
    }
    function removeClassImg(valor){
        ArrayImgActive[valor].classList.remove('active')
        console.log(valor, 'removido')
    }
    function addRemoveClassImg(valor, indice =0){
        ArrayImgActive[valor].classList.remove('active')
        ArrayImgActive[indice].classList.add('active')
    }
    setInterval(() => {
        addRightClass();
    }, 8000);
    containerImg.addEventListener('click', selectEvent);
})();