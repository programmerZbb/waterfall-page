$.fn.extend({
	waterfall:function(){
		$_this = this;
		var totalwidth = $_this.width();
		var itemwidth = $_this.children(".item").width();
		var colcount = Math.floor(totalwidth/itemwidth);
		var margin = (totalwidth-(itemwidth*colcount))/(colcount+1);
		var arrheight = [];
		for(var i=0;i<colcount;++i){
			arrheight[i] = margin;
		}
//		console.log(arrheight);
		$_this.children(".item").each(function(index,ele){
			var $_item = $(ele);
			var minheight = arrheight[0];
			var mincount = 0;
			for(var i=0;i<arrheight.length;++i){
				if(arrheight[i]<minheight){
					minheight = arrheight[i];
					mincount = i;
				}
			}
			console.log(mincount);
			console.log(minheight);
			$_item.css({
				top:minheight,
				left:mincount*(itemwidth+margin)+margin
			});
			arrheight[mincount] += $_item.height();
			arrheight[mincount] += margin;
		});
		
		var maxheight = arrheight[0];
		for(var j=0;j<arrheight.length;++j){
			if(arrheight[j]>maxheight){
				maxheight = arrheight[j];
			}
		}
		$_this.height(maxheight);
	}
});
