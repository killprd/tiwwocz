/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof ace === "undefined") return;

    //ace.config.set("themePath", "../theme");
    ace.config.loadModule("ace/ext/language_tools");

    $('[data-plugin="ace"]', context).each(function() {
      var id = $(this).attr("id"),
        mode = $(this).data("mode"),
        theme = $(this).data("theme"),
        editor = ace.edit(id);

      editor.container.style.opacity = "";
      if (mode) {
        editor.session.setMode("ace/mode/" + mode);
      }
      if (theme) {
        editor.setTheme("ace/theme/" + theme);
      }

      editor.setOption("maxLines", 40);
      editor.setAutoScrollEditorIntoView(true);

      ace.config.loadModule("ace/ext/language_tools", function() {
        editor.setOptions({
          enableSnippets: true,
          enableBasicAutocompletion: true
        });
      });
    });
  }
});

$.components.register("alertify", {
  mode: "api",
  defaults: {
    type: "alert",
    delay: 5000,
    theme: 'bootstrap'
  },
  api: function() {
    if (typeof alertify === "undefined") return;

    var defaults = $.components.getDefaults("alertify");

    $(document).on('click.site.alertify', '[data-plugin="alertify"]', function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data());

      if (options.labelOk) {
        options.okBtn = options.labelOk;
      }

      if (options.labelCancel) {
        options.cancelBtn = options.labelCancel;
      }

      if (typeof options.delay !== 'undefined') {
        alertify.delay(options.delay);
      }

      if (typeof options.theme !== 'undefined') {
        alertify.theme(options.theme);
      }

      if (typeof options.cancelBtn !== 'undefined') {
        alertify.cancelBtn(options.cancelBtn);
      }

      if (typeof options.okBtn !== 'undefined') {
        alertify.okBtn(options.okBtn);
      }

      if (typeof options.placeholder !== 'undefined') {
        alertify.delay(options.placeholder);
      }

      if (typeof options.defaultValue !== 'undefined') {
        alertify.delay(options.defaultValue);
      }

      if (typeof options.maxLogItems !== 'undefined') {
        alertify.delay(options.maxLogItems);
      }

      if (typeof options.closeLogOnClick !== 'undefined') {
        alertify.delay(options.closeLogOnClick);
      }

      switch (options.type) {
        case "alert":
          alertify.alert(options.alertMessage);
          break;
        case "confirm":
          alertify.confirm(options.confirmTitle, function() {
            alertify.success(options.successMessage);
          }, function() {
            alertify.error(options.errorMessage);
          });
          break;
        case "prompt":
          alertify.prompt(options.promptTitle, function(str, ev) {
            var message = options.successMessage.replace('%s', str);
            alertify.success(message);
          }, function(ev) {
            alertify.error(options.errorMessage);
          });
          break;
        case "log":
          alertify.log(options.logMessage);
          break;
        case "success":
          alertify.success(options.successMessage);
          break;
        case "error":
          alertify.error(options.errorMessage);
          break;
      }
    });
  }
});

$.components.register("animate-list", {
  mode: 'init',

  defaults: {
    child: '.panel',
    duration: 250,
    delay: 50,
    animate: 'scale-up',
    fill: 'backwards'
  },

  init: function() {
    var self = this;

    $('[data-plugin=animateList]').each(function() {
      var $this = $(this),
        options = $.extend({}, self.defaults, $this.data(), true);


      var animatedBox = function($el, opts) {
        this.options = opts;
        this.$children = $el.find(opts.child);
        this.$children.addClass('animation-' + opts.animate);
        this.$children.css('animation-fill-mode', opts.fill);
        this.$children.css('animation-duration', opts.duration + 'ms');

        var delay = 0,
          self = this;

        this.$children.each(function() {

          $(this).css('animation-delay', delay + 'ms');
          delay += self.options.delay;
        });
      };

      animatedBox.prototype = {
        run: function(type) {
          var self = this;
          this.$children.removeClass('animation-' + this.options.animate);
          if (typeof type !== 'undefined') this.options.animate = type;
          setTimeout(function() {
            self.$children.addClass('animation-' + self.options.animate);
          }, 0);
        }
      };

      $this.data('animateList', new animatedBox($this, options));
    });
  }
});

$.components.register("animsition", {
  mode: "manual",
  defaults: {
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 800,
    outDuration: 500,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: "body",
    loadingClass: "loader",
    loadingType: "default",
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    // random: true,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: "body",

    inDefaults: [
      'fade-in',
      'fade-in-up-sm', 'fade-in-up', 'fade-in-up-lg',
      'fade-in-down-sm', 'fade-in-down', 'fade-in-down-lg',
      'fade-in-left-sm', 'fade-in-left', 'fade-in-left-lg',
      'fade-in-right-sm', 'fade-in-right', 'fade-in-right-lg',
      // 'overlay-slide-in-top', 'overlay-slide-in-bottom', 'overlay-slide-in-left', 'overlay-slide-in-right',
      'zoom-in-sm', 'zoom-in', 'zoom-in-lg'
    ],
    outDefaults: [
      'fade-out',
      'fade-out-up-sm', 'fade-out-up', 'fade-out-up-lg',
      'fade-out-down-sm', 'fade-out-down', 'fade-out-down-lg',
      'fade-out-left-sm', 'fade-out-left', 'fade-out-left-lg',
      'fade-out-right-sm', 'fade-out-right', 'fade-out-right-lg',
      // 'overlay-slide-out-top', 'overlay-slide-out-bottom', 'overlay-slide-out-left', 'overlay-slide-out-right'
      'zoom-out-sm', 'zoom-out', 'zoom-out-lg'
    ]
  },

  init: function(context, callback) {
    var options = $.components.getDefaults("animsition");

    if (options.random) {
      var li = options.inDefaults.length,
        lo = options.outDefaults.length;

      var ni = parseInt(li * Math.random(), 0),
        no = parseInt(lo * Math.random(), 0);

      options.inClass = options.inDefaults[ni];
      options.outClass = options.outDefaults[no];
    }

    var $this = $(".animsition", context);

    $this.animsition(options);

    $("." + options.loadingClass).addClass('loader-' + options.loadingType);

    if ($this.animsition('supportCheck', options)) {
      if ($.isFunction(callback)) {
        $this.one('animsition.end', function() {
          callback.call();
        });
      }

      return true;
    } else {
      if ($.isFunction(callback)) {
        callback.call();
      }
      return false;
    }
  }
});

$.components.register("breadcrumb", {
  mode: "init",
  defaults: {
    namespace: "breadcrumb",
    dropdown: function() {
      return '<div class=\"dropdown\">' +
        '<a href=\"javascript:void(0);\" data-toggle="dropdown"><i class=\"' + this.dropicon + '\"></i></a>' +
        '<ul class=\"' + this.namespace + '-menu dropdown-menu\" role="menu"></ul>' +
        '</div>';
    },
    dropdownContent: function(value) {
      return '<li><a href=\"javascript:void(0);\">' + value + '</a></li>';
    }
  },
  init: function(context) {
    if (!$.fn.asBreadcrumbs) return;
    var defaults = $.components.getDefaults("breadcrumb");

    $('[data-plugin="breadcrumb"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asBreadcrumbs(options);
    });
  }
});

$.components.register("asColorPicker", {
  defaults: {
    namespace: "colorInputUi"
  },
  mode: "default"
});

$.components.register("paginator", {
  mode: "init",
  defaults: {
    namespace: "pagination",
    currentPage: 1,
    itemsPerPage: 10,
    disabledClass: "disabled",
    activeClass: "active",

    visibleNum: {
      0: 3,
      480: 5
    },

    tpl: function() {
      return '{{prev}}{{lists}}{{next}}';
    },

    components: {
      prev: {
        tpl: function() {
          return '<li class="' + this.namespace + '-prev"><a href="javascript:void(0)"><span class="icon wb-chevron-left-mini"></span></a></li>';
        }
      },
      next: {
        tpl: function() {
          return '<li class="' + this.namespace + '-next"><a href="javascript:void(0)"><span class="icon wb-chevron-right-mini"></span></a></li>';
        }
      },
      lists: {
        tpl: function() {
          var lists = '',
            remainder = this.currentPage >= this.visible ? this.currentPage % this.visible : this.currentPage;
          remainder = remainder === 0 ? this.visible : remainder;
          for (var k = 1; k < remainder; k++) {
            lists += '<li class="' + this.namespace + '-items" data-value="' + (this.currentPage - remainder + k) + '"><a href="javascript:void(0)">' + (this.currentPage - remainder + k) + '</a></li>';
          }
          lists += '<li class="' + this.namespace + '-items ' + this.classes.active + '" data-value="' + this.currentPage + '"><a href="javascript:void(0)">' + this.currentPage + '</a></li>';
          for (var i = this.currentPage + 1, limit = i + this.visible - remainder - 1 > this.totalPages ? this.totalPages : i + this.visible - remainder - 1; i <= limit; i++) {
            lists += '<li class="' + this.namespace + '-items" data-value="' + i + '"><a href="javascript:void(0)">' + i + '</a></li>';
          }

          return lists;
        }
      }
    }
  },
  init: function(context) {
    if (!$.fn.asPaginator) return;

    var defaults = $.components.getDefaults("paginator");

    $('[data-plugin="paginator"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      var total = $this.data("total");

      options = $.extend({}, defaults, options);
      $this.asPaginator(total, options);
    });
  }
});

$.components.register("pieProgress", {
  mode: "init",
  defaults: {
    namespace: "pie-progress",
    speed: 30,
    classes: {
      svg: "pie-progress-svg",
      element: "pie-progress",
      number: "pie-progress-number",
      content: "pie-progress-content"
    }
  },
  init: function(context) {
    if (!$.fn.asPieProgress) return;

    var defaults = $.components.getDefaults("pieProgress");

    $('[data-plugin="pieProgress"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      options = $.extend(true, {}, defaults, options);

      $this.asPieProgress(options);
    });
  }
});

$.components.register("progress", {
  mode: "init",
  defaults: {
    bootstrap: true,

    onUpdate: function(n) {
      var per = (n - this.min) / (this.max - this.min);
      if (per < 0.5) {
        this.$target.addClass('progress-bar-success').removeClass('progress-bar-warning progress-bar-danger');
      } else if (per >= 0.5 && per < 0.8) {
        this.$target.addClass('progress-bar-warning').removeClass('progress-bar-success progress-bar-danger');
      } else {
        this.$target.addClass('progress-bar-danger').removeClass('progress-bar-success progress-bar-warning');
      }
    },

    labelCallback: function(n) {
      var label;
      var labelType = this.$element.data("labeltype");

      if (labelType === "percentage") {
        var percentage = this.getPercentage(n);
        label = percentage + '%';
      } else if (labelType === "steps") {
        var total = this.$element.data("totalsteps");
        if (!total) {
          total = 10;
        }
        var step = Math.round(total * (n - this.min) / (this.max - this.min));
        label = step + ' / ' + total;
      } else {
        label = n;
      }

      if (this.$element.parent().hasClass('contextual-progress')) {
        this.$element.parent().find('.progress-label').html(label);
      }

      return label;
    }
  },

  init: function(context) {
    if (!$.fn.asProgress) return;

    var defaults = $.components.getDefaults("progress");

    $('[data-plugin="progress"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      options = $.extend({}, defaults, options);
      $this.asProgress(options);
    });
  }
});

$.components.register("asRange", {
  mode: "default",
  defaults: {
    tip: false,
    scale: false
  }
});

$.components.register("scrollable", {
  mode: "init",
  defaults: {
    namespace: "scrollable",
    contentSelector: "> [data-role='content']",
    containerSelector: "> [data-role='container']"
  },
  init: function(context) {
    if (!$.fn.asScrollable) return;
    var defaults = $.components.getDefaults("scrollable");

    $('[data-plugin="scrollable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asScrollable(options);
    });
  }
});

$.components.register("asSpinner", {
  mode: "default",
  defaults: {
    namespace: "spinnerUi",
    skin: null,
    min: "-10",
    max: 100,
    mousewheel: true
  }
});

$.components.register("bootbox", {
  mode: "api",
  defaults: {
    message: ""
  },
  api: function() {
    if (typeof bootbox === "undefined") return;
    var defaults = $.components.getDefaults("bootbox");

    $(document).on('click.site.bootbox', '[data-plugin="bootbox"]', function() {
      var $btn = $(this);
      var options = $btn.data();

      options = $.extend(true, {}, defaults, options);
      if (options.classname) {
        options.className = options.classname;
      }

      if (typeof options.callback === "string" && $.isFunction(window[options.callback])) {
        options.callback = window[options.callback];
      }

      if (options.type) {
        switch (options.type) {
          case "alert":
            bootbox.alert(options);
            break;
          case "confirm":
            bootbox.confirm(options);
            break;
          case "prompt":
            bootbox.prompt(options);
            break;
          default:
            bootbox.dialog(options);
        }
      } else {
        bootbox.dialog(options);
      }
    });
  }
});

$.components.register("datepicker", {
  mode: "default",
  defaults: {
    autoclose: true
  }
});

$.components.register("maxlength", {
  mode: "default",
  defaults: {}
});

$.components.register("selectpicker", {
  mode: "default",
  defaults: {
    style: "btn-select",
    iconBase: "icon",
    tickIcon: "wb-check"
  }
});

$.components.register("sweetalert", {
  mode: "api",
  api: function() {
    if (typeof swal === "undefined") return;

    var defaults = $.components.getDefaults("sweetalert");

    $(document).on('click.site.sweetalert', '[data-plugin="sweetalert"]', function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      swal(options);
    });
  }
});

$.components.register("tagsinput", {
  defaults: {
    tagClass: "label label-default"
  },
  mode: "default"
});

$.components.register("tokenfield", {
  mode: "default",
  defaults: {}
});

$.components.register("TouchSpin", {
  mode: "default",
  defaults: {
    verticalupclass: "wb-plus",
    verticaldownclass: "wb-minus",
    buttondown_class: "btn btn-outline btn-default",
    buttonup_class: "btn btn-outline btn-default"
  }
});

$.components.register("treeview", {
  mode: "init",
  defaults: {
    injectStyle: false,
    expandIcon: "icon wb-plus",
    collapseIcon: "icon wb-minus",
    emptyIcon: "icon",
    nodeIcon: "icon wb-folder",
    showBorder: false,
    // color: undefined, // "#000000",
    // backColor: undefined, // "#FFFFFF",
    borderColor: $.colors("blue-grey", 200),
    onhoverColor: $.colors("blue-grey", 100),
    selectedColor: "#ffffff",
    selectedBackColor: $.colors("primary", 600),

    searchResultColor: $.colors("primary", 600),
    searchResultBackColor: "#ffffff"
  },
  init: function(context) {
    if (!$.fn.treeview) return;

    var defaults = $.components.getDefaults("treeview");

    $('[data-plugin="treeview"]', context).each(function() {
      var $this = $(this);
      var options = $this.data();
      if (typeof options.source === "string" && $.isFunction(window[options.source])) {
        options.data = window[options.source]();
        delete options.source;
      } else if ($.isFunction(options.souce)) {
        options.data = options.source();
        delete options.source;
      }

      options = $.extend(true, {}, defaults, options);
      $this.treeview(options);
    });
  }
});

$.components.register("buttons", {
  mode: "api",
  defaults: {},
  api: function() {
    $(document).on('click.site.loading', '[data-loading-text]', function() {
      var $btn = $(this),
        text = $btn.text(),
        i = 20,
        loadingText = $btn.data('loadingText');

      $btn.text(loadingText + '(' + i + ')').css('opacity', '.6');

      var timeout = setInterval(function() {
        $btn.text(loadingText + '(' + (--i) + ')');
        if (i === 0) {
          clearInterval(timeout);
          $btn.text(text).css('opacity', '1');
        }
      }, 1000);
    });

    $(document).on('click.site.morebutton', '[data-more]', function() {
      var $target = $($(this).data('more'));
      $target.toggleClass('show');
    });
  }
});

$.components.register("card", {
  mode: "init",
  defaults: {

  },
  init: function(context) {
    if (!$.fn.card) return;
    var defaults = $.components.getDefaults("card");

    $('[data-plugin="card"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      if (options.target) {
        options.container = $(options.target);
      }
      $(this).card(options);
    });
  }
});

$.components.register("clockpicker", {
  mode: "default",
  defaults: {
    donetext: "Done"
  }
});

$.components.register("dataTable", {
  defaults: {
    responsive: true,
    language: {
      "sSearchPlaceholder": "Search..",
      "lengthMenu": "_MENU_",
      "search": "_INPUT_",
      "paginate": {
        "previous": '<i class="icon wb-chevron-left-mini"></i>',
        "next": '<i class="icon wb-chevron-right-mini"></i>'
      }
    }
  },
  api: function() {
    if (!$.fn.dataTable) return;

    if ($.fn.dataTable.TableTools) {
      // Set the classes that TableTools uses to something suitable for Bootstrap
      $.extend(true, $.fn.dataTable.TableTools.classes, {
        "container": "DTTT btn-group btn-group pull-left",
        "buttons": {
          "normal": "btn btn-outline btn-default",
          "disabled": "disabled"
        },
        "print": {
          "body": "site-print DTTT_Print"
        }
      });
    }
  },
  init: function(context) {
    if (!$.fn.dataTable) return;

    var defaults = $.components.getDefaults("dataTable");

    $('[data-plugin="dataTable"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).dataTable(options);
    });
  }
});

$.components.register("datepair", {
  mode: "default",
  defaults: {
    startClass: 'datepair-start',
    endClass: 'datepair-end',
    timeClass: 'datepair-time',
    dateClass: 'datepair-date'
  }
});

$.components.register("editableTable", {
  mode: "init",
  init: function(context) {
    if (!$.fn.editableTableWidget) return;

    var defaults = $.components.getDefaults("editableTable");

    $('[data-plugin="editableTable"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).editableTableWidget(options);
    });
  }
});

$.components.register("filterable", {
  mode: "init",
  defaults: {
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  },
  init: function(context) {
    if (typeof $.fn.isotope === "undefined") return;

    var defaults = $.components.getDefaults('filterable');

    var callback = function() {
      $('[data-filterable]', context).each(function() {
        var $this = $(this);

        var options = $.extend(true, {}, defaults, $this.data(), {
          filter: '*'
        });

        $this.isotope(options);
      });

      $('[data-filter]', context).click(function(e) {
        var $this = $(this);
        var target = $this.data('target');
        var $li = $this.parent('li');

        if (!target) {
          target = $this.attr('href');
          target = target && target.replace(/.*(?=#[^\s]*$)/, '');
        }

        $li.siblings('.active').each(function() {
          $(this).find('a').attr('aria-expanded', false);
          $(this).removeClass('active');
        });

        $li.addClass('active');
        $this.attr('aria-expanded', true);

        var $list = $(target, context);
        var filter = $this.attr('data-filter');
        if (filter !== '*') {
          filter = '[data-type="' + filter + '"]';
        }
        $list.isotope({
          filter: filter
        });

        e.preventDefault();
      });
    }

    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});

$.components.register("formatter", {
  mode: "init",
  defaults: {
    persistent: true
  },

  init: function(context) {
    if (!$.fn.formatter) return;

    var defaults = $.components.getDefaults("formatter"),
      browserName = navigator.userAgent.toLowerCase(),
      ieOptions;

    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
      ieOptions = {
        persistent: false
      };
    } else {
      ieOptions = {};
    }

    $('[data-plugin="formatter"]', context).each(function() {

      var options = $.extend({}, defaults, ieOptions, $(this).data());
      if (options.pattern) {
        options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
      }
      $(this).formatter(options);
    });
  }
});

$.components.register("gauge", {
  mode: "init",
  defaults: {
    lines: 12,
    angle: 0.12,
    lineWidth: 0.4,
    pointer: {
      length: 0.68,
      strokeWidth: 0.03,
      color: $.colors("blue-grey", 400)
    },
    limitMax: true,
    colorStart: $.colors("blue-grey", 200),
    colorStop: $.colors("blue-grey", 200),
    strokeColor: $.colors("primary", 500),
    generateGradient: true
  },
  init: function(context) {
    if (!Gauge) return;

    var defaults = $.components.getDefaults("gauge");

    $('[data-plugin="gauge"]', context).each(function() {
      var $this = $(this),
        options = $this.data(),
        $text = $this.find('.gauge-label'),
        $canvas = $this.find("canvas");

      options = $.extend(true, {}, defaults, options);

      if ($canvas.length === 0) {
        return;
      }

      var gauge = new Gauge($canvas[0]).setOptions(options);

      $this.data("gauge", gauge);

      gauge.animationSpeed = 50;
      gauge.maxValue = $this.data('max-value');

      gauge.set($this.data("value"));

      if ($text.length > 0) {
        gauge.setTextField($text[0]);
      }
    });
  }
});

$.components.register("donut", {
  mode: "init",
  defaults: {
    lines: 12,
    angle: 0.3,
    lineWidth: 0.08,
    pointer: {
      length: 0.9,
      strokeWidth: 0.035,
      color: $.colors("blue-grey", 400)
    },
    limitMax: false, // If true, the pointer will not go past the end of the gauge
    colorStart: $.colors("blue-grey", 200),
    colorStop: $.colors("blue-grey", 200),
    strokeColor: $.colors("primary", 500),
    generateGradient: true
  },
  init: function(context) {
    if (!Gauge) return;

    var defaults = $.components.getDefaults("donut");

    $('[data-plugin="donut"]', context).each(function() {

      var $this = $(this),
        options = $this.data(),
        $text = $this.find('.donut-label'),
        $canvas = $this.find("canvas");

      options = $.extend(true, {}, defaults, options);

      if ($canvas.length === 0) {
        return;
      }

      var donut = new Donut($canvas[0]).setOptions(options);

      $this.data("donut", donut);

      donut.animationSpeed = 50;
      donut.maxValue = $this.data('max-value');

      donut.set($this.data("value"));

      if ($text.length > 0) {
        donut.setTextField($text[0]);
      }
    });
  }
});

$.components.register("gmaps", {
  styles: [{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "300")
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#e0e0e0"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "200")
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.attraction",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
      "color": $.colors("blue-grey", "200")
    }, {
      "weight": 0.5
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": $.colors("blue-grey", "300")
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "off"
    }, {
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }, {
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "color": $.colors("blue-grey", "100")
    }]
  }, {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "600")
    }]
  }, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "on"
    }, {
      "hue": "#ffffff"
    }, {
      "saturation": -100
    }, {
      "lightness": 50
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ffffff"
    }]
  }, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "600")
    }]
  }]
});

$.components.register("gridstack", {
  mode: "init",
  defaults: {
    cell_height: 80,
    vertical_margin: 20
  },
  init: function(context) {
    if (!$.fn.gridstack) return;

    var defaults = $.components.getDefaults("gridstack");

    $('[data-plugin="gridstack"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).gridstack(options);
    });
  }
});

$.components.register("highlight", {
  mode: "init",
  defaults: {

  },
  init: function(context) {
    if (typeof $.fn.hightlight === "undefined") return;
    var defaults = $.components.getDefaults('highlight');

    // hljs.configure({useBR: true});

    $('[data-plugin="highlight"]', context).each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});

$.components.register("sortable", {
  defaults: {},
  mode: "default"
});

$.components.register("iCheck", {
  mode: "default",
  defaults: {}
});

$.components.register("input-group-file", {
  api: function() {
    $(document).on("change", ".input-group-file [type=file]", function() {
      var $this = $(this);
      var $text = $(this).parents('.input-group-file').find('.form-control');
      var value = "";

      $.each($this[0].files, function(i, file) {
        value += file.name + ", ";
      });
      value = value.substring(0, value.length - 2);

      $text.val(value);
    });
  }
});

$.components.register("isotope", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof $.fn.isotope === "undefined") return;
    var defaults = $.components.getDefaults('isotope');

    var callback = function() {
      $('[data-plugin="isotope"]', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this.isotope(options);
      });
    }
    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});

$.components.register("appear", {
  defaults: {},
  api: function(context) {
    if (!$.fn.appear) return;

    $(document).on("appear", '[data-plugin="appear"]', function() {
      var $item = $(this),
        animate = $item.data("animate");

      if ($item.hasClass('appear-no-repeat')) return;
      $item.removeClass("invisible").addClass('animation-' + animate);

      if ($item.data("repeat") === false) {
        $item.addClass('appear-no-repeat');
      }
    });

    $(document).on("disappear", '[data-plugin="appear"]', function() {
      var $item = $(this),
        animate = $item.data("animate");

      if ($item.hasClass('appear-no-repeat')) return;

      $item.addClass("invisible").removeClass('animation-' + animate);
    });
  },

  init: function(context) {
    if (!$.fn.appear) return;

    var defaults = $.components.getDefaults("appear");

    $('[data-plugin="appear"]', context).appear(defaults);
    $('[data-plugin="appear"]', context).not(':appeared').addClass("invisible");
  }
});

$.components.register("floatThead", {
  mode: "default",
  defaults: {
    top: function() {
      return $('.site-navbar').outerHeight();
    },
    position: 'absolute'
  }
});

$.components.register("knob", {
  mode: "default",
  defaults: {
    min: -50,
    max: 50,
    width: 120,
    height: 120,
    thickness: ".1"
  }
});

$.components.register("labelauty", {
  mode: "default",
  defaults: {
    same_width: true
  }
});

$.components.register("placeholder", {
  mode: "init",
  init: function(context) {
    if (!$.fn.placeholder) return;

    $('input, textarea', context).placeholder();
  }
});

$.components.register("strength", {
  mode: "default",
  defaults: {
    showMeter: true,
    showToggle: false,

    templates: {
      toggle: '<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="Show/Hide Password" id="show_password" /><label for="show_password">Show Password</label></div>',
      meter: '<div class="{meterClass}">{score}</div>',
      score: '<div class="{scoreClass}"></div>',
      main: '<div class="{containerClass}">{input}{meter}{toggle}</div>'
    },

    classes: {
      container: 'strength-container',
      status: 'strength-{status}',
      input: 'strength-input',
      toggle: 'strength-toggle',
      meter: 'strength-meter',
      score: 'strength-score'
    },

    scoreLables: {
      invalid: 'Invalid',
      weak: 'Weak',
      good: 'Good',
      strong: 'Strong'
    },

    scoreClasses: {
      invalid: 'strength-invalid',
      weak: 'strength-weak',
      good: 'strength-good',
      strong: 'strength-strong'
    }
  }
});

$.components.register("wizard", {
  mode: "default",
  defaults: {
    step: ".steps .step, .pearls .pearl",
    templates: {
      buttons: function() {
        var options = this.options;
        return '<div class="wizard-buttons">' +
          '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' +
          '<a class="btn btn-primary btn-outline pull-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' +
          '<a class="btn btn-success btn-outline pull-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' +
          '</div>';
      }
    }
  }
});

$.components.register("timepicker", {
  mode: "default",
  defaults: {}
});

$.components.register("vectorMap", {
  mode: "default",
  defaults: {
    map: "world_mill_en",
    backgroundColor: '#fff',
    zoomAnimate: true,
    regionStyle: {
      initial: {
        fill: $.colors("primary", 600)
      },
      hover: {
        fill: $.colors("primary", 500)
      },
      selected: {
        fill: $.colors("primary", 800)
      },
      selectedHover: {
        fill: $.colors("primary", 500)
      }
    },
    markerStyle: {
      initial: {
        r: 8,
        fill: $.colors("red", 600),
        "stroke-width": 0
      },
      hover: {
        r: 12,
        stroke: $.colors("red", 600),
        "stroke-width": 0
      }
    }
  }
});

$.components.register("ladda", {
  mode: "init",
  defaults: {
    timeout: 2000
  },
  init: function() {
    if (typeof Ladda === "undefined") return;

    var defaults = $.components.getDefaults("ladda");
    Ladda.bind('[data-plugin="ladda"]', defaults);
  }
});

$.components.register("laddaProgress", {
  mode: "init",
  defaults: {
    init: function(instance) {
      var progress = 0;
      var interval = setInterval(function() {
        progress = Math.min(progress + Math.random() * 0.1, 1);
        instance.setProgress(progress);

        if (progress === 1) {
          instance.stop();
          clearInterval(interval);
        }
      }, 200);
    }
  },
  init: function() {
    if (typeof Ladda === 'undefined') return;

    var defaults = $.components.getDefaults("laddaProgress");
    // Bind progress buttons and simulate loading progress
    Ladda.bind('[data-plugin="laddaProgress"]', defaults);
  }
});

$.components.register("magnificPopup", {
  mode: "default",
  defaults: {
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: true
    }
  }
});

$.components.register("masonry", {
  mode: "init",
  defaults: {
    itemSelector: ".masonry-item"
  },
  init: function(context) {
    if (typeof $.fn.masonry === "undefined") return;
    var defaults = $.components.getDefaults('masonry');

    var callback = function() {
      $('[data-plugin="masonry"]', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this.masonry(options);
      });
    }
    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});

$.components.register("matchHeight", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof $.fn.matchHeight === "undefined") return;
    var defaults = $.components.getDefaults('matchHeight');

    $('[data-plugin="matchHeight"]', context).each(function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data()),
        matchSelector = $this.data('matchSelector');

      if (matchSelector) {
        $this.find(matchSelector).matchHeight(options);
      } else {
        $this.children().matchHeight(options);
      }

    });
  }
});

$.components.register("material", {
  init: function(context) {
    $('.form-material', context).each(function() {
      var $this = $(this);

      if ($this.data('material') === true) {
        return;
      }

      var $control = $this.find('.form-control');

      // Add hint label if required
      if ($control.attr("data-hint")) {
        $control.after("<div class=hint>" + $control.attr("data-hint") + "</div>");
      }

      if ($this.hasClass("floating")) {
        // Add floating label if required
        if ($control.hasClass("floating-label")) {
          var placeholder = $control.attr("placeholder");
          $control.attr("placeholder", null).removeClass("floating-label");
          $control.after("<div class=floating-label>" + placeholder + "</div>");
        }

        // Set as empty if is empty
        if ($control.val() === null || $control.val() == "undefined" || $control.val() === "") {
          $control.addClass("empty");
        }
      }

      // Support for file input
      if ($control.next().is("[type=file]")) {
        $this.addClass('form-material-file');
      }

      $this.data('material', true);
    });
  },
  api: function() {
    function _isChar(e) {
      if (typeof e.which == "undefined") {
        return true;
      } else if (typeof e.which == "number" && e.which > 0) {
        return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8 && e.which != 9;
      }
      return false;
    }

    $(document).on("keydown.site.material paste.site.material", ".form-control", function(e) {
        if (_isChar(e)) {
          $(this).removeClass("empty");
        }
      }).on("keyup.site.material change.site.material", ".form-control", function() {
        var $this = $(this);
        if ($this.val() === "" && (typeof $this[0].checkValidity != "undefined" && $this[0].checkValidity())) {
          $this.addClass("empty");
        } else {
          $this.removeClass("empty");
        }
      }).on("focus", ".form-material-file", function() {
        $(this).find("input").addClass("focus");
      })
      .on("blur", ".form-material-file", function() {
        $(this).find("input").removeClass("focus");
      })
      .on("change", ".form-material-file [type=file]", function() {
        var $this = $(this);
        var value = "";
        $.each($this[0].files, function(i, file) {
          value += file.name + ", ";
        });
        value = value.substring(0, value.length - 2);
        if (value) {
          $this.prev().removeClass("empty");
        } else {
          $this.prev().addClass("empty");
        }
        $this.prev().val(value);
      });
  }
});

$.components.register("multiSelect", {
  mode: "default",
  defaults: {}
});

$.components.register("nestable", {
  mode: "default"
});

$.components.register("nprogress", {
  mode: "init",
  defaults: {
    minimum: 0.15,
    trickleRate: .07,
    trickleSpeed: 360,
    showSpinner: false,
    template: '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  },
  init: function() {
    if (typeof NProgress === "undefined") return;
    var defaults = $.components.getDefaults('nprogress');
    NProgress.configure(defaults);
  }
});

$.components.register("owlCarousel", {
  mode: "default",
  defaults: {
    loop: true,
    nav: true,
    dots: false,
    dotsClass: "owl-dots owl-dots-fall",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  }
});

$.components.register("panel", {
  api: function() {
    $(document).on('click.site.panel', '[data-toggle="panel-fullscreen"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.toggleFullscreen();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-collapse"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.toggleContent();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-close"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.close();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-refresh"]', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      var callback = $this.data('loadCallback');

      if ($.isFunction(window[callback])) {
        api.load(window[callback]);
      } else {
        api.load();
      }
    });
  },

  init: function(context) {
    $('.panel', context).each(function() {
      var $this = $(this);

      var isFullscreen = false;
      var isClose = false;
      var isCollapse = false;
      var isLoading = false;

      var $fullscreen = $this.find('[data-toggle="panel-fullscreen"]');
      var $collapse = $this.find('[data-toggle="panel-collapse"]');
      var $loading;
      var self = this;

      if ($this.hasClass('is-collapse')) {
        isCollapse = true;
      }

      var api = {
        load: function(callback) {
          var type = $this.data('loader-type');
          if (!type) {
            type = 'default';
          }

          $loading = $('<div class="panel-loading">' +
            '<div class="loader loader-' + type + '"></div>' +
            '</div>');

          $loading.appendTo($this);

          $this.addClass('is-loading');
          $this.trigger('loading.uikit.panel');
          isLoading = true;

          if ($.isFunction(callback)) {
            callback.call(self, this.done);
          }
        },
        done: function() {
          if (isLoading === true) {
            $loading.remove();
            $this.removeClass('is-loading');
            $this.trigger('loading.done.uikit.panel');
          }
        },
        toggleContent: function() {
          if (isCollapse) {
            this.showContent();
          } else {
            this.hideContent();
          }
        },

        showContent: function() {
          if (isCollapse !== false) {
            $this.removeClass('is-collapse');

            if ($collapse.hasClass('wb-plus')) {
              $collapse.removeClass('wb-plus').addClass('wb-minus');
            }

            $this.trigger('shown.uikit.panel');

            isCollapse = false;
          }
        },

        hideContent: function() {
          if (isCollapse !== true) {
            $this.addClass('is-collapse');

            if ($collapse.hasClass('wb-minus')) {
              $collapse.removeClass('wb-minus').addClass('wb-plus');
            }

            $this.trigger('hidden.uikit.panel');
            isCollapse = true;
          }
        },

        toggleFullscreen: function() {
          if (isFullscreen) {
            this.leaveFullscreen();
          } else {
            this.enterFullscreen();
          }
        },
        enterFullscreen: function() {
          if (isFullscreen !== true) {
            $this.addClass('is-fullscreen');

            if ($fullscreen.hasClass('wb-expand')) {
              $fullscreen.removeClass('wb-expand').addClass('wb-contract');
            }

            $this.trigger('enter.fullscreen.uikit.panel');
            isFullscreen = true;
          }
        },
        leaveFullscreen: function() {
          if (isFullscreen !== false) {
            $this.removeClass('is-fullscreen');

            if ($fullscreen.hasClass('wb-contract')) {
              $fullscreen.removeClass('wb-contract').addClass('wb-expand');
            }

            $this.trigger('leave.fullscreen.uikit.panel');
            isFullscreen = false;
          }
        },
        toggle: function() {
          if (isClose) {
            this.open();
          } else {
            this.close();
          }
        },
        open: function() {
          if (isClose !== false) {
            $this.removeClass('is-close');
            $this.trigger('open.uikit.panel');

            isClose = false;
          }
        },
        close: function() {
          if (isClose !== true) {

            $this.addClass('is-close');
            $this.trigger('close.uikit.panel');

            isClose = true;
          }
        }
      };

      $this.data('panel-api', api);
    });
  }
});

$.components.register("peityBar", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 400)],
    height: 22,
    max: null,
    min: 0,
    padding: 0.1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityBar");

    $('[data-plugin="peityBar"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[400]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('bar', options);
    });
  }
});

$.components.register("peityDonut", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    innerRadius: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityDonut");

    $('[data-plugin="peityDonut"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('donut', options);
    });
  }
});

$.components.register("peityLine", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 200)],
    height: 22,
    max: null,
    min: 0,
    stroke: $.colors("primary", 600),
    strokeWidth: 1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityLine");

    $('[data-plugin="peityLine"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[200]];
          defaults.stroke = skinColors[600];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('line', options);
    });
  }
});

$.components.register("peityPie", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityPie");

    $('[data-plugin="peityPie"]', context).each(function() {

      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('pie', options);
    });
  }
});

$.components.register("plyr", {
  mode: "init",
  init: function() {
    if (typeof plyr === "undefined") return;

    (function(d, u) {
      var a = new XMLHttpRequest(),
        b = d.body;

      // Check for CORS support
      if ("withCredentials" in a) {
        a.open("GET", u, true);
        a.send();
        a.onload = function() {
          var c = d.createElement("div");
          c.style.display = "none";
          c.innerHTML = a.responseText;
          b.insertBefore(c, b.childNodes[0]);
        }
      }
    })(document, "https://cdn.plyr.io/1.1.5/sprite.svg");

    plyr.setup();
  }
});

$.components.register("rating", {
  mode: "init",
  defaults: {
    targetKeep: true,
    icon: "font",
    starType: "i",
    starOff: "icon wb-star",
    starOn: "icon wb-star orange-600",
    cancelOff: "icon wb-minus-circle",
    cancelOn: "icon wb-minus-circle orange-600",
    starHalf: "icon wb-star-half orange-500"
  },
  init: function(context) {
    if (!$.fn.raty) return;

    var defaults = $.components.getDefaults("rating");

    $('[data-plugin="rating"]', context).each(function() {
      var $this = $(this);
      var options = $.extend(true, {}, defaults, $this.data());

      if (options.hints) {
        options.hints = options.hints.split(',');
      }

      $this.raty(options);
    });
  }
});

$.components.register("select2", {
  mode: "default",
  defaults: {
    width: "style"
  }
});

$.components.register("selectable", {
  mode: "init",
  defaults: {
    allSelector: '.selectable-all',
    itemSelector: '.selectable-item',
    rowSelector: 'tr',
    rowSelectable: false,
    rowActiveClass: 'active',
    onChange: null
  },
  init: function(context) {
    if (!$.fn.asSelectable) return;
    var defaults = $.components.getDefaults('selectable');

    $('[data-plugin="selectable"], [data-selectable="selectable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());
      $(this).asSelectable(options);
    });
  }
});

$.components.register("slidePanel", {
  mode: "manual",
  defaults: {
    closeSelector: '.slidePanel-close',
    mouseDragHandler: '.slidePanel-handler',
    loading: {
      template: function(options) {
        return '<div class="' + options.classes.loading + '">' +
          '<div class="loader loader-default"></div>' +
          '</div>';
      },
      showCallback: function(options) {
        this.$el.addClass(options.classes.loading + '-show');
      },
      hideCallback: function(options) {
        this.$el.removeClass(options.classes.loading + '-show');
      }
    }
  }
});

$.components.register("summernote", {
  mode: "default",
  defaults: {
    height: 300
  }
});

$.components.register("switchery", {
  mode: "init",
  defaults: {
    color: $.colors("primary", 600)
  },
  init: function(context) {
    if (typeof Switchery === "undefined") return;

    var defaults = $.components.getDefaults("switchery");

    $('[data-plugin="switchery"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      new Switchery(this, options);
    });
  }
});

$.components.register("table", {
  mode: "api",
  api: function(context) {
    /* section */
    function run(e) {
      if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !$(e.target).parent("div.checkbox-custom").length) {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active")
        } else {
          $(this).siblings('.table-section').removeClass("active");
          $(this).addClass("active");
        }
      }
    }

    var touch = typeof document.ontouchstart !== 'undefined',
      type = 'click';

    if (touch) {
      type = 'touchstart';
    }

    $(document).on(type, '.table-section', function(e) {
      run.call(this, e);
    });
  }
});

$.components.register("verticalTab", {
  mode: "init",
  init: function(context) {
    if (!$.fn.matchHeight) return;

    $('.nav-tabs-vertical', context).each(function() {
      $(this).children().matchHeight();
    });
  }
});

$.components.register("horizontalTab", {
  mode: "init",
  init: function(context) {
    if (!$.fn.responsiveHorizontalTabs) return;

    $('.nav-tabs-horizontal', context).responsiveHorizontalTabs();
  }
});

$.components.register("taskList", {
  mode: "api",
  api: function() {
    $(document).on('change.site.task', '[data-role="task"]', function() {
      var $list = $(this),
        $checkbox = $list.find('[type="checkbox"]');
      if ($checkbox.is(':checked')) {
        $list.addClass('task-done');
      } else {
        $list.removeClass('task-done');
      }
    });

    $('[data-role="task"]').trigger('change.site.task');
  }
});

$.components.register("toastr", {
  mode: "api",
  api: function() {
    if (typeof toastr === "undefined") return;
    var defaults = $.components.getDefaults("toastr");

    $(document).on('click.site.toastr', '[data-plugin="toastr"]', function(e) {
      e.preventDefault();

      var $this = $(this);
      var options = $.extend(true, {}, defaults, $this.data());
      var message = options.message || '';
      var type = options.type || "info";
      var title = options.title || undefined;

      switch (type) {
        case "success":
          toastr.success(message, title, options);
          break;
        case "warning":
          toastr.warning(message, title, options);
          break;
        case "error":
          toastr.error(message, title, options);
          break;
        case "info":
          toastr.info(message, title, options);
          break;
        default:
          toastr.info(message, title, options);
      }
    });
  }
});

$.components.register("toolbar", {
  mode: "init",
  init: function(context) {
    if (!$.fn.toolbar) return;

    var defaults = $.components.getDefaults("toolbar");

    $('[data-plugin="toolbar"]', context).each(function() {
      var $this = $(this);
      var content = $this.data("toolbar");

      var options = $.extend(true, {}, defaults);

      if (content) {
        options.content = content;
      }

      $this.toolbar(options);
    });
  }
});

$.components.register("webuiPopover", {
  mode: "default",
  defaults: {
    trigger: "click",
    width: 320,
    multi: true,
    cloaseable: false,
    style: "",
    delay: 300,
    padding: true
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace",{mode:"init",defaults:{},init:function(context){"undefined"!=typeof ace&&(ace.config.loadModule("ace/ext/language_tools"),$('[data-plugin="ace"]',context).each(function(){var id=$(this).attr("id"),mode=$(this).data("mode"),theme=$(this).data("theme"),editor=ace.edit(id);editor.container.style.opacity="",mode&&editor.session.setMode("ace/mode/"+mode),theme&&editor.setTheme("ace/theme/"+theme),editor.setOption("maxLines",40),editor.setAutoScrollEditorIntoView(!0),ace.config.loadModule("ace/ext/language_tools",function(){editor.setOptions({enableSnippets:!0,enableBasicAutocompletion:!0})})}))}}),$.components.register("alertify",{mode:"api",defaults:{type:"alert",delay:5e3,theme:"bootstrap"},api:function(){if("undefined"!=typeof alertify){var defaults=$.components.getDefaults("alertify");$(document).on("click.site.alertify",'[data-plugin="alertify"]',function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());switch(options.labelOk&&(options.okBtn=options.labelOk),options.labelCancel&&(options.cancelBtn=options.labelCancel),"undefined"!=typeof options.delay&&alertify.delay(options.delay),"undefined"!=typeof options.theme&&alertify.theme(options.theme),"undefined"!=typeof options.cancelBtn&&alertify.cancelBtn(options.cancelBtn),"undefined"!=typeof options.okBtn&&alertify.okBtn(options.okBtn),"undefined"!=typeof options.placeholder&&alertify.delay(options.placeholder),"undefined"!=typeof options.defaultValue&&alertify.delay(options.defaultValue),"undefined"!=typeof options.maxLogItems&&alertify.delay(options.maxLogItems),"undefined"!=typeof options.closeLogOnClick&&alertify.delay(options.closeLogOnClick),options.type){case"alert":alertify.alert(options.alertMessage);break;case"confirm":alertify.confirm(options.confirmTitle,function(){alertify.success(options.successMessage)},function(){alertify.error(options.errorMessage)});break;case"prompt":alertify.prompt(options.promptTitle,function(str,ev){var message=options.successMessage.replace("%s",str);alertify.success(message)},function(ev){alertify.error(options.errorMessage)});break;case"log":alertify.log(options.logMessage);break;case"success":alertify.success(options.successMessage);break;case"error":alertify.error(options.errorMessage)}})}}}),$.components.register("animate-list",{mode:"init",defaults:{child:".panel",duration:250,delay:50,animate:"scale-up",fill:"backwards"},init:function(){var self=this;$("[data-plugin=animateList]").each(function(){var $this=$(this),options=$.extend({},self.defaults,$this.data(),!0),animatedBox=function($el,opts){this.options=opts,this.$children=$el.find(opts.child),this.$children.addClass("animation-"+opts.animate),this.$children.css("animation-fill-mode",opts.fill),this.$children.css("animation-duration",opts.duration+"ms");var delay=0,self=this;this.$children.each(function(){$(this).css("animation-delay",delay+"ms"),delay+=self.options.delay})};animatedBox.prototype={run:function(type){var self=this;this.$children.removeClass("animation-"+this.options.animate),"undefined"!=typeof type&&(this.options.animate=type),setTimeout(function(){self.$children.addClass("animation-"+self.options.animate)},0)}},$this.data("animateList",new animatedBox($this,options))})}}),$.components.register("animsition",{mode:"manual",defaults:{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"loader",loadingType:"default",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]},init:function(context,callback){var options=$.components.getDefaults("animsition");if(options.random){var li=options.inDefaults.length,lo=options.outDefaults.length,ni=parseInt(li*Math.random(),0),no=parseInt(lo*Math.random(),0);options.inClass=options.inDefaults[ni],options.outClass=options.outDefaults[no]}var $this=$(".animsition",context);return $this.animsition(options),$("."+options.loadingClass).addClass("loader-"+options.loadingType),$this.animsition("supportCheck",options)?($.isFunction(callback)&&$this.one("animsition.end",function(){callback.call()}),!0):($.isFunction(callback)&&callback.call(),!1)}}),$.components.register("breadcrumb",{mode:"init",defaults:{namespace:"breadcrumb",dropdown:function(){return'<div class="dropdown"><a href="javascript:void(0);" data-toggle="dropdown"><i class="'+this.dropicon+'"></i></a><ul class="'+this.namespace+'-menu dropdown-menu" role="menu"></ul></div>'},dropdownContent:function(value){return'<li><a href="javascript:void(0);">'+value+"</a></li>"}},init:function(context){if($.fn.asBreadcrumbs){var defaults=$.components.getDefaults("breadcrumb");$('[data-plugin="breadcrumb"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asBreadcrumbs(options)})}}}),$.components.register("asColorPicker",{defaults:{namespace:"colorInputUi"},mode:"default"}),$.components.register("paginator",{mode:"init",defaults:{namespace:"pagination",currentPage:1,itemsPerPage:10,disabledClass:"disabled",activeClass:"active",visibleNum:{0:3,480:5},tpl:function(){return"{{prev}}{{lists}}{{next}}"},components:{prev:{tpl:function(){return'<li class="'+this.namespace+'-prev"><a href="javascript:void(0)"><span class="icon wb-chevron-left-mini"></span></a></li>'}},next:{tpl:function(){return'<li class="'+this.namespace+'-next"><a href="javascript:void(0)"><span class="icon wb-chevron-right-mini"></span></a></li>'}},lists:{tpl:function(){var lists="",remainder=this.currentPage>=this.visible?this.currentPage%this.visible:this.currentPage;remainder=0===remainder?this.visible:remainder;for(var k=1;remainder>k;k++)lists+='<li class="'+this.namespace+'-items" data-value="'+(this.currentPage-remainder+k)+'"><a href="javascript:void(0)">'+(this.currentPage-remainder+k)+"</a></li>";lists+='<li class="'+this.namespace+"-items "+this.classes.active+'" data-value="'+this.currentPage+'"><a href="javascript:void(0)">'+this.currentPage+"</a></li>";for(var i=this.currentPage+1,limit=i+this.visible-remainder-1>this.totalPages?this.totalPages:i+this.visible-remainder-1;limit>=i;i++)lists+='<li class="'+this.namespace+'-items" data-value="'+i+'"><a href="javascript:void(0)">'+i+"</a></li>";return lists}}}},init:function(context){if($.fn.asPaginator){var defaults=$.components.getDefaults("paginator");$('[data-plugin="paginator"]',context).each(function(){var $this=$(this),options=$this.data(),total=$this.data("total");options=$.extend({},defaults,options),$this.asPaginator(total,options)})}}}),$.components.register("pieProgress",{mode:"init",defaults:{namespace:"pie-progress",speed:30,classes:{svg:"pie-progress-svg",element:"pie-progress",number:"pie-progress-number",content:"pie-progress-content"}},init:function(context){if($.fn.asPieProgress){var defaults=$.components.getDefaults("pieProgress");$('[data-plugin="pieProgress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend(!0,{},defaults,options),$this.asPieProgress(options)})}}}),$.components.register("progress",{mode:"init",defaults:{bootstrap:!0,onUpdate:function(n){var per=(n-this.min)/(this.max-this.min);.5>per?this.$target.addClass("progress-bar-success").removeClass("progress-bar-warning progress-bar-danger"):per>=.5&&.8>per?this.$target.addClass("progress-bar-warning").removeClass("progress-bar-success progress-bar-danger"):this.$target.addClass("progress-bar-danger").removeClass("progress-bar-success progress-bar-warning")},labelCallback:function(n){var label,labelType=this.$element.data("labeltype");if("percentage"===labelType){var percentage=this.getPercentage(n);label=percentage+"%"}else if("steps"===labelType){var total=this.$element.data("totalsteps");total||(total=10);var step=Math.round(total*(n-this.min)/(this.max-this.min));label=step+" / "+total}else label=n;return this.$element.parent().hasClass("contextual-progress")&&this.$element.parent().find(".progress-label").html(label),label}},init:function(context){if($.fn.asProgress){var defaults=$.components.getDefaults("progress");$('[data-plugin="progress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend({},defaults,options),$this.asProgress(options)})}}}),$.components.register("asRange",{mode:"default",defaults:{tip:!1,scale:!1}}),$.components.register("scrollable",{mode:"init",defaults:{namespace:"scrollable",contentSelector:"> [data-role='content']",containerSelector:"> [data-role='container']"},init:function(context){if($.fn.asScrollable){var defaults=$.components.getDefaults("scrollable");$('[data-plugin="scrollable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asScrollable(options)})}}}),$.components.register("asSpinner",{mode:"default",defaults:{namespace:"spinnerUi",skin:null,min:"-10",max:100,mousewheel:!0}}),$.components.register("bootbox",{mode:"api",defaults:{message:""},api:function(){if("undefined"!=typeof bootbox){var defaults=$.components.getDefaults("bootbox");$(document).on("click.site.bootbox",'[data-plugin="bootbox"]',function(){var $btn=$(this),options=$btn.data();if(options=$.extend(!0,{},defaults,options),options.classname&&(options.className=options.classname),"string"==typeof options.callback&&$.isFunction(window[options.callback])&&(options.callback=window[options.callback]),options.type)switch(options.type){case"alert":bootbox.alert(options);break;case"confirm":bootbox.confirm(options);break;case"prompt":bootbox.prompt(options);break;default:bootbox.dialog(options)}else bootbox.dialog(options)})}}}),$.components.register("datepicker",{mode:"default",defaults:{autoclose:!0}}),$.components.register("maxlength",{mode:"default",defaults:{}}),$.components.register("selectpicker",{mode:"default",defaults:{style:"btn-select",iconBase:"icon",tickIcon:"wb-check"}}),$.components.register("sweetalert",{mode:"api",api:function(){if("undefined"!=typeof swal){var defaults=$.components.getDefaults("sweetalert");$(document).on("click.site.sweetalert",'[data-plugin="sweetalert"]',function(){var options=$.extend(!0,{},defaults,$(this).data());swal(options)})}}}),$.components.register("tagsinput",{defaults:{tagClass:"label label-default"},mode:"default"}),$.components.register("tokenfield",{mode:"default",defaults:{}}),$.components.register("TouchSpin",{mode:"default",defaults:{verticalupclass:"wb-plus",verticaldownclass:"wb-minus",buttondown_class:"btn btn-outline btn-default",buttonup_class:"btn btn-outline btn-default"}}),$.components.register("treeview",{mode:"init",defaults:{injectStyle:!1,expandIcon:"icon wb-plus",collapseIcon:"icon wb-minus",emptyIcon:"icon",nodeIcon:"icon wb-folder",showBorder:!1,borderColor:$.colors("blue-grey",200),onhoverColor:$.colors("blue-grey",100),selectedColor:"#ffffff",selectedBackColor:$.colors("primary",600),searchResultColor:$.colors("primary",600),searchResultBackColor:"#ffffff"},init:function(context){if($.fn.treeview){var defaults=$.components.getDefaults("treeview");$('[data-plugin="treeview"]',context).each(function(){var $this=$(this),options=$this.data();"string"==typeof options.source&&$.isFunction(window[options.source])?(options.data=window[options.source](),delete options.source):$.isFunction(options.souce)&&(options.data=options.source(),delete options.source),options=$.extend(!0,{},defaults,options),$this.treeview(options)})}}}),$.components.register("buttons",{mode:"api",defaults:{},api:function(){$(document).on("click.site.loading","[data-loading-text]",function(){var $btn=$(this),text=$btn.text(),i=20,loadingText=$btn.data("loadingText");$btn.text(loadingText+"("+i+")").css("opacity",".6");var timeout=setInterval(function(){$btn.text(loadingText+"("+--i+")"),0===i&&(clearInterval(timeout),$btn.text(text).css("opacity","1"))},1e3)}),$(document).on("click.site.morebutton","[data-more]",function(){var $target=$($(this).data("more"));$target.toggleClass("show")})}}),$.components.register("card",{mode:"init",defaults:{},init:function(context){if($.fn.card){var defaults=$.components.getDefaults("card");$('[data-plugin="card"]',context).each(function(){var options=$.extend({},defaults,$(this).data());options.target&&(options.container=$(options.target)),$(this).card(options)})}}}),$.components.register("clockpicker",{mode:"default",defaults:{donetext:"Done"}}),$.components.register("dataTable",{defaults:{responsive:!0,language:{sSearchPlaceholder:"Search..",lengthMenu:"_MENU_",search:"_INPUT_",paginate:{previous:'<i class="icon wb-chevron-left-mini"></i>',next:'<i class="icon wb-chevron-right-mini"></i>'}}},api:function(){$.fn.dataTable&&$.fn.dataTable.TableTools&&$.extend(!0,$.fn.dataTable.TableTools.classes,{container:"DTTT btn-group btn-group pull-left",buttons:{normal:"btn btn-outline btn-default",disabled:"disabled"},print:{body:"site-print DTTT_Print"}})},init:function(context){if($.fn.dataTable){var defaults=$.components.getDefaults("dataTable");$('[data-plugin="dataTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).dataTable(options)})}}}),$.components.register("datepair",{mode:"default",defaults:{startClass:"datepair-start",endClass:"datepair-end",timeClass:"datepair-time",dateClass:"datepair-date"}}),$.components.register("editableTable",{mode:"init",init:function(context){if($.fn.editableTableWidget){var defaults=$.components.getDefaults("editableTable");$('[data-plugin="editableTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).editableTableWidget(options)})}}}),$.components.register("filterable",{mode:"init",defaults:{animationOptions:{duration:750,easing:"linear",queue:!1}},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("filterable"),callback=function(){$("[data-filterable]",context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data(),{filter:"*"});$this.isotope(options)}),$("[data-filter]",context).click(function(e){var $this=$(this),target=$this.data("target"),$li=$this.parent("li");target||(target=$this.attr("href"),target=target&&target.replace(/.*(?=#[^\s]*$)/,"")),$li.siblings(".active").each(function(){$(this).find("a").attr("aria-expanded",!1),$(this).removeClass("active")}),$li.addClass("active"),$this.attr("aria-expanded",!0);var $list=$(target,context),filter=$this.attr("data-filter");"*"!==filter&&(filter='[data-type="'+filter+'"]'),$list.isotope({filter:filter}),e.preventDefault()})};context!==document?callback():$(window).on("load",function(){callback()})}}}),$.components.register("formatter",{mode:"init",defaults:{persistent:!0},init:function(context){if($.fn.formatter){var ieOptions,defaults=$.components.getDefaults("formatter"),browserName=navigator.userAgent.toLowerCase();ieOptions=/msie/i.test(browserName)&&!/opera/.test(browserName)?{persistent:!1}:{},$('[data-plugin="formatter"]',context).each(function(){var options=$.extend({},defaults,ieOptions,$(this).data());options.pattern&&(options.pattern=options.pattern.replace(/\[\[/g,"{{").replace(/\]\]/g,"}}")),$(this).formatter(options)})}}}),$.components.register("gauge",{mode:"init",defaults:{lines:12,angle:.12,lineWidth:.4,pointer:{length:.68,strokeWidth:.03,color:$.colors("blue-grey",400)},limitMax:!0,colorStart:$.colors("blue-grey",200),colorStop:$.colors("blue-grey",200),strokeColor:$.colors("primary",500),generateGradient:!0},init:function(context){if(Gauge){var defaults=$.components.getDefaults("gauge");$('[data-plugin="gauge"]',context).each(function(){var $this=$(this),options=$this.data(),$text=$this.find(".gauge-label"),$canvas=$this.find("canvas");if(options=$.extend(!0,{},defaults,options),0!==$canvas.length){var gauge=new Gauge($canvas[0]).setOptions(options);$this.data("gauge",gauge),gauge.animationSpeed=50,gauge.maxValue=$this.data("max-value"),gauge.set($this.data("value")),$text.length>0&&gauge.setTextField($text[0])}})}}}),$.components.register("donut",{mode:"init",defaults:{lines:12,angle:.3,lineWidth:.08,pointer:{length:.9,strokeWidth:.035,color:$.colors("blue-grey",400)},limitMax:!1,colorStart:$.colors("blue-grey",200),colorStop:$.colors("blue-grey",200),strokeColor:$.colors("primary",500),generateGradient:!0},init:function(context){if(Gauge){var defaults=$.components.getDefaults("donut");$('[data-plugin="donut"]',context).each(function(){var $this=$(this),options=$this.data(),$text=$this.find(".donut-label"),$canvas=$this.find("canvas");if(options=$.extend(!0,{},defaults,options),0!==$canvas.length){var donut=new Donut($canvas[0]).setOptions(options);$this.data("donut",donut),donut.animationSpeed=50,donut.maxValue=$this.data("max-value"),donut.set($this.data("value")),$text.length>0&&donut.setTextField($text[0])}})}}}),$.components.register("gmaps",{styles:[{featureType:"landscape",elementType:"all",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:$.colors("blue-grey","300")}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#e0e0e0"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:$.colors("blue-grey","200")}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{color:$.colors("blue-grey","200")},{weight:.5}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:$.colors("blue-grey","300")}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"},{color:"#000000"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{color:"#000000"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"},{color:$.colors("blue-grey","700")}]},{featureType:"road.local",elementType:"labels.text",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"transit",elementType:"all",stylers:[{color:$.colors("blue-grey","100")}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","600")}]},{featureType:"administrative.neighborhood",elementType:"labels.text",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"on"},{hue:"#ffffff"},{saturation:-100},{lightness:50}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","600")}]}]}),$.components.register("gridstack",{mode:"init",defaults:{cell_height:80,vertical_margin:20},init:function(context){if($.fn.gridstack){var defaults=$.components.getDefaults("gridstack");$('[data-plugin="gridstack"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).gridstack(options)})}}}),$.components.register("highlight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.hightlight){$.components.getDefaults("highlight");$('[data-plugin="highlight"]',context).each(function(i,block){hljs.highlightBlock(block)})}}}),$.components.register("sortable",{defaults:{},mode:"default"}),$.components.register("iCheck",{mode:"default",defaults:{}}),$.components.register("input-group-file",{api:function(){$(document).on("change",".input-group-file [type=file]",function(){var $this=$(this),$text=$(this).parents(".input-group-file").find(".form-control"),value="";$.each($this[0].files,function(i,file){value+=file.name+", "}),value=value.substring(0,value.length-2),$text.val(value)})}}),$.components.register("isotope",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("isotope"),callback=function(){$('[data-plugin="isotope"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.isotope(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}}),$.components.register("appear",{defaults:{},api:function(context){$.fn.appear&&($(document).on("appear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||($item.removeClass("invisible").addClass("animation-"+animate),$item.data("repeat")===!1&&$item.addClass("appear-no-repeat"))}),$(document).on("disappear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||$item.addClass("invisible").removeClass("animation-"+animate)}))},init:function(context){if($.fn.appear){var defaults=$.components.getDefaults("appear");$('[data-plugin="appear"]',context).appear(defaults),$('[data-plugin="appear"]',context).not(":appeared").addClass("invisible")}}}),$.components.register("floatThead",{mode:"default",defaults:{top:function(){return $(".site-navbar").outerHeight()},position:"absolute"}}),$.components.register("knob",{mode:"default",defaults:{min:-50,max:50,width:120,height:120,thickness:".1"}}),$.components.register("labelauty",{mode:"default",defaults:{same_width:!0}}),$.components.register("placeholder",{mode:"init",init:function(context){$.fn.placeholder&&$("input, textarea",context).placeholder()}}),$.components.register("strength",{mode:"default",defaults:{showMeter:!0,showToggle:!1,templates:{toggle:'<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="Show/Hide Password" id="show_password" /><label for="show_password">Show Password</label></div>',meter:'<div class="{meterClass}">{score}</div>',score:'<div class="{scoreClass}"></div>',main:'<div class="{containerClass}">{input}{meter}{toggle}</div>'},classes:{container:"strength-container",status:"strength-{status}",input:"strength-input",toggle:"strength-toggle",meter:"strength-meter",score:"strength-score"},scoreLables:{invalid:"Invalid",weak:"Weak",good:"Good",strong:"Strong"},scoreClasses:{invalid:"strength-invalid",weak:"strength-weak",good:"strength-good",strong:"strength-strong"}}}),$.components.register("wizard",{mode:"default",defaults:{step:".steps .step, .pearls .pearl",templates:{buttons:function(){var options=this.options;return'<div class="wizard-buttons"><a class="btn btn-default btn-outline" href="#'+this.id+'" data-wizard="back" role="button">'+options.buttonLabels.back+'</a><a class="btn btn-primary btn-outline pull-right" href="#'+this.id+'" data-wizard="next" role="button">'+options.buttonLabels.next+'</a><a class="btn btn-success btn-outline pull-right" href="#'+this.id+'" data-wizard="finish" role="button">'+options.buttonLabels.finish+"</a></div>"}}}}),$.components.register("timepicker",{mode:"default",defaults:{}}),$.components.register("vectorMap",{mode:"default",defaults:{map:"world_mill_en",backgroundColor:"#fff",zoomAnimate:!0,regionStyle:{initial:{fill:$.colors("primary",600)},hover:{fill:$.colors("primary",500)},selected:{fill:$.colors("primary",800)},selectedHover:{fill:$.colors("primary",500)}},markerStyle:{initial:{r:8,fill:$.colors("red",600),"stroke-width":0},hover:{r:12,stroke:$.colors("red",600),"stroke-width":0}}}}),$.components.register("ladda",{mode:"init",defaults:{timeout:2e3},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("ladda");Ladda.bind('[data-plugin="ladda"]',defaults)}}}),$.components.register("laddaProgress",{mode:"init",defaults:{init:function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("laddaProgress");Ladda.bind('[data-plugin="laddaProgress"]',defaults)}}}),$.components.register("magnificPopup",{mode:"default",defaults:{type:"image",closeOnContentClick:!0,image:{verticalFit:!0}}}),$.components.register("masonry",{mode:"init",defaults:{itemSelector:".masonry-item"},init:function(context){if("undefined"!=typeof $.fn.masonry){var defaults=$.components.getDefaults("masonry"),callback=function(){$('[data-plugin="masonry"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.masonry(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}}),$.components.register("matchHeight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.matchHeight){var defaults=$.components.getDefaults("matchHeight");$('[data-plugin="matchHeight"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data()),matchSelector=$this.data("matchSelector");matchSelector?$this.find(matchSelector).matchHeight(options):$this.children().matchHeight(options)})}}}),$.components.register("material",{init:function(context){$(".form-material",context).each(function(){var $this=$(this);if($this.data("material")!==!0){var $control=$this.find(".form-control");if($control.attr("data-hint")&&$control.after("<div class=hint>"+$control.attr("data-hint")+"</div>"),$this.hasClass("floating")){if($control.hasClass("floating-label")){var placeholder=$control.attr("placeholder");$control.attr("placeholder",null).removeClass("floating-label"),$control.after("<div class=floating-label>"+placeholder+"</div>")}(null===$control.val()||"undefined"==$control.val()||""===$control.val())&&$control.addClass("empty")}$control.next().is("[type=file]")&&$this.addClass("form-material-file"),$this.data("material",!0)}})},api:function(){function _isChar(e){return"undefined"==typeof e.which?!0:"number"==typeof e.which&&e.which>0?!e.ctrlKey&&!e.metaKey&&!e.altKey&&8!=e.which&&9!=e.which:!1}$(document).on("keydown.site.material paste.site.material",".form-control",function(e){_isChar(e)&&$(this).removeClass("empty")}).on("keyup.site.material change.site.material",".form-control",function(){var $this=$(this);""===$this.val()&&"undefined"!=typeof $this[0].checkValidity&&$this[0].checkValidity()?$this.addClass("empty"):$this.removeClass("empty")}).on("focus",".form-material-file",function(){$(this).find("input").addClass("focus")}).on("blur",".form-material-file",function(){$(this).find("input").removeClass("focus")}).on("change",".form-material-file [type=file]",function(){var $this=$(this),value="";$.each($this[0].files,function(i,file){value+=file.name+", "}),value=value.substring(0,value.length-2),value?$this.prev().removeClass("empty"):$this.prev().addClass("empty"),$this.prev().val(value)})}}),$.components.register("multiSelect",{mode:"default",defaults:{}}),$.components.register("nestable",{mode:"default"}),$.components.register("nprogress",{mode:"init",defaults:{minimum:.15,trickleRate:.07,trickleSpeed:360,showSpinner:!1,template:'<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'},init:function(){if("undefined"!=typeof NProgress){var defaults=$.components.getDefaults("nprogress");NProgress.configure(defaults)}}}),$.components.register("owlCarousel",{mode:"default",defaults:{loop:!0,nav:!0,dots:!1,dotsClass:"owl-dots owl-dots-fall",responsive:{0:{items:1},600:{items:3}}}}),$.components.register("panel",{api:function(){$(document).on("click.site.panel",'[data-toggle="panel-fullscreen"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.toggleFullscreen()}),$(document).on("click.site.panel",'[data-toggle="panel-collapse"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.toggleContent()}),$(document).on("click.site.panel",'[data-toggle="panel-close"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.close()}),$(document).on("click.site.panel",'[data-toggle="panel-refresh"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api"),callback=$this.data("loadCallback");$.isFunction(window[callback])?api.load(window[callback]):api.load()})},init:function(context){$(".panel",context).each(function(){var $loading,$this=$(this),isFullscreen=!1,isClose=!1,isCollapse=!1,isLoading=!1,$fullscreen=$this.find('[data-toggle="panel-fullscreen"]'),$collapse=$this.find('[data-toggle="panel-collapse"]'),self=this;$this.hasClass("is-collapse")&&(isCollapse=!0);var api={load:function(callback){var type=$this.data("loader-type");type||(type="default"),$loading=$('<div class="panel-loading"><div class="loader loader-'+type+'"></div></div>'),$loading.appendTo($this),$this.addClass("is-loading"),$this.trigger("loading.uikit.panel"),isLoading=!0,$.isFunction(callback)&&callback.call(self,this.done)},done:function(){isLoading===!0&&($loading.remove(),$this.removeClass("is-loading"),$this.trigger("loading.done.uikit.panel"))},toggleContent:function(){isCollapse?this.showContent():this.hideContent()},showContent:function(){isCollapse!==!1&&($this.removeClass("is-collapse"),$collapse.hasClass("wb-plus")&&$collapse.removeClass("wb-plus").addClass("wb-minus"),$this.trigger("shown.uikit.panel"),isCollapse=!1)},hideContent:function(){isCollapse!==!0&&($this.addClass("is-collapse"),$collapse.hasClass("wb-minus")&&$collapse.removeClass("wb-minus").addClass("wb-plus"),$this.trigger("hidden.uikit.panel"),isCollapse=!0)},toggleFullscreen:function(){isFullscreen?this.leaveFullscreen():this.enterFullscreen()},enterFullscreen:function(){isFullscreen!==!0&&($this.addClass("is-fullscreen"),$fullscreen.hasClass("wb-expand")&&$fullscreen.removeClass("wb-expand").addClass("wb-contract"),$this.trigger("enter.fullscreen.uikit.panel"),isFullscreen=!0)},leaveFullscreen:function(){isFullscreen!==!1&&($this.removeClass("is-fullscreen"),$fullscreen.hasClass("wb-contract")&&$fullscreen.removeClass("wb-contract").addClass("wb-expand"),$this.trigger("leave.fullscreen.uikit.panel"),isFullscreen=!1)},toggle:function(){isClose?this.open():this.close()},open:function(){isClose!==!1&&($this.removeClass("is-close"),$this.trigger("open.uikit.panel"),isClose=!1)},close:function(){isClose!==!0&&($this.addClass("is-close"),$this.trigger("close.uikit.panel"),isClose=!0)}};$this.data("panel-api",api)})}}),$.components.register("peityBar",{mode:"init",defaults:{delimiter:",",
fill:[$.colors("primary",400)],height:22,max:null,min:0,padding:.1,width:44},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityBar");$('[data-plugin="peityBar"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[400]]}options=$.extend(!0,{},defaults,options),$this.peity("bar",options)})}}}),$.components.register("peityDonut",{mode:"init",defaults:{delimiter:null,fill:[$.colors("primary",700),$.colors("primary",400),$.colors("primary",200)],height:null,innerRadius:null,radius:11,width:null},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityDonut");$('[data-plugin="peityDonut"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[700],skinColors[400],skinColors[200]]}options=$.extend(!0,{},defaults,options),$this.peity("donut",options)})}}}),$.components.register("peityLine",{mode:"init",defaults:{delimiter:",",fill:[$.colors("primary",200)],height:22,max:null,min:0,stroke:$.colors("primary",600),strokeWidth:1,width:44},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityLine");$('[data-plugin="peityLine"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[200]],defaults.stroke=skinColors[600]}options=$.extend(!0,{},defaults,options),$this.peity("line",options)})}}}),$.components.register("peityPie",{mode:"init",defaults:{delimiter:null,fill:[$.colors("primary",700),$.colors("primary",400),$.colors("primary",200)],height:null,radius:11,width:null},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityPie");$('[data-plugin="peityPie"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[700],skinColors[400],skinColors[200]]}options=$.extend(!0,{},defaults,options),$this.peity("pie",options)})}}}),$.components.register("plyr",{mode:"init",init:function(){"undefined"!=typeof plyr&&(!function(d,u){var a=new XMLHttpRequest,b=d.body;"withCredentials"in a&&(a.open("GET",u,!0),a.send(),a.onload=function(){var c=d.createElement("div");c.style.display="none",c.innerHTML=a.responseText,b.insertBefore(c,b.childNodes[0])})}(document,"https://cdn.plyr.io/1.1.5/sprite.svg"),plyr.setup())}}),$.components.register("rating",{mode:"init",defaults:{targetKeep:!0,icon:"font",starType:"i",starOff:"icon wb-star",starOn:"icon wb-star orange-600",cancelOff:"icon wb-minus-circle",cancelOn:"icon wb-minus-circle orange-600",starHalf:"icon wb-star-half orange-500"},init:function(context){if($.fn.raty){var defaults=$.components.getDefaults("rating");$('[data-plugin="rating"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());options.hints&&(options.hints=options.hints.split(",")),$this.raty(options)})}}}),$.components.register("select2",{mode:"default",defaults:{width:"style"}}),$.components.register("selectable",{mode:"init",defaults:{allSelector:".selectable-all",itemSelector:".selectable-item",rowSelector:"tr",rowSelectable:!1,rowActiveClass:"active",onChange:null},init:function(context){if($.fn.asSelectable){var defaults=$.components.getDefaults("selectable");$('[data-plugin="selectable"], [data-selectable="selectable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asSelectable(options)})}}}),$.components.register("slidePanel",{mode:"manual",defaults:{closeSelector:".slidePanel-close",mouseDragHandler:".slidePanel-handler",loading:{template:function(options){return'<div class="'+options.classes.loading+'"><div class="loader loader-default"></div></div>'},showCallback:function(options){this.$el.addClass(options.classes.loading+"-show")},hideCallback:function(options){this.$el.removeClass(options.classes.loading+"-show")}}}}),$.components.register("summernote",{mode:"default",defaults:{height:300}}),$.components.register("switchery",{mode:"init",defaults:{color:$.colors("primary",600)},init:function(context){if("undefined"!=typeof Switchery){var defaults=$.components.getDefaults("switchery");$('[data-plugin="switchery"]',context).each(function(){var options=$.extend({},defaults,$(this).data());new Switchery(this,options)})}}}),$.components.register("table",{mode:"api",api:function(context){function run(e){"checkbox"===e.target.type||"button"===e.target.type||"a"===e.target.tagName.toLowerCase()||$(e.target).parent("div.checkbox-custom").length||($(this).hasClass("active")?$(this).removeClass("active"):($(this).siblings(".table-section").removeClass("active"),$(this).addClass("active")))}var touch="undefined"!=typeof document.ontouchstart,type="click";touch&&(type="touchstart"),$(document).on(type,".table-section",function(e){run.call(this,e)})}}),$.components.register("verticalTab",{mode:"init",init:function(context){$.fn.matchHeight&&$(".nav-tabs-vertical",context).each(function(){$(this).children().matchHeight()})}}),$.components.register("horizontalTab",{mode:"init",init:function(context){$.fn.responsiveHorizontalTabs&&$(".nav-tabs-horizontal",context).responsiveHorizontalTabs()}}),$.components.register("taskList",{mode:"api",api:function(){$(document).on("change.site.task",'[data-role="task"]',function(){var $list=$(this),$checkbox=$list.find('[type="checkbox"]');$checkbox.is(":checked")?$list.addClass("task-done"):$list.removeClass("task-done")}),$('[data-role="task"]').trigger("change.site.task")}}),$.components.register("toastr",{mode:"api",api:function(){if("undefined"!=typeof toastr){var defaults=$.components.getDefaults("toastr");$(document).on("click.site.toastr",'[data-plugin="toastr"]',function(e){e.preventDefault();var $this=$(this),options=$.extend(!0,{},defaults,$this.data()),message=options.message||"",type=options.type||"info",title=options.title||void 0;switch(type){case"success":toastr.success(message,title,options);break;case"warning":toastr.warning(message,title,options);break;case"error":toastr.error(message,title,options);break;case"info":toastr.info(message,title,options);break;default:toastr.info(message,title,options)}})}}}),$.components.register("toolbar",{mode:"init",init:function(context){if($.fn.toolbar){var defaults=$.components.getDefaults("toolbar");$('[data-plugin="toolbar"]',context).each(function(){var $this=$(this),content=$this.data("toolbar"),options=$.extend(!0,{},defaults);content&&(options.content=content),$this.toolbar(options)})}}}),$.components.register("webuiPopover",{mode:"default",defaults:{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof ace === "undefined") return;

    //ace.config.set("themePath", "../theme");
    ace.config.loadModule("ace/ext/language_tools");

    $('[data-plugin="ace"]', context).each(function() {
      var id = $(this).attr("id"),
        mode = $(this).data("mode"),
        theme = $(this).data("theme"),
        editor = ace.edit(id);

      editor.container.style.opacity = "";
      if (mode) {
        editor.session.setMode("ace/mode/" + mode);
      }
      if (theme) {
        editor.setTheme("ace/theme/" + theme);
      }

      editor.setOption("maxLines", 40);
      editor.setAutoScrollEditorIntoView(true);

      ace.config.loadModule("ace/ext/language_tools", function() {
        editor.setOptions({
          enableSnippets: true,
          enableBasicAutocompletion: true
        });
      });
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace",{mode:"init",defaults:{},init:function(context){"undefined"!=typeof ace&&(ace.config.loadModule("ace/ext/language_tools"),$('[data-plugin="ace"]',context).each(function(){var id=$(this).attr("id"),mode=$(this).data("mode"),theme=$(this).data("theme"),editor=ace.edit(id);editor.container.style.opacity="",mode&&editor.session.setMode("ace/mode/"+mode),theme&&editor.setTheme("ace/theme/"+theme),editor.setOption("maxLines",40),editor.setAutoScrollEditorIntoView(!0),ace.config.loadModule("ace/ext/language_tools",function(){editor.setOptions({enableSnippets:!0,enableBasicAutocompletion:!0})})}))}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("alertify", {
  mode: "api",
  defaults: {
    type: "alert",
    delay: 5000,
    theme: 'bootstrap'
  },
  api: function() {
    if (typeof alertify === "undefined") return;

    var defaults = $.components.getDefaults("alertify");

    $(document).on('click.site.alertify', '[data-plugin="alertify"]', function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data());

      if (options.labelOk) {
        options.okBtn = options.labelOk;
      }

      if (options.labelCancel) {
        options.cancelBtn = options.labelCancel;
      }

      if (typeof options.delay !== 'undefined') {
        alertify.delay(options.delay);
      }

      if (typeof options.theme !== 'undefined') {
        alertify.theme(options.theme);
      }

      if (typeof options.cancelBtn !== 'undefined') {
        alertify.cancelBtn(options.cancelBtn);
      }

      if (typeof options.okBtn !== 'undefined') {
        alertify.okBtn(options.okBtn);
      }

      if (typeof options.placeholder !== 'undefined') {
        alertify.delay(options.placeholder);
      }

      if (typeof options.defaultValue !== 'undefined') {
        alertify.delay(options.defaultValue);
      }

      if (typeof options.maxLogItems !== 'undefined') {
        alertify.delay(options.maxLogItems);
      }

      if (typeof options.closeLogOnClick !== 'undefined') {
        alertify.delay(options.closeLogOnClick);
      }

      switch (options.type) {
        case "alert":
          alertify.alert(options.alertMessage);
          break;
        case "confirm":
          alertify.confirm(options.confirmTitle, function() {
            alertify.success(options.successMessage);
          }, function() {
            alertify.error(options.errorMessage);
          });
          break;
        case "prompt":
          alertify.prompt(options.promptTitle, function(str, ev) {
            var message = options.successMessage.replace('%s', str);
            alertify.success(message);
          }, function(ev) {
            alertify.error(options.errorMessage);
          });
          break;
        case "log":
          alertify.log(options.logMessage);
          break;
        case "success":
          alertify.success(options.successMessage);
          break;
        case "error":
          alertify.error(options.errorMessage);
          break;
      }
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("alertify",{mode:"api",defaults:{type:"alert",delay:5e3,theme:"bootstrap"},api:function(){if("undefined"!=typeof alertify){var defaults=$.components.getDefaults("alertify");$(document).on("click.site.alertify",'[data-plugin="alertify"]',function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());switch(options.labelOk&&(options.okBtn=options.labelOk),options.labelCancel&&(options.cancelBtn=options.labelCancel),"undefined"!=typeof options.delay&&alertify.delay(options.delay),"undefined"!=typeof options.theme&&alertify.theme(options.theme),"undefined"!=typeof options.cancelBtn&&alertify.cancelBtn(options.cancelBtn),"undefined"!=typeof options.okBtn&&alertify.okBtn(options.okBtn),"undefined"!=typeof options.placeholder&&alertify.delay(options.placeholder),"undefined"!=typeof options.defaultValue&&alertify.delay(options.defaultValue),"undefined"!=typeof options.maxLogItems&&alertify.delay(options.maxLogItems),"undefined"!=typeof options.closeLogOnClick&&alertify.delay(options.closeLogOnClick),options.type){case"alert":alertify.alert(options.alertMessage);break;case"confirm":alertify.confirm(options.confirmTitle,function(){alertify.success(options.successMessage)},function(){alertify.error(options.errorMessage)});break;case"prompt":alertify.prompt(options.promptTitle,function(str,ev){var message=options.successMessage.replace("%s",str);alertify.success(message)},function(ev){alertify.error(options.errorMessage)});break;case"log":alertify.log(options.logMessage);break;case"success":alertify.success(options.successMessage);break;case"error":alertify.error(options.errorMessage)}})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animate-list", {
  mode: 'init',

  defaults: {
    child: '.panel',
    duration: 250,
    delay: 50,
    animate: 'scale-up',
    fill: 'backwards'
  },

  init: function() {
    var self = this;

    $('[data-plugin=animateList]').each(function() {
      var $this = $(this),
        options = $.extend({}, self.defaults, $this.data(), true);


      var animatedBox = function($el, opts) {
        this.options = opts;
        this.$children = $el.find(opts.child);
        this.$children.addClass('animation-' + opts.animate);
        this.$children.css('animation-fill-mode', opts.fill);
        this.$children.css('animation-duration', opts.duration + 'ms');

        var delay = 0,
          self = this;

        this.$children.each(function() {

          $(this).css('animation-delay', delay + 'ms');
          delay += self.options.delay;
        });
      };

      animatedBox.prototype = {
        run: function(type) {
          var self = this;
          this.$children.removeClass('animation-' + this.options.animate);
          if (typeof type !== 'undefined') this.options.animate = type;
          setTimeout(function() {
            self.$children.addClass('animation-' + self.options.animate);
          }, 0);
        }
      };

      $this.data('animateList', new animatedBox($this, options));
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animate-list",{mode:"init",defaults:{child:".panel",duration:250,delay:50,animate:"scale-up",fill:"backwards"},init:function(){var self=this;$("[data-plugin=animateList]").each(function(){var $this=$(this),options=$.extend({},self.defaults,$this.data(),!0),animatedBox=function($el,opts){this.options=opts,this.$children=$el.find(opts.child),this.$children.addClass("animation-"+opts.animate),this.$children.css("animation-fill-mode",opts.fill),this.$children.css("animation-duration",opts.duration+"ms");var delay=0,self=this;this.$children.each(function(){$(this).css("animation-delay",delay+"ms"),delay+=self.options.delay})};animatedBox.prototype={run:function(type){var self=this;this.$children.removeClass("animation-"+this.options.animate),"undefined"!=typeof type&&(this.options.animate=type),setTimeout(function(){self.$children.addClass("animation-"+self.options.animate)},0)}},$this.data("animateList",new animatedBox($this,options))})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animsition", {
  mode: "manual",
  defaults: {
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 800,
    outDuration: 500,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: "body",
    loadingClass: "loader",
    loadingType: "default",
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    // random: true,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: "body",

    inDefaults: [
      'fade-in',
      'fade-in-up-sm', 'fade-in-up', 'fade-in-up-lg',
      'fade-in-down-sm', 'fade-in-down', 'fade-in-down-lg',
      'fade-in-left-sm', 'fade-in-left', 'fade-in-left-lg',
      'fade-in-right-sm', 'fade-in-right', 'fade-in-right-lg',
      // 'overlay-slide-in-top', 'overlay-slide-in-bottom', 'overlay-slide-in-left', 'overlay-slide-in-right',
      'zoom-in-sm', 'zoom-in', 'zoom-in-lg'
    ],
    outDefaults: [
      'fade-out',
      'fade-out-up-sm', 'fade-out-up', 'fade-out-up-lg',
      'fade-out-down-sm', 'fade-out-down', 'fade-out-down-lg',
      'fade-out-left-sm', 'fade-out-left', 'fade-out-left-lg',
      'fade-out-right-sm', 'fade-out-right', 'fade-out-right-lg',
      // 'overlay-slide-out-top', 'overlay-slide-out-bottom', 'overlay-slide-out-left', 'overlay-slide-out-right'
      'zoom-out-sm', 'zoom-out', 'zoom-out-lg'
    ]
  },

  init: function(context, callback) {
    var options = $.components.getDefaults("animsition");

    if (options.random) {
      var li = options.inDefaults.length,
        lo = options.outDefaults.length;

      var ni = parseInt(li * Math.random(), 0),
        no = parseInt(lo * Math.random(), 0);

      options.inClass = options.inDefaults[ni];
      options.outClass = options.outDefaults[no];
    }

    var $this = $(".animsition", context);

    $this.animsition(options);

    $("." + options.loadingClass).addClass('loader-' + options.loadingType);

    if ($this.animsition('supportCheck', options)) {
      if ($.isFunction(callback)) {
        $this.one('animsition.end', function() {
          callback.call();
        });
      }

      return true;
    } else {
      if ($.isFunction(callback)) {
        callback.call();
      }
      return false;
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animsition",{mode:"manual",defaults:{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"loader",loadingType:"default",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]},init:function(context,callback){var options=$.components.getDefaults("animsition");if(options.random){var li=options.inDefaults.length,lo=options.outDefaults.length,ni=parseInt(li*Math.random(),0),no=parseInt(lo*Math.random(),0);options.inClass=options.inDefaults[ni],options.outClass=options.outDefaults[no]}var $this=$(".animsition",context);return $this.animsition(options),$("."+options.loadingClass).addClass("loader-"+options.loadingType),$this.animsition("supportCheck",options)?($.isFunction(callback)&&$this.one("animsition.end",function(){callback.call()}),!0):($.isFunction(callback)&&callback.call(),!1)}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("breadcrumb", {
  mode: "init",
  defaults: {
    namespace: "breadcrumb",
    dropdown: function() {
      return '<div class=\"dropdown\">' +
        '<a href=\"javascript:void(0);\" data-toggle="dropdown"><i class=\"' + this.dropicon + '\"></i></a>' +
        '<ul class=\"' + this.namespace + '-menu dropdown-menu\" role="menu"></ul>' +
        '</div>';
    },
    dropdownContent: function(value) {
      return '<li><a href=\"javascript:void(0);\">' + value + '</a></li>';
    }
  },
  init: function(context) {
    if (!$.fn.asBreadcrumbs) return;
    var defaults = $.components.getDefaults("breadcrumb");

    $('[data-plugin="breadcrumb"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asBreadcrumbs(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("breadcrumb",{mode:"init",defaults:{namespace:"breadcrumb",dropdown:function(){return'<div class="dropdown"><a href="javascript:void(0);" data-toggle="dropdown"><i class="'+this.dropicon+'"></i></a><ul class="'+this.namespace+'-menu dropdown-menu" role="menu"></ul></div>'},dropdownContent:function(value){return'<li><a href="javascript:void(0);">'+value+"</a></li>"}},init:function(context){if($.fn.asBreadcrumbs){var defaults=$.components.getDefaults("breadcrumb");$('[data-plugin="breadcrumb"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asBreadcrumbs(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asColorPicker", {
  defaults: {
    namespace: "colorInputUi"
  },
  mode: "default"
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asColorPicker",{defaults:{namespace:"colorInputUi"},mode:"default"});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("paginator", {
  mode: "init",
  defaults: {
    namespace: "pagination",
    currentPage: 1,
    itemsPerPage: 10,
    disabledClass: "disabled",
    activeClass: "active",

    visibleNum: {
      0: 3,
      480: 5
    },

    tpl: function() {
      return '{{prev}}{{lists}}{{next}}';
    },

    components: {
      prev: {
        tpl: function() {
          return '<li class="' + this.namespace + '-prev"><a href="javascript:void(0)"><span class="icon wb-chevron-left-mini"></span></a></li>';
        }
      },
      next: {
        tpl: function() {
          return '<li class="' + this.namespace + '-next"><a href="javascript:void(0)"><span class="icon wb-chevron-right-mini"></span></a></li>';
        }
      },
      lists: {
        tpl: function() {
          var lists = '',
            remainder = this.currentPage >= this.visible ? this.currentPage % this.visible : this.currentPage;
          remainder = remainder === 0 ? this.visible : remainder;
          for (var k = 1; k < remainder; k++) {
            lists += '<li class="' + this.namespace + '-items" data-value="' + (this.currentPage - remainder + k) + '"><a href="javascript:void(0)">' + (this.currentPage - remainder + k) + '</a></li>';
          }
          lists += '<li class="' + this.namespace + '-items ' + this.classes.active + '" data-value="' + this.currentPage + '"><a href="javascript:void(0)">' + this.currentPage + '</a></li>';
          for (var i = this.currentPage + 1, limit = i + this.visible - remainder - 1 > this.totalPages ? this.totalPages : i + this.visible - remainder - 1; i <= limit; i++) {
            lists += '<li class="' + this.namespace + '-items" data-value="' + i + '"><a href="javascript:void(0)">' + i + '</a></li>';
          }

          return lists;
        }
      }
    }
  },
  init: function(context) {
    if (!$.fn.asPaginator) return;

    var defaults = $.components.getDefaults("paginator");

    $('[data-plugin="paginator"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      var total = $this.data("total");

      options = $.extend({}, defaults, options);
      $this.asPaginator(total, options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("paginator",{mode:"init",defaults:{namespace:"pagination",currentPage:1,itemsPerPage:10,disabledClass:"disabled",activeClass:"active",visibleNum:{0:3,480:5},tpl:function(){return"{{prev}}{{lists}}{{next}}"},components:{prev:{tpl:function(){return'<li class="'+this.namespace+'-prev"><a href="javascript:void(0)"><span class="icon wb-chevron-left-mini"></span></a></li>'}},next:{tpl:function(){return'<li class="'+this.namespace+'-next"><a href="javascript:void(0)"><span class="icon wb-chevron-right-mini"></span></a></li>'}},lists:{tpl:function(){var lists="",remainder=this.currentPage>=this.visible?this.currentPage%this.visible:this.currentPage;remainder=0===remainder?this.visible:remainder;for(var k=1;remainder>k;k++)lists+='<li class="'+this.namespace+'-items" data-value="'+(this.currentPage-remainder+k)+'"><a href="javascript:void(0)">'+(this.currentPage-remainder+k)+"</a></li>";lists+='<li class="'+this.namespace+"-items "+this.classes.active+'" data-value="'+this.currentPage+'"><a href="javascript:void(0)">'+this.currentPage+"</a></li>";for(var i=this.currentPage+1,limit=i+this.visible-remainder-1>this.totalPages?this.totalPages:i+this.visible-remainder-1;limit>=i;i++)lists+='<li class="'+this.namespace+'-items" data-value="'+i+'"><a href="javascript:void(0)">'+i+"</a></li>";return lists}}}},init:function(context){if($.fn.asPaginator){var defaults=$.components.getDefaults("paginator");$('[data-plugin="paginator"]',context).each(function(){var $this=$(this),options=$this.data(),total=$this.data("total");options=$.extend({},defaults,options),$this.asPaginator(total,options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("pieProgress", {
  mode: "init",
  defaults: {
    namespace: "pie-progress",
    speed: 30,
    classes: {
      svg: "pie-progress-svg",
      element: "pie-progress",
      number: "pie-progress-number",
      content: "pie-progress-content"
    }
  },
  init: function(context) {
    if (!$.fn.asPieProgress) return;

    var defaults = $.components.getDefaults("pieProgress");

    $('[data-plugin="pieProgress"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      options = $.extend(true, {}, defaults, options);

      $this.asPieProgress(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("pieProgress",{mode:"init",defaults:{namespace:"pie-progress",speed:30,classes:{svg:"pie-progress-svg",element:"pie-progress",number:"pie-progress-number",content:"pie-progress-content"}},init:function(context){if($.fn.asPieProgress){var defaults=$.components.getDefaults("pieProgress");$('[data-plugin="pieProgress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend(!0,{},defaults,options),$this.asPieProgress(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("progress", {
  mode: "init",
  defaults: {
    bootstrap: true,

    onUpdate: function(n) {
      var per = (n - this.min) / (this.max - this.min);
      if (per < 0.5) {
        this.$target.addClass('progress-bar-success').removeClass('progress-bar-warning progress-bar-danger');
      } else if (per >= 0.5 && per < 0.8) {
        this.$target.addClass('progress-bar-warning').removeClass('progress-bar-success progress-bar-danger');
      } else {
        this.$target.addClass('progress-bar-danger').removeClass('progress-bar-success progress-bar-warning');
      }
    },

    labelCallback: function(n) {
      var label;
      var labelType = this.$element.data("labeltype");

      if (labelType === "percentage") {
        var percentage = this.getPercentage(n);
        label = percentage + '%';
      } else if (labelType === "steps") {
        var total = this.$element.data("totalsteps");
        if (!total) {
          total = 10;
        }
        var step = Math.round(total * (n - this.min) / (this.max - this.min));
        label = step + ' / ' + total;
      } else {
        label = n;
      }

      if (this.$element.parent().hasClass('contextual-progress')) {
        this.$element.parent().find('.progress-label').html(label);
      }

      return label;
    }
  },

  init: function(context) {
    if (!$.fn.asProgress) return;

    var defaults = $.components.getDefaults("progress");

    $('[data-plugin="progress"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      options = $.extend({}, defaults, options);
      $this.asProgress(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("progress",{mode:"init",defaults:{bootstrap:!0,onUpdate:function(n){var per=(n-this.min)/(this.max-this.min);.5>per?this.$target.addClass("progress-bar-success").removeClass("progress-bar-warning progress-bar-danger"):per>=.5&&.8>per?this.$target.addClass("progress-bar-warning").removeClass("progress-bar-success progress-bar-danger"):this.$target.addClass("progress-bar-danger").removeClass("progress-bar-success progress-bar-warning")},labelCallback:function(n){var label,labelType=this.$element.data("labeltype");if("percentage"===labelType){var percentage=this.getPercentage(n);label=percentage+"%"}else if("steps"===labelType){var total=this.$element.data("totalsteps");total||(total=10);var step=Math.round(total*(n-this.min)/(this.max-this.min));label=step+" / "+total}else label=n;return this.$element.parent().hasClass("contextual-progress")&&this.$element.parent().find(".progress-label").html(label),label}},init:function(context){if($.fn.asProgress){var defaults=$.components.getDefaults("progress");$('[data-plugin="progress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend({},defaults,options),$this.asProgress(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asRange", {
  mode: "default",
  defaults: {
    tip: false,
    scale: false
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asRange",{mode:"default",defaults:{tip:!1,scale:!1}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("scrollable", {
  mode: "init",
  defaults: {
    namespace: "scrollable",
    contentSelector: "> [data-role='content']",
    containerSelector: "> [data-role='container']"
  },
  init: function(context) {
    if (!$.fn.asScrollable) return;
    var defaults = $.components.getDefaults("scrollable");

    $('[data-plugin="scrollable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asScrollable(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("scrollable",{mode:"init",defaults:{namespace:"scrollable",contentSelector:"> [data-role='content']",containerSelector:"> [data-role='container']"},init:function(context){if($.fn.asScrollable){var defaults=$.components.getDefaults("scrollable");$('[data-plugin="scrollable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asScrollable(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asSpinner", {
  mode: "default",
  defaults: {
    namespace: "spinnerUi",
    skin: null,
    min: "-10",
    max: 100,
    mousewheel: true
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("asSpinner",{mode:"default",defaults:{namespace:"spinnerUi",skin:null,min:"-10",max:100,mousewheel:!0}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("bootbox", {
  mode: "api",
  defaults: {
    message: ""
  },
  api: function() {
    if (typeof bootbox === "undefined") return;
    var defaults = $.components.getDefaults("bootbox");

    $(document).on('click.site.bootbox', '[data-plugin="bootbox"]', function() {
      var $btn = $(this);
      var options = $btn.data();

      options = $.extend(true, {}, defaults, options);
      if (options.classname) {
        options.className = options.classname;
      }

      if (typeof options.callback === "string" && $.isFunction(window[options.callback])) {
        options.callback = window[options.callback];
      }

      if (options.type) {
        switch (options.type) {
          case "alert":
            bootbox.alert(options);
            break;
          case "confirm":
            bootbox.confirm(options);
            break;
          case "prompt":
            bootbox.prompt(options);
            break;
          default:
            bootbox.dialog(options);
        }
      } else {
        bootbox.dialog(options);
      }
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("bootbox",{mode:"api",defaults:{message:""},api:function(){if("undefined"!=typeof bootbox){var defaults=$.components.getDefaults("bootbox");$(document).on("click.site.bootbox",'[data-plugin="bootbox"]',function(){var $btn=$(this),options=$btn.data();if(options=$.extend(!0,{},defaults,options),options.classname&&(options.className=options.classname),"string"==typeof options.callback&&$.isFunction(window[options.callback])&&(options.callback=window[options.callback]),options.type)switch(options.type){case"alert":bootbox.alert(options);break;case"confirm":bootbox.confirm(options);break;case"prompt":bootbox.prompt(options);break;default:bootbox.dialog(options)}else bootbox.dialog(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("datepicker", {
  mode: "default",
  defaults: {
    autoclose: true
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("datepicker",{mode:"default",defaults:{autoclose:!0}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("maxlength", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("maxlength",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("selectpicker", {
  mode: "default",
  defaults: {
    style: "btn-select",
    iconBase: "icon",
    tickIcon: "wb-check"
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("selectpicker",{mode:"default",defaults:{style:"btn-select",iconBase:"icon",tickIcon:"wb-check"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("sweetalert", {
  mode: "api",
  api: function() {
    if (typeof swal === "undefined") return;

    var defaults = $.components.getDefaults("sweetalert");

    $(document).on('click.site.sweetalert', '[data-plugin="sweetalert"]', function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      swal(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("sweetalert",{mode:"api",api:function(){if("undefined"!=typeof swal){var defaults=$.components.getDefaults("sweetalert");$(document).on("click.site.sweetalert",'[data-plugin="sweetalert"]',function(){var options=$.extend(!0,{},defaults,$(this).data());swal(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("tagsinput", {
  defaults: {
    tagClass: "label label-default"
  },
  mode: "default"
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("tagsinput",{defaults:{tagClass:"label label-default"},mode:"default"});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("tokenfield", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("tokenfield",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("TouchSpin", {
  mode: "default",
  defaults: {
    verticalupclass: "wb-plus",
    verticaldownclass: "wb-minus",
    buttondown_class: "btn btn-outline btn-default",
    buttonup_class: "btn btn-outline btn-default"
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("TouchSpin",{mode:"default",defaults:{verticalupclass:"wb-plus",verticaldownclass:"wb-minus",buttondown_class:"btn btn-outline btn-default",buttonup_class:"btn btn-outline btn-default"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("treeview", {
  mode: "init",
  defaults: {
    injectStyle: false,
    expandIcon: "icon wb-plus",
    collapseIcon: "icon wb-minus",
    emptyIcon: "icon",
    nodeIcon: "icon wb-folder",
    showBorder: false,
    // color: undefined, // "#000000",
    // backColor: undefined, // "#FFFFFF",
    borderColor: $.colors("blue-grey", 200),
    onhoverColor: $.colors("blue-grey", 100),
    selectedColor: "#ffffff",
    selectedBackColor: $.colors("primary", 600),

    searchResultColor: $.colors("primary", 600),
    searchResultBackColor: "#ffffff"
  },
  init: function(context) {
    if (!$.fn.treeview) return;

    var defaults = $.components.getDefaults("treeview");

    $('[data-plugin="treeview"]', context).each(function() {
      var $this = $(this);
      var options = $this.data();
      if (typeof options.source === "string" && $.isFunction(window[options.source])) {
        options.data = window[options.source]();
        delete options.source;
      } else if ($.isFunction(options.souce)) {
        options.data = options.source();
        delete options.source;
      }

      options = $.extend(true, {}, defaults, options);
      $this.treeview(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("treeview",{mode:"init",defaults:{injectStyle:!1,expandIcon:"icon wb-plus",collapseIcon:"icon wb-minus",emptyIcon:"icon",nodeIcon:"icon wb-folder",showBorder:!1,borderColor:$.colors("blue-grey",200),onhoverColor:$.colors("blue-grey",100),selectedColor:"#ffffff",selectedBackColor:$.colors("primary",600),searchResultColor:$.colors("primary",600),searchResultBackColor:"#ffffff"},init:function(context){if($.fn.treeview){var defaults=$.components.getDefaults("treeview");$('[data-plugin="treeview"]',context).each(function(){var $this=$(this),options=$this.data();"string"==typeof options.source&&$.isFunction(window[options.source])?(options.data=window[options.source](),delete options.source):$.isFunction(options.souce)&&(options.data=options.source(),delete options.source),options=$.extend(!0,{},defaults,options),$this.treeview(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("buttons", {
  mode: "api",
  defaults: {},
  api: function() {
    $(document).on('click.site.loading', '[data-loading-text]', function() {
      var $btn = $(this),
        text = $btn.text(),
        i = 20,
        loadingText = $btn.data('loadingText');

      $btn.text(loadingText + '(' + i + ')').css('opacity', '.6');

      var timeout = setInterval(function() {
        $btn.text(loadingText + '(' + (--i) + ')');
        if (i === 0) {
          clearInterval(timeout);
          $btn.text(text).css('opacity', '1');
        }
      }, 1000);
    });

    $(document).on('click.site.morebutton', '[data-more]', function() {
      var $target = $($(this).data('more'));
      $target.toggleClass('show');
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("buttons",{mode:"api",defaults:{},api:function(){$(document).on("click.site.loading","[data-loading-text]",function(){var $btn=$(this),text=$btn.text(),i=20,loadingText=$btn.data("loadingText");$btn.text(loadingText+"("+i+")").css("opacity",".6");var timeout=setInterval(function(){$btn.text(loadingText+"("+--i+")"),0===i&&(clearInterval(timeout),$btn.text(text).css("opacity","1"))},1e3)}),$(document).on("click.site.morebutton","[data-more]",function(){var $target=$($(this).data("more"));$target.toggleClass("show")})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("card", {
  mode: "init",
  defaults: {

  },
  init: function(context) {
    if (!$.fn.card) return;
    var defaults = $.components.getDefaults("card");

    $('[data-plugin="card"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      if (options.target) {
        options.container = $(options.target);
      }
      $(this).card(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("card",{mode:"init",defaults:{},init:function(context){if($.fn.card){var defaults=$.components.getDefaults("card");$('[data-plugin="card"]',context).each(function(){var options=$.extend({},defaults,$(this).data());options.target&&(options.container=$(options.target)),$(this).card(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("clockpicker", {
  mode: "default",
  defaults: {
    donetext: "Done"
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("clockpicker",{mode:"default",defaults:{donetext:"Done"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("dataTable", {
  defaults: {
    responsive: true,
    language: {
      "sSearchPlaceholder": "Search..",
      "lengthMenu": "_MENU_",
      "search": "_INPUT_",
      "paginate": {
        "previous": '<i class="icon wb-chevron-left-mini"></i>',
        "next": '<i class="icon wb-chevron-right-mini"></i>'
      }
    }
  },
  api: function() {
    if (!$.fn.dataTable) return;

    if ($.fn.dataTable.TableTools) {
      // Set the classes that TableTools uses to something suitable for Bootstrap
      $.extend(true, $.fn.dataTable.TableTools.classes, {
        "container": "DTTT btn-group btn-group pull-left",
        "buttons": {
          "normal": "btn btn-outline btn-default",
          "disabled": "disabled"
        },
        "print": {
          "body": "site-print DTTT_Print"
        }
      });
    }
  },
  init: function(context) {
    if (!$.fn.dataTable) return;

    var defaults = $.components.getDefaults("dataTable");

    $('[data-plugin="dataTable"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).dataTable(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("dataTable",{defaults:{responsive:!0,language:{sSearchPlaceholder:"Search..",lengthMenu:"_MENU_",search:"_INPUT_",paginate:{previous:'<i class="icon wb-chevron-left-mini"></i>',next:'<i class="icon wb-chevron-right-mini"></i>'}}},api:function(){$.fn.dataTable&&$.fn.dataTable.TableTools&&$.extend(!0,$.fn.dataTable.TableTools.classes,{container:"DTTT btn-group btn-group pull-left",buttons:{normal:"btn btn-outline btn-default",disabled:"disabled"},print:{body:"site-print DTTT_Print"}})},init:function(context){if($.fn.dataTable){var defaults=$.components.getDefaults("dataTable");$('[data-plugin="dataTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).dataTable(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("datepair", {
  mode: "default",
  defaults: {
    startClass: 'datepair-start',
    endClass: 'datepair-end',
    timeClass: 'datepair-time',
    dateClass: 'datepair-date'
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("datepair",{mode:"default",defaults:{startClass:"datepair-start",endClass:"datepair-end",timeClass:"datepair-time",dateClass:"datepair-date"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("dropify", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("dropify",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("editableTable", {
  mode: "init",
  init: function(context) {
    if (!$.fn.editableTableWidget) return;

    var defaults = $.components.getDefaults("editableTable");

    $('[data-plugin="editableTable"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).editableTableWidget(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("editableTable",{mode:"init",init:function(context){if($.fn.editableTableWidget){var defaults=$.components.getDefaults("editableTable");$('[data-plugin="editableTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).editableTableWidget(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("filterable", {
  mode: "init",
  defaults: {
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  },
  init: function(context) {
    if (typeof $.fn.isotope === "undefined") return;

    var defaults = $.components.getDefaults('filterable');

    var callback = function() {
      $('[data-filterable]', context).each(function() {
        var $this = $(this);

        var options = $.extend(true, {}, defaults, $this.data(), {
          filter: '*'
        });

        $this.isotope(options);
      });

      $('[data-filter]', context).click(function(e) {
        var $this = $(this);
        var target = $this.data('target');
        var $li = $this.parent('li');

        if (!target) {
          target = $this.attr('href');
          target = target && target.replace(/.*(?=#[^\s]*$)/, '');
        }

        $li.siblings('.active').each(function() {
          $(this).find('a').attr('aria-expanded', false);
          $(this).removeClass('active');
        });

        $li.addClass('active');
        $this.attr('aria-expanded', true);

        var $list = $(target, context);
        var filter = $this.attr('data-filter');
        if (filter !== '*') {
          filter = '[data-type="' + filter + '"]';
        }
        $list.isotope({
          filter: filter
        });

        e.preventDefault();
      });
    }

    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("filterable",{mode:"init",defaults:{animationOptions:{duration:750,easing:"linear",queue:!1}},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("filterable"),callback=function(){$("[data-filterable]",context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data(),{filter:"*"});$this.isotope(options)}),$("[data-filter]",context).click(function(e){var $this=$(this),target=$this.data("target"),$li=$this.parent("li");target||(target=$this.attr("href"),target=target&&target.replace(/.*(?=#[^\s]*$)/,"")),$li.siblings(".active").each(function(){$(this).find("a").attr("aria-expanded",!1),$(this).removeClass("active")}),$li.addClass("active"),$this.attr("aria-expanded",!0);var $list=$(target,context),filter=$this.attr("data-filter");"*"!==filter&&(filter='[data-type="'+filter+'"]'),$list.isotope({filter:filter}),e.preventDefault()})};context!==document?callback():$(window).on("load",function(){callback()})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("formatter", {
  mode: "init",
  defaults: {
    persistent: true
  },

  init: function(context) {
    if (!$.fn.formatter) return;

    var defaults = $.components.getDefaults("formatter"),
      browserName = navigator.userAgent.toLowerCase(),
      ieOptions;

    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
      ieOptions = {
        persistent: false
      };
    } else {
      ieOptions = {};
    }

    $('[data-plugin="formatter"]', context).each(function() {

      var options = $.extend({}, defaults, ieOptions, $(this).data());
      if (options.pattern) {
        options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
      }
      $(this).formatter(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("formatter",{mode:"init",defaults:{persistent:!0},init:function(context){if($.fn.formatter){var ieOptions,defaults=$.components.getDefaults("formatter"),browserName=navigator.userAgent.toLowerCase();ieOptions=/msie/i.test(browserName)&&!/opera/.test(browserName)?{persistent:!1}:{},$('[data-plugin="formatter"]',context).each(function(){var options=$.extend({},defaults,ieOptions,$(this).data());options.pattern&&(options.pattern=options.pattern.replace(/\[\[/g,"{{").replace(/\]\]/g,"}}")),$(this).formatter(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gauge", {
  mode: "init",
  defaults: {
    lines: 12,
    angle: 0.12,
    lineWidth: 0.4,
    pointer: {
      length: 0.68,
      strokeWidth: 0.03,
      color: $.colors("blue-grey", 400)
    },
    limitMax: true,
    colorStart: $.colors("blue-grey", 200),
    colorStop: $.colors("blue-grey", 200),
    strokeColor: $.colors("primary", 500),
    generateGradient: true
  },
  init: function(context) {
    if (!Gauge) return;

    var defaults = $.components.getDefaults("gauge");

    $('[data-plugin="gauge"]', context).each(function() {
      var $this = $(this),
        options = $this.data(),
        $text = $this.find('.gauge-label'),
        $canvas = $this.find("canvas");

      options = $.extend(true, {}, defaults, options);

      if ($canvas.length === 0) {
        return;
      }

      var gauge = new Gauge($canvas[0]).setOptions(options);

      $this.data("gauge", gauge);

      gauge.animationSpeed = 50;
      gauge.maxValue = $this.data('max-value');

      gauge.set($this.data("value"));

      if ($text.length > 0) {
        gauge.setTextField($text[0]);
      }
    });
  }
});

$.components.register("donut", {
  mode: "init",
  defaults: {
    lines: 12,
    angle: 0.3,
    lineWidth: 0.08,
    pointer: {
      length: 0.9,
      strokeWidth: 0.035,
      color: $.colors("blue-grey", 400)
    },
    limitMax: false, // If true, the pointer will not go past the end of the gauge
    colorStart: $.colors("blue-grey", 200),
    colorStop: $.colors("blue-grey", 200),
    strokeColor: $.colors("primary", 500),
    generateGradient: true
  },
  init: function(context) {
    if (!Gauge) return;

    var defaults = $.components.getDefaults("donut");

    $('[data-plugin="donut"]', context).each(function() {

      var $this = $(this),
        options = $this.data(),
        $text = $this.find('.donut-label'),
        $canvas = $this.find("canvas");

      options = $.extend(true, {}, defaults, options);

      if ($canvas.length === 0) {
        return;
      }

      var donut = new Donut($canvas[0]).setOptions(options);

      $this.data("donut", donut);

      donut.animationSpeed = 50;
      donut.maxValue = $this.data('max-value');

      donut.set($this.data("value"));

      if ($text.length > 0) {
        donut.setTextField($text[0]);
      }
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gauge",{mode:"init",defaults:{lines:12,angle:.12,lineWidth:.4,pointer:{length:.68,strokeWidth:.03,color:$.colors("blue-grey",400)},limitMax:!0,colorStart:$.colors("blue-grey",200),colorStop:$.colors("blue-grey",200),strokeColor:$.colors("primary",500),generateGradient:!0},init:function(context){if(Gauge){var defaults=$.components.getDefaults("gauge");$('[data-plugin="gauge"]',context).each(function(){var $this=$(this),options=$this.data(),$text=$this.find(".gauge-label"),$canvas=$this.find("canvas");if(options=$.extend(!0,{},defaults,options),0!==$canvas.length){var gauge=new Gauge($canvas[0]).setOptions(options);$this.data("gauge",gauge),gauge.animationSpeed=50,gauge.maxValue=$this.data("max-value"),gauge.set($this.data("value")),$text.length>0&&gauge.setTextField($text[0])}})}}}),$.components.register("donut",{mode:"init",defaults:{lines:12,angle:.3,lineWidth:.08,pointer:{length:.9,strokeWidth:.035,color:$.colors("blue-grey",400)},limitMax:!1,colorStart:$.colors("blue-grey",200),colorStop:$.colors("blue-grey",200),strokeColor:$.colors("primary",500),generateGradient:!0},init:function(context){if(Gauge){var defaults=$.components.getDefaults("donut");$('[data-plugin="donut"]',context).each(function(){var $this=$(this),options=$this.data(),$text=$this.find(".donut-label"),$canvas=$this.find("canvas");if(options=$.extend(!0,{},defaults,options),0!==$canvas.length){var donut=new Donut($canvas[0]).setOptions(options);$this.data("donut",donut),donut.animationSpeed=50,donut.maxValue=$this.data("max-value"),donut.set($this.data("value")),$text.length>0&&donut.setTextField($text[0])}})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gmaps", {
  styles: [{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "300")
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#e0e0e0"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "200")
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.attraction",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
      "color": $.colors("blue-grey", "200")
    }, {
      "weight": 0.5
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": $.colors("blue-grey", "300")
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "off"
    }, {
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }, {
      "color": "#000000"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "color": $.colors("blue-grey", "100")
    }]
  }, {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "500")
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "600")
    }]
  }, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [{
      "color": $.colors("blue-grey", "700")
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "on"
    }, {
      "hue": "#ffffff"
    }, {
      "saturation": -100
    }, {
      "lightness": 50
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ffffff"
    }]
  }, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": $.colors("blue-grey", "600")
    }]
  }]
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gmaps",{styles:[{featureType:"landscape",elementType:"all",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:$.colors("blue-grey","300")}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#e0e0e0"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:$.colors("blue-grey","200")}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{color:$.colors("blue-grey","200")},{weight:.5}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:$.colors("blue-grey","300")}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"},{color:"#000000"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{color:"#000000"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"},{color:$.colors("blue-grey","700")}]},{featureType:"road.local",elementType:"labels.text",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"transit",elementType:"all",stylers:[{color:$.colors("blue-grey","100")}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","500")}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","600")}]},{featureType:"administrative.neighborhood",elementType:"labels.text",stylers:[{color:$.colors("blue-grey","700")}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"on"},{hue:"#ffffff"},{saturation:-100},{lightness:50}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:$.colors("blue-grey","600")}]}]});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gridstack", {
  mode: "init",
  defaults: {
    cell_height: 80,
    vertical_margin: 20
  },
  init: function(context) {
    if (!$.fn.gridstack) return;

    var defaults = $.components.getDefaults("gridstack");

    $('[data-plugin="gridstack"]', context).each(function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      $(this).gridstack(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("gridstack",{mode:"init",defaults:{cell_height:80,vertical_margin:20},init:function(context){if($.fn.gridstack){var defaults=$.components.getDefaults("gridstack");$('[data-plugin="gridstack"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).gridstack(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("highlight", {
  mode: "init",
  defaults: {

  },
  init: function(context) {
    if (typeof $.fn.hightlight === "undefined") return;
    var defaults = $.components.getDefaults('highlight');

    // hljs.configure({useBR: true});

    $('[data-plugin="highlight"]', context).each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("highlight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.hightlight){$.components.getDefaults("highlight");$('[data-plugin="highlight"]',context).each(function(i,block){hljs.highlightBlock(block)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("sortable", {
  defaults: {},
  mode: "default"
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("sortable",{defaults:{},mode:"default"});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("iCheck", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("iCheck",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("input-group-file", {
  api: function() {
    $(document).on("change", ".input-group-file [type=file]", function() {
      var $this = $(this);
      var $text = $(this).parents('.input-group-file').find('.form-control');
      var value = "";

      $.each($this[0].files, function(i, file) {
        value += file.name + ", ";
      });
      value = value.substring(0, value.length - 2);

      $text.val(value);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("input-group-file",{api:function(){$(document).on("change",".input-group-file [type=file]",function(){var $this=$(this),$text=$(this).parents(".input-group-file").find(".form-control"),value="";$.each($this[0].files,function(i,file){value+=file.name+", "}),value=value.substring(0,value.length-2),$text.val(value)})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("isotope", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof $.fn.isotope === "undefined") return;
    var defaults = $.components.getDefaults('isotope');

    var callback = function() {
      $('[data-plugin="isotope"]', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this.isotope(options);
      });
    }
    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("isotope",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("isotope"),callback=function(){$('[data-plugin="isotope"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.isotope(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("appear", {
  defaults: {},
  api: function(context) {
    if (!$.fn.appear) return;

    $(document).on("appear", '[data-plugin="appear"]', function() {
      var $item = $(this),
        animate = $item.data("animate");

      if ($item.hasClass('appear-no-repeat')) return;
      $item.removeClass("invisible").addClass('animation-' + animate);

      if ($item.data("repeat") === false) {
        $item.addClass('appear-no-repeat');
      }
    });

    $(document).on("disappear", '[data-plugin="appear"]', function() {
      var $item = $(this),
        animate = $item.data("animate");

      if ($item.hasClass('appear-no-repeat')) return;

      $item.addClass("invisible").removeClass('animation-' + animate);
    });
  },

  init: function(context) {
    if (!$.fn.appear) return;

    var defaults = $.components.getDefaults("appear");

    $('[data-plugin="appear"]', context).appear(defaults);
    $('[data-plugin="appear"]', context).not(':appeared').addClass("invisible");
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("appear",{defaults:{},api:function(context){$.fn.appear&&($(document).on("appear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||($item.removeClass("invisible").addClass("animation-"+animate),$item.data("repeat")===!1&&$item.addClass("appear-no-repeat"))}),$(document).on("disappear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||$item.addClass("invisible").removeClass("animation-"+animate)}))},init:function(context){if($.fn.appear){var defaults=$.components.getDefaults("appear");$('[data-plugin="appear"]',context).appear(defaults),$('[data-plugin="appear"]',context).not(":appeared").addClass("invisible")}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("floatThead", {
  mode: "default",
  defaults: {
    top: function() {
      return $('.site-navbar').outerHeight();
    },
    position: 'absolute'
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("floatThead",{mode:"default",defaults:{top:function(){return $(".site-navbar").outerHeight()},position:"absolute"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("knob", {
  mode: "default",
  defaults: {
    min: -50,
    max: 50,
    width: 120,
    height: 120,
    thickness: ".1"
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("knob",{mode:"default",defaults:{min:-50,max:50,width:120,height:120,thickness:".1"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("labelauty", {
  mode: "default",
  defaults: {
    same_width: true
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("labelauty",{mode:"default",defaults:{same_width:!0}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("placeholder", {
  mode: "init",
  init: function(context) {
    if (!$.fn.placeholder) return;

    $('input, textarea', context).placeholder();
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("placeholder",{mode:"init",init:function(context){$.fn.placeholder&&$("input, textarea",context).placeholder()}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("strength", {
  mode: "default",
  defaults: {
    showMeter: true,
    showToggle: false,

    templates: {
      toggle: '<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="Show/Hide Password" id="show_password" /><label for="show_password">Show Password</label></div>',
      meter: '<div class="{meterClass}">{score}</div>',
      score: '<div class="{scoreClass}"></div>',
      main: '<div class="{containerClass}">{input}{meter}{toggle}</div>'
    },

    classes: {
      container: 'strength-container',
      status: 'strength-{status}',
      input: 'strength-input',
      toggle: 'strength-toggle',
      meter: 'strength-meter',
      score: 'strength-score'
    },

    scoreLables: {
      invalid: 'Invalid',
      weak: 'Weak',
      good: 'Good',
      strong: 'Strong'
    },

    scoreClasses: {
      invalid: 'strength-invalid',
      weak: 'strength-weak',
      good: 'strength-good',
      strong: 'strength-strong'
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("strength",{mode:"default",defaults:{showMeter:!0,showToggle:!1,templates:{toggle:'<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="Show/Hide Password" id="show_password" /><label for="show_password">Show Password</label></div>',meter:'<div class="{meterClass}">{score}</div>',score:'<div class="{scoreClass}"></div>',main:'<div class="{containerClass}">{input}{meter}{toggle}</div>'},classes:{container:"strength-container",status:"strength-{status}",input:"strength-input",toggle:"strength-toggle",meter:"strength-meter",score:"strength-score"},scoreLables:{invalid:"Invalid",weak:"Weak",good:"Good",strong:"Strong"},scoreClasses:{invalid:"strength-invalid",weak:"strength-weak",good:"strength-good",strong:"strength-strong"}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("wizard", {
  mode: "default",
  defaults: {
    step: ".steps .step, .pearls .pearl",
    templates: {
      buttons: function() {
        var options = this.options;
        return '<div class="wizard-buttons">' +
          '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' +
          '<a class="btn btn-primary btn-outline pull-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' +
          '<a class="btn btn-success btn-outline pull-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' +
          '</div>';
      }
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("wizard",{mode:"default",defaults:{step:".steps .step, .pearls .pearl",templates:{buttons:function(){var options=this.options;return'<div class="wizard-buttons"><a class="btn btn-default btn-outline" href="#'+this.id+'" data-wizard="back" role="button">'+options.buttonLabels.back+'</a><a class="btn btn-primary btn-outline pull-right" href="#'+this.id+'" data-wizard="next" role="button">'+options.buttonLabels.next+'</a><a class="btn btn-success btn-outline pull-right" href="#'+this.id+'" data-wizard="finish" role="button">'+options.buttonLabels.finish+"</a></div>"}}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("timepicker", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("timepicker",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("vectorMap", {
  mode: "default",
  defaults: {
    map: "world_mill_en",
    backgroundColor: '#fff',
    zoomAnimate: true,
    regionStyle: {
      initial: {
        fill: $.colors("primary", 600)
      },
      hover: {
        fill: $.colors("primary", 500)
      },
      selected: {
        fill: $.colors("primary", 800)
      },
      selectedHover: {
        fill: $.colors("primary", 500)
      }
    },
    markerStyle: {
      initial: {
        r: 8,
        fill: $.colors("red", 600),
        "stroke-width": 0
      },
      hover: {
        r: 12,
        stroke: $.colors("red", 600),
        "stroke-width": 0
      }
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("vectorMap",{mode:"default",defaults:{map:"world_mill_en",backgroundColor:"#fff",zoomAnimate:!0,regionStyle:{initial:{fill:$.colors("primary",600)},hover:{fill:$.colors("primary",500)},selected:{fill:$.colors("primary",800)},selectedHover:{fill:$.colors("primary",500)}},markerStyle:{initial:{r:8,fill:$.colors("red",600),"stroke-width":0},hover:{r:12,stroke:$.colors("red",600),"stroke-width":0}}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ladda", {
  mode: "init",
  defaults: {
    timeout: 2000
  },
  init: function() {
    if (typeof Ladda === "undefined") return;

    var defaults = $.components.getDefaults("ladda");
    Ladda.bind('[data-plugin="ladda"]', defaults);
  }
});

$.components.register("laddaProgress", {
  mode: "init",
  defaults: {
    init: function(instance) {
      var progress = 0;
      var interval = setInterval(function() {
        progress = Math.min(progress + Math.random() * 0.1, 1);
        instance.setProgress(progress);

        if (progress === 1) {
          instance.stop();
          clearInterval(interval);
        }
      }, 200);
    }
  },
  init: function() {
    if (typeof Ladda === 'undefined') return;

    var defaults = $.components.getDefaults("laddaProgress");
    // Bind progress buttons and simulate loading progress
    Ladda.bind('[data-plugin="laddaProgress"]', defaults);
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ladda",{mode:"init",defaults:{timeout:2e3},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("ladda");Ladda.bind('[data-plugin="ladda"]',defaults)}}}),$.components.register("laddaProgress",{mode:"init",defaults:{init:function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("laddaProgress");Ladda.bind('[data-plugin="laddaProgress"]',defaults)}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("magnificPopup", {
  mode: "default",
  defaults: {
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: true
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("magnificPopup",{mode:"default",defaults:{type:"image",closeOnContentClick:!0,image:{verticalFit:!0}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry", {
  mode: "init",
  defaults: {
    itemSelector: ".masonry-item"
  },
  init: function(context) {
    if (typeof $.fn.masonry === "undefined") return;
    var defaults = $.components.getDefaults('masonry');

    var callback = function() {
      $('[data-plugin="masonry"]', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this.masonry(options);
      });
    }
    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry",{mode:"init",defaults:{itemSelector:".masonry-item"},init:function(context){if("undefined"!=typeof $.fn.masonry){var defaults=$.components.getDefaults("masonry"),callback=function(){$('[data-plugin="masonry"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.masonry(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("matchHeight", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof $.fn.matchHeight === "undefined") return;
    var defaults = $.components.getDefaults('matchHeight');

    $('[data-plugin="matchHeight"]', context).each(function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data()),
        matchSelector = $this.data('matchSelector');

      if (matchSelector) {
        $this.find(matchSelector).matchHeight(options);
      } else {
        $this.children().matchHeight(options);
      }

    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("matchHeight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.matchHeight){var defaults=$.components.getDefaults("matchHeight");$('[data-plugin="matchHeight"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data()),matchSelector=$this.data("matchSelector");matchSelector?$this.find(matchSelector).matchHeight(options):$this.children().matchHeight(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("material", {
  init: function(context) {
    $('.form-material', context).each(function() {
      var $this = $(this);

      if ($this.data('material') === true) {
        return;
      }

      var $control = $this.find('.form-control');

      // Add hint label if required
      if ($control.attr("data-hint")) {
        $control.after("<div class=hint>" + $control.attr("data-hint") + "</div>");
      }

      if ($this.hasClass("floating")) {
        // Add floating label if required
        if ($control.hasClass("floating-label")) {
          var placeholder = $control.attr("placeholder");
          $control.attr("placeholder", null).removeClass("floating-label");
          $control.after("<div class=floating-label>" + placeholder + "</div>");
        }

        // Set as empty if is empty
        if ($control.val() === null || $control.val() == "undefined" || $control.val() === "") {
          $control.addClass("empty");
        }
      }

      // Support for file input
      if ($control.next().is("[type=file]")) {
        $this.addClass('form-material-file');
      }

      $this.data('material', true);
    });
  },
  api: function() {
    function _isChar(e) {
      if (typeof e.which == "undefined") {
        return true;
      } else if (typeof e.which == "number" && e.which > 0) {
        return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8 && e.which != 9;
      }
      return false;
    }

    $(document).on("keydown.site.material paste.site.material", ".form-control", function(e) {
        if (_isChar(e)) {
          $(this).removeClass("empty");
        }
      }).on("keyup.site.material change.site.material", ".form-control", function() {
        var $this = $(this);
        if ($this.val() === "" && (typeof $this[0].checkValidity != "undefined" && $this[0].checkValidity())) {
          $this.addClass("empty");
        } else {
          $this.removeClass("empty");
        }
      }).on("focus", ".form-material-file", function() {
        $(this).find("input").addClass("focus");
      })
      .on("blur", ".form-material-file", function() {
        $(this).find("input").removeClass("focus");
      })
      .on("change", ".form-material-file [type=file]", function() {
        var $this = $(this);
        var value = "";
        $.each($this[0].files, function(i, file) {
          value += file.name + ", ";
        });
        value = value.substring(0, value.length - 2);
        if (value) {
          $this.prev().removeClass("empty");
        } else {
          $this.prev().addClass("empty");
        }
        $this.prev().val(value);
      });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("material",{init:function(context){$(".form-material",context).each(function(){var $this=$(this);if($this.data("material")!==!0){var $control=$this.find(".form-control");if($control.attr("data-hint")&&$control.after("<div class=hint>"+$control.attr("data-hint")+"</div>"),$this.hasClass("floating")){if($control.hasClass("floating-label")){var placeholder=$control.attr("placeholder");$control.attr("placeholder",null).removeClass("floating-label"),$control.after("<div class=floating-label>"+placeholder+"</div>")}(null===$control.val()||"undefined"==$control.val()||""===$control.val())&&$control.addClass("empty")}$control.next().is("[type=file]")&&$this.addClass("form-material-file"),$this.data("material",!0)}})},api:function(){function _isChar(e){return"undefined"==typeof e.which?!0:"number"==typeof e.which&&e.which>0?!e.ctrlKey&&!e.metaKey&&!e.altKey&&8!=e.which&&9!=e.which:!1}$(document).on("keydown.site.material paste.site.material",".form-control",function(e){_isChar(e)&&$(this).removeClass("empty")}).on("keyup.site.material change.site.material",".form-control",function(){var $this=$(this);""===$this.val()&&"undefined"!=typeof $this[0].checkValidity&&$this[0].checkValidity()?$this.addClass("empty"):$this.removeClass("empty")}).on("focus",".form-material-file",function(){$(this).find("input").addClass("focus")}).on("blur",".form-material-file",function(){$(this).find("input").removeClass("focus")}).on("change",".form-material-file [type=file]",function(){var $this=$(this),value="";$.each($this[0].files,function(i,file){value+=file.name+", "}),value=value.substring(0,value.length-2),value?$this.prev().removeClass("empty"):$this.prev().addClass("empty"),$this.prev().val(value)})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("multiSelect", {
  mode: "default",
  defaults: {}
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("multiSelect",{mode:"default",defaults:{}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("nestable", {
  mode: "default"
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("nestable",{mode:"default"});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("nprogress", {
  mode: "init",
  defaults: {
    minimum: 0.15,
    trickleRate: .07,
    trickleSpeed: 360,
    showSpinner: false,
    template: '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  },
  init: function() {
    if (typeof NProgress === "undefined") return;
    var defaults = $.components.getDefaults('nprogress');
    NProgress.configure(defaults);
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("nprogress",{mode:"init",defaults:{minimum:.15,trickleRate:.07,trickleSpeed:360,showSpinner:!1,template:'<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'},init:function(){if("undefined"!=typeof NProgress){var defaults=$.components.getDefaults("nprogress");NProgress.configure(defaults)}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("owlCarousel", {
  mode: "default",
  defaults: {
    loop: true,
    nav: true,
    dots: false,
    dotsClass: "owl-dots owl-dots-fall",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("owlCarousel",{mode:"default",defaults:{loop:!0,nav:!0,dots:!1,dotsClass:"owl-dots owl-dots-fall",responsive:{0:{items:1},600:{items:3}}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("panel", {
  api: function() {
    $(document).on('click.site.panel', '[data-toggle="panel-fullscreen"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.toggleFullscreen();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-collapse"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.toggleContent();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-close"]', function(e) {
      e.preventDefault();
      var $this = $(this),
        $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      api.close();
    });

    $(document).on('click.site.panel', '[data-toggle="panel-refresh"]', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $panel = $this.closest('.panel');

      var api = $panel.data('panel-api');
      var callback = $this.data('loadCallback');

      if ($.isFunction(window[callback])) {
        api.load(window[callback]);
      } else {
        api.load();
      }
    });
  },

  init: function(context) {
    $('.panel', context).each(function() {
      var $this = $(this);

      var isFullscreen = false;
      var isClose = false;
      var isCollapse = false;
      var isLoading = false;

      var $fullscreen = $this.find('[data-toggle="panel-fullscreen"]');
      var $collapse = $this.find('[data-toggle="panel-collapse"]');
      var $loading;
      var self = this;

      if ($this.hasClass('is-collapse')) {
        isCollapse = true;
      }

      var api = {
        load: function(callback) {
          var type = $this.data('loader-type');
          if (!type) {
            type = 'default';
          }

          $loading = $('<div class="panel-loading">' +
            '<div class="loader loader-' + type + '"></div>' +
            '</div>');

          $loading.appendTo($this);

          $this.addClass('is-loading');
          $this.trigger('loading.uikit.panel');
          isLoading = true;

          if ($.isFunction(callback)) {
            callback.call(self, this.done);
          }
        },
        done: function() {
          if (isLoading === true) {
            $loading.remove();
            $this.removeClass('is-loading');
            $this.trigger('loading.done.uikit.panel');
          }
        },
        toggleContent: function() {
          if (isCollapse) {
            this.showContent();
          } else {
            this.hideContent();
          }
        },

        showContent: function() {
          if (isCollapse !== false) {
            $this.removeClass('is-collapse');

            if ($collapse.hasClass('wb-plus')) {
              $collapse.removeClass('wb-plus').addClass('wb-minus');
            }

            $this.trigger('shown.uikit.panel');

            isCollapse = false;
          }
        },

        hideContent: function() {
          if (isCollapse !== true) {
            $this.addClass('is-collapse');

            if ($collapse.hasClass('wb-minus')) {
              $collapse.removeClass('wb-minus').addClass('wb-plus');
            }

            $this.trigger('hidden.uikit.panel');
            isCollapse = true;
          }
        },

        toggleFullscreen: function() {
          if (isFullscreen) {
            this.leaveFullscreen();
          } else {
            this.enterFullscreen();
          }
        },
        enterFullscreen: function() {
          if (isFullscreen !== true) {
            $this.addClass('is-fullscreen');

            if ($fullscreen.hasClass('wb-expand')) {
              $fullscreen.removeClass('wb-expand').addClass('wb-contract');
            }

            $this.trigger('enter.fullscreen.uikit.panel');
            isFullscreen = true;
          }
        },
        leaveFullscreen: function() {
          if (isFullscreen !== false) {
            $this.removeClass('is-fullscreen');

            if ($fullscreen.hasClass('wb-contract')) {
              $fullscreen.removeClass('wb-contract').addClass('wb-expand');
            }

            $this.trigger('leave.fullscreen.uikit.panel');
            isFullscreen = false;
          }
        },
        toggle: function() {
          if (isClose) {
            this.open();
          } else {
            this.close();
          }
        },
        open: function() {
          if (isClose !== false) {
            $this.removeClass('is-close');
            $this.trigger('open.uikit.panel');

            isClose = false;
          }
        },
        close: function() {
          if (isClose !== true) {

            $this.addClass('is-close');
            $this.trigger('close.uikit.panel');

            isClose = true;
          }
        }
      };

      $this.data('panel-api', api);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("panel",{api:function(){$(document).on("click.site.panel",'[data-toggle="panel-fullscreen"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.toggleFullscreen()}),$(document).on("click.site.panel",'[data-toggle="panel-collapse"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.toggleContent()}),$(document).on("click.site.panel",'[data-toggle="panel-close"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api");api.close()}),$(document).on("click.site.panel",'[data-toggle="panel-refresh"]',function(e){e.preventDefault();var $this=$(this),$panel=$this.closest(".panel"),api=$panel.data("panel-api"),callback=$this.data("loadCallback");$.isFunction(window[callback])?api.load(window[callback]):api.load()})},init:function(context){$(".panel",context).each(function(){var $loading,$this=$(this),isFullscreen=!1,isClose=!1,isCollapse=!1,isLoading=!1,$fullscreen=$this.find('[data-toggle="panel-fullscreen"]'),$collapse=$this.find('[data-toggle="panel-collapse"]'),self=this;$this.hasClass("is-collapse")&&(isCollapse=!0);var api={load:function(callback){var type=$this.data("loader-type");type||(type="default"),$loading=$('<div class="panel-loading"><div class="loader loader-'+type+'"></div></div>'),$loading.appendTo($this),$this.addClass("is-loading"),$this.trigger("loading.uikit.panel"),isLoading=!0,$.isFunction(callback)&&callback.call(self,this.done)},done:function(){isLoading===!0&&($loading.remove(),$this.removeClass("is-loading"),$this.trigger("loading.done.uikit.panel"))},toggleContent:function(){isCollapse?this.showContent():this.hideContent()},showContent:function(){isCollapse!==!1&&($this.removeClass("is-collapse"),$collapse.hasClass("wb-plus")&&$collapse.removeClass("wb-plus").addClass("wb-minus"),$this.trigger("shown.uikit.panel"),isCollapse=!1)},hideContent:function(){isCollapse!==!0&&($this.addClass("is-collapse"),$collapse.hasClass("wb-minus")&&$collapse.removeClass("wb-minus").addClass("wb-plus"),$this.trigger("hidden.uikit.panel"),isCollapse=!0)},toggleFullscreen:function(){isFullscreen?this.leaveFullscreen():this.enterFullscreen()},enterFullscreen:function(){isFullscreen!==!0&&($this.addClass("is-fullscreen"),$fullscreen.hasClass("wb-expand")&&$fullscreen.removeClass("wb-expand").addClass("wb-contract"),$this.trigger("enter.fullscreen.uikit.panel"),isFullscreen=!0)},leaveFullscreen:function(){isFullscreen!==!1&&($this.removeClass("is-fullscreen"),$fullscreen.hasClass("wb-contract")&&$fullscreen.removeClass("wb-contract").addClass("wb-expand"),$this.trigger("leave.fullscreen.uikit.panel"),isFullscreen=!1)},toggle:function(){isClose?this.open():this.close()},open:function(){isClose!==!1&&($this.removeClass("is-close"),$this.trigger("open.uikit.panel"),isClose=!1)},close:function(){isClose!==!0&&($this.addClass("is-close"),$this.trigger("close.uikit.panel"),isClose=!0)}};$this.data("panel-api",api)})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("peityBar", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 400)],
    height: 22,
    max: null,
    min: 0,
    padding: 0.1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityBar");

    $('[data-plugin="peityBar"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[400]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('bar', options);
    });
  }
});

$.components.register("peityDonut", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    innerRadius: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityDonut");

    $('[data-plugin="peityDonut"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('donut', options);
    });
  }
});

$.components.register("peityLine", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 200)],
    height: 22,
    max: null,
    min: 0,
    stroke: $.colors("primary", 600),
    strokeWidth: 1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityLine");

    $('[data-plugin="peityLine"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[200]];
          defaults.stroke = skinColors[600];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('line', options);
    });
  }
});

$.components.register("peityPie", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityPie");

    $('[data-plugin="peityPie"]', context).each(function() {

      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('pie', options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("peityBar",{mode:"init",defaults:{delimiter:",",fill:[$.colors("primary",400)],height:22,max:null,min:0,padding:.1,width:44},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityBar");$('[data-plugin="peityBar"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[400]]}options=$.extend(!0,{},defaults,options),$this.peity("bar",options)})}}}),$.components.register("peityDonut",{mode:"init",defaults:{delimiter:null,fill:[$.colors("primary",700),$.colors("primary",400),$.colors("primary",200)],height:null,innerRadius:null,radius:11,width:null},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityDonut");$('[data-plugin="peityDonut"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[700],skinColors[400],skinColors[200]]}options=$.extend(!0,{},defaults,options),$this.peity("donut",options)})}}}),$.components.register("peityLine",{mode:"init",defaults:{delimiter:",",fill:[$.colors("primary",200)],height:22,max:null,min:0,stroke:$.colors("primary",600),strokeWidth:1,width:44},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityLine");$('[data-plugin="peityLine"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[200]],defaults.stroke=skinColors[600]}options=$.extend(!0,{},defaults,options),$this.peity("line",options)})}}}),$.components.register("peityPie",{mode:"init",defaults:{delimiter:null,fill:[$.colors("primary",700),$.colors("primary",400),$.colors("primary",200)],height:null,radius:11,width:null},init:function(context){if($.fn.peity){var defaults=$.components.getDefaults("peityPie");$('[data-plugin="peityPie"]',context).each(function(){var $this=$(this),options=$this.data();if(options.skin&&$.colors(options.skin)){var skinColors=$.colors(options.skin);defaults.fill=[skinColors[700],skinColors[400],skinColors[200]]}options=$.extend(!0,{},defaults,options),$this.peity("pie",options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("plyr", {
  mode: "init",
  init: function() {
    if (typeof plyr === "undefined") return;

    (function(d, u) {
      var a = new XMLHttpRequest(),
        b = d.body;

      // Check for CORS support
      if ("withCredentials" in a) {
        a.open("GET", u, true);
        a.send();
        a.onload = function() {
          var c = d.createElement("div");
          c.style.display = "none";
          c.innerHTML = a.responseText;
          b.insertBefore(c, b.childNodes[0]);
        }
      }
    })(document, "https://cdn.plyr.io/1.1.5/sprite.svg");

    plyr.setup();
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("plyr",{mode:"init",init:function(){"undefined"!=typeof plyr&&(!function(d,u){var a=new XMLHttpRequest,b=d.body;"withCredentials"in a&&(a.open("GET",u,!0),a.send(),a.onload=function(){var c=d.createElement("div");c.style.display="none",c.innerHTML=a.responseText,b.insertBefore(c,b.childNodes[0])})}(document,"https://cdn.plyr.io/1.1.5/sprite.svg"),plyr.setup())}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("rating", {
  mode: "init",
  defaults: {
    targetKeep: true,
    icon: "font",
    starType: "i",
    starOff: "icon wb-star",
    starOn: "icon wb-star orange-600",
    cancelOff: "icon wb-minus-circle",
    cancelOn: "icon wb-minus-circle orange-600",
    starHalf: "icon wb-star-half orange-500"
  },
  init: function(context) {
    if (!$.fn.raty) return;

    var defaults = $.components.getDefaults("rating");

    $('[data-plugin="rating"]', context).each(function() {
      var $this = $(this);
      var options = $.extend(true, {}, defaults, $this.data());

      if (options.hints) {
        options.hints = options.hints.split(',');
      }

      $this.raty(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("rating",{mode:"init",defaults:{targetKeep:!0,icon:"font",starType:"i",starOff:"icon wb-star",starOn:"icon wb-star orange-600",cancelOff:"icon wb-minus-circle",cancelOn:"icon wb-minus-circle orange-600",starHalf:"icon wb-star-half orange-500"},init:function(context){if($.fn.raty){var defaults=$.components.getDefaults("rating");$('[data-plugin="rating"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());options.hints&&(options.hints=options.hints.split(",")),$this.raty(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("select2", {
  mode: "default",
  defaults: {
    width: "style"
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("select2",{mode:"default",defaults:{width:"style"}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("selectable", {
  mode: "init",
  defaults: {
    allSelector: '.selectable-all',
    itemSelector: '.selectable-item',
    rowSelector: 'tr',
    rowSelectable: false,
    rowActiveClass: 'active',
    onChange: null
  },
  init: function(context) {
    if (!$.fn.asSelectable) return;
    var defaults = $.components.getDefaults('selectable');

    $('[data-plugin="selectable"], [data-selectable="selectable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());
      $(this).asSelectable(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("selectable",{mode:"init",defaults:{allSelector:".selectable-all",itemSelector:".selectable-item",rowSelector:"tr",rowSelectable:!1,rowActiveClass:"active",onChange:null},init:function(context){if($.fn.asSelectable){var defaults=$.components.getDefaults("selectable");$('[data-plugin="selectable"], [data-selectable="selectable"]',context).each(function(){var options=$.extend({},defaults,$(this).data());$(this).asSelectable(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("slidePanel", {
  mode: "manual",
  defaults: {
    closeSelector: '.slidePanel-close',
    mouseDragHandler: '.slidePanel-handler',
    loading: {
      template: function(options) {
        return '<div class="' + options.classes.loading + '">' +
          '<div class="loader loader-default"></div>' +
          '</div>';
      },
      showCallback: function(options) {
        this.$el.addClass(options.classes.loading + '-show');
      },
      hideCallback: function(options) {
        this.$el.removeClass(options.classes.loading + '-show');
      }
    }
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("slidePanel",{mode:"manual",defaults:{closeSelector:".slidePanel-close",mouseDragHandler:".slidePanel-handler",loading:{template:function(options){return'<div class="'+options.classes.loading+'"><div class="loader loader-default"></div></div>'},showCallback:function(options){this.$el.addClass(options.classes.loading+"-show")},hideCallback:function(options){this.$el.removeClass(options.classes.loading+"-show")}}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("summernote", {
  mode: "default",
  defaults: {
    height: 300
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("summernote",{mode:"default",defaults:{height:300}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("switchery", {
  mode: "init",
  defaults: {
    color: $.colors("primary", 600)
  },
  init: function(context) {
    if (typeof Switchery === "undefined") return;

    var defaults = $.components.getDefaults("switchery");

    $('[data-plugin="switchery"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      new Switchery(this, options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("switchery",{mode:"init",defaults:{color:$.colors("primary",600)},init:function(context){if("undefined"!=typeof Switchery){var defaults=$.components.getDefaults("switchery");$('[data-plugin="switchery"]',context).each(function(){var options=$.extend({},defaults,$(this).data());new Switchery(this,options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("table", {
  mode: "api",
  api: function(context) {
    /* section */
    function run(e) {
      if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !$(e.target).parent("div.checkbox-custom").length) {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active")
        } else {
          $(this).siblings('.table-section').removeClass("active");
          $(this).addClass("active");
        }
      }
    }

    var touch = typeof document.ontouchstart !== 'undefined',
      type = 'click';

    if (touch) {
      type = 'touchstart';
    }

    $(document).on(type, '.table-section', function(e) {
      run.call(this, e);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("table",{mode:"api",api:function(context){function run(e){"checkbox"===e.target.type||"button"===e.target.type||"a"===e.target.tagName.toLowerCase()||$(e.target).parent("div.checkbox-custom").length||($(this).hasClass("active")?$(this).removeClass("active"):($(this).siblings(".table-section").removeClass("active"),$(this).addClass("active")))}var touch="undefined"!=typeof document.ontouchstart,type="click";touch&&(type="touchstart"),$(document).on(type,".table-section",function(e){run.call(this,e)})}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("verticalTab", {
  mode: "init",
  init: function(context) {
    if (!$.fn.matchHeight) return;

    $('.nav-tabs-vertical', context).each(function() {
      $(this).children().matchHeight();
    });
  }
});

$.components.register("horizontalTab", {
  mode: "init",
  init: function(context) {
    if (!$.fn.responsiveHorizontalTabs) return;

    $('.nav-tabs-horizontal', context).responsiveHorizontalTabs();
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("verticalTab",{mode:"init",init:function(context){$.fn.matchHeight&&$(".nav-tabs-vertical",context).each(function(){$(this).children().matchHeight()})}}),$.components.register("horizontalTab",{mode:"init",init:function(context){$.fn.responsiveHorizontalTabs&&$(".nav-tabs-horizontal",context).responsiveHorizontalTabs()}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("taskList", {
  mode: "api",
  api: function() {
    $(document).on('change.site.task', '[data-role="task"]', function() {
      var $list = $(this),
        $checkbox = $list.find('[type="checkbox"]');
      if ($checkbox.is(':checked')) {
        $list.addClass('task-done');
      } else {
        $list.removeClass('task-done');
      }
    });

    $('[data-role="task"]').trigger('change.site.task');
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("taskList",{mode:"api",api:function(){$(document).on("change.site.task",'[data-role="task"]',function(){var $list=$(this),$checkbox=$list.find('[type="checkbox"]');$checkbox.is(":checked")?$list.addClass("task-done"):$list.removeClass("task-done")}),$('[data-role="task"]').trigger("change.site.task")}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("toastr", {
  mode: "api",
  api: function() {
    if (typeof toastr === "undefined") return;
    var defaults = $.components.getDefaults("toastr");

    $(document).on('click.site.toastr', '[data-plugin="toastr"]', function(e) {
      e.preventDefault();

      var $this = $(this);
      var options = $.extend(true, {}, defaults, $this.data());
      var message = options.message || '';
      var type = options.type || "info";
      var title = options.title || undefined;

      switch (type) {
        case "success":
          toastr.success(message, title, options);
          break;
        case "warning":
          toastr.warning(message, title, options);
          break;
        case "error":
          toastr.error(message, title, options);
          break;
        case "info":
          toastr.info(message, title, options);
          break;
        default:
          toastr.info(message, title, options);
      }
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("toastr",{mode:"api",api:function(){if("undefined"!=typeof toastr){var defaults=$.components.getDefaults("toastr");$(document).on("click.site.toastr",'[data-plugin="toastr"]',function(e){e.preventDefault();var $this=$(this),options=$.extend(!0,{},defaults,$this.data()),message=options.message||"",type=options.type||"info",title=options.title||void 0;switch(type){case"success":toastr.success(message,title,options);break;case"warning":toastr.warning(message,title,options);break;case"error":toastr.error(message,title,options);break;case"info":toastr.info(message,title,options);break;default:toastr.info(message,title,options)}})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("toolbar", {
  mode: "init",
  init: function(context) {
    if (!$.fn.toolbar) return;

    var defaults = $.components.getDefaults("toolbar");

    $('[data-plugin="toolbar"]', context).each(function() {
      var $this = $(this);
      var content = $this.data("toolbar");

      var options = $.extend(true, {}, defaults);

      if (content) {
        options.content = content;
      }

      $this.toolbar(options);
    });
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("toolbar",{mode:"init",init:function(context){if($.fn.toolbar){var defaults=$.components.getDefaults("toolbar");$('[data-plugin="toolbar"]',context).each(function(){var $this=$(this),content=$this.data("toolbar"),options=$.extend(!0,{},defaults);content&&(options.content=content),$this.toolbar(options)})}}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("webuiPopover", {
  mode: "default",
  defaults: {
    trigger: "click",
    width: 320,
    multi: true,
    cloaseable: false,
    style: "",
    delay: 300,
    padding: true
  }
});
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("webuiPopover",{mode:"default",defaults:{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}});;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  "use strict";
  $.configs.colors = {
    "red": {
      "100": "#ffeaea",
      "200": "#fad3d3",
      "300": "#fab4b4",
      "400": "#fa9898",
      "500": "#fa7a7a",
      "600": "#f96868",
      "700": "#e9595b",
      "800": "#d6494b"
    },
    "pink": {
      "100": "#fce4ec",
      "200": "#ffccde",
      "300": "#fba9c6",
      "400": "#fb8db4",
      "500": "#f978a6",
      "600": "#f96197",
      "700": "#f44c87",
      "800": "#e53b75"
    },
    "purple": {
      "100": "#f6f2ff",
      "200": "#e3dbf4",
      "300": "#d2c5ec",
      "400": "#bba7e4",
      "500": "#a58add",
      "600": "#926dde",
      "700": "#7c51d1",
      "800": "#6d45bc"
    },
    "indigo": {
      "100": "#edeff9",
      "200": "#dadef5",
      "300": "#bcc5f4",
      "400": "#9daaf3",
      "500": "#8897ec",
      "600": "#677ae4",
      "700": "#5166d6",
      "800": "#465bd4"
    },
    "blue": {
      "100": "#e8f1f8",
      "200": "#d5e4f1",
      "300": "#bcd8f1",
      "400": "#a2caee",
      "500": "#89bceb",
      "600": "#62a8ea",
      "700": "#4e97d9",
      "800": "#3583ca"
    },
    "cyan": {
      "100": "#ecf9fa",
      "200": "#d3eff2",
      "300": "#baeaef",
      "400": "#9ae1e9",
      "500": "#77d6e1",
      "600": "#57c7d4",
      "700": "#47b8c6",
      "800": "#37a9b7"
    },
    "teal": {
      "100": "#ecfdfc",
      "200": "#cdf4f1",
      "300": "#99e1da",
      "400": "#79d1c9",
      "500": "#56bfb5",
      "600": "#3aa99e",
      "700": "#269b8f",
      "800": "#178d81"
    },
    "green": {
      "100": "#e7faf2",
      "200": "#bfedd8",
      "300": "#9fe5c5",
      "400": "#7dd3ae",
      "500": "#5cd29d",
      "600": "#46be8a",
      "700": "#36ab7a",
      "800": "#279566"
    },
    "light-green": {
      "100": "#f1f7ea",
      "200": "#e0ecd1",
      "300": "#cadfb1",
      "400": "#bad896",
      "500": "#acd57c",
      "600": "#9ece67",
      "700": "#83b944",
      "800": "#70a532"
    },
    "yellow": {
      "100": "#fffae7",
      "200": "#f9eec1",
      "300": "#f6e7a9",
      "400": "#f8e59b",
      "500": "#f7e083",
      "600": "#f7da64",
      "700": "#f9cd48",
      "800": "#fbc02d"
    },
    "orange": {
      "100": "#fff3e6",
      "200": "#ffddb9",
      "300": "#fbce9d",
      "400": "#f6be80",
      "500": "#f4b066",
      "600": "#f2a654",
      "700": "#ec9940",
      "800": "#e98f2e"
    },
    "brown": {
      "100": "#fae6df",
      "200": "#e2bdaf",
      "300": "#d3aa9c",
      "400": "#b98e7e",
      "500": "#a17768",
      "600": "#8d6658",
      "700": "#7d5b4f",
      "800": "#715146"
    },
    "grey": {
      "100": "#fafafa",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242"
    },
    "blue-grey": {
      "100": "#f3f7f9",
      "200": "#e4eaec",
      "300": "#ccd5db",
      "400": "#a3afb7",
      "500": "#76838f",
      "600": "#526069",
      "700": "#37474f",
      "800": "#263238"
    }
  };
})(window, document, $);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";$.configs.colors={red:{100:"#ffeaea",200:"#fad3d3",300:"#fab4b4",400:"#fa9898",500:"#fa7a7a",600:"#f96868",700:"#e9595b",800:"#d6494b"},pink:{100:"#fce4ec",200:"#ffccde",300:"#fba9c6",400:"#fb8db4",500:"#f978a6",600:"#f96197",700:"#f44c87",800:"#e53b75"},purple:{100:"#f6f2ff",200:"#e3dbf4",300:"#d2c5ec",400:"#bba7e4",500:"#a58add",600:"#926dde",700:"#7c51d1",800:"#6d45bc"},indigo:{100:"#edeff9",200:"#dadef5",300:"#bcc5f4",400:"#9daaf3",500:"#8897ec",600:"#677ae4",700:"#5166d6",800:"#465bd4"},blue:{100:"#e8f1f8",200:"#d5e4f1",300:"#bcd8f1",400:"#a2caee",500:"#89bceb",600:"#62a8ea",700:"#4e97d9",800:"#3583ca"},cyan:{100:"#ecf9fa",200:"#d3eff2",300:"#baeaef",400:"#9ae1e9",500:"#77d6e1",600:"#57c7d4",700:"#47b8c6",800:"#37a9b7"},teal:{100:"#ecfdfc",200:"#cdf4f1",300:"#99e1da",400:"#79d1c9",500:"#56bfb5",600:"#3aa99e",700:"#269b8f",800:"#178d81"},green:{100:"#e7faf2",200:"#bfedd8",300:"#9fe5c5",400:"#7dd3ae",500:"#5cd29d",600:"#46be8a",700:"#36ab7a",800:"#279566"},"light-green":{100:"#f1f7ea",200:"#e0ecd1",300:"#cadfb1",400:"#bad896",500:"#acd57c",600:"#9ece67",700:"#83b944",800:"#70a532"},yellow:{100:"#fffae7",200:"#f9eec1",300:"#f6e7a9",400:"#f8e59b",500:"#f7e083",600:"#f7da64",700:"#f9cd48",800:"#fbc02d"},orange:{100:"#fff3e6",200:"#ffddb9",300:"#fbce9d",400:"#f6be80",500:"#f4b066",600:"#f2a654",700:"#ec9940",800:"#e98f2e"},brown:{100:"#fae6df",200:"#e2bdaf",300:"#d3aa9c",400:"#b98e7e",500:"#a17768",600:"#8d6658",700:"#7d5b4f",800:"#715146"},grey:{100:"#fafafa",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242"},"blue-grey":{100:"#f3f7f9",200:"#e4eaec",300:"#ccd5db",400:"#a3afb7",500:"#76838f",600:"#526069",700:"#37474f",800:"#263238"}}}(window,document,$);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  var $doc = $(document);

  // Site
  // ====
  $.site = $.site || {};

  $.extend($.site, {
    _queue: {
      prepare: [],
      run: [],
      complete: []
    },

    run: function() {
      var self = this;

      this.dequeue('prepare', function() {
        self.trigger('before.run', self);
      });

      this.dequeue('run', function() {
        self.dequeue('complete', function() {
          self.trigger('after.run', self);
        });
      });
    },

    dequeue: function(name, done) {
      var self = this,
        queue = this.getQueue(name),
        fn = queue.shift(),
        next = function() {
          self.dequeue(name, done);
        };

      if (fn) {
        fn.call(this, next);
      } else if ($.isFunction(done)) {
        done.call(this);
      }
    },

    getQueue: function(name) {
      if (!$.isArray(this._queue[name])) {
        this._queue[name] = [];
      }

      return this._queue[name];
    },

    extend: function(obj) {
      $.each(this._queue, function(name, queue) {
        if ($.isFunction(obj[name])) {
          queue.push(obj[name]);

          delete obj[name];
        }
      });

      $.extend(this, obj);

      return this;
    },

    trigger: function(name, data, $el) {
      if (typeof name === 'undefined') return;
      if (typeof $el === 'undefined') $el = $doc;

      $el.trigger(name + '.site', data);
    },

    throttle: function(func, wait) {
      var _now = Date.now || function() {
        return new Date().getTime();
      };
      var context, args, result;
      var timeout = null;
      var previous = 0;

      var later = function() {
        previous = _now();
        timeout = null;
        result = func.apply(context, args);
        context = args = null;
      };

      return function() {
        var now = _now();
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
          context = args = null;
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    },

    resize: function() {
      if (document.createEvent) {
        var ev = document.createEvent('Event');
        ev.initEvent('resize', true, true);
        window.dispatchEvent(ev);
      } else {
        element = document.documentElement;
        var event = document.createEventObject();
        element.fireEvent("onresize", event);
      }
    }
  });

  // Configs
  // =======
  $.configs = $.configs || {};

  $.extend($.configs, {
    data: {},
    get: function(name) {
      var callback = function(data, name) {
        return data[name];
      }

      var data = this.data;

      for (var i = 0; i < arguments.length; i++) {
        name = arguments[i];

        data = callback(data, name);
      }

      return data;
    },

    set: function(name, value) {
      this.data[name] = value;
    },

    extend: function(name, options) {
      var value = this.get(name);
      return $.extend(true, value, options);
    }
  });

  // Colors
  // ======
  $.colors = function(name, level) {
    if (name === 'primary') {
      name = $.configs.get('site', 'primaryColor');
      if (!name) {
        name = 'red';
      }
    }

    if (typeof $.configs.colors === 'undefined') {
      return null;
    }

    if (typeof $.configs.colors[name] !== 'undefined') {
      if (level && typeof $.configs.colors[name][level] !== 'undefined') {
        return $.configs.colors[name][level];
      }

      if (typeof level === 'undefined') {
        return $.configs.colors[name];
      }
    }

    return null;
  };

  // Components
  // ==========
  $.components = $.components || {};

  $.extend($.components, {
    _components: {},

    register: function(name, obj) {
      this._components[name] = obj;
    },

    init: function(name, context, args) {
      var self = this;

      if (typeof name === 'undefined') {
        $.each(this._components, function(name) {
          self.init(name);
        });
      } else {
        context = context || document;
        args = args || [];

        var obj = this.get(name);

        if (obj) {
          switch (obj.mode) {
            case 'default':
              return this._initDefault(name, context);
            case 'init':
              return this._initComponent(name, obj, context, args);
            case 'api':
              return this._initApi(name, obj, args);
            default:
              this._initApi(name, obj, context, args);
              this._initComponent(name, obj, context, args);
              return;
          }
        }
      }
    },

    /* init alternative, but only or init mode */
    call: function(name, context) {
      var args = Array.prototype.slice.call(arguments, 2);
      var obj = this.get(name);

      context = context || document;

      return this._initComponent(name, obj, context, args);
    },

    _initDefault: function(name, context) {
      if (!$.fn[name]) return;

      var defaults = this.getDefaults(name);

      $('[data-plugin=' + name + ']', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this[name](options);
      });
    },


    _initComponent: function(name, obj, context, args) {
      if ($.isFunction(obj.init)) {
        obj.init.apply(obj, [context].concat(args));
      }
    },

    _initApi: function(name, obj, args) {
      if (typeof obj.apiCalled === 'undefined' && $.isFunction(obj.api)) {
        obj.api.apply(obj, args);

        obj.apiCalled = true;
      }
    },


    getDefaults: function(name) {
      var component = this.get(name);

      if (component && typeof component.defaults !== "undefined") {
        return component.defaults;
      } else {
        return {};
      }
    },

    get: function(name, property) {
      if (typeof this._components[name] !== "undefined") {
        if (typeof property !== "undefined") {
          return this._components[name][property];
        } else {
          return this._components[name];
        }
      } else {
        console.warn('component:' + component + ' script is not loaded.');

        return undefined;
      }
    }
  });

})(window, document, jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var $doc=$(document);$.site=$.site||{},$.extend($.site,{_queue:{prepare:[],run:[],complete:[]},run:function(){var self=this;this.dequeue("prepare",function(){self.trigger("before.run",self)}),this.dequeue("run",function(){self.dequeue("complete",function(){self.trigger("after.run",self)})})},dequeue:function(name,done){var self=this,queue=this.getQueue(name),fn=queue.shift(),next=function(){self.dequeue(name,done)};fn?fn.call(this,next):$.isFunction(done)&&done.call(this)},getQueue:function(name){return $.isArray(this._queue[name])||(this._queue[name]=[]),this._queue[name]},extend:function(obj){return $.each(this._queue,function(name,queue){$.isFunction(obj[name])&&(queue.push(obj[name]),delete obj[name])}),$.extend(this,obj),this},trigger:function(name,data,$el){"undefined"!=typeof name&&("undefined"==typeof $el&&($el=$doc),$el.trigger(name+".site",data))},throttle:function(func,wait){var context,args,result,_now=Date.now||function(){return(new Date).getTime()},timeout=null,previous=0,later=function(){previous=_now(),timeout=null,result=func.apply(context,args),context=args=null};return function(){var now=_now(),remaining=wait-(now-previous);return context=this,args=arguments,0>=remaining?(clearTimeout(timeout),timeout=null,previous=now,result=func.apply(context,args),context=args=null):timeout||(timeout=setTimeout(later,remaining)),result}},resize:function(){if(document.createEvent){var ev=document.createEvent("Event");ev.initEvent("resize",!0,!0),window.dispatchEvent(ev)}else{element=document.documentElement;var event=document.createEventObject();element.fireEvent("onresize",event)}}}),$.configs=$.configs||{},$.extend($.configs,{data:{},get:function(name){for(var callback=function(data,name){return data[name]},data=this.data,i=0;i<arguments.length;i++)name=arguments[i],data=callback(data,name);return data},set:function(name,value){this.data[name]=value},extend:function(name,options){var value=this.get(name);return $.extend(!0,value,options)}}),$.colors=function(name,level){if("primary"===name&&(name=$.configs.get("site","primaryColor"),name||(name="red")),"undefined"==typeof $.configs.colors)return null;if("undefined"!=typeof $.configs.colors[name]){if(level&&"undefined"!=typeof $.configs.colors[name][level])return $.configs.colors[name][level];if("undefined"==typeof level)return $.configs.colors[name]}return null},$.components=$.components||{},$.extend($.components,{_components:{},register:function(name,obj){this._components[name]=obj},init:function(name,context,args){var self=this;if("undefined"==typeof name)$.each(this._components,function(name){self.init(name)});else{context=context||document,args=args||[];var obj=this.get(name);if(obj)switch(obj.mode){case"default":return this._initDefault(name,context);case"init":return this._initComponent(name,obj,context,args);case"api":return this._initApi(name,obj,args);default:return this._initApi(name,obj,context,args),void this._initComponent(name,obj,context,args)}}},call:function(name,context){var args=Array.prototype.slice.call(arguments,2),obj=this.get(name);return context=context||document,this._initComponent(name,obj,context,args)},_initDefault:function(name,context){if($.fn[name]){var defaults=this.getDefaults(name);$("[data-plugin="+name+"]",context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this[name](options)})}},_initComponent:function(name,obj,context,args){$.isFunction(obj.init)&&obj.init.apply(obj,[context].concat(args))},_initApi:function(name,obj,args){"undefined"==typeof obj.apiCalled&&$.isFunction(obj.api)&&(obj.api.apply(obj,args),obj.apiCalled=!0)},getDefaults:function(name){var component=this.get(name);return component&&"undefined"!=typeof component.defaults?component.defaults:{}},get:function(name,property){return"undefined"!=typeof this._components[name]?"undefined"!=typeof property?this._components[name][property]:this._components[name]:void 0}})}(window,document,jQuery);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  var pluginName = 'actionBtn';

  var Plugin = $[pluginName] = function(element, options) {
    this.element = element;
    this.$element = $(element);

    this.options = $.extend({}, Plugin.defaults, options, this.$element.data());

    this.init();
  };

  Plugin.defaults = {
    trigger: 'click', // click, hover
    toggleSelector: '.site-action-toggle',
    listSelector: '.site-action-buttons',
    activeClass: 'active',
    onShow: function() {},
    onHide: function() {}
  };

  Plugin.prototype = {
    constructor: Plugin,
    init: function() {
      this.showed = false;

      this.$toggle = this.$element.find(this.options.toggleSelector);
      this.$list = this.$element.find(this.options.listSelector);

      var self = this;

      if (this.options.trigger === 'hover') {
        this.$element.on('mouseenter', this.options.toggleSelector, function() {
          if (!self.showed) {
            self.show();
          }
        });
        this.$element.on('mouseleave', this.options.toggleSelector, function() {
          if (self.showed) {
            self.hide();
          }
        });
      } else {
        this.$element.on('click', this.options.toggleSelector, function() {
          if (self.showed) {
            self.hide();
          } else {
            self.show();
          }
        });
      }
    },

    show: function() {
      if (!this.showed) {
        this.$element.addClass(this.options.activeClass);
        this.showed = true;

        this.options.onShow.call(this);
      }
    },
    hide: function() {
      if (this.showed) {
        this.$element.removeClass(this.options.activeClass);
        this.showed = false;

        this.options.onHide.call(this);
      }
    }
  };

  $.fn[pluginName] = function(options) {
    if (typeof options === 'string') {
      var method = options;
      var method_arguments = Array.prototype.slice.call(arguments, 1);

      if (/^\_/.test(method)) {
        return false;
      } else if ((/^(get)$/.test(method))) {
        var api = this.first().data(pluginName);
        if (api && typeof api[method] === 'function') {
          return api[method].apply(api, method_arguments);
        }
      } else {
        return this.each(function() {
          var api = $.data(this, pluginName);
          if (api && typeof api[method] === 'function') {
            api[method].apply(api, method_arguments);
          }
        });
      }
    } else {
      return this.each(function() {
        if (!$.data(this, pluginName)) {
          $.data(this, pluginName, new Plugin(this, options));
        }
      });
    }
  };
})(window, document, jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var pluginName="actionBtn",Plugin=$[pluginName]=function(element,options){this.element=element,this.$element=$(element),this.options=$.extend({},Plugin.defaults,options,this.$element.data()),this.init()};Plugin.defaults={trigger:"click",toggleSelector:".site-action-toggle",listSelector:".site-action-buttons",activeClass:"active",onShow:function(){},onHide:function(){}},Plugin.prototype={constructor:Plugin,init:function(){this.showed=!1,this.$toggle=this.$element.find(this.options.toggleSelector),this.$list=this.$element.find(this.options.listSelector);var self=this;"hover"===this.options.trigger?(this.$element.on("mouseenter",this.options.toggleSelector,function(){self.showed||self.show()}),this.$element.on("mouseleave",this.options.toggleSelector,function(){self.showed&&self.hide()})):this.$element.on("click",this.options.toggleSelector,function(){self.showed?self.hide():self.show()})},show:function(){this.showed||(this.$element.addClass(this.options.activeClass),this.showed=!0,this.options.onShow.call(this))},hide:function(){this.showed&&(this.$element.removeClass(this.options.activeClass),this.showed=!1,this.options.onHide.call(this))}},$.fn[pluginName]=function(options){if("string"!=typeof options)return this.each(function(){$.data(this,pluginName)||$.data(this,pluginName,new Plugin(this,options))});var method=options,method_arguments=Array.prototype.slice.call(arguments,1);if(/^\_/.test(method))return!1;if(!/^(get)$/.test(method))return this.each(function(){var api=$.data(this,pluginName);api&&"function"==typeof api[method]&&api[method].apply(api,method_arguments)});var api=this.first().data(pluginName);return api&&"function"==typeof api[method]?api[method].apply(api,method_arguments):void 0}}(window,document,jQuery);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
+ function($) {
  'use strict';

  // TAB CLOSE CLASS DEFINITION
  // ==========================

  var dismiss = '[data-close="tab"]'
  var TabClose = function(el) {
    $(el).on('click', dismiss, this.close);
  }

  TabClose.TRANSITION_DURATION = 150

  TabClose.prototype.close = function(e) {
    var $this = $(this);
    var $toggle = $this.closest('[data-toggle="tab"]');
    var selector = $toggle.data('target');
    var $li = $toggle.parent('li');

    if (!selector) {
      selector = $toggle.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }

    if ($li.hasClass('active')) {
      var $next = $li.siblings().eq(0).children('[data-toggle="tab"]');
      if ($next.length > 0) {
        var api = $next.tab().data('bs.tab');
        api.show();
      }
    }

    var $parent = $(selector);
    if (e) e.preventDefault();

    $parent.trigger(e = $.Event('close.bs.tab'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.tab').remove();
      $li.detach().remove();
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
      .one('bsTransitionEnd', removeElement)
      .emulateTransitionEnd(TabClose.TRANSITION_DURATION) :
      removeElement()
  }


  // TAB CLOSE PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this)
      var data = $this.data('bs.tab.close')

      if (!data) $this.data('bs.tab.close', (data = new TabClose(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.tabClose

  $.fn.tabClose = Plugin
  $.fn.tabClose.Constructor = TabClose


  // TAB CLOSE NO CONFLICT
  // =====================

  $.fn.tabClose.noConflict = function() {
    $.fn.tabClose = old
    return this
  }


  // TAB CLOSE DATA-API
  // ==================

  $(document).on('click.bs.tab-close.data-api', dismiss, TabClose.prototype.close)

}(jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
+function($){"use strict";function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tab.close");data||$this.data("bs.tab.close",data=new TabClose(this)),"string"==typeof option&&data[option].call($this)})}var dismiss='[data-close="tab"]',TabClose=function(el){$(el).on("click",dismiss,this.close)};TabClose.TRANSITION_DURATION=150,TabClose.prototype.close=function(e){function removeElement(){$parent.detach().trigger("closed.bs.tab").remove(),$li.detach().remove()}var $this=$(this),$toggle=$this.closest('[data-toggle="tab"]'),selector=$toggle.data("target"),$li=$toggle.parent("li");if(selector||(selector=$toggle.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),$li.hasClass("active")){var $next=$li.siblings().eq(0).children('[data-toggle="tab"]');if($next.length>0){var api=$next.tab().data("bs.tab");api.show()}}var $parent=$(selector);e&&e.preventDefault(),$parent.trigger(e=$.Event("close.bs.tab")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?$parent.one("bsTransitionEnd",removeElement).emulateTransitionEnd(TabClose.TRANSITION_DURATION):removeElement())};var old=$.fn.tabClose;$.fn.tabClose=Plugin,$.fn.tabClose.Constructor=TabClose,$.fn.tabClose.noConflict=function(){return $.fn.tabClose=old,this},$(document).on("click.bs.tab-close.data-api",dismiss,TabClose.prototype.close)}(jQuery);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  "use strict";

  var pluginName = 'responsiveHorizontalTabs',
    defaults = {
      navSelector: '.nav-tabs',
      itemSelector: '>li',
      dropdownSelector: '>.dropdown',
      dropdownItemSelector: 'li',
      tabSelector: '.tab-pane',
      activeClassName: 'active'
    };

  var Plugin = function(el, options) {
    var $tabs = this.$tabs = $(el);
    this.options = options = $.extend(true, {}, defaults, options);

    var $nav = this.$nav = $tabs.find(this.options.navSelector),
      $dropdown = this.$dropdown = $nav.find(this.options.dropdownSelector);
    var $items = this.$items = $nav.find(this.options.itemSelector).filter(function() {
      return !$(this).is($dropdown);
    });

    this.$dropdownItems = $dropdown.find(this.options.dropdownItemSelector);
    this.$tabPanel = this.$tabs.find(this.options.tabSelector);

    this.breakpoints = [];

    $items.each(function() {
      $(this).data('width', $(this).width());
    });

    this.init();
    this.bind();

  };

  Plugin.prototype = {
    init: function() {
      if (this.$dropdown.length === 0) return;

      this.$dropdown.show();
      this.breakpoints = [];

      var length = this.length = this.$items.length,
        dropWidth = this.dropWidth = this.$dropdown.width(),
        total = 0;

      this.flag = length;

      if (length <= 1) {
        this.$dropdown.hide();
        return;
      }

      for (var i = 0; i < length - 2; i++) {
        if (i === 0) this.breakpoints.push(this.$items.eq(i).outerWidth() + dropWidth);
        else this.breakpoints.push(this.breakpoints[i - 1] + this.$items.eq(i).width());
      }

      for (i = 0; i < length; i++) {
        total += this.$items.eq(i).outerWidth();
      }
      this.breakpoints.push(total);

      this.layout();
    },

    layout: function() {
      if (this.breakpoints.length <= 0) return;

      var width = this.$nav.width(),
        i = 0,
        activeClassName = this.options.activeClassName,
        active = this.$tabPanel.filter('.' + activeClassName).index();

      for (; i < this.breakpoints.length; i++) {
        if (this.breakpoints[i] > width) break;
      }

      if (i === this.flag) return;


      this.$items.removeClass(activeClassName);
      this.$dropdownItems.removeClass(activeClassName);
      this.$dropdown.removeClass(activeClassName);

      if (i === this.breakpoints.length) {
        this.$dropdown.hide();
        this.$items.show();
        this.$items.eq(active).addClass(activeClassName);
      } else {
        this.$dropdown.show();
        for (var j = 0; j < this.length; j++) {
          if (j < i) {
            this.$items.eq(j).show();
            this.$dropdownItems.eq(j).hide();
          } else {
            this.$items.eq(j).hide();
            this.$dropdownItems.eq(j).show();
          }
        }

        if (active < i) {
          this.$items.eq(active).addClass(activeClassName);
        } else {
          this.$dropdown.addClass(activeClassName);
          this.$dropdownItems.eq(active).addClass(activeClassName);
        }


      }

      this.flag = i;
    },

    bind: function() {
      var self = this;

      $(window).resize(function() {
        self.layout();
      });
    }

  };


  $.fn[pluginName] = function(options) {
    if (typeof options === 'string') {
      var method = options;
      var method_arguments = Array.prototype.slice.call(arguments, 1);
      if (/^\_/.test(method)) {
        return false;
      } else {
        return this.each(function() {
          var api = $.data(this, pluginName);
          if (api && typeof api[method] === 'function') {
            api[method].apply(api, method_arguments);
          }
        });
      }
    } else {
      return this.each(function() {
        if (!$.data(this, pluginName)) {
          $.data(this, pluginName, new Plugin(this, options));
        } else {
          $.data(this, pluginName).init();
        }
      });
    }
  };
})(window, document, jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var pluginName="responsiveHorizontalTabs",defaults={navSelector:".nav-tabs",itemSelector:">li",dropdownSelector:">.dropdown",dropdownItemSelector:"li",tabSelector:".tab-pane",activeClassName:"active"},Plugin=function(el,options){var $tabs=this.$tabs=$(el);this.options=options=$.extend(!0,{},defaults,options);var $nav=this.$nav=$tabs.find(this.options.navSelector),$dropdown=this.$dropdown=$nav.find(this.options.dropdownSelector),$items=this.$items=$nav.find(this.options.itemSelector).filter(function(){return!$(this).is($dropdown)});this.$dropdownItems=$dropdown.find(this.options.dropdownItemSelector),this.$tabPanel=this.$tabs.find(this.options.tabSelector),this.breakpoints=[],$items.each(function(){$(this).data("width",$(this).width())}),this.init(),this.bind()};Plugin.prototype={init:function(){if(0!==this.$dropdown.length){this.$dropdown.show(),this.breakpoints=[];var length=this.length=this.$items.length,dropWidth=this.dropWidth=this.$dropdown.width(),total=0;if(this.flag=length,1>=length)return void this.$dropdown.hide();for(var i=0;length-2>i;i++)0===i?this.breakpoints.push(this.$items.eq(i).outerWidth()+dropWidth):this.breakpoints.push(this.breakpoints[i-1]+this.$items.eq(i).width());for(i=0;length>i;i++)total+=this.$items.eq(i).outerWidth();this.breakpoints.push(total),this.layout()}},layout:function(){if(!(this.breakpoints.length<=0)){for(var width=this.$nav.width(),i=0,activeClassName=this.options.activeClassName,active=this.$tabPanel.filter("."+activeClassName).index();i<this.breakpoints.length&&!(this.breakpoints[i]>width);i++);if(i!==this.flag){if(this.$items.removeClass(activeClassName),this.$dropdownItems.removeClass(activeClassName),this.$dropdown.removeClass(activeClassName),i===this.breakpoints.length)this.$dropdown.hide(),this.$items.show(),this.$items.eq(active).addClass(activeClassName);else{this.$dropdown.show();for(var j=0;j<this.length;j++)i>j?(this.$items.eq(j).show(),this.$dropdownItems.eq(j).hide()):(this.$items.eq(j).hide(),this.$dropdownItems.eq(j).show());i>active?this.$items.eq(active).addClass(activeClassName):(this.$dropdown.addClass(activeClassName),this.$dropdownItems.eq(active).addClass(activeClassName))}this.flag=i}}},bind:function(){var self=this;$(window).resize(function(){self.layout()})}},$.fn[pluginName]=function(options){if("string"==typeof options){var method=options,method_arguments=Array.prototype.slice.call(arguments,1);return/^\_/.test(method)?!1:this.each(function(){var api=$.data(this,pluginName);api&&"function"==typeof api[method]&&api[method].apply(api,method_arguments)})}return this.each(function(){$.data(this,pluginName)?$.data(this,pluginName).init():$.data(this,pluginName,new Plugin(this,options))})}}(window,document,jQuery);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  var pluginName = 'asSelectable';

  var Plugin = $[pluginName] = function(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend({}, Plugin.defaults, options, this.$element.data());

    this.init();
  };

  Plugin.defaults = {
    allSelector: '.selectable-all',
    itemSelector: '.selectable-item',
    rowSelector: 'tr',
    rowSelectable: false,
    rowActiveClass: 'active',
    onChange: null
  };

  Plugin.prototype = {
    constructor: Plugin,
    init: function() {
      var self = this;
      var options = this.options;

      self.$element.on('change', options.allSelector, function() {
        var value = $(this).prop("checked");
        self.getItems().each(function() {
          var $one = $(this);
          $one.prop("checked", value).trigger('change', [true]);;
          self.selectRow($one, value);
        });
      });

      self.$element.on('click', options.itemSelector, function(e) {
        var $one = $(this),
          value = $one.prop("checked");
        self.selectRow($one, value);
        e.stopPropagation();
      });

      self.$element.on('change', options.itemSelector, function() {
        var $all = self.$element.find(options.allSelector),
          $row = self.getItems(),
          total = $row.length,
          checked = self.getSelected().length;

        if (total === checked) {
          $all.prop('checked', true);
        } else {
          $all.prop('checked', false);
        }

        self._trigger('change', checked);

        if (typeof options.callback === 'function') {
          options.callback.call(this);
        }
      });

      if (options.rowSelectable) {
        self.$element.on('click', options.rowSelector, function(e) {
          if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !$(e.target).parent("div.checkbox-custom").length) {
            var $checkbox = $(options.itemSelector, this),
              value = $checkbox.prop("checked");
            $checkbox.prop("checked", !value);
            self.selectRow($checkbox, !value);
          }
        });
      }
    },

    selectRow: function(item, value) {
      if (value) {
        item.parents(this.options.rowSelector).addClass(this.options.rowActiveClass);
      } else {
        item.parents(this.options.rowSelector).removeClass(this.options.rowActiveClass);
      }
    },

    getItems: function() {
      return this.$element.find(this.options.itemSelector);
    },

    getSelected: function() {
      return this.getItems().filter(':checked');
    },

    _trigger: function(eventType) {
      var method_arguments = Array.prototype.slice.call(arguments, 1),
        data = [this].concat(method_arguments);

      // event
      this.$element.trigger(pluginName + '::' + eventType, data);

      // callback
      eventType = eventType.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      });
      var onFunction = 'on' + eventType;
      if (typeof this.options[onFunction] === 'function') {
        this.options[onFunction].apply(this, method_arguments);
      }
    },
  };

  $.fn[pluginName] = function(options) {
    if (typeof options === 'string') {
      var method = options;
      var method_arguments = Array.prototype.slice.call(arguments, 1);

      if (/^\_/.test(method)) {
        return false;
      } else if ((/^(get)/.test(method))) {
        var api = this.first().data(pluginName);

        if (api && typeof api[method] === 'function') {
          return api[method].apply(api, method_arguments);
        }
      } else {
        return this.each(function() {
          var api = $.data(this, pluginName);
          if (api && typeof api[method] === 'function') {
            api[method].apply(api, method_arguments);
          }
        });
      }
    } else {
      return this.each(function() {
        if (!$.data(this, pluginName)) {
          $.data(this, pluginName, new Plugin(this, options));
        }
      });
    }
  };
})(window, document, jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var pluginName="asSelectable",Plugin=$[pluginName]=function(element,options){this.element=element,this.$element=$(element),this.options=$.extend({},Plugin.defaults,options,this.$element.data()),this.init()};Plugin.defaults={allSelector:".selectable-all",itemSelector:".selectable-item",rowSelector:"tr",rowSelectable:!1,rowActiveClass:"active",onChange:null},Plugin.prototype={constructor:Plugin,init:function(){var self=this,options=this.options;self.$element.on("change",options.allSelector,function(){var value=$(this).prop("checked");self.getItems().each(function(){var $one=$(this);$one.prop("checked",value).trigger("change",[!0]),self.selectRow($one,value)})}),self.$element.on("click",options.itemSelector,function(e){var $one=$(this),value=$one.prop("checked");self.selectRow($one,value),e.stopPropagation()}),self.$element.on("change",options.itemSelector,function(){var $all=self.$element.find(options.allSelector),$row=self.getItems(),total=$row.length,checked=self.getSelected().length;total===checked?$all.prop("checked",!0):$all.prop("checked",!1),self._trigger("change",checked),"function"==typeof options.callback&&options.callback.call(this)}),options.rowSelectable&&self.$element.on("click",options.rowSelector,function(e){if("checkbox"!==e.target.type&&"button"!==e.target.type&&"a"!==e.target.tagName.toLowerCase()&&!$(e.target).parent("div.checkbox-custom").length){var $checkbox=$(options.itemSelector,this),value=$checkbox.prop("checked");$checkbox.prop("checked",!value),self.selectRow($checkbox,!value)}})},selectRow:function(item,value){value?item.parents(this.options.rowSelector).addClass(this.options.rowActiveClass):item.parents(this.options.rowSelector).removeClass(this.options.rowActiveClass)},getItems:function(){return this.$element.find(this.options.itemSelector)},getSelected:function(){return this.getItems().filter(":checked")},_trigger:function(eventType){var method_arguments=Array.prototype.slice.call(arguments,1),data=[this].concat(method_arguments);this.$element.trigger(pluginName+"::"+eventType,data),eventType=eventType.replace(/\b\w+\b/g,function(word){return word.substring(0,1).toUpperCase()+word.substring(1)});var onFunction="on"+eventType;"function"==typeof this.options[onFunction]&&this.options[onFunction].apply(this,method_arguments)}},$.fn[pluginName]=function(options){if("string"!=typeof options)return this.each(function(){$.data(this,pluginName)||$.data(this,pluginName,new Plugin(this,options))});var method=options,method_arguments=Array.prototype.slice.call(arguments,1);if(/^\_/.test(method))return!1;if(!/^(get)/.test(method))return this.each(function(){var api=$.data(this,pluginName);api&&"function"==typeof api[method]&&api[method].apply(api,method_arguments)});var api=this.first().data(pluginName);return api&&"function"==typeof api[method]?api[method].apply(api,method_arguments):void 0}}(window,document,jQuery);;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function($) {
  "use strict";

  var pluginName = 'stickyHeader',
    defaults = {
      headerSelector: '.header',
      changeHeaderOn: 100,
      activeClassName: 'active-sticky-header',
      min: 50,
      method: 'toggle'
    };

  var Plugin = function(el, options) {
    this.isActive = false;
    this.init(options);
    this.bind();
  };

  Plugin.prototype = {
    init: function(options) {
      var $el = this.$el.css('transition', 'none'),
        $header = this.$header = $el.find(options.headerSelector).css({
          position: 'absolute',
          top: 0,
          left: 0
        });

      this.options = $.extend(true, {}, defaults, options, $header.data());
      this.headerHeight = $header.outerHeight();
      // this.offsetTop()
      // $el.css('transition','all .5s linear');
      // $header.css('transition','all .5s linear');
      this.$el.css('paddingTop', this.headerHeight);
    },

    _toggleActive: function() {
      if (this.isActive) {
        this.$header.css('height', this.options.min);
      } else {
        this.$header.css('height', this.headerHeight);
      }
    },


    bind: function() {
      var self = this;
      this.$el.on('scroll', function() {
        if (self.options.method === 'toggle') {
          if ($(this).scrollTop() > self.options.changeHeaderOn && !self.isActive) {
            self.$el.addClass(self.options.activeClassName);
            self.isActive = true;
            self.$header.css('height', self.options.min);
            self.$el.trigger('toggle:sticky', [self, self.isActive]);
          } else if ($(this).scrollTop() <= self.options.changeHeaderOn && self.isActive) {
            self.$el.removeClass(self.options.activeClassName);
            self.isActive = false;
            self.$header.css('height', self.headerHeight);
            self.$el.trigger('toggle:sticky', [self, self.isActive]);
          }
        } else if (self.options.method === 'scroll') {
          var offset = Math.max(self.headerHeight - $(this).scrollTop(), self.options.min);
          if (offset === self.headerHeight) {
            self.$el.removeClass(self.options.activeClassName);
          } else {
            self.$el.addClass(self.options.activeClassName);
          }
          self.$header.css('height', offset);
          self.$el.trigger('toggle:sticky', [self]);
        }
      });
    }
  };

  $.fn[pluginName] = function(options) {
    if (typeof options === 'string') {
      var method = options;
      var method_arguments = Array.prototype.slice.call(arguments, 1);
      if (/^\_/.test(method)) {
        return false;
      } else {
        return this.each(function() {
          var api = $.data(this, pluginName);
          if (api && typeof api[method] === 'function') {
            api[method].apply(api, method_arguments);
          }
        });
      }
    } else {
      return this.each(function() {
        if (!$.data(this, pluginName)) {
          $.data(this, pluginName, new Plugin(this, options));
        } else {
          $.data(this, pluginName).init(options);
        }
      });
    }
  };
})(jQuery);
;/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function($){"use strict";var pluginName="stickyHeader",defaults={headerSelector:".header",changeHeaderOn:100,activeClassName:"active-sticky-header",min:50,method:"toggle"},Plugin=function(el,options){this.isActive=!1,this.init(options),this.bind()};Plugin.prototype={init:function(options){var $el=this.$el.css("transition","none"),$header=this.$header=$el.find(options.headerSelector).css({position:"absolute",top:0,left:0});this.options=$.extend(!0,{},defaults,options,$header.data()),this.headerHeight=$header.outerHeight(),this.$el.css("paddingTop",this.headerHeight)},_toggleActive:function(){this.isActive?this.$header.css("height",this.options.min):this.$header.css("height",this.headerHeight)},bind:function(){var self=this;this.$el.on("scroll",function(){if("toggle"===self.options.method)$(this).scrollTop()>self.options.changeHeaderOn&&!self.isActive?(self.$el.addClass(self.options.activeClassName),self.isActive=!0,self.$header.css("height",self.options.min),self.$el.trigger("toggle:sticky",[self,self.isActive])):$(this).scrollTop()<=self.options.changeHeaderOn&&self.isActive&&(self.$el.removeClass(self.options.activeClassName),self.isActive=!1,self.$header.css("height",self.headerHeight),self.$el.trigger("toggle:sticky",[self,self.isActive]));else if("scroll"===self.options.method){var offset=Math.max(self.headerHeight-$(this).scrollTop(),self.options.min);offset===self.headerHeight?self.$el.removeClass(self.options.activeClassName):self.$el.addClass(self.options.activeClassName),self.$header.css("height",offset),self.$el.trigger("toggle:sticky",[self])}})}},$.fn[pluginName]=function(options){if("string"==typeof options){var method=options,method_arguments=Array.prototype.slice.call(arguments,1);return/^\_/.test(method)?!1:this.each(function(){var api=$.data(this,pluginName);api&&"function"==typeof api[method]&&api[method].apply(api,method_arguments)})}return this.each(function(){$.data(this,pluginName)?$.data(this,pluginName).init(options):$.data(this,pluginName,new Plugin(this,options))})}}(jQuery);