<template>
    <div class="workFlow">
        <div class="workFlowContain">
            <div class="buttonClick">
                <span @click="cancel()">取消</span>
                <span @click="certain()">确定</span>
            </div>
            <ul class="buttonContain">
                <li class="buttonItem" v-for="(item,index) in ccData" :key="index" :class="index == 0?'noClick':''">
                    <span>{{item.roadShowName}}</span>
                    <div class="radiocontainsingle">
                        <input type="radio" name="drone" :value="item.roadShowName" :ids="item.id" :disabled="index == 0?true:false">
                        <i></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
                domain:'https://app.dyly.com',
                ccData:[]
            }
        },
        created(){
            // ModalHelper.afterOpen();
            this.getCC();
        },
        methods:{
            getCC(){ // 获取数据
                this.axios.post(this.domain+ '/vc/qhRoadShow/getQhRoadShowList',{
                    "language":0
                }).then((res)=>{
                    if(res.data.status == 1){
                        this.ccData = res.data.data;
                    }
                })
            },
            cancel(){ // 取消
                this.$emit('input',false);
            },
            certain(){ // 确定
                var addressID = $("input[name='drone']:checked").attr('value');
                var ids = $("input[name='drone']:checked").attr('ids');
                if(ids){
                    this.$emit('radioMethods',{roadShowName:addressID,id:ids});
                }else{
                    Toast({
                    	message: '请选择场次',
                    	iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    });
                }
            }
        },
        components:{
            Toast
        },
        destroyed(){
            // ModalHelper.beforeClose();
        }
        
    }
</script>
<style lang="scss">
    .workFlow{
        width:100%;
        min-height:100%;
        position: fixed;
        top:0;
        left:0;
        background:#020816;
        z-index:20;
        .workFlowContain{
            width:100%;
            height:72%;
            position:absolute;
            left:0;
            bottom:0;
            background:rgba(0,32,69,1);
            border-radius:8px 8px 0px 0px;
            .buttonClick{
                width:100%;
                padding:16px;
                box-sizing: border-box;
                display:flex;
                align-items: center;
                justify-content: space-between;
                font-size: 14px;
                color:rgba(65,179,243,1);
            }
            .buttonContain{
                width:100%;
                padding:0 10px;
                height:calc(100% - 51px);
                overflow: auto;
                box-sizing: border-box;
                .buttonItem{
                    width:100%;
                    padding-left:10px;
                    box-sizing: border-box;
                    height:44px;
                    background:rgba(59,150,210,0.15);
                    margin-bottom:1px;
                    position:relative;
                    display:flex;
                    align-items: center;
                    color:rgba(255,255,255,1);
                    font-size: 14px;
                    .radiocontainsingle{
                        position:absolute;
                        left:0px;
                        top:0px;
                        z-index:10;
                        width: 100%;
                        height:100%;
                        input{
                            /* width: 24px;
                            height: 24px; */
                            opacity:0;
                            filter:alpha(opacity=0);
                            z-index: 5;
                            position: relative;
                            left: 0px;
                            top: 0px;
                            /* cursor:pointer; */
                            width: 100%;
                            height:100%;
                            outline: none;
                        }
                        input:checked + i{
                            background:url('./img/radioyes.png') no-repeat;
                            background-size: 100% 100%;
                        }
                        i{
                            background:url('./img/radio.png') no-repeat;
                            width: 24px;
                            height: 24px;
                            background-size: 100% 100%;
                            display: inline-block;
                            z-index: 3;
                            position: absolute;
                            right:10px;
                            top:10px;
                        }
                    }
                }
                .noClick{
                    color:rgba(255,255,255,0.3)
                }
            }
        }
    }
</style>