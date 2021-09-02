//暂时直接引入，之后可单文件直接映入
import $ from "jquery";
import _, { drop } from "underscore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../less/common.less"; //全局样式

$(document).on("drop", (e) => {
  //拖离
  e.preventDefault();
});
$(document).on("dragleave", (e) => {
  //拖后放
  e.preventDefault();
});
$(document).on("dragenter", (e) => {
  //拖进
  e.preventDefault();
});
$(document).on("dragover", (e) => {
  //拖来拖去
  e.preventDefault();
});

$("body").on("drop",function (e) {
  const fileList = e.originalEvent.dataTransfer.files; //获取文件对象
  console.log(fileList);
});
$('.box').on();
