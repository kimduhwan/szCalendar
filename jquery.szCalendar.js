/**!
 * jquery szCalendar plugin v1.0.0
 * Author : Kim duhwan (netphantom@hanmail.net)
 * Demo: http://bytestream.kr
 * Sources: https://github.com
 * Released under the MIT license

 * External components:
 *  - jquery-ui.css ( http://code.jquery.com/ui/1.10.3/themes/smoothness/)
 *  - jQuery (http://www.jquery.com)
 *  - jquery.browser.js (https://github.com/gabceb/jquery-browser-plugin)
 *  - jquery-ui.js (http://code.jquery.com/ui/1.10.3/)
 *  - jquery.easing.1.3.js (http://gsgd.co.uk/sandbox/jquery/easing/)
 *  - szExtStartPosition.js
 */
;(function($){
	var uniqIdx = 0;
	jQuery.fn.szCalendar = function(settings){
		return this.each(function(){
			var cfg = {
				useShowButton:true,
				showButtonImg:"img/szCalendar/calendar.gif", 
				cellWidth:30, 
				cellHeight:20, 
				separator:"-", 
				dayName:"eng", 
				pastYearMax:50, 
				futureYearMax:50, 
				
				
				fontFamily:"Times New Roman", 
				fontSize:11, 
				readOnly:true, 
				
				useOpenFadeIn:true,
				closeEffect:"drop",  
				

				
				prevTextIcon:" < ",  
				nextTextIcon:" > ",  
				useImgIcon:false,   
				prevImgIcon:"img/szCalendar/icon_prev_@skin@.gif", 
				nextImgIcon:"img/szCalendar/icon_next_@skin@.gif", 


				prevNextTextSize:"14px", 

				useBackgroundImage:true, 
				backgroundUrl:"img/szCalendar/white_icon_s3020.png", 

				useCellPosEffect:true,  
				cellStartPosition:"vOffsetPosition", 
				useRndCellStartPosition:true,   
				
				
				useRndCloseEffect:true, 

				otherTargets:[], 
				unableDaysOfWeek:[], 
				unableDates:[], 

				

				skin:"gray", 
				containerBorderColor:"#777", 
				tableBgColor:"#eeeeee", 
				topBgColor:"#eeeeee",   
				topFgColor:"black",     
				selectBoxColor:"#ffffff", 
				daynameBgColor:"#dddddd", 
				daynameFgColor:"black",  
				dateBgColor:"#ffffff",  
				todayBgColor:"red",     
				todayFgColor:"white",   
				borderColor:"#dddddd",  
				sundayColor:"#ff0000",  
				weekdayColor:"#000000", 
				saturdayColor:"#0000ff" 

				

			};


			var dayNameObj = {
				kor:["일","월","화","수","목","금","토"],
				eng:["S","M","T","W","T","F","S"],
				han:["日","月","火","水","木","金","土"]
			};

			var longDayNameObj = {
				kor:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
				eng:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
				han:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]

			};
			






			
			var skinObj={
				sky:{"containerBorderColor":"#eeeeee","tableBgColor":"#d7e6fa","topBgColor":"#d7e6fa","topFgColor":"black","selectBoxColor":"#e3eefd","daynameBgColor":"#bfdbff","daynameFgColor":"black","dateBgColor":"#f0f6fd","todayBgColor":"red","todayFgColor":"white","borderColor":"#bfdbff","sundayColor":"#ff0000","weekdayColor":"#000000","saturdayColor":"#0000ff"},
				gray:{"containerBorderColor":"#777","tableBgColor":"#eeeeee","topBgColor":"#eeeeee","topFgColor":"black","selectBoxColor":"#ffffff","daynameBgColor":"#dddddd","daynameFgColor":"black","dateBgColor":"#ffffff","todayBgColor":"red","todayFgColor":"white","borderColor":"#dddddd","sundayColor":"#ff0000","weekdayColor":"#000000","saturdayColor":"#0000ff"},
				brown:{"containerBorderColor":"#fb955e","tableBgColor":"#fb955e","topBgColor":"#fb955e","topFgColor":"white","selectBoxColor":"#feccb1","daynameBgColor":"#ea5507","daynameFgColor":"white","dateBgColor":"#feccb1","todayBgColor":"red","todayFgColor":"white","borderColor":"#ea5507","sundayColor":"#000000","weekdayColor":"#000000","saturdayColor":"#0000ff"},
				teal:{"containerBorderColor":"#13b0a6","tableBgColor":"#13b0a6","topBgColor":"#13b0a6","topFgColor":"white","selectBoxColor":"#a4efea","daynameBgColor":"#4cd6cd","daynameFgColor":"black","dateBgColor":"#a4efea","todayBgColor":"#13b0a6","todayFgColor":"white","borderColor":"#bfdbff","sundayColor":"#ff0000","weekdayColor":"#000000","saturdayColor":"#0000ff"},
				purple:{"containerBorderColor":"#f28fec","tableBgColor":"#f28fec","topBgColor":"#f28fec","topFgColor":"black","selectBoxColor":"#f4c7f1","daynameBgColor":"#f45deb","daynameFgColor":"white","dateBgColor":"#f4c7f1","todayBgColor":"red","todayFgColor":"white","borderColor":"#f45deb","sundayColor":"#ff0000","weekdayColor":"#000000","saturdayColor":"#0000ff"}
			};

			

			if(settings){
				$.extend(cfg,settings);
			}
			
			var thisObj = $(this);



			var startPosNames = ["leftTop","rightTop","leftBottom","rightBottom","leftSideBySide","rightSideBySide","topSideBySide","bottomSideBySide","destPosition","randomPosition","hOffsetPosition","vOffsetPosition","revSlashPosition","slashPosition"];
			



			var closeEffectObj = ["puff", "explode", "clip", "fade", "drop", "bounce", "blind", "fold", "scale"];
			

			var showButtonPrefix = "szCalendarShowButton_";
			var showButtonId = showButtonPrefix + uniqIdx;
			


			var containerPreFix = "szCalendarContainer_";
			var containerId = containerPreFix + uniqIdx;
			var containerObj = $("#" + containerId);
			


			var cfgObj = new Object();
			
			var cfgData = thisObj.data("cfg");
			

			var cfgDataBasic = "skin separator useShowButton showButtonImg cellWidth cellHeight separator dayName pastYearMax futureYearMax fontFamily fontSize readOnly useOpenFadeIn closeEffect prevTextIcon nextTextIcon useImgIcon prevImgIcon nextImgIcon prevNextTextSize useBackgroundImage backgroundUrl useCellPosEffect cellStartPosition useRndCellStartPosition useRndCloseEffect otherTargets unableDaysOfWeek unableDates";
			cfgDataBasic = cfgDataBasic.split(" ");
			

			
			for(i=0;i<cfgDataBasic.length;i++){
				cfgObj[cfgDataBasic[i]]=cfg[cfgDataBasic[i]];
			}
			

			cfgObj["prevImgIcon"]=cfgObj["prevImgIcon"].replace(/@skin@/,cfgObj["skin"]);
			cfgObj["nextImgIcon"]=cfgObj["nextImgIcon"].replace(/@skin@/,cfgObj["skin"]);
			
			

			if(cfgData!=undefined){
				for(i=0;i<cfgDataBasic.length;i++){
					if(cfgData[cfgDataBasic[i]]!=undefined){cfgObj[cfgDataBasic[i]]=cfgData[cfgDataBasic[i]];}
				}
			}

			

			
			var cfgDataColor = "containerBorderColor tableBgColor borderColor topBgColor topFgColor dateBgColor sundayColor saturdayColor weekdayColor todayBgColor todayFgColor selectBoxColor daynameBgColor daynameFgColor";
			cfgDataColor = cfgDataColor.split(" ");
			

			for(i=0;i<cfgDataColor.length;i++){
				cfgObj[cfgDataColor[i]]=skinObj[cfgObj["skin"]][cfgDataColor[i]];
			}
			
			if(cfgData!=undefined){
				for(i=0;i<cfgDataColor.length;i++){
					if(cfgData[cfgDataColor[i]]!=undefined){cfgObj[cfgDataColor[i]]=cfgData[cfgDataColor[i]];}
				}
			}



			var tableWidth = cfgObj["cellWidth"]*7; 
			var containerWidth = tableWidth + 2; 
			var layerHeight = cfgObj["cellHeight"] - 2; 
			var layerWidth = cfgObj["cellWidth"] - 2; 

			var dateCellPaddingTop = (layerHeight - cfgObj["fontSize"])/2;  





			var showButtonHtml = "";
			if(cfgObj["useShowButton"]){
				showButtonHtml = " <img src='"+ cfgObj["showButtonImg"] +"' align='absmiddle' width='16' height='16'  id='"+ showButtonId +"'> ";
				thisObj.after(showButtonHtml);
			}

			var showButton = $("#" + showButtonId);
			

			if(cfgObj["readOnly"]){
				$(this).attr("readonly","true");
			}

			

			var sDate=new Date();
			var sYear=sDate.getFullYear();	
			var firstYear = sYear - cfgObj["pastYearMax"]; 
			var lastYear = sYear + cfgObj["futureYearMax"]; 

			var now = new Date();
			var todayConfig = {"year":now.getFullYear(),"month":now.getMonth()+1,"date":now.getDate()};
			

			var cur_year = todayConfig.year;
			var cur_month = todayConfig.month;

			var m2len=(new Date(todayConfig.year,2,0)).getDate(); 
			var monlen = [31,m2len,31,30,31,30,31,31,30,31,30,31];


			var calendar_html;

			var posX = thisObj.offset().left + thisObj.width();
			var posY = thisObj.offset().top;


			makeCalendarHtml();



			if(cfgObj["useShowButton"]){
				showButton.on("click",function(e){
					displayCalendar(true);
				});
			}

			thisObj.on("focus",function(e){
				displayCalendar(true);
			});


			var nextYearSelector = "#" + containerId + " .span_szCalendar_nextYear";
			var prevYearSelector = "#" + containerId + " .span_szCalendar_prevYear";
			var yearSelectBoxSelector = "#" + containerId + " .select_szCalendar_year";
			var monthSelectBoxSelector = "#" + containerId + " .select_szCalendar_month";
			var prevMonthSelector = "#" + containerId + " .span_szCalendar_prevMonth";
			var nextMonthSelector = "#" + containerId + " .span_szCalendar_nextMonth"; 
			var dateTdSelector = "#" + containerId + " .table_szCalendar tbody tr td";
			var hideTdSelector = "#" + containerId + " .td_szCalendar_hide";
			

			var cellCount;


			function displayCalendar(ani_flag){
			
				
				containerObj.remove();
				
				containerObj = $("<div>",
						{
							id:containerId,
							css:{"position":"absolute","display":"none","border":cfgObj["containerBorderColor"] + " 1px solid"}
						}
				).appendTo("body");

				var curStartPosName = cfgObj["cellStartPosition"];
				if(cfgObj["useRndCellStartPosition"]){
					curStartPosName = startPosNames[parseInt(Math.random()*(startPosNames.length),10)];
				}


			
				containerObj.html(calendar_html.join(""));



				


				
				containerObj.addClass("ui-corner-all");
				
				containerObj.find("*").css({"font-family":cfgObj["fontFamily"],"font-size":cfgObj["fontSize"],"text-align":"center"});
				containerObj.find(".table_szCalendar").css({"border-collapse":"collapse","background-color":cfgObj["tableBgColor"],"border":cfgObj["borderColor"] + " 1px solid"});
				containerObj.find(".table_szCalendar td").css({"height":cfgObj["cellHeight"]});
				containerObj.find(".span_szCalendar_prevYear,.span_szCalendar_nextYear,.span_szCalendar_prevMonth,.span_szCalendar_nextMonth").css({"cursor":"pointer","font-size":cfgObj["prevNextTextSize"]});

				containerObj.find(".td_szCalendar_top").css({"background-color":cfgObj["topBgColor"],"color":cfgObj["topFgColor"]});
				containerObj.find(".td_szCalendar_hide").css({"background-color":cfgObj["topBgColor"],"color":"red","cursor":"pointer"});
				containerObj.find(".select_szCalendar_year,.select_szCalendar_month").css({"background-color":cfgObj["selectBoxColor"]});
				
				containerObj.find(".tr_szCalendar_dayName td").css({"width":cfgObj["cellWidth"],"background-color":cfgObj["daynameBgColor"],"color":cfgObj["daynameFgColor"]});
							
				containerObj.find(".tr_szCalendar_date td div").addClass("ui-corner-all");
				
				if($.browser.msie){
					containerObj.find(".tr_szCalendar_date td div").css({"position":"relative","width":layerWidth,"height":layerHeight,"padding-top":dateCellPaddingTop});
				}else{
					containerObj.find(".tr_szCalendar_date td div").css({"position":"relative","width":layerWidth,"height":layerHeight,"display":"table-cell","vertical-align":"middle"});
				}
				
				containerObj.find(".div_szCalendar_sun").css({"background-color":cfgObj["dateBgColor"],"color":cfgObj["sundayColor"]});
				containerObj.find(".div_szCalendar_sat").css({"background-color":cfgObj["dateBgColor"],"color":cfgObj["saturdayColor"]});
				containerObj.find(".div_szCalendar_week").css({"background-color":cfgObj["dateBgColor"],"color":cfgObj["weekdayColor"]});
				containerObj.find(".div_szCalendar_today").css({"background-color":cfgObj["todayBgColor"],"color":cfgObj["todayFgColor"]});	


				var rows = containerObj.find(".tr_szCalendar_date").length;
				var cols = 7;
				
				if(cfgObj["useCellPosEffect"]){
					
					containerObj.find(".tr_szCalendar_date td div").each(function(idx,item){

						var tmprow = parseInt(idx/cols,10);
						var tmpcol = parseInt(idx%cols,10);
						
						var iniPosObj;


						iniPosObj = $.szExtRelStartPosition[curStartPosName](rows, cols, cfgObj["cellWidth"], cfgObj["cellHeight"], tmprow, tmpcol, 2);
						

						$(this).css({"left":iniPosObj.left,"top":iniPosObj.top,"opacity":0,"width":layerWidth,"height":layerHeight});
				
					});
				}
				

				if(cfgObj["useBackgroundImage"]){
					containerObj.find(".tr_szCalendar_date td div").css({"background-image":"url(" + cfgObj["backgroundUrl"] + ")"});
				}

				
				containerObj.find(".table_szCalendar td").each(function(idx,item){
					var reg_expr = /^[0-9]{1,2}$/;
					var cur_day = $(this).text();	
					if(reg_expr.test(cur_day)){
						$(this).css("cursor","pointer");
					}
				});

				
				if(cfgObj["useOpenFadeIn"]){ 
						
						if(ani_flag){
							containerObj.css({"left":posX,"top":posY}).stop(true).fadeIn(2000);
						}else{
							containerObj.css({"left":posX,"top":posY}).show();
						}			
				}else{
					containerObj.css({"left":posX,"top":posY}).show();
				}


				
					
					
				var acc = 0;

				cellCount = rows*cols;

				var barTimer;
				
				function cellEffect(acc){
					
					if(acc < cellCount){
						containerObj.find(".tr_szCalendar_date td div:eq("+ acc +")").animate({"left":0,"top":0,"opacity":1,"width":layerWidth,"height":layerHeight},"slow","easeInQuad");
						

						barTimer = setTimeout(function(){
							acc++;
							cellEffect(acc);
						},20);

					}else{
						clearTimeout(barTimer);

					}
				}



				if(cfgObj["useCellPosEffect"]){
					cellEffect(acc);
				}
					


			}

			var ani_pm; 
			var ani_pm2; 

			var cellRndPosX;
			var cellRndPosY;

			$(document).on("click",dateTdSelector,function(e){
				
				thisObj.find(".tfoot_szCalendar").empty();

				var reg_expr = /^[0-9]{1,2}$/;
				var cur_day = $(e.target).text();
				
				if(reg_expr.test(cur_day)){
				
					cur_day_disp = getZeroFillNumber(cur_day);
					cur_month_disp = getZeroFillNumber(cur_month);
					

					var dayofweekDT = new Date(cur_year,cur_month-1,cur_day);
					var cur_dayofweek = dayofweekDT.getDay();
					
					
					var unable = false;
					var unableDay = -1;
					for(var i=0;i<cfgObj["unableDaysOfWeek"].length;i++){
						if(cfgObj["unableDaysOfWeek"][i]==cur_dayofweek){
							unable = true;
							unableDay = cur_dayofweek;
							break;
						}
					}

					if(unable){
						containerObj.find(".tfoot_szCalendar td").text(longDayNameObj[cfgObj["dayName"]][unableDay] + " : not selectable");
						
						return;
					}

					var tmpymd = [cur_year,cur_month_disp,cur_day_disp];
					
					var ymd = tmpymd.join(cfgObj["separator"]);
		
					for(var i=0;i<cfgObj["unableDates"].length;i++){
						if(cfgObj["unableDates"][i]==ymd){
							unable = true;
							unableDate = ymd;
							break;
						}
					}		

					if(unable){
						containerObj.find(".tfoot_szCalendar td").text(unableDate + " : not selectable");
						return;
					}

					thisObj.val(ymd);
					
			

					for(var i=0;i<cfgObj["otherTargets"].length;i++){
						$(cfgObj["otherTargets"][i]).val(ymd);
					}


					hideCalendar();

				
				}
				
			});

		
			function hideCalendar(){

					if(cfgObj["useCellPosEffect"]){
						for(i=0;i<cellCount;i++){
							ani_pm = (parseInt(Math.random()*2,10)==0)?1:-1;
							ani_pm2 = (parseInt(Math.random()*2,10)==0)?1:-1;

							cellRndPosX = parseInt(Math.random()*50,10)*ani_pm;
							cellRndPosY = parseInt(Math.random()*50,10)*ani_pm2;

							
							containerObj.find(".tr_szCalendar_date td div:eq("+ i +")").animate({"left":cellRndPosX,"top":cellRndPosY,"opacity":0,"width":layerWidth,"height":layerHeight},300,"easeInQuad");
		
						}

					}
					

					

					if(cfgObj["closeEffect"]!="none"){

						if(cfgObj["useRndCloseEffect"]){
							cfgObj["closeEffect"] = closeEffectObj[parseInt(Math.random()*10,10)];
							
						}

						var option={};

						if(cfgObj["closeEffect"]=="scale"){
							option = {percent:0};
						}
						


						if(cfgObj["closeEffect"]!="scale"){
							containerObj.effect(cfgObj["closeEffect"], option, 800,function(){containerObj.fadeOut();} );
						}else{
							containerObj.effect(cfgObj["closeEffect"], option, 800,function(){containerObj.hide();});
						}

					}else{
						containerObj.hide();
					}
			}
		


			$(document).on("click",hideTdSelector,function(e){
				hideCalendar();
			});

			
			
			$(document).on("change",monthSelectBoxSelector,function(e){
				var selCalMonthVal = $(this).val();
				cur_month = selCalMonthVal;
				makeCalendarAndDisplay(false);
				
			});

			
			$(document).on("change",yearSelectBoxSelector,function(e){
				var selCalYearVal = $(this).val();
				cur_year = selCalYearVal;
				makeCalendarAndDisplay(false);
			});	
			
			
			$(document).on("click",prevYearSelector,function(e){
				cur_year--;
				makeCalendarAndDisplay(false);
			});

			
			$(document).on("click",nextYearSelector,function(e){
				cur_year++;
				makeCalendarAndDisplay(false);
			});

			
			
			$(document).on("click",prevMonthSelector,function(e){
				
				

				if(cur_month==1){
					cur_year--;
					cur_month = 12;
				}else{
					cur_month--;
				}

				
				makeCalendarAndDisplay(false);
			});

			
			$(document).on("click",nextMonthSelector,function(e){
				
				if(cur_month==12){
					cur_year++;
					cur_month = 1;
				}else{
					cur_month++;
				}

				
				makeCalendarAndDisplay(false);
			});

			function makeCalendarAndDisplay(ani_flag){
				makeCalendarHtml();
				displayCalendar(ani_flag);		
			}


			
			function makeCalendarHtml(){
				calendar_html = [];
				var aIdx = 0;

				calendar_html[aIdx++]="<table class='table_szCalendar'  width='"+ tableWidth +"px'>";
				calendar_html[aIdx++]="<thead>";
				calendar_html[aIdx++]="<tr><td colspan='6' class='td_szCalendar_top'>";

				
				if(cfgObj["useImgIcon"]){
					calendar_html[aIdx++]=" <span class='span_szCalendar_prevYear'><img src='"+ cfgObj["prevImgIcon"] +"'></span> ";
				}else{
					calendar_html[aIdx++]=" <span class='span_szCalendar_prevYear'> "+ cfgObj["prevTextIcon"] +" </span> ";
				}
				calendar_html[aIdx++]="<select class='select_szCalendar_year'>";


				for(i=firstYear;i<=lastYear;i++){
					if(i!=cur_year){
						calendar_html[aIdx++]="<option value='"+ i +"'>"+ i +"</option>";
					}else{
						calendar_html[aIdx++]="<option value='"+ i +"' selected>"+ i +"</option>";
					}
				}
				calendar_html[aIdx++]="</select>";
				if(cfgObj["useImgIcon"]){
					calendar_html[aIdx++]=" <span class='span_szCalendar_nextYear'><img src='"+ cfgObj["nextImgIcon"] +"'></span> ";
				}else{
					calendar_html[aIdx++]=" <span class='span_szCalendar_nextYear'> "+ cfgObj["nextTextIcon"] +" </span> ";
				}
				calendar_html[aIdx++]="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";



				
				if(cfgObj["useImgIcon"]){
					calendar_html[aIdx++]=" <span class='span_szCalendar_prevMonth'><img src='"+ cfgObj["prevImgIcon"] +"'></span> ";
				}else{
					calendar_html[aIdx++]=" <span class='span_szCalendar_prevMonth'> "+ cfgObj["prevTextIcon"] +" </span> ";
				}
				
				calendar_html[aIdx++]="<select class='select_szCalendar_month'>";
				for(i=1;i<=12;i++){
					if(i!=cur_month){
						calendar_html[aIdx++]="<option value='"+ i +"'>"+ i +"</option>";	
					}else{
						calendar_html[aIdx++]="<option value='"+ i +"' selected>"+ i +"</option>";	
					}
				}
				calendar_html[aIdx++]="</select>";

				if(cfgObj["useImgIcon"]){
					calendar_html[aIdx++]=" <span class='span_szCalendar_nextMonth'><img src='"+ cfgObj["nextImgIcon"] +"'></span> ";
				}else{
					calendar_html[aIdx++]=" <span class='span_szCalendar_nextMonth'> "+ cfgObj["nextTextIcon"] +" </span> ";
				}
				

				
				calendar_html[aIdx++]="</td><td class='td_szCalendar_hide'>X</td>";
				calendar_html[aIdx++]="</tr>";

				
				
				calendar_html[aIdx++]="<tr class='tr_szCalendar_dayName'>";
				for(i=0;i<7;i++){
					calendar_html[aIdx++]="<td>"+ dayNameObj[cfgObj["dayName"]][i] +"</td>";
				}
				calendar_html[aIdx++]="</tr>";

				calendar_html[aIdx++]="</thead>";

				var k=0;
				var dayVal=1;
				var exitFlag=false;
				var tmpClass="";

				calendar_html[aIdx++]="<tbody>";


				
				for(i=0;i<6;i++){
				

					if(exitFlag==true){
						break;
					} 
					calendar_html[aIdx++]="<tr class='tr_szCalendar_date'>";
					for(j=0;j<7;j++){
						
						if(j==0){
							tmpClass="div_szCalendar_sun";
						}else{
							if(j==6){
								tmpClass="div_szCalendar_sat";
							}else{
								tmpClass="div_szCalendar_week";
							}
						}

						if(k < getFirstDay()){
							calendar_html[aIdx++]="<td><div class='"+ tmpClass +"'>&nbsp;</div></td>";  
						}else{
							if(dayVal <= monlen[cur_month-1]){
								

								if(todayConfig.year==cur_year && todayConfig.month==cur_month && todayConfig.date==dayVal){
								
									calendar_html[aIdx++]="<td><div class='div_szCalendar_today'>"+ dayVal +"</div></td>";
								}else{
									calendar_html[aIdx++]="<td><div class='"+ tmpClass +"'>"+ dayVal +"</div></td>";
								}

								if(dayVal==monlen[cur_month-1]){
									exitFlag=true;
								}
							}else{
								calendar_html[aIdx++]="<td><div class='"+ tmpClass +"'>&nbsp;</div></td>";
							}


							dayVal++;
						}
						k++;
					}
					calendar_html[aIdx++]="</tr>";
				}


				calendar_html[aIdx++]="</tbody>";
				calendar_html[aIdx++]="<tfoot class='tfoot_szCalendar'><tr><td colspan='7'>&nbsp;</td></tr></tfoot>";
				

				calendar_html[aIdx++]="</table>";	

			}
			

			function getFirstDay(){
				var firstDate = new Date(cur_year, cur_month - 1, 1);
				firstDay = firstDate.getDay(); 
				return firstDay;
			}

			function getZeroFillNumber(p){
				var rtn=p;
				p = p + "";
				if(p.length < 2){
					rtn = "0" + p + "";
				}
				return rtn;
			}
			function getZeroRemoveNumber(p){
				var rtn=p;
				if(p.length=="2"){
					if(p.substr(0,1)=="0"){
						rtn = p.substr(1,1);
					}
				}
				return rtn;
			}
			
			uniqIdx++;
		});

		
	}
})(jQuery);