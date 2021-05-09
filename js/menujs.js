(function(){
    const width = document.querySelector('.menu')
    function styleWidhtResize(wth){
        if(wth<870){
            width.style.position = 'absolute';
            return;
        }
        if(wth > 870){
            width.style.position = 'relative';
            return;
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
            document.querySelector('.buttomMenu').classList.add('animate__fadeInLeft')
            return;
        }
        if(wth < 870){
            width.classList.add('animate__fadeInRight')
            return;
        }
        
    }
    
    
})();