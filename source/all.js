function logme(txt){try{console.debug(txt);}catch(e){}}
logme('Starting to output html...');
document.head.innerHTML=unescape("%0A%3Cmeta%20charset%3D%22utf-8%22%3E%0A%3Ctitle%3E%u5927%u5B66%u8BA1%u7B97%u673A%u57FA%u7840%20-%20%u57FA%u7840%u6559%u5B66%u4E2D%u5FC3%u8BFE%u7A0B%u7F51%u7AD9%3C/title%3E%0A%0A%0A%0A%0A%0A%0A%3Clink%20rel%3D%22stylesheet%22%20charset%3D%22utf-8%22%20href%3D%22http%3A//project.qsc.senorsen.com/zju-csweb/source/css/base.css%22%3E%0A%3Clink%20rel%3D%22stylesheet%22%20charset%3D%22utf-8%22%20href%3D%22http%3A//project.qsc.senorsen.com/zju-csweb/source/css/input.css%22%3E%0A%3Clink%20rel%3D%22stylesheet%22%20charset%3D%22utf-8%22%20href%3D%22http%3A//project.qsc.senorsen.com/zju-csweb/source/colorbox_files/colorbox.css%22%3E%0A");document.body.innerHTML=unescape("%0A%3Cdiv%20id%3D%22nav-top-bar%22%3E%0A%3Cdiv%20id%3D%22nav-top-wrap%22%3E%3Cdiv%20id%3D%22nav-top-content%22%20class%3D%22c-wrap%22%3E%3Cdiv%20id%3D%22top-li-1%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u9996%u9875%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22top-li-2%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u4E0A%u673A%u5B9E%u9A8C%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22top-li-3%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u8BFE%u7A0B%u4F5C%u4E1A%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22top-li-4%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u8BFE%u7A0B%u8D44%u6599%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22top-li-5%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u8BFE%u7A0B%u8BB2%u7A3F%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22top-li-6%22%20class%3D%22li%20switcher%22%3E%3Ca%3E%u5E2E%u52A9%u53CA%u5173%u4E8E%3C/a%3E%3C/div%3E%3C/div%3E%3C/div%3E%0A%3Cdiv%20id%3D%22nav-top-white%22%3E%3Cdiv%20id%3D%22nav-info-layer-a%22%20class%3D%22c-wrap%22%3E%3Cb%20style%3D%22margin-left%3A%2030px%22%3E%u901A%u77E5%uFF1A%3C/b%3E%3Cdiv%20id%3D%22nav-info-layer-b%22%3E%u6682%u65E0%u901A%u77E5-%u52A8%u6001%3C/div%3E%3C/div%3E%3C/div%3E%0A%3C/div%3E%0A%3Cdiv%20id%3D%22container%22%3E%0A%3Cdiv%20class%3D%22c-wrap%22%3E%0A%3Cdiv%20id%3D%22banner%22%3E%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22main%22%20class%3D%22float-wrap%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22left-panel%22%20class%3D%22left%20panel%20fence-layer%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22login-layer%22%20class%3D%22fence%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3E%u7528%u6237%u767B%u5F55%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cform%20id%3D%22frmLogin%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20style%3D%22margin-left%3A20px%22%20border%3D%220%22%3E%3Ctr%3E%3Ctd%20width%3D%2268%22%3E%u7528%u6237%u540D%3C/td%3E%3Ctd%20width%3D%22187%22%3E%3Cinput%20type%3D%22text%22%20id%3D%22txtUsername%22%20name%3D%22txtUser%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3E%u5BC6%u7801%3C/td%3E%3Ctd%3E%3Cinput%20type%3D%22password%22%20id%3D%22txtPassword%22%20name%3D%22txtPwd%22%20onKeyDown%3D%22if%28event%29k%3Devent.keyCode%3Belse%20if%28event.which%29k%3Devent.which%3Bif%28k%3D%3D13%29controller.login%28%29%3B%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3E%3C/td%3E%3Ctd%3E%3Cinput%20type%3D%22button%22%20id%3D%22btnLogin%22%20value%3D%22%u767B%20%u5F55%22%20onclick%3D%22controller.login%28%29%3B%22%3E%3C/table%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/form%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22friendlink%22%20class%3D%22fence%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3E%u5E38%u7528%u94FE%u63A5%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22link-layer%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//zupo.zju.edu.cn%22%20target%3D%22_blank%22%3E%u884C%u653F%u529E%u516C%u7F51%3C/a%3E%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//www.cc98.org%22%20target%3D%22_blank%22%3ECC98%3C/a%3E%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//10.77.30.31%22%20target%3D%22_blank%22%3EC%u5728%u7EBF%u7EC3%u4E60%5B%u5DE5%u79D1%u5E73%u53F0%5D%3C/a%3E%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//10.77.30.35%22%20target%3D%22_blank%22%3EC%u5728%u7EBF%u7EC3%u4E60%5B%u6C42%u662F%u79D1%u5B66%5D%3C/a%3E%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//10.77.30.33%22%20target%3D%22_blank%22%3EJava%u5728%u7EBF%u7EC3%u4E60%3C/a%3E%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22http%3A//www.qsc.zju.edu.cn%22%20title%3D%22http%3A//www.myqsc.com%22%20target%3D%22_blank%22%3E%u6D59%u6C5F%u5927%u5B66%u6C42%u662F%u6F6E%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-switcher-layer%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-index%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22lesson-intro-layer%22%20class%3D%22fence%20float-wrap-small%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3E%u8BFE%u7A0B%u7B80%u4ECB%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22lesson-intro-switcher-layer%22%20class%3D%22fence-layer%20left%20right-vline%22%20style%3D%22width%3A25%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22switcher%20fence%20fence-small%22%3EC%u7A0B%u5E8F%u8BBE%u8BA1%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22switcher%20fence%20fence-small%22%3EVB%u7A0B%u5E8F%u8BBE%u8BA1%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22switcher%20fence%20fence-small%22%3E%u5927%u5B66%u8BA1%u7B97%u673A%u57FA%u7840%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22switcher%20fence%20fence-small%22%3EC++%u7A0B%u5E8F%u8BBE%u8BA1%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22switcher%20fence%20fence-small%22%3EJAVA%u7A0B%u5E8F%u8BBE%u8BA1%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22lesson-intro-txt-layer%22%20class%3D%22fence%20right%22%20style%3D%22width%3A%2073%25%3Btext-indent%3A%202em%3Bfont-size%3A%2014px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22lesson-intro-txt%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%u300AC%u7A0B%u5E8F%u8BBE%u8BA1%u57FA%u7840%u53CA%u5B9E%u9A8C%u300B%u662F%u6211%u6821%u5404%u4E13%u4E1A%u5FC5%u4FEE%u7684%u8BA1%u7B97%u673A%u6280%u672F%u57FA%u7840%u8BFE%u7A0B%u4E4B%u4E00%uFF0C%u901A%u8FC7%u4ECB%u7ECDC%u8BED%u8A00%u53CA%u5176%u7F16%u7A0B%u6280%u672F%uFF0C%u4F7F%u5B66%u751F%u4E86%u89E3%u9AD8%u7EA7%u7A0B%u5E8F%u8BBE%u8BA1%u8BED%u8A00%u7684%u7ED3%u6784%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u7A0B%u5E8F%u8BBE%u8BA1%u8FC7%u7A0B%u548C%u6280%u5DE7%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u5206%u6790%u95EE%u9898%u548C%u5229%u7528%u8BA1%u7B97%u673A%u6C42%u89E3%u95EE%u9898%u7684%u80FD%u529B%uFF0C%u5177%u5907%u521D%u6B65%u7684%u9AD8%u7EA7%u8BED%u8A00%u7A0B%u5E8F%u8BBE%u8BA1%u80FD%u529B%u3002%u6210%u7EE9%u8BC4%u5B9A%uFF1A%u603B%u8BC4%3D%u7B14%u8BD5*50%25+%u5B9E%u9A8C*25%25+%u5E73%u65F6*25%25%u3002%u5408%u683C%u6700%u4F4E%u8981%u6C42%uFF1A%u7B14%u8BD5%u6210%u7EE9%u5FC5%u987B%26ge%3B55%uFF0C%u4E14%u5B9E%u9A8C%u5FC5%u987B%u5408%u683C%u3002%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20%u300AVB%u7A0B%u5E8F%u8BBE%u8BA1%u57FA%u7840%u53CA%u5B9E%u9A8C%u300B%u662F%u6211%u6821%u5404%u4E13%u4E1A%u5FC5%u4FEE%u7684%u8BA1%u7B97%u673A%u6280%u672F%u57FA%u7840%u8BFE%u7A0B%u4E4B%u4E00%uFF0C%u901A%u8FC7%u4ECB%u7ECDC%u8BED%u8A00%u53CA%u5176%u7F16%u7A0B%u6280%u672F%uFF0C%u4F7F%u5B66%u751F%u4E86%u89E3%u9AD8%u7EA7%u7A0B%u5E8F%u8BBE%u8BA1%u8BED%u8A00%u7684%u7ED3%u6784%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u7A0B%u5E8F%u8BBE%u8BA1%u8FC7%u7A0B%u548C%u6280%u5DE7%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u5206%u6790%u95EE%u9898%u548C%u5229%u7528%u8BA1%u7B97%u673A%u6C42%u89E3%u95EE%u9898%u7684%u80FD%u529B%uFF0C%u5177%u5907%u521D%u6B65%u7684%u9AD8%u7EA7%u8BED%u8A00%u7A0B%u5E8F%u8BBE%u8BA1%u80FD%u529B%u3002%u6210%u7EE9%u8BC4%u5B9A%uFF1A%u603B%u8BC4%3D%u7B14%u8BD5*50%25+%u5B9E%u9A8C*25%25+%u5E73%u65F6*25%25%u3002%u5408%u683C%u6700%u4F4E%u8981%u6C42%uFF1A%u7B14%u8BD5%u6210%u7EE9%u5FC5%u987B%26ge%3B55%uFF0C%u4E14%u5B9E%u9A8C%u5FC5%u987B%u5408%u683C%u3002%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%u672C%u8BFE%u7A0B%u662F%u6211%u6821%u7406%u3001%u5DE5%u3001%u519C%u3001%u533B%u3001%u6587%u7B49%u7C7B%u5404%u672C%u79D1%u4E13%u4E1A%u5FC5%u4FEE%u7684%u8BA1%u7B97%u673A%u57FA%u7840%u8BFE%u7A0B%uFF0C%20%u901A%u8FC7%u672C%u8BFE%u7A0B%u7684%u5B66%u4E60%uFF0C%u4F7F%u5B66%u751F%u5BF9%u8BA1%u7B97%u673A%u79D1%u5B66%u9886%u57DF%u6240%u6D89%u53CA%u7684%u77E5%u8BC6%u3001%u53D1%u5C55%u7684%u8D8B%u52BF%u6709%u4E00%u4E2A%u5168%u9762%u7684%u4E86%u89E3%uFF0C%20%u5E76%u80FD%u638C%u63E1%u8BA1%u7B97%u673A%u7684%u57FA%u672C%u64CD%u4F5C%u6280%u80FD%uFF0C%u719F%u6089%u5E38%u89C1%u5E94%u7528%u8F6F%u4EF6%u7684%u4F7F%u7528%uFF0C%u521D%u6B65%u57F9%u517B%u8BA1%u7B97%u673A%u610F%u8BC6%uFF0C%u4EE5%u4FBF%u80FD%u5728%u5F53%20%u4ECA%u8FD9%u4E2A%u4FE1%u606F%u5316%u793E%u4F1A%u4E2D%u66F4%u597D%u5730%u5B66%u4E60%u3001%u751F%u6D3B%u548C%u5DE5%u4F5C%uFF0C%u540C%u65F6%u4E5F%u4E3A%u540E%u7EE7%u8BA1%u7B97%u673A%u53CA%u76F8%u5173%u8BFE%u7A0B%u7684%u5B66%u4E60%u6253%u597D%u57FA%u7840%u3002%20%u5927%u8BA1%u6210%u7EE9%u8BC4%u5B9A%uFF1A%u603B%u8BC4%3D%u7B14%u8BD5*50%25+%u7EFC%u5408%u62A5%u544A*25%25+%u5E73%u65F6*25%25%u3002%u5408%u683C%u6700%u4F4E%u8981%u6C42%uFF1A%u7406%u8BBA%u6210%u7EE9%u5FC5%u987B%26ge%3B55%u3002%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%u300AC++%u7A0B%u5E8F%u8BBE%u8BA1%u57FA%u7840%u53CA%u5B9E%u9A8C%u300B%u662F%u6211%u6821%u5404%u4E13%u4E1A%u5FC5%u4FEE%u7684%u8BA1%u7B97%u673A%u6280%u672F%u57FA%u7840%u8BFE%u7A0B%u4E4B%u4E00%uFF0C%u901A%u8FC7%u4ECB%u7ECDC%u8BED%u8A00%u53CA%u5176%u7F16%u7A0B%u6280%u672F%uFF0C%u4F7F%u5B66%u751F%u4E86%u89E3%u9AD8%u7EA7%u7A0B%u5E8F%u8BBE%u8BA1%u8BED%u8A00%u7684%u7ED3%u6784%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u7A0B%u5E8F%u8BBE%u8BA1%u8FC7%u7A0B%u548C%u6280%u5DE7%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u5206%u6790%u95EE%u9898%u548C%u5229%u7528%u8BA1%u7B97%u673A%u6C42%u89E3%u95EE%u9898%u7684%u80FD%u529B%uFF0C%u5177%u5907%u521D%u6B65%u7684%u9AD8%u7EA7%u8BED%u8A00%u7A0B%u5E8F%u8BBE%u8BA1%u80FD%u529B%u3002%u6210%u7EE9%u8BC4%u5B9A%uFF1A%u603B%u8BC4%3D%u7B14%u8BD5*50%25+%u5B9E%u9A8C*25%25+%u5E73%u65F6*25%25%u3002%u5408%u683C%u6700%u4F4E%u8981%u6C42%uFF1A%u7B14%u8BD5%u6210%u7EE9%u5FC5%u987B%26ge%3B55%uFF0C%u4E14%u5B9E%u9A8C%u5FC5%u987B%u5408%u683C%u3002%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20%u300AJAVA%u7A0B%u5E8F%u8BBE%u8BA1%u57FA%u7840%u53CA%u5B9E%u9A8C%u300B%u662F%u6211%u6821%u5404%u4E13%u4E1A%u5FC5%u4FEE%u7684%u8BA1%u7B97%u673A%u6280%u672F%u57FA%u7840%u8BFE%u7A0B%u4E4B%u4E00%uFF0C%u901A%u8FC7%u4ECB%u7ECDJAVA%u8BED%u8A00%u53CA%u5176%u7F16%u7A0B%u6280%u672F%uFF0C%u4F7F%u5B66%u751F%u4E86%u89E3%u9AD8%u7EA7%u7A0B%u5E8F%u8BBE%u8BA1%u8BED%u8A00%u7684%u7ED3%u6784%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u7A0B%u5E8F%u8BBE%u8BA1%u8FC7%u7A0B%u548C%u6280%u5DE7%uFF0C%u638C%u63E1%u57FA%u672C%u7684%u5206%u6790%u95EE%u9898%u548C%u5229%u7528%u8BA1%u7B97%u673A%u6C42%u89E3%u95EE%u9898%u7684%u80FD%u529B%uFF0C%u5177%u5907%u521D%u6B65%u7684%u9AD8%u7EA7%u8BED%u8A00%u7A0B%u5E8F%u8BBE%u8BA1%u80FD%u529B%u3002%u6210%u7EE9%u8BC4%u5B9A%uFF1A%u603B%u8BC4%3D%u7B14%u8BD5*50%25+%u5B9E%u9A8C*25%25+%u5E73%u65F6*25%25%u3002%u5408%u683C%u6700%u4F4E%u8981%u6C42%uFF1A%u7B14%u8BD5%u6210%u7EE9%u5FC5%u987B%26ge%3B55%uFF0C%u4E14%u5B9E%u9A8C%u5FC5%u987B%u5408%u683C%u3002%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fence%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3E%u4EFB%u52A1%u677F%u5757%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22task-list%22%20class%3D%22%22%20stple%3D%22width%3A95%25%22%3E%3Cdiv%20class%3D%22fence-content%22%3E%u767B%u9646%u540E%u65B9%u53EF%u67E5%u770B%7E%7E%3C/div%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-experiment%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-homework%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-file%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-document%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22rp-about-help%22%20class%3D%22right-panel%20right%20panel%20fence-layer%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fence%22%3E%3Ch1%3E%u5173%u4E8E%3C/h1%3E%3Cdiv%20class%3D%22fence-content%22%3E%u6C42%u662F%u6F6E%u6280%u672F%u7814%u53D1%u4E2D%u5FC3%20%u5DE5%u7A0B%u5E08%u56E2%u961F%20%u5F20%u68EE%uFF08%u5B9E%u4E60%uFF09%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%u6B64%u4E3A%u672C%u4EBA%u5728%u6C42%u662F%u6F6E%u7684%u56FD%u5E86%u5047%u671F%uFF082013.10%uFF09%u524D%u7AEF%u4F5C%u4E1A%u3002%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Update%3A%202014-04-16%uFF0C%u65E9%u5DF2%u4E0D%u662F%u5B9E%u4E60%u6210%u5458%u5566%uFF0C%u6DFB%u52A0%u4E86%u4E0A%u4F20%u3001%u9996%u9875%u7F16%u7801%u4FEE%u590D%u7B49%u529F%u80FD%u3002%3Cbr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%u89C1%uFF1A%3Ca%20href%3D%22https%3A//github.com/Senorsen/zju-csweb%22%20target%3D%22_blank%22%3EGitHub%u4E0A%u7684repo%3C/a%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%3Ca%20href%3D%22http%3A//userscripts.org/scripts/show/178811%22%20target%3D%22_blank%22%3E%u6CB9%u7334%u94FE%u63A5%3C/a%3E%3Cbr%3E%3Cbr%3E%3Cimg%20src%3D%22https%3A//sgz.senorsen.com/senprj/genpic/Senorsen-qscbbs.jpg%22%3E%3C/div%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fence%22%3E%0A%20%20%20%20%20%20%20%20%3Ch1%3E%u4F7F%u7528%u5E2E%u52A9%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fence-content%22%3Eblablabla%u8FD8%u6728%u6709%u4EC0%u4E48%u5185%u5BB9%u5462%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%3C/div%3E%0A%3C/div%3E%0A");logme('Finished.');

/** LazyLoad https://github.com/rgrove/lazyload **/
LazyLoad=(function(doc){var env,head,pending={},pollCount=0,queue={css:[],js:[]},styleSheets=doc.styleSheets;function createNode(name,attrs){var node=doc.createElement(name),attr;for(attr in attrs){if(attrs.hasOwnProperty(attr)){node.setAttribute(attr,attrs[attr])}}return node}function finish(type){var p=pending[type],callback,urls;if(p){callback=p.callback;urls=p.urls;urls.shift();pollCount=0;if(!urls.length){callback&&callback.call(p.context,p.obj);pending[type]=null;queue[type].length&&load(type)}}}function getEnv(){var ua=navigator.userAgent;env={async:doc.createElement('script').async===true};(env.webkit=/AppleWebKit\//.test(ua))||(env.ie=/MSIE|Trident/.test(ua))||(env.opera=/Opera/.test(ua))||(env.gecko=/Gecko\//.test(ua))||(env.unknown=true)}function load(type,urls,callback,obj,context){var _finish=function(){finish(type)},isCSS=type==='css',nodes=[],i,len,node,p,pendingUrls,url;env||getEnv();if(urls){urls=typeof urls==='string'?[urls]:urls.concat();if(isCSS||env.async||env.gecko||env.opera){queue[type].push({urls:urls,callback:callback,obj:obj,context:context})}else{for(i=0,len=urls.length;i<len;++i){queue[type].push({urls:[urls[i]],callback:i===len-1?callback:null,obj:obj,context:context})}}}if(pending[type]||!(p=pending[type]=queue[type].shift())){return}head||(head=doc.head||doc.getElementsByTagName('head')[0]);pendingUrls=p.urls.concat();for(i=0,len=pendingUrls.length;i<len;++i){url=pendingUrls[i];if(isCSS){node=env.gecko?createNode('style'):createNode('link',{href:url,rel:'stylesheet'})}else{node=createNode('script',{src:url});node.async=false}node.className='lazyload';node.setAttribute('charset','utf-8');if(env.ie&&!isCSS&&'onreadystatechange'in node&&!('draggable'in node)){node.onreadystatechange=function(){if(/loaded|complete/.test(node.readyState)){node.onreadystatechange=null;_finish()}}}else if(isCSS&&(env.gecko||env.webkit)){if(env.webkit){p.urls[i]=node.href;pollWebKit()}else{node.innerHTML='@import "'+url+'";';pollGecko(node)}}else{node.onload=node.onerror=_finish}nodes.push(node)}for(i=0,len=nodes.length;i<len;++i){head.appendChild(nodes[i])}}function pollGecko(node){var hasRules;try{hasRules=!!node.sheet.cssRules}catch(ex){pollCount+=1;if(pollCount<200){setTimeout(function(){pollGecko(node)},50)}else{hasRules&&finish('css')}return}finish('css')}function pollWebKit(){var css=pending.css,i;if(css){i=styleSheets.length;while(--i>=0){if(styleSheets[i].href===css.urls[0]){finish('css');break}}pollCount+=1;if(css){if(pollCount<200){setTimeout(pollWebKit,50)}else{finish('css')}}}}return{css:function(urls,callback,obj,context){load('css',urls,callback,obj,context)},js:function(urls,callback,obj,context){load('js',urls,callback,obj,context)}}})(this.document);var js_path=['http://project.qsc.senorsen.com/zju-csweb/source/script/jquery.js','http://project.qsc.senorsen.com/zju-csweb/source/script/jquery-migrate.js','http://project.qsc.senorsen.com/zju-csweb/source/script/jquery.colorbox-min.js','http://project.qsc.senorsen.com/zju-csweb/source/script/model.js','http://project.qsc.senorsen.com/zju-csweb/source/script/view.js','http://project.qsc.senorsen.com/zju-csweb/source/script/function.js',];LazyLoad.js(js_path, function() {if(0)if(init)init()},{'charset': 'utf-8'});
