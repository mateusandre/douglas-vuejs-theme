new Vue({
  el: '#app',
  data: {
    sidebarExpand: false
  },
  mounted(){
    $('.dropdown-toggle').dropdown()
    $('[data-toggle="tooltip"]').tooltip('show')

    $('a[href="#"]').each(function(){
      $(this).prop('href', 'javascript:void(0)')
    })


    $('#sidebar-menu ul li').has('ul').on('click', function(){
      $(this).toggleClass('active')
      $(this).find('.submenu').slideToggle('fast')
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {          
        // $($(this).attr('href')).addClass('animated slideInLeft faster');
    })

  },
  methods: {
    expandSidebar: function(){
      this.sidebarExpand = true
    },
    hideSidebar: function(){
      this.sidebarExpand = false
    }
  }
})
