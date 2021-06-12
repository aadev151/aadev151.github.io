window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").innerHTML = '<div class="small_header">✊🏿 #BLM</div>';
  } else {
    document.getElementById("header").innerHTML = '<div class="blm_logo">✊🏿</div><h1>#BlackLivesMatter</h1>';
  }
}
