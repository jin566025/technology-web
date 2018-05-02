<template>
	<div class="page-bar">
	    <nav>
		    <ul class="pagination">
		      
		     <!-- <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>-->
		      <li class="prev-next" :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> 上一页 </a></li>
		      <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;"
		                                                                          @click="setCurrent(p.val)"> {{ p.text }} </a>
		      </li>
		      <li class="prev-next" :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)">下一页</a></li>
		      
		   <!--   <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>-->

		    </ul>
		</nav>
	</div>
</template>

<script>
	export default{
    data(){
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style scoped>

.pagination  li{
	overflow: hidden;
    display: inline-block;
    margin: 0 5px;
    /*width: 100%;*/
    height: 24px;
    width: 20px;
    text-align: center;
   border-radius: 5px;
    border: 1px solid darkgray;
    cursor: pointer;
}
.pagination .prev-next{width: 60px;}

.pagination li a{
	display: block;
    height: 24px;
    width: 20px;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    border-radius: 5px;
    text-decoration: none;
     color: darkgray;
}
.pagination .active{border-radius: 4px;background-color: rgba(199, 238, 255, 1);color: rgba(31, 147, 255, 1);font-size: 12px;font-family: Roboto;border: 1px solid rgba(31, 147, 255, 1);}
.pagination .active a{
	color:#1F93FF;
}
.page-bar{text-align: right;}
.pagination .prev-next a{width: 60px;}
</style>