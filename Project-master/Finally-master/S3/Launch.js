Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pageshow","#launchpage", onPageShow);

function onPageShow() {
	console.log("page shown");
    
	
      
	//run a query
	
    
    $(document).on("click", "#launch", recognize);
   
    
	


} 


function recognize(user) {
		console.log("launch button clicked");
        var email = $("#emailadress").val();
        var pass = $("#pass").val();

    

    Backendless.UserService.login( email, pass, true).then( function( loggedInUser ) {
        
        //user logged in
        
        window.location.href='nightmap.html';
        
   }).catch( function( error ) {
        
        //not worked 
        //user not logged in
       alert( error.message );
        //error message contains reason why not
        
   });
    
        /*console.log(user[0].username);
        var j = 0;
     for(var i = 0; i < user.length; i++){
         if(user==user[i].username)
             {
                 if(pass==user[i].password)
             {
             window.location.href='mappage.html';
                 j=1;
             }
                 else {
                     j=1;
                     alert("The password you entered is wrong, please enter again.");}
     }

}
    if(j==0&&user!=''&&pass!='')
     alert("This account does not exist.");*/
}





  
