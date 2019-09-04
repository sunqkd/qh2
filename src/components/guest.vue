<template>
    <div class="roadshow">
        <div class="roadTitleContain">
            <div class="roadTitle" style="margin-top:32px;">
                · 嘉宾团享有的权益 ·
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
                    <img src="./img/icon_09@2x.png" alt="">
                    <span>加入国际路演中心科创联盟触碰全球优质资源</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_10@2x.png" alt="">
                    <span>链接前海优质项目和国内外顶尖母基金及政府引导基金</span>
                </div>
                <div class="right">
                    <img src="./img/icon_02@2x.png" alt="">
                    <span>入驻深圳市首批双创示范基地-前海梦工场 纳入所属领域的创投生态圈体系</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_07@2x.png" alt="">
                    <span>主流媒体采访报道传播机构品牌</span>
                </div>
                <div class="right">
                    
                </div>
            </div>
        </div>
        <!-- 报名 -->
        <div class="singupFormContain" style="margin-top:68px;">
            <div class="singupForm">
                <span class="signtitle">· 嘉宾团报名 ·</span>
                <div class="radioSingle" @click="changeall()">
                    <span>选择点评场次（多选）</span>
                    <span> > </span>
                </div>
                <!-- 选中的项目 -->

                <div class="projectItem">
                    <span v-for="(item,index) in checkData" :key="index">
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
        <!-- 下载 -->
        <div class="download" style="margin-top:34px;">
            <span @click="download()">下载嘉宾评委登记表</span>
        </div>

        <checkradio v-if="checkFlag" v-model="checkFlag" @checkBoxclick="checkBoxclick"></checkradio>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import checkradio from './checkradio';

    export default {
        data(){
            return {
                domain:'https://app.dyly.com',
                checkFlag:false,
                checkData:[],
                form:{
                    name:'', // 姓名
                    company:'', // 公司名称
                    position:'', // 职位
                    wechat:'', // 微信
                    phone:'', // 电话
                }
            }
        },
        created(){
            this.setScrollTop();
        },
        methods:{
            download(){
                this.axios.post(this.domain + '/vc/qhRoadShow/downloadExcel',{
                    downloadExcelType:'0'
                }).then((res)=>{
                    if(res.data.status == 1){
                        // if(window.webkit){
                        //     window.location.href = "itms-services://?action=download-manifest&url=" + res.data.data.downloadUrl
                        // }else{

                        // }
                        window.location.href = res.data.data.downloadUrl;
                        
                    }else{
                        Toast({
                            message: '下载失败',
                            iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
					    })
                    }
                })
            },
            changeall(){ // 
                this.checkFlag = true;
            },
            checkBoxclick(data){ // 多选方法
                this.checkData = data;
                console.log(data);
                this.checkFlag = false;
            },
            setScrollTop(scroll_top){  
    　　　　　　 document.documentElement.scrollTop = scroll_top;  
    　　　　　　 window.pageYOffset = scroll_top;  
    　　　　　　 document.body.scrollTop = scroll_top;  
　　　　     },
            submit(){
                if(this.checkData.length == 0){
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

                let roadshowId = this.checkData.map((data)=>{
                    return data.id
                })

                this.axios.post(this.domain+'/vc/qhRoadShow/signUp',{
                    "companyName": this.form.company, // 公司名
                    "roadshowId": roadshowId.join(','), // 路演场次Id
                    "name": this.form.name, //姓名
                    "position": this.form.position, // 职位
                    "phoneNo": this.form.phone, // 手机号
                    "wxNum": this.form.wechat, // 微信
                    "type": "1",
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
            checkradio
        }
    }
</script>
<style lang="scss">
    .roadshow{
        width:100%;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        padding-bottom:50px;
    }
</style>