(function () {
    const containerImg = document.querySelector('.carrocelImg');
    const ArrayImg = containerImg.querySelectorAll('.biochectomia')
    const imgActive = document.querySelector('.modeloImg')
    const ArrayImgActive = imgActive.querySelectorAll('.newClass')
    function selectEvent(e) {
        const el = e.target;
        if (el.classList.contains('rightImgCarrocel')) addRightClass()
        if (el.classList.contains('leftImgCarrocel')) addLeftClass()
    }
    function addRemoveMainClass (i,v){
        ArrayImg[i].classList.remove('active')
        ArrayImg[v].classList.add('active')
    }
    function addMainClass(i){
        ArrayImg[i].classList.add('active')
        console.log('removeClass2')
        return
    }
    function removeMainClass(i){
        ArrayImg[i].classList.remove('active');
        console.log('removeClass1')
        return;
    }
    function addRightClass(){
        let n =0 ;
        for (let valor in ArrayImg) {
            if (n === 1) {
                addMainClass(valor)
                addClassImg(valor)
                return
            }
            if (ArrayImg[valor].classList.contains('active')) {
                removeMainClass(valor)
                removeClassImg(valor)
                n = 1;
            }
            if (valor == ArrayImg.length - 1) {
                addRemoveMainClass(valor,0)
                addRemoveClassImg(valor)
                return;
            }
        }
    }
    function addLeftClass(){
        let m =0 ;
        for (let i in ArrayImg) {
            if (i >= 0 && ArrayImg[i].classList.contains('active')) {
                if (i - 1 >= 0) {
                    removeMainClass(i)
                    removeClassImg(i)
                    m = 1
                } else {
                    addRemoveMainClass(i,ArrayImg.length-1)
                    addRemoveClassImg(i, ArrayImgActive.length -1 )
                    console.log('addRemoveClass2')
                    return;
                }
            }
            if (m === 1) {
                addMainClass(i-1)
                addClassImg(i-1)
                console.log('addClass3')
                return;
            }
        }
        return;
    }
    function addClassImg(valor){
        ArrayImgActive[valor].classList.add('active')
    }
    function removeClassImg(valor){
        ArrayImgActive[valor].classList.remove('active')
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