const items = [
  `<div class="item"><img src="../profile_pics/profile_pic.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/theRock.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/50cent.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/nyovest.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/jlo.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/beauty.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/kim.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/royal.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/standardBank.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/xzit.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/googleSoc.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/dho.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/tedx.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/uctCareer.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/uctSoc.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/goodNews.jpg" alt="pic"/></div>`,
  `<div class="item"><img src="../profile_pics/polo.jpg" alt="pic"/></div>`, `<div class="item"><img src="../profile_pics/kevin.jpg" alt="pic"/></div>`,
];

var current_page = 1;
var items_per_page = 9;

function totNumPages()
{
    return Math.ceil(items.length / items_per_page);
}

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        change(current_page);
    }
}
function nextPage()
{
    if (current_page < totNumPages()) {
        current_page++;
        change(current_page);
    }
}
function change(page)
{
    var btn_next = document.getElementsByClassName("next")[0];
    var btn_prev = document.getElementsByClassName("prev")[0];
    var wrapper = document.getElementsByClassName("status-items")[0];
    
    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();
    wrapper.innerHTML = "";
    for (var i = (page-1) * items_per_page; i < (page * items_per_page); i++) {
        wrapper.innerHTML += items[i];
    }

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
    if (page == totNumPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
    wrapper.innerHTML += `
              <div class="navigation-container">
                <a href="javascript:prevPage()" class="prev">
                  <img src="../icons/pagination_arrow.svg" alt="pagination_arrow"/>
                </a>
                <a href="javascript:nextPage()" class="next">
                  <img src="../icons/pagination_arrow.svg" alt="pagination_arrow"/>
                </a>
                </div>
              </div>
    `;

}
window.onload = function() {
    change(current_page);
};