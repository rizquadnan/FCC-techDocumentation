window.onload = function() {
  addNavListener();
}

// add listener to show or hide mobile main navigation
function addNavListener() {
  const nav = document.getElementsByClassName("fixed-nav-header-mobile")[0];
  function showOrHideNav() {
    const hiddenNav = document.getElementsByClassName("fixed-nav__ul")[0];
    if (hiddenNav.style.display === "none") {
      hiddenNav.style.display = "block";
    }
    else if (hiddenNav.style.display === "block") {
      hiddenNav.style.display = "none";
    }
  }
  
  nav.addEventListener("click", showOrHideNav);
}
