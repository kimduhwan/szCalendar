jQuery.extend({
szExtRelStartPosition:{
/*
Author : Kim Du Hwan
netphantom@hanmail.net
*/
	leftTop : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = -col*w;
		startObj.top = -row*h;
		return startObj;
	},
	
	rightTop : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();

		startObj.left = (cols - 1 - col)*w;
		startObj.top = -row*h;
		return startObj;
		
	},

	leftBottom : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left =-col*w;
		startObj.top = (rows - 1 - row)*h;
		return startObj;
		
	},

	rightBottom : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left= (cols - 1 - col)*w;
		startObj.top = (rows - 1 - row)*h;
		return startObj;
		
	},

	leftSideBySide : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = -col*w;
		startObj.top = 0;
		return startObj;
		

	},

	rightSideBySide : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = (cols - 1 - col)*w;
		startObj.top = 0;
		return startObj;
		
	},
	
	topSideBySide : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = 0;
		startObj.top = -row*h;
		return startObj;
		
	},

	bottomSideBySide : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = 0;
		startObj.top = (rows - 1 - row)*h;
		return startObj;
		
	},

	destPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = 0;
		startObj.top = 0;
		return startObj;
		
	},
	randomPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		var imgW = cols*w;
		var imgH = rows*h;
		var leftMax = imgW - w;
		var topMax = imgH - h;

		startObj.left = Math.floor(Math.random()*(leftMax + 1));
		startObj.top = Math.floor(Math.random()*(topMax + 1));
		return startObj;
		
	},

	hOffsetPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = (offset - col)*w;
		startObj.top = 0;
		return startObj;
	},

	vOffsetPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = 0;
		startObj.top = (offset - row)*h;
		return startObj;
	},

	revSlashPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = (row - col)*w; 
		startObj.top = 0;
		return startObj;
		
	},

	slashPosition : function(rows, cols, w, h, row, col, offset){
		var startObj = new Object();
		startObj.left = (cols - 1 - row - col)*w; 
		startObj.top = 0;
		return startObj;
		
	}
}
});