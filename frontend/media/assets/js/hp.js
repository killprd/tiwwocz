var xhr = false;
(function(window, document, $) {
  'use strict';

  var $doc = $(document);
  
  $doc.on('click','#btn-explore',function(){

  	if($('#block_explore >div').hasClass('active')){
  		
  		$('#block_explore >div').fadeOut();

  	}else{
  		$('#block_explore >div').fadeIn();

  	}
  	$('#block_explore >div').toggleClass('active');
  	$(this).toggleClass('active');
  })
  $doc.on('click','#block_explore >div ul >li >a',function(){
  	var _id = $(this).attr('data');
  	var _type = $(this).attr('type');
  	if(_type=="0"){
  		var _u = 'getcity'; 
  	}else{
  		var _u = 'getcountry';
  	}
  	if(xhr){
            xhr.abort();
    }
    xhr =  $.ajax({
        type:'GET',
        url:'../../../site/'+_u+'?id='+_id,
        data:{'data':_id},
        beforeSend: function(){      
            
        },
        success: function(data)
        {  
            $('#block_explore >div').html(data);
           
        }
    })


  	
  })

})(window, document, jQuery);
