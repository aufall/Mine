// ==UserScript==
// @name        楼主名字加亮
// @namespace   nga
// @include     http://bbs.ngacn.cc/read.php*
// @version     1
// ==/UserScript==
function FindSomebody(name,color,bgColor)
{
﻿  function FindAuthor(name,color,bgColor)
﻿  {
﻿  ﻿  var anchors=document.getElementsByTagName("a");
﻿  ﻿  for(var i=0;i<anchors.length;i++)
﻿  ﻿  {
﻿  ﻿  ﻿  if(anchors[i].id.indexOf("postauthor")!=-1)
﻿  ﻿  ﻿  {
﻿  ﻿  ﻿  ﻿  if(anchors[i].innerHTML==name)
﻿  ﻿  ﻿  ﻿  {
﻿  ﻿  ﻿  ﻿  ﻿  anchors[i].style.backgroundColor=bgColor;
﻿  ﻿  ﻿  ﻿  ﻿  anchors[i].style.color=color;
﻿  ﻿  ﻿  ﻿  }
﻿  ﻿  ﻿  }
﻿  ﻿  }﻿  ﻿  
﻿  }
﻿  function FindQuoted(name,color,bgColor)
﻿  {
﻿  ﻿  var spans=document.getElementsByClassName("postcontent");
﻿  ﻿  for(var i=0;i<spans.length;i++)
﻿  ﻿  {
﻿  ﻿  ﻿  var bs=spans[i].getElementsByTagName("b");
﻿  ﻿  ﻿  for(var j=0;j<bs.length;j++)
﻿  ﻿  ﻿  {
﻿  ﻿  ﻿  ﻿  var content=bs[j].innerHTML;
﻿  ﻿  ﻿  ﻿  if(content.indexOf("Post by "+name)!=-1)
﻿  ﻿  ﻿  ﻿  {
﻿  ﻿  ﻿  ﻿  ﻿  bs[j].innerHTML=content.replace(name,"<span style='color:"+color+";background-color:"+bgColor+";'>"+name+"</span>");
﻿  ﻿  ﻿  ﻿  }
﻿  ﻿  ﻿  }
﻿  ﻿  }
﻿  }
﻿  FindAuthor(name,color,bgColor);
﻿  FindQuoted(name,color,bgColor);
}

function FindLouzhu()
{
﻿  try{
﻿  ﻿  var anchor=document.getElementById("postauthor0");
﻿  ﻿  var name=anchor.innerHTML;
﻿  ﻿  var bgColor="Black";
﻿  ﻿  var color="#00ff00";
﻿  ﻿  if(name!=__CURRENT_UNAME)
﻿  ﻿  {
﻿  ﻿  ﻿  FindSomebody(name,color,bgColor);
﻿  ﻿  }
﻿  }
﻿  catch(ERR)
﻿  {
﻿  }
}
function FindMyself()
{
﻿  try{
﻿  ﻿  FindSomebody(__CURRENT_UNAME,"#ffff00","#ff0000");
﻿  }
﻿  catch(ERR)
﻿  {
﻿  }
}
function FindConcernPersons()
{
﻿  var ConcernPersons=["极坏的猪","我怎能不变态","岸本早未","sephirothii","cinderella2012","墮落的猴子"];
﻿  var anchor=document.getElementById("postauthor0");
﻿  var louzhuName=anchor.innerHTML;
﻿  for(var i=0;i<ConcernPersons.length;i++)
﻿  {
﻿  ﻿  if(ConcernPersons[i]!=louzhuName)
﻿  ﻿  {
﻿  ﻿  ﻿  FindSomebody(ConcernPersons[i],"#ff0000","#000000");
﻿  ﻿  }
﻿  }
}
function AppendTempConcernDiv()
{
﻿  var div=document.createElement("div");
﻿  div.style.position="fixed";
﻿  div.style.right="0px";
﻿  div.style.bottom="0px";
﻿  div.style.backgroundColor="rgb(255,248,229)";
﻿  div.style.border="solid 1px black";
﻿  div.innerHTML="临时关注：<input type='text' id='txtTempConcern'/>";
﻿  document.body.appendChild(div);
}
function FindTempConcern()
{
﻿  var tempConcern=document.getElementById("txtTempConcern").value;
﻿  if(tempConcern!="")
﻿  {
﻿  ﻿  FindSomebody(tempConcern,"Aqua","#000000");
﻿  }
}
function MarkLouzhu()
{
﻿  try{
﻿  ﻿  var anchor=document.getElementById("postauthor0");
﻿  ﻿  var div=document.createElement("div");
﻿  ﻿  div.style.position="fixed";
﻿  ﻿  div.style.right="0px";
﻿  ﻿  div.style.top="0px";
﻿  ﻿  div.style.fontSize="16px";
﻿  ﻿  //div.style.maxWidth="150px";
﻿  ﻿  div.style.backgroundColor="Black";
﻿  ﻿  div.style.color="#00ff00";
﻿  ﻿  div.style.fontWeight="bold";
﻿  ﻿  div.innerHTML="楼主："+anchor.innerHTML;
﻿  ﻿  document.body.appendChild(div);
﻿  }
﻿  catch(ERR){}
}
FindLouzhu();
MarkLouzhu();
FindMyself();
FindConcernPersons();
AppendTempConcernDiv();
setInterval(FindLouzhu,5000);
setInterval(FindMyself,5000);
setInterval(FindConcernPersons,5000);
setInterval(FindTempConcern,5000);