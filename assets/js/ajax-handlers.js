$(document).ready(function(){





    $('#add').click(function(){

      let task = $('#task').val();
      let data = {task:task};

      console.log(task,data);

        $.ajax({
            url:'/',
            method:'POST',
            data:data,
            success:function(result)
                    {
                      $("ul").append("<li>"+task+"</li>");
                    }
        });

    });

    $('ul').on('click','li',function(){

      let item =$(this);
      let task = $(this).text();
      let data = {task:task};

      $.ajax({

          url:'/delete',
          method:'POST',
          data:data,
          success:function(result)
                  {
                    console.log('Result is : '+result);
                    item.remove();
                  }
      });

    });


});
