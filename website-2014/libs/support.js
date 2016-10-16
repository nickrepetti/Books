function Tab( tabSel, navSel, cache, action, subTabPrefix, pgName ) {
	this.tabSel = tabSel || ".pgtab";
	this.navSel = navSel || ".nav-list li";
	this.cache = cache || [0,0,0,0];
	this.action = action || ["","",""];
	this.subTabPrefix = subTabPrefix || "";
	this.pgName = pgName || "portfolio";
}

Tab.prototype.set = function( tab ) {
	var a, cnt, i;

	//  Hide all other divs except the one you want
	a = domSelect( this.tabSel );
	cnt = len( a );
	for ( i=0; i<cnt; i++ ) {
		a[i].style.display = "none";
	}
	a[tab].style.display = "block";

    //  Highlight the current tab
	a = domSelect( this.navSel );
	cnt = len( a );
	for ( i=0; i<cnt; i++ ) {
		a[i].className = "";
	}
	a[tab].className = "active";

	if ( ! this.cache[tab]  ) {
	  	domSet( this.subTabPrefix + "tab" + tab, remoteGet( this.pgName + ".htm?q=" + this.subTabPrefix + "tab" + tab ) );
		this.cache[ tab ] = 1;
	}

	if ( this.action[ tab ] ) {
		eval( this.action[ tab ] );
	}
}

function signin( ) {
	var err="";

	if ( ! inpt.uid.value.length ) {
		err += "Must provide your account USERID\n";
	}
	if ( ! inpt.pword.value.length ) {
		err += "Must provide your account PASSWORD\n";
	}

	if ( err.length ) {
		alert( "ERRORS DETECTED\n\n" + err );
		return;
	}

	inpt.q.value = 'l';
	inpt.submit( );
}