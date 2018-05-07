const BASE_URL = 'http://localhost:8080';
$(document).ready(() => {

  $(function () {
    $('[name=amount]').on('change blur',function () {
      let amount1 =  $("#amount1").val();
      let amount2 =  $("#amount2").val();
      let rate1 = $("#rate1").val();
      let rate2 = $("#rate2").val();
      let $this = $(this);
      if($this.attr('id') === 'amount2' ){
        $("#amount1").val(amount2*(rate1/rate2) > 0 ? amount2*(rate1/rate2): '');
      }else{
        $("#amount2").val(amount1*(rate2/rate1) > 0 ? amount1*(rate2/rate1) : '');
      }   
    });   
  });
  $(function () {
    $('#refreshrates').on('click',function () {
      $.get(BASE_URL+"/api/refreshrates").then(function(res){
        alert(JSON.parse(res).message)
      }).catch(function(error){
        console.log(error)
      })
    });   
  });
});
