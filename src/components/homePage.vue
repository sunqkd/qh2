<template>
	<div class="homePage">
		<!-- 头部部分 -->
		<div class="homebg">
			<!-- 背景图 -->
			<img src="./img/bg1.png" alt="" class="homeTitlebg">
			<img src="./img/titleName.png" alt="" class="homeText">
			<!-- 单位 -->
			<div class="unit">
				<span>指导单位：前海管理局</span>
				<span>主办单位：前海科创投控股有限公司</span>
				<span>承办单位：前海深港青年梦工场&ensp;第一路演</span>
				<img src="./img/LOGO@2x.png" alt="" style="height:20px;width:auto;margin-top:2px">
			</div>
			<div class="icon-video transform"></div>
			<audio src="https://static.dyly.com/h5/h5style/jinghe/bg.mp3" id="bg-music" controls="controls" autoplay="autoplay"
				loop></audio>
		</div>
		<div class="homeBody">
			<div class="headlineleft" style="width:73.6%;">· 活动背景 ·</div>
			<div class="activityBg" style="margin-bottom:50px;">
				粤港澳大湾区建设是习近平总书记亲自谋划、亲自部署、亲自推动的国家战略，是新时代推动形成全面开放新格局的新尝试，是推动“一国两制”事业发展的新实践，也是前海新时期开发开放重大战略机遇。前海立足国家战略优势，汇聚全球创新能量，建设“一带一路”国际路演中心，为全球科技创新企业提供资本及产业资源支持，搭建路演展示舞台，推动粤港澳大湾区建设。
			</div>
			<div class="headlineright" style="width:89.3%;">· 大数据及云计算专场路演介绍 ·</div>
			<div class="activityBg" style="margin-bottom:50px;clear:both;margin-bottom:55px;">
				云计算、大数据带来信息技术服务模式和应用方式的重大变革，已逐步成为经济社会发展的新引擎，正在改变这个世界，更是未来巨头生态标配。大数据、云计算的迅速发展,也为投资带来了更加广阔的领域与可能，在这一持续热门的领域,“一带一路”前海国际路演中心借势出击,举办大数据、云计算专场路演，并支持同步在线视频路演。
			</div>
			<div class="headlineleft" style="width:73.6%;">
				· 活动流程 ·
			</div>
			<!-- 时间轴 -->
			<div class="timeShaft">
				<ul>
					<li>
						<span>
							<i></i>
						</span>
						<span>14:00-14:30</span>
						<span>签到</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>14:30-14:35</span>
						<span>主持人开场，介绍贵宾</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>14:35-14:40</span>
						<span>嘉宾评委聘书颁发仪式</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>14:40-17:40</span>
						<span>项目路演(9个项目，每个项目15分钟路演，5分钟嘉宾点评)</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>17:40-18:00</span>
						<span>自由交流</span>
					</li>
				</ul>
			</div>
			<!-- 路演项目 -->
			<div class="headlineright" style="width:73.6%;margin-top:10px;margin-bottom:19px">
				· 拟邀路演项目 ·
			</div>
			<!-- 路演项目列表 -->
			<div class="roadProject">
				<ul>
					<li>“互联网+大美业”云平台独有“5+1”模式赋能新时代大美业生态链</li>
					<li class="disc">公司致力于建设最大的大美业互联网创业、服务及资源平台，通过互联网云平台链接医美、生美的机构、人、产品和服务，专注为医美机构提供全方位一站式服务解决方案，做“互联网+大美业”生态链的缔造者。</li>
					<li class="disc">云平台独有“5+1”模式：5指的是将新医美院务管理、渠道分销管理、互联网关系链营销、客户关系CRM、美业商城等5大系统全打通，1是指通过智能支付实时数据云端联动，使“大美业+互联网”完美落地。</li>
					<li class="disc">云平台优势：专业落地实施顾问团队、海量美业精准客户资源、一站服务、 全生态链实力合作伙伴。渠道分销管理、美付通智能支付解决方案属公司在医美行业首家率先推出的服务，创新业务领先行业6-12个月。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>工业设备远程维护物联网软硬件解决方案供应商</li>
					<li class="disc">提供标准化的行业产品和定制化的行业服务，具有产品+服务的优势；</li>
					<li class="disc">完整的软件平台和硬件研发专业团队，积累近十年；</li>
					<li class="disc">产品和商业模式已经初步验证；</li>
					<li class="disc">处于估值洼地，未来回报更高。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>致力于为建设开发全周期提供AI解决方案与决策管理的科技公司</li>
					<li class="disc">
						<div>
							<span>时机：</span>地产产业转型智能化升级。面对万亿级的房地产市场，正逢房地产产业整体转型化升级时机，以及城市化持续发展；
						</div>
					</li>
					<li class="disc">
						<div>
							<span>逻辑：</span>AI-产品，AI+服务，AIｘ业务。用智能设计为房企和建筑设计机构，增强设计收益，提高设计效率，进而串联规模化集中；
						</div>
					</li>
					<li class="disc">
						<div>
							<span>优势：</span>人工智能建筑设计引领者。全球第一款人工智能建筑设计云平台，业内70%+品牌认知度，公认的人工智能龙头企业；
						</div>
					</li>
					<li class="disc">
						<div>
							<span>壁垒：</span>多项核心技术与数据。近十年研究探索出的开创性多AI模型融合的核心技术，渠道数据与独家数据行业数据；
						</div>
					</li>
					<li class="disc">
						<div>
							<span>验证：</span>持续增长的模式+极速增长的赋能服务模式。数万产品基础用户，Top20开发商35%占有率，数十家头部设计公司 客户；
						</div>
					</li>
					<li class="disc">
						<div>
							<span>团队：</span>国际顶级资深行业跨界团队。世界著名建筑事务所资深建筑团队+硅谷技术团队+丰富经验品牌与营销团队；
						</div>
					</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>机理模型驱动的数字孪生技术赋能先进制造和智慧城市建设</li>
					<li class="disc">公司产品主要面向先进制造和智慧城市建设两大领 域，市场需求旺盛，前景广阔；</li>
					<li class="disc">数字孪生技术是当前国际上公认的最具发展潜力的战略性新兴技术之一，核心技术团队在该技术领域耕耘多年，实现了机理模型驱动的数字孪生技术应用，是国内首家突破多项智能产品研制和应用核心问题的团队，在我国重大航天工程中经过实战检验，公司技术优势明显；</li>
					<li class="disc">公司核心成员覆盖多业务领域，在公司运营、战略规划、项目管理和质量体系控制、核心技术研发等领域拥有丰富的实战经验，团队组合强健；</li>
					<li class="disc">在强有力的战略规划、技术攻关、运营支撑的协同保障下，公司发展潜力巨大。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>智慧应急城市运营商</li>
					<li class="disc">提供应急行业从大数据分析到智能传感器的端到端解决方案；</li>
					<li class="disc">跨系统数据引擎，解决信息孤岛，加装智能大脑，系统开发提速45%；</li>
					<li class="disc">传感器满足高温、高压、易爆、腐蚀性（特殊工况要求），应对偏远无人场景要求；</li>
					<li class="disc">物联网引擎：兼容NB-IoT、5G模块和RPMA制式，具备加密、加速等多种研发技术。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>智能移动办公解决方案提供商</li>
					<li class="disc">公司产品以及商业解决方案主要应用在STR场景文本识别以及人工智能大数据领域，已在30多个行业的100多个商业场景实现落地，已然构建了成熟的商业模式。</li>
					<li class="disc">公司深耕人工智能与大数据，建立了海量的企业数据闭环，涵盖2.2亿家企业条目、700多亿条企业商业数据、1000多个维度全面透视企业，建立企业画像，全量的大数据库以及智能的人工算法已经成为合合信息的独特优势。</li>
					<li class="disc">公司核心成员覆盖多业务领域，在公司战略规划、核心技术创新、公司品牌运营、产品研发迭代等领域有着丰富的实战经验，在强有力的战略规划、技术迭代和品牌运营的协同保障下，公司发展潜力巨大。</li>
					<li class="disc">公司旗下C端明星产品包括：名片全能王、扫描全能王、启信宝以及找到APP，其中名片全能王以及扫描全能王全球累计下载超过6亿。</li>
					<li class="disc">公司的STR智能场景文本识别以及企业大数据解决方案已经为华为、中国农业银行、招商银行、三星、日本软银、中国太平洋保险、eBay、顺丰等数百家世界500家企业提供技术服务和业务支持，成为其长期的合作伙伴。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>用数字化技术来搭建牙科产业互联网+数字化临床应用+数字化制造全产业链平台</li>
					<li class="disc">公司产品主要面向牙科行业，市场潜力巨大，前景广阔；</li>
					<li class="disc">数字化技术在牙科行业的应用是牙科行业未来的发展方向，核心技术和设备一直被欧美极少数一二个国家所控制，我们是国内首家在牙科数字化技术和设备上超越欧美发达国家，同时，在临床应用和义齿加工端实现突破的团队，产品技术领先优势明显；</li>
					<li class="disc">公司核心成员深耕医疗行业多年，具有很强的医疗行业资源整合能力；</li>
					<li class="disc">未来十年将是牙科行业高速发展的十年，牙科行业将达到万亿级的产业规模，公司在数字化技术和设备方面的领先优势，以及在临床数字化技术和义齿技工端数字技术应用方面的技术积累，足以保障公司未来十年的快速发展。</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>多云安全融合智能应用交付专家</li>
					<li class="disc">公司致力于通过云应用交付平台为整体解决方案，为行业企业客户提供有前瞻性、云演进性的专家级行业应用交付服务，迄今已为中国多家行业信息化领军企业提供整体交付方案和服务，以帮助中国企业提供全球化IT支持方案的领军企业为目标的专业信息化产品公司。</li>
					<li class="disc">公司立足世界最前沿、最具前瞻性技术的本地化研发和服务，拥有的专业云应用交付产品、行业混合云交付平台、应用负载均衡、全局负载均衡、链路负载均衡产品、云负载均衡等一系列可以与国际同步的专业产品和解决方案。</li>
					<li class="disc">鸬鹚云应用交付产品短短4年多时间，实现以下的突破</li>
					<li class="disc noafter">
						<div>
							<span>1、</span>相关技术水平国内领先，并保持和国际理念同步。
						</div>
					</li>
					<li class="disc noafter">
					    <div>
							<span>2、</span>成功交付100+以上客户（包括广东省高院、广东省教育厅江西省工信委等省级单位，中国机械设备工程有限公司等国家级企业以及广州番禺何贤医院、南昌第一人民医院等医疗教育机构等）
						</div>
					</li>
					<li class="disc noafter">
						<div>
							<span>3、</span>2016-2019年连续三年广东省计算机用户推荐产品奖
						</div>
					</li>
					<li class="disc noafter">
						<div>
							<span>4、</span>2018年中国云应用交付用户最值得信赖产品奖
						</div>
					</li>
					<li class="disc noafter">
						<div>
							<span>5、</span>获得华为云等公有云认证，成为国内支持公有云和私有云最多的专业云应用交付器厂商
						</div>
					</li>
					<li class="disc noafter">
						<div>
							<span>6、</span>广东省计算机用户协会副会长单位/前海云计算及人工智能产业联盟会长单位
						</div>
					</li>
					<li class="disc noafter">
						<div>
							<span>7、</span>2019年团队项目通过阿里云AI赛道筛选
						</div>
					</li>
				</ul>
			</div>
			<div class="roadProject">
				<ul>
					<li>智能工业物联网SaaS</li>
					<li class="disc">物联网是时代趋势，工业物联网是国家战略，前景广阔。</li>
					<li class="disc">10年刻意训练思考力，5年构建模块化，积木式搭建软件系统能力。在标准化程度低、协议众多对接复杂的工业物联网场景下取得了较大突破。目前可对接主流的PLC设备和70%左右的工控设备。</li>
					<li class="disc">基于模块化思想研发的自定义规则引擎、自定义报表、自定义设备工单等功能实现了用标准经的功能满足客户相对个性化的需求。</li>
					<li class="disc">经过验证的高可用、高并发业务架构与底层基础数据计算服务，可靠支撑工业场景下海量数据的处理标准化可叠加的方法与流程可打造超高效率的团队(标准化、可叠加的思考力提升方法与流程，快速提升员工解决问题的能力;标准化、可叠加的积木搭建式系统开发方法(20+模块)，效率提升近10倍;标准化、可叠加的编码规范和代码质量检查体系保证代码质量)。</li>
				</ul>
			</div>
			<div class="continue">
				路演项目 持续邀约中...
			</div>
			<!-- 嘉宾评委团 -->
			<div class="headlineleft" style="width:75%;margin-top:52px;display:flex;align-items:center">
				· 嘉宾评委团 ·
				<span style="font-size:12px;color:rgba(255,255,255,0.6);margin-left:5px;font-weight:normal">（嘉宾排名顺序不分先后）</span>
			</div>
			<div class="judge">
				<img src="./img/person.png" alt="">
			</div>
			<!-- 启动仪式 -->
			<!-- <div class="headlineright" style="width:73.6%;margin-top:46px;">· 启动仪式特约机构 ·</div>
			<div class="orgPeo">
				<img src="./img/org.png" alt="">
			</div> -->
			<div class="headlineleft" style="width:73.6%;margin-top:46px">· 系列路演日程 ·</div>
			<div class="series" style="clear:both">
				<div class="tableheader">
					<div>
						序号
					</div>
					<div>
						活动名称
					</div>
					<div>
						拟定举办时间
					</div>
				</div>
				<div class="tableBody" v-for="(item,index) in active" :key="index" :class="item.time.indexOf('已结束') > 0?'srecialColor':''">
					<div>
						{{index+1}}
					</div>
					<div>
						{{item.name}}
					</div>
					<div>
						{{item.time}}
					</div>
				</div>
			</div>
			<!-- 组委会介绍 -->
			<div class="headlineright" style="width:73.6%;margin-top:48px;">
				· 组委会介绍 ·
			</div>
			<div class="committee" style="clear:both">
				前海科控是深圳市前海管理局全资直属的三家平台公司之一，通过聚焦科创产业空间运营、高端科技专业服务、科创及文创产业投资等核心业务，努力打造前海科创产业投资运营服务平台，快速推动前海科技创新产业集聚发展。
				<br/><br/>
				第一路演是领先的人工智能路演平台，主要为新兴成长企业、VC/PE投后项目、产业园区项目、双创赛事项目提供融资路演服务，参与策划深圳金博会、高交会等大型活动，平台与主流投资机构紧密合作，基于大数据及人工智能算法对机构投资风格的精准画像，为路演企业精准匹配潜在投资者。
			</div>
			<div class="signup">
				<ul>
					<li>
						<router-link to="/roadshow">
							<span>路演项目</span>
							<span>报名 > </span>
						</router-link>
					</li>
					<li>
						<router-link to="/guest">
							<span>嘉宾评委</span>
							<span>报名 > </span>
						</router-link>
					</li>
					<li>
						<router-link to="/industry">
							<span>前海产业</span>
							<span>对接 > </span>
						</router-link>
					</li>
					<li>
						<router-link to="/media">
							<span>媒体/商务</span>
							<span>合作 > </span>
						</router-link>
					</li>
				</ul>
			</div>
			<!-- 路演报名表单 -->
			<div class="singupFormContain" style="margin-top:68px;">
				<div class="singupForm">
					<span class="signtitle">· 参会报名 ·</span>
					<div class="airborne">报名后携名片凭参会短信入场，谢绝空降。</div>
					<div class="radioSingle" @click="changeRadio()" style="display:none">
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
			<div class="tableContain">
				<!-- 剩余报名人数 -->
				<div class="residue">
					剩余报名名额：{{148 - tableList.length >= 0? 148 - tableList.length:0}}
				</div>
				<div class="interested">
                    <ul class="interestedUL">
                        <li class="interestedLi" v-for="(item,index) in tableList" :key="index">
                            <span>
                                {{tableList.length - index}}
                            </span>
                            <span>
                                {{item.name}}
                            </span>
                            <span>
                                {{item.companyName}}
                            </span>
                            <span>
                                {{item.position}}
                            </span>
                            <span>
                                {{item.phoneNo}}
                            </span>
                        </li>
                    </ul>
                </div>
			</div>
			<div class="imgcontain">
				<img src="./img/code.png" alt="">
			</div>
			<div class="adressContain">
				<div class="adress">
					<span>
						活动地址：<a href="http://apis.map.qq.com/uri/v1/marker?marker=coord:22.518,113.90;title:前海深港青年梦工场2号楼;addr: 广东省深圳市南山区前海深港合作区前海深港青年梦工场">前海深港青年梦工场</a>
					</span>
					<span>
						公交路线：最近的地铁站是1号线鲤鱼门（出站后打车8分钟）、11号线南山站（车程15分钟）
					</span>
				</div>
			</div>
			<!-- 往期花絮 -->
			<div class="pasttrivia">
				<div class="title">
					· 往期花絮 ·
				</div>
				<div class="lb">
					<div class="swiper-container lb1">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-01.jpg" alt="">
								</div>
								<p>新一代信息技术专场·领导讲话</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-02.jpg" alt="">
								</div>
								<p>新一代信息技术专场·嘉宾团</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-03.jpg" alt="">
								</div>
								<p>新一代信息技术专场·企业路演</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-04.jpg" alt="">
								</div>
								<p>新一代信息技术专场·企业路演</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-05.jpg" alt="">
								</div>
								<p>新一代信息技术专场·路演现场</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-06.jpg" alt="">
								</div>
								<p>新一代信息技术专场·嘉宾互动</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/first/01-07.jpg" alt="">
								</div>
								<p>新一代信息技术专场·路演现场</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-01.jpg" alt="">
								</div>
								<p>巴葡专场·嘉宾团</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-02.jpg" alt="">
								</div>
								<p>巴葡专场·路演企业</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-03.jpg" alt="">
								</div>
								<p>巴葡专场·路演企业</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-04.jpg" alt="">
								</div>
								<p>巴葡专场·嘉宾互动</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-05.jpg" alt="">
								</div>
								<p>巴葡专场·路演现场</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-06.jpg" alt="">
								</div>
								<p>巴葡专场·嘉宾合影</p>
							</div>
							<div class="swiper-slide">
								<div class="imglbContain">
									<img src="./img/second/02-07.jpg" alt="">
								</div>
								<p>巴葡专场·嘉宾聘书</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 单选 -->
		<!-- <singleradio v-if="radioSingle" v-model="radioSingle" @radioMethods="radioMethods"></singleradio> -->
		<checkradio v-if="radioSingle" v-model="radioSingle" @checkBoxclick="checkBoxclick"></checkradio>

		<div class="tosignup" @click="joinTable()" v-if="joinFlag">
			参会报名
		</div>
		<div class="fourTab">
			<ul>
				<li>
					<router-link to="/roadshow">
						<span>项目路演</span>
						<span>报名</span>
					</router-link>
				</li>
				<li>
					<router-link to="/guest">
						<span>嘉宾评委</span>
						<span>报名</span>
					</router-link>
				</li>
				<li>
					<router-link to="/industry">
						<span>前海产业</span>
						<span>对接</span>
					</router-link>
				</li>
				<li>
					<router-link to="/media">
						<span>媒体/商务</span>
						<span>合作</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import { Toast } from 'mint-ui';
import active from './active.js';
import singleradio from './singleradio';
import checkradio from './checkradio';
export default {
	data () {
		return {
			active:active,
			radioSingle:false,
			radiodata:'',
			form:{
				name:'', // 名字
				company:'', // 公司
				position:'', // 职位
				wechat:'', // 微信
				phone:'', // 电话号码
			},
			tableList:[], // 报名列表数据
			domain:'https://app.dyly.com',
			joinFlag:false, // 参会报名显示和隐藏
			title:'【邀请函】“一带一路” 前海国际路演中心·大数据及云计算专场路演',
			decs:'智汇全球·追梦前海 路演时间：10月22日14:00 路演地点：前海深港青年梦工场>>',
			imgUrl:'https://m.dyly.com/register/app_h5/img/qh.jpg',
			sharehref:'https://m.dyly.com/register/app_h5/qh/index.html'
		}
	},
	created(){
		// ModalHelper.afterOpen();
		this.listenBody(); // 页面滚动
		this.getTableList();
		this.share();
	},
	mounted(){
		var that = this;
		var audio = $('audio').get(0);
            //   audio.play();
		$('.icon-video').click(function () {
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		})

		$(document).ready(function () {
			that.autoPlayMusic();
            that.audioAutoPlay();
		});
		this.newSwiper();
	},
	methods:{
		change(){ // 中英文切换
			let locale = this.$i18n.locale;
			locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
		},
		checkBoxclick(data){ // 多选按钮完成动作
			this.radiodata = data;
			this.radioSingle = false;
		},
		changeRadio(){ // 
			this.radioSingle = true;
		},
		submit(){ // 提交报名
		
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

			this.axios.post(this.domain+'/vc/qhRoadShow/signUp',{
				"companyName": this.form.company, // 公司名
				"name": this.form.name, //姓名
				"position": this.form.position, // 职位
				"phoneNo": this.form.phone, // 手机号
				"wxNum": this.form.wechat, // 微信
				"roadshowId":"3",
				"type": "3",
				"language": "0"
			}).then((res)=>{
				if(res.data.status == 1){
					Toast({
						message: '报名成功',
						iconClass: 'iconfont  icon-chenggong'
					})
					this.getTableList();
				}else{
					Toast({
						message: '报名失败',
						iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
					})
				}
			})
		},
		listenBody(){ // 滚动监听
			var that = this;
			$(window).scroll(function() {
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				var h = $(document).height();
				if(scrollTop  > window.screen.height /4){ // 一个整屏幕高度
					that.joinFlag = true;
					// if(h - scrollTop < 1400){
					// 	that.joinFlag = false;
					// }
				}else{
					that.joinFlag = false;
				}
			})
		},
		joinTable(){ // 参与报名
			var top = $('.singupFormContain').offset().top; // 报名参与的高度
			$('body,html').animate({
				scrollTop: top - 100
			}, 400);
		},
		share(){
			var that = this;
			$.getScript('https://res.wx.qq.com/open/js/jweixin-1.0.0.js', function(){
				$.ajax({
					url: "https://m.dyly.com/weixin/getWxConfig",
					type: 'POST',
					data: {
						url: window.location.href
					}
				}).success(function(data){
					wx.config({
						appId: data.data.appId,
						timestamp: data.data.timestamp,
						nonceStr: data.data.nonceStr,
						signature: data.data.signature,
						jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
					});
					// updateAppMessageShareData
					wx.ready(function(){
						// 朋友圈分享
						wx.onMenuShareTimeline({
							title: that.title,
							link: window.location.href,
							imgUrl: that.imgUrl
						})
						// 分享给朋友
						wx.onMenuShareAppMessage({
							title: that.title,
							desc: that.decs,
							link: window.location.href,
							imgUrl: that.imgUrl
						})
					})
				})
			});
		},

		// 音乐播放
		autoPlayMusic() {
			var that = this;
                // 自动播放音乐效果，解决浏览器或者APP自动播放问题
			function musicInBrowserHandler() {
				that.musicPlay(true);
				document.body.removeEventListener('touchstart', musicInBrowserHandler);
			}
			document.body.addEventListener('touchstart', musicInBrowserHandler);
			// 自动播放音乐效果，解决微信自动播放问题
			function musicInWeixinHandler() {
				that.musicPlay(true);
				document.addEventListener("WeixinJSBridgeReady", function () {
					that.musicPlay(true);
				}, false);
				document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
			}
			document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
		},
		musicPlay(isPlay) {
			var media = document.querySelector('#bg-music');
			if (isPlay && media.paused) {
				media.play();
			}
			if (!isPlay && !media.paused) {
				media.pause();
			}
		},
		audioAutoPlay() {
			var audio = document.getElementById('bg-music');
			audio.play();
			document.addEventListener("WeixinJSBridgeReady", function () {
				audio.play();
			}, false);
		},
		getTableList(){ // 获取报名列表
			this.axios.get(this.domain +'/vc/qhRoadShow/getSignUpList',{
				params:{
					"roadShowId":3,
				}
			}).then((res)=>{
				if(res.data.status == 1){
					this.tableList = res.data.data?res.data.data:[];
				}
			})
		},
		newSwiper(){
			var mySwiper = new Swiper ('.lb1', {
				loop: true, // 循环轮播
			 	autoplay:true,
				slidesPerView: 1.5,
				spaceBetween: 2,
				centeredSlides: true,
			}) 
		}
	},

	components:{
		"singleradio":singleradio,
		"checkradio":checkradio,
		"Toast":Toast
	},
	destroyed(){
        // ModalHelper.beforeClose();
    }
	
}
</script>
<style lang="scss">

	.pasttrivia{
		width:100%;
		margin-bottom:40px;
		.title{
			color:#17EAD9;
			font-size:18px;
			display:flex;
			align-items: center;
			justify-content: center;
			margin-bottom:32px;
		}
		.lb{
			width:100%;
			height:200px;
			.swiper-container{
				height:100%;
				.swiper-wrapper{
					.swiper-slide{
						.imglbContain{
							width:100%;
							height:166px;
							display:flex;
							align-items: center;
							justify-content: center;
							img{
								width:100%;
								height:auto;
								display:inline-block;
							}
						}
						p{
							margin-top:5px;
							width:100%;
							display:flex;
							align-items: center;
							justify-content: center;
							font-size: 12px;
							color:rgba(255,255,255,0.6);
						}
					}
					.swiper-slide:not(.swiper-slide-active) {transform: scale(0.8);}
				}
			}
			
		}
	}
	.homePage{
		width:100%;
		height:auto;
		background-color:#01040D;
		padding-top: 40px;
		.homebg{
			width:100%;
			position:relative;
			.homeTitlebg{
				display:block;
				width:100%;
				height:auto;
			}
			.homeText{
				width:100%;
				height:auto;
				display:block;
				position:absolute;
				top:80px;
				z-index:1;
			}
			.unit{
				width:100%;
				position:absolute;
				left:0;
				bottom:164px;
				z-index:1;
				padding-left:26px;
				box-sizing: border-box;
				span{
					display:block;
					color:rgba(98,178,232,0.8);
					font-size:13px;
					line-height:22px;
				}
			}
			.icon-video{
				width: 30px;
				height: 30px;
				position: fixed;
				right: 15px;
				top: 44px;
				background: url('https://static.dyly.com/yuegangao/video.svg');
				z-index: 2;
				background-size: 100%;
			}
			.transform{
				animation: transform 3.5s linear infinite;
			}
		}
		.homeBody{
			width:100%;
			background:url('./img/bg2.png') repeat-y;
			background-size:100%;
			background-color:#01040D;
			position:relative;
			z-index:1;
			margin-top:-85px;
			padding-bottom:30px;
			.timeShaft{
				width:100%;
				padding:37px 0 0 19px;
				box-sizing: border-box;
				ul{
					width:100%;
					li{
						position:relative;
						display:flex;
						width:100%;
						min-height:44px;
						box-sizing: border-box;
						span:nth-child(1){
							width:16px;
							height:16px;
							border:1px dashed rgba(65,179,243,1);
							border-radius: 50%;
							display:flex;
							align-items: center;
							justify-content: center;
							i{
								width:8px;
								height:8px;
								display:inline-block;
								border-radius: 50%;
								background:rgba(65,179,243,1);
							}
						}
						span:nth-child(2){
							width:77px;
							color:rgba(65,179,243,1);
							font-size:14px;
							margin-left:16px;
							display:inline-block;
							margin-top:2px;
							white-space: nowrap;
						}
						span:nth-child(3){
							display:inline-block;
							width:calc(100% - 140px);
							color:rgba(217,240,249,1);
							font-size:14px;
							margin-left:16px;
							
						}
						&:after{
							content:'';
							display:block;
							position:absolute;
							border-left:1px dashed rgba(65,179,243,1);
							width:2px;
							height:22px;
							top: 21px;
    						left: 8px;
						}
						&:last-child{
							&:after{
								height:0px;
							}
						}
					}
				}
			}
			.roadProject{
				width:100%;
				padding:6px 16px 0 16px;
				box-sizing: border-box;
				clear: both;
				ul{
					width:100%;
					background:rgba(59,150,210,0.15);
					box-sizing: border-box;
					padding:20px 14px 20px 14px;
					
					li{
						font-size:13px;
						color:rgba(98,178,232,1);
						line-height:22px;
						// list-style: disc;
						list-style:none;
						&:nth-child(1){
							font-size:15px;
							font-weight: bold;
							color:rgba(217,240,249,1);
							line-height:24px;
							margin-bottom:8px;
							list-style:none;
						}
						span{
							font-size:13px;
							color:#ffffff;
							white-space: nowrap;
						}
					} 
					.disc{
						position:relative;
						display:flex;
						&::before{
							content: '.';
							color:#62B2E8;
							font-weight: bold;
							font-size:20px;
							display:block;
							// width:20px;
							margin-right: 8px;
							line-height: 10px;
						}
					}
					.noafter{
						&::before{
							content: '';
							color:#62B2E8;
							font-weight: bold;
							font-size:20px;
							display:block;
							// width:20px;
							margin-right: 8px;
							margin-left:5px;
							line-height: 10px;
						}
					}
				}
			}
			.continue{
				width:100%;
				font-size:14px;
				color:rgba(98,178,232,1);
				text-align: center;
				margin-top:24px;
			}
			.judge{
				width:100%;
				height:auto;
				padding:24px 16px 0px 16px;
				box-sizing: border-box;
				ul{
					width:100%;
					display:flex;
					flex-warp:warp; /*CSS3样式，支持webkit，ms*/
					-ms-flex-wrap: wrap;/*IE9以及一下不支持*/
					-webkit-flex-wrap: wrap;
					li{
						width:25%;
						display:flex;
						flex-direction: column;
						align-items: center;
						margin-bottom:20px;
						.judgeImg{
							width:70px;
							height:70px;
							border:1px dashed rgba(65,179,243,1);
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							.imgContain{
								width:60px;
								height:60px;
								border-radius: 50%;
								background:rgba(65,179,243,1);
								display:flex;
								align-items: center;
								justify-content: center;
								img{
									width:100%;
									height:auto;
									display:block;
									border-radius: 50%;
								}
							}
						}
						.judgeName{
							font-size: 14px;
							font-weight:bold;
							color:rgba(65,179,243,1);
							margin-top:10px;
						}
						.judgeCompany{
							font-size:12px;
							color:rgba(255,255,255,0.6);
							margin-top:2px;
						}
						.judgePosition{
							font-size:12px;
							color:rgba(255,255,255,0.6);
							margin-top:2px;
						}
					}
				}
				.judgetext{
					width:100%;
					text-align: center;
					font-size:14px;
					color:rgba(98,178,232,1);
					margin-top:10px;
				}
				img{
					display:block;
					width:100%;
					height:auto;
				}
			}
			.series{
				width:100%;
				padding:25px 16px 0 16px;
				box-sizing: border-box;
				color:rgba(132,189,255,1);
				line-height:16px;
				.tableheader{
					height:30px;
					width:100%;
					display:flex;
					margin-bottom:1px;
					div{
						height:100%;
						background:rgba(59,150,210,0.15);
						font-size:12px;
						display:flex;
						align-items: center;
						&:nth-child(1){
							width:44px;
							margin-right: 1px;
							justify-content: center;
						}
						&:nth-child(2){
							padding-left:5px;
							padding-right:5px;
							box-sizing: border-box;
							width:calc(100% - 140px);
							margin-right: 1px;
						}
						&:nth-child(3){
							width:92px;
							justify-content: center;
						}
					}
				}
				.tableBody{
					height:52px;
					width:100%;
					display:flex;
					margin-bottom:1px;
					div{
						height:100%;
						background:rgba(59,150,210,0.15);
						font-size:12px;
						display:flex;
						align-items: center;
						&:nth-child(1){
							width:44px;
							margin-right: 1px;
							justify-content: center;
						}
						&:nth-child(2){
							padding-left:5px;
							padding-right:5px;
							box-sizing: border-box;
							width:calc(100% - 140px);
							margin-right: 1px;
						}
						&:nth-child(3){
							width:92px;
							justify-content: center;
							text-align: center;
						}
					}
				}
				.srecialColor{
					color:rgba(255,255,255,0.3);
				}
			}
			.committee{
				width:100%;
				padding:32px 24px 0 24px;
				box-sizing: border-box;
				color:rgba(98,178,232,0.8);
				line-height:22px;
				font-size:14px;
			}
			.signup{
				width:100%;
				margin-top:50px;
				padding:0 24px;
				box-sizing: border-box;
				ul{
					width:100%;
					display:flex;
					align-items: center;
					justify-content: space-between;
					height:80px;
					li{
						width:70px;
						height:100%;
						background:url('./img/db.png');
						background-size: cover;
						a{
							width:100%;
							height:100%;
							display:flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							font-size:13px;
							color:rgba(255,255,255,1);
							line-height:18px;
							text-decoration: none;
						}
					}
				}
			}
			.imgcontain{
				width:100%;
				padding:0 16px 0px 16px;
				margin-top:20px;
				box-sizing: border-box;
				img{
					width:100%;
					height:auto;
				}
			}
			.tableContain{
				width:100%;
				padding: 0 16px;
				box-sizing: border-box;
				margin-top:48px;
				.residue{
					width:100%;
					font-size:14px;
					color:#ffffff;
					display:flex;
					justify-content: center;
					margin-bottom: 20px;
				}
				.interestedUL{
					width:100%;
				}
				.interestedLi{
					width: 100%;
					height: 35px;
					display:flex;
					background:rgba(59,150,210,0.15);
					border-radius:2px;
					margin-bottom: 1px;
				} 
				.interestedLi:last-child{
					margin-bottom: none;
				}
				.interestedLi span{
					height: 100%;
					line-height: 35px;
					text-align: center;
					font-size:0px;
					color:rgba(255,255,255,0.6);
					overflow: hidden;/*超出部分隐藏*/
					white-space: nowrap;/*不换行*/
					text-overflow:ellipsis;/*超出部分文字以...显示*/
				}
				.interestedLi span:nth-child(1){
					width:10%;
					font-size:12px;
				}
				.interestedLi span:nth-child(2){
					width:20%;
					font-size:12px;
				}
				.interestedLi span:nth-child(3){
					width:20%;
					font-size:12px;
				}
				.interestedLi span:nth-child(4){
					width:20%;
					font-size:12px;
				}
				.interestedLi span:nth-child(5){
					width:30%;
					font-size:12px;
				}
			}
			.orgPeo{
				width:100%;
				padding:32px 16px 0 16px;
				height:auto;
				clear:both;
				box-sizing: border-box;
				img{
					display:block;
					width:100%;
					height:auto;
				}
			}
			.adressContain{
				width:100%;
				padding:20px 16px;
				box-sizing: border-box;
				.adress{
					width:100%;
					padding:20px;
					box-sizing: border-box;
					background:rgba(59,150,210,0.15);
					border-radius:4px;
					font-size:14px;
					color:rgba(217,240,249,1);
					line-height:20px;
					display:flex;
					flex-direction: column;
					span{
						&:nth-child(1){
							margin-bottom:5px;
						}
					}
					a{
						color:#41B3F3;
						text-decoration: none;
					}
				}
			}
			
		}
		.tosignup{
			width:100%;
			height:40px;
			background:rgba(1,79,125,0.95);
			color:#ffffff;
			font-size:14px;
			position:fixed;
			bottom:0;
			z-index: 10;
			display:flex;
			align-items: center;
			justify-content: center;
			max-width: 750px;
		}
		.fourTab{
			width:100%;
			max-width: 750px;
			height:40px;
			background:rgba(1,79,125,0.95);
			color:#ffffff;
			position:fixed;
			top:0;
			z-index:2;
			ul{
				width:100%;
				display:flex;
				li{
					width:25%;
					height:100%;
					border-right:1px solid rgba(2,8,22,0.15);
					a{
						width:100%;
						height:100%;
						color:#ffffff;
						display:flex;
						flex-direction:column;
						font-size: 12px;
						align-items: center;
						justify-content: center;
						text-decoration: none;
						span{
							&:nth-child(1){
								margin-top:2px;
							}
						}
					}
				}
			}
		}
	}
	@-webkit-keyframes transform {
		0% {
			-webkit-transform: rotateZ(0);
			transform: rotateZ(0)
		}

		100% {
			-webkit-transform: rotateZ(360deg);
			transform: rotateZ(360deg)
		}
	}

	@keyframes transform {
		0% {
			-webkit-transform: rotateZ(0);
			transform: rotateZ(0)
		}

		100% {
			-webkit-transform: rotateZ(360deg);
			transform: rotateZ(360deg)
		}
	}

	#bg-music {
		width: 0;
		height: 0;
		overflow: hidden;
		display: block;
		right: 0;
	}
	.airborne{
		display:flex;
		justify-content: center;
		font-size:12px;
		color:rgba(65,179,243,1);
		margin-bottom:16px;
	}
</style>
