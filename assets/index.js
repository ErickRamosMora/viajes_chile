$('html,body').animate({
    scrollTop: $(hash).offset().top
  },8000,function(){
    window.location.hash = hash
  })
  