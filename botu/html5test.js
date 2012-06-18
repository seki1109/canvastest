
var psPainter = function(){
	//キャンバスの位置とサイズ
	this.left=20;
	this.top= 20;
	this.width=200;
	this.height=200;
	
	this.layerLength = 1;
	
	//レイヤーリスト
	this.layerList = new Array(this.layerLength);
	
    for(var i = 0; i < this.layerLength; i++){
    	this.layerList[i] = new (function(left, top, width, height){
            this.canvas = document.createElement("canvas");
            var $canvas = $(this.canvas);
            $canvas.attr({width:width, height:height});
            $canvas.css({position:"absolute", left:left, top:top, zIndex: 100});
			$canvas.css("border","double 10px #0000ff;");
            $canvas.appendTo($("body"));
            //this.backCanvas = document.createElement("canvas");
            //var $backCanvas = $(this.backCanvas);
            //$backCanvas.attr({width:width, height:height});
            this.visible = true;
    })(this.left, this.top, this.width, this.height);
    }
        


}

var painter;
$(function(){
    //var paperPosition = $("#paper").offset();
   // var drawArea = {
    //    left: paperPosition.left + 1,
    //    top: paperPosition.top + 1,
    //    width: $("#paper").width(),
    //    height: $("#paper").height()
    //};
    //painter = new psPainter({canvas: $("div#eventcatcher").get(0), drawArea : drawArea});
	painter = new psPainter();
});

var nowCanvas = 1;

// -------------------------------------------- プロトタイプ動作のサンプル
var Jool =	function(){

	//元作成
	function Tool(options){
		this.name = "tool";
		
	//	alert( options.arg );
	};
	
	//メソッドを追加
	Tool.prototype.sayHello = function() {
	//	alert( this.name );
	//	alert('haha' );
	};
	
	//実体化
	this.hhh = new Tool({arg: 'can'});
	
};	
var aa = new Jool();
aa.hhh.sayHello();
// --------------------------------------------

function addCanvas(number){
	alert('addCanvas');
	painter.layerList[0].canvas;
}

function changeCanvas(number){
	nowCanvas = number;
}


		

		
			//------------
		
			var isDragging = false;
			var startX = 0;
			var startY = 0;
			
			function draw(){
			  var canvas = document.getElementById('preview_test');
			  if (canvas.getContext){
			    var ctx = canvas.getContext('2d');
			    ctx.fillRect(25,25,100,100);
			    
			  }
			}
			function m_stalker_move(evt) {
			 if (window.event) {
			  if (!evt) var evt=window.event;
			  if (!evt.pageX) evt.pageX=evt.clientX+document.body.scrollLeft;
			  if (!evt.pageY) evt.pageY=evt.clientY+document.body.scrollTop;
			 }
			 var canvas = document.getElementById('preview_test');
			  if (canvas.getContext){
			    var ctx = canvas.getContext('2d');
			    ctx.fillRect(evt.pageX,evt.pageY,5,5);
			    
			  }
			}
			
			function mouseDownEventHandler(evt){
				var x;
				var y;
				//if(!isDragging){
					isDragging = true;
					if (window.createPopup){
						x = evt.x + document.body.scrollLeft;
						y = evt.y + document.body.scrollTop;
					}
					else{
						x = evt.pageX;
						y = evt.pageY;
					}
					startX = x - 8;
					startY = y - 8;
				//}
			}
			
			function mouseMoveEventHandler(evt){
				var x;
				var y;
				if(!isDragging){
					return;
				}
				if (window.createPopup){
					x = evt.x + document.body.scrollLeft;
					y = evt.y + document.body.scrollTop;
				}
				else{
					x = evt.pageX;
					y = evt.pageY;
				}
				x = x - 8;
				y = y - 8;
				var canvas = document.getElementById('preview_test');
				if (canvas.getContext){
					var ctx = canvas.getContext('2d');
					//ctx.fillRect(x - 8, y - 8, 5, 5);
					ctx.lineWidth = 8;
					ctx.lineCap = "round";
					ctx.beginPath();
					ctx.moveTo(startX,startY);
					ctx.lineTo(x, y);
					ctx.stroke();
		  			startX = x;
		  			startY = y;
					//ctx.save();
				}
			}
			
			function rotateCanvas(){
				var canvas = document.getElementById('preview_test');
				if (canvas.getContext){
					var ctx = canvas.getContext('2d');
					ctx.translate(200, 200);
					var i = 0;
					for(i = 0; i < 20; i++){
						ctx.rotate(5);
						ctx.fillRect(80, 80, 15, 15);
					}
				}
				ctx.translate(0, 0);
			}

			function mouseUpEventHandler(evt){
				//if(isDragging){
					isDragging = false;
				//}
				
			//	alert(nowCanvas);
				
			}
			
			function clearCanvas(){
				var canvas = document.getElementById('preview_test');
				if (canvas.getContext){
					var ctx = canvas.getContext('2d');
					ctx.clearRect(0, 0, 800, 600);
				}
			}
			
			function touchStartEventHandler(evt){
				var x;
				var y;
				var point;
				
				point = evt.touches[0];
				isDragging = true;
				
				startX = point.pageX;
				startY = point.pageY;
			}
			
			function touchMoveEventHandler(evt){
				var x;
				var y;
				var point;
				
				evt.preventDefault();
				
				if(!isDragging){
					return;
				}
				
				point = evt.touches[0];
				x = point.pageX;
				y = point.pageY;
				
				var canvas = document.getElementById('preview_test');
				if (canvas.getContext){
					var ctx = canvas.getContext('2d');
					ctx.lineWidth = 8;
					ctx.lineCap = "round";
					ctx.beginPath();
					ctx.moveTo(startX,startY);
					ctx.lineTo(x, y);
					ctx.stroke();
		  			startX = x;
		  			startY = y;
				}
			}
			
var image, canvas, ctx;

		function init() {

		    canvas = document.getElementById("preview_test");

			// 描画コンテキストを取得
			ctx = canvas.getContext("2d");
			
		    reset();
		    
		}
		function drawImage() {
		    // img要素を作成
		    image = document.createElement("img");
		    // 画像の読み込みが完了したら
		    image.onload = function() {
				// 画像を描画
				ctx.drawImage(image, 0, 0);
		    };
		    // 画像のURLをセットし、読み込み開始
			image.src = "http://www.ariga-10.com/%83t%83g%83o%83%93%83N2.jpg";
		}
		
		function seki(){
			moveImage();
		}
		
		function moveImage() {
		    // img要素を作成
		    image = document.createElement("img");
		    // 画像の読み込みが完了したら
		    image.onload = function() {
				// 画像を描画
				ctx.drawImage(image, 10, 10);
		    };
		    // 画像のURLをセットし、読み込み開始
			image.src = "http://www.ariga-10.com/%83t%83g%83o%83%93%83N2.jpg";
		}
		
		function reflect() {
		    // 画像を半透明にし、画像を反転させて描画
			ctx.globalAlpha = .2;
			ctx.transform(1, 0, 0, -1, 0, image.height * 2);
			ctx.drawImage(image, 0, 0);
		}
		
		function reset() {
		    canvas.width = canvas.width;
		    drawImage();
		}
		
		function addCanvasEvent() {
			
		}
	
		
		
		if (window.addEventListener) {
			window.addEventListener("mousedown",mouseDownEventHandler,false);
			window.addEventListener("mousemove",mouseMoveEventHandler,false);
			window.addEventListener("mouseup",mouseUpEventHandler,false);
		//	document.body.addEventListener('touchstart', touchStartEventHandler, false);
		//	document.body.addEventListener('touchmove', touchMoveEventHandler, false);
		}