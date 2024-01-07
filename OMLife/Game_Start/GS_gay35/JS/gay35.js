//--first-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".first_QA input").click(function () {
  $(".second_QA").show();
});
//點選選項 = 1A選項DISABLE + 換圖
$(".first_QA #1B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});
//點選選項 = 1B選項DISABLE + 換圖
$(".first_QA #1A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose2.gif" />');
});

//--second-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".second_QA input").click(function () {
  $(".third_QA").show();
});
//點選選項 = 2A選項DISABLE + 換圖
$(".second_QA #2B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose3.gif" />');
});
//點選選項 = 2B選項DISABLE + 換圖
$(".second_QA #2A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});

//--third-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".third_QA input").click(function () {
  $(".fourth_QA").show();
});
//點選選項 = 3A選項DISABLE + 換圖
$(".third_QA #3B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose3.gif" />');
});
//點選選項 = 3B選項DISABLE + 換圖
$(".third_QA #3A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose2.gif" />');
});

//--fourth-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".fourth_QA input").click(function () {
  $(".fifth_QA").show();
});
//點選選項 = 4A選項DISABLE + 換圖
$(".fourth_QA #4B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});
//點選選項 = 4B選項DISABLE + 換圖
$(".fourth_QA #4A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose3.gif" />');
});

//--fifth-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".fifth_QA input").click(function () {
  $(".sixth_QA").show();
});
//點選選項 = 5A選項DISABLE + 換圖
$(".fifth_QA #5B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});
//點選選項 = 5B選項DISABLE + 換圖
$(".fifth_QA #5A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose2.gif" />');
});

//--sixth-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".sixth_QA input").click(function () {
  $(".seventh_QA").show();
});
//點選選項 = 6A選項DISABLE + 換圖
$(".sixth_QA #6B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose3.gif" />');
});
//點選選項 = 6B選項DISABLE + 換圖
$(".sixth_QA #6A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});

//--seventh-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".seventh_QA input").click(function () {
  $(".eighth_QA").show();
});
//點選選項 = 7A選項DISABLE + 換圖
$(".seventh_QA #7B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose2.gif" />');
});
//點選選項 = 7B選項DISABLE + 換圖
$(".seventh_QA #7A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});

//--eighth-------------------------------------------------------------------------//
//點選選項 = 出現下一個對話
$(".eighth_QA input").click(function () {
  $(".Next_Level").show();
});
//點選選項 = 8A選項DISABLE + 換圖
$(".eighth_QA #8B").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});
//點選選項 = 8B選項DISABLE + 換圖
$(".eighth_QA #8A").click(function () {
  $(this).siblings("input").attr("disabled", true);
  $(".Gay_defult").html('<img src="./img/gay35_pose1.gif" />');
});
