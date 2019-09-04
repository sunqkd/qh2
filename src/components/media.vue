<template>
    <div class="media">
        <div class="singupFormContain">
            <div class="singupForm">
                <span class="signtitle">· 媒体/商务合作 ·</span>
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
    import checkradio from './checkradio';
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
                radioSingle:false,
                radiodata:[],
                form:{
                    name:'', // 名字
                    company:'', // 公司
                    position:'', // 职位
                    wechat:'', // 微信
                    phone:'', // 电话号码
                },
                domain:'https://app.dyly.com',
            }
        },
        created(){
            this.setScrollTop(0);
        },
        methods:{
            changeRadio(){ // 
                this.radioSingle = true;
            },
            setScrollTop(scroll_top) {  
                document.documentElement.scrollTop = scroll_top;  
                window.pageYOffset = scroll_top;  
                document.body.scrollTop = scroll_top;  
            },
            checkBoxclick(data){
                this.radiodata = data;
			    this.radioSingle = false;
            },
            submit(){
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
                    "type": "2",
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
<style>
    .media{
        width:100%;
        /* height: 100%; */
        padding-top: 68px;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        box-sizing: border-box;
    }
</style>