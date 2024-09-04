var playbtn = document.getElementById('playbtn')
    var btnfg = document.getElementById('btnicon')

    btnfg.addEventListener('click', () => {
      btnfg.classList.toggle('playing');
      if (btnfg.classList.contains('playing')) {
        playbtn.play();
        playbtn.controls = true;
        if(playbtn.controls===true){
          btnfg.style.display='none'
        }
      }
    });