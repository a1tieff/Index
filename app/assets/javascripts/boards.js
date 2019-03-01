$(function() {

  $('.container_board').hover(function() {
    $(this).find('.more-btn').addClass('more-btn_show')
  })

  $('.section_links-wrapper').hover(function() {
    $(this).find('.more-btn').addClass('more-btn_show')
  })

  $('.container_board').mouseleave(function() {
    $(this).find('.more-btn').removeClass('more-btn_show')
  })

  $('.more-btn').click(function() {
    $(this).addClass('more-btn_show');
    $(this).parent().find('.more-menu').addClass('show-more-menu')
  })

  $('.container-menu').mouseleave(function() {
    $(this).parent().find('.more-menu').removeClass('show-more-menu')
  })

});

$(function(){
  let page = 2

  //$("#loadMore").on("click", function() {
  function loadMoreBoards() {
    let link = "boards?page=" + page

    $.ajax({
      url: link,
      dataType: "script"
    }).done(function(data) {
      console.log("success", data)
    }).fail(function() {
      console.log("error")
    }).always(function() {
      console.log("complete")
    })

    page = page + 1
  }
  //})

  $(document).on("scroll", function() {
    let windowHeight = $(window).height()
    let element = document.getElementById("loadMoreBoards")
    let rect = element.getBoundingClientRect()

    //console.log(windowHeight, rect)

    if ((rect.top - 200) <= windowHeight) {
      loadMoreBoards()
    }
  })
})
