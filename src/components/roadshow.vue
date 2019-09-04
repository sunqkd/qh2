<template>
    <div class="roadshow">
        <div class="roadTitleContain">
            <div class="roadTitle" style="margin-top:32px;">
                · 路演项目享有的权益 ·
            </div>
        </div>
        <!-- 权益 -->
        <div class="roadQyContain" style="margin-top:40px">
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_01@2x.png" alt="">
                    <span>享有国务院批复的深港合作区的优惠政策</span>
                </div>
                <div class="right">
                    <img src="./img/icon_02@2x.png" alt="">
                    <span>入驻深圳市首批双创示范基地-前海梦工场，并享最优政策</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_03@2x.png" alt="">
                    <span>提供前海国际一流的创业资源和优质服务</span>
                </div>
                <div class="right">
                    <img src="./img/icon_04@2x.png" alt="">
                    <span>产业垂直孵化提供技术、市场、产业、资本支持</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_05@2x.png" alt="">
                    <span>纳入所属领域的创投生态圈体系</span>
                </div>
                <div class="right">
                    <img src="./img/icon_06@2x.png" alt="">
                    <span>链接产业资本和国内外顶尖投资机构</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_07@2x.png" alt="">
                    <span>主流媒体采访报道传播项目品牌</span>
                </div>
                <div class="right">
                   
                </div>
            </div>
        </div>
        <!-- 报名 -->
        <div class="singupFormContain" style="margin-top:68px;">
            <div class="singupForm">
                <span class="signtitle">· 路演项目报名 ·</span>
                <div class="radioSingle" @click="changeSingle()">
                    <span v-if="singleData">{{singleData.roadShowName}}</span>
                    <span v-else>选择路演场次（单选）</span>
                    <span> > </span>
                </div>
                <input type="text" placeholder="姓名" v-model="form.name">
                <input type="text" placeholder="公司名称" v-model="form.company">
                <input type="text" placeholder="职位" v-model="form.position">
                <input type="text" placeholder="微信" v-model="form.wechat">
                <input type="text" placeholder="手机" v-model="form.phone">
                <button @click="submit()">提交</button>
            </div>
        </div>
        <!-- 下载 -->
        <div class="download" style="margin-top:34px;">
            <span @click="download()">下载路演企业登记表</span>
        </div>
        <!-- 单选 -->
        <singleradio v-if="singleFlag" v-model="singleFlag" @radioMethods="radioMethods"></singleradio>
    </div>
</template>
<script>
    import singleradio from './singleradio'
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
                domain:'https://app.dyly.com',
                singleFlag:false,
                singleData:'',
                form:{
                    name:'', // 名字
                    company:'', // 公司
                    position:'', // 职位
                    wechat:'', // 微信
                    phone:'', // 电话号码
                },
            }
        },
        created(){
            this.setScrollTop(0);
        },
        methods:{
            download(){
                this.axios.post(this.domain + '/vc/qhRoadShow/downloadExcel',{
                    downloadExcelType:'1'
                }).then((res)=>{
                    if(res.data.status == 1){
                        console.log(res);
                        window.location.href = res.data.data.downloadUrl;
                    }else{
                        Toast({
                            message: '下载失败',
                            iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
					    })
                    }
                })
            },
            setScrollTop(scroll_top){  
                document.documentElement.scrollTop = scroll_top;  
                window.pageYOffset = scroll_top;  
                document.body.scrollTop = scroll_top;
            },
            radioMethods(data){
                this.singleData= data;
                this.singleFlag = false;
            },
            changeSingle(){ // 单选
                this.singleFlag = true;
            },
            submit(){ // 提交
    
                if(!this.singleData.id){
                    Toast({
                        message: '请选择场次',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }
                if(!this.form.name){
                    Toast({
                        message: '请填写姓名',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }
                if(!this.form.company){
                    Toast({
                        message: '请填写公司',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }
                if(!this.form.position){
                    Toast({
                        message: '请填写职位',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }
                if(!this.form.wechat){
                    Toast({
                        message: '请填写微信',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }
                if(!this.form.phone ||  !/(^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$)/.test(this.form.phone)){
                    Toast({
                        message: '手机号为空或者手机号格式不正确',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }

                this.axios.post(this.domain+ '/vc/qhRoadShow/signUp',{
                    "companyName": this.form.company, // 公司名
                    "roadshowId": this.singleData.id, // 路演场次Id
                    "name": this.form.name, //姓名
                    "position": this.form.position, // 职位
                    "phoneNo": this.form.phone, // 手机号
                    "wxNum": this.form.wechat, // 微信
                    "type": "0",
                    "language": "0"
                }).then((res)=>{
                    if(res.data.status == 1){
                        Toast({
                            message: '报名成功',
                            iconClass: 'iconfont  icon-chenggong'
                        })
                    }else{
                        Toast({
                            message: '报名失败',
                            iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                        })
                    }
                })
            }

        },
        components:{
            singleradio
        }
    }
</script>
<style lang="scss">
    .roadshow{
        height:auto;
        width:100%;
        box-sizing: border-box;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        padding-bottom:50px;
    }
</style>