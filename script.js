$(document).ready(function() {   
    $('#get_jpcv').click(function(e) {
        e.preventDefault();  //stop the browser from following          
        window.location.href = 'upload/JP_CV_FORM.zip';      
    });   
    
    $('#get_engcv').click(function(e) {
        e.preventDefault();  //stop the browser from following          
        window.location.href = 'upload/THIDA_HTAY_CV.pdf';      
    });  
});