(function(){
    const width = document.querySelector('.menu')
    const li = width.querySelectorAll('li')
    function classSpaceAdd(){
        for (let allLiAdd of li){
            allLiAdd.classList.add('classSpace')
        }
    }
    function classSpaceRemove(){
        for (let allLiRemove of li){
            allLiRemove.classList.remove('classSpace')
        }
    }
    function styleWidhtResize(wth){
        if(wth<870){
            width.style.position = 'absolute';
            classSpaceAdd()
            return;
        }
        if(wth > 870){
            width.style.position = 'relative'
            classSpaceRemove()
        }
    }
    function widthResize(wth){
        styleWidhtResize(wth)
        if(wth > 870) {
            width.style.display = 'flex';
            addClassMenu(wth)
            return;
        }
        if(wth<870) {
            width.style.display = 'none';
            addClassMenu(wth)
            return;
        }
    }
    function resize(){
        let wth = window.innerWidth;
        widthResize(wth)     
    }
    window.addEventListener('resize', resize)
    function addClassMenu(wth){
        if(wth>870){
            document.querySelector('.buttomMenu').classList.add('animate__backInLeft')
            return;
        }
        if(wth < 870){
            width.classList.add('animate__backInRight')
            return;
        }
        
    }
    
    
})();