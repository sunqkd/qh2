<template>
    <div class="roadshow" style="padding-top:36px;">
        <div class="headlineleft" style="width:73.6%;">· 创新创业 ·</div>
        <div class="numContain">
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:37px;">
                </div>
                <div class="numText">
                    入驻前海创业园区首年可获80%租金和物管费资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/02@2x.png" alt="">
                </div>
                <div class="numText">
                    创业团队入选“孔雀计划”等最高可获800万元资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/03@2x.png" alt="">
                </div>
                <div class="numText">
                    在深圳金融机构申请贷款最高可获100万元/年贷款贴息
                </div>
            </div>
        </div>
        <div class="headlineright" style="width:73.6%;">· 平台发展 ·</div>
        <div class="numContain" >
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:37px;">
                </div>
                <div class="numText">
                    设立港澳青年创新创业加速器可获100万元开办资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/02@2x.png" alt="">
                </div>
                <div class="numText">
                    创新载体承接国家级科创平台最高可获800万元资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/03@2x.png" alt="">
                </div>
                <div class="numText">
                    港澳青年社团与前海共同举办活动最高可获200万元资助
                </div>
            </div>
        </div>
        <div class="headlineleft" style="width:73.6%;">· 生活保障 ·</div>
        <div class="numContain" >
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:37px;">
                </div>
                <div class="numText">
                    港澳青年在前海发展一次性最高可获3万元租房资助
                </div>
            </div>
        </div>
        <div class="industext">
            注：详情请查阅《关于支持港澳青年在前海发展的若干措施实施细则》，细则明确了《若干措施》适用对象的申请条件、支持方式、资助标准、办理程序以及其他相关要求。
        </div>
        <div class="singupFormContain" style="margin-top:68px;">
            <div class="singupForm">
                <span class="signtitle">· 前海产业对接 ·</span>
                <div class="radioSingle" @click="changeRadio()">
                    <span>选择路演场次（多选）</span>
                    <span> > </span>
                </div>
                <div class="projectItem">
                    <span v-for="(item,index) in radiodata" :key="index">
                        {{item.roadShowName}}
                    </span>
                </div>
                <input type="text" placeholder="姓名" v-model="form.name">
                <input type="text" placeholder="公司名称" v-model="form.company">
                <input type="text" placeholder="职位" v-model="form.position">
                <input type="text" placeholder="微信" v-model="form.wechat">
                <input type="text" placeholder="手机" v-model="form.phone">
                <button @click="submit()">提交</button>
            </div>
        </div>
        <checkradio v-if="radioSingle" v-model="radioSingle" @checkBoxclick="checkBoxclick"></checkradio>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import checkradio from './checkradio';

    export default {
        data(){
            return{
                radiodata:[],
                form:{
                    name:'', // 名字
                    company:'', // 公司
                    position:'', // 职位
                    wechat:'', // 微信
                    phone:'', // 电话号码
                },
                radioSingle:false,
			    domain:'https://app.dyly.com',
            }
        },
        created(){
            this.setScrollTop(0)
        },
        methods:{
            setScrollTop(scroll_top) {  
                document.documentElement.scrollTop = scroll_top;  
                window.pageYOffset = scroll_top;  
                document.body.scrollTop = scroll_top;  
            },
            changeRadio(){ // 
			    this.radioSingle = true;
            },
            checkBoxclick(data){ // 多选按钮完成动作
                this.radiodata = data;
                this.radioSingle = false;
            },
            submit(){ // 提交报名
                

                console.log(roadshowId)
                
                if(this.radiodata.length == 0){
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
                if(!this.form.phone){
                    Toast({
                        message: '手机号为空或者手机号格式不正确',
                        iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
                    })
                    return;
                }

                let roadshowId = this.radiodata.map((data)=>{
                    return data.id
                })

                this.axios.post(this.domain+'/vc/qhRoadShow/signUp',{
                    "companyName": this.form.company, // 公司名
                    "roadshowId": roadshowId.join(','), // 路演场次Id
                    "name": this.form.name, //姓名
                    "position": this.form.position, // 职位
                    "phoneNo": this.form.phone, // 手机号
                    "wxNum": this.form.wechat, // 微信
                    "type": "4",
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
            "checkradio":checkradio,
            "Toast":Toast
        },
    }
</script>
<style lang="scss">
    .roadshow{
        width:100%;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        padding-bottom:50px;
        .numContain{
            width:100%;
            padding:28px;
            box-sizing: border-box;
            clear: both;
            .numItem{
                display:flex;
                align-items: center;
                margin-bottom:28px;
                .numImg{
                    width:53px;
                    height:44px;
                    margin-right:16px;
                    img{
                        width:100%;
                        height:auto;
                    }
                }
                .numText{
                    color:rgba(65,179,243,1);
                    line-height:22px;
                    font-size: 14px;
                }
            }
        }
        .industext{
            width: 100%;
            padding:0 20px;
            box-sizing: border-box;
            color:rgba(255,255,255,0.6);
            line-height:22px;
            font-size:12px;
        }
    }
</style>