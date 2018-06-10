;
(function() {

  'use strict';

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var mobileMenuOutsideClick = function() {

    $(document).click(function(e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ($('body').hasClass('offcanvas')) {

          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');

        }


      }
    });

  };


  var offcanvasMenu = function() {

    $('#page').prepend('<div id="fh5co-offcanvas" />');
    $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas')
      .find('li')
      .removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function() {
      var $this = $(this);

      $this
        .addClass('active')
        .find('ul')
        .slideDown(500, 'easeOutExpo');
    }).mouseleave(function() {

      var $this = $(this);
      $this
        .removeClass('active')
        .find('ul')
        .slideUp(500, 'easeOutExpo');
    });


    $(window).resize(function() {

      if ($('body').hasClass('offcanvas')) {

        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');

      }
    });
  };


  var burgerMenu = function() {

    $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
      var $this = $(this);


      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();

    });
  };

  var fullHeight = function() {

    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function() {
        $('.js-fullheight').css('height', $(window).height());
      });
    }

  };



  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function() {

          $('body .animate-box.item-animate').each(function(k) {
            var el = $(this);
            setTimeout(function() {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }

              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });

        }, 100);

      }

    }, {
      offset: '85%'
    });
  };


  var dropdown = function() {

    $('.has-dropdown').mouseenter(function() {

      var $this = $(this);
      $this
        .find('.dropdown')
        .css('display', 'block')
        .addClass('animated-fast fadeInUpMenu');

    }).mouseleave(function() {
      var $this = $(this);

      $this
        .find('.dropdown')
        .css('display', 'none')
        .removeClass('animated-fast fadeInUpMenu');
    });

  };


  var goToTop = function() {
    $('.js-gotop').on('click', function(event) {

      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });
    $(window).scroll(function() {

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        console.log("top!")
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });

  };


  // Loading page
  var loaderPage = function() {
    $(".fh5co-loader").fadeOut("slow");
  };


  var counterWayPoint = function() {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400);
          $(this.element).addClass('animated');
        }
      }, {
        offset: '90%'
      });
    }
  };

  var sliderMain = function() {

    $('#fh5co-hero .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function() {
        setTimeout(function() {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function() {
        setTimeout(function() {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }

    });

    $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
    $(window).resize(function() {
      $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
    });

  };
  var HeadBar = function() {
    var HeadBarHtml = "";
    HeadBarHtml += "			<div class=\"top-menu\">\n";
    HeadBarHtml += "				<div class=\"container\">\n";
    HeadBarHtml += "					<div class=\"row\">\n";
    HeadBarHtml += "						<div class=\"col-xs-2\">\n";
    HeadBarHtml += "							<div id=\"fh5co-logo\"><img class='logo-eos' src=\"images/eosio-logo-white@2x-201x300.png\" sizes=\"(max-width: 201px) 100vw, 201px\" data-was-processed=\"true\" title=\"eosio-logo-white@2x\"><a href=\"index.html\">Dao-Gov<span>.<\/span><\/a><\/div>\n";
    HeadBarHtml += "						<\/div>\n";
    HeadBarHtml += "						<div class=\"col-xs-10 text-right menu-1\">\n";
    HeadBarHtml += "							<ul>\n";
    HeadBarHtml += "								<li><a href=\"index.html\">Index<\/a><\/li>\n";
    HeadBarHtml += "								<li><a href=\"org.html\">Org<\/a><\/li>\n";
    HeadBarHtml += "								<li>\n";
    HeadBarHtml += "									<a href=\"proposals.html\">Proposals<\/a>\n";
    // HeadBarHtml += "									<ul class=\"dropdown\">\n";
    // HeadBarHtml += "										<li><a href=\"proposals.html#create\">Create new Proposal<\/a><\/li>\n";
    // HeadBarHtml += "										<li><a href=\"proposals.html#look\">Look your Proposal<\/a><\/li>\n";
    // HeadBarHtml += "										<li><a href=\"proposals.html#due\">Due Proposal<\/a><\/li>\n";
    // HeadBarHtml += "										<li><a href=\"proposals.html#rejected\">Rejected Proposal<\/a><\/li>\n";
    // HeadBarHtml += "									<\/ul>\n";
    HeadBarHtml += "								<\/li>\n";
    HeadBarHtml += "								<li><a href=\"profits.html\">Profits<\/a><\/li>\n";
    HeadBarHtml += "								<li><button class=\"ui inverted blue button\" href=\"#\" id=\"SignIn\">Sign In<\/button>";
    HeadBarHtml += "								<li><a id=\"PublicKeyShow\" href=\"#\"><\/a><\/li>\n";
    HeadBarHtml += "                <\/li>\n";
    HeadBarHtml += "							<\/ul>\n";
    HeadBarHtml += "						<\/div>\n";
    HeadBarHtml += "					<\/div>\n";
    HeadBarHtml += "\n";
    HeadBarHtml += "				<\/div>\n";
    HeadBarHtml += "			<\/div>\n";
    HeadBarHtml += "<div class='ui modal' style='top:10%;width:50%;height:auto;max-height:70%;overflow-y:auto;' id='Sign_Modal'><div class='header'>Sign In and Sign Up</div>";
    HeadBarHtml += "<div class='content'><div class='ui form'><h2>Sign In</h2><label>Click It To Upload Your Private Key File.</label>"
    HeadBarHtml += "<button id='PrivateKeyFile' class='ui fluid inverted green button'>Upload Your Private Key</button><input type='file' class='hack-element' onchange='UploadPrivateKey();' id='PrivateKeyFileInput' />";
    HeadBarHtml += "<div class='ui divider'></div>";
    HeadBarHtml += "<label>Or Input Your Private Key:</label><textarea style='height:3em;min-height:1.5em;' id='PrivateTextArea'></textarea><div class='field'><button class='ui inverted blue button' id='SubmitPrivateKey'>Unlock</button></div>";
    HeadBarHtml += "<div class='ui divider'></div><h2>Sign Up</h2><br/><label>Your Account:</label><input class='input' id='Signup_account' /><div class='field'><button class='ui inverted orange button'>Sign Up For This Account </button></div>";
    HeadBarHtml += "</div></div></div>"
    $("#headbar").empty();
    $("#headbar").append(HeadBarHtml);
  };
  var ActiveHeadBar = function() {
    let url = location.href;
    let i = url.lastIndexOf("/");
    let j = url.lastIndexOf(".");
    let thisPage = url.substring(i + 1, j);
    $(".top-menu li").each(function(index, el) {
      if (($(el).find("a").text().toLocaleLowerCase()) == thisPage || ($(el).find("a").text().toLocaleLowerCase().indexOf(thisPage) >= 0)) {
        $(el).addClass('active');
      } else {
        $(el).removeClass('active');
      }
    });
  }
  var SignIn = function() {
    $("#SignIn").click(function(event) {
      $("#Sign_Modal").modal('show');
    });
    $("#PrivateKeyFile").click(function(event) {
      $("#PrivateKeyFileInput").trigger('click');
    });
    $("#SubmitPrivateKey").click(function(event) {
      var PrivateKey = [$('#PrivateTextArea').val()];
      try {
        eos = Eos({
          PrivateKey
        });
        var {
          format,
          api,
          ecc,
          json,
          Fcbuffer
        } = Eos.modules;
        let res = ecc.isValidPrivate(PrivateKey[0]);

        if (res != false) {
          $("#Sign_Modal").modal("hide");
        } else {
          let PublicKey = ecc.privateToPublic(PrivateKey[0]);
          let lenKey = PublicKey.length;
          let ShortKey = PublicKey.substr(0, 4) + "..." + PublicKey.substr(lenKey - 4, lenKey);
          $("#SignIn").text(ShortKey);
          $("#SignIn").val(ShortKey);
          $("#SignIn").attr("disabled", true);
        }
      } catch (e) {
        console.log(e);
        $("#SubmitPrivateKey").before("<div class='ui field' style='color:red;font-size:1.5em;'>Backend does not exist.</div>")
      }
    });
  }
  var FooterHtml = function() {
    var FooterHtmlStr = "";
    FooterHtmlStr += "      <div class=\"container\">\n";
    FooterHtmlStr += "        <div class=\"row row-pb-md\">\n";
    FooterHtmlStr += "          <div class=\"col-md-4 fh5co-widget\">\n";
    FooterHtmlStr += "            <h4>Dao-Gov<\/h4>\n";
    FooterHtmlStr += "            <p>Open and fair allocation of shares.Distributed voting for proposals.Convenient and quick funds management.<\/p>\n";
    FooterHtmlStr += "          <\/div>\n";
    FooterHtmlStr += "          <div class=\"col-md-2 col-md-push-1 fh5co-widget\">\n";
    FooterHtmlStr += "            <h4>Links<\/h4>\n";
    FooterHtmlStr += "            <ul class=\"fh5co-footer-links\">\n";
    FooterHtmlStr += "              <li><a href=\"index.html\">Index<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"org.html\">Org<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"Proposals\">Proposals<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"Profits\">Profits<\/a><\/li>\n";
    FooterHtmlStr += "            <\/ul>\n";
    FooterHtmlStr += "          <\/div>\n";
    FooterHtmlStr += "          <div class=\"col-md-2 col-md-push-1 fh5co-widget\">\n";
    FooterHtmlStr += "            <h4>Powered by<\/h4>\n";
    FooterHtmlStr += "            <ul class=\"fh5co-footer-links\">\n";
    FooterHtmlStr += "              <li><a href=\"#\">EosIO<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"#\">EosJS<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"#\">Bootstrap<\/a><\/li>\n";
    FooterHtmlStr += "              <li><a href=\"#\">Semantic<\/a><\/li>\n";
    FooterHtmlStr += "            <\/ul>\n";
    FooterHtmlStr += "          <\/div>\n";
    FooterHtmlStr += "        <\/div>\n";
    FooterHtmlStr += "      <\/div>\n";
    $("#fh5co-footer").empty();
    // console.log(FooterHtmlStr)
    $("#fh5co-footer").append(FooterHtmlStr);
  }

  $(function() {
    HeadBar();
    ActiveHeadBar();
    SignIn();
    FooterHtml();
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
    fullHeight();

  });


}());

//Private File Upload
function UploadPrivateKey() {
  if (document.getElementById("PrivateKeyFileInput").length == 0) return;
  var fileObj = document.getElementById("PrivateKeyFileInput").files[0]; // js 获取文件对象

  var reader = new FileReader(); //新建一个FileReader
  reader.readAsText(fileObj, "UTF-8"); //读取文件
  reader.onload = function(evt) { //读取完文件之后会回来这里
    var fileString = evt.target.result; // 读取文件内容
    //发送Private Key
    $("#PrivateTextArea").val(fileString);
    // try {
    //
    //   eos = Eos({
    //     [fileString]
    //   });
    //   if (res != false) {
    //     $("#Sign_Modal").modal("hide");
    //   } else {
    //     $("#SignIn").attr("disabled", true);
    //     $("#SignIn").text(res);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }
}

function scrollDown() {
  console.log($('html,body').scrollTop(20))
  $('html,body').animate({
    'scrollTop': '300px'
  });
}
var eos = null;