/**
* Created by Guanyunjie on 2017/6/29.
*/
<template>
	<div>{{result}}</div>
</template>

<script type="text/ecmascript-6">
	export default {
	    data() {
	        return {
				result: ''
			}
		},
	    created() {
	        this.$http.get('http://10.32.151.31:3000/query/seller').then((res) => {
	           console.log(res);
	           this.result = res;
			});
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
