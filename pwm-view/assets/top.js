// スライダーの値を表示する
//

// slider1
(function(win, doc) {
  "use strict";

  var slider = doc.querySelector(".slider1"),
    display = new Display(".value1");

  slider.addEventListener(
    "input",
    function() {
      // ドラッグ中のイベント
      display.setValue(this.value);
    },
    false
  );

  slider.addEventListener(
    "change",
    function() {
      // マウスアップした際のイベント
      display.setValue(this.value);
    },
    false
  );

  function Display(selector) {
    var elm = doc.querySelector(selector);

    _init();

    function _init() {
      setValue(50);
    }

    function setValue(value) {
      elm.value = value - 0;
    }

    function getValue() {
      return elm.value - 0;
    }

    return {
      setValue: setValue,
      getValue: getValue
    };
  }
})(this, document);

// slider2
(function(win, doc) {
  "use strict";

  var slider = doc.querySelector(".slider2"),
    display = new Display(".value2");

  slider.addEventListener(
    "input",
    function() {
      // ドラッグ中のイベント
      display.setValue(this.value);
    },
    false
  );

  slider.addEventListener(
    "change",
    function() {
      // マウスアップした際のイベント
      display.setValue(this.value);
    },
    false
  );

  function Display(selector) {
    var elm = doc.querySelector(selector);

    _init();

    function _init() {
      setValue(1000);
    }

    function setValue(value) {
      elm.value = value - 0;
    }

    function getValue() {
      return elm.value - 0;
    }

    return {
      setValue: setValue,
      getValue: getValue
    };
  }
})(this, document);

// slider3
(function(win, doc) {
  "use strict";

  var slider = doc.querySelector(".slider3"),
    display = new Display(".value3");

  slider.addEventListener(
    "input",
    function() {
      // ドラッグ中のイベント
      display.setValue(this.value);
    },
    false
  );

  slider.addEventListener(
    "change",
    function() {
      // マウスアップした際のイベント
      display.setValue(this.value);
    },
    false
  );

  function Display(selector) {
    var elm = doc.querySelector(selector);

    _init();

    function _init() {
      setValue(1000);
    }

    function setValue(value) {
      elm.value = value - 0;
    }

    function getValue() {
      return elm.value - 0;
    }

    return {
      setValue: setValue,
      getValue: getValue
    };
  }
})(this, document);

// tab切り替え
$(".tab_label.on1").on("click", function() {
  var $th = $(this).index();
  $(".tab_label.on1").removeClass("is-active");
  $(".tab_panel.on1").removeClass("is-active");
  $(this).addClass("is-active");
  $(".tab_panel.on1")
    .eq($th)
    .addClass("is-active");
});

$(".tab_label.on2").on("click", function() {
  var $th = $(this).index();
  $(".tab_label.on2").removeClass("is-active");
  $(".tab_panel.on2").removeClass("is-active");
  $(this).addClass("is-active");
  $(".tab_panel.on2")
    .eq($th)
    .addClass("is-active");
});

// hz選択ボタン切り替え
$(".button.hz1").on("click", function() {
  var $th = $(this).index();
  $(".button.hz1").removeClass("is-outlined");
  $(".button.hz1").addClass("is-outlined");
  $(this).removeClass("is-outlined");
});

$(".button.hz2").on("click", function() {
  var $th = $(this).index();
  $(".button.hz2").removeClass("is-outlined");
  $(".button.hz2").addClass("is-outlined");
  $(this).removeClass("is-outlined");
});

$("#out-button").on("click", function(e) {
  var $out_button = $("#out-button");

  $(".button-div").append(
    '<a id="load-button" class="button is-danger is-loading ">Loading</a>'
  );
  $out_button.css("display", "none");

  setTimeout(function() {
    $out_button.css("display", "inline");
    $("#load-button").remove();
  }, 2000);

  e.preventDefault();
  var url = "http://localhost:8080/output";
  var interval = $("#interval").val();
  var hz1 = $(".hz1")
    .not(".is-outlined")[0]
    .innerHTML.replace("Hz", "");
  var duration1 = $("#duration1").val();
  var hz2 = $(".hz2")
    .not(".is-outlined")[0]
    .innerHTML.replace("Hz", "");
  var duration2 = $("#duration2").val();

  $.ajax({
    url: url,
    data: {
      interval: interval,
      hz1: hz1,
      hz2: hz2,
      duration1: duration1,
      duration2: duration2
    },
    dataType: "json"
  })
    .done(function(data) {})
    .fail(function() {});
});

// csv
var form = document.forms.myform;

form.myfile.addEventListener("change", function(e) {
  var result = e.target.files[0];

  //FileReaderのインスタンスを作成する
  var reader = new FileReader();

  //読み込んだファイルの中身を取得する
  reader.readAsText(result);

  //ファイルの中身を取得後に処理を行う
  reader.addEventListener("load", function() {
    //ファイルの中身をtextarea内に表示する
    form.output.textContent = reader.result;
  });
});
