// ==UserScript==
// @name        列表新窗口打开
// @namespace   nga
// @include     http://bbs.ngacn.cc/thread.php*
// @version     1
// ==/UserScript==
function SetAllAOpenNew(anchors)
{
	for(var i=0;i<anchors.length;i++)
	{
		anchors[i].setAttribute("target","_blank");
	}
}
function OpenNew()
{
	var topicA=document.getElementsByClassName("topic");
	SetAllAOpenNew(topicA);
	var allPagerSpan=document.getElementsByClassName("pager");
	for(var i=0;i<allPagerSpan.length;i++)
	{
		var pagerA=allPagerSpan[i].getElementsByTagName("a");
		SetAllAOpenNew(pagerA);
	}
	var authorA=document.getElementsByClassName("author");
	SetAllAOpenNew(authorA);
	var replyA=document.getElementsByClassName("silver replydate");
	SetAllAOpenNew(replyA);
}
OpenNew();