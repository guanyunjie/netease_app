/**
* Created by Guanyunjie on 2017/6/29.
*/
<template>
	<div>post：{{result}}<br /> get：{{result2}}</div>
</template>

<script type="text/ecmascript-6">
	export default {
	    data() {
	        return {
				result: {},
				result2: {}
			}
		},
	    created() {
			this.$http.post('/api', {id: '222'}).then((res) => {
			    this.result = res.data;
			});
			this.$http.get('/api/tom').then((res) => {
				this.result2 = res.data;
			});
		},
		methods: {
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
