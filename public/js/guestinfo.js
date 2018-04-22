$(function () {

  //=====================================將商店的地區名稱資訊儲存於前端js中==============================
  //取得option的方法
  // $("#invisible_storeid").children(i).text()
  //儲存地區資訊
  const store_area = [];
  //儲存商店名稱資訊
  const store_name = [];
  //儲存精簡過的地區資料
  //取得隱形select 中含有多少個 option 將值存入陣列中方便操作
  const store_len = $("#invisible_storearea").children().length;
  for (var i = 0; i < store_len; i++) {
    let reg = {
      id: $("#invisible_storearea option").eq(i).val(),
      area: $("#invisible_storearea option").eq(i).text()
    }
    store_area.push(reg);

    let reg2 ={
      id: $("#invisible_storenamed option").eq(i).val(),
      name: $("#invisible_storenamed option").eq(i).text()
    }
    store_name.push(reg2)
  }
  //======================當使用者選擇了商店地區=========================
  $("#store_area").change(function () {
    let guest_select = $("#store_area").val();
    $("#store_id option").remove();
    for(let i=0;i<store_len;i++){
      if(guest_select == store_area[i].area){
        $("#store_id").append($("<option></option>").attr("value", i+1).text(store_name[i].name));
      }
    }
    $("#real_store_id").val($("#store_id").val());
  })
//使用者選了商店
  $("#store_id").change(function(){
    $("#real_store_id").val("");
    $("#real_store_id").val($("#store_id").val());
  })

//======================當使用者直接按下送出個人資料假按鈕時====================
  $("#cannotSubmit").click(function(){
    alert("請先輸入您的發票號碼並點擊送出")
  })
  //=====================挑選時段部分==================================
  const items = {
    time: ['請挑選時段', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    test: ""
  }
  const example1 = new Vue({
    //更改vue的模板語法，不然會跟edge模板衝突
    delimiters: ['[[', ']]'],
    el: '#whattime',
    data: items,
    computed: {}
  })

  $("#select_time").change(function () {
    if ($('#select_time').val() == "請挑選時段") {
      alert("請選擇一個時段");
      $("#inputTime").val("");
    } else {
      $("#inputTime").val($("#select_time").val());
    }
  })

  //========================生日選單部分========================
  const birthday_Y = ["年"];
  const birthday_M = ["月"];
  const birthday_D = ["日"];
  for (var i = 1990; i < 2019; i++) {
    birthday_Y.push(i);
  }
  for (var i = 1; i < 13; i++) {
    birthday_M.push(i);
  }
  for (var i = 1; i < 32; i++) {
    birthday_D.push(i);
  }
  const birthdaydata = {
    birthday_Y: birthday_Y,
    birthday_M: birthday_M,
    birthday_D: birthday_D,
    birthday_Y2: "年",
    birthday_M2: "月",
    birthday_D2: "日"
  }
  const birdaybody = new Vue({
    delimiters: ['[[', ']]'],
    el: '#birdaybody',
    data: birthdaydata,
    computed: {
      combination_birthday: function () {
        return this.birthday_Y2 + "-" + this.birthday_M2 + "-" + this.birthday_D2
      }
    }
  })
})

