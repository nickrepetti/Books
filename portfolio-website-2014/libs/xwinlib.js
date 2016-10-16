
function int(x){return(_int(x))}
var XINIT_ACTIVEWINDOWS=1;var XINIT_RIGHTCLICK=2;var XINIT_DESKTOP=4;var XINIT_DESKTOPDROP=8;var XINIT_ENABLEFX=16;var XINIT_OPENAJAX=32;var XINIT_ALL=0x0000FFFF;var XINIT_DEFAULTDIRS=0x00010000;var XINIT_IFRAMEFIX=0x00020000;var XINIT_ALL_NODROP=0x0000FFFF;XINIT_ALL_NODROP&=~XINIT_DESKTOPDROP;var xWinMaxNum=256;var xWinIntDomains="localhost;scrapplet;xwinlib.com;dbweb20.com";var xWinImageDir="/libs/support";var xWinThemesDir="/libs/themes";var xWinDefaultTheme="";var xWinBodyClass="smtxt";var xWinBodyColor="";var xWinTransLevel=60;var xWinBgColor="#F0F0F0";var xWinMoveOffset=8;var xWinContextSideClr="#A0A0A0";var xWinDefaultDisplay=1;var xWinMinProp=0;var xWinProperties=1;var xWinFtrBgColor="#404040";var xWinHdrBgColor="#404040";var xWinHdrBgImage="";var xWinFtrBgImage="";var xWinPropertyTheme=null;var xWinPropertyHandler=null;var xDropHandler=null;var xWinObjCreate=null;var xWinContextSysFunc=null;var xWinContextMenuFunc=null;var xLibContextMenuFunc=null;var WS_NORMAL=1;var WS_HIDDEN=2;var WS_VISIBLE=4;var WS_MINIMIZED=8;var WS_MAXIMIZED=16;var WS_HEADER=0x00000020;var WS_FOOTER=0x00000040;var WS_BORDER=0x00000080;var WS_BORDERTHICK=0x00000100;var WS_MOVEABLE=0x00000200;var WS_RESIZABLE=0x00000400;var WS_MINIMIZABLE=0x00000800;var WS_MAXIMIZABLE=0x00001000;var WS_UNDOCKABLE=0x00002000;var WS_SHAREMENU=0x00004000;var WS_CLOSE=0x00008000;var WS_SYSMENU=0x00010000;var WS_CONTEXTMENU=0x00020000;var WS_HELP=0x00040000;var WS_COVER=0x00080000;var WS_SHADOW=0x00100000;var WS_MODAL=0x00200000;var WS_TRANSPARENT=0x00400000;var WS_EXTERNAL=0x00800000;var WS_NOFOCUS=0x01000000;var WS_DRAG=0x02000000;var WS_DROP=0x04000000;var WS_ALWAYSONTOP=0x08000000;var WS_CHILD=0x10000000;var WS_MAGNETIC=0x20000000;var WS_NOTSHAREABLE=0x40000000;var WSX_ROLLUP=0x00000001;var WS_POPUP=WS_NORMAL|WS_HEADER|WS_BORDERTHICK|WS_MOVEABLE|WS_CLOSE;var WS_MODALDIALOG=WS_NORMAL|WS_HEADER|WS_BORDERTHICK|WS_MOVEABLE|WS_CLOSE|WS_MODAL;var DISP_NORMAL=1;var DISP_CENTERED=2;var DISP_DEFAULT=4;var DISP_EVENTPOSITION=8;var DISP_ANIM_TOOLTIP=16;var DISP_FADE_IN=32;var DISP_FADE_OUT=64;var DISP_NOAUTOCLOSE=128;var DISP_NOPROGRESS=256;var FORMAT_COMMAS=1;var FORMAT_SUFFIX=2;var FORMAT_CURRENCY=4;var FORMAT_MINUTES=8;var FORMAT_SECONDS=16;var FORMAT_FSIZE=32;var DESKTOP_LAYOUT=1;var DESKTOP_OBJECTS=2;var DESKTOP_OBJMOVE=4;var DESKTOP_INCLUDESYS=8;var MOVE_INSTANT=1;var MOVE_ANIMATE=2;var MOVE_NORESIZE=4;var MOVE_SAVEPOS=8;var STATE_ON=1;var STATE_OFF=0;var STATE_TOGGLE=-1;var OTYPE_TEXTBLOCK=1;var OTYPE_TEXTBLOCK_TRANS=2;var OTYPE_TEXTCAPTION=3;var OTYPE_TEXTHEADLINE=4;var OTYPE_TEXTFOOTNOTE=5;var OTYPE_IMAGE=10;var OTYPE_BACKGROUND=11;var OTYPE_MUSIC=20;var OTYPE_VIDEO=30;var OTYPE_WEB=40;var OTYPE_FEED=41;var OTYPE_FRIENDS=50;var OTYPE_GUESTBOOK=55;var OTYPE_PROFILE=56;var OTYPE_CONTACT=57;var OTYPE_GALLERY=60;var OTYPE_WIDGET=70;var OTYPE_DOCUMENT=71;var OTYPE_FLASH=72;var OTYPE_SCRIPT=73;var OTYPE_NAVIGATION=74;var OTYPE_DROPZONE=75;var OTYPE_HTMLBLOCK=76;var OTYPE_MAP=77;var OTYPE_HOTSPOT=78;var OTYPE_BUTTON=80;var OTYPE_LINK=81;var OTYPE_OBJECT=90;var OTYPE_OAWIDGET=91;var OTYPE_FORM_TEXT=100;var OTYPE_FORM_TEXTAREA=101;var OTYPE_FORM_SELECT=102;var OTYPE_FORM_FILE=103;var OTYPE_FORM_CHECKBOX=104;var OTYPE_FORM_RADIO=105;var OTYPE_FORM_PASSWORD=106;var OTYPE_FORM_HIDDEN=107;var OBJ_AJAXCONTENT=1;var OBJ_CLEARONCLOSE=2;var OBJ_ROLLDOWN=4;var OBJ_ROLLUP=8;var OBJ_ROLLRIGHT=16;var OBJ_ROLLLEFT=32;var MOUSE_BUTTONLEFT=1;var MOUSE_BUTTONCENTER=2;var MOUSE_BUTTONRIGHT=4;var MOUSE_DOWN=8;var MOUSE_UP=16;var ERR_NONAME=1001;var ERR_ALREADYEXISTS=1002;var ERR_TOOMANYWINDOWS=1003;var KEY_ALT=18;var KEY_ARROWLEFT=37;var KEY_ARROWUP=38;var KEY_ARROWRIGHT=39;var KEY_ARROWDOWN=40;var KEY_BACKSPACE=8;var KEY_CAPSLOCK=20;var KEY_CTRL=17;var KEY_DELETE=46;var KEY_END=35;var KEY_ENTER=13;var KEY_ESCAPE=27;var KEY_F1=112;var KEY_F2=113;var KEY_F3=114;var KEY_F4=115;var KEY_F5=116;var KEY_F6=117;var KEY_F7=118;var KEY_F8=119;var KEY_F9=120;var KEY_F10=121;var KEY_F11=122;var KEY_F12=123;var KEY_HOME=36;var KEY_INSERT=45;var KEY_NUMLOCK=144;var KEY_PAGEUP=33;var KEY_PAGEDOWN=34;var KEY_SHIFT=16;var KEY_SPACE=32;var KEY_TAB=9;var KEY_WINDOWS=91;var DP_WINDOWDATA=1;var DP_DESKTOPDATA=2;var DP_DELIMITED=16;var DP_JSON=32;var DP_JSOBJ=64;var DP_XML=128;var DP_NAMEVALUE=256;var DP_RAW=512;var DP_SOURCE=1024;var DP_QSTR=2048;var DP_XOBJ=4096;var DATA_UNKNOWN=0;var DATA_IMAGE=1;var DATA_VIDEO=2;var DATA_MUSIC=4;var DATA_DOCUMENT=8;var DATA_FEED=16;var DATA_HTML=32;var DATA_JS=64;var DATA_CSS=128;var DATA_XML=256;var DATA_ZIP=512;var DATA_APP=1024;var DATA_LINK=2048;var AJAX_GET=1;var AJAX_POST=2;var AJAX_SYNCH=4;var AJAX_ASYNCH=8;var AJAX_DELIMITED=DP_DELIMITED;var AJAX_JSON=DP_JSON;var AJAX_JSOBJ=DP_JSOBJ;var AJAX_XML=DP_XML;var AJAX_NAMEVALUE=DP_NAMEVALUE;var AJAX_RAW=DP_RAW;var AJAX_SOURCE=DP_SOURCE;var AJAX_QSTR=DP_QSTR;var XLIB_SIG="$xLib$";var XLIB_SIGBODY="xl-b";var XLIB_SIG_HEADER="xl-h"
var XLIB_SIG_BUTTON="xl-btn"
var xWinList=[null];var xWinZorder=1000;var xWinIsTooltip=null;var xScrollPos=null;var xWinTouch=0;function ltrim(s){while(s.substring(0,1)==' '){s=s.substring(1,s.length);}
return(s);}
function rtrim(s){while(s.substring(s.length-1,s.length)==' '){s=s.substring(0,s.length-1);}
return(s);}
function untrim(str,num,pad){if(!str){return str;}
var l=len(str);if(l==num){return(str);}
if(l<num){return(left(str,num));}
return(pad(str,num,pad,2));}
function right(s,n){if(!isvar(s)){return("");}
if(n<=0){return("");}
s=String(s);if(n>=s.length){return(s);}
return s.substring(s.length,s.length-n);}
function lower(s){return String(s).toLowerCase();}
function alltrim(s){return ltrim(rtrim(s));}
function upper(s){return String(s).toUpperCase();}
function gmtTime(){var d=new Date();return(d.getTime());}
function secondsToCounter(secs){var d=0,h=0,m=0,s=0;if(secs>0){d=_int(secs/(60*60*24));secs=secs%(60*60*24);h=_int(secs/(60*60));secs=secs%(60*60);m=_int(secs/(60));secs=secs%60;s=secs;}
return(right("000"+d,d>=100?3:2)+":"+right("00"+h,2)+":"+right("00"+m,2)+":"+right("00"+s,2));}
function strat(s,s2){return(s2.indexOf(s)+1);}
function strati(s,s2){return strat(upper(s),upper(s2));}
function strall(str,ListOfChars,CaseSensitive){return(strincludesall(str,ListOfChars,CaseSensitive));}
function strany(str,ListOfChars,CaseSensitive){return(strincludesany(str,ListOfChars,CaseSensitive));}
function strnone(str,ListOfChars,CaseSensitive){return(!strincludesall(str,ListOfChars,CaseSensitive));}
function strincludesall(str,ListOfChars,CaseSensitive){var cnt,i,rval;cnt=len(ListOfChars);for(i=1;i<=len(ListOfChars);i++){if(CaseSensitive){rval=strat(substr(ListOfChars,i,1),str);}
else{rval=strati(substr(ListOfChars,i,1),str);}
if(!rval){return(0);}}
return(1);}
function strincludesany(str,ListOfChars,CaseSensitive){var cnt,i,rval;cnt=len(ListOfChars);for(i=1;i<=len(ListOfChars);i++){if(CaseSensitive){rval=strat(substr(ListOfChars,i,1),str);}
else{rval=strati(substr(ListOfChars,i,1),str);}
if(rval){return(1);}}
return(0)}
function stripFormat(str,obj){var o;if(isvar(obj)){o=obj;}
else{o=domAdd(null,"div","_strip_");}
domSet(o,str);str=domGetText(o);if(!isvar(obj)){domDelete(o)}
return(str);}
function strexcludesall(str,ListOfChars,CaseSensitive){return(!strincludesall(str,ListOfChars,CaseSensitive));}
function strexcludesany(str,ListOfChars,CaseSensitive){return(!strincludesany(str,ListOfChars,CaseSensitive=0));}
function dec2hex(n,c){var v=n.toString(16);if(c){v=right("00000000"+v,c);}
return(v);}
function domObject(objname,oscope){if(oscope){return oscope.getElementById(objname);}
return document.getElementById(objname);}
function domSelect(selector,filter,results){return(Sizzle(selector,filter,results));}
function btnDefault(e,btn){if(xlib.eventKey(e)==13){xlib.eventCancel(e);if(typeof(btn)=="string"){btn=domObject(btn);}
btnClick(btn);}}
function btnClick(btn){var err;try{btn.click();}
catch(err){btn.onclick();}}
function cbCheck(obj,flag){if(typeof(obj)=="string"){obj=domObject(obj);}
if(!obj.disabled){if(flag!=null){obj.checked=flag;}
else{obj.checked=(!obj.checked);}}}
function len(s){if(s==null){return(0);}
return s.length;}
function chr(n){return(String.fromCharCode(n));}
function str(c){return(c.charCodeAt(0));}
function chrcount(c,s){var i,x=0,cnt;cnt=len(s);for(i=0;i<cnt;i++){if(s.charAt(i)==c){x++;}}
return(x);}
function counterToSeconds(tme){var a,cnt,i,j,ttl=0;a=tme.split(":");cnt=len(a);aSecs=[1,60,3600,86400];for(i=cnt-1,j=0;i>=0;i--,j++){ttl+=_int(a[i])*aSecs[j];}
return(ttl);}
function dateFormat(dte,fstr){var a,d;if(!isvar(fstr)){fstr=dte;dte=new Date();}
if(!isvar(fstr)){fstr="MM-DD-YYYY HH:MN:SS";}
if(typeof(dte)=="string"){if(chrcount("-",dte)){a=dte.split("-");dte=new Date(_int(a[2]),_int(a[0])-1,_int(a[1]));}
else{dte=keytoobj(dte);}}
d=new xDate(dte);return(d.format(fstr));}
function dateSetFromStr(dte,tme){var d,a;d=new Date();a=dte.split("-");d.setFullYear(_int(a[2]));d.setMonth(_int(a[0])-1);d.setDate(_int(a[1]));if(isvar(tme)){a=tme.split(":");d.setHours(_int(a[0]));d.setMinutes(_int(a[1]));d.setSeconds(_int(a[2]));}
return(d);}
function dateDayOfWeek(dte){var a=dte.split("-");dte=a[2]+"/"+a[0]+"/"+a[1];var d=new Date(dte+" 12:00:00 AM");return(d.getDay()+1);}
function dateFirstOfMonth(dte){var a=dte.split("-");return(a[0]+"-01-"+a[2]);}
function dateDaysInMonth(dte){var a=dte.split("-");return(new Date(_int(a[2]),_int(a[0]),0).getDate());}
function dateMonthAdd(dte,x){var a,d;a=dte.split("-");d=new Date(_int(a[2]),_int(a[0]),_int(a[1]));d.setMonth(d.getMonth()+(x-1));d=new xDate(d);return(d.format("MM-DD-YYYY"));}
function dateDay(dte){var a=dte.split("-");return(_int(a[1]));}
function dateMonth(dte){var a=dte.split("-");return(_int(a[0]));}
function dateYear(dte){var a=dte.split("-");return(_int(a[2]));}
function NormalizeDate(dte,obj){var newdte;if(strempty(dte)){return("");}
var cnt=len(dte);var c="";var ExitFlag=0;for(var i=0;i<cnt;i++){c=dte.charAt(i);switch(c){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":break
default:ExitFlag=1;}
if(ExitFlag){break}}
if(!ExitFlag){switch(len(dte)){case 6:case 8:break
default:alert("Invalid date format specified.\nPlease use mm-dd-yyyy.");if(typeof(obj)=="object"){obj.focus();}
return("");}
newdte=Array();newdte[0]=left(dte,2);newdte[1]=substr(dte,3,2);newdte[2]=right(dte,2);}
else{var sdte=new String(dte);newdte=sdte.split(c);}
if(!isNumeric(newdte[0])){alert("Invalid date format specified.\nPlease use mm-dd-yyyy.");if(typeof(obj)=="object"){obj.focus();}
return("");}
if(!isNumeric(newdte[1])){alert("Invalid date format specified.\nPlease use mm-dd-yyyy.");if(typeof(obj)=="object"){obj.focus();}
return("");}
if(!isNumeric(newdte[2])){alert("Invalid date format specified.\nPlease use mm-dd-yyyy.");if(typeof(obj)=="object"){obj.focus();}
return("");}
var m=right("0"+newdte[0],2);var d=right("0"+newdte[1],2);var curyr=new Date();curyr=parseInt(right(""+curyr.getFullYear(),2),10);_m=(+m)
if((_m>12)||(_m<1)){alert("Invalid month specified");if(typeof(obj)=="object"){obj.focus();}
return("");}
var daysinMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);var month=_m;var mDays=daysinMonth[month-1];var y=parseInt(newdte[2],10);if(month==2){if(!(y%4)){mDays=29;}}
if((+d)>mDays){alert("Invalid day specified");if(typeof(obj)=="object"){obj.focus();}
return("");}
if(y>99){y=newdte[2];}
else if(y>curyr+5){y="19"+right("0"+newdte[2],2);}
else{y="20"+right("0"+newdte[2],2);}
return(m+"-"+d+"-"+y);}
function normalizeNumberStr(s){var i,c,str='';for(i=0;i<s.length;i++){c=s.charAt(i);if((c<"0"||c>"9")&&(c!=".")&&(c!="-")){continue;}
str+=c;}
return(str);}
function keytodate(key){return(substr(key,5,2)+"-"+substr(key,7,2)+"-"+left(key,4));}
function keytoobj(key){var yr,mo,dy,hr,mn,sc;yr=left(key,4);mo=substr(key,5,2);dy=substr(key,7,2);if(len(key)==8){dte=new Date(_int(yr),_int(mo)-1,_int(dy));}
else{hr=substr(key,9,2);mn=substr(key,11,2);sc=substr(key,13,2);dte=new Date(_int(yr),_int(mo)-1,_int(dy),_int(hr),_int(mn),_int(sc));}
return(dte);}
function datetokey(dte){return(substr(dte,7,4)+left(dte,2)+substr(dte,4,2));}
function utc2local(utc,formatStr){var d=new Date();utc-=d.getTimezoneOffset()*60000;xdte=new xDate(utc);if(!isvar(formatStr)){formatStr="MMM DD, YYYY HH:MN ap";}
return(xdte.format(formatStr));}
function strreplicate(s,l){var str="";if(!isvar(l))return(s);if(strempty(s))return(s);if(l<1)return(s);while(len(str)<l){str+=s;}
return(left(str,l));}
function strRemove(str,chars,isCase){var i,cnt,c;cnt=len(chars);for(i=1;i<=cnt;i++){c=substr(chars,i,1);if(isCase){str=strswap(str,c,"");}
else{str=strswapi(str,c,"");}}
return(str);}
function strswap(s,s1,s2){var p=0;if(!s){return(s);}
while((p=s.indexOf(s1,p))>-1){s=s.substring(0,p)+s2+s.substring(p+s1.length);p+=s2.length;}
return(s);}
function strswapi(s,s1,s2){var p=0;s1=lower(s1);while((p=lower(s).indexOf(s1,p))>-1){s=s.substring(0,p)+s2+s.substring(p+s1.length);p+=s2.length;}
return(s);}
function domAdd(oparent,el,id){var obj;obj=document.createElement(el);obj.id=id;if(oparent){oparent.appendChild(obj);}
else{document.body.appendChild(obj);}
return(obj);}
function domBorderSet(o,style,width,clr){o.style.borderStyle=style;o.style.borderWidth=width;o.style.borderColor=clr;}
function domDeleteIE(d){var a,i,l,n,o;if(d){a=d.attributes;if(a){l=a.length;for(i=0;i<l;i+=1){if(a[i]){n=a[i].name;if(typeof(d[n])=='function'){d[n]=null;}}}}
a=d.childNodes;if(a){l=a.length;for(i=0;i<l;i+=1){domDeleteIE(a[i]);}}}}
function domDelete(obj){if(!obj){return;}
if(xlib.IsIE&&obj){domDeleteIE(obj);}
try{if(obj){obj.parentNode.removeChild(obj);}}catch(e){}}
function domImageSet(o,src,FilterOnly){if(typeof(o)=="string"){o=domObject(o);}
if(strati(".png",src)&&xlib.pngfix){if(!FilterOnly){o.src=xWinImageDir+"/trans.gif";}
o.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')";}
else{o.src=src;}}
function domPurge(d,OnlyChildren){var a,i,l,n;try{a=d.attributes}
catch(e){return;}
if(!OnlyChildren){if(a){l=a.length;for(i=0;i<l;i+=1){try{n=a[i].name;if(typeof d[n]=='function'){d[n]=null;}}catch(e){}}}}
a=d.childNodes;if(a){l=a.length;for(i=0;i<l;i+=1){try{domPurge(d.childNodes[i]);}
catch(e){}}}}
function domGet(o,flag){return(domInnerHTML_get(o,flag));}
function domGetText(o){if(typeof(o)=="string"){o=domObject(o);}
if(!o){return("");}
if(document.all){return(o.innerText);}
return(o.textContent);}
function domSet(o,val,OnlyChildren){return(domInnerHTML_set(o,val,OnlyChildren));}
function domInnerHTML_get(o,flag){if(typeof(o)=="string"){o=domObject(o);}
if(!o){return("");}
if(!flag){return o.innerHTML;}
var data=o.innerHTML;domInnerHTML_set(o,"");return(data)}
function domInnerHTML_set(o,val,OnlyChildren){if(typeof(o)=="string"){o=domObject(o);}
if(!o){return;}
if(o.innerHTML.length){domPurge(o,OnlyChildren);}
o.innerHTML=val;}
function domInsertAfter(refNode,newNode){refNode.parentNode.insertBefore(newNode,refNode.nextSibling);}
function domOuterHTML_get(o){if(typeof(o)=="string"){o=domObject(o);}
if(!o){return("");}
return o.outerHTML;}
function domOuterHTML_set(o,val,OnlyChildren){if(typeof(o)=="string"){o=domObject(o);}
if(!o){return;}
if(o.outerHTML.length){domPurge(o,OnlyChildren);}
o.outerHTML=val;}
function domObjByName(name){document.getElementsByName(name);}
function enterKey(e,f){if(xlib.eventKey(e)==13){f();return(false);}
return(true);}
function fileExtension(fname){var x;fname=strswap(fname,"\\","/")
x=chrcount("/",fname);if(x){fname=strextract(fname,"/",x+1);}
return(strextract(fname,".",chrcount(".",fname)+1));}
function fileName(fname){var x;fname=strswap(fname,"\\","/")
x=chrcount("/",fname);if(x){fname=strextract(fname,"/",x+1);}
x=stratlast(".",fname);if(!x){return(fname);}
return(left(fname,x-1));}
function findPos(obj){var x,y;if(typeof(obj)=="string"){obj=domObject(obj);}
x=findPosX(obj);y=findPosY(obj);return({"x":x,"y":y});}
function findPosX(obj){var curleft=0;if(typeof(obj)=="string"){obj=domObject(obj);}
if(obj.offsetParent){while(1){curleft+=obj.offsetLeft;if(!obj.offsetParent){break;}
obj=obj.offsetParent;}}
else if(obj.x){curleft+=obj.x;}
return(curleft);}
function findPosY(obj){var curtop=0;if(typeof(obj)=="string"){obj=domObject(obj);}
if(obj.offsetParent){while(1){curtop+=obj.offsetTop;if(!obj.offsetParent){break;}
obj=obj.offsetParent;}}
else if(obj.y){curtop+=obj.y;}
return(curtop);}
function formDataToString(formName){var a,i,cnt,s="";a=domSelect("form[name="+formName+"] input");cnt=len(a);for(i=0;i<cnt;i++){switch(lower(a[i].type)){case"checkbox":s+=a[i].name+"="+(a[i].checked?(strempty(a[i].value)?"on":a[i].value):"")+"&";break;case"radio":if(a[i].checked){s+=a[i].name+"="+jsEncode(a[i].value)+"&";}
break;case"text":default:s+=a[i].name+"="+jsEncode(a[i].value)+"&";break;}}
a=domSelect("form[name="+formName+"] select");cnt=len(a);for(i=0;i<cnt;i++){s+=a[i].name+"="+jsEncode(lbCurSelValue(a[i]))+"&";}
a=domSelect("form[name="+formName+"] textarea");cnt=len(a);for(i=0;i<cnt;i++){s+=a[i].name+"="+jsEncode(a[i].value)+"&";}
if(len(s)){s=strcrop(s,1);}
return(s);}
function getTimeZone(){var d,tz,x,y;d=new Date();tz=""+-1*(d.getTimezoneOffset()/60);x=strextract(tz,".",1);y=strextract(tz,".",2);tz=x+"."+(strempty(y)?"0":y);return(tz);}
function jsDecode(str,decFlag){var d;try{d=decodeURIComponent(str);if(decFlag){d=strswap(d,"%20"," ");d=strswap(d,"&#32"," ");}
return(d);}
catch(e){return(strswap(strswap(strswap(unescape(str),"%2B","+"),"&#32"," "),"%20"," "));}}
function jsEncode(str,encFlag){if(isvar(encFlag)&&encFlag){str=strswap(str," ","&#32");}
var d=encodeURIComponent(str);d=strswap(d,"'","%27");return(d);}
function lbAdd(o,id,val){if(typeof(o)=="string"){o=domObject(o);}
o[o.length]=new Option(val,id);}
function lbInsert(o,id,val,index,maxnum){var a,b,cnt,i,j;if(typeof(o)=="string"){o=domObject(o);}
cnt=o.length;if(index+1>cnt){lbAdd(o,id,val);return;}
cnt++;a=o.options;b=[];x=0;for(i=0,j=0;i<cnt;i++){if(maxnum&&(j>=maxnum)){break;}
if(i==index){b[j++]=[val,id];x=1;continue;}
b[j++]=[a[i-x].text,a[i-x].id];}
o.length=0;cnt=len(b);for(i=0;i<cnt;i++){o[i]=new Option(b[i][0],b[i][1]);}}
function lbCurSelValue(o,IsText){if(!isvar(o))return;if(typeof(o)=="string"){o=domObject(o);}
if(o.selectedIndex<0){return("");}
return(IsText?o[o.selectedIndex].text:o[o.selectedIndex].value);}
function lbCurSelText(o){if(!isvar(o))return;return lbCurSelValue(o,1);}
function lbDelete(o,item){var cnt,i;cnt=o.length;if(item<0||item>=cnt){return(0);}
for(i=item;i<cnt-1;i++){o[i]=new Option(o[i+1].text,o[i+1].value);}
o.length=cnt-1;return(1);}
function iFrameFix(id){var o,h;o=domObject(id);if(document.getElementById&&(!document.all)){h=o.contentDocument.body.scrollHeight;o.style.height=h;}
else if(document.all){h=document.frames(id).document.body.scrollHeight;domObject(id).style.height=h;}}
function iframeDocument(name){var o=domObject(name);var doc=o.contentWindow;if(doc==undefined||doc==null){doc=o.contentWindow.document;}
return(doc);}
function iframeBody(name){var o=iframeDocument(name);if(!o){return;}
return(o.getElementsByTagName("body").item(0));}
function _int(n){try{if(strempty(""+n)){return(0);}
return parseInt(n,10);}
catch(e){return(0);}}
function hex2dec(hx){return parseInt(hx,16);}
function isAlpha(s){var i,c;for(i=0;i<s.length;i++){c=s.charAt(i);if((c<"a"||c>"z")&&(c<"A"||c>"Z")){if(c!=" "){return(0);}}}
return(1);}
function isNumeric(s){var i,c;for(i=0;i<s.length;i++){c=s.charAt(i);if((c<"0"||c>"9")&&(c!=".")&&(c!="-")){return(0);}}
return(1);}
function isUrl(url){if((upper(left(url+"       ",7))=="HTTP://")||(upper(left(url+"        ",8))=="HTTPS://")){return(1);}
if(strat("\n",url)||strat("<",url)){return(0);}
if(strat(" ",alltrim(url))){return(0)}
if(strati("javascript:",url)){return(0)}
return(1);}
function isvar(v){if(typeof(v)=="undefined"){return(0);}
if(v==null){return(0);}
return(1);}
function isImageOk(oimg){if(!oimg.complete){return false;}
if(typeof oimg.naturalWidth!="undefined"&&oimg.naturalWidth==0){return false;}
return true;}
function jsInclude(jsFile){var scriptNode=document.createElement('script');scriptNode.type='text/javascript';scriptNode.src=jsFile;document.getElementsByTagName('head')[0].appendChild(scriptNode);}
function lbSearchText(o,s,IsSet){if(typeof(o)=="string"){o=domObject(o);}
for(var i=0;i<o.length;i++){if(o.options[i].text==s){if(IsSet){o[i].selected=true;}
return(i);}}
return(-1);}
function lbSearchValue(o,s,IsSet){if(typeof(o)=="string"){o=domObject(o);}
for(var i=0;i<o.length;i++){if(o.options[i].value==s){if(IsSet){o[i].selected=true;}
return(i);}}
return(-1);}
function lbSelectedMulti(o){var a=[],cnt,i;if(typeof(o)=="string"){o=domObject(o);}
cnt=len(o);for(i=0;i<cnt;i++){if(o[i].selected){a[len(a)]=o[i];}}
return(a);}
function lbSelectedMultiText(o){var a=[],cnt,i;a=lbSelectedMulti(o);cnt=len(a);for(i=0;i<cnt;i++){a[i]=o[i].text;}
return(a);}
function lbSelectedMultiValue(o){var a=[],cnt,i;a=lbSelectedMulti(o);cnt=len(a);for(i=0;i<cnt;i++){a[i]=a[i].value;}
return(a);}
function lbSelectMultiValue(o,a){var cnt,i,x;if(typeof(o)=="string"){o=domObject(o);}
if(typeof(a)=="string"){a=a.split(",");}
cnt=len(a);for(i=0;i<cnt;i++){x=lbSearchValue(o,a[i]);if(x>-1){o.options[x].selected=true;}}}
function left(s,n){if(!isvar(s)){return("");}
if(n<=0){return("");}
s=String(s);if(n>=s.length){return(s);}
return s.substring(0,n);}
function random(range){return Math.floor(Math.random()*(range+1));}
function rounddec(val,dec){var sChng,result,factor,i;sChng=(val<0?1:0);val=(sChng?-1*val:val);factor=1;if(dec>0){for(i=1;i<=dec;i++){factor=factor*10;}}
else if(dec<0){for(i=1;i<=Math.abs(dec);i++){factor=factor/10;}}
result=(val*factor)+0.5;result=_int(result)/factor;return((sChng?(-1*result):result));}
function strabbr(s,l){if(len(s)<=l){return(s);}
return(left(s,l)+"...");}
function stratall(substr,s){var i=1,x,a=[];while(1){x=stratnext(substr,s,i++);if(!x){break;}
a[len(a)]=x}
return(a)}
function stratalli(substr,s){return(stratall(upper(substr),upper(s)))}
function stratnext(sub,s,n){var i,ttl=0,x;if(strcount(sub,s)<n){return(0);}
for(i=1;i<=n;i++){x=strat(sub,s);ttl+=x;s=right(s,len(s)-x);}
return(ttl);}
function stratlast(sub,s){var x=strcount(sub,s);return stratnext(sub,s,x);}
function stratlasti(sub,s){var x;sub=upper(sub);s=upper(s);x=strcount(sub,s);return stratnext(sub,s,x);}
function stratnexti(sub,s,n){return stratnext(upper(sub),upper(s),n);}
function strcapfirst(s,nolower){if(nolower){return(upper(left(s,1))+right(s,len(s)-1));}
return(upper(left(s,1))+lower(right(s,len(s)-1)));}
function strcommas(n){var a,v,reg;n=""+n;a=n.split(".");v=a[0];reg=/(\d+)(\d{3})/;while(reg.test(v)){v=v.replace(reg,'$1'+','+'$2');}
return(v+(a[1]&&a[1].length?"."+a[1]:""));}
function strcount(sub,s){if(!sub){return 0;}
var r=0;var pos=s.indexOf(sub,0);while(pos>-1){r++;pos=s.indexOf(sub,pos+1);}
return(r);}
function strcounti(sub,s){return strcount(upper(sub),upper(s));}
function strcrop(s,n){var cnt;if(typeof(s)!="string"){return(s);}
cnt=len(s);if(n>=cnt){return("");}
return(left(s,cnt-n));}
function strcropl(s,n){var cnt;if(typeof(s)!="string"){return(s);}
cnt=len(s);if(n>=cnt){return("");}
return(right(s,cnt-n));}
function strempty(val){if(!val){return(1);}
return(alltrim(val).length?0:1);}
function strextract(s,delim,n){var a=String(s).split(delim);if(len(a)<n){return("");}
return a[n-1];}
function substr(s,start,numchars){return s.substring(start-1,start+numchars-1);}
function substrswap(s,x,y,s2){return(left(s,x-1)+s2+right(s,len(s)-y+1));}
function tableCellObj(otable,row,col){return otable.rows[row-1].cells[col-1];}
function tableRowObj(otable,row){return otable.rows[row-1];}
function token(s,token,x){if(len(token)==1){return(strextract(s,delim,x));}
a=stratall(token,s);cnt=len(a);if(!cnt){if(len(token)==2){return(strextract(strextract(s,left(token,1),x+1),right(token,1),1));}
return("");}
if(x>cnt+1){return("");}
if(x==1){return(left(s,a[0]-1));}
if(cnt==1&&x==2){return(right(s,len(s)-(a[0]+len(token)-1)));}
if(cnt+1==x){return(right(s,1+len(s)-len(token)-a[cnt-1]));}
return(substr(s,a[x-2]+len(token),a[x-1]-a[x-2]-len(token)));}
function tokeni(s,token,x){return(token(upper(s),upper(token),x));}
function urlAddParam(url,param,val){var addr,params,a,cnt,i,b,s="",flag;addr=strextract(url,"?",1);params=strextract(url,"?",2);a=params.split("&");cnt=len(a);for(i=0;i<cnt;i++){b=a[i].split("=");if(upper(param)==upper(b[0])){b[1]=val;flag=1;}
s+=b[0]+"="+b[1]+"&";}
if(!flag){s+=param+"="+val+"&";}
if(strempty(s)){return(url);}
return(addr+"?"+strcrop(s,1));}
function urlExt(url){var x;if(!isUrl(url)){return;}
x=chrcount(".",url);if(!x){return;}
url=strextract(url,"?",1);x=stratlast(".",url);return(alltrim(right(url,len(url)-x)));}
function urlFix(url){url=alltrim(url);if(upper(left(url,3))=="WWW"){url="http://"+url;}
if(upper(left(url,17))=="STATIC.FLICKR.COM"){url="http://"+url;}
return(url);}
function urlType(url){var ext=urlExt(url);if(!ext){url=upper(url);if(strati("RSS.",url)||strati(".RSS",url)||strati("/RSS/",url)||strati("/FEEDS.",url)||(upper(right(url,5))=="/ATOM")||(upper(right(url,4))=="/RSS")){return(DATA_FEED);}
return(DATA_UNKNOWN);}
switch(upper(ext)){case"JPG":case"JPEG":case"GIF":case"PNG":case"ICO":case"BMP":case"TIFF":return(DATA_IMAGE);case"WAV":case"MP3":case"MP2":case"MPA":case"AU":return(DATA_MUSIC);case"MOV":case"FLV":case"QT":case"SWF":case"MPEG":case"MPV2":return(DATA_VIDEO);case"DOC":case"XLS":case"TXT":case"PPT":case"INI":case"PDF":return(DATA_DOCUMENT);case"JS":return(DATA_JS);case"CSS":return(DATA_CSS);case"XML":case"XSL":case"XSD":case"RNG":case"RDF":return(DATA_XML);case"HTM":case"HTML":case"SHTML":case"AP":case"APX":case"XHTML":return(DATA_HTML);case"ZIP":case"GZ":case"GZC":case"TGZ":case"TAR":return(DATA_ZIP);case"EXE":case"COM":case"XPI":return(DATA_APP);case"RSS":return(DATA_FEED);}
url=upper(url);if(strati("RSS.",url)||strati("=RSS",url)||strati(".RSS",url)||strati("/RSS/",url)||strati("/FEEDS.",url)||(upper(right(url,5))=="/ATOM")||(upper(right(url,4))=="/RSS")){return(DATA_FEED);}
return(DATA_LINK);}
function wait(ms){var d,cd;d=new Date();do{cd=new Date();}
while(cd-d<ms);}
function wordCount(str){var a,i,ttl=0;a=str.replace(/\s/g,' ').split(' ');cnt=len(a);for(i=0;i<cnt;i++){if(!strempty(a[i])){ttl++;}}
return(ttl);}
function x_ie_eventGet(e){return(e?e:window.event);}
function x_w3c_eventGet(e){return(e);}
function x_ie_eventCancel(e){e.returnValue=false;e.cancel=true;}
function x_opera_eventCancel(e){e.preDefault();}
function x_w3c_eventCancel(e){e.preDefault();}
function x_ie_eventKey(e){return e.keyCode;}
function x_w3c_eventKey(e){return e.which;}
var _winMM=null;function xWinManualMove(w){if(_winMM){xlib.eventUnbind(document,"keydown",xWinMMHandler);}
_winMM=w;xlib.eventBind(document,"keydown",xWinMMHandler,true);}
function xWinMMHandler(e){var k=xlib.keyGet(e);var w=_winMM;var x=1;if(k.isALT){x=25;}
else if(k.isCTRL){x=10;}
switch(k.code){case KEY_ARROWLEFT:xlib.UpdateFlag(1);w.position(w.left-x,w.top,w.width,w.height,1);xlib.eventCancel(e);return(true);case KEY_ARROWUP:xlib.UpdateFlag(1);w.position(w.left,w.top-x,w.width,w.height,1);xlib.eventCancel(e);return(true);case KEY_ARROWRIGHT:xlib.UpdateFlag(1);w.position(w.left+x,w.top,w.width,w.height,1);xlib.eventCancel(e);return(true);case KEY_ARROWDOWN:xlib.UpdateFlag(1);w.position(w.left,w.top+x,w.width,w.height,1);xlib.eventCancel(e);return(true);case KEY_ESCAPE:_winMM=null;xlib.eventUnbind(document,"keydown",xWinMMHandler);break;}}
function xWinModalResize(){var obj,pt;obj=domObject("xModalLayer");if(!obj){return;}
pt=xlib.winSize();obj.style.width=pxWrap(pt.width);obj.style.height=pxWrap(pt.height);}
function xWinModalScroll(){var pt=xlib.eventCurrentGet("scollPos");window.scrollTo(pt.x,pt.y);}
function xImageCalcDone(){var pSize,pos,data;if(!xlib.oCalcImage){return;}
pSize={w:_int(xlib.oCalcImage.width),h:_int(xlib.oCalcImage.height)};xlib.eventUnbind(xlib.oCalcImage,"load",xImageCalcDone);domDelete(xlib.oCalcImage);xlib.oCalcImage=null;xlib.objFromData(xlib.ddData,xlib.ddPos,1,pSize);}
function xImageCalcSize(data,pos){if(xlib.oCalcImage){domDelete(xlib.oCalcImage);}
xlib.ddData=data;xlib.ddPos=pos;xlib.oCalcImage=new Image();xlib.eventBind(xlib.oCalcImage,"load",xImageCalcDone);xlib.oCalcImage.src=data;if(upper(xlib.browser)=="CHROME"){xImageCalcDone();}}
function xWebVarRaw(vname,data){var x,data;x=strati(vname+"=",data);if(!x){return("");}
data=right(data,len(data)-(x+len(vname)));return(strextract(data,"&",1));}
function xWebVar(vname,data,IsInt){var val,x,isObj,e;x=strati(vname+"=",data);if(!x){return("");}
data=right(data,len(data)-(x+len(vname)));isObj=strati("<object ",data)||strati("<param ",data);if(isObj){switch(left(data,1)){case"'":data=strextract(data,"'",2);break;case"\"":data=strextract(data,"\"",2);break;default:data=strextract(data," ",1);}
try{val=decodeURIComponent(data);}catch(e){val=data;}}
else{val=decodeURIComponent(strextract(data,"&",1));}
if(IsInt){val=strswap(val,"'","");val=strswap(val,"\"","");val=strswap(val,"\\","");if(strat("%",val)){return(val);}
return(_int(val));}
return(val);}
function xWinVar(vname,data){var w=new xWindow();w.unpack(data);return(w[vname]);}
function rbCheck(rb,val){var i;if(typeof(rb)=="string"){rb=domObject(rb);}
if(typeof(val)=="number"){rb[val].checked=true;return(1);}
for(i=0;i<rb.length;i++){if(rb[i].value==val){rb[i].checked=true;return(1);}}
return(0);}
function rbSelectedIndex(obj,n){var i;if(typeof(obj)=="string"){obj=domObject(obj);}
if(typeof(n)!="number"){n=obj.length;}
for(i=0;i<n;i++){if(obj[i].checked){return(i);}}
return(-1);}
function rbSelectedValue(obj,n){var i;if(typeof(obj)=="string"){obj=domObject(obj);}
if(typeof(n)!="number"){n=obj.length;}
for(i=0;i<n;i++){if(obj[i].checked){return(obj[i].value);}}
return("");}
function ptContained(pt,r2){var r1={left:pt.x,top:pt.y,width:1,height:1}
return(rectContained(r2,r1));}
function rectContained(r1,r2){if((r2.left>=r1.left)&&(r2.left+r2.width<=r1.left+r1.width)&&(r2.top>=r1.top)&&(r2.top+r2.height<=r1.top+r1.height)){return(1);}
return(0);}
function rectIntersects(r1,r2){if(((r1.left<(r2.left+r2.width))&&(r2.left<(r1.left+r1.width)))&&(r1.top<(r2.top+r2.height))){return(r2.top<(r1.top+r1.height));}
return(0);}
function rectScale(w,h,wNew,hNew){var rRation,w2,h2;rRatio=w/h;h2=Math.round(wNew*(1/rRatio));if(h2>=hNew){return({w:wNew,h:h2});}
rRatio=h/w;w2=Math.round(hNew*(1/rRatio));if(w2>=wNew){return({w:w2,h:hNew});}
return({w:w,h:h});}
function dollar(val){return(numFormat(val,FORMAT_CURRENCY));}
function numFormat(n,ftype){var x,s,a;if(!ftype){return(""+n);}
if(ftype&FORMAT_CURRENCY){n=Math.round(n*100)/100;s=alltrim(""+n);a=s.split(".")
n=a[0]+"."+(a[1]!=null?left(a[1]+"00",2):"00");n=strcommas(n);}
if(ftype&FORMAT_MINUTES){x=new xDate();n=x.diff(null,null,_int(n*1000*60));}
if(ftype&FORMAT_SECONDS){x=new xDate();n=x.diff(null,null,_int(n*1000));}
if(ftype&FORMAT_COMMAS){n=strcommas(n);}
if(ftype&FORMAT_SUFFIX){x=_int(right("0"+n,2));if((x>3)&&(x<20)){n+="th";}
else{switch(right(""+n,1)){case"1":n+="st";break;case"2":n+="nd";break;case"3":n+="rd";break;default:n+="th";}}}
if(ftype&FORMAT_FSIZE){if(n<10000){n=strcommas(n);}
else if(n<1000000){n=dollar(n/1000)+" K";}
else if(n<1000000000){n=dollar(n/1000000)+" MB";}
else{n=dollar(n/1000000000)+" GB";}}
return(n);}
function parseToObj(data){var aNames=new Array(),aValues=new Array(),i=0,k=0,c,buf,obj,s,tag;var cnt,IsIn,curtag,curDelim,IsDelim,curValue;data=strswap(data,"\r\n"," ");data=strswap(data,"\n"," ");tag=substr(data,2,strat(" ",data)-2);cnt=len(data);IsIn=0;curtag="";curDelim="";IsDelim=0;curValue="";for(i=len(tag)+2;i<cnt;i++){c=data.charAt(i);if(IsIn){if(!IsDelim){switch(c){case" ":break;case"'":case"\"":IsDelim=1;curDelim=c;break;default:IsDelim=1;curDelim=" ";curValue+=c;}
continue;}
if((c==curDelim)||((curDelim==" ")&&(c==">"))){aValues[k++]=strswap(curValue,"\\","\\\\");curValue="";IsIn=0;IsDelim=0;}
else{curValue+=c;}
continue}
switch(c){case" ":continue;case"=":aNames[k]=curtag;curtag="";IsDelim=0;IsIn=1;continue}
curtag+=c;}
cnt=len(aNames);if(!cnt){buf='( { "tagname" : "'+tag+'" } )';}
else{buf='( { "tagname" : "'+tag+'", ';for(k=0;k<cnt;k++){if(aNames[k]=="class"){aNames[k]="_"+aNames[k];}
buf+='"'+aNames[k]+'" : "'+aValues[k]+'", ';}
buf=strcrop(buf,2);buf+=' } )';}
obj=eval(buf);obj.avars=aNames;if(!obj.id){obj.id=""}
obj.restore=function(){var s,cnt,i;s="<"+this.tagname;if(!strempty(this.id)){s+=" id=\""+this.id+"\"";}
cnt=this.avars.length;for(i=0;i<cnt;i++){if(upper(this.avars[i])!="ID"){try{val=eval("this."+this.avars[i]);if(val!=null){s+=" "+this.avars[i]+"=\""+val+"\"";}}catch(e){}}}
s+=">";return(s);}
return(obj);}
function pxRemove(x){if(strat("%",""+x)){return;}
return(_int(strswapi(""+x,"px","")));}
function pxWrap(x){if(strati("px",""+x)){return(x);}
return(""+x+"px");}
function xWinIndexFromName(name){var cnt,i,e;if(!name){return(0);}
name=lower(name);for(i=1;i<xWinMaxNum;i++){if(xWinList[i]&&name==lower(xWinList[i].name)){return(i);}}
return(0);}
function xWinFromName(name){var i=xWinIndexFromName(name);if(!i){return(null);}
return xWinList[i];}
function xWinFromPoint(pt){var cnt,i,w,curW=null,curZ=0;cnt=xWinList.length+1;for(i=1;i<xWinMaxNum;i++){w=xWinList[i];if((w.left>=pt.x)&&((w.left+w.width)<=pt.x)&&(w.top>=pt.y)&&((w.top+w.height)<=pt.y)){if(w.zorder>curZ){curZ=w.zorder;curW=w;}}}
return(curW);}
function xWin(name){return xWinFromName(name);}
function xWinName(el){return(xWinFromElement(el));}
function xWinFromElement(el){var obj;if(typeof(el)=="string"){el=domObject(el);}
while(1){if(!el){return(null);}
if(el.xid=="x-win"){return xWinFromName(el.xname);}
el=el.parentNode;}}
function xWinOverButton(el){var obj;if(typeof(el)=="string"){el=domObject(el);}
while(1){if(!el){return(0);}
if(el.getAttribute&&el.getAttribute("xid")==XLIB_SIG_BUTTON){return(1);}
if(strati("vscrollerbar",el.className)){return(1);}
el=el.parentNode;}}
function xWinOverHeader(el){var obj;if(typeof(el)=="string"){el=domObject(el);}
while(1){if(!el){return(0);}
if(el.xid==XLIB_SIG_HEADER){return(1);}
el=el.parentNode;}}
function xWinOverBody(el){var obj;if(typeof(el)=="string"){el=domObject(el);}
while(1){if(!el){return(0);}
if(el.xid==XLIB_SIGBODY){return(1);}
el=el.parentNode;}}
function xWinOverLink(el){var obj;if(typeof(el)=="string"){el=domObject(el);}
while(1){if(!el){return(0);}
if(el.getAttribute){if(el.getAttribute("href")||el.getAttribute("onclick")||el.getAttribute("ondblclick")){return(1);}}
el=el.parentNode;}}
function xWinEvent_Click(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){w.eventRun('Click',e);}}
function xWinEvent_DblClick(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){w.eventRun('DblClick',e);}}
function xDragDataGet(e){var o,d;o=xlib.eventTarget(e);switch(o.nodeName){case"IMG":d="<img src='"+o.src+"' border="+o.border+" width="+o.width+" height="+o.height+" alt=\""+o.alt+"\"  title=\""+o.title+"\">";break;case"A":d=o.href;break;default:d=xlib.textSelected();}
return(d);}
function xWinEvent_Drag(e){var w=xWinFromElement(xlib.eventTarget(e));xMouseE.dragData=xDragDataGet(e);if(w){w.eventRun('Drag',e);if(w.oaOpts&&w.oaOpts&xlib.openajax.ID_DRAG){xlib.openajax.objPublish(e,xlib.openajax.ID_DRAG,w,xlib.eventPosition(e),w.oaDefSrvs.sid,xMouseE.dragData);}}}
function xWinEvent_Drop(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){if(!w.eventRun('Drop',e)){xDropDataProcess(e);}
if(w.oaOpts&&w.oaOpts&xlib.openajax.ID_DROP){xlib.openajax.objPublish(e,xlib.openajax.ID_DROP,w,xlib.eventPosition(e),w.oaDefSrvs.sid,xDropDataGet(e));}}
else{xDropDataProcess(e);}
xlib.eventCancelBubble(e);xlib.eventCancel(e);}
function xWinError(e){if(xlib.errorFunc){try{if(!e){e=xlib.eventGet(event);}
xlib.errorFunc(e);}
catch(e){xlib.errorFunc(e);}}}
function xWinEvent_Cancel(e){return xlib.eventCancel(xlib.eventGet(e));}
function xWinEvent_DragMove(e){try{e.dataTransfer.dropEffect='move';e.returnValue=false;}
catch(e){}}
function xWinEvent_ttOn(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){w.tooltipFunc(e,1);}}
function xWinEvent_ttOff(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){w.tooltipFunc(e,0);}}
function xlib_PngFix(o){var a,i,src;if(!xlib.pngfix){return;}
if(typeof(o)=="string"){o=domObject(o);}
if(!o){o=xlib.eventBody();}
try{a=o.getElementsByTagName('img');for(i=0;i<a.length;i++){if(strati(".PNG",a[i].src)){src=a[i].src;a[i].src=xWinImageDir+"/trans.gif";a[i].style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')";}}}catch(e){}
try{a=o.getElementsByTagName('table');for(i=0;i<a.length;i++){src=a[i].getAttribute("background");if(strati(".PNG",src)){a[i].style.background="";a[i].style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')";}}}catch(er){}
try{a=o.getElementsByTagName('td');for(i=0;i<a.length;i++){src=a[i].getAttribute("background");if(strati(".PNG",src)){a[i].style.background="";a[i].style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')";}}}catch(err){}}
function xWindow(name,data,NoCreate){this.sig=XLIB_SIG;this.name=name;this.otype=0;this.oparent=null;this.oparentid="";this.obj=null;this.oHdr=null;this.oBody=null;this.oFtr=null;this.oBG=null;this.olayer=null;this.zParent="";this.issys=0;this.zorder=0;this.style=0;this.xstyle=0;this.displayMode=DISP_NORMAL;this.left=0;this.top=0;this.width=0;this.height=0;this.margin=0;this.padding=0;this.overflow="hidden";this.opacity=null;this.scrollTop=0;this.scrollLeft=0;this.closeHeight=0;this.openHeight=0;this.bgMargin="";this.bgColor=xWinBgColor;this.bgImage="";this.transLevel=xWinTransLevel;this.rotation=0;this.borderStyle="solid";this.borderWidth=1;this.borderWidthThick=4;this.borderColor="black";this.header="";this.headerRight="";this.hdrHeight=22;this.hdrBgColor=xWinHdrBgColor;this.hdrBgImage=xWinHdrBgImage;this.hdrPadding=2;this.hdrTextClass="smtxt";this.hdrTextColor="white";this.funcHeader=this.headerFunc;this.bodyClass=xWinBodyClass;this.bodyColor=xWinBodyColor;this.tooltip="";this.ttOpts="";this.ttWidth=300;this.ttBG="";this.footer="";this.ftrHeight=22;this.ftrBgColor=xWinFtrBgColor;this.ftrBgImage=xWinFtrBgImage;this.ftrPadding=2;this.ftrTextClass="smtxt";this.ftrTextColor="white";this.funcFooter=this.footerFunc;this.helpFunc=null;this.action="";this.imagedir=xWinImageDir;this.shadow="";this.eCreate=null;this.eDestroy=null;this.eDisplay=null;this.eDrag=null;this.eDrop=null;this.eClick=null;this.eDblClick=null;this.eResize=null;this.eMove=null;this.rollover="";this.onMoveFunc=null;this.onSizeFunc=null;this.eTimer="";this.eTimerInterval=0;this.eTimerReload=0;this.eTimerFunc=null;this.theme=xWinDefaultTheme;this.oaServices="";this.oaSubscriptions="";this.oaDefSrvs=null;this.oaOpts=0;this.oa_aSubscriptions=[]
this.funcSysMenu=xWinContextSysFunc?xWinContextSysFunc:this.sysmenuFunc;this.funcContextMenu=xWinContextMenuFunc?xWinContextMenuFunc:this.contextmenuFunc;this.propCustom="";this.err=null;if(data&&data.length){this.unpack(data);if(name&&(!strempty(name))){this.name=name;}
if(!strempty(this.theme)){try{var f=eval("theme_"+this.theme)
var w=f(this.name,this.action,(this.style&WS_EXTERNAL?1:0),null,this);this.funcHeader=w.funcHeader;this.funcFooter=w.funcFooter;w=null;}catch(e){}}
if(!NoCreate){this.create();}}}
xWindow.prototype.create=function(oParentDocBody){var o,style,w=0;var s,data,x;if(!this.name){this.errSet(ERR_NONAME);return(0);}
if(!this.winRegister()){return(0);}
if((!this.oparent)&&(!strempty(this.oparentid))){this.oparent=xWin(this.oparentid);}
if(oParentDocBody){this.obj=domAdd(oParentDocBody,"div",this.name);}else{this.obj=domAdd(this.oparent?this.oparent.oBody:null,"div",this.name);}
this.obj.xid="x-win";this.obj.xname=this.name;style=this.style;o=this.obj.style;o.overflow="hidden";o.position="absolute";o.display="block";o.visibility="hidden";o.margin=0;o.padding=0;if(this.opacity!=null){xlib.fx.opacity(this.obj.id,this.opacity);}
if((this.otype==OTYPE_IMAGE)&&(this.rotation!=0)){this.overflow="hidden";this.style=style&=~WS_BORDER;this.style=style|=WS_TRANSPARENT;this.transLevel=100;}
else{if(style&WS_BORDER){w=this.borderWidth;}
else if(style&WS_BORDERTHICK){w=this.borderWidthThick;}
if(w){domBorderSet(this.obj,this.borderStyle,w,this.borderColor);}}
if(style&WS_SHADOW&&(!(style&WS_TRANSPARENT))){this.shadowSet(this.obj);}
if(left(this.bgColor,1)=="#"){if(len(this.bgColor)>7){this.bgColor=left(this.bgColor,7);}}
if(this.margin&&(!(style&WS_TRANSPARENT))){o.background=this.bgMargin.length?this.bgMargin:this.bgColor;}
o.backgroundImage="";if(xlib.pngfix){this.oBG=domAdd(this.obj,"div",this.name+"_bg");this.oBG.className=this.bodyClass;this.oBG.style.color=this.bodyColor;this.oBG.style.overflow="hidden";this.oBG.style.position="absolute";this.oBG.style.border="none";this.oBG.style.backgroundImage="";this.oBG.left=0;this.oBG.top=this.hdrHeight;this.oBG.width=0;this.oBG.height=0;this.oBG.position="absolute";}
this.oBody=domAdd(this.obj,"span",this.name+"_body");this.oBody.className=this.bodyClass;this.oBody.style.color=this.bodyColor;this.oBody.xid=XLIB_SIGBODY;s=this.oBody.style;s.left=0;s.top=pxWrap(this.hdrHeight);s.width=0;s.height=0;s.position="absolute";s.margin=this.margin;s.padding=this.padding;s.display="inline";s.overflow=this.overflow;this.oBody.scrollTop=this.scrollTop;this.oBody.scrollLeft=this.scrollLeft;this.oBody.title=this.rollover;if(this.displayMode&DISP_DEFAULT){this.displayMode=xWinDefaultDisplay;}
if(style&WS_TRANSPARENT){this.transparencySet();}
else{if(this.bgImage){if(xlib.pngfix&&strati(".png",this.bgImage)){domImageSet(this.oBG,this.bgImage,1);}
else{s.backgroundImage="url("+this.bgImage+")";}}
else{s.background=this.bgColor;}}
if((style&WS_DRAG)&&this.eDrag){xlib.eventBind(this.oBody,xlib.IsIE?"dragstart":"draggesture",xWinEvent_Drag);}
if((style&WS_DROP)&&this.eDrop){xlib.eventBind(this.oBody,"drop",xWinEvent_Drop);xlib.eventBind(this.oBody,"dragenter",xWinEvent_Cancel);xlib.eventBind(this.oBody,"dragover",xWinEvent_Cancel);if(style&WS_MOVEABLE){target.addEventListener("dragstart",xWinEvent_Cancel,false);}}
if(this.tooltip&&this.tooltip.length){xlib.eventBind(this.oBody,"mouseover",xWinEvent_ttOn);if(!(this.displayMode&DISP_NOAUTOCLOSE)){xlib.eventBind(this.oBody,"mouseout",xWinEvent_ttOff);}}
if(this.eTimerInterval){this.eTimerFunc=xlib.intervalSet("xWin( '"+this.name+"' ).timerProcess( )",this.eTimerInterval*1000);}
if(style&WS_FOOTER){this.oFtr=domAdd(this.obj,"div",this.name+"_f");s=this.oFtr.style;s.left=pxWrap(0);s.top=pxWrap(0);s.width="100%";s.height=pxWrap(this.ftrHeight);s.position="absolute";domInnerHTML_set(this.oFtr,this.funcFooter(this));}
if(style&WS_HEADER){this.oHdr=domAdd(this.obj,"div",this.name+"_h");this.oHdr.xid=XLIB_SIG_HEADER;s=this.oHdr.style;s.left=pxWrap(0);s.top=pxWrap(0);s.width="100%";s.height=pxWrap(this.hdrHeight);s.position="absolute";domInnerHTML_set(this.oHdr,this.funcHeader(this));}
if(((this.style&WS_EXTERNAL)&&strempty(this.theme))||(!strempty(this.theme)&&(!(style&WS_HEADER||style&WS_FOOTER))&&this.style&WS_EXTERNAL))
{if(xlib.DisableExternalContent){domInnerHTML_set(this.oBody,"FRAME-BUSTER FIXER (find the offending object and delete it): "+this.action);}
else if(xlib.isFrameBuster(this.action)){domInnerHTML_set(this.oBody,"FRAME-BUSTER ALERT: this link has been identified as a frame-buster. Add it to your page as a button or link, but do not embed it directly in the page.<p>"+this.action);}
else{data=this.actionUpdateFromCustom(this.action);data=this.actionRenderExternal(this.actionPreprocess(data));data=this.actionValidate(data);domInnerHTML_set(this.oBody,data);}}
else{data=this.actionUpdateFromCustom(this.action);data=this.actionPreprocess(data);if((this.otype==OTYPE_IMAGE)&&(this.rotation!=0)){this.oBody.style.overflow=this.overflow="hidden";data=strswapi(data,"<img ","<img id='"+this.name+"_ri' ");domInnerHTML_set(this.oBody,data);}
else{if((this.style&WS_EXTERNAL)&&(!strempty(this.theme))){if(!strati("<iframe",data)){data=this.actionRenderExternal(this.actionPreprocess(data));}}
data=this.actionValidate(data);domInnerHTML_set(this.oBody,data);}
if(xlib.browser=="SAFARI"||xlib.browser=="CHROME"){this.oBody.style.visibility="hidden";a=this.oBody.getElementsByTagName("img");for(i=0;i<len(a);i++){a[i].addEventListener("dragstart",xWinEvent_Cancel,false);}}}
if(((style&WS_MOVEABLE)||(style&&WS_RESIZABLE))&&(xlib.browser!="SAFARI")&&(xlib.browser!="CHROME")){this.olayer=domAdd(this.obj,"div",this.name+"_lyr");o=this.olayer;o.style.overflow="hidden";o.style.position="absolute";o.style.left=0;o.style.top=0;o.style.width="100%";o.style.height="100%";o.style.zIndex=-1;domInnerHTML_set(o,"<img src='"+xWinImageDir+"/trans.gif' border=0 width=100% height=100% style=\"cursor:move;\">");xlib_PngFix(o);}
xlib_PngFix(this.obj);if(xWinTouch){xWinTouchHandler.init(this);}
this.oaOpts=0;if(xlib.openajax&&this.oaServices.length){this.oaDefSrvs=xlib.openajax.objRegisterServices(this.oaServices);this.oaOpts=this.oaDefSrvs?this.oaDefSrvs.opts:0;}
if(xWinObjCreate){xWinObjCreate(this);}
this.eventProcess(this.eCreate);xlib.UpdateFlag(1,this);if(this.oaOpts){if(this.oaOpts&xlib.openajax.ID_CREATE){xlib.openajax.objPublish(null,xlib.openajax.ID_CREATE,this,null,this.oaDefSrvs.sid,"");}
if(this.oaOpts&xlib.openajax.ID_KEYDOWN){xlib.eventBind(this.oBody,"keydown",this.oaKeyDown);}
if(this.oaOpts&xlib.openajax.ID_KEYUP){xlib.eventBind(this.oBody,"keyup",this.oaKeyUp);}
if(this.oaOpts&xlib.openajax.ID_KEYPRESS){xlib.eventBind(this.oBody,"keypress",this.oaKeyPress);}
if(this.oaOpts&xlib.openajax.ID_MOUSEOVER){xlib.eventBind(this.oBody,"mouseover",this.oaMouseOver);}
if(this.oaOpts&xlib.openajax.ID_MOUSEOUT){xlib.eventBind(this.oBody,"mouseout",this.oaMouseOut);}}
if(xlib.openajax&&this.oaSubscriptions.length){if(!strempty(this.oaSubscriptions)){xlib.openajax.getSubscriptions(this.oaSubscriptions);a=xlib.openajax.adataSubscriptions;cnt=len(a);for(i=0;i<cnt;i++){if(a[i].status!=1){continue;}
if(!a[i].sid||strempty(a[i].sid)||strempty(a[i].cb)){continue;}
try{if(a[i].opts&xlib.openajax.ID_INTERNALHANDLER){eval("cb = function( e, msg, data ) { "+jsDecode(a[i].cb)+" }");}
else{eval("cb = "+a[i].cb);}}
catch(e){cb=null;}
if(a[i].status==1){data=XLIB_SIG+"|({ winname:\""+this.name+"\",win:null,opts:"+a[i].opts+",data:\""+a[i].data+"\"})";this.oa_aSubscriptions[len(this.oa_aSubscriptions)]=xlib.openajax.subscribe(a[i].sid,cb,a[i].scope,data,a[i].filter);}}}}
if(this.isVisible()){this.display();}
if(xlib.browser=="SAFARI"||xlib.browser=="CHROME"){var oBodyVar=this.oBody;var oldWidth=parseInt(oBodyVar.style.width.replace(/px$/g,""),10);oBodyVar.style.width=(oldWidth+1)+"px";setTimeout(function(){oBodyVar.style.width=(oldWidth)+"px";oBodyVar.style.visibility="visible";},1);}
if((xlib.browser=="SAFARI"||xlib.browser=="CHROME")&&this.otype==OTYPE_WEB){var parentHeight=parseInt(this.oBody.style.height.replace(/px$/g,""),10);this.oBody.firstChild.style.height=parentHeight-3;}
return(1);};xWindow.prototype.oaKeyDown=function(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){xlib.openajax.objPublish(e,xlib.openajax.ID_KEYDOWN,w,xlib.eventPosition(e),w.oaDefSrvs.sid,chr(xlib.eventKey(e)));}};xWindow.prototype.oaKeyUp=function(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){xlib.openajax.objPublish(e,xlib.openajax.ID_KEYUP,w,xlib.eventPosition(e),w.oaDefSrvs.sid,chr(xlib.eventKey(e)));}};xWindow.prototype.oaKeyPress=function(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){xlib.openajax.objPublish(e,xlib.openajax.ID_KEYPRESS,w,xlib.eventPosition(e),w.oaDefSrvs.sid,chr(xlib.eventKey(e)));}};xWindow.prototype.oaMouseOver=function(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){xlib.openajax.objPublish(e,xlib.openajax.ID_MOUSEOVER,w,xlib.eventPosition(e),w.oaDefSrvs.sid,"");}};xWindow.prototype.oaMouseOut=function(e){var w=xWinFromElement(xlib.eventTarget(e));if(w){xlib.openajax.objPublish(e,xlib.openajax.ID_MOUSEOUT,w,xlib.eventPosition(e),w.oaDefSrvs.sid,"");}};xWindow.prototype.display=function(style){var o,oM,pt,IsModal,x,y,w,h,cnt,i;style=style||this.style;this.style&=~WS_NORMAL;this.style&=~WS_HIDDEN;this.style&=~WS_VISIBLE;this.style&=~WS_MINIMIZED;this.style&=~WS_MAXIMIZED;o=this.obj.style;IsModal=this.style&WS_MODAL;if(this.displayMode&DISP_DEFAULT){this.displayMode=xWinDefaultDisplay;}
if(this.oaOpts&&this.oaOpts&xlib.openajax.ID_DISPLAY){xlib.openajax.objPublish(null,xlib.openajax.ID_DISPLAY,this,null,this.oaDefSrvs.sid,""+style);}
if(style&WS_HIDDEN){this.style|=WS_HIDDEN;this.obj.style.visibility="hidden";this.obj.style.display="none";if(IsModal){xlib.winModalLayer(0);}
this.eventProcess(this.eDisplay);return;}
if((this.otype==OTYPE_IMAGE)&&(this.rotation!=0)){xlib.imageRotate(this.name+"_ri",this.rotation);}
if(style&WS_VISIBLE){this.style|=WS_VISIBLE;this.obj.style.visibility="visible";this.obj.style.display="block";if(IsModal){xlib.winModalLayer(0);}
this.eventProcess(this.eDisplay);return;}
o.zIndex=this.zorder=this.zIndexGet();if(style&WS_MAGNETIC){cnt=xWinList.length;for(i=1;i<cnt;i++){w=xWinList[i];if(w.name!=this.name){if((style&WS_MAGNETIC&&this.isInWin(w))||(w.zParent==this.name)){w.bringtotop();}}}}
if(style&WS_MAXIMIZED){if(IsModal){xlib.winModalLayer(0);}
this.style|=WS_MAXIMIZED;o.zIndex=this.zorder=this.zIndexGet();pt=xlib.winScrollPos();x=pt.x;y=pt.y;xScrollPos=pt;pt=xlib.winSize();w=this.winAdjust(pt.width)-1;h=this.winAdjust(pt.height)-0;this.positionDivs(x,y,w,h);}
else if(style&WS_MINIMIZED){this.style|=WS_MINIMIZED;}
else{this.style|=WS_NORMAL;if(this.displayMode&DISP_CENTERED){pt=xlib.winCalcCenter(this.width,this.height,this.oparent);x=pt.x;y=pt.y;}
else{x=this.left;y=this.top;}
this.positionDivs(x,y,this.width,this.height);if(IsModal){oM=xlib.winModalLayer(1);oM.style.zIndex=o.zIndex-1;}}
if(this.displayMode&DISP_FADE_IN){xlib.fx.opacity(this.obj.id,0);this.obj.style.visibility="visible";this.obj.style.display="block";xlib.fx.opacityFade(this.obj.id,DISP_FADE_IN);}
else{if((this.otype==OTYPE_IMAGE)&&(this.rotation!=0)){setTimeout("xWin('"+this.name+"').obj.style.visibility = 'visible';",10);}
else{this.obj.style.visibility="visible";this.obj.style.display="block";}}
this.eventProcess(this.eDisplay);};xWindow.prototype.destroy=function(IgnoreFade,ConfirmFlag){var a,cnt,i,w,f;if(ConfirmFlag){if(!confirm("Are you sure you want to remove this object?")){return;}}
xlib.UpdateFlag(1,this);if((this.displayMode&DISP_FADE_OUT)&&(!IgnoreFade)){f=function(id){setTimeout("xWin('"+id+"').destroy( 1 );",700);};xlib.fx.opacityFade(this,{mode:DISP_FADE_OUT,cbFunc:f});return;}
if(xWinTouch){xWinTouchHandler.close(this);}
if(this.oaOpts){if(this.oaOpts&xlib.openajax.ID_KEYDOWN){xlib.eventUnbind(this.oBody,"keydown",this.oaKeyDown);}
if(this.oaOpts&xlib.openajax.ID_KEYUP){xlib.eventUnbind(this.oBody,"keyup",this.oaKeyUp);}
if(this.oaOpts&xlib.openajax.ID_KEYPRESS){xlib.eventUnbind(this.oBody,"keypress",this.oaKeyPress);}
if(this.oaOpts&xlib.openajax.ID_MOUSEOVER){xlib.eventUnbind(this.oBody,"mouseover",this.oaMouseOver);}
if(this.oaOpts&xlib.openajax.ID_MOUSEOUT){xlib.eventUnbind(this.oBody,"mouseout",this.oaMouseOut);}
if(this.oaOpts&xlib.openajax.ID_DESTROY){xlib.openajax.objPublish(null,xlib.openajax.ID_DESTROY,this,null,this.oaDefSrvs.sid,"");}}
cnt=len(this.oa_aSubscriptions);for(i=0;i<cnt;i++){xlib.openajax.unsubscribe(this.oa_aSubscriptions[i]);}
if(this.eTimerFunc){xlib.intervalClear(this.eTimerFunc);this.eTimerFunc=null;}
if(this.style&WS_SYSMENU){w=xWinFromName(this.name+"_sys");if(w){w.destroy();}}
if(this.style&WS_CONTEXTMENU){w=xWinFromName(this.name+"_cx");if(w){w.destroy();}}
w=xWinFromName(this.name+"_prop");if(w){w.destroy();}
if(this.style&WS_MODAL){xlib.eventUnbind(window,"scroll",xWinModalScroll);xlib.eventUnbind(window,"resize",xWinModalResize);}
a=this.winChildrenArray(this.name);cnt=len(a);if(cnt){for(i=0;i<cnt;i++){a[i].destroy();}}
this.tooltipFunc();this.eventProcess(this.eDestroy);this.winUnregister();if(this.style&WS_MODAL){xlib.winModalLayer(0);}
domDelete(this.winBody());domDelete(this.obj);if(xlib.ffPlugin&&xlib.ffPlugin.action){xlib.ffPlugin.action.reset();}};xWindow.prototype.duplicate=function(){var w=new xWindow(xWinNameGen(this.otype),this.pack(),1);w.left+=30;w.top+=30;if(!w.create()){alert(this.err);}};xWindow.prototype.timerProcess=function(e){if((this.style&WS_EXTERNAL)&&this.eTimerReload){this.reload();}
if(!strempty(this.eTimer)){try{eval(this.eTimer);}
catch(e){if(this.eTimerFunc){xlib.intervalClear(this.eTimerFunc);this.eTimerFunc=null;}}}
if(this.oaOpts&&this.oaOpts&xlib.openajax.ID_TIMER){xlib.openajax.objPublish(e,xlib.openajax.ID_TIMER,this,null,this.oaDefSrvs.sid,"");}};xWindow.prototype.actionPreprocess=function(action){if(xlib.actionPreprocessFunc){action=xlib.actionPreprocessFunc(action);}
if(strati("<param name=\"movie\"",action)){action=strswapi(action,"<param name=\"movie\"","<param name='wmode' value='transparent'><param name=\"movie\"");}
else if(strati("<param name='movie'",action)){action=strswapi(action,"<param name='movie'","<param name='wmode' value='transparent'><param name='movie'");}
if(strati("type=\"application/x-shockwave-flash\"",action)){action=strswapi(action,"type=\"application/x-shockwave-flash\"","type=\"application/x-shockwave-flash\" wmode=\"transparent\"");}
else if(strati("type='application/x-shockwave-flash'",action)){action=strswapi(action,"type='application/x-shockwave-flash'","type='application/x-shockwave-flash' wmode='transparent'");}
if(this.otype&OTYPE_TEXTBLOCK){action=strswap(action,"\r","");action=strswap(action,"\n","<br>");}
return(action);};xWindow.prototype.actionUpdateFromCustom=function(action){var buf,a,cnt,i,o,b;if(strempty(this.propCustom)){return(action);}
buf=strswap(this.propCustom,"\r","");a=buf.split("\n");cnt=len(a);for(i=0;i<cnt;i++){if(strati("formdata",a[i])){o=parseToObj(strextract(strextract(a[i],"<",2),">",1));a=o.value.split("&");cnt=len(a);for(i=0;i<cnt;i++){b=a[i].split("=");action=strswapi(action,"#"+b[0]+"#",jsDecode(b[1]));action=strswapi(action,"%23"+b[0]+"%23",b[1]);}
break;}}
return(action);};xWindow.prototype.iframe=function(){var o;if(this.style&WS_EXTERNAL){o=domObject(this.name+"_iframe");}
return(o);};xWindow.prototype.doc=function(){return(this.iframeDocument());};xWindow.prototype.getDocument=function(){return(this.iframeDocument());};xWindow.prototype.iframeDocument=function(){var o=domObject(this.name+"_iframe");if(!(this.style&WS_EXTERNAL)){return(null);}
var doc=o.contentWindow;if(doc==undefined||doc==null){doc=o.contentWindow.document;}
return(doc);};xWindow.prototype.iframeBody=function(){var o=this.iframeDocument();if(!o){return;}
return(o.getElementsByTagName("body").item(0));};xWindow.prototype.reload=function(){var o;if(this.style&WS_EXTERNAL){o=domObject(this.name+"_iframe");o.src=o.src;}};xWindow.prototype.winRegister=function(){var i;if(xWinFromName(this.name)){this.errSet(ERR_ALREADYEXISTS);return(0);}
i=xWinList.length+1;if(i>xWinMaxNum){this.errSet(ERR_TOOMANYWINDOWS);return(0);}
xWinList[xWinList.length]=this;return(1);};xWindow.prototype.winUnregister=function(){var i,cnt,j;i=xWinIndexFromName(this.name);if(i){cnt=xWinList.length;for(j=i;j<cnt;j++){xWinList[j]=xWinList[j+1];}
xWinList.pop();}};xWindow.prototype.pack=function(prefix){var s="",n,v,style;prefix=prefix||"";style=this.style;this.style&=~WS_SHAREMENU;for(n in this){if(typeof(n)=="string"){if(!n.length){continue;}
switch(n){case"obj":case"oHdr":case"oBody":case"oFooter":case"oBG":case"olayer":case"oparent":case"zorder":case"funcHeader":case"funcFooter":case"funcContextMenu":case"helpFunc":case"eTimerFunc":case"oaDefSrvs":case"oaOpts":case"oa_aSubscriptions":case"oaSubriptions":case"oaSubsriptions":case"onMoveFunc":case"onSizeFunc":if(typeof(this[n])!="string"){continue;}}
v=this[n];switch(typeof(v)){case"number":s+=prefix+"$"+n+"="+v+"&";break;case"string":if(v.length){s+=prefix+n+"="+jsEncode(v)+"&";}
break;}}}
this.style=style;return(s);};xWindow.prototype.unpack=function(s){var a,b,cnt,i,n,v;a=s.split("&");cnt=len(a);for(i=0;i<cnt;i++){b=a[i].split("=");switch(b[0]){case"obj":case"oHdr":case"oBody":case"oFooter":case"oBG":case"olayer":case"oparent":case"zorder":case"funcHeader":case"funcFooter":case"funcContextMenu":case"oaDefSrvs":case"oaOpts":case"oa_aSubscriptions":case"oaSubriptions":case"oaSubsriptions":continue;}
try{if(b[0].charAt(0)=="$"){n=right(b[0],b[0].length-1);v=b[1].indexOf(".")+1?parseFloat(b[1]):_int(b[1]);}
else{n=b[0];v=jsDecode(b[1]);}
this[n]=v;}catch(e){}}
return(cnt);};xWindow.prototype.transparencySet=function(lvl){lvl=(lvl==null?this.transLevel:lvl);this.style|=WS_TRANSPARENT;if(_int(lvl)!=100){if(xlib.pngfix){this.oBG.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this.imagedir+"/trans"+lvl+".png',sizingMethod='scale')";}
else{this.oBody.style.backgroundImage="url("+this.imagedir+"/trans"+lvl+".png"+")";}}
else{this.oBody.style.backgroundImage="";}};xWindow.prototype.isVisible=function(style){style=style?style:this.style;if(style&WS_NORMAL||style&WS_VISIBLE||style&WS_MINIMIZED||style&WS_MAXIMIZED){return(1);}
return(0);};xWindow.prototype.isPackedString=function(s){if(strati(XLIB_SIG,s)||strati(jsEncode(XLIB_SIG),s)){return(1);}
return(0);};xWindow.prototype.headerFunc=function(o){var s="<table border=0 cellspacing=0 cellpadding="+o.hdrPadding+" class='"+o.hdrTextClass+" xNoBorder' width=100% height="+o.hdrHeight+" bgcolor='"+o.hdrBgColor+"' background='"+(strempty(o.hdrBgColor)?o.hdrBgImage:"")+"' style='width:100%;'><tr>";if(o.style&WS_SYSMENU){s+="<td width=18 class='xNoBorder'><img src='"+o.imagedir+"/win_sys0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_sys1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_sys0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').sysmenu();\" title='Toggle System Menu'></td>";}
s+="<td nowrap class='xNoBorder'><font color='"+o.hdrTextColor+"'>"+o.header+"</font></td>"+"<td nowrap align=right class='xNoBorder' style='text-align:right;'>";if(o.style&WS_HELP){s+="<img src='"+o.imagedir+"/win_help0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_help1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_help0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').help();\" title='Help'>";}
if((o.style&WS_UNDOCKABLE)&&(o.style&WS_EXTERNAL)){s+="<img src='"+o.imagedir+"/win_undock0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_undock1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_undock0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').undock();\" title='Undock'>";}
if(o.style&WS_MINIMIZABLE){s+="<img src='"+o.imagedir+"/win_min0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_min1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_min0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').minimize();\" title='Minimize'>";}
if(o.style&WS_MAXIMIZABLE){s+="<img src='"+o.imagedir+"/win_max0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_max1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_max0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').maximize();\" title='Maximize'>";}
if(o.style&WS_CLOSE){s+="<img src='"+o.imagedir+"/win_close0.png' xid='"+XLIB_SIG_BUTTON+"' width=18 height=18 border=0 onmouseover=\"domImageSet(this,'"+o.imagedir+"/win_close1.png');\" onmouseout=\"domImageSet(this,'"+o.imagedir+"/win_close0.png');\" ondragstart='return false;' style='cursor:pointer;' onClick=\"xWinFromName('"+o.name+"').destroy();\" title='Close'>";}
s+=this.headerRight;s+="</td></tr></table>";return(s);};xWindow.prototype.help=function(){switch(typeof(this.helpFunc)){case"string":eval(this.helpFunc);break;case"function":this.helpFunc(this);break;}};xWindow.prototype.footerFunc=function(o){var s="<table border=0 cellspacing=0 cellpadding="+o.ftrPadding+" class='"+o.ftrTextClass+" xNoBorder' width=100% height="+o.ftrHeight+" bgcolor='"+o.ftrBgColor+"' background='"+(strempty(o.ftrBgColor)?o.ftrBgImage:"")+"' style='border:none;'><tr>"+"<td nowrap class='xNoBorder'><font color='"+o.ftrTextColor+"'>"+o.footer+"</font></td></tr></table>";return(s);};xWindow.prototype.getMagneticChildren=function(){var r21,r2,cnt,i,w,a;a=new Array();if(!(this.style&WS_MAGNETIC)){return(a);}
r1={left:this.left,top:this.top,width:this.width,height:this.height};cnt=xWinList.length;for(i=1;i<cnt;i++){w=xWinList[i];if((!w)||(w.name==this.name)){continue;}
if(w.style&WS_NOFOCUS){continue;}
r2={left:w.left,top:w.top,width:w.width,height:w.height};if(!rectContained(r1,r2)){continue;}
a[len(a)]=w;}
return(a);};xWindow.prototype.zIndexGet=function(){if(this.style&WS_NOFOCUS){return(1);}
if((this.style&WS_MAXIMIZED)||(this.style&WS_ALWAYSONTOP)||(this.style&WS_MODAL)){xWinZorder+=2;return(xWinZorder+10000);}
return(xWinZorder+=2);};xWindow.prototype.maximize=function(flag){if(flag==null){flag=!(this.style&WS_MAXIMIZED);}
this.display(flag?WS_MAXIMIZED:WS_NORMAL);if(this.onSizeFunc){this.onSizeFunc(_int(this.obj.style.width),_int(this.obj.style.height),this);}};xWindow.prototype.minimize=function(flag){if(flag==null){flag=!(this.style&WS_MINIMIZED);}
this.display(flag?WS_MINIMIZED:WS_NORMAL);if(this.onSizeFunc){this.onSizeFunc(_int(this.obj.style.width),_int(this.obj.style.height),this);}};xWindow.prototype.rollup=function(rtype){var h;if(!(this.xstyle&WSX_ROLLUP)){return;}
if(!this.openHeight){this.openHeight=this.height;h=this.closeHeight?this.closeHeight:this.hdrHeight;}
else{h=this.openHeight;this.openHeight=0;}
this.winSize(this.width,h);};xWindow.prototype.sysmenu=function(flag){var w=xWinFromName(this.name+"_sys");if(flag==null){flag=!w;}
if(w){if(flag){w.bringtotop();return;}
w.destroy();return;}
w=xWinFromName(this.name+"_cx");if(w){w.destroy();}
this.funcSysMenu(this);};xWindow.prototype.sysmenuFunc=function(oparent){var w,x,y,menu;x=_int(oparent.obj.style.left);y=_int(oparent.obj.style.top)+oparent.hdrHeight+oparent.borderThickness();if(oparent.oparent){x+=_int(oparent.oparent.obj.style.left)+oparent.oparent.borderThickness();y+=_int(oparent.oparent.obj.style.top)+oparent.hdrHeight+oparent.oparent.borderThickness();}
w=new xWindow();w.name=this.name+"_sys";w.issys=1;w.style=WS_NORMAL|WS_MOVEABLE|WS_BORDER|WS_SHADOW|WS_ALWAYSONTOP;w.setposition(x,y,200,130);w.bgColor="#FFFFFF";menu=new xlib_MenuProperties(this);menu.sideColor="#808080";if(xWinMinProp){if(xWinProperties){menu.add("Properties","","xWin('"+this.name+"').properties( );");menu.add("-","");}
menu.add("Manual Move","","xWin('"+this.name+"').manualmove( );");menu.add("Duplicate","","xWin('"+this.name+"').duplicate( )");if(!(this.style&WS_NOTSHAREABLE)){menu.add("Share","","xWin('"+this.name+"').share( )");}
menu.add("-","");menu.add("Close window","","xWin('"+this.name+"').destroy( );");}
else{if(xWinProperties){menu.add("Properties","","xWin('"+this.name+"').properties( );");}
menu.add("Manual Move","","xWin('"+this.name+"').manualmove( );");menu.add("-","");menu.add("Duplicate","","xWin('"+this.name+"').duplicate( )");if(!(this.style&WS_NOTSHAREABLE)){menu.add("Share","","xWin('"+this.name+"').share( )");}
menu.add("Origin","","xWin('"+this.name+"').origin( )");menu.add("-","");menu.add("Close window","","xWin('"+this.name+"').destroy( );");}
w.setposition(x,y,160,menu.calcHeight());w.action=menu.render();w.create();xlib.menuCurrentSet(w);};xWindow.prototype.contextmenu=function(flag){var w;if(!(this.style&WS_CONTEXTMENU)){if(xLibContextMenuFunc){xLibContextMenuFunc(xlib.eventGlobal);}
return(0);}
if(!xlib.pageObjMenuEnabled){if((!(this.style&WS_NOTSHAREABLE))&&xlib.pageObjShareOverride){}
else{if(xLibContextMenuFunc){xLibContextMenuFunc(xlib.eventGlobal);}
return(0);}}
w=xWinFromName(this.name+"_cx");if(flag==null){flag=!w;}
if(w){if(flag){w.bringtotop();return(1);}
w.destroy();return(1);}
w=xWinFromName(this.name+"_sys");if(w){w.destroy();}
this.funcContextMenu(this);return(1);};xWindow.prototype.contextmenuFunc=function(oparent){var w,x,y,h,o,pt,menu;w=new xWindow();w.issys=1;w.name=this.name+"_cx";w.style=WS_NORMAL|WS_MOVEABLE|WS_BORDER|WS_SHADOW|WS_ALWAYSONTOP;x=_int(oparent.obj.style.left);y=_int(oparent.obj.style.top)+oparent.hdrHeight+oparent.borderThickness();if(oparent.oparent){x+=_int(oparent.oparent.obj.style.left)+oparent.oparent.borderThickness();y+=_int(oparent.oparent.obj.style.top)+oparent.hdrHeight+oparent.oparent.borderThickness();}
pt=xlib.eventCurrentGet("mPos");x=pt.x;y=pt.y;w.padding=0;w.bgColor="#FFFFFF";menu=new xlib_MenuProperties(this);menu.sideColor=xWinContextSideClr;o=oparent.obj.style;if(xWinMinProp){if(xWinProperties){menu.add("Properties","","xWin('"+this.name+"').properties( );");menu.add("-","");}
menu.add("Manual Move","","xWin('"+this.name+"').manualmove( );");menu.add("Duplicate","","xWin('"+this.name+"').duplicate( )");if(!(this.style&WS_NOTSHAREABLE)){menu.add("Share","","xWin('"+this.name+"').share( )");}
menu.add("-","");menu.add("Delete","","xWin('"+this.name+"').destroy( );");menu.add("Exit","","xWin('"+w.name+"').destroy( );");}
else{if(this.style&WS_SHAREMENU){menu.add("Share","","xWin('"+this.name+"').share( )");menu.add("Origin","","xWin('"+this.name+"').origin( )");menu.add("-","");menu.add("Exit","","xWin('"+w.name+"').destroy( );");}
else{if(xWinProperties){menu.add("Properties","","xWin('"+this.name+"').properties( );");}
menu.add("Manual Move","","xWin('"+this.name+"').manualmove( );");menu.add("-","");menu.add("Duplicate","","xWin('"+this.name+"').duplicate( )");menu.add("Share","","xWin('"+this.name+"').share( )");menu.add("Origin","","xWin('"+this.name+"').origin( )");menu.add("-","");menu.add("Delete","","xWin('"+this.name+"').destroy( );");menu.add("Exit","","xWin('"+w.name+"').destroy( );");}}
h=menu.calcHeight()+(w.borderThickness()*2);pt=xlib.winAdjustPos(x,y,160,h,10);w.setposition(pt.x,pt.y,160,h);w.action=menu.render();w.create();w.obj.style.zIndex+=10000;xlib.menuCurrentSet(w);};xWindow.prototype.manualmove=function(){xWinManualMove(this);}
xWindow.prototype.properties=function(){var w,extra="",url="/properties.htm";e=xlib.eventGlobal;if(e){k=xlib.keyGet(e);if(k.isCTRL){extra+="&IsCtrl=1";}
if(k.isALT){extra+="&IsAlt=1";}
if(k.isSHIFT){extra+="&IsShift=1";}}
if(!strempty(this.propCustom)){extra+="&IsCustom=1";}
if(xWinPropertyHandler){xWinPropertyHandler(this,extra);return;}
if(xWinPropertyTheme){w=xWinPropertyTheme(this.name+"_prop",url+"?id="+this.name+"&otype="+this.otype+extra,1);}
else{w=new xWindow();w.name=this.name+"_prop";w.style=WS_NORMAL|WS_MOVEABLE|WS_MAXIMIZABLE|WS_RESIZABLE|WS_BORDERTHICK|WS_EXTERNAL|WS_HEADER|WS_CLOSE;w.action=url+"?id="+this.name+"&otype="+this.otype+extra;}
w.style|=WS_ALWAYSONTOP
w.displayMode=DISP_CENTERED|DISP_NOPROGRESS;w.issys=1;if(strempty(this.propCustom)){w.header="Properties - "+xlib.objNameFromId(this.otype)+(this.otype==OTYPE_OBJECT?"":" object");}
else{w.header="Object Properties";}
w.setposition(0,0,560,400);w.create();};xWindow.prototype.share=function(){var w;if(this.style&WS_NOTSHAREABLE){alert("Sorry, this object is set to non-shareable");return;}
if(xWinPropertyTheme){w=xWinPropertyTheme(this.name+"_prop","/propshare.htm?id="+this.name+"&otype="+this.otype,1);}
else{w=new xWindow();w.name=this.name+"_prop";w.style=WS_NORMAL|WS_MOVEABLE|WS_MAXIMIZABLE|WS_RESIZABLE|WS_BORDERTHICK|WS_EXTERNAL|WS_HEADER|WS_CLOSE;w.action="/propshare.htm?id="+this.name+"&otype="+this.otype;}
w.style|=WS_ALWAYSONTOP
w.displayMode=DISP_CENTERED|DISP_NOPROGRESS;w.issys=1;w.header="Share - "+xlib.objNameFromId(this.otype)+(this.otype==OTYPE_OBJECT?"":" object");w.setposition(0,0,560,400);w.create();};xWindow.prototype.origin=function(){var w;if(xWinPropertyTheme){w=xWinPropertyTheme(this.name+"_origin","/propOrigin.htm?id="+this.name+"&otype="+this.otype,1);}
else{w=new xWindow();w.name=this.name+"_origin";w.style=WS_NORMAL|WS_MOVEABLE|WS_MAXIMIZABLE|WS_RESIZABLE|WS_BORDERTHICK|WS_EXTERNAL|WS_HEADER|WS_CLOSE;w.action="/propOrigin.htm?id="+this.name+"&otype="+this.otype;}
w.style|=WS_ALWAYSONTOP
w.displayMode=DISP_CENTERED|DISP_NOPROGRESS;w.issys=1;w.header="Content Origin";w.setposition(0,0,560,400);w.create();};xWindow.prototype.undock=function(w,h){var url,pt,opt;if(!w){w=640;}
if(!h){h=480;}
if(!(this.style&WS_EXTERNAL)){return;}
pt={"x":(screen.availWidth-w)/2,"y":(screen.availHeight-h)/2};url=this.actionFormatExt(this.action);opt="left="+pt.x+",top="+pt.y+",width="+w+",height="+h+",status=yes,location=yes,toolbar=yes,scrollbars=yes,menubar=yes,directories=yes,resizable=yes";window.open(url,"_blank",opt);};xWindow.prototype.isInWin=function(w){var r2,r1;r2={left:this.left,top:this.top,width:this.width,height:this.height};r1={left:w.left,top:w.top,width:w.width,height:w.height};return(rectContained(r2,r1));};xWindow.prototype.bringtotop=function(){var w,i,cnt;if(this.style&WS_NOFOCUS){return(1);}
if(this.zorder==xWinZorder){return(0);}
this.zorder=this.obj.style.zIndex=this.zIndexGet();if(this.oparent){this.oparent.bringtotop();}
cnt=xWinList.length;for(i=1;i<cnt;i++){w=xWinList[i];if(w.name!=this.name){if((this.style&WS_MAGNETIC&&this.isInWin(w))||(w.zParent==this.name)){w.bringtotop();}}}
w=xWinFromName(this.name+"_sys");if(w){w.bringtotop();}
w=xWinFromName(this.name+"_cx");if(w){w.bringtotop();}
return(1);};xWindow.prototype.winAdjust=function(x){var b;x=x==null?0:x;if(xlib.IsIE){return(x);}
b=this.borderThickness();return(x-(2*b));};xWindow.prototype.positionDivs=function(x,y,w,h){var b=0,as,top=0,bot,offset=0,bT=0,w2,h2,IsNoSave,s;IsNoSave=((this.style&WS_MAXIMIZED)||(this.style&WS_MINIMIZED)||(this.style&WS_HIDDEN));if(x!=null){x=_int(x);if(!IsNoSave){this.left=x;}}
if(y!=null){y=_int(y);if(!IsNoSave){this.top=y;}}
if(w!=null){w=_int(w);if(w<0){w=0;}
if(!IsNoSave){this.width=w;}}
if(h!=null){h=_int(h);if(h<0){h=0;}
if(!IsNoSave){this.height=h;}}
s=this.obj.style;try{if(x!=null){s.left=pxWrap(x);}
if(y!=null){s.top=pxWrap(y);}}catch(e){return;}
if(xlib.IsIE){if(w!=null){s.width=pxWrap(w);}
if(h!=null){s.height=pxWrap(h);}
if((w==null)&&(h==null)){return;}
if(xlib.version<9){bT=this.borderThickness();}
bot=h-(bT*2);if(this.style&WS_HEADER){top=this.hdrHeight;b+=bT;}
if(this.style&WS_FOOTER){b+=bT;if(!(this.style&WS_HEADER)){b+=bT;}
bot=h-this.ftrHeight-b;this.oFtr.style.top=pxWrap(bot);}
if(w!=null){w=w-(bT*2)-(this.margin*2);this.oBody.style.width=pxWrap(w<0?0:w);}
if(h!=null){h=bot-top-(this.margin*2);this.oBody.style.top=pxWrap(top);this.oBody.style.height=pxWrap(h<0?0:h);}
if(xlib.pngfix){this.oBG.style.left=this.oBody.style.left;this.oBG.style.top=this.oBody.style.top;this.oBG.style.width=this.oBody.style.width;this.oBG.style.height=this.oBody.style.height;}
return;}
w2=this.winAdjust(w);h2=this.winAdjust(h);if(w!=null){s.width=pxWrap(w2);}
if(h!=null){s.height=pxWrap(h2);}
if((w==null)&&(h==null)){return;}
b=this.borderThickness()*2;bT=xlib.winScrollWidth()+(xlib.OS=="Mac"?5:3);bot=h2-(this.margin*2);if(this.style&WS_HEADER){top=this.hdrHeight;}
if(h!=null&&this.style&WS_FOOTER){this.oFtr.style.top=pxWrap(h-this.ftrHeight-b);bot-=this.ftrHeight;}
if(w!=null){w-=(this.margin*2)+b;this.oBody.style.width=pxWrap(w<0?0:w);}
if(h!=null){this.oBody.style.top=pxWrap(top);this.oBody.style.height=pxWrap((bot-top)<0?0:bot-top);}};xWindow.prototype.position=function(x,y,w,h,MagneticFlag){var o;if(x==null&&y==null&&w==null&&h==null){w=this.obj.style;o=[{"left":_int(w.left),"top":_int(w.top),"width":_int(w.width),"height":_int(w.height)}];return o[0];}
this.setposition(x,y,w,h,1,MagneticFlag);};xWindow.prototype.setposition=function(left,top,width,height,IsSetWin,MagneticFlag){var xOffet=0,yOffset=0,a,cnt,i;if(left&&left.x){top=left.y;left=left.x;}
if(left!=null){xOffset=left-this.left;this.left=left;}
if(top!=null){yOffset=top-this.top;this.top=top;}
if(width!=null){this.width=width;}
if(height!=null){this.height=height;}
if(IsSetWin){if((this.style&WS_MAXIMIZED)||(this.style&WS_MINIMIZED)){return;}
this.positionDivs(left,top,width,height);}
if(MagneticFlag){a=this.getMagneticChildren()
cnt=len(a);for(i=0;i<cnt;i++){if(IsSetWin){a[i].left+=xOffset;a[i].top+=yOffset;}
a[i].obj.style.left=""+(_int(a[i].obj.style.left)+xOffset)+"px";a[i].obj.style.top=""+(_int(a[i].obj.style.top)+yOffset)+"px";}}};xWindow.prototype.scrollTo=function(x,y,mode){this.oBody.scrollLeft=x;this.oBody.scrollTop=y;};xWindow.prototype.winBody=function(){var o;if(this.theme.length){o=domObject(this.name+"_bTheme");if(o){return(o);}}
return domObject(this.name+"_body");};xWindow.prototype.winBodyGet=function(){return domInnerHTML_get(this.winBody());};xWindow.prototype.winBodySet=function(val){return domInnerHTML_set(this.winBody(),val);};xWindow.prototype.winHdrGet=function(){return domInnerHTML_get(this.name+"_h");};xWindow.prototype.winHdrSet=function(val){return domInnerHTML_set(this.name+"_h",val);};xWindow.prototype.winFtrGet=function(){return domInnerHTML_get(this.name+"_f");};xWindow.prototype.winFtrSet=function(val){return domInnerHTML_set(this.name+"_f",val);};xWindow.prototype.winChildrenArray=function(name){var cnt,i,a=[];name=typeof(name)=="string"?name:name.name;cnt=xWinList.length+1;for(i=1;i<=xWinMaxNum;i++){if(xWinList[i]&&xWinList[i].oparent&&xWinList[i].oparent.name){if(xWinList[i].oparent.name==name){if(xWinList[i].name!=name){a[a.length]=xWinList[i];}}}}
return(a);};xWindow.prototype.winMove=function(left,top){this.setposition(left,top,this.width,this.height,1);if(this.eMove){xlib.eventCurrentSet("eMove",{left:left,top:top});this.eventRun('Move',null);}};xWindow.prototype.winSize=function(w,h){this.setposition(this.left,this.top,w,h,1);if(this.eResize){xlib.eventCurrentSet("eResize",{width:w,height:h});this.eventRun('Resize',null);}};xWindow.prototype.actionRenderExternal=function(action,params){if(params){if(!strat("?",action)){action+="?"+params;}
else{action+="&"+params;}}
if(!(this.displayMode&DISP_NOPROGRESS)){action="/progress.htm?_url_="+jsEncode(action);}
if(xlib.startupOptions&XINIT_IFRAMEFIX){return("<iframe onload='iFrameFix(this.id);' id='"+this.name+"_iframe' src='"+this.actionFormatExt(action)+"' width='100%' height='100%' frameborder=0 scrolling='auto' allowtransparency='true'></iframe>");}
else{return("<iframe id='"+this.name+"_iframe' src='"+this.actionFormatExt(action)+"' width='100%' height='100%' frameborder=0 scrolling='auto' allowtransparency='true'></iframe>");}};xWindow.prototype.actionFormatExt=function(action,params){var a,cnt,i,f,x,base;if(!action.length){return("about:blank");}
if(strat("//",action)){action=strswap(action,"\r\n","\n");a=action.split("\n");action="";cnt=len(a);for(i=0;i<cnt;i++){if(strempty(a[i])||(left(alltrim(a[i]),2)=="//")){continue;}
action=a[i];break;}
if(strempty(action)){return("about:blank");}}
a=xWinIntDomains.split(";");cnt=len(a);f=0;for(i=0;i<cnt;i++){if(strati(a[i]+".",action)){f=1;break;}}
if((!f)&&(left(action,1)=="/")){f=1;}
if(f){x=strati("xid=",action);flag=0;if(x){action=strswapi(action,strextract(right(action,len(action)-x+1),"&",1),"xid="+this.name);flag=1;}
x=strati("xid%3d",action);if(x){base="xid%3d"+strextract(strextract(right(action,len(action)-x-5),"%",1),"&",1)
action=strswapi(action,base,"xid%3d"+this.name);}
if(!flag){if(action.indexOf("?")+1){action+="&xid="+this.name;}
else{action+="?xid="+this.name;}}}
return(action);};xWindow.prototype.actionValidate=function(s){var x=strcounti("<iframe",s);if(x&&(x!=strcounti("</iframe",s))){return("<!-- "+s+" -->");}
return(s);};xWindow.prototype.borderThickness=function(){if(this.style&WS_BORDER){return this.borderWidth;}
if(this.style&WS_BORDERTHICK){return this.borderWidthThick;}
return(0);};xWindow.prototype.borderSet=function(s,w,c,ReloadFlag){var b;if(this.style&WS_BORDER){b=this.borderWidth=_int(w);}
else if(this.style&WS_BORDERTHICK){b=this.borderWidth=_int(w);}
this.obj.style.border=s+" "+b+"px "+c;if(ReloadFlag){this.display(WS_NORMAL);}};xWindow.prototype.olayerEnable=function(f){if(xlib.browser=="SAFARI"||xlib.browser=="CHROME"){return;}
try{this.olayer.style.zIndex=f?this.obj.style.zIndex+1:-1;}catch(e){}};xWindow.prototype.eventRun=function(etype,e){switch(etype){case"DblClick":xlib.editClearSelection(e);case"Click":if(xlib.eventDefaultNode(xlib.eventTarget(e))){return(0);}}
return(this.eventProcess(this["e"+etype],e));};xWindow.prototype.eventProcess=function(edata,e){if(!edata){return(0);}
xlib.eventCurrentSet("win",this);xlib.eventCurrentSet("winName",this.name);try{if(typeof(edata)=="string"){eval(edata);}
else{edata(this,e);}}catch(err){return(0);}
return(1);};xWindow.prototype.shadowSet=function(o){if(xlib.IsIE&&(xlib.version>=7)){o=typeof(o)=="undefined"?this.obj:o;o.style.filter=this.shadow.length?this.shadow:"progid:DXImageTransform.Microsoft.Shadow(color=gray, direction=135, strength=5);";}};xWindow.prototype.tooltipFunc=function(e,flag){var w,n,o,m,borderWidth,opts,f;var mode=this.displayMode,width=this.ttWidth,height=0,offset=5,bgColor=this.ttBG,bgImage=null;var xOffset=0,yOffset=10,padding=4,shadow=1,opacity=null;borderWidth=1;if(!strempty(this.ttOpts)){opts=eval(this.ttOpts);if(opts){mode=opts.mode||mode;width=opts.width||width;height=opts.height||height;offset=opts.offset||offset;bgColor=opts.bgColor||bgColor;bgImage=opts.bgImage||bgImage;xOffset=opts.xOffset||xOffset;yOffset=opts.yOffset||yOffset;padding=opts.padding||padding;opacity=opts.opacity||opacity;shadow=opts.shadow==null?shadow:opts.shadow;}}
n=this.name+"_tt";o=domObject(n);if(!flag){if(!o){return;}
if(!e){domDelete(o);xWinIsTooltip=null;return;}
w=xWinFromElement(xlib.eventTarget(e));if(!(xMouseE.isInMove||xMouseE.isInSize)){if(w&&w.name==this.name){return;}}
if(mode&DISP_ANIM_TOOLTIP){f=function(o){domDelete(o);};xlib.animateHeight(o,_int(o.offsetHeight)-(borderWidth*2),1,{interval:10,power:0.5,steps:10},f);}
else{domDelete(o);}
xWinIsTooltip=null;return;}
if(xWinIsTooltip){xWinIsTooltip.tooltipFunc(e,0);}
if(xMouseE.isInMove||xMouseE.isInSize){return;}
if(o){o.style.zIndex=this.zIndexGet()+10000;return;}
m=xlib.mousePos(e);m.x+=xOffset;m.y+=yOffset;o=domAdd(null,"div",n);o.className="xTooltip";if(xlib.IsIE){o.style.width=width;if(height){o.style.height=height;}}
else{o.style.width=width-((padding+borderWidth)*2);if(height){o.style.height=height-((padding+borderWidth)*2);}}
o.style.left=xlib.winAdjustX(m.x+xlib.winScrollX(),o.style.width,offset);o.style.top=m.y+xlib.winScrollY();domInnerHTML_set(o,this.tooltip);if(bgColor){o.style.background=bgColor;}
if(bgImage){o.style.background="";o.style.border="none";if(xlib.pngfix&&strati(".png",bgImage)){domImageSet(o,bgImage,1);}
else{o.style.backgroundImage="url("+bgImage+")";}}
o.style.padding=padding;if(opacity!=null){xlib.fx.opacity(o.id,opacity);}
else{if(shadow){this.shadowSet(o);}}
o.style.zIndex=this.zIndexGet()+10000;xlib_PngFix(o);if(mode&DISP_ANIM_TOOLTIP){xlib.animateHeight(o,1,xlib.winOffsetHeight(o,padding,borderWidth),opts);}
else{o.style.visibility='visible';}
xWinIsTooltip=this;};xWindow.prototype.errSet=function(errnum){this.err=errnum;};xWindow.prototype.errGet=function(errnum){var a,cnt,i;desc=desc?desc:"";a=[ERR_NONAME,"No window ID specified",ERR_ALREADYEXISTS,"The window name already exists",ERR_TOOMANYWINDOWS,"Too many windows defined"];if(!isvar(errnum)){errnum=this.err;}
cnt=len(a);for(i=0;i<cnt;i+=2){if(errnum==a[i]){return({"num":errnum,"desc":a[i+1]});}}
return(null);};function xMouseHandler(){this.win=null;this.prevWin=null;this.button=0;this.wPos=null;this.ePos=null;this.isInMove=0;this.isInSize=0;this.dir="";this.defCursor="";this.dragData=null;this.eTarget=null;this.isGrid=0;this.aMagneticChildren=null;this.init();}
xMouseHandler.prototype.init=function(){if(this.win){this.win.olayerEnable(0);}
this.win=null;this.button=0;this.wPos=null;this.ePos=null;this.isInMove=0;this.isInSize=0;this.eTarget=null;this.mouseoutHandler=null;};var xMouseE=new xMouseHandler();function xDropDataGet(e){var d,txt,url;if(xMouseE.dragData){d=xMouseE.dragData;xMouseE.dragData=null;}
else{if(!xlib.IsFF){txt=e.dataTransfer.getData("Text");url=e.dataTransfer.getData("url");d=txt?txt:url;}
else{alert(e.originalTarget);}}
return(d);}
function xWinMoveDir(e,w){var m,x,y,d="",o,o2,b,adj,xoff;if((w.style&WS_MAXIMIZED)||(w.style&WS_MINIMIZED)){return("");}
o=w.position();if(w.oparent){o2=w.oparent.position();b=w.oparent.borderThickness();o.left+=o2.left+b;o.top+=o2.top+b;}
b=w.borderThickness();adj=xlib.winWidthAdjustment(b);xoff=xWinMoveOffset+(xWinTouch?4:0);m=xlib.mousePos(e);x=m.x+xlib.winScrollX();y=m.y+xlib.winScrollY();if(w.oparent&&w.oparent.style&WS_HEADER){o.top+=w.oparent.hdrHeight;}
if(x<o.left||x>o.left+o.width+adj||y<o.top||y>o.top+o.height+adj){return("");}
if(x<=o.left+xoff){if(y<=o.top+xoff){d="nw";}
else if(y>=o.top+o.height+adj-xoff){d="sw";}
else{d="w";}}
else if(x>=o.left+o.width+adj-xoff){if(y<=o.top+xoff){d="ne";}
else if(y>=o.top+o.height+adj-xoff){d="se";}
else{d="e";}}
else if(y<o.top+xoff){d="n";}
else if(y>o.top+o.height+adj-xoff){d="s";}
return(d);}
function xMouseMoveCursor(eTarget,w){if(xWinOverLink(eTarget)){xlib.mouseCursor(eTarget,"pointer");}
else if(xWinOverBody(eTarget)){if(w.eDrop&&(w.style&WS_DROP)){xlib.mouseCursor(eTarget,"crosshair");}
else if(w.eClick||w.eDblClick){xlib.mouseCursor(eTarget,"pointer");}
else{xlib.mouseCursor(eTarget,xMouseE.defCursor.length?xMouseE.defCursor:"default");}}
else if(xWinOverHeader(eTarget)){if(xWinOverButton(eTarget)){xlib.mouseCursor(eTarget,"pointer");return;}
xlib.mouseCursor(eTarget,"move");}
else{xlib.mouseCursor(eTarget,xMouseE.defCursor.length?xMouseE.defCursor:"default");}}
function xWinMouseMove(e){var eTarget,x,y,w,h,oF=4,win,m,min=10,offset=0,k,d,mpos;var xOffset,yOffset,a,cnt,i,pt;m=xMouseE;e=xlib.eventGet(e);if(xlib.IsIE&&(xlib.version<9)){m.button=xlib.mouseButton(e);}
eTarget=m.eTarget?m.eTarget:xlib.eventTarget(e);if(xlib.eventDefaultNode(eTarget)){return(true);}
win=xWinFromElement(eTarget);m.win=win;xlib.eventCurrentSet("mPos",xlib.eventPosition(e));if(m.win){xMouseMoveCursor(eTarget,win);if(m.button&MOUSE_BUTTONLEFT){if((m.win.style&WS_MAXIMIZED)||(m.win.style&WS_MINIMIZED)){return(true);}
if((!m.isInMove)&&(m.win.style&WS_RESIZABLE)){mpos=xlib.mousePos(e);if(m.isInSize){if(!m.ePos){return(true);}
if((!xlib.pageSizeEnabled)&&(!m.win.issys)){return(true);}
m.win.olayerEnable(1);xlib.pageLayer(1,m.win.obj);xlib.editClearSelection(e);mpos=xlib.mousePos(e,1);x=m.wPos.left;y=m.wPos.top;w=m.wPos.width;h=m.wPos.height;k=xlib.keyGet(e);if(m.dir.indexOf("n")+1){y=m.wPos.top+mpos.y-m.ePos.y;h=m.wPos.height-mpos.y+m.ePos.y;if(k.isSHIFT){w=xlib.winAdjustAspect(m.wPos.width,m.wPos.height,h);}
if(k.isCTRL){h=xlib.winAdjustGrid(h);if(k.isSHIFT){w=xlib.winAdjustGrid(w);}}}
if(m.dir.indexOf("e")+1){w=m.wPos.width+mpos.x-m.ePos.x;if(k.isSHIFT){h=xlib.winAdjustAspect(m.wPos.height,m.wPos.width,w);}
if(k.isCTRL){w=xlib.winAdjustGrid(w);if(k.isSHIFT){h=xlib.winAdjustGrid(h);}}}
if(m.dir.indexOf("s")+1){h=m.wPos.height+mpos.y-m.ePos.y;if(k.isSHIFT){w=xlib.winAdjustAspect(m.wPos.width,m.wPos.height,h);}
if(k.isCTRL){h=xlib.winAdjustGrid(h);if(k.isSHIFT){w=xlib.winAdjustGrid(w);}}}
if(m.dir.indexOf("w")+1){x=m.wPos.left+mpos.x-m.ePos.x;w=m.wPos.width-mpos.x+m.ePos.x;if(k.isSHIFT){h=xlib.winAdjustAspect(m.wPos.height,m.wPos.width,w);}
if(k.isCTRL){w=xlib.winAdjustGrid(w);if(k.isSHIFT){h=xlib.winAdjustGrid(h);}}}
if(!xlib.IsIE){offset=m.win.borderThickness()*2;}
if(w!=null){if(w<min){return(true);}
if(!xlib.IsIE){w+=offset;}}
if(h!=null){if(h<min){return(true);}
if(!xlib.IsIE){h+=offset;}}
if(m.win.onSizeFunc){pt=m.win.onSizeFunc(w,h,m.win);if(pt){w=pt.x;h=pt.y;}}
xlib.UpdateFlag(1,m.win);m.win.position(x,y,w,h);if(m.win.eResize){xlib.eventCurrentSet("eResize",{width:w,height:h});m.win.eventRun('Resize',e);}
if(m.win.oaOpts&&m.win.oaOpts&xlib.openajax.ID_WINSIZE){xlib.openajax.objPublish(e,xlib.openajax.ID_WINSIZE,m.win,{x:w,y:h},m.win.oaDefSrvs.sid,"");}
return xlib.eventCancel(e);}}
if((!m.isInSize)&&(m.win.style&WS_MOVEABLE)){if(!m.ePos){return(true);}
if((!xlib.pageMoveEnabled)&&(!m.win.issys)){return(true);}
xlib.editClearSelection(e);mpos=xlib.mousePos(e);if(!m.isInMove){if((Math.abs(mpos.x-m.ePos.x)<oF)&&(Math.abs(mpos.y-m.ePos.y)<oF)){return(true);}
m.win.olayerEnable(1);xlib.pageLayer(1,m.win.obj);m.isInMove=1;if(xlib.keyGet(e).isCTRL){m.isGrid=xlib.desktop.gridSet();}
m.aMagneticChildren=m.win.getMagneticChildren();if(this.mouseoutHandler){xlib.eventUnbind(m.win.oBody,"mouseout","xWinMouseUp");}
this.mouseoutHandler=xlib.eventBind(m.win.oBody,"mouseout","xWinMouseUp");}
if(xWinIsTooltip){xWinIsTooltip.tooltipFunc(e,0);}
x=xlib.winScrollX()+m.wPos.left+mpos.x-m.ePos.x;y=xlib.winScrollY()+m.wPos.top+mpos.y-m.ePos.y;if(xlib.keyGet(e).isCTRL){x=xlib.winAdjustGrid(x);y=xlib.winAdjustGrid(y);}
if(m.win.onMoveFunc){pt=m.win.onMoveFunc(x,y);if(pt){x=pt.x;y=pt.y;}}
xOffset=x-m.win.left;yOffset=y-m.win.top
xlib.UpdateFlag(1,m.win);m.win.position(x,y);if(m.win.eMove){xlib.eventCurrentSet("eMove",{left:x,top:y});m.win.eventRun('Move',e);}
if(m.win.oaOpts&&m.win.oaOpts&xlib.openajax.ID_WINMOVE){xlib.openajax.objPublish(e,xlib.openajax.ID_WINMOVE,m.win,{x:x,y:y},m.win.oaDefSrvs.sid,"");}
a=m.aMagneticChildren;cnt=len(a);for(i=0;i<cnt;i++){a[i].left+=xOffset;a[i].top+=yOffset;a[i].obj.style.left=a[i].left;a[i].obj.style.top=a[i].top;}
xlib.eventCancelBubble(e);return xlib.eventCancel(e);}}
if(m.win.style&WS_RESIZABLE){d=xWinMoveDir(e,m.win);if((!xlib.pageSizeEnabled)&&(!m.win.issys)){return(true);}
if(d.length){if(!m.defCursor.length){m.defCursor=eTarget.style.cursor.indexOf("-")?"":eTarget.style.cursor;}
if(!xWinOverButton(eTarget)){xlib.mouseCursor(eTarget,d+"-resize");}}
else{xMouseMoveCursor(eTarget,m.win);m.defCursor="";return(true);}}
return(true);}
else{if(xWinIsTooltip){if(!(xWinIsTooltip.displayMode&DISP_NOAUTOCLOSE)){xWinIsTooltip.tooltipFunc(e,0);}}}
return(true);}
function xWinMouseDown(e){var m,w,topFlag,eTarget;e=xlib.eventGet(e);m=xMouseE;if(m.win){m.init();}
eTarget=xlib.eventTarget(e)
if(xlib.eventDefaultNode(eTarget)){return(true);}
m.button=xlib.mouseButton(e);xlib.eventCurrentSet("mButton",m.button);xlib.eventCurrentSet("mPos",xlib.eventPosition(e));m.win=xWinFromElement(eTarget);if(m.win){if(m.prevWin&&(m.prevWin.name!=m.win.name)){xlib.dblclkTime=xlib.clkTime=0;}
m.prevWin=m.win;}
else{xlib.menuCurrentSet(null);xlib.dblclkTime=xlib.clkTime=0;}
xlib.eventClickHandler(e,m.button|MOUSE_DOWN);if(m.button&MOUSE_BUTTONLEFT){if(m.win){m.eTarget=xlib.eventTarget(e);topFlag=m.win.bringtotop();m.ePos=xlib.eventPosition(e);m.wPos=m.win.position();if((m.win.style&WS_RESIZABLE)&&!xWinOverButton(m.eTarget)){m.dir=xWinMoveDir(e,m.win);if(m.dir.length){m.isInMove=0;m.isInSize=1;if(this.mouseoutHandler){xlib.eventUnbind(m.win.oBody,"mouseout","xWinMouseUp");}
this.mouseoutHandler=xlib.eventBind(m.win.oBody,"mouseout","xWinMouseUp");if(xlib.keyGet(e).isCTRL){m.isGrid=xlib.desktop.gridSet();}}}
if(topFlag||xlib.eventDefaultNode(m.eTarget)||(m.eTarget.getAttribute("type")=="button")){}
if(!xlib.IsFF){return(true);}
return(xlib.eventCancel(e));}}
return(true);}
function xWinMouseUp(e){var m,btn,eTarget;e=xlib.eventGet(e);eTarget=xlib.eventTarget(e)
if(xlib.eventDefaultNode(eTarget)){return(true);}
m=xMouseE;btn=xlib.eventCurrentGet("mButton");if(m.isGrid){m.isGrid=xlib.desktop.gridRestore();}
if(!xlib.keyGet(e).isALT){xlib.eventClickHandler(e,MOUSE_UP);}
if(m.isInMove||m.isInSize){xlib.pageLayer(0);xlib.mouseCursor(m.eTarget,"auto");m.init();xlib.update();xlib.eventCancelBubble(e);return xlib.eventCancel(e);}
if(m.win){if(xlib.startupOptions&XINIT_RIGHTCLICK){if((btn&MOUSE_BUTTONRIGHT)||((btn&MOUSE_BUTTONLEFT)&&xlib.keyGet(e).isALT)){xlib.eventGlobal=e;if(m.win.contextmenu()){m.init();xlib.pageLayer(0);xlib.mouseCursor(m.eTarget,"auto");xlib.eventCancelBubble(e);return xlib.eventCancel(e);}}}
xlib.pageLayer(0);xlib.mouseCursor(m.eTarget,"auto");}
m.init();return(true);}
function xWinArray(IncludeSys){var i,cnt,a=[];cnt=len(xWinList);for(i=1;i<cnt;i++){if(xWinList[i]){if(IncludeSys){a[len(a)]=xWinList[i];}
else{if(!xWinList[i].issys){a[len(a)]=xWinList[i];}}}}
return(a);}
function xWinContextMenu(e){var w,btn;w=xWinFromElement(xlib.eventTarget(e));if(w){btn=xlib.eventCurrentGet("mButton");if((btn&MOUSE_BUTTONRIGHT)||((btn&MOUSE_BUTTONLEFT)&&xlib.keyGet(e).isALT)){return xlib.eventCancel(e);}}
else if(xLibContextMenuFunc){return(xLibContextMenuFunc(e));}
return(true);}
function xWinRecreate(id,data){var w=xWin(id);if(w){w.destroy();}
if(xlib.IsIE){setTimeout("new xWindow( '"+id+"', '"+data+"' );",10);}
else{w=new xWindow(id,data);}
return(w);}
function xWinResize(e){var cnt,i;e=xlib.eventGet(e);cnt=xWinList.length;for(i=1;i<cnt;i++){if(xWinList[i].style&WS_MAXIMIZED){xWinList[i].maximize(1);}}
return(true);}
function xWinScroll(e){var cnt,i,IsMax=0;e=xlib.eventGet(e);cnt=xWinList.length;for(i=1;i<cnt;i++){if(xWinList[i].style&WS_MAXIMIZED){IsMax=1;break;}}
if(IsMax){window.scrollTo(xScrollPos.x,xScrollPos.y);}}
function xDropDataProcess(e){var data,pos,w,id;pos=xlib.mousePos(e,1);data=xDropDataGet(e);if(xDropHandler){data=xDropHandler(data,pos);}
if(strempty(data)){return;}
xlib.dndType=0;xlib.dndData=null;if(xlib.openajax&&xlib.openajax.dndEnabled){w=xlib.openajax.publish("xwinlib_dnd","({ data : \""+jsEncode(data)+"\", pos : { x : "+pos.x+", y : "+pos.y+" } })");}
else{w=xlib.objFromData(data,pos,0,null,0,e);}
id=w?w.name:"";if(xlib.funcDropDesktop){xlib.funcDropDesktop(xlib.dndData,data,id);}}
function xWinNameGen(otype){var s,d,x;while(1){d=new xDate();s=strswap(xlib.objNameFromId(otype)," ","")+"_";s+=dec2hex(_int(d.format("YYMMDD")));s+=dec2hex(_int(d.format("HHMNSS")));s+=dec2hex(random(1000));if(!xWinFromName(s)){break;}}
return(s);}
function xWinDragDrop_w3c(e){var win;e=xlib.eventGet(e);xlib.winStatus(e.nodeName);win=xWinFromElement(xlib.eventTarget(e));if(win){win.eventRun('Drop',e);return;}
var IsAlt=e.altKey?1:0;var IsCtrl=e.ctrlKey?1:0;var IsShift=e.shiftKey?1:0;win=xWinFromElement(xlib.eventTarget(e));alert("data:"+xMouseE.dragData+", win:"+win.name+", alt:"+IsAlt+", ctrl:"+IsCtrl+", shift:"+IsShift);}
function xLibrary(){this.ver="2.1.2";this.browser="";this.version="";this.OS="";this.IsIE=0;this.IsFF=0;this.IsFF_Plugin=0;this.isFlashAllowed=1;this.isMobile=0;this.isMobileSafari=0;this.isModern=1;this.DisableExternalContent=0;this.ajaxProxy="/ajaxProxy.htm"
this.eventGlobal=null;this.startupOptions=0;this.errorFunc=null;this.actionPreprocessFunc=null;this.editClearSelection=null;this.eventHandlers=[];this.eventGet=null;this.eventKey=null;this.mButton=0;this.mPos=null;this.olayer=null;this._scrollwidth=-1;this.scrollPos=null;this.topOffset=0
this.pageMoveEnabled=1;this.pageSizeEnabled=1;this.pageObjMenuEnabled=1;this.pageObjShareOverride=0;this.desktop=null;this.fx=null;this.animSteps=15;this.animInterval=10;this.animPower=0.5;this.pngfix=0;this.clkTime=0;this.dblclkTime=0;this.clkCount=0;this.eClkTime=0;this.eDblClkTime=0;this.clkDelay=500;this.dblclkDelay=1100;this.oCalcImage=null;this.xImageLoaded=0;this.xImageTimeout=100;this.ddData="";this.ddPos=null;this.curMenu=null;this.defX=15;this.defY=70;this.ReqUpdate=0;this.ffPlugin=null;this.lookupFunc=null;this.openajax=null;this.jsDisableError=0;this.jsErrorFunc=this._jsErrorFunc;this.initInternal();this.aFrameBusters=[];this.rotator=null;this.dndType=0;this.dndData=null;this.funcDropDesktop=null;this.DND_WIN=1;this.DND_BG=2;this.DND_OBJ=4;this.funcDesktopUpdate=null;this.autoBG=0;this.domIsReady=0;}
xLibrary.prototype.init=function(options){this.startupOptions=options;if(options&XINIT_ACTIVEWINDOWS){this.eventBind(document,"mousemove",xWinMouseMove);this.eventBind(document,"mousedown",xWinMouseDown);this.eventBind(document,"mouseup",xWinMouseUp);this.eventBind(window,"resize",xWinResize);this.eventBind(window,"scroll",xWinScroll);}
if(options&XINIT_RIGHTCLICK){this.eventBind(document,"contextmenu",xWinContextMenu);}
if(options&XINIT_ENABLEFX){this.fx=new xFx();}
if(options&XINIT_DEFAULTDIRS){xWinImageDir="http://www.xwinlib.com/libs/support";xWinThemesDir=xWinImageDir;}
if(options&XINIT_DESKTOP){this.desktop=new xDesktop();}
if(options&XINIT_OPENAJAX){this.openajax=new oaInterface();}
if(!xlib.IsIE){HTMLElement.prototype.__defineGetter__("outerHTML",function(){var span=document.createElement("span");span.appendChild(this.cloneNode(true));return span.innerHTML;});HTMLElement.prototype.__defineSetter__("outerHTML",function(html){var range=document.createRange();this.innerHTML=html;range.selectNodeContents(this);var frag=range.extractContents();this.parentNode.insertBefore(frag,this);this.parentNode.removeChild(this);});}
xlibInitPage();};xLibrary.prototype.initInternal=function(){xEnvironment.init();this.browser=upper(xEnvironment.browser);this.IsIE=strat("EXPLORER",this.browser);this.IsFF=(this.browser=="FIREFOX"||this.browser=="MOZILLA")?1:0;this.version=xEnvironment.version;this.OS=xEnvironment.OS;this.pngfix=(this.IsIE&&(this.version<7));switch(this.browser){case"EXPLORER":this.eventGet=x_ie_eventGet;this.eventKey=x_ie_eventKey;this.editClearSelection=x_ie_editClearSelection;break;case"OPERA":this.clkDelay=700;this.dblclkDelay=1500;this.eventGet=x_w3c_eventGet;this.eventKey=x_w3c_eventKey;this.editClearSelection=x_w3c_editClearSelection;break;default:this.animSteps=10;this.animInterval=5;this.animPower=0.5;this.eventGet=x_w3c_eventGet;this.eventKey=x_w3c_eventKey;this.editClearSelection=x_w3c_editClearSelection;}
if(this.IsIE&&(this.version<7)){this.isModern=0;this.eventBind(window,"load",xlib_PngFix);}
switch(this.browser){case"IPAD":case"IPOD":this.isFlashAllowed=0;this.isMobileSafari=1;xWinTouch=1;break;case"SAFARI":if(upper(this.OS)=="IPHONE/IPOD"){this.isFlashAllowed=0;this.isMobileSafari=1;xWinTouch=1;}
break;default:if(strati("ANDROID",navigator.userAgent)){this.isFlashAllowed=1;xWinTouch=1;}}
this.isMobile=xWinTouch;this.eventBind(window,"unload",this.eventUnbindAll);};xLibrary.prototype.copyToClipboard=function(data,dataType){if(!dataType){dataType="plain/text";}
if(dataType!="plain/text"){alert("dataType 'plain/text' is supported only");return;}
if(this.IsIE){if(window.clipboardData&&clipboardData.setData){window.clipboardData.clearData('Text');window.clipboardData.setData('Text',data);}}else{var element=document.getElementById("xWinLibDataElementId");if(!element){element=document.createElement("xWinLibDataElement");element.setAttribute("id","xWinLibDataElementId");document.documentElement.appendChild(element);}
element.setAttribute("event","copyToClipboard");element.setAttribute("data",data);element.setAttribute("dataType",dataType);var evt=document.createEvent("Events");evt.initEvent("xWinLibExtensionEvent",true,false);element.dispatchEvent(evt);}};xLibrary.prototype.initFromDivs=function(prefix){var a,cnt,i,w;var obj,name;if(prefix==null){prefix="xwinlib";}
a=document.getElementsByTagName("div");for(i=0;i<len(a);i++){if(!a[i]){continue;}
if(!strati(prefix+"_",a[i].id)){continue;}
obj=a[i];name=right(obj.id,len(obj.id)-(len(prefix)+1));win=new xWindow(name);win.style=WS_NORMAL|WS_MOVEABLE|WS_TRANSPARENT;win.overflow="hidden";win.padding=_int(obj.style.padding);win.margin=_int(obj.style.margin);winstyle=obj.style.winstyle;if(winstyle){win.style=eval(obj.style.winstyle);}
if(!strempty(obj.style.border)){win.borderWidth=_int(obj.style.borderWidth);win.borderStyle=obj.style.borderStyle;win.borderColor=obj.style.borderColor;win.style|=WS_BORDER;}
win.otype=1;win.transLevel=100;win.setposition(_int(obj.style.left),_int(obj.style.top),_int(obj.style.width),_int(obj.style.height));win.action=domInnerHTML_get(obj);domInnerHTML_set(obj,"");win.create();}};xLibrary.prototype.isFrameBuster=function(url){var a,cnt,i;url=lower(url);a=this.aFrameBusters;cnt=len(a);for(i=0;i<cnt;i++){if(strati(a[i],url)){return(1);}}
return(0);};xLibrary.prototype.UpdateFlag=function(flag,win){if(flag==null){return(this.ReqUpdate);}
if(win&&win.issys){return;}
this.ReqUpdate=flag;};xLibrary.prototype.isInFrame=function(){return(self==top?0:1);};xLibrary.prototype.namespaceCreate=function(ns){var a,i,nSpace;a=ns.split(".");nSpace=a[i];for(i=0;i<len(a);i++){if(typeof(nSpace)=="undefined"){eval(nSpace+"={};");}
if(i+1<a.length){nSpace+="."+a[i+1];}}};xLibrary.prototype.fontCreate=function(opts){var f=new xWinFont(opts);return(f);};xLibrary.prototype.eventBind=function(el,eventname,eventhandler,UseCapture){UseCapture=UseCapture==null?false:UseCapture;if(typeof(el)=="string"){el=document.getElementById(el);}
try{if(el.addEventListener){el.addEventListener(eventname,eventhandler,UseCapture);}
else if(el.attachEvent){el.attachEvent("on"+eventname,eventhandler);}
this.eventHandlers.push(el,eventname,eventhandler);}catch(e){}};xLibrary.prototype.eventUnbind=function(el,eventname,eventhandler){if(typeof(el)=="string"){el=document.getElementById(el);}
try{if(el.removeEventListener){el.removeEventListener(eventname,eventhandler,false);}
else if(el.detachEvent){el.detachEvent("on"+eventname,eventhandler);}}catch(e){}};xLibrary.prototype.eventUnbindAll=function(){var i,cnt=0,o;if(this.eventHandlers){cnt=this.eventHandlers.length;}
for(i=0;i<cnt;i+=3){try{this.eventUnbind(this.eventHandlers[i],this.eventHandlers[i+1],this.eventHandlers[i+2]);}catch(err){}}
this.eventHandlers=null;if(this.olayer){domDelete(this.olayer);}
if(xlib.IsFF){o=domObject("ffplugin_img");if(o){domDelete(o);}}};xLibrary.prototype.eventTarget=function(e){var t;e=e?e:window.event;if(e.target){t=e.target;}
else if(e.srcElement){t=e.srcElement;}
if(t.nodeType==3){t=t.parentNode;}
return(t);};xLibrary.prototype.eventCancel=function(e){if(!isvar(e)){return(false);}
if(e.preventDefault){e.preventDefault();}
else{e.returnValue=false;}
return(false);};xLibrary.prototype.eventCancelBubble=function(e){if(xlib.IsIE){e.cancelBubble=true;}
else{e.stopPropagation();}};xLibrary.prototype.eventCancelDrag=function(e){return this.eventCancel(e);};xLibrary.prototype.eventCancelDrop=function(e){return this.eventCancel(e);};xLibrary.prototype.eventPosition=function(e){var m,s;m=xlib.mousePos(e);s=xlib.winScrollPos();return({"x":m.x+s.x,"y":m.y+s.y});};xLibrary.prototype.eventClickHandler=function(e,opts){var t,w,d=new Date();if(opts&MOUSE_BUTTONRIGHT){return;}
if(opts&MOUSE_DOWN){this.clkTime=d.getTime();}
else if(opts&MOUSE_UP){t=d.getTime();if(t<=this.clkTime+this.clkDelay){if(t<=this.dblclkTime+this.dblclkDelay){w=xWinFromElement(xlib.eventTarget(e));if(w){if(w.eDblClick){this.eventCurrentSet("eDblClkTime",t-this.dblclkTime);w.eventRun('DblClick',e);}
if(w.oaOpts&&w.oaOpts&xlib.openajax.ID_DBLCLICK){xlib.openajax.objPublish(e,xlib.openajax.ID_DBLCLICK,w,xlib.eventPosition(e),w.oaDefSrvs.sid,"");}}
this.clkTime=0;this.dblclkTime=0;}
else{this.dblclkTime=this.clkTime;if(xMouseE.win){if(xMouseE.win.eClick){this.eventCurrentSet("eClkTime",t-this.clkTime);xMouseE.win.eventRun('Click',e);}
w=xMouseE.win;if(w.oaOpts&&w.oaOpts&xlib.openajax.ID_CLICK){xlib.openajax.objPublish(e,xlib.openajax.ID_CLICK,w,xlib.eventPosition(e),w.oaDefSrvs.sid,"");}}}}
else{this.clkTime=0;this.dblclkTime=0;}}};xLibrary.prototype.eventBody=function(){return document.getElementsByTagName("body").item(0);};xLibrary.prototype.eventDefaultNode=function(o){if(strati("vscrollerbar",o.className)){return(1);}
switch(o.nodeName){case"INPUT":if(o.getAttribute("type")=="button"){return(0);}
case"TEXTAREA":case"SELECT":case"EMBED":case"OBJECT":case"A":return(1);}
return(0);};xLibrary.prototype.eventCurrentSet=function(ename,val){this[ename]=val;};xLibrary.prototype.eventCurrentGet=function(ename){return this[ename];};xLibrary.prototype.intervalSet=function(el,interval){return window.setInterval(el,interval);};xLibrary.prototype.intervalClear=function(el){return window.clearInterval(el);};xLibrary.prototype._jsErrorFunc=function(msg,url,l){this.jsDisableError=1;if(this.jsDisableError){return(true);}
return(confirm("ERROR DETECTED:\n\n"+msg+"\n\nLinenum: "+l+"\n\nContinue?"));};xLibrary.prototype.keyGet=function(e){var plugin=document.getElementById("xWinLibChromePluginId");var o;if(!e){o={"code":0,"isALT":0,"isCTRL":0,"isSHIFT":0};}
else{if(plugin!=null&&plugin.IsAltPressed!=null&&plugin.IsCtrlPressed!=null&&plugin.IsShiftPressed!=null){o={"code":(e&&e.which?e.which:e.keyCode),"isALT":e.altKey?true:plugin.IsAltPressed()=="true","isCTRL":e.ctrlKey?true:plugin.IsCtrlPressed()=="true","isSHIFT":e.shiftKey?true:plugin.IsShiftPressed()=="true"};}else{o={"code":(e&&e.which?e.which:e.keyCode),"isALT":e.altKey,"isCTRL":e.ctrlKey,"isSHIFT":e.shiftKey};}}
return(o);};xLibrary.prototype.mouseX=function(e,IncludeScroll){var x=0;if(xWinTouch){x=e.changedTouches[0].pageX;}
else if(e.pageX){x=e.pageX-this.winScrollX();}
else if(e.clientX){x=e.clientX;}
if(IncludeScroll){x+=this.winScrollX();}
return(x);};xLibrary.prototype.mouseY=function(e,IncludeScroll){var y=0;if(xWinTouch){y=e.changedTouches[0].pageY;}
else if(e.pageY){y=e.pageY-this.winScrollY();}
else if(e.clientY){y=e.clientY;}
if(IncludeScroll){y+=this.winScrollY();}
return(y);};xLibrary.prototype.mousePos=function(e,IncludeScroll){if(IncludeScroll){return({"x":this.mouseX(e,1),"y":this.mouseY(e,1)});}
return({"x":this.mouseX(e),"y":this.mouseY(e)});};xLibrary.prototype.mouseButton=function(e){if(!e){return(0);}
if(xlib.IsIE&&(document.compatMode=="BackCompat")){if(e.which==null){if(!e.button){return(0)};return((e.button<2)?((e.button==1)?MOUSE_BUTTONLEFT:0):((e.button==4)?MOUSE_BUTTONCENTER:MOUSE_BUTTONRIGHT));}
if(!e.which){return(0)};return((e.which<2)?((e.which==1)?MOUSE_BUTTONLEFT:0):((e.which==2)?MOUSE_BUTTONCENTER:MOUSE_BUTTONRIGHT));}
if(e.which==null){if(!e.button){return(0)};if(xlib.IsIE&&(xlib.version>=9)){switch(e.button){case 0:return(MOUSE_BUTTONLEFT);case 1:return(MOUSE_BUTTONCENTER);case 2:return(MOUSE_BUTTONRIGHT);}}
return((e.button<2)?((e.button==1)?MOUSE_BUTTONLEFT:0):((e.button==4)?MOUSE_BUTTONCENTER:MOUSE_BUTTONRIGHT));}
if(!e.which){return(0)};switch(e.which){case 1:return(MOUSE_BUTTONLEFT);case 2:return(MOUSE_BUTTONCENTER);case 3:return(MOUSE_BUTTONRIGHT);}
return(0);};xLibrary.prototype.mouseCursor=function(o,csr){try{o.style.cursor=csr;}catch(e){}};xLibrary.prototype.update=function(){if(xlib.funcDesktopUpdate){xlib.funcDesktopUpdate();}};xLibrary.prototype.winWidth=function(){var offset=0;if(!xlib.IsIE){offset=xlib.winHasScrollV?xlib.winScrollWidth():0;}
else if(xlib.version>9){offset=xlib.winHasScrollV?xlib.winScrollWidth():0;}
if(window.innerWidth){return(_int(window.innerWidth)-offset);}
return(document.body.clientWidth-offset);};xLibrary.prototype.winHeight=function(){if(window.innerHeight){return(_int(window.innerHeight)-0);}
if(document.documentElement&&document.documentElement.clientHeight){return(document.documentElement.clientHeight);}
return document.body.clientHeight;};xLibrary.prototype.winHasScrollV=function(){var hasVScroll,cStyle;hasVScroll=document.body.scrollHeight>document.body.clientHeight;cStyle=document.body.currentStyle||window.getComputedStyle(document.body,"");hasVScroll=cStyle.overflow=="visible"||cStyle.overflowY=="visible"||(hasVScroll&&cStyle.overflow=="auto")||(hasVScroll&&cStyle.overflowY=="auto");return(hasVScroll);};xLibrary.prototype.winSize=function(){return({"width":this.winWidth(),"height":this.winHeight()});};xLibrary.prototype.winScrollX=function(o){var x=0;if(o){return o.scrollLeft;}
if(window.pageXOffset){x=window.pageXOffset;}
else if(document.body&&document.body.scrollLeft){x=document.body.scrollLeft;}
else if(document.documentElement&&document.documentElement.scrollLeft){x=document.documentElement.scrollLeft;}
else if(window.scrollX){x=window.scrollX;}
return(x);};xLibrary.prototype.winScrollY=function(o){var y=0;if(o){return o.scrollTop;}
if(window.pageYOffset){y=window.pageYOffset;}
else if(document.body&&document.body.scrollTop){y=document.body.scrollTop;}
else if(document.documentElement&&document.documentElement.scrollTop){y=document.documentElement.scrollTop;}
else if(window.scrollY){y=window.scrollY;}
return(y);};xLibrary.prototype.winScrollPos=function(o){return({"x":this.winScrollX(o),"y":this.winScrollY(o)});};xLibrary.prototype.winCoordinates=function(){var w1,w2;w1=this.winSize();w2=this.winScrollPos();return({"top":w2.y,"left":w2.x,"bottom":w2.y+w1.height,"right":w2.x+w1.width});};xLibrary.prototype.winScrollWidth=function(){if(this._scrollwidth!=-1){return this._scrollwidth;}
var inner=document.createElement('p');inner.style.width='100%';inner.style.height='200px';var outer=document.createElement('div');outer.style.position='absolute';outer.style.top='0px';outer.style.left='0px';outer.style.visibility='hidden';outer.style.width='200px';outer.style.height='150px';outer.style.overflow='hidden';outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2){w2=outer.clientWidth;}
document.body.removeChild(outer);this._scrollwidth=w1-w2;return this._scrollwidth;};xLibrary.prototype.winSortedArray=function(includeSys){var i,cnt,a,b,j;a=new Array();b=new Array();cnt=xWinList.length;for(i=1,j=0;i<cnt;i++){if(xWinList[i]){if((!xWinList[i].issys)||(xWinList[i].issys&&includeSys)){a[j++]=new Array(xWinList[i],xWinList[i].zorder);}}}
if(!j){return(null);}
a.sort(xlib.winSortFunc);cnt=len(a);for(i=0;i<cnt;i++){b[i]=a[i][0];}
return(b);};xLibrary.prototype.winSortFunc=function(a,b){var x=a[1];var y=b[1];return((x<y)?-1:((x>y)?1:0));};xLibrary.prototype.winStatus=function(s){window.status=s;};xLibrary.prototype.winAdjustX=function(x,width,offset){var xScroll,winWidth;x=typeof(x)=="number"?x:_int(x);width=typeof(width)=="number"?width:_int(width);xScroll=this.winScrollX();winWidth=this.winWidth();if(x+width+offset>xScroll+winWidth){x=(xScroll+winWidth)-(width+offset);}
if(x<xScroll+offset){x=xScroll+offset;}
return(x);};xLibrary.prototype.winAdjustY=function(y,height,offset){var yScroll,winHeight;y=typeof(y)=="number"?y:_int(y);height=typeof(height)=="number"?height:_int(height);yScroll=this.winScrollY();winHeight=this.winHeight();if(y+height+offset>yScroll+winHeight){y=(yScroll+winHeight)-(height+offset);}
if(y<yScroll+offset){y=yScroll+offset;}
return(y);};xLibrary.prototype.winAdjustPos=function(x,y,width,height,offset){x=this.winAdjustX(x,width,offset);y=this.winAdjustY(y,height,offset);return({"x":x,"y":y});};xLibrary.prototype.winCalcCenter=function(w,h,oparent){var x,y,h2;w=typeof(w)=="number"?w:_int(w);h=typeof(h)=="number"?h:_int(h);if(oparent){x=(oparent.width-w)/2;h2=oparent.height-(oparent.style&WS_HEADER?oparent.hdrHeight:0)-(oparent.style&WS_FOOTER?oparent.ftrHeight:0);y=(h2-h)/2;x=x<0?0:x;y=y<0?0:y;return({"x":_int(x),"y":_int(y)});}
x=_int(((this.winWidth()-w)/2)+this.winScrollX());y=_int(((this.winHeight()-h)/2)+this.winScrollY());x=x<0?0:x;y=y<0?0:y;return({"x":x,"y":y});};xLibrary.prototype.winClipSet=function(o,x,y,w,h){if(x==null){x=_int(o.style.left);}
if(y==null){y=_int(o.style.top);}
if(w==null){w=_int(o.style.width);}
if(h==null){h=_int(o.style.height);}
o.style.clip="rect(0px "+w+"px "+h+"px 0px)";};xLibrary.prototype.isReady=function(flag){var e;if(this.domIsReady){return(1);}
try{domObject("xlib_ready");this.domIsReady=1;return(1)}
catch(e){}
return(0)};xLibrary.prototype.winModalLayer=function(flag){var obj,id="xModalLayer",pt;if(flag){obj=domObject(id);if(obj){return(obj);}
obj=domAdd(null,"div",id);obj.style.backgroundImage="url("+xWinImageDir+"/xModalLayer.png)";obj.style.position=xlib.isModern?"fixed":"absolute";if(!xlib.isModern){obj.style.left=pxWrap(xlib.winScrollX());obj.style.top=pxWrap(xlib.winScrollY());}
else{obj.style.top="1px";obj.style.left="1px";}
if(!this.IsIE){obj.style.width="100%";obj.style.height="100%";}
else{pt=this.winSize();obj.style.width=pxWrap(pt.width);obj.style.height=pxWrap(pt.height);this.eventBind(window,"resize",xWinModalResize);}
if(!xlib.isModern){xlib.eventCurrentSet("scollPos",xlib.winScrollPos());xlib.eventBind(window,"scroll",xWinModalScroll);}
obj.style.visibility="visible";return(obj);}
else{flag=0;cnt=xWinList.length;for(i=1;i<cnt;i++){w=xWinList[i];if(w.style&WS_MODAL){flag=1;w.bringtotop();}}
if(flag){return(obj);}
if(!xlib.isModern){xlib.eventUnbind(window,"scroll",xWinModalScroll);}
obj=domObject(id);domDelete(obj);}
return(null);};xLibrary.prototype.winWidthAdjustment=function(b){if(xlib.IsIE){if(xlib.version<9){return(0);}
return(b*2);}
if(xlib.browser=="FIREFOX"){return(b*2);}
return(b*2);};xLibrary.prototype.winAdjustAspect=function(oval,x,y){var z;if(x==y){return(oval);}
if(y>x){z=(y-x)/x;return(oval+_int(oval*z,10));}
z=(x-y)/x;return(oval-_int(oval*z,10));};xLibrary.prototype.winAdjustGrid=function(x){return(Math.round(x/this.desktop.gridSize)*this.desktop.gridSize);};xLibrary.prototype.winOffsetWidth=function(o,b,p){if(this.IsIE){return o.offsetWidth;}
return(o.offsetWidth-((b+p)*2));};xLibrary.prototype.winOffsetHeight=function(o,b,p){if(this.IsIE){return o.offsetHeight;}
return(o.offsetHeight-((b+p)*2));};xLibrary.prototype.winDefPostion=function(){var pt;if(this.defX>400){this.defX=15;this.defY+=25;}
if(this.defY>400){this.defY=70;}
pt={x:this.defX,y:this.defY};pt.x+=xlib.winScrollX();pt.y+=xlib.winScrollY();this.defX+=25;this.defY+=25;return(pt);};xLibrary.prototype.pageLayer=function(f,obj){var o;if(!this.olayer){if(!f){return;}
this.olayer=domAdd(null,"div","page_lyr");o=this.olayer;o.style.overflow="hidden";o.style.position="absolute";o.style.left=xlib.winScrollX();o.style.top=xlib.winScrollY();o.style.width="100%";o.style.height="100%";o.style.visibility="hidden";o.style.zIndex=-1;domInnerHTML_set(o,"<img src='"+xWinImageDir+"/trans.gif' border=0 width='2000' height='1000' ondragstart='return false;' onclick='xlib.pageLayer( 0 );'>");xlib_PngFix(o);}
o=domObject("page_lyr");if(f){o.style.visibility="visible";o.style.zIndex=obj.style.zIndex+10001;}
else{o.style.visibility="hidden";}};xLibrary.prototype.menuCurrentSet=function(w){if((!w)||(this.curMenu&&(this.curMenu.name!=w.name))){this.menuCurrentDelete();}
this.curMenu=w;};xLibrary.prototype.menuCurrentDelete=function(){var w;if(this.curMenu){w=xWin(this.curMenu.name);if(w){w.destroy();}
this.curMenu=null;}};xLibrary.prototype.textSelected=function(){var txt="";if(window.getSelection){txt=window.getSelection();}
else if(document.getSelection){txt=document.getSelection();}
else if(document.selection){txt=document.selection.createRange().text;}
return(txt);};xLibrary.prototype.objPreprocess=function(data,vname,val){return(strswap(data,vname,val));};xLibrary.prototype.debugPos=function(){var m,s,w;m=this.mousePos(this.eventGet(event));s=this.winScrollPos();w=this.winSize();this.winStatus("SCROLL: x="+s.x+", y="+s.y+" MOUSE: x="+m.x+", y="+m.y+" WINDOW: w="+w.width+", h="+w.height);};xLibrary.prototype.imageRender=function(iname,w,h){return("<img src='"+iname+"' border=0 width="+w+" height="+h+">");};xLibrary.prototype.imagePreload=function(iname,w,h){var img;if(w&&h){img=new Image(w,h);}
else{img=new Image();}
img.src=iname;return(img);};xLibrary.prototype.imageRotate=function(id,val){var r=this.imageRotatorInit();if(r){val=val>359||val<-359?0:val;r.specify('rotate',''+val);id=left(id,1)=="#"?id:"#"+id;r.swap(id);}};xLibrary.prototype.imageRotatorInit=function(){if(!this.rotator){try{this.rotator=new swfir();this.rotator.specify('src','/libs/swfir.swf');}
catch(e){this.rotator=null;}}
return(this.rotator);};xLibrary.prototype.animateOptionsSet=function(o,opts){if(opts){o.animInterval=opts.interval?opts.interval:this.animInterval;o.animPower=opts.power?opts.power:this.animPower;o.animSteps=opts.steps?opts.steps:this.animSteps;}
else{o.animInterval=this.animInterval;o.animPower=this.animPower;o.animSteps=this.animSteps;}};xLibrary.prototype.objLookup=function(id,datatype){var data="",w,otype,d,xaction;if(!datatype){datatype=DP_XOBJ;}
if(this.lookupFunc){data=this.lookupFunc(id);}
if(strempty(data)){data=xlibAjax(AJAX_GET,AJAX_SYNCH,"/ws.htm","cmd=OBJ_LOOKUP&id="+id);}
if(datatype&DP_XOBJ){otype=parseInt(xWinVar("otype",data),10);w=new xWindow(xWinNameGen(otype),data,1);return(w);}
return(data);};xLibrary.prototype.objFromData=function(data,pos,ReloadFlag,pSize,NoCreate,e,oParentDocBody,optStyle){var utype,win,w=0,h=0;var action,k,xbg;var xobj,defFlag,xdata,title,xname;var isoa=0,o;if(!pos){pos=xlib.winDefPostion();}
if(strati("sig=%24xLib%",data)){win=new xWindow(xWinNameGen(OTYPE_WEB),data,1);win.left=pos.x;win.top=pos.y;win.create(oParentDocBody);xlib.dndType=4;xlib.dndData=data;return(win);}
if(xlib.desktop&&strati("%3D0%26%24",data)&&strati("desktop_className=",data)){xlib.desktop.restore(data);return;}
if(isUrl(data)){if(strati("images.google.com",data)||strati("google.com/imgres",data)){w=xWebVar("w",data,1);h=xWebVar("h",data,1);d=urlFix(xWebVar("imgurl",data));if(strempty(d)){if(strati("images.google.com/imgres?",data)&&(!strempty(xlib.ajaxProxy))){alert("GOOGLE IMAGE SEARCH:\n\nTo drag this image from Google, click the image then drag the 'Full-size Image' link on to your page.");data="";return;}}
if(!strempty(d)){data=d;}}
else if(strati("images.search.yahoo.com",data)||strati("rds.yahoo.com",data)){data=jsDecode(data);w=xWebVar("w",data,1);h=xWebVar("h",data,1);d=urlFix(xWebVar("imgurl",data));if(!strempty(d)){if(upper(left(d,4))!="HTTP"){d="http://"+d;}
data=d;}}
else if(strati("bing.com/images/",data)){d=urlFix(xWebVar("furl",data));if(strempty(d)){if(strati("bing.com/images/search?",data)){d=remoteGet(xlib.ajaxProxy+"?url="+jsEncode(data));x=stratnext("<img",d,2);if(x){d=strextract(substr(d,x,300),'"',2);}}}
if(!strempty(d)){data=d;}}
else if(strati("search.live.com",data)){d=urlFix(xWebVar("furl",data));if(!strempty(d)){data=d;}}
else if(strati("search.aol.com/aol/imageDetails",data)){data=jsDecode(data);w=xWebVar("width",data,1);h=xWebVar("height",data,1);d=urlFix(xWebVar("img",data));if(!strempty(d)){data=d;}}
else if(strati("search.aol.com/aol/redir?src=image",data)){data=jsDecode(data);w=xWebVar("width",data,1);h=xWebVar("height",data,1);d=urlFix(xWebVar("img",data));if(!strempty(d)){data=d;}}
else if(strati("photobucket.com",data)){action=xWebVar("action",data);if(action=="view"){d=urlFix(strextract(data,"?",1)+xWebVar("current",data));if(!strempty(d)){data=d;}}}
else if(strati("youtube.com/embed/",data)){if(!strati("wmode=",data)){data+=(strati("?",data)?"&amp;":"?")+"wmode=opaque";}}
else if(strati("//youtu.be/",data)){x=strati("//youtu.be/",data);data="http://www.youtube.com/embed/"+strextract(strcropl(data,x+10),"/",1)+"?wmode=opaque";}
else{w=xWebVar("w",data,1);h=xWebVar("h",data,1);}
utype=xWebVar("xtype",data,1);if(!utype){utype=urlType(data);}
if(strati(".shutterfly.com/media",data)){utype=DATA_IMAGE;}
else if(strati(".snapfish.com/",data)){utype=DATA_IMAGE;}
else if(strati("flickr.com/photos/",data)){utype=DATA_IMAGE;}
switch(utype){case DATA_IMAGE:if(e){k=xlib.keyGet(e);xbg=_int("0"+xWebVar("xbg",data));if(k.isCTRL||xbg||xlib.autoBG){xlib.dndType=2;xlib.dndData=data;xlib.desktop.bgSet(data,null,1);return;}}
if(w+h<1){if(pSize){w=pSize.w;h=pSize.h;}
else{xImageCalcSize(data,pos);return;}
if(w+h<1){w=300;h=200;}}
title=xWebVar("xtitle",data);if(!strempty(title)){data=strswap(data,"xtitle="+xWebVarRaw("xtitle",data),"");title=jsDecode(title,1);}
xaction=xWebVar("xaction",data);if(!strempty(xaction)){data=strswap(data,"xaction="+xWebVarRaw("xaction",data),"");}
if(right(data,1)=="&"){data=strcrop(data,1);}
if(right(data,1)=="?"){data=strcrop(data,1);}
win=xlib.objGenerate(null,OTYPE_IMAGE,xWinNameGen(OTYPE_IMAGE),pos.x,pos.y,w,h,{img:data,title:jsDecode(title,1),style:optStyle});if(!strempty(xaction)){win.eClick=xaction;}
break;case DATA_FEED:data="/rss.htm?url="+jsEncode(data);w=400;h=300;win=xlib.objGenerate(null,OTYPE_FEED,xWinNameGen(OTYPE_FEED),pos.x,pos.y,w,h,{data:data});win.header="#TITLE#";win.bgColor="#ffffff";break;default:if(strempty(data)){alert("Unable to resolve request.");return;}
data=xlib.normalizeURL(data);if(strati("_oam.xml",data)){isoa=1;data="/oamViewer.htm?url="+jsEncode(data);}
xobj=xWebVar("xobj",data);xname=xWebVar("xname",data);defFlag=1;if(!strempty(xobj)){xdata=""
if(xlib.keyGet(e).isCTRL){xdata=xlib.objLookup(xobj+"_CTRL",DP_RAW);}
else if(xlib.keyGet(e).isALT){xdata=xlib.objLookup(xobj+"_ALT",DP_RAW);}
if(strempty(xdata)){xdata=xlib.objLookup(xobj,DP_RAW);}
if(!strempty(xdata)){xdata=xlib.objPreprocess(xdata,"#XDATA#",jsDecode(xWebVar("xdata",data),1));xdata=xlib.objPreprocess(xdata,"#XTITLE#",jsDecode(xWebVar("xtitle",data),1));otype=parseInt(xWinVar("otype",xdata),10);win=new xWindow(strempty(xname)?xWinNameGen(otype):xname,xdata,1);win.left=pos.x
win.top=pos.y
defFlag=0;}}
if(defFlag){if(xlib.keyGet(e).isCTRL){win=xlib.objLookup("fbLink");win.action=xlib.objPreprocess(win.action,"#TITLE#",strabbr(data,30));win.eClick=xlib.objPreprocess(""+win.eClick,"#ACTION#",data);win.left=pos.x
win.top=pos.y}
else if(xlib.keyGet(e).isALT){win=xlib.objLookup("fbLinkButton");win.action=xlib.objPreprocess(win.action,"#TITLE#",strabbr(data,30));win.eClick=xlib.objPreprocess(""+win.eClick,"#ACTION#",data);win.left=pos.x
win.top=pos.y}
else{w=500;h=400;win=xlib.objGenerate(null,OTYPE_WEB,xWinNameGen(OTYPE_WEB),pos.x,pos.y,w,h,{action:data});}}
if(isoa){win.header="OpenAjax Widget - Meta File";}}}
else{if(strati("www.gmodules.com",data)){action=strswap(data,"&amp;","&");w=xWebVar("w",action,1)+5;h=xWebVar("h",action,1)+30;win=xlib.objGenerate(null,OTYPE_WIDGET,xWinNameGen(OTYPE_WIDGET),pos.x,pos.y,w,h,{data:data});win.header=strswap(jsDecode(xWebVar("title",action)),"+"," ");win.displayMode|=DISP_NOPROGRESS;}
else if(strati("<script",data)){w=300;h=200;win=xlib.objGenerate(null,OTYPE_WIDGET,xWinNameGen(OTYPE_WIDGET),pos.x,pos.y,w,h,{data:data});win.header="Script Widget";win.displayMode|=DISP_NOPROGRESS;}
else if(strati("<object",data)||strati("<embed",data)){action=strswap(data,"&amp;","&");w=xWebVar("width",action,1);if(typeof(w)!="number")w=300;h=xWebVar("height",action,1);if(typeof(h)!="number")h=200;win=xlib.objGenerate(null,OTYPE_WIDGET,xWinNameGen(OTYPE_WIDGET),pos.x,pos.y,w,h,{data:data});win.header="Object";win.displayMode|=DISP_NOPROGRESS;}
else if(strati("youtube.com/embed/",data)){w=300;h=200;if(strati("<iframe ",data)){o=parseToObj(data);if(!strati("wmode=",o.src)){o.src+=(strati("?",o.src)?"&amp;":"?")+"wmode=opaque";data=o.restore();}
w=_int(o.width)+25;h=_int(o.height)+25;}
win=xlib.objGenerate(null,OTYPE_HTMLBLOCK,xWinNameGen(OTYPE_HTMLBLOCK),pos.x,pos.y,w,h,{source:data,transLevel:80});}
else if(strati("javascript:",data)){title=strswap(jsDecode(xWebVar("xtitle",data)),"+"," ");if(strempty(title)){title=strabbr(strextract(strswapi(data,"javascript:",""),"(",1),30);}
if(xlib.keyGet(e).isALT){win=xlib.objLookup("fbLink");win.style&=~WS_EXTERNAL;win.action=xlib.objPreprocess(win.action,"#TITLE#",title);win.eClick=strswapi(data,"javascript:","");win.left=pos.x
win.top=pos.y}
else{win=xlib.objLookup("fbLinkButton");win.style&=~WS_EXTERNAL;win.action=xlib.objPreprocess(win.action,"#TITLE#",title);win.eClick=strswapi(data,"javascript:","");win.left=pos.x
win.top=pos.y}}
else{w=300;h=200;win=xlib.objGenerate(null,OTYPE_HTMLBLOCK,xWinNameGen(OTYPE_HTMLBLOCK),pos.x,pos.y,w,h,{source:data,transLevel:80});}}
xlib.dndType=1;xlib.dndData=win.action;if(!NoCreate){if(win){win.create(oParentDocBody);}}
return(win);};xLibrary.prototype.objGenerate=function(oparent,otype,name,x,y,w,h,opts){var o,title="";var bgColor=xWinBgColor;var padding=10;var style=WS_NORMAL|WS_BORDER;var font=null;var action="";var data="";w=_int(w);h=_int(h);o=new xWindow(name);if(!o){return(null);}
switch(otype){case OTYPE_TEXTBLOCK:bgColor="white";style=WS_NORMAL|WS_TRANSPARENT|WS_BORDER|WS_RESIZABLE|WS_MOVEABLE|WS_CONTEXTMENU;padding=10;o.transLevel=opts?opts.transLevel||60:60;action=opts?opts.text||"":"";break;case OTYPE_TEXTBLOCK_TRANS:bgColor="";style=WS_NORMAL|WS_TRANSPARENT|WS_MOVEABLE|WS_RESIZABLE|WS_BORDER;padding=10;o.transLevel=opts?opts.transLevel||60:60;action=opts?opts.text||"":"";break;case OTYPE_HTMLBLOCK:case OTYPE_HOTSPOT:bgColor="";if(opts&opts.style){style=opts.style;}
else{style=WS_NORMAL|WS_TRANSPARENT|WS_MOVEABLE|WS_RESIZABLE|WS_BORDER;}
padding=10;o.transLevel=opts?opts.transLevel||60:60;action=opts?opts.source||"":"";break;case OTYPE_DROPZONE:bgColor="#FFFFD0";style=WS_NORMAL|WS_BORDER|WS_DROP;action=opts?opts.text||"":"";break;case OTYPE_IMAGE:style=WS_NORMAL|WS_MOVEABLE|WS_RESIZABLE;padding=0;if(strati(".png",opts.img)||strati(".gif",opts.img)){style|=WS_TRANSPARENT;o.transLevel=100;style&=~WS_BORDER;}
else{}
title=opts&&(!strempty(opts.title))?opts.title:"";action=opts?"<img src='"+opts.img+"' border=0 width=100% height=100% ondragstart='return false;' title=\""+title+"\">"||"":"";o.eClick=xWebVar("xaction",opts.img);break;case OTYPE_WEB:style=WS_NORMAL|WS_EXTERNAL|WS_BORDERTHICK|WS_MOVEABLE|WS_UNDOCKABLE|WS_RESIZABLE|WS_HEADER|WS_MAXIMIZABLE|WS_CLOSE|WS_SYSMENU;action=opts?opts.action||"":"";title=strswap(jsDecode(xWebVar("xtitle",action)),"+"," ");o.header=strabbr(strempty(title)?action:title,40);break;case OTYPE_SCRIPT:case OTYPE_FLASH:case OTYPE_WIDGET:style=WS_NORMAL|WS_EXTERNAL|WS_BORDERTHICK|WS_MOVEABLE|WS_RESIZABLE|WS_HEADER|WS_CLOSE;padding=0;o.overflow="hidden";w+=o.borderThickness()*2;h+=o.hdrHeight+o.borderThickness()*2;data=opts?opts.data||"":"";o.displayMode|=DISP_NOPROGRESS;action="/widget.htm?data="+jsEncode(data)+"&xid="+name;break;case OTYPE_FEED:style=WS_NORMAL|WS_EXTERNAL|WS_BORDERTHICK|WS_MOVEABLE|WS_UNDOCKABLE|WS_RESIZABLE|WS_HEADER|WS_MAXIMIZABLE|WS_CLOSE|WS_SYSMENU;action=opts?(opts.data+"&xid="+name)||"":"";break;}
if(opts){style=opts.style||style;bgColor=opts.bgColor||bgColor;padding=opts.padding!=null?opts.padding:padding;font=opts.font;}
if(font){o.action=font.render(action);}
else{if((!strempty(xWinDefaultTheme))&&(style&WS_HEADER||style&WS_FOOTER)){try{var buO=o;o=eval("theme_"+xWinDefaultTheme+"('"+name+"',\""+action+"\","+(style&WS_EXTERNAL)+")");o.header=strabbr(strempty(title)?action:title,60);style=o.style;padding=o.padding;bgColor=o.bgColor;}catch(e){o=buO;}}
else{o.action=action;}}
if(opts&&opts.title){o.rollover=opts.title;}
o.eDrag=opts?opts.eDrag||null:null;o.eDrop=opts?opts.eDrop||null:null;o.style=style|WS_CONTEXTMENU;o.padding=padding;o.bgColor=bgColor;o.oparent=oparent;o.otype=otype;o.setposition(x,y,w,h);return(o);};xLibrary.prototype.objNameFromId=function(otype){return("x");};xLibrary.prototype.objRender=function(id,state,mode,opts){var o,flag,data,f;o=domObject(id);if(!o){return(0);}
flag=(state!=-1?state:o.style.display!="block");if(!flag){if(mode&OBJ_ROLLDOWN){f=function(o){o.style.display="none";o.style.visibility="hidden";if(o.mode&OBJ_CLEARONCLOSE){if(xlib.IsIE){setTimeout("domInnerHTML_set( '"+o.id+"', '' );",100);}
else{domInnerHTML_set(o,"");}}};o.mode=mode;xlib.animateHeight(o,_int(o.style.height),1,opts,f);}
else{o.style.display="none";o.style.visibility="hidden";if(mode&OBJ_CLEARONCLOSE){domInnerHTML_set(o,"");}}
return(1);}
if(mode&OBJ_AJAXCONTENT){data=xlibAjax(opts.ajaxMethod,opts.ajaxSynch,strextract(opts.ajaxAddress,"?",1),"req=AJAX_REQ&rtype="+opts.ajaxRtype+"&"+strextract(opts.ajaxAddress,"?",2),opts.ajaxCallback);if(opts.ajaxSynch&AJAX_SYNCH){domInnerHTML_set(o,data);}}
if(mode&OBJ_ROLLDOWN){o.style.height=1;}
o.style.display="block";o.style.visibility="visible";if(mode&OBJ_ROLLDOWN){xlib.animateHeight(o,1,opts.rollHeight,opts,null);}
return(1);};xLibrary.prototype.objTooltip=function(e,oparent,flag,content,opts){var n,o,m,f,borderWidth;var mode=0,width=200,height=0,offset=5,bgColor=null,bgImage=null;var xOffset=0,yOffset=10,padding=4,opacity=null,shadow=0;borderWidth=1;n=oparent.id+"_tt";o=domObject(n);if(opts){mode=opts.mode||mode;width=opts.width||width;height=opts.height||height;offset=opts.offset||offset;bgColor=opts.bgColor||bgColor;bgImage=opts.bgImage||bgImage;xOffset=opts.xOffset||xOffset;yOffset=opts.yOffset||yOffset;padding=opts.padding||padding;opacity=opts.opacity||opacity;shadow=opts.shadow==null?shadow:opts.shadow;}
if(!flag){if(!o){return;}
if(mode&DISP_ANIM_TOOLTIP){f=function(o){domDelete(o);};xlib.animateHeight(o,_int(o.offsetHeight)-(borderWidth*2),1,opts,f);}
else{domDelete(o);}
return;}
if(o){o.style.zIndex=xWinZorder+10000;return;}
m=xlib.mousePos(e);m.x+=xOffset;m.y+=yOffset;o=domAdd(null,"div",n);o.className="xTooltip";if(this.IsIE){o.style.width=width;if(height){o.style.height=height;}}
else{o.style.width=width-((padding+borderWidth)*2);if(height){o.style.height=height-((padding+borderWidth)*2);}}
o.style.left=xlib.winAdjustX(m.x+xlib.winScrollX(),o.style.width,offset);o.style.top=m.y+xlib.winScrollY();if(opacity!=null){xlib.fx.opacity(o.id,opacity);}
else{if(shadow){this.shadowSet(o);}}
domInnerHTML_set(o,content);if(bgColor){o.style.background=bgColor;}
if(bgImage){o.style.background="";o.style.border="none";if(xlib.pngfix&&strati(".png",bgImage)){domImageSet(o,bgImage,1);}
else{o.style.backgroundImage="url("+bgImage+")";}}
o.style.padding=padding;o.style.zIndex=xWinZorder+10000;xlib_PngFix(o);if(mode&DISP_ANIM_TOOLTIP){xlib.animateHeight(o,1,xlib.winOffsetHeight(o,padding,borderWidth),opts);}
else{o.style.visibility='visible';}};xLibrary.prototype.browserNew=function(x,y,w,h,id,url,opts){var win;id=id||"_blank";opts=opts||"NORMAL";x=x<0?(screen.availWidth-w)/2:x;y=y<0?(screen.availHeight-h)/2:y;switch(upper(opts)){case"NORMAL":opts="status=yes, location=yes, toolbar=yes, scrollbars=yes, menubar=yes, directories=yes, resizable=yes";break;case"POPUP":opts="status=no, location=no, toolbar=no, scrollbars=yes, menubar=no, directories=no, resizable=yes";break;case"POPUP2":opts="status=no, location=no, toolbar=no, scrollbars=yes, menubar=no, directories=no, resizable=no";break;}
win=window.open(url,id,"left="+x+", top="+y+", width="+w+", height="+h+" "+opts);if(win){win.focus();}
return(win);};xLibrary.prototype.normalizeURL=function(url,isblank){var s;url=alltrim(url);if(strempty(url)){return(isblank?"":"/");}
if(lower(left(url,5))=="file:"){return(url);}
if(left(url,1)=="/"){return(url);}
url=strswap(url,"'","");url=strswap(url,"\"","");if(lower(left(url,4))!="http"){if(!strat(".",url)&&!strat("localhost",url)){url+=".com";}
if(lower(left(url,3))!="www"){url="http://www."+url;}
else{url="http://"+url;}}
else if(!strat(".",url)&&!strat("localhost",url)){url+=".com";}
s=strextract(url,"/",3);if(chrcount(".",s)>2){url=strswap(url,"www.","");}
return(url);};xLibrary.prototype.animateHeight=function(o,startH,endH,opts,cbFunc,NoHideScrollbars){var h;this.animateOptionsSet(o,opts);startH=_int(startH);if(startH<1){startH=1;}
endH=_int(endH);if(endH<1){endH=1;}
if(o.objMoveFunc){xlib.intervalClear(o.objMoveFunc);}
o._overflow=o.style.overflow;if(!NoHideScrollbars){o.style.overflow="hidden";}
o.style.height=startH;o.style.visibility='visible';o.curStep=0;o.objMoveFunc=xlib.intervalSet(function(){h=easeInOut(startH,endH,o.animSteps,o.curStep,o.animPower);if(h>0){o.style.height=h;}
o.curStep++;if(o.curStep>o.animSteps){xlib.intervalClear(o.objMoveFunc);o.objMoveFunc=null;o.style.overflow=o._overflow;if(cbFunc){if(typeof(cbFunc)=="string"){eval(cbFunc);}
else{cbFunc(o);}}}},o.animInterval);};xLibrary.prototype.dpConvertWindow=function(toType,data){var a,b,i,cnt,s="",n,v,typ;if(toType&DP_QSTR){return(data);}
a=data.split("&");cnt=len(a);if(toType&DP_NAMEVALUE){for(i=0;i<cnt;i++){if(a[i].length){s+=a[i]+"\n";}}}
else if(toType&DP_JSON){s+="( {\r\n";for(i=0;i<cnt;i++){if(!a[i].length){continue;}
b=a[i].split("=");if(left(b[0],1)=="$"){s+="  "+right(b[0],len(b[0])-1)+": "+(strat(".",b[1])?parseFloat(b[1]):_int(b[1]))+",\n";}
else{s+="  "+b[0]+": \""+b[1]+"\",\n";}}
if(right(s,2)==",\n"){s=left(s,len(s)-2)+"\n";}
s+="} );\r\n";}
else if(toType&DP_XML){s+="<OBJECT xmlns:xwin='http://www.xwinlib.com/schema' xwin:type='object' xwin:class='WINDOW'>\n";for(i=0;i<cnt;i++){if(!a[i].length){continue;}
b=a[i].split("=");if(left(b[0],1)=="$"){n=right(b[0],len(b[0])-1);v=(strat(".",b[1])?parseFloat(b[1]):_int(b[1]));typ=strat(".",b[1])?"float":"integer";s+="  <"+upper(n)+" xwin:name='"+n+"' xwin:type='"+typ+"' xwin:len='"+len(v)+"'>"+v+"</"+upper(n)+">\n";}
else{s+="  <"+upper(b[0])+" xwin:name='"+b[0]+"' xwin:type='encString' xwin:len='"+len(b[1])+"'>"+b[1]+"</"+upper(b[0])+">\n";}}
if(right(s,2)==",\n"){s=left(s,len(s)-2)+"\n";}
s+="</OBJECT>\n";}
return(s);};xLibrary.prototype.dpConvertDesktop=function(toType,data){var a,b,c,i,j,cnt,cnt2,s="",n,v,typ,x;if(toType&DP_QSTR){return(data);}
a=data.split("\n");cnt=len(a);if(toType&DP_NAMEVALUE){for(i=0;i<cnt;i++){b=a[i].split("&");cnt2=b.length;for(j=0;j<cnt2;j++){if(b[j].length){s+=b[j]+"\n";}}}}
else if(toType&DP_JSON){s+="( {\n";b=a[0].split("&");cnt2=b.length;for(j=0;j<cnt2;j++){if(!b[j].length){continue;}
c=b[j].split("=");x=strat("_",c[0]);if(x){c[0]=right(c[0],len(c[0])-x);}
if(left(c[0],1)=="$"){n=right(c[0],len(c[0])-1);v=(strat(".",c[1])?parseFloat(c[1]):_int(c[1]));s+="  "+n+": "+v+",\n";}
else{if(!_int(c[0])){s+="  "+c[0]+": \""+c[1]+"\",\n";}}}
s+="  aWindows: [\n";for(j=0;j<cnt2;j++){if(!b[j].length){continue;}
c=b[j].split("=");x=strat("_",c[0]);if(x){c[0]=right(c[0],len(c[0])-x);}
if(left(c[0],1)!="$"){if(_int(c[0])){s+="    "+c[0]+": \""+c[1]+"\",\n";}}}
if(right(s,2)==",\n"){s=left(s,len(s)-2)+"\n";}
s+="  ]\n";s+="} );\n";}
else if(toType&DP_XML){s+="<OBJECT xmlns:xwin='http://www.xwinlib.com/schema' xwin:type='object' xwin:class='DESKTOP'>\n";b=a[0].split("&");cnt2=b.length;for(j=0;j<cnt2;j++){if(!b[j].length){continue;}
c=b[j].split("=");x=strat("_",c[0]);if(x){c[0]=right(c[0],len(c[0])-x);}
if(left(c[0],1)=="$"){n=right(c[0],len(c[0])-1);v=(strat(".",c[1])?parseFloat(c[1]):_int(c[1]));typ=strat(".",c[1])?"float":"integer";s+="  <"+upper(n)+" xwin:name='"+n+"' xwin:type='"+typ+"' xwin:len='"+len(v)+"'>"+v+"</"+upper(n)+">\n";}
else{if(!_int(c[0])){s+="  <"+upper(c[0])+" xwin:name='"+c[0]+"' xwin:type='encString' xwin:len='"+len(c[1])+"'>"+c[1]+"</"+upper(c[0])+">\n";}}}
s+="  <AWINDOWS xwin:type='variableArray'>\n";for(j=0;j<cnt2;j++){if(!b[j].length){continue;}
c=b[j].split("=");x=strat("_",c[0]);if(x){c[0]=right(c[0],len(c[0])-x);}
if(left(c[0],1)!="$"){if(_int(c[0])){s+="    <"+upper(c[0])+" xwin:name='"+c[0]+"' xwin:type='encString' xwin:len='"+len(c[1])+"'>"+c[1]+"</"+upper(c[0])+">\n";}}}
if(right(s,2)==",\n"){s=left(s,len(s)-2)+"\n";}
s+="  </AWINDOWS>\n";s+="</OBJECT>\n";}
return(s);};function xlibInitPage(){var o=xlib.eventBody();if(!o){setTimeout("xlibInitPage( )",90);return;}
if((xlib.startupOptions&XINIT_DESKTOP)&&(xlib.startupOptions&XINIT_DESKTOPDROP)){xlib.desktop.dropInit();}}
function x_ie_editClearSelection(e){var e;try{document.selection.clear();}catch(e){document.selection.empty();}}
function x_w3c_editClearSelection(e){if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges();}
else if(window.getSelection().collapse){window.getSelection().collapse();}}
function remoteGet(url,isPost,opts,oparent){url=url.split("?");return(xlibAjax(isPost?AJAX_POST:AJAX_GET,AJAX_SYNCH,url[0],url[1],null,opts,oparent));}
function remoteCall(url,cbFunc,isPost,opts,oparent){url=url.split("?");xlibAjax(isPost?AJAX_POST:AJAX_GET,AJAX_ASYNCH,url[0],url[1],cbFunc,opts,oparent);}
function xlibAjax(mtype,stype,page,params,cbFunc,opts,oparent){if(!params){params="";}
else{if(mtype==AJAX_GET){if(left(params,1)!="?"){params="?"+params;}}
else{if(left(params,1)=="?"){params=right(params,len(params)-1);}}}
if(stype==AJAX_ASYNCH){if(mtype==AJAX_GET){xlib_ajaxGetPage(page,params,cbFunc,opts,oparent);}
else{xlib_ajaxPostPage(page,params,cbFunc,opts,oparent);}
return;}
if(mtype==AJAX_GET){return xlib_ajaxGetData(page,params,opts);}
return xlib_ajaxPostData(page,params,opts);}
function xlib_ajaxGetPage(page,params,cbFunc,opts,oparent){xmlhttp=xlib_ajaxInit();if(opts&&opts.userid&&opts.password){xmlhttp.open('GET',page+params,true,opts.userid,opts.password);}
else{xmlhttp.open('GET',page+params,true);}
xlib_setHeaders(xmlhttp,opts);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==1){}
else if(xmlhttp.readyState==4){if(cbFunc!=null){if(oparent){cbFunc.call(oparent,xmlhttp);}
else{cbFunc(xmlhttp);}}}};xmlhttp.send(null);return;}
function xlib_ajaxPostPage(page,data,cbFunc,opts,oparent){var doAsync=true;xmlhttp=xlib_ajaxInit();if(opts&&opts.userid&&opts.password){xmlhttp.open('POST',page,doAsync,opts.userid,opts.password);}
else{xmlhttp.open('POST',page,doAsync);}
xlib_setHeaders(xmlhttp,opts);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==1){}
else if(xmlhttp.readyState==4){if(cbFunc!=null){if(oparent){cbFunc(oparent,xmlhttp);}
else{cbFunc(xmlhttp);}}}};xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");xmlhttp.send(data);return;}
function xlib_ajaxGetData(page,params,opts){var data;xmlhttp=xlib_ajaxInit();if(opts&&opts.userid&&opts.password){xmlhttp.open('GET',page+params,false,opts.userid,opts.password);}
else{xmlhttp.open('GET',page+params,false);}
xlib_setHeaders(xmlhttp,opts);xmlhttp.onreadystatechange=function(){};try{xmlhttp.send(null);}catch(e){}
data=xmlhttp.responseText;xmlhttp=null;return(data);}
function xlib_ajaxPostData(page,params,opts){var data;xmlhttp=xlib_ajaxInit();if(opts&&opts.userid&&opts.password){xmlhttp.open('POST',page,false,opts.userid,opts.password);}
else{xmlhttp.open('POST',page,false);}
xlib_setHeaders(xmlhttp,opts);xmlhttp.onreadystatechange=function(){};xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");try{xmlhttp.send(params);}
catch(e){alert("Error processing AJAX request. This may be caused by too much information on one page. You can try and consolidate objects or split the content across multiple pages.");xmlhttp=null;return("");}
data=xmlhttp.responseText;xmlhttp=null;return(data);}
function xlib_ajaxInit(){var xmlhttp=false;if(!xlib.IsFF){try{xmlhttp=new ActiveXObject('Msxml2.XMLHTTP');}
catch(e){try{xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');}
catch(er){xmlhttp=false;}}}
if((!xmlhttp)&&(typeof(XMLHttpRequest)!='undefined')){xmlhttp=new XMLHttpRequest();}
return(xmlhttp);}
function xlib_setHeaders(xmlhttp,opts){var cnt,i;if(opts&&opts.aHeader){cnt=len(aHeader);for(i=0;i<cnt;i++){xmlhttp.setRequestHeader(aHeader[i][0],aHeader[i][1]);}}}
function xlib_ajaxCallback(http){var data=http.responseText;http=null;}
function xlib_MenuProperties(w){this.win=w;this.adata=[];this.spacing=0;this.padding=3;this.classText="xMenuText";this.classOn="xMenuOn";this.classOff="xMenuOff";this.isImages=0;this.lineHeight=22;this.borderHeight=w?w.borderThickness():2;this.offset=6;this.sideColor="#ffc168";this.isSide=1;this.separator=xWinImageDir+"/dotBlack.gif";}
xlib_MenuProperties.prototype.add=function(title,img,action){this.adata[this.adata.length]=[title,img,action];};xlib_MenuProperties.prototype.calcHeight=function(){var a,i,t=(this.offset*2)+(this.borderHeight*2);a=this.adata;for(i=0;i<len(a);i++){if(a[i][0]=="-"){t+=((this.spacing+this.padding)*2)+1;}
else{t+=this.lineHeight;}}
return(t);};xlib_MenuProperties.prototype.render=function(){var s="",i,cnt,a,img;s+="<table border=0 width=100% height=100% cellspacing=0 cellpadding=0 class='xMenuPlain'><tr>";if(this.isSide){s+="<td width=15 class='xMenuPlain' style='background:"+this.sideColor+";'>&nbsp;</td>";}
s+="<td class='xMenuPlain' valign=top><table width=100% width=100% border=0 cellspacing=0 cellpadding=0 style='border:none;' class='xMenuPlain'><tr height="+this.offset+"><td class='xMenuPlain'></td></tr><tr><td class='xMenuPlain'>";s+="<table border=0 width=100% width=100% cellspacing="+this.spacing+" cellpadding="+this.padding+" class='"+this.classOff+"' style='border:none;'>";a=this.adata;cnt=len(a);for(i=0;i<cnt;i++){if(a[i][0]=="-"){s+="<tr height=1><td class='xMenuPlain' colspan="+(this.isImages?2:1)+"><img src='"+this.separator+"' border=0 width='100%' height='1'></td></tr>";}
else{img=a[i][1].length?"<img src='"+a[i][1]+"' border=0>":"&nbsp;";if(strempty(a[i][2])){s+="<tr height="+this.lineHeight+" class='"+this.classText+"'>";}
else{s+="<tr height="+this.lineHeight+" onClick=\""+a[i][2]+"; xlib.menuCurrentSet( );\" onmouseover=\"this.className='"+this.classOn+"'\" onmouseout=\"this.className='"+this.classOff+"'\">";}
if(this.isImages){s+="<td class='xMenuPlain' width=16 nowrap>"+img+"</td>";}
s+="<td class='xMenuPlain'>&nbsp;"+a[i][0]+"</td></tr>";}}
s+="</table></td></tr>";s+="<tr height="+this.offset+"><td class='xMenuPlain'></td></tr>";s+="</table></td></tr></table>";return(s);};function xlib_plugin(){this.action=null;}
xlib_plugin.prototype={init:function(){document.xlib_cbPlugin=function(obj,pos,data,title,oParentDocBodyId,e){function getBodyById(id){var result,i,fd,frames,iframes;result=document.getElementById(id);if(result!=null){return result;}
iframes=document.getElementsByTagName("iframe");if(iframes!=null){for(i=0;i<iframes.length;i++){fd=iframes[i].contentDocument;result=fd.getElementById(id);if(result!=null){return result;}}}
frames=document.getElementsByTagName("frame");if(frames!=null){for(i=0;i<frames.length;i++){fd=frames[i].contentDocument;result=fd.getElementById(id);if(result!=null){return result;}}}}
var parentBody=getBodyById(oParentDocBodyId);if(obj!=undefined){xlib.ffPlugin.action=obj;}
else{if(xlib.openajax&&xlib.openajax.dndEnabled){xlib.openajax.publish("xwinlib_dnd","({ data : \""+jsEncode(data)+"\", pos : { x : "+pos.x+", y : "+pos.y+" } })");}
else{xlib.objFromData(data,pos,0,null,0,e,parentBody);}}};}};function easeInOut(minValue,maxValue,totalSteps,actualStep,powr){var delta=maxValue-minValue;var stepp=minValue+(Math.pow(((1/totalSteps)*actualStep),powr)*delta);return Math.ceil(stepp);}
var xEnvironment={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;}
else if(dataProp)
return data[i].identity;}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1)return;return parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.userAgent,subString:"iPad",identity:"iPad",versionSearch:"Version"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Android",identity:"Android",versionSearch:"Android"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};function jsonTimeZone(){var rightNow=new Date();var jan1=new Date(rightNow.getFullYear(),0,1,0,0,0,0);var june1=new Date(rightNow.getFullYear(),6,1,0,0,0,0);var temp=jan1.toGMTString();var jan2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));temp=june1.toGMTString();var june2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));var std_time_offset=(jan1-jan2)/(1000*60*60);var daylight_time_offset=(june1-june2)/(1000*60*60);var dst;if(std_time_offset==daylight_time_offset){dst=0;}else{var hemisphere=std_time_offset-daylight_time_offset;if(hemisphere>=0){std_time_offset=daylight_time_offset;}
dst=dstCalc();}
var rval={'timeZone':dst_convert(std_time_offset),'tzone':'','isDST':dst}
a=rval.timeZone.split(":");rval.tzone=_int(a[0])+"."+(_int(a[1])?right("00"+(60/_int(a[1])),2):"00");return(rval);}
function dstCalc(){var today=new Date;var yr=today.getFullYear();var jan=new Date(yr,0);var jul=new Date(yr,6);if(jan.getTimezoneOffset()>jul.getTimezoneOffset()&&today.getTimezoneOffset()!=jan.getTimezoneOffset()){return(1);}
if(jan.getTimezoneOffset()<jul.getTimezoneOffset()&&today.getTimezoneOffset()!=jul.getTimezoneOffset()){return(1);}
return(0);}
function dst_convert(value){var hours=parseInt(value,10);value-=parseInt(value,10);value*=60;var mins=parseInt(value,10);value-=parseInt(value,10);value*=60;var secs=parseInt(value,10);var display_hours=hours;if(hours==0){display_hours="00";}else if(hours>0){display_hours=(hours<10)?"+0"+hours:"+"+hours;}else{display_hours=(hours>-10)?"-0"+Math.abs(hours):hours;}
mins=(mins<10)?"0"+mins:mins;return display_hours+":"+mins;}
function setSelectionRange(input,selectionStart,selectionEnd){if(input.setSelectionRange){input.focus();input.setSelectionRange(selectionStart,selectionEnd);}
else if(input.createTextRange){var range=input.createTextRange();range.collapse(true);range.moveEnd('character',selectionEnd);range.moveStart('character',selectionStart);range.select();}}
function replaceSelection(input,replaceString){if(input.setSelectionRange){var selectionStart=input.selectionStart;var selectionEnd=input.selectionEnd;input.value=input.value.substring(0,selectionStart)+replaceString+input.value.substring(selectionEnd);if(selectionStart!=selectionEnd){setSelectionRange(input,selectionStart,selectionStart+replaceString.length);}else{setSelectionRange(input,selectionStart+replaceString.length,selectionStart+replaceString.length);}}else if(document.selection){var range=document.selection.createRange();if(range.parentElement()==input){var isCollapsed=range.text=='';range.text=replaceString;if(!isCollapsed){range.moveStart('character',-replaceString.length);range.select();}}}}
function catchTab(e,obj,replaceStr){var k=xlib.eventKey(e);if(k==KEY_TAB){if(replaceStr){replaceSelection(obj,replaceStr);}
else{replaceSelection(obj,String.fromCharCode(KEY_TAB));}
setTimeout("domObject('"+obj.id+"').focus();",0);return false;}}
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
function objUpdate(opts,optsP){for(var x in optsP){opts[x]=optsP[x];}
return(opts);}
function strpad(s,l,c){return(pad(s,l,c));}
function pad(str,num,pad,dir){if(!isvar(num)){num=0;}
if(!isvar(pad)){pad=' ';}
if(!isvar(dir)){dir=2;}
if(num+1>=str.length){switch(dir){case 1:str=Array(num+1-str.length).join(pad)+str;break;case 3:var right=Math.ceil((padlen=num-str.length)/2);var left=padlen-right;str=Array(left+1).join(pad)+str+Array(right+1).join(pad);break;default:str=str+Array(num+1-str.length).join(pad);break;}}
return str;}
function xDesktop(){this.contextmenuHandler=null;this.gridSize=10;this.gridBG="";this.gridBGImage=xWinImageDir+"/grid.gif";this.gridRepeat="";}
xDesktop.prototype={dropInit:function(){xlib.eventBind(xlib.eventBody(),"dragenter",xWinEvent_Cancel,false);xlib.eventBind(xlib.eventBody(),"dragover",xWinEvent_Cancel,false);if(!xlib.IsFF){xlib.eventBind(xlib.eventBody(),"drop",xWinEvent_Drop,true);}
else{if(xlib.IsFF){try{xlib.ffPlugin=new xlib_plugin();xlib.ffPlugin.init();obj=document.createElement('img');obj.id="ffplugin_img";obj.src="chrome://xwinlib/content/ico_favicon.gif";obj.style.position='absolute';obj.style.top='0px';obj.style.left='0px';obj.style.visibility='hidden';document.body.appendChild(obj);xlib.eventBind(obj,"load",function(){xlib.IsFF_Plugin=1;domDelete(this);},true);}catch(e){};}}},bgSet:function(img,clr,tiled,centered,scrollable,bgpos){var e;document.body.background="";if(img!==null){try{document.body.style.backgroundImage="url("+img+")";}
catch(e){document.body.style.backgroundImage="";}}
if(clr!==null){document.body.style.backgroundColor=clr;}
if(tiled!==null){document.body.style.backgroundRepeat=tiled?"repeat":"no-repeat";}
else{document.body.style.backgroundRepeat="repeat";}
if(centered!==null){document.body.style.backgroundPosition=centered?"center":"0px 0px";document.body.style.backgroundAttachment="fixed";}
if(scrollable!==null){document.body.style.backgroundAttachment=scrollable?"scroll":"fixed";}
try{document.body.style.backgroundPosition=strempty(bgpos)?"":bgpos;}
catch(e){}
xlib.UpdateFlag(1);},clearall:function(noconfirm){var i,awin,cnt,a;if(noconfirm||confirm("Clear all objects from the page?")){awin=xWinList;cnt=awin.length+1;a=new Array();for(i=1;i<cnt;i++){if(awin[i]&&(!awin[i].issys)){a[len(a)]=awin[i].name;}}
cnt=len(a);for(i=0;i<cnt;i++){xWin(a[i]).destroy();}
xlib.UpdateFlag(1);}},gridSet:function(){this.gridBG=document.body.style.backgroundImage;this.gridRepeat=document.body.style.backgroundRepeat;document.body.style.backgroundImage="url("+this.gridBGImage+")";document.body.style.backgroundRepeat="repeat";return(1);},gridRestore:function(){document.body.style.backgroundImage=this.gridBG;document.body.style.backgroundRepeat=this.gridRepeat;this.gridBG="";this.gridRepeat="";return(0);},restore:function(data,bgId){var a,cnt,i,bd;xlib.desktop.clearall(1);a=data.split("&");cnt=len(a);if(!cnt){return;}
bd=isvar(bgId)?bgId:xlib.eventBody();for(i=0;i<cnt;i++){b=a[i].split("=")
switch(b[0]){case"desktop_className":bd.className=b[1];break;case"desktop_bgColor":bd.style.backgroundColor=b[1];break;case"desktop_background":bd.style.backgroundImage=jsDecode(b[1]);break;case"desktop_overflow":bd.style.overflow=b[1];break;case"desktop_backgroundAttachment":bd.style.backgroundAttachment=b[1];break;case"desktop_backgroundRepeat":bd.style.backgroundRepeat=b[1];break;case"desktop_backgroundPosition":bd.style.backgroundPosition=b[1];break;default:if(left(b[0],5)=="xwin_"){w=new xWindow(null,jsDecode(b[1]),1);if(w.displayMode&DISP_CENTERED){w.displayMode&=~DISP_CENTERED;}
w.create();}}}
xlib.UpdateFlag(0);},save:function(mode){var cnt,i,s="",w,x,y,a,bd,e;cnt=xWinList.length;if(mode&DESKTOP_LAYOUT){for(i=1;i<cnt;i++){w=xWinList[i];if(w.issys&&(!(mode&DESKTOP_INCLUDESYS))){continue;}
if(w.oparent){continue;}
if(w.displayMode&DISP_CENTERED){x=_int(w.obj.style.left);y=_int(w.obj.style.top);}
else{x=w.left;y=w.top;}
s+=w.name+","+x+","+y+","+w.width+","+w.height+","+w.zorder+","+w.displayMode+";";}}
else if(mode&DESKTOP_OBJECTS){a=[];for(i=1;i<cnt;i++){if(xWinList[i].oparent){continue;}
if(xWinList[i].issys&&(!(mode&DESKTOP_INCLUDESYS))){continue;}
a[a.length]=xWinList[i];}
return(a);}
else if(mode&DESKTOP_OBJMOVE){a=[];for(i=1;i<cnt;i++){if(xWinList[i].oparent){continue;}
if(xWinList[i].issys&&(!(mode&DESKTOP_INCLUDESYS))){continue;}
a[a.length]=xWinList[i];}
return(a);}
else{bd=xlib.eventBody();s+="desktop_className="+bd.className+"&";s+="desktop_bgColor="+bd.style.backgroundColor+"&";s+="desktop_background="+jsEncode(bd.style.backgroundImage)+"&";s+="desktop_overflow="+bd.style.overflow+"&";s+="desktop_backgroundAttachment="+bd.style.backgroundAttachment+"&";s+="desktop_backgroundRepeat="+bd.style.backgroundRepeat+"&";s+="desktop_backgroundPosition="+bd.style.backgroundPosition+"&";s+="desktop_saveWidth="+xlib.winWidth()+"&";s+="desktop_style=";a=xlib.winSortedArray();cnt=len(a);for(i=0;i<cnt;i++){if(a[i].issys&&(!(mode&DESKTOP_INCLUDESYS))){continue;}
if(a[i].oparent){continue;}
s+="&xwin_"+i+"="+jsEncode(a[i].pack());}}
return(s);},winMove:function(data,mode,opts){var a,b,cnt,i,w,xOffset,yOffset;var aW,ndx,max,achild,wcnt,j,w2;mode=mode?mode:MOVE_INSTANT;isSave=mode&MOVE_SAVEPOS;a=data.split(";");cnt=len(a);for(i=0;i<cnt;i++){if(!a[i].length){continue;}
b=a[i].split(",");w=xWinFromName(b[0]);if((!w)||(!(w.style&WS_MAGNETIC))){continue;}
achild=w.getMagneticChildren();wcnt=achild.length;xOffset=w.left-b[1];yOffset=w.top-b[2];for(j=0;j<wcnt;j++){w2=achild[j]
a[len(a)]=w2.name+","+(w2.left-xOffset)+","+(w2.top-yOffset)+","+w2.width+","+w2.height+","+(w.zorder+2+i)+","+w2.displayMode;}}
cnt=len(a);if(mode&MOVE_INSTANT){max=0;for(i=0;i<cnt;i++){if(!a[i].length){continue;}
b=a[i].split(",");w=xWinFromName(b[0]);if(w){if(mode&MOVE_NORESIZE){w.obj.style.left=b[1];w.obj.style.top=b[2];if(isSave){w.left=b[1];w.top=b[2]}}
else{w.positionDivs(b[1],b[2],b[3],b[4]);}
if(w.style&WS_ALWAYSONTOP){w.obj.style.zIndex=w.zIndexGet();}
else{try{w.obj.style.zIndex=w.zorder=_int(b[5])+2+(i*2);}catch(e){}
if(w.zorder>max){max=w.zorder;}}}}
if(max){xWinZorder=max+2;}
return;}
else if(mode&MOVE_ANIMATE){aW=[];max=0;for(i=0;i<cnt;i++){if(!a[i].length){continue;}
b=a[i].split(",");w=xWinFromName(b[0]);if(w){aW[aW.length]={win:w,sX:_int(w.obj.style.left),eX:_int(b[1]),sY:_int(w.obj.style.top),eY:_int(b[2]),sW:_int(w.obj.style.width),eW:_int(b[3]),sH:_int(w.obj.style.height),eH:_int(b[4])};if(w.style&WS_ALWAYSONTOP){w.obj.style.zIndex=w.zIndexGet();}
else{try{w.obj.style.zIndex=w.zorder=_int(b[5])+2+(i*2);}catch(e){}
if(w.zorder>max){max=w.zorder;}}}}
if(max){xWinZorder=max+2;}
w=aW[0].win;if(w.obj.winMoveFunc){xlib.intervalClear(w.obj.winMoveFunc);}
w.obj.curStep=0;w.obj.isSave=isSave;xlib.animateOptionsSet(w.obj,opts);w.obj.winMoveFunc=xlib.intervalSet(function(){var i,ptPos,ptSize;for(i=0;i<aW.length;i++){ptPos=[easeInOut(aW[i].sX,aW[i].eX,w.obj.animSteps,w.obj.curStep,w.obj.animPower),easeInOut(aW[i].sY,aW[i].eY,w.obj.animSteps,w.obj.curStep,w.obj.animPower)];if(mode&MOVE_NORESIZE){aW[i].win.obj.style.left=ptPos[0];aW[i].win.obj.style.top=ptPos[1];}
else{ptSize=[easeInOut(aW[i].sW,aW[i].eW,w.obj.animSteps,w.obj.curStep,w.obj.animPower),easeInOut(aW[i].sH,aW[i].eH,w.obj.animSteps,w.obj.curStep,w.obj.animPower)];aW[i].win.position(ptPos[0],ptPos[1],ptSize[0],ptSize[1]);}}
w.obj.curStep++;if(w.obj.curStep>w.obj.animSteps){if(w.obj.isSave){for(i=0;i<aW.length;i++){aW[i].win.left=_int(aW[i].win.obj.style.left);aW[i].win.top=_int(aW[i].win.obj.style.top);aW[i].win.width=_int(aW[i].win.obj.style.width);aW[i].win.height=_int(aW[i].win.obj.style.height);}}
xlib.intervalClear(w.obj.winMoveFunc);w.obj.winMoveFunc=null;}},w.obj.animInterval);}},scrollTo:function(x,y,mode){window.scrollTo(x,y);}};function xFx(){this.id="fx";this.cnt=0;}
xFx.prototype={bgFade:function(obj,clrStart,clrEnd,steps,delay,cbFunc){if(!steps){steps=20;}
if(!delay){delay=50;}
if(!obj){obj=document;}
if(obj.fadeFunc){xlib.intervalClear(obj.fadeFunc);}
obj.fade={curstep:0,steps:steps,delay:delay,red:[hex2dec(substr(clrStart,1,2)),hex2dec(substr(clrEnd,1,2))],green:[hex2dec(substr(clrStart,3,2)),hex2dec(substr(clrEnd,3,2))],blue:[hex2dec(substr(clrStart,5,2)),hex2dec(substr(clrEnd,5,2))],cbFunc:cbFunc};obj.fadeFunc=xlib.intervalSet(function(){var int1,int2,r,g,b,clr;int1=(obj.fade.steps-obj.fade.curstep)/obj.fade.steps;int2=obj.fade.curstep/obj.fade.steps;r=Math.floor((obj.fade.red[0]*int1)+(obj.fade.red[1]*int2));g=Math.floor((obj.fade.green[0]*int1)+(obj.fade.green[1]*int2));b=Math.floor((obj.fade.blue[0]*int1)+(obj.fade.blue[1]*int2));clr=dec2hex(r,2)+dec2hex(g,2)+dec2hex(b,2);obj.style.backgroundColor="#"+clr;obj.fade.curstep++;if(obj.fade.curstep>obj.fade.steps){xlib.intervalClear(obj.fadeFunc);obj.fadeFunc=null;if(obj.fade.cbFunc){obj.fade.cbFunc(obj);}}},obj.fade.delay);},opacity:function(id,val){var o=(typeof(id)=="string")?domObject(id):id;if(xlib.IsIE){if(val==10){o.style.filter=null;}
else{o.style.filter='alpha(opacity='+(val*10)+')';}}
else{o.style.opacity=val/10;}},opacityFade:function(id,optsP,maxSteps){var opts,i,name;opts={mode:DISP_FADE_IN,delay:50,hInterval:null,cbFunc:null,curStep:0,maxSteps:10,id:"",name:""}
if(typeof(optsP)=="number"){opts.mode=optsP;}
else{objUpdate(opts,optsP);}
if(typeof(id)!="string"){if(id.sig==XLIB_SIG){name=id.name;id=id.obj.id;}
else{id=name=id.id;}}
else{name=id;}
opts.id=id;opts.name=name;if(isvar(maxSteps)){opts.maxSteps=maxSteps;}
if(opts.mode==DISP_FADE_IN){opts.hInterval=xlib.intervalSet(function(){xlib.fx.opacity(opts.id,opts.curStep++);if(opts.curStep>opts.maxSteps){xlib.intervalClear(opts.hInterval);opts.hInterval=null;if(opts.cbFunc){opts.cbFunc(opts.name);}}},opts.delay);}
else if(opts.mode==DISP_FADE_OUT){opts.curStep=opts.maxSteps;opts.hInterval=xlib.intervalSet(function(){xlib.fx.opacity(opts.id,opts.curStep--);if(opts.curStep<0){xlib.intervalClear(opts.hInterval);opts.hInterval=null;if(opts.cbFunc){opts.cbFunc(opts.name);}}},opts.delay);}},typewriter:function(o,text,opts){var delay=50;if(typeof(o)=="string"){o=domObject(o);}
if(!o){return;}
if(opts){delay=opts.delay?opts.delay:delay;}
if(o.fxTypeFunc){xlib.intervalClear(o.fxTypeFunc);}
o.fxTypeDelay=delay;o.fxTypeStep=0;o.fxTypeText=text;o.fxTypeFunc=xlib.intervalSet(function(){if(substr(text,o.fxTypeStep,1)=="<"){o.fxTypeStep+=strat(">",right(text,len(text)-o.fxTypeStep));}
domInnerHTML_set(o,left(text,o.fxTypeStep));o.fxTypeStep++;if(o.fxTypeStep>o.fxTypeText.length){xlib.intervalClear(o.fxTypeFunc);o.fxTypeFunc=null;}},o.fxTypeDelay);}};function xWinFont(opts){this.measure="pt";if(!opts){this.classname=null;this.name=null;this.size=null;this.color=null;this.bgColor=null;this.weight=null;this.decoration=null;this.align=null;this.valign=null;this.lineheight=null;return;}
this.classname=opts.classname||"smtxt";this.name=opts.name||null;this.size=opts.size||null;this.color=opts.color||null;this.bgColor=opts.bgColor||null;this.weight=opts.weight||null;this.decoration=opts.decoration||null;this.align=opts.align||null;this.valign=opts.valign||null;this.lineheight=opts.lineheight||null;}
xWinFont.prototype.init=function(){this.classname=null;this.name=null;this.size=null;this.color=null;this.bgColor=null;this.weight=null;this.decoration=null;this.align=null;this.valign=null;this.lineheight=null;};xWinFont.prototype.loadFromStyle=function(style){var a,i,cnt,name,val;this.init();a=style.split(";");cnt=len(a);for(i=0;i<cnt;i++){name=lower(alltrim(strextract(a[i],":",1)));val=alltrim(strextract(a[i],":",2));switch(name){case"classname":this.classname=val;break;case"font-family":this.name=val;break;case"font-size":this.size=val;this.size=strswap(this.size,"pt","");this.size=strswap(this.size,"px","");break;case"font-weight":this.weight=val;break;case"font-style":this.decoration=val;break;case"text-decoration":if(lower(this.decoration)!="italic"){this.decoration=val;}
break;case"color":this.color=val;break;case"background":this.background=val;break;case"text-align":this.align=val;break;case"text-valign":this.valign=val;break;case"valign":this.valign=val;break;case"line-height":this.lineheight=val;break;}}};xWinFont.prototype.render=function(text){var s="";if(this.valign){s+="<table border=0 cellspacing=0 cellpadding=0 width=100% height=100% class='"+this.classname+" xNoBorder' style='border:none;'><tr valign='"+this.valign+"'><td align='"+this.align+"'>";}
s+="<font ";if(this.classname){s+="class='"+this.classname+"' ";}
s+="style='";if(this.align){s+="text-align:"+this.align+"; ";}
if(this.name){s+="font-family:"+this.name+"; ";}
if(this.size){s+="font-size:"+this.size+this.measure+"; ";}
if(this.color){s+="color:"+this.color+"; ";}
if(this.bgColor){s+="background:"+this.bgColor+"; ";}
if(this.weight){s+="font-weight:"+this.weight+"; ";}
if(this.lineheight){s+="line-height:"+this.lineheight+"; ";}
if(this.decoration){if(strati("PLAIN",this.decoration)){s+="text-decoration:none; ";}
else if(strati("ITALIC",this.decoration)){s+="font-style:"+this.decoration+"; ";s+="text-decoration:none; ";}
else{s+="text-decoration:"+this.decoration+"; ";}}
s+="'>"+text+"</font>";if(this.valign){s+="</td></tr></table>";}
return(s);};var cookie={create:function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";},read:function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;},erase:function(name){this.create(name,"",-1);}}
function datej(dte){var a,year,month,day,Y,M,D,A,B,C,E,F;if(!dte){dte=new Date();}
else if(typeof(dte)=="string"){a=dte.split("-");dte=new Date(_int(a[2]),_int(a[0])-1,_int(a[1]));}
Y=dte.getFullYear();M=dte.getMonth();D=dte.getDate();A=Math.floor(Y/100);B=Math.floor(A/4);C=2-A+B;C=0;E=Math.floor(365.25*(Y+4716));F=Math.floor(30.6001*(M+1));return(_int(C+D+E+F-1524.5));}
function dateFormatj(dte,formatstr){var year,day,xdte;var Z,F,W,X,A,B,C,D,E;if(!formatstr){formatstr="MM-DD-YYYY";}
Z=dte+0.5;F=Z-Math.floor(Z);Z=Math.floor(Z);W=Math.floor((Z-1867216.25)/36524.25);X=Math.floor(W/4);A=Z;B=A+1524;C=Math.floor((B-122.1)/365.25);D=Math.floor(365.25*C);E=Math.floor((B-D)/30.6001);month=E>13?E-13:E-1;day=B-D-Math.floor(30.6001*E)+F;year=month<3?C-4715:C-4716;dte=new Date(year,month,day+1);xdte=new xDate(dte);return(xdte.format(formatstr));}
function xDate(dte){var a;if(!dte){dte=new Date();}
else if(typeof(dte)=="string"){a=dte.split("-");dte=new Date(_int(a[2]),_int(a[0])-1,_int(a[1]));}
else{dte=new Date(dte);}
this.date=dte;this.aMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];this.aDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];}
xDate.prototype.diff=function(d1,d2,t){var d,w,dy,h,m,s;d=new Date();if(!t){try{d.setTime(Math.abs(d1.getTime()-d2.getTime()));t=d.getTime();}
catch(e){return("00");}}
w=Math.floor(t/(1000*60*60*24*7));t-=w*(1000*60*60*24*7);dy=Math.floor(t/(1000*60*60*24));t-=dy*(1000*60*60*24);h=Math.floor(t/(1000*60*60));t-=h*(1000*60*60);m=Math.floor(t/(1000*60));t-=m*(1000*60);s=Math.floor(t/1000);t-=s*1000;return(right("00"+(dy+(w*7)),2)+":"+right("00"+h,2)+":"+right("00"+m,2)+":"+right("00"+s,2));};xDate.prototype.format=function(fstr){var d=this.date,mo,da,yr,hr;fstr=fstr||"MM-DD-YYYY hh:MN:SS ap";mo=d.getMonth();if(strat("MMMM",fstr)){fstr=strswap(fstr,"MMMM",this.aMonth[mo]);}
if(strat("MMM",fstr)){fstr=strswap(fstr,"MMM",left(this.aMonth[mo],3));}
if(strat("MM",fstr)){fstr=strswap(fstr,"MM",right("0"+(mo+1),2));}
if(strat("mm",fstr)){fstr=strswap(fstr,"mm",mo+1);}
da=d.getDate();if(strat("DDDD",fstr)){fstr=strswap(fstr,"DDDD",this.aDay[d.getDay()]);}
if(strat("DDD",fstr)){fstr=strswap(fstr,"DDD",numFormat(da,FORMAT_SUFFIX));}
if(strat("DD",fstr)){fstr=strswap(fstr,"DD",right("0"+da,2));}
if(strat("dd",fstr)){fstr=strswap(fstr,"dd",da);}
yr=d.getFullYear();if(strat("YYYY",fstr)){fstr=strswap(fstr,"YYYY",yr);}
if(strat("YY",fstr)){fstr=strswap(fstr,"YY",right(yr,2));}
hr=d.getHours();if(strat("HH",fstr)){fstr=strswap(fstr,"HH",right("0"+hr,2));}
if(strat("hh",fstr)){fstr=strswap(fstr,"hh",right("0"+(hr>12?hr-12:hr),2));}
if(strat("MN",fstr)){fstr=strswap(fstr,"MN",right("0"+d.getMinutes(),2));}
if(strat("SSSS",fstr)){fstr=strswap(fstr,"SSSS",right("000"+d.getMilliseconds(),4));}
if(strat("SS",fstr)){fstr=strswap(fstr,"SS",right("0"+d.getSeconds(),2));}
if(strat("AP",fstr)){fstr=strswap(fstr,"AP",hr>11&&hr<24?"PM":"AM");}
if(strat("ap",fstr)){fstr=strswap(fstr,"ap",hr>11&&hr<24?"pm":"am");}
if(strat("TZ",fstr)){fstr=strswap(fstr,"TZ",""+(d.getTimezoneOffset()/60*(-1)));}
return(fstr);};function oaInterface(){this.version="1.0";this.ID_CREATE=1;this.ID_DESTROY=2;this.ID_DISPLAY=4;this.ID_CLICK=8;this.ID_DBLCLICK=16;this.ID_DRAG=32;this.ID_DROP=64;this.ID_TIMER=128;this.ID_MOUSEOVER=256;this.ID_MOUSEOUT=512;this.ID_KEYDOWN=1024;this.ID_KEYUP=2048;this.ID_KEYPRESS=4096;this.ID_WINMOVE=8192;this.ID_WINSIZE=16384;this.ID_MESSAGE=32768;this.ID_INTERNALHANDLER=65536;this.KEY_ALT=1;this.KEY_CTRL=2;this.KEY_SHIFT=4;this.MOUSE_BUTTONLEFT=1;this.MOUSE_BUTTONCENTER=2;this.MOUSE_BUTTONRIGHT=4;this.aServices=[];this.adataServices=[];this.aSubscriptions=[];this.adataSubscriptions=[];this.cbPublishAll=null;this.dndEnabled=0;this.msgCnt=0;this.aEvents=["CREATE","DESTROY","DISPLAY","CLICK","DBLCLICK","DRAG","DROP","TIMER","MOUSEOVER","MOUSEOUT","KEYDOWN","KEYUP","KEYPRESS","WINMOVE","WINSIZE"];try{this.common=OpenAjax;this.init();}catch(e){}}
oaInterface.prototype.init=function(){this.common.hub.registerLibrary("xWinLib","http://www.xwinlib.com/OpenAjaxHub","1.0",{});};oaInterface.prototype.getServices=function(data){var a,b,i,cnt
this.adataServices=[];if(strempty(data)){return(0);}
a=data.split(";");cnt=len(a);for(i=0;i<cnt;i++){b=a[i].split("|");this.adataServices[len(this.adataServices)]=new OpenAjaxInterface_service(b[0],b[1],b[2],b[3]);}
return(1);};oaInterface.prototype.putServices=function(){var a,cnt,i,s="";a=this.adataServices;cnt=len(a);if(!cnt){return("");}
for(i=0;i<cnt;i++){s+=""+a[i].status+"|"+a[i].sid+"|"+a[i].desc+"|"+a[i].opts+";";}
s=left(s,len(s)-1);return(s);};oaInterface.prototype.getSubscriptions=function(data){var a,b,i,cnt
this.adataSubscriptions=[];if(strempty(data)){return(0);}
a=data.split(";");cnt=len(a);for(i=0;i<cnt;i++){b=a[i].split("|");this.adataSubscriptions[len(this.adataSubscriptions)]=new OpenAjaxInterface_subscribe(b[0],b[1],b[2],b[3],b[4],b[5],b[6]);}
return(1);};oaInterface.prototype.registerService=function(sid,desc,opts){var x=this.aIndex(this.aServices,sid)
if(x>=0){this.aServices[x]=[sid,desc,this.aServices[x][1]|=opts];return(1);}
this.aServices[len(this.aServices)]=[sid,desc,opts];return(1);};oaInterface.prototype.objRegisterServices=function(data){var a,i,cnt,rval=null;if(typeof(data)=="array"){this.adataServices=data;}
else{this.getServices(data);}
a=this.adataServices;cnt=len(a);if(cnt>1){cnt=1;}
for(i=0;i<cnt;i++){if(a[i].status==1){this.registerService(a[i].sid,a[i].desc,a[i].opts);rval={sid:a[i].sid,opts:a[i].opts};}}
return(rval);};oaInterface.prototype.unregisterService=function(sid){var index=this.aIndex(this.aServices,sid);if(index<0){return(0);}
this.aServices=this.aIndexDelete(this.aServices,index);return(1);};oaInterface.prototype.aIndex=function(a,val,col){var cnt,i;if(col==null){col=0;}
val=lower(val);cnt=len(a);for(i=0;i<cnt;i++){if(lower(a[i][col])==val){return(i);}}
return(-1);};oaInterface.prototype.aIndexDelete=function(a,index){var cnt,i,b=[];cnt=len(a);for(i=0;i<cnt;i++){if(i==index){continue}
b[len(b)]=a[i];}
return(b);};oaInterface.prototype.aLibraries=function(){var n,o,a=[];for(n in this.common.hub.libraries){o=this.common.hub.libraries[n];a[len(a)]={prefix:n,namespaceURI:o.namespaceURI,version:o.version,extra:o.extra};}
return(a);};oaInterface.prototype.subscribe=function(sid,cb,scope,data,filter){var h=this.common.hub.x_subscribe(sid,cb,scope,data,filter)
if(this.aIndex(this.aSubscriptions,h)<0){this.aSubscriptions[len(this.aSubscriptions)]=[h,sid,data];}
return(h);};oaInterface.prototype.unsubscribe=function(h){var index=this.aIndex(this.aSubscriptions,h);if(index>-1){this.aSubscriptions=this.aIndexDelete(this.aSubscriptions,h);}
return(this.common.hub.x_unsubscribe(h));};oaInterface.prototype.libraryList=function(lf){var a,cnt,i,o,s="";lf=lf||"<br>";a=this.aLibraries();cnt=len(a);for(i=0;i<cnt;i++){o=a[i];s+=o.prefix+", "+o.namespaceURI+", "+o.version+lf;}
return(s);};oaInterface.prototype.subscriptionList=function(lf){var a,cnt,i,o,s="";lf=lf||"<br>";a=this.aSubscriptions;cnt=len(a);for(i=0;i<cnt;i++){s+=""+a[i][0]+", "+a[i][1]+", "+a[i][2]+lf;}
return(s);};oaInterface.prototype.serviceList=function(lf){var a,cnt,i,o,s="";lf=lf||"<br>";a=this.aServices;cnt=len(a);for(i=0;i<cnt;i++){s+=""+a[i][0]+lf;}
return(s);};oaInterface.prototype.publish=function(sid,data){this.msgCnt++;if(this.cbPublishAll){this.cbPublishAll(sid,data);}
this.common.hub.x_publish(sid,data);};oaInterface.prototype.getData=function(data){var o=this.getMessage(data);if(o){o.win=xWin(o.winname);}
return(o);};oaInterface.prototype.getMessage=function(data){var x;x=strat("|",data);if(!x){return(null);}
if(left(data,x-1)!=XLIB_SIG){return(null);}
data=right(data,len(data)-x);try{return(eval(data));}
catch(e){return(null);}};oaInterface.prototype.objPublish=function(e,mtype,w,pt,sid,msg){var o,k,kbtn=0,x,y,n;o=new OpenAjaxInterface_message();k=xlib.keyGet(e);if(k.isALT){kbtn|=this.KEY_ALT;}
if(k.isCTRL){kbtn|=this.KEY_CTRL;}
if(k.isSHIFT){kbtn|=this.KEY_SHIFT;}
o.sid=sid;o.mtype=mtype;o.winname=w.name;o.msg=msg;if(pt){o.pt={x:pt.x,y:pt.y};}
else{o.pt={x:0,y:0};}
o.mouseButton=xlib.mouseButton(e);o.key=k.code;o.keyButton=kbtn;s=XLIB_SIG+"|({"
for(n in o){v=o[n];switch(typeof(v)){case"string":s+=n+":\""+v+"\",";break
case"number":s+=n+":"+v+",";break}
if(n=="pt"){s+="pt:{";if(v){s+="x:"+v.x+",";s+="y:"+v.y;}
else{s+="x:0,";s+="y:0";}
s+="},";}}
s=left(s,len(s)-1);s+="})";return(this.common.hub.publish(sid,s));};oaInterface.prototype.msgTypeDesc=function(mval){var cnt,i;cnt=len(this.aEvents);for(i=0;i<cnt;i++){if(mval==eval("xlib.openajax.ID_"+this.aEvents[i])){return(this.aEvents[i]);}}
return("Unknown");};oaInterface.prototype.initDragAndDrop=function(flag){if(flag){if(this.dndEnabled){return;}
this.registerService("xwinlib_dnd","Global drag and drop service");this.dndEnabled=1;}
else{this.unregisterService("xwinlib_dnd");this.dndEnabled=0;}};function OpenAjaxInterface_message(){this.sid="";this.mtype=0;this.winname="";this.msg="";this.pt={x:0,y:0};this.mouseButton=0;this.key=0;this.keyButton=0;this.data="";this.lib="";}
function OpenAjaxInterface_service(status,sid,desc,opts){this.status=_int(status);this.sid=sid;this.desc=desc;this.opts=_int(opts);if(isNaN(this.opts)){this.opts=0;}}
function OpenAjaxInterface_subscribe(status,sid,cb,scope,data,filter,opts){this.status=_int(status);this.sid=sid;this.cb=cb;this.scope=scope;this.data=data;this.filter=filter;this.opts=_int(opts);if(isNaN(this.opts)){this.opts=0;}}
function objNormalizeData(data){var a,s="",i,vname,val;if(strempty(data)){return("");}
a=data.split("&");s+=a[0]+"&"
for(i=1;i<len(a);i++){if(strempty(a[i])){continue;}
vname=strextract(a[i],"=",1);val=strextract(a[i],"=",2);switch(strswap(vname,"$","")){case"otype":case"issys":case"zorder":case"style":case"left":case"top":case"width":case"height":case"margin":case"padding":case"scrollTop":case"scrollLeft":case"rotation":case"eTimerInterval":case"eTimerReload":case"oaOpts":case"openHeight":case"closeHeight":case"xstyle":if(val=="0"){continue;}
break;case"zParent":case"bgMargin":case"bgImage":case"header":case"headerRight":case"tooltip":case"ttOpts":case"ttBG":case"footer":case"action":case"shadow":case"eTimer":case"oaServices":case"oaSubscriptions":case"propCustom":if(val==""){continue;}
break;case"displayMode":case"borderWidth":if(val=="1"){continue;}
break;case"overflow":if(val=="auto"){continue;}
break;case"borderStyle":if(val=="solid"){continue;}
break;case"borderWidthThick":if(val=="4"){continue;}
break;case"borderColor":if(val=="black"){continue;}
break;case"headerHeight":case"ftrHeight":if(val=="22"){continue;}
break;case"hdrPadding":case"ftrPadding":if(val=="2"){continue;}
break;case"hdrTextClass":case"ftrTextClass":if(val=="smtxt"){continue;}
break;case"hdrTextColor":case"ftrTextColor":if(val=="white"){continue;}
break;case"ttWidth":if(val=="300"){continue;}
break;}
s+=vname+"="+val+"&";}
return(s);}
var domLoaded={aCommands:[],errFunc:null,isReady:0,check:function(){if(window.addEventListener){window.addEventListener('DOMContentLoaded',domLoaded.done,false);}
else if(document.addEventListener){document.addEventListener("DOMContentLoaded",domLoaded.done,false);}
else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent)){hTimer=setInterval(function(){if(/loaded|complete/i.test(document.readyState)){domLoaded.done();clearInterval(hTimer);}},10);}
else{window.onload=domLoaded.done;}},done:function(){var i;for(i=0;i<domLoaded.aCommands.length;i++){domLoaded.run(domLoaded.aCommands[i]);}
domLoaded.isReady=1;},run:function(f){var e;try{if(typeof(f)=="string"){eval(f);}
else{f();}}
catch(e){if(domLoaded.errFunc){domLoaded.errFunc(e);}}}}
function domReady(f){if(domLoaded.isReady){domLoaded.run(f);return;}
domLoaded.aCommands[domLoaded.aCommands.length]=f;}
function scrollToAnimated(y,optsP){if(window.scrollAnim){return;}
window.scrollAnim={curStep:0,steps:50,power:.5,interval:10,yStart:0,yEnd:y,isUp:0,hInterval:null}
objUpdate(window.scrollAnim,optsP);window.scrollAnim.yStart=xlib.winScrollY()
if(window.scrollAnim.yStart>window.scrollAnim.yEnd){window.scrollAnim.isUp=1;window.scrollAnim.yEnd=window.scrollAnim.yStart;window.scrollAnim.yStart=y;}
window.scrollAnim.hInterval=xlib.intervalSet(function(){var o,y;o=window.scrollAnim;h=easeInOut(o.yStart,o.yEnd,o.steps,o.curStep,o.power);window.scrollTo(0,o.isUp?o.yEnd-h:h);o.curStep++;if(o.curStep>o.steps){xlib.intervalClear(window.scrollAnim.hInterval);window.scrollAnim=null}},window.scrollAnim.interval);}
var xWinTouchHandler={isInSize:0,isMoveable:0,isResizable:0,ptOffset:null,rPinchZoom:null,szData:null,win:null,init:function(win){win=typeof(win)=="string"?xWin(win):win;xlib.eventBind(win.oBody,"touchstart",xWinTouchHandler.touchStart,false);xlib.eventBind(win.oBody,"touchend",xWinTouchHandler.touchEnd,false);xlib.eventBind(win.oBody,"touchcancel",xWinTouchHandler.touchCancel,false);xWinTouchHandler.isMoveable=win.style&WS_MOVEABLE?1:0;xWinTouchHandler.isResizable=win.style&WS_RESIZABLE?1:0;if(xWinTouchHandler.isMoveable||xWinTouchHandler.isResizable){xlib.eventBind(win.oBody,"touchmove",xWinTouchHandler.touchMove,false);}},close:function(win){win=typeof(win)=="string"?xWin(win):win;xlib.eventUnbind(win.oBody,"touchstart",xWinTouchHandler.touchStart);xlib.eventUnbind(win.oBody,"touchend",xWinTouchHandler.touchEnd);xlib.eventUnbind(win.oBody,"touchcancel",xWinTouchHandler.touchCancel);xWinTouchHandler.isMoveable=win.style&WS_MOVEABLE?1:0;xWinTouchHandler.isResizable=win.style&WS_RESIZABLE?1:0;if(xWinTouchHandler.isMoveable||xWinTouchHandler.isResizable){xlib.eventBind(win.oBody,"touchmove",xWinTouchHandler.touchMove);}},getPos:function(e,index){var x,y;index=isvar(index)?index:0;x=e.changedTouches[index].pageX;y=e.changedTouches[index].pageY;return({x:x,y:y});},touchCancel:function(e){xWinTouchHandler.win=null;xWinTouchHandler.isInSize=0;xWinTouchHandler.rPinchZoom=null;},touchEnd:function(e){xWinTouchHandler.win=null;xWinTouchHandler.isInSize=0;xWinTouchHandler.rPinchZoom=null;},touchMove:function(e){var pt,r,m,pt2,x,y;pt=xWinTouchHandler.getPos(e);if((!xlib.pageMoveEnabled)&&(!xWinTouchHandler.issys)){return(true);}
if(xWinTouchHandler.isResizable){if(xWinTouchHandler.rPinchZoom!=null){e.preventDefault();pt2=xWinTouchHandler.getPos(e,1);r=xWinTouchHandler.rPinchZoom;m={x:Math.abs(pt2.x-pt.x)-r.x,y:Math.abs(pt2.y-pt.y)-r.y};xWinTouchHandler.win.winMove(r.left-(m.x/2),r.top-(m.y/2));xWinTouchHandler.win.winSize(r.width+m.x,r.height+m.y);return;}
if(xWinTouchHandler.isInSize){e.preventDefault();r=xWinTouchHandler.szData;switch(r.dir){case"n":m={x:r.width,y:r.height-(pt.y-r.y)};xWinTouchHandler.win.winMove(pt.x-xWinTouchHandler.ptOffset.x,pt.y-xWinTouchHandler.ptOffset.y);break;case"s":m={x:r.width,y:r.height+(pt.y-r.y)};break;case"e":m={x:r.width+(pt.x-r.x),y:r.height};break;case"w":m={x:r.width-(pt.x-r.x),y:r.height};xWinTouchHandler.win.winMove(pt.x-xWinTouchHandler.ptOffset.x,pt.y-xWinTouchHandler.ptOffset.y);break;default:m={x:r.width+(pt.x-r.x),y:r.height+(pt.y-r.y)};break;}
xWinTouchHandler.win.winSize(m.x,m.y);return;}}
if(xWinTouchHandler.isMoveable){e.preventDefault();x=pt.x-xWinTouchHandler.ptOffset.x;y=pt.y-xWinTouchHandler.ptOffset.y;if(xWinTouchHandler.win.onMoveFunc){pt2=xWinTouchHandler.win.onMoveFunc(x,y);x=pt2.x;y=pt2.y;}
xWinTouchHandler.win.winMove(x,y);}},touchStart:function(e){var pt,w,p1,p2;w=xWinFromElement(xlib.eventTarget(e));if(!w){return;}
w.bringtotop();xWinTouchHandler.isMoveable=w.style&WS_MOVEABLE?1:0;xWinTouchHandler.isResizable=w.style&WS_RESIZABLE?1:0;if(!(xWinTouchHandler.isMoveable||xWinTouchHandler.isResizable)){return;}
pt=xWinTouchHandler.getPos(e);xWinTouchHandler.rPinchZoom=null;xWinTouchHandler.win=w;xWinTouchHandler.ptOffset={x:pt.x-w.left,y:pt.y-w.top};if(xWinTouchHandler.isResizable){xWinTouchHandler.szData={x:pt.x,y:pt.y,width:w.width,height:w.height,dir:xWinMoveDir(e,w)};xWinTouchHandler.isInSize=strempty(xWinTouchHandler.szData.dir)?0:1;if(len(e.changedTouches)==2){p1=xWinTouchHandler.getPos(e);p2=xWinTouchHandler.getPos(e,1);xWinTouchHandler.rPinchZoom={x:Math.abs(p2.x-p1.x),y:Math.abs(p2.y-p1.y),left:w.left,top:w.top,width:w.width,height:w.height};}}
else{xWinTouchHandler.isInSize=0;}}}
domLoaded.check();var xlib=new xLibrary();