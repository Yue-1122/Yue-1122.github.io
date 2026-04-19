var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "张炜玥",
    sex: "女",
    age: "21",
    phone: "17733202115",
    email: "202312412@stu.neuq.edu.cn",
    address: "现居河北省保定市",
    qq: "504068331",
    log: "Manjusaka",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "自在摇曳，生生不息。",
        "心存希冀，目有繁星；追光而遇，沐光而行。",
        "向下扎根，向上生花。",
        "等春风得意，等时间嘉许。",
        "允许一切发生，做个勇敢的人。"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "",

    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    // 在 config 对象中添加
    selfEvaluation: "我具备扎实的计算机专业基础，热爱技术并乐于钻研。在科研中勇于创新，在社会工作中锻炼了组织协调能力。我始终保持积极进取的态度，善于团队协作，能够快速适应新环境，并追求在Java/Go后端开发领域不断深耕。",

    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    // config.js 中的 socialWorks 部分
    socialWorks: [
        {
            title: "校易班学生工作站视觉设计部干事",
            period: "2023.09 - 2024.09",
            description: "<ul><li>系统学习PS、秀米、拍照技巧、公文写作</li><li>累计制作活动海报12份，活动宣传banner8份</li><li>参与校级迎新、毕业季等大型活动的视觉设计支持</li></ul>",
            type: "社会工作",
            images: [
                "./images/social/design1.jpg",
                "./images/social/design2.jpg",
                "./images/social/design3.jpg"
            ]
        },
        {
            title: "校易班学生工作站影像设计部副部长",
            period: "2024.09 - 2025.09",
            description: "<ul><li>负责组织部门培训，累计开展PS、摄影等技能培训6场</li><li>审核活动海报和banner共计30余件</li><li>统筹校级活动拍摄任务，协调人员分工</li></ul>",
            type: "社会工作",
            images: [
                "./images/social/image1.jpg",
                "./images/social/image2.jpg",
                "./images/social/image3.jpg"
            ]
        },
        {
            title: "计算机科学与技术2301班团支部书记",
            period: "2024.09 - 至今",
            description: "<ul><li>落实校、院团委下发的各项任务，组织主题团日活动10+场</li><li>开展特色团日活动，如“红色剧本杀”、“代码助农”创意团课</li><li>所在团支部荣获2024年度五四红旗团支部</li></ul>",
            type: "社会工作",
            images: [
                "./images/social/league1.jpg",
                "./images/social/league2.jpg",
                "./images/social/league3.jpg"
            ]
        },
        {
            title: "政府部门实习（寒假实践）",
            period: "2024.01 - 2024.02",
            description: "<ul><li>负责工作文件的接收、整理和回稿，累计处理公文80余份</li><li>参与下乡家访活动，走访困难家庭12户，协助记录民情</li><li>负责县级大型活动的拍照和新闻稿撰写，发布县级融媒体新闻2篇</li></ul>",
            type: "志愿实践",
            images: [
                "./images/social/gov1.jpg",
                "./images/social/gov2.jpg",
                "./images/social/gov3.jpg"
            ]
        },
        {
            title: "红色旅游文化资源调研（团队负责人）",
            period: "2024.08",
            description: "<ul><li>赴河北省保定市阜平县开展“红色旅游文化资源”调研</li><li>走访晋察冀边区革命纪念馆等5处红色遗址，采访当地居民30余人</li><li>撰写调研报告1.2万字，提出数字化保护建议，获学院优秀实践团队</li></ul>",
            type: "志愿实践",
            images: [
                "./images/social/red1.jpg",
                "./images/social/red2.jpg",
                "./images/social/red3.jpg"
            ]
        },
        {
            title: "计算机科学与技术2405班辅导员助理",
            period: "2024.09 - 2024.12",
            description: "<ul><li>组织开展“破冰”主题班会、班干部选举班会，帮助新生快速融入集体</li><li>给予新生学业、生活方面的指导，累计答疑80余人次</li><li>协助辅导员完成班级信息统计、贫困生认定等工作</li></ul>",
            type: "社会工作",
            images: [
                "./images/social/assistant1.jpg",
                "./images/social/assistant2.jpg",
                "./images/social/assistant3.jpg"
            ]
        },
        {
            title: "燕赵薪火红色文化调研团（团队负责人）",
            period: "2025.07",
            description: "<ul><li>赴河北省石家庄市开展抗日战争胜利80周年纪念调研</li><li>参观西柏坡纪念馆、华北军区烈士陵园等，录制微团课3部</li><li>团队获评校级重点实践团队，调研报告被学院推荐参评省级优秀成果</li></ul>",
            type: "志愿实践",
            images: [
                "./images/social/yanzhao1.jpg",
                "./images/social/yanzhao2.jpg",
                "./images/social/yanzhao3.jpg"
            ]
        },
        {
            title: "计算机与通信工程学院学生第四党支部预备委员",
            period: "2025.04 - 至今",
            description: "<ul><li>组织10+场特色党日活动，包括“代码传承红色基因”编程马拉松</li><li>协助支部书记完成党员发展材料整理、会议记录等工作</li><li>策划“党员先锋岗”学业帮扶活动，覆盖低年级学生50余人</li></ul>",
            type: "社会工作",
            images: [
                "./images/social/party1.jpg",
                "./images/social/party2.jpg",
                "./images/social/party3.jpg"
            ]
        },
        {
            title: "云支教活动（线上支教）",
            period: "2024.08",
            description: "<ul><li>参与“一起云支教”专项活动，对接山区小学生开展线上辅导</li><li>完成20课时教学，涵盖趣味英语、编程启蒙等内容</li><li>获得全国大学生“返家乡”社会实践专项活动志愿者证书</li></ul>",
            type: "志愿实践",
            images: [
                "./images/social/cloud1.jpg",
                "./images/social/cloud2.jpg",
                "./images/social/cloud3.jpg"
            ]
        }
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/neuqbg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ],

     /**
     * 在这里填写教育背景信息
     * 每个对象包含：
     * - university: 学校名称
     * - major_year: 专业和时间
     * - ranking_gpa: 排名和GPA信息，每个元素包含icon和text
     * - courses: 课程列表，每个元素包含name和score
     */
    education: [
        {
            university: "东北大学",
            major_year: "计算机科学与技术 | 2023.09 - 至今",
            ranking_gpa: [
                { icon: "trophy", text: "专业排名：6/196" },
                { icon: "star", text: "GPA：4.20/5.00" }
            ],
            courses: [
                { name: "高等数学", score: "99" },
                { name: "概率论与数理统计", score: "99" },
                { name: "软件工程", score: "98" },
                { name: "电子技术基础", score: "97" },
                { name: "计算机组成原理", score: "96" },
                { name: "汇编语言程序设计", score: "96" },
                { name: "数据库原理", score: "96" },
                { name: "计算机网络", score: "95" },
                { name: "电路原理", score: "95" },
                { name: "离散数学", score: "94" },
                { name: "Java程序设计", score: "94" },
                { name: "C++程序设计", score: "92" }
            ]
        }
    ],
    abilityMatrix: [
        {
            category: "算法模型与研发",
            skills: ["目标检测/超分重建", "深度学习框架(PyTorch)", "模型轻量化与部署"]
        },
        {
            category: "工程实践与工具",
            skills: ["Java/Go后端开发", "Linux服务器运维", "Git协作", "Docker基础"]
        },
        {
            category: "学术研究与写作",
            skills: ["论文撰写(LaTeX)", "科研绘图(Origin/Visio)", "专利申报", "文献管理(Zotero)"]
        },
        {
            category: "数据分析与处理",
            skills: ["Python(Pandas/NumPy)", "数据可视化", "SQL数据库", "机器学习基础"]
        },
        {
            category: "团队协作与管理",
            skills: ["项目统筹", "跨部门沟通", "活动组织", "新生辅导"]
        },
        {
            category: "创新能力与素养",
            skills: ["问题建模", "方案设计", "算法优化", "竞赛经验(数学建模等)"]
        }
    ],

    /**
     * 在这里填写科研经历信息
     * 每个对象包含:
     * - title: 项目标题
     * - period_institution: 时间和机构
     * - responsibilities: 项目职责列表
     * - innovations: 技术创新列表
     * - achievements: 项目成果列表
     * - tags: 技术标签列表
     * - image: 项目图片链接
     */
    research: [
        {
            title: "基于 ROS2 的动态目标检测与跟踪系统",
            period_institution: "2025.03 - 2025.06 | 非核心成员",
            responsibilities: [
                "针对动态目标感知场景中单帧检测不稳定、实时性不足的问题，基于ROS2框架完成从视觉解算到弹道解算的全链路算法开发",
                "通过PnP测距算法结合相机内参解算目标三维坐标；构建9维状态空间的扩展卡尔曼滤波（EKF），融合位置、速度、偏航角实现动态预测与噪声抑制",
                "提出最近邻匹配与多阈值筛选结合策略，建立含空气阻力的弹道解算模型，采用二分法迭代求解最优发射角度"
            ],
            innovations: [
                "将EKF与PnP结合，实现动态目标的高精度三维定位与状态估计",
                "设计多阈值筛选策略，有效滤除误检目标，提升跟踪稳定性",
                "建立含空气阻力的弹道解算模型，通过二分法快速收敛至最优发射角"
            ],
            achievements: [
                "系统时延控制在20ms以内，目标跟踪成功率超过90%",
                "完整实现ROS2节点通信、算法集成与实车验证"
            ],
            tags: ["ROS2", "EKF", "PnP", "目标跟踪", "C++"],
            image: "./images/rese/1.png"
        },
        {
            title: "中小城市情感陪伴机器人需求分析与用户决策模型",
            period_institution: "2024.12 - 2025.06 | 核心成员",
            responsibilities: [
                "针对传统回归方法难以解析空巢老人情感陪伴需求因果路径的问题，构建多维度用户需求分析体系",
                "设计并采集以秦皇岛市为样本的有效问卷1023份，使用Python完成数据清洗与预处理",
                "通过因子分析提取功能型、心理型、展示型三类潜变量，引入结构方程模型量化因果路径，构建二元Logistic回归模型识别显著影响特征"
            ],
            innovations: [
                "参与问卷设计与发放，回收有效样本并进行数据清洗",
                "使用 Python 进行描述性统计和可视化分析，辅助因子提取",
                "协助完成结构方程模型的参数调试与结果验证"
            ],
            achievements: [
                "KMO=0.913，累计解释方差88.2%；SEM拟合指标优良（χ²/df=1.221，GFI=0.927，RMSEA=0.022）",
                "成功识别影响需求的6个显著特征，为产品设计提供数据支撑"
            ],
            tags: ["Python", "SEM", "因子分析", "Logistic回归", "数据分析"],
            image: "./images/rese/2.png"
        },
        {
            title: "基于非线性最小二乘反演的碳化硅外延层厚度求解",
            period_institution: "2025.09 - 2025.11 | 第一完成人",
            responsibilities: [
                "针对红外干涉测量外延层厚度时存在的噪声干扰与级数分配模糊问题，设计双光束干涉反演算法",
                "运用Savitzky-Golay滤波、多尺度极值点检测和RANSAC鲁棒回归对干涉光谱进行预处理",
                "建立基于Fabry-Perot公式的非线性最小二乘反演模型，采用Levenberg-Marquardt算法求解最优厚度"
            ],
            innovations: [
                "提出双光束干涉模型与多光束干涉模型的判别方法，验证碳化硅数据适用简洁的双光束模型",
                "引入逆方差加权融合策略，综合不同入射角下的测量结果提高精度",
                "将RANSAC用于干涉光谱的极值点鲁棒拟合，有效抑制离群噪声"
            ],
            achievements: [
                "在10°/15°入射角下测得厚度8.07/8.27 μm，经逆方差加权融合得8.168±0.094 μm",
                "成功判定硅晶圆片存在多光束干涉并求得厚度4.6 μm"
            ],
            tags: ["Matlab", "非线性最小二乘", "Levenberg-Marquardt", "光谱分析", "信号处理"],
            image: "./images/rese/3.png"
        }
    ]

}
