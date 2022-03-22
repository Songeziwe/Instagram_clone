const items = [
  '<p class="item">Item1</p>', '<p class="item">Item2</p>',
  '<p class="item">Item3</p>', '<p class="item">Item4</p>',
  '<p class="item">Item5</p>', '<p class="item">Item6</p>',
  '<p class="item">Item7</p>', '<p class="item">Item8</p>',
  '<p class="item">Item9</p>', '<p class="item">Item10</p>',
  '<p class="item">Item11</p>', '<p class="item">Item12</p>',
  '<p class="item">Item13</p>', '<p class="item">Item14</p>',
  '<p class="item">Item15</p>', '<p class="item">Item16</p>',
  '<p class="item">Item17</p>', '<p class="item">Item18</p>',
  '<p class="item">Item19</p>', '<p class="item">Item20</p>',
  '<p class="item">Item21</p>', '<p class="item">Item22</p>',
];

var current_page = 1;
var items_per_page = 11;

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