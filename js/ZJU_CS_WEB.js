// ==UserScript==
// @name       ZJU-CS-WEB
// @namespace  http://lyxss.tk
// @version    0.1
// @description  Make Zhejiang University's Computer science webpage more correctly & beautiful
// @match      http://blackwhite.8866.org/cstcx/web/index.asp?*
// @match      http://10.71.45.100/cstcx/web/index.asp?*
// @downloadURL   http://lyxss.tk/djj/ZJU_CS_WEB.js
// @copyright  2012+, Senor
// @run-at document-start
// ==/UserScript==

document.write('');
document.writeln("<!doctype html>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("<meta charset=\"utf-8\">");
document.writeln("<title>大学计算机基础 - 基础教学中心课程网站<\/title>");
document.writeln("<link rel=\"stylesheet\" charset=\"utf-8\" href=\"http:\/\/lyxss.tk\/djj\/css\/base.css\">");
document.writeln("<link rel=\"stylesheet\" charset=\"utf-8\" href=\"http:\/\/lyxss.tk\/djj\/css\/input.css\">");
document.writeln("<\/head>");
document.writeln("");
document.writeln("<body>");
document.writeln("<div id=\"nav-top-bar\">");
document.writeln("<div id=\"nav-top-wrap\"><div id=\"nav-top-content\" class=\"c-wrap\"><div id=\"top-li-1\" class=\"li switcher\"><a href=\"javascript:\">首页<\/a><\/div><div id=\"top-li-2\" class=\"li switcher\"><a href=\"javascript:\">公告通知<\/a><\/div><div id=\"top-li-3\" class=\"li switcher\"><a href=\"javascript:\">课程信息<\/a><\/div><div id=\"top-li-4\" class=\"li switcher\"><a href=\"javascript:\">答疑中心<\/a><\/div><div id=\"top-li-5\" class=\"li switcher\"><a href=\"javascript:\">资源下载<\/a><\/div><\/div><\/div>");
document.writeln("<div id=\"nav-top-white\"><div id=\"nav-info-layer-a\" class=\"c-wrap\"><b style=\"margin-left: 30px\">通知：<\/b><div id=\"nav-info-layer-b\">暂无通知-动态<\/div><\/div><\/div>");
document.writeln("<\/div>");
document.writeln("<div id=\"container\">");
document.writeln("<div class=\"c-wrap\">");
document.writeln("<div id=\"banner\"><\/div>");
document.writeln("    <div id=\"main\" class=\"float-wrap\">");
document.writeln("        <div id=\"left-panel\" class=\"left panel fence-layer\">");
document.writeln("            <div id=\"login-layer\" class=\"fence\">");
document.writeln("            <h1>用户登录<\/h1>");
document.writeln("            <form id=\"frmLogin\">");
document.writeln("            <table style=\"margin-left:20px\" border=\"0\"><tr><td width=\"68\">用户名<\/td><td width=\"187\"><input type=\"text\" id=\"txtUsername\" name=\"txtUser\"><\/td><\/tr><tr><td>密码<\/td><td><input type=\"password\" id=\"txtPassword\" name=\"txtPwd\" onKeyDown=\"if(event)k=event.keyCode;else if(event.which)k=event.which;if(k==13)controller.login();\"><\/td><\/tr><tr><td><\/td><td><input type=\"button\" id=\"btnLogin\" value=\"登 录\" onclick=\"controller.login();\"><\/table>");
document.writeln("            <\/form>");
document.writeln("            <\/div>");
document.writeln("            <div id=\"friendlink\" class=\"fence\">");
document.writeln("            <h1>常用链接<\/h1>");
document.writeln("            <div id=\"link-layer\">");
document.writeln("            <a href=\"http:\/\/www.zju.edu.cn\" target=\"_blank\">浙江大学主页<\/a><br>");
document.writeln("            <a href=\"http:\/\/zupo.zju.edu.cn\" target=\"_blank\">行政办公网<\/a><br>");
document.writeln("            <a href=\"http:\/\/jwbinfosys.zju.edu.cn\" target=\"_blank\">选课网 - 教务部<\/a><br>");
document.writeln("            <a href=\"http:\/\/www.cc98.org\" target=\"_blank\">CC98<\/a><br>");
document.writeln("            <a href=\"http:\/\/10.77.30.31\" target=\"_blank\">C在线练习[工科平台]<\/a><br>");
document.writeln("            <a href=\"http:\/\/10.77.30.35\" target=\"_blank\">C在线练习[求是科学]<\/a><br>");
document.writeln("            <a href=\"http:\/\/10.77.30.33\" target=\"_blank\">Java在线练习<\/a><br>");
document.writeln("            <a href=\"http:\/\/luckweb.057101.com\/\" target=\"_blank\">浙大缘网<\/a><br>");
document.writeln("            <a href=\"http:\/\/www.qsc.zju.edu.cn\" title=\"http:\/\/www.myqsc.com\" target=\"_blank\">浙江大学求是潮<\/a>");
document.writeln("            <\/div>");
document.writeln("            <\/div>");
document.writeln("");
document.writeln("        <\/div>");
document.writeln("        <div id=\"rp-switcher-layer\">");
document.writeln("        <div id=\"right-panel\" class=\"right panel fence-layer\">");
document.writeln("            <div id=\"lesson-intro-layer\" class=\"fence float-wrap-small\">");
document.writeln("            <h1>课程简介<\/h1>");
document.writeln("                <div id=\"lesson-intro-switcher-layer\" class=\"fence-layer left right-vline\" style=\"width:25%\">");
document.writeln("                <a class=\"switcher fence fence-small\" href=\"javascript:\">C程序设计<\/a>");
document.writeln("                <a class=\"switcher fence fence-small\" href=\"javascript:\">VB程序设计<\/a>");
document.writeln("                <a class=\"switcher fence fence-small\" href=\"javascript:\">大学计算机基础<\/a>");
document.writeln("                <a class=\"switcher fence fence-small\" href=\"javascript:\">C++程序设计<\/a>");
document.writeln("                <a class=\"switcher fence fence-small\" href=\"javascript:\">JAVA程序设计<\/a>");
document.writeln("                <\/div>");
document.writeln("                <div id=\"lesson-intro-txt-layer\" class=\"fence right\" style=\"width: 73%;text-indent: 2em;font-size: 14px\">");
document.writeln("                    <div id=\"lesson-intro-txt\">");
document.writeln("                    <div>《C程序设计基础及实验》是我校各专业必修的计算机技术基础课程之一，通过介绍C语言及其编程技术，使学生了解高级程序设计语言的结构，掌握基本的程序设计过程和技巧，掌握基本的分析问题和利用计算机求解问题的能力，具备初步的高级语言程序设计能力。成绩评定：总评=笔试*50%+实验*25%+平时*25%。合格最低要求：笔试成绩必须≥55，且实验必须合格。<\/div>");
document.writeln("                    <div> 《VB程序设计基础及实验》是我校各专业必修的计算机技术基础课程之一，通过介绍C语言及其编程技术，使学生了解高级程序设计语言的结构，掌握基本的程序设计过程和技巧，掌握基本的分析问题和利用计算机求解问题的能力，具备初步的高级语言程序设计能力。成绩评定：总评=笔试*50%+实验*25%+平时*25%。合格最低要求：笔试成绩必须≥55，且实验必须合格。  <\/div>");
document.writeln("                    <div>本课程是我校理、工、农、医、文等类各本科专业必修的计算机基础课程， 通过本课程的学习，使学生对计算机科学领域所涉及的知识、发展的趋势有一个全面的了解， 并能掌握计算机的基本操作技能，熟悉常见应用软件的使用，初步培养计算机意识，以便能在当 今这个信息化社会中更好地学习、生活和工作，同时也为后继计算机及相关课程的学习打好基础。 大计成绩评定：总评=笔试*50%+综合报告*25%+平时*25%。合格最低要求：理论成绩必须≥55。 <\/div>");
document.writeln("                    <div>《C++程序设计基础及实验》是我校各专业必修的计算机技术基础课程之一，通过介绍C语言及其编程技术，使学生了解高级程序设计语言的结构，掌握基本的程序设计过程和技巧，掌握基本的分析问题和利用计算机求解问题的能力，具备初步的高级语言程序设计能力。成绩评定：总评=笔试*50%+实验*25%+平时*25%。合格最低要求：笔试成绩必须≥55，且实验必须合格。 <\/div>");
document.writeln("                    <div> 《JAVA程序设计基础及实验》是我校各专业必修的计算机技术基础课程之一，通过介绍JAVA语言及其编程技术，使学生了解高级程序设计语言的结构，掌握基本的程序设计过程和技巧，掌握基本的分析问题和利用计算机求解问题的能力，具备初步的高级语言程序设计能力。成绩评定：总评=笔试*50%+实验*25%+平时*25%。合格最低要求：笔试成绩必须≥55，且实验必须合格。  <\/div>");
document.writeln("                    ");
document.writeln("                    <\/div>");
document.writeln("                <\/div>");
document.writeln("            <\/div>");
document.writeln("            <div class=\"fence\">");
document.writeln("            afd");
document.writeln("            <\/div>");
document.writeln("        <\/div>");
document.writeln("        <\/div>");
document.writeln("    <\/div>");
document.writeln("<\/div>");
document.writeln("<\/div>");
document.writeln("<\/body>");
document.writeln("<\/html>");


/**  LazyLoad https://github.com/rgrove/lazyload **/
LazyLoad=(function(doc){var env,head,pending={},pollCount=0,queue={css:[],js:[]},styleSheets=doc.styleSheets;function createNode(name,attrs){var node=doc.createElement(name),attr;for(attr in attrs){if(attrs.hasOwnProperty(attr)){node.setAttribute(attr,attrs[attr])}}return node}function finish(type){var p=pending[type],callback,urls;if(p){callback=p.callback;urls=p.urls;urls.shift();pollCount=0;if(!urls.length){callback&&callback.call(p.context,p.obj);pending[type]=null;queue[type].length&&load(type)}}}function getEnv(){var ua=navigator.userAgent;env={async:doc.createElement('script').async===true};(env.webkit=/AppleWebKit\//.test(ua))||(env.ie=/MSIE|Trident/.test(ua))||(env.opera=/Opera/.test(ua))||(env.gecko=/Gecko\//.test(ua))||(env.unknown=true)}function load(type,urls,callback,obj,context){var _finish=function(){finish(type)},isCSS=type==='css',nodes=[],i,len,node,p,pendingUrls,url;env||getEnv();if(urls){urls=typeof urls==='string'?[urls]:urls.concat();if(isCSS||env.async||env.gecko||env.opera){queue[type].push({urls:urls,callback:callback,obj:obj,context:context})}else{for(i=0,len=urls.length;i<len;++i){queue[type].push({urls:[urls[i]],callback:i===len-1?callback:null,obj:obj,context:context})}}}if(pending[type]||!(p=pending[type]=queue[type].shift())){return}head||(head=doc.head||doc.getElementsByTagName('head')[0]);pendingUrls=p.urls;for(i=0,len=pendingUrls.length;i<len;++i){url=pendingUrls[i];if(isCSS){node=env.gecko?createNode('style'):createNode('link',{href:url,rel:'stylesheet'})}else{node=createNode('script',{src:url});node.async=false}node.className='lazyload';node.setAttribute('charset','utf-8');if(env.ie&&!isCSS&&'onreadystatechange'in node&&!('draggable'in node)){node.onreadystatechange=function(){if(/loaded|complete/.test(node.readyState)){node.onreadystatechange=null;_finish()}}}else if(isCSS&&(env.gecko||env.webkit)){if(env.webkit){p.urls[i]=node.href;pollWebKit()}else{node.innerHTML='@import "'+url+'";';pollGecko(node)}}else{node.onload=node.onerror=_finish}nodes.push(node)}for(i=0,len=nodes.length;i<len;++i){head.appendChild(nodes[i])}}function pollGecko(node){var hasRules;try{hasRules=!!node.sheet.cssRules}catch(ex){pollCount+=1;if(pollCount<200){setTimeout(function(){pollGecko(node)},50)}else{hasRules&&finish('css')}return}finish('css')}function pollWebKit(){var css=pending.css,i;if(css){i=styleSheets.length;while(--i>=0){if(styleSheets[i].href===css.urls[0]){finish('css');break}}pollCount+=1;if(css){if(pollCount<200){setTimeout(pollWebKit,50)}else{finish('css')}}}}return{css:function(urls,callback,obj,context){load('css',urls,callback,obj,context)},js:function(urls,callback,obj,context){load('js',urls,callback,obj,context)}}})(this.document);

var js_path = ['http://code.jquery.com/jquery-1.10.1.min.js','http://code.jquery.com/jquery-migrate-1.2.1.min.js','http://lyxss.tk/djj/script/model.js','http://lyxss.tk/djj/script/view.js','http://lyxss.tk/djj/script/function.js'];

LazyLoad.js(js_path);