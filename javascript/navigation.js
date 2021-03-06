function closeHeader() {
  if ($(navmenu).hasClass("open")) {
    $('#nav-icon').removeClass('open');
    $('#overlay').removeClass('open');
    $('#logo').addClass('invert');
    $('.navcontent').addClass('delayingclose');
    $('.navcontent').addClass('hidden');
    $('.navcontent').removeClass('open');
    setTimeout(function () {
      $('.navcontent').removeClass('delayingclose');
      $('#navmenu').removeClass('open');
      $('.navcontent').removeClass('hidden');
    }, 200);
  }
}

function closeFooter() {
  $("footer").animate({ opacity: 0 }, 800);
}

// Home Page
function homePackup() {
  closeHeader();
  closeFooter();
  $(".blobcontainer").css({ opacity: 0 });
  for (let i = 1; i < 4; i++) {
    setTimeout(function () {
      $("#" + i).animate({
        opacity: 0
      }, 250)
    }, (i * 50) + 100);
  }
}

// About Page
function aboutPackup() {
  closeHeader();
  closeFooter();
  for (let i = 1; i < 5; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 0
      }, 550)
    }, (i*50)+100);
  }
}

// Projects Page
function projectsPackup() {
  closeHeader();
  closeFooter();
  for (let i = 1; i < 4; i++) {
    setTimeout(function () {
      $("#" + i).animate({
        opacity: 0
      }, 550)
    }, (i * 50) + 100);
  }
}

// Contact Page
function contactPackup() {
  closeHeader();
  closeFooter();
  for (let i = 1; i < 7; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 0
      }, 550)
    }, (i*50)+100);
  }
}

// Contact Page
function applicationPackup() {
  closeHeader();
  closeFooter();
  $(".landingcontainer").animate({
    opacity: 0
  }, 550)
}


$(document).ready(function(){
  $('#applicationlink').click(function(){
    projectsPackup();
    setTimeout(function () { window.location.href = "application.html"}, 800);
  })

  $('#aboutbutton').click(function(){
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function () { window.location.href = "about.html"}, 800);
    }
    if ($('body').attr('id') == "projects") {
      projectsPackup();
      setTimeout(function(){window.location.href="about.html"}, 800);
    }
    if ($('body').attr('id') == "contact") {
      contactPackup();
      setTimeout(function(){window.location.href="about.html"}, 800);
    }
    if ($('body').attr('id') == "application") {
      applicationPackup();
      setTimeout(function(){window.location.href="about.html"}, 800);
    }
  })
  $('#homebutton').click(function () {
    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function () { window.location.href = "index.html"}, 800);
    }
    if ($('body').attr('id') == "projects") {
      projectsPackup();
      setTimeout(function(){window.location.href="index.html"}, 800);
    }
    if ($('body').attr('id') == "contact") {
      contactPackup();
      setTimeout(function(){window.location.href="index.html"}, 800);
    }
    if ($('body').attr('id') == "application") {
      applicationPackup();
      setTimeout(function(){window.location.href="index.html"}, 800);
    }
  })
  $('#projectsbutton').click(function () {
    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function () { window.location.href = "projects.html"}, 800);
    }
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function () { window.location.href = "projects.html"}, 800);
    }
    if ($('body').attr('id') == "contact") {
      contactPackup();
      setTimeout(function(){window.location.href="projects.html"}, 800);
    }
    if ($('body').attr('id') == "application") {
      applicationPackup();
      setTimeout(function(){window.location.href="projects.html"}, 800);
    }
  })
  $('#contactbutton').click(function(){
    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function(){window.location.href="contact.html"}, 800);
    }
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function(){window.location.href="contact.html";}, 800);
    }
    if ($('body').attr('id') == "projects") {
      projectsPackup();
      setTimeout(function(){window.location.href="contact.html";}, 800);
    }
    if ($('body').attr('id') == "application") {
      applicationPackup();
      setTimeout(function(){window.location.href="contact.html";}, 800);
    }
  })
})
