//模拟数据
var mockData = [
		{
			"SessionIndex" : 1,
			"Actions" : ['O', 'KS', 'IV', 'IV', 'C', 'RV', 'IV', 'O', 'CS', 'CS', 'CS', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'O', 'SI', 'SI', 'C', 'C'],
			"TruePurchaseLabel" : "NP",
			"PurchasePrediction" : ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI','NI', 'NI', 'I', 'I', 'NI', 'I', 'NI', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I'],
			"PurchaseProbability" : [0.9798, 0.9974, 0.9440, 0.9089, 0.9683, 0.8913, 0.94196, 0.8532, 0.7913, 0.7147, 0.5814, 0.5913, 0.6101, 0.6281, 0.5470, 0.5612, 0.6921, 0.7862, 0.8316, 0.8931, 0.8308, 0.8024, 0.7841, 0.8993]
		},
		{
			"SessionIndex" : 2,
			"Actions" : ['O', 'KS', 'KS', 'KS', 'KS', 'IV', 'KS', 'C', 'KS', 'C', 'C', 'C', 'KS', 'KS', 'C', 'C', 'KS', 'O', 'KS', 'C', 'C', 'KS', 'C'],
			"TruePurchaseLabel" : "NP",
			"PurchasePrediction" : ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I'],
			"PurchaseProbability" : [0.8780, 0.8469, 0.9016, 0.8106, 0.8315, 0.7925, 0.6926, 0.5241, 0.5391, 0.7041, 0.7466, 0.7931, 0.7699, 0.8024, 0.8145, 0.8931, 0.8531, 0.8742, 0.8517, 0.7976, 0.8026, 0.8578, 0.8241]
		},
		{
			"SessionIndex" : 3,
			"Actions" : ['O', 'O', 'O', 'KS', 'IV', 'C', 'C', 'C', 'C', 'AB', 'VB', 'AB', 'VB', 'C', 'AB', 'VB', 'O', 'O', 'O', 'OV'],
			"TruePurchaseLabel" : "P",
			"PurchasePrediction" : ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'NI', 'NI', 'I', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI'],
			"PurchaseProbability" : [0.9791, 0.9818, 0.8510, 0.8866, 0.7701, 0.6842, 0.6310, 0.5914, 0.6197, 0.5325, 0.6424, 0.7510, 0.6240, 0.6425, 0.8964, 0.821, 0.7362, 0.7531, 0.7196, 0.7931]
		},
		{
			"SessionIndex" : 4,
			"Actions" : ['O', 'KS', 'IV', 'SI', 'O', 'O', 'SC', 'SI', 'RV', 'AB', 'IV', 'SI', 'O', 'RV', 'AB', 'O', 'OV', 'CMT', 'IV', 'SI'],
			"TruePurchaseLabel" : "NP",
			"PurchasePrediction" : ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'I', 'NI', 'I', 'I', 'NI', 'I', 'I'],
			"PurchaseProbability" : [0.9024, 0.9277, 0.8902, 0.8804, 0.7136, 0.6491, 0.5596, 0.5430, 0.5766, 0.8215, 0.7563, 0.7025, 0.5012, 0.6104, 0.8923, 0.7204, 0.6046, 0.7924, 0.5902, 0.5632]
		},
		{
			"SessionIndex" : 5,
			"Actions" : ['O', 'SI', 'IV', 'C', 'C', 'RV', 'C', 'SI', 'O', 'SI', 'SI', 'SI', 'IV', 'C', 'O', 'IV', 'O', 'SI', 'O', 'SI', 'O', 'SC', 'IV'],
			"TruePurchaseLabel" : "NP",
			"PurchasePrediction" : ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI','I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I'],
			"PurchaseProbability" : [0.9798, 0.9852, 0.9420, 0.9294, 0.9242, 0.9191, 0.7490, 0.5421, 0.5012, 0.5451, 0.6193, 0.6913, 0.6434, 0.7152, 0.6805, 0.6423, 0.7491, 0.7925, 0.7925, 0.8043, 0.7925, 0.7925, 0.7165]
		}
	];

var actionName = {
		"KS":"Keyword Search",
		"CS":"Category Seach",
		"IV":"Item View",
		"RV":"Repeated View",
		"OV":"Order History View",
		"C":"Compare Price/Products",
		"CHAT":"Chat / Inquiring",
		"AB":"Add to Basket",
		"VB":"View Basket",
		"SC":"Search Coupons",
		"SI":"Search Sales Information",
		"SS":"Search Specific Discount",
		"CMT":"Write Comments",
		"O":"Other Actions"
	}

/**
 * 小数转化为百分数 (四舍五入保留两位小数)
 * 
 * @param point
 * @returns
 */
function toPercent(point) {
	var str = Number(point * 100).toFixed(2);
	str += "%";
	return str;
}

function showCurrentActionImage(name){
	if("NI"==name){
		$("#currentActionImage").attr("src","../image/predict-NI.png");
		$("#currentActionPrediction").css("color","#d13959");
	}else{
		$("#currentActionImage").attr("src","../image/predict-I.png");
		$("#currentActionPrediction").css("color","#2ca02c");
	}
	
}

function showData(currentSessionIndex, totalSessionCount,currenActionIndex,currentAction, currentPurchasePrediction, currentPurchaseProbability) {
	var process= toPercent((currentSessionIndex+1)/totalSessionCount);
	$("#process").attr("style","width: "+process+";");
	
	$("#CurrentSessionCount").html(currentSessionIndex+1);
	$("#totalSessionCount").html(totalSessionCount);
//	showCurrentActionImage(currentPurchasePrediction);
//	$("#currentActionName").html(actionName[currentAction[currenActionIndex]]);
//	$("#currentActionPrediction").html(currentPurchaseProbability);
}

function showActionsHistory(currenActionIndex,data){
	var actionsHistoryimgList = $("[id^='actionsimg']");
	var actionsHistoryNumList = $("[id^='actionsNum']");
	var actionsHistoryinfoList = $("[id^='actionsinfo']");
	if(currenActionIndex==0){
		for(var i=0;i<actionsHistoryimgList.length;i++){
			$(actionsHistoryimgList[i]).removeAttr("title");
			$(actionsHistoryimgList[i]).css("border","1px solid #ccc");
			$(actionsHistoryimgList[i]).empty();
			if(i==0){
				$(actionsHistoryimgList[i]).html('<div style="margin: 15px auto;font-size: 15px;">loading</div>');
			}
		}
		for(var i=0;i<actionsHistoryNumList.length;i++){
			$(actionsHistoryNumList[i]).empty();
		}
		for(var i=0;i<actionsHistoryinfoList.length;i++){
			$(actionsHistoryinfoList[i]).empty();
		}
	}
	var action=data.Actions;
	var index=currentActionIndex;
	var p= data.PurchasePrediction[index];
	var pl= toPercent(data.PurchaseProbability[index]);
	var imghtml='<img alt="no image" src="../image/'+action[index]+'.png">';
	$("#actionsimg"+(index)).empty();
	$("#actionsimg"+(index)).append(imghtml);
	$("#actionsimg"+(index)).attr("title",actionName[action[index]]);
	if(index>9){
		$("#actionsimg"+(index)).css("border","1px solid red");
	}
	$("#actionsNum"+(index)).html(orderIndexName[index+1]);
	$("#actionsinfo"+(index)).html("");
	
}

var userName="";

var refreshTask;

var totalSessionCount=0;
var currentTruePurchaseLabel='';

var currentSessionIndex = 0;
var currentActionIndex = 0;
var currentActionLength=0;

var time = new Date().getTime();// 时间毫秒数

var totalpoint=0;
var correct=0;
var Wrong=0;
var Missed=0;


$(function() {
	var userName_cookie = $.cookie("userName");
	if(userName_cookie&&""!=userName_cookie){
		userName=userName_cookie;
	}
	
	if(""==userName){
		return;
	}
	
	$("#userName").html(userName);
	
	$.ajax({
        url: apiurlprefix+'customer_sessions',
        data: {},
        success: function (result) {
          if(!result){
        	  alert("data null");
          }else{
        	  for(var i=0;i<result.length;i++){
      			  mockData[i].SessionIndex=result[i].customer_index;
	        	  mockData[i].Actions=result[i].actions;
	        	  mockData[i].TruePurchaseLabel=result[i].true_purchase_label;
	        	  mockData[i].PurchasePrediction=result[i].intervene_prediction;
	        	  mockData[i].PurchaseProbability=result[i].intervene_probability;
        	  }
        	  initPageData();
          }
        },
        error: function (erroresult) {
          console.log(erroresult);
          alert("data error");
        }
      });

});

function initPageData(){
	$.cookie('totalpoint',totalpoint,{path: '/' });
	$.cookie('correct',correct,{path: '/' });
	$.cookie('Wrong',Wrong,{path: '/' });
	$.cookie('Missed',Missed,{path: '/' });
	
	totalSessionCount=mockData.length;
	var initData = mockData[currentSessionIndex];
	currentTruePurchaseLabel=initData.TruePurchaseLabel;
	currentActionLength = initData.Actions.length;
	showData(currentSessionIndex,totalSessionCount,currentActionIndex,initData.Actions,initData.PurchasePrediction[currentActionIndex],toPercent(initData.PurchaseProbability[currentActionIndex]));
	showActionsHistory(currentActionIndex,initData);
	$("#submitBTN").attr("onclick","showConfident()");
	var timeUnit=5000;
	// 定时5秒刷新
	refreshTask = setInterval(refreshTaskFN, timeUnit);
	// clearInterval(refreshTask);//清除定时任务	
}

function refreshTaskFN() {
	currentActionIndex++;
	if (currentActionIndex == currentActionLength) {
		
		
		clearInterval(refreshTask);
		//不点击时
		setTimeout(function(){
			var confidentradio=25;
			if("P"==currentTruePurchaseLabel){
				totalpoint=totalpoint+parseInt(confidentradio);
				$("#totalpoint").html(totalpoint);
				correct++;
				$("#correct").html(correct);
				//显示弹窗
				$(".cuo").hide();
				$(".dui").show();
				$(".missed").hide();
				$("#ResultMessage").html("Finally the customer purchased products !");
				$("#Result").html("Gain&nbsp;"+confidentradio);
				$("#modal").show();
				
			}else{
				totalpoint=totalpoint-parseInt(confidentradio);
				$("#totalpoint").html(totalpoint);
				Missed++;
				$("#Missed").html(Missed);
				
				//显示弹窗
				$(".cuo").hide();
				$(".dui").hide();
				$(".missed").show();
				$("#ResultMessage").html("The customer didn’t purchase and left !");
				$("#Result").html("Lost&nbsp;"+confidentradio);
				$("#modal").show();
			}
		},1000);
		sendData(userName,mockData[currentSessionIndex].SessionIndex,currentActionIndex,mockData[currentSessionIndex].PurchasePrediction[currentActionIndex-1],"NI",25);
		
		currentActionIndex = 0;
		time = new Date().getTime();// 时间毫秒数
		return;

	}
	if (currentSessionIndex == mockData.length) {
		currentSessionIndex = 0;
		clearInterval(refreshTask);
		return;
	}
	var data = mockData[currentSessionIndex];
	currentTruePurchaseLabel=data.TruePurchaseLabel;
	var actions = data.Actions;
	currentActionLength = actions.length;
	showData(currentSessionIndex,totalSessionCount,currentActionIndex,actions,data.PurchasePrediction[currentActionIndex],toPercent(data.PurchaseProbability[currentActionIndex]));
	showActionsHistory(currentActionIndex,data);

}

function showConfident(){
	$("#submitBTN").removeAttr("onclick");
	clearInterval(refreshTask);
	$("#ConfidenceLevel").show();
}

function submitEven(){
	var confidentradio = $("input[name='confidentradio']:checked").val();
	if(!confidentradio||""==confidentradio){
		alert('How confident are you ?');
		return;
	}
	var data = mockData[currentSessionIndex];
	var sysPurchasePrediction=data.PurchasePrediction[currentActionIndex];//NI I
	var sysPurchaseProbability=toPercent(data.PurchaseProbability[currentActionIndex]);
	if("NP"==currentTruePurchaseLabel&&"I"==sysPurchasePrediction){
		totalpoint=totalpoint+parseInt(confidentradio);
		$("#totalpoint").html(totalpoint);
		correct++;
		$("#correct").html(correct);
		
		//显示弹窗
		$(".cuo").hide();
		$(".dui").show();
		$(".missed").hide();
		$("#ResultMessage").html("Customer liked to talk with you!");
		$("#Result").html("Gain&nbsp;"+confidentradio);
		$("#modal").show();
	}else{
		totalpoint=totalpoint-parseInt(confidentradio);
		$("#totalpoint").html(totalpoint);
		Wrong++;
		$("#Wrong").html(Wrong);
		
		//显示弹窗
		$(".cuo").show();
		$(".dui").hide();
		$(".missed").hide();
		$("#ResultMessage").html("Customer felt you are annoying!");
		$("#Result").html("Lost&nbsp;"+confidentradio);
		$("#modal").show();
	}
	$("input[name='confidentradio']").prop("checked",false);
	$("#ConfidenceLevel").hide();
	
	sendData(userName,data.SessionIndex,currentActionIndex+1,sysPurchasePrediction,"I",confidentradio);
	
}

function nextEven(ele){
	$("#"+ele).hide();
	$("input[name='confidentradio']").prop("checked",false);
	
	currentActionIndex=0;
	if("modal"==ele){
		currentSessionIndex++;
	}
	if (currentSessionIndex == mockData.length) {
		//结束循环
		//currentSessionIndex = 0;
		$.cookie('totalpoint',totalpoint,{path: '/' });
		$.cookie('correct',correct,{path: '/' });
		$.cookie('Wrong',Wrong,{path: '/' });
		$.cookie('Missed',Missed,{path: '/' });
		window.location.href="last.html";
		return;
	}
	
	$("#submitBTN").attr("onclick","showConfident()");
	var initData = mockData[currentSessionIndex];
	currentTruePurchaseLabel=initData.TruePurchaseLabel;
	currentActionLength = initData.Actions.length;
	time = new Date().getTime();// 时间毫秒数
	
	showData(currentSessionIndex,totalSessionCount,currentActionIndex,initData.Actions,initData.PurchasePrediction[currentActionIndex],toPercent(initData.PurchaseProbability[currentActionIndex]));
	showActionsHistory(currentActionIndex,initData);
	var timeUnit=5000;
	// 定时5秒刷新
	refreshTask = setInterval(refreshTaskFN, timeUnit);
	// clearInterval(refreshTask);//清除定时任务
	
}

var orderIndexName={
	"1":"1 st",
	"2":"2 nd",
	"3":"3 rd",
	"4":"4 th",
	"5":"5 th",
	"6":"6 th",
	"7":"7 th",
	"8":"8 th",
	"9":"9 th",
	"10":"10 th",
	"11":"11 th",
	"12":"12 th",
	"13":"13 th",
	"14":"14 th",
	"15":"15 nd",
	"16":"16 th",
	"17":"17 th",
	"18":"18 th",
	"19":"19 th",
	"20":"20 th",
	"21":"21 st",
	"22":"22 nd",
	"23":"23 rd",
	"24":"24 th"
}

//send system data
function sendData(user_id,session_index,action_index,intervention_prediction,user_prediction,confidence){
//	1 当前⽤户的ID user_id
//	2 当前session的序号 session_index : 数字
//	3 当前action（第⼏个action）：action_index： 数字 （这个是我要收集的数据，
//	储存后台就好。）
//	4 当前展示的intervention_prediction：字⺟ I 或 NI
//	5 ⽤户预测 user_prediction = I（因为用户点击了按钮 该数据直接标记为I,没有点击按钮时为NI）
//	6 用户自信度confidence： 数字10、20、30、40（没有点击时为25）
	var userid=$.cookie('userID');
	if(!userid||""==userid){
		return;
	}
	var params={user_id:userid,confidence:confidence,session_index:session_index,action_index:action_index,intervention_prediction:intervention_prediction,user_prediction:user_prediction};
	$.ajax({
		url:apiurlprefix+'submit_result',
		data: params,
		type:'POST',
		success: function (result) {
	          console.log(result);
	        },
	    error: function (erroresult) {
	          console.log(erroresult);
	    }
	});
//	console.log("user_id:"+user_id);
//	console.log("session_index:"+session_index);
//	console.log("action_index:"+action_index);
//	console.log("intervention_prediction:"+intervention_prediction);
//	console.log("user_prediction:"+user_prediction);
//	console.log("confidence:"+confidence);
	console.log(">>>>>>>>>>>>>>");

}

