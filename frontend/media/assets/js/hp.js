(function(window, document, $) {
  'use strict';

  var $doc = $(document);
  
  $doc.on('click','#btn-explore',function(){
  	$('#block_explore >div').toggleClass('active')
  })

})(window, document, jQuery);
