/*
function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
//不使用配置文件请注释点上面代码
*/
//星光依旧灿烂，激情仍然燃烧。因为有梦想，所以我存在。你在你的领域里不惜青春，我在我的道路上不知疲倦。
$(document).ready(function() {
    // 确保配置文件加载完成后再执行
    if (typeof config !== 'undefined' && config) {
        initializePageContent();
    } else {
        // 如果config未定义，尝试等待一段时间再检查
        setTimeout(function() {
            if (typeof config !== 'undefined' && config) {
                initializePageContent();
            } else {
                console.error("配置文件未成功加载，请检查config.js文件是否存在且格式正确");
            }
        }, 500);
    }
    
    function initializePageContent() {
        $(".name").html(config.name);
        $(".sex").html(config.sex);
        $(".age").html(config.age);
        $(".phone").html(config.phone);
        $(".email").html(config.email);
        $(".address").html(config.address);
        $(".qq").html(config.qq);
        $(".log").html(config.log);
        $(".self-intro").html(config.welcome);
        $(".me").html(config.about);
        $(".for-work").html(config.excpect_work);
        $(".profile-page .page-header").css("background-image", "url(" + config.url[0] + ")");
        $(".myphoto").attr("src", config.url[1]);
        $(".portfolio-section").css({
            "background": "url(" + config.url[2] + ") no-repeat center top",
            "margin-top": "30px",
            "padding-top": "50px",
            "text-align": "center !important",
            "background-attachment": "relative !important",
            "background-position": "center center !important",
            "min-height": "800px",
            "width": "100%",
            "background-size": "100%",
            "background-size": "cover",
            "position": "relative !important"
        });
        $(".others-section").css({
            "background-image": "url(" + config.url[3] + ")",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "background-size": "contain"   // 与 CSS 中的值保持一致
        });
        $(".desc").html(config.skills_description);
        //------E-------


        if (config.skills) {
            for (let i = 0; i < config.skills.length; i++) {
                let skill_name = config.skills[i][0];
                let num = config.skills[i][1];
                let color = config.skills[i][2];
                let s = "<div class=\"progress_bar\">\n" +
                    "    <div class=\"pro-bar\">\n" +
                    "        <small class=\"progress_bar_title\">\n" +
                    skill_name +
                    "            <span class=\"progress_number\">%</span>\n" +
                    "        </small>\n" +
                    "        <span class=\"progress-bar-inner p-a\"\n" +
                    "              style=\"background-color:" + color + "; width:" + num + "%;\" data-value=\"" + num + "\"\n" +
                    "              data-percentage-value=\"" + num + "\"></span>\n" +
                    "    </div>\n" +
                    "</div>";
                $(".skill-body").append(s)
            }
        }

        /*
        let row_i = 0;
        if (config.portfolio) {
            for (let i = 0; i < config.portfolio.length; i++) {
                if (i % 3 == 0) {
                    $(".portfolio-section-main-container").append("<div class=\"row\"></div>");
                    row_i++;
                }
                let e = $(".portfolio-section-main-container .row").eq(row_i - 1);
                let img = config.portfolio[i][0];
                let url = config.portfolio[i][1];
                let projectName = config.portfolio[i][2];
                let brief = config.portfolio[i][3];
                e.append("<div class=\"col-md-4\">\n" +
                    "    <div class=\"porfolio-image img-raised\" data-aos=\"fade-up\"\n" +
                    "         data-aos-anchor-placement=\"top-bottom\">\n" +
                    "        <a href=\"" + url + "\" title=\"点击查看详细信息\">\n" +
                    "            <figure class=\"portfolio-section-main\">\n" +
                    "                <img src=\"" + img + "\" alt=\"Image\" />\n" +
                    "                <figcaption>\n" +
                    "                    <div class=\"h4\">" + projectName + "</div>\n" +
                    "                    <p>" + brief + "</p>\n" +
                    "                </figcaption>\n" +
                    "            </figure>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>");
            }
        }
        */  

        // 渲染社会工作与实践（带图片轮播的卡片）
        // 渲染社会工作与实践（增强版：分类 + 排序）
        /*
        if (config.socialWorks && config.socialWorks.length) {
            const container = document.getElementById('social-work-list');
            if (!container) return;
            
            // 1. 在容器上方动态创建筛选栏（如果不存在）
            let toolbar = document.querySelector('.social-toolbar');
            if (!toolbar) {
                toolbar = document.createElement('div');
                toolbar.className = 'honors-toolbar social-toolbar';
                toolbar.style.marginTop = '20px';
                toolbar.style.marginBottom = '30px';
                toolbar.innerHTML = `
                    <div class="honors-categories">
                        <span class="category-btn active" data-cat="all">全部</span>
                        <span class="category-btn" data-cat="社会工作">社会工作</span>
                        <span class="category-btn" data-cat="志愿实践">志愿实践</span>
                    </div>
                    <div class="honors-views">
                        <select class="sort-select" id="socialSortSelect">
                            <option value="date-desc">时间：最新优先</option>
                            <option value="date-asc">时间：最早优先</option>
                        </select>
                    </div>
                `;
                // 插入到容器之前
                container.parentNode.insertBefore(toolbar, container);
            }
            
            // 2. 辅助函数：从 period 字符串中解析起始日期（格式如 "2023.09"）
            function getStartDateFromPeriod(period) {
                const match = period.match(/(\d{4})\.(\d{2})/);
                if (match) {
                    return new Date(parseInt(match[1]), parseInt(match[2]) - 1, 1);
                }
                return new Date(0);
            }
            
            // 3. 渲染函数（根据当前分类和排序）
            let currentCat = 'all';
            let currentSort = 'date-desc';
            
            function renderSocialWorks() {
                let filtered = currentCat === 'all' 
                    ? [...config.socialWorks] 
                    : config.socialWorks.filter(item => item.type === currentCat);
                
                if (currentSort === 'date-asc') {
                    filtered.sort((a, b) => getStartDateFromPeriod(a.period) - getStartDateFromPeriod(b.period));
                } else {
                    filtered.sort((a, b) => getStartDateFromPeriod(b.period) - getStartDateFromPeriod(a.period));
                }
                
                container.innerHTML = '';
                filtered.forEach((item, idx) => {
                    const carouselId = `socialCarousel_${idx}_${Date.now()}`;
                    let indicatorsHtml = '';
                    let innerHtml = '';
                    if (item.images && item.images.length) {
                        item.images.forEach((img, i) => {
                            indicatorsHtml += `<li data-target="#${carouselId}" data-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></li>`;
                            innerHtml += `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                                            <img class="d-block w-100" src="${img}" alt="活动图片 ${i+1}">
                                        </div>`;
                        });
                    } else {
                        innerHtml = `<div class="carousel-item active">
                                        <div class="no-image-placeholder">暂无图片</div>
                                    </div>`;
                    }
                    
                    const carouselHtml = `
                        <div id="${carouselId}" class="carousel slide" data-ride="carousel" data-interval="4000">
                            <ol class="carousel-indicators">${indicatorsHtml}</ol>
                            <div class="carousel-inner">${innerHtml}</div>
                            <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    `;
                    
                    const cardHtml = `
                        <div class="social-card" data-type="${item.type}" data-period="${item.period}">
                            <div class="social-card-inner">
                                <div class="social-carousel">${carouselHtml}</div>
                                <div class="social-text">
                                    <div class="social-content">
                                        <h3>${escapeHtml(item.title)}</h3>
                                        <p class="social-period">${escapeHtml(item.period)}</p>
                                        <div class="social-desc">${item.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML('beforeend', cardHtml);
                });
                
                // 初始化所有轮播
                $('.carousel').carousel({ interval: 4000, wrap: true });
            }
            
            // 简单的防XSS
            function escapeHtml(str) {
                if (!str) return '';
                return str.replace(/[&<>]/g, function(m) {
                    if (m === '&') return '&amp;';
                    if (m === '<') return '&lt;';
                    if (m === '>') return '&gt;';
                    return m;
                });
            }
            
            // 绑定筛选栏事件
            const catBtns = toolbar.querySelectorAll('.category-btn');
            catBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    catBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentCat = this.getAttribute('data-cat');
                    renderSocialWorks();
                });
            });
            
            const sortSelect = toolbar.querySelector('#socialSortSelect');
            if (sortSelect) {
                sortSelect.addEventListener('change', function(e) {
                    currentSort = e.target.value;
                    renderSocialWorks();
                });
            }
            
            // 初始渲染
            renderSocialWorks();
        }*/
        if (config.icon) {
            for (let i = 0; i < config.icon.length; i++) {
                let img = config.icon[i][0];
                let url = config.icon[i][1];
                let desc = config.icon[i][2];
                $(".icon-insert").append(
                    "<a class=\"my-tooltip\" href=\"" + url + "\" title=\"访问我的社交平台\">\n" +
                    "    <img src=\"" + img + "\" alt=\"\">\n" +
                    "    <span class=\"my-tooltiptext\">" + desc + "</span>\n" +
                    "</a>"
                );
            }
        }

        // 动态生成教育背景内容
        if (config.education) {
            $(".education-box").empty();
            for (let i = 0; i < config.education.length; i++) {
                let eduInfo = config.education[i];
                let university = eduInfo.university || "";
                let major_year = eduInfo.major_year || "";
                let ranking_gpa = eduInfo.ranking_gpa || [];
                let courses = eduInfo.courses || [];

                let leftHtml = `
                    <div class="education-header">
                        <h2 class="university-name">${university}</h2>
                        <p class="major-year">${major_year}</p>
                        <div class="ranking-gpa">
                            ${ranking_gpa.map(g => `<span><i class="fas fa-${g.icon}"></i> ${g.text}</span>`).join('')}
                        </div>
                    </div>
                    <div class="main-courses">
                        <h5>主要课程</h5>
                        <div class="course-grid">
                            ${courses.map(c => `
                                <div class="course-item">
                                    <span class="course-name">${c.name}</span>
                                    <span class="course-score">${c.score}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

                // 直接使用单列布局，不再包含右侧自评框
                $(".education-box").append(leftHtml);
            }
        }

        // 动态生成科研经历内容
        if (config.research) {
            // 清空默认的科研经历内容
            $(".research-section .container").find('.research-card').remove();

            for (let i = 0; i < config.research.length; i++) {
                let research = config.research[i];
                let title = research.title || "";
                let period_institution = research.period_institution || "";
                let responsibilities = research.responsibilities || [];
                let innovations = research.innovations || [];
                let achievements = research.achievements || [];
                let tags = research.tags || [];
                let image = research.image || "./images/default-research.jpg";

                let researchCardHtml = `
                <div class="research-card" data-aos="fade-up" data-aos-offset="100">
                    <div class="research-card-inner">
                        <div class="research-image">
                            <img src="${image}" alt="${title}" onerror="this.src='https://via.placeholder.com/200x200?text=Research+Image'">
                        </div>
                        <div class="research-content">
                            <h3 class="research-title">${title}</h3>
                            <p class="research-meta">${period_institution}</p>`;

                if (responsibilities.length > 0) {
                    researchCardHtml += `
                    <div class="research-section-block">
                        <h4>项目职责</h4>
                        <ul>`;
                    for (let j = 0; j < responsibilities.length; j++) {
                        researchCardHtml += `<li>${responsibilities[j]}</li>`;
                    }
                    researchCardHtml += `</ul></div>`;
                }

                if (innovations.length > 0) {
                    researchCardHtml += `
                    <div class="research-section-block">
                        <h4>个人贡献</h4>
                        <ul>`;
                    for (let j = 0; j < innovations.length; j++) {
                        researchCardHtml += `<li>${innovations[j]}</li>`;
                    }
                    researchCardHtml += `</ul></div>`;
                }

                if (achievements.length > 0) {
                    researchCardHtml += `
                    <div class="research-section-block">
                        <h4>项目成果</h4>
                        <ul>`;
                    for (let j = 0; j < achievements.length; j++) {
                        researchCardHtml += `<li>${achievements[j]}</li>`;
                    }
                    researchCardHtml += `</ul></div>`;
                }

                if (tags.length > 0) {
                    researchCardHtml += `
                    <div class="research-tags">`;
                    for (let j = 0; j < tags.length; j++) {
                        researchCardHtml += `<span class="tag">${tags[j]}</span>`;
                    }
                    researchCardHtml += `</div>`;
                }

                researchCardHtml += `</div></div></div>`;

                $(".research-section .container").append(researchCardHtml);
            }
        }
    }  // 这个大括号闭合了 if(config) 块

    var h;

    $(window).resize(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
    })

    progress();
    if ($(window).scrollTop() >= $(".page-header").height() - $(".page-header .bg-primary").height()) {
        $(".page-header .bg-primary").css("cssText", "background-color:rgb(55 65 178)!important");
    }
    $(window).scroll(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
        if ($(window).scrollTop() >= h) {
            $(".page-header .bg-primary").css("cssText", "background-color:rgb(55 65 178)!important");
        } else {
            $(".page-header .bg-primary").css("cssText", "background-color:rgba(0,0,0,0.20)!important");
        }


        if ($(".skill-section .card").hasClass("aos-animate")) {
            $(".progress-bar-inner").addClass("p-a");
            progress();
        } else {
            $(".progress-bar-inner").removeClass("p-a");
        }

    });

    function progress() {
        var progress = $(".progress-bar-inner");
        progress.each(function (i) {
            var data = $(this).attr('data-value');
            $(this).prev().find("span").html(data + "%");
        });
    }

    $(".send-btn").on("click", mailsend);

    function mailsend() {
        var subject = $(".subject").val();
        var content = $(".message").val();
        content = content.replace(new RegExp(' ', 'g'), '%20');

        content = content.replace(new RegExp('\n', 'g'), '%0d%0a');

        // if (confirm("你确定要向" + who + "放送邮件吗?") == true) {
        //     location="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容";
        // }
        location = "mailto:" + config.email + "?subject=" + subject + "&body=" + content;
    }




    // ---- 座右铭字缓出效果 -----
    var mottoArrs = config.motto || [];
    var text = mottoArrs.length > 0 ? mottoArrs[0] : "自在摇曳，生生不息。";
    $(".page-header .motto").html(""); 
    var length = text.length;
    let index = 0;
    // $.ajaxSettings.async = false;
    // $.getJSON("./motto.json", function (data) {
    //     mottoArrs = data;
    // })
    var e1 = setInterval(insWords, 150);
    var e2 = 0;

    function insWords() {
        if (index <= length + 1 && index >= 0) {
            $(".page-header .motto").append(text[index]);
        }
        index++;
        if (index > length) {
            index += 50;
            e2 = setInterval(delWords, 50);
            clearInterval(e1);
        }
    }

    function delWords() {
        if (index <= length && index >= 0) {
            let shower = text.substr(0, index);
            $(".page-header .motto").html(shower);
        }
        index--;
        if (index < 0) {
            index = -5;
            let i = Math.floor(mottoArrs.length * Math.random());
            // 【优化】防止随机到和上一句完全一样的（如果数组长度>1）
            if (mottoArrs.length > 1 && mottoArrs[i] === text) {
                i = (i + 1) % mottoArrs.length;
            }
            text = mottoArrs[i];
            length = text.length;
            e1 = setInterval(insWords, 150);
            clearInterval(e2);
        }

    }

    // ----- END ------


    //--- 绑定按钮特效和文字淡入淡出 ---
    $(".self-intro").fadeIn(3000);
    $(".hvr-bounce-to-right").fadeIn(3000);

    // --- 插入标签框 ---
    var tagContainer = $('<div class="tag-container"></div>');

    var tags = [
        { text: "中共预备党员", icon: "flag" },
        { text: "河北省保定市", icon: "map-marker-alt" },
        { text: "东北大学", icon: "university" },
        { text: "计算机科学与技术", icon: "code" }
    ];

    // 创建两行容器
    var row1 = $('<div class="tag-row"></div>');
    var row2 = $('<div class="tag-row"></div>');

    tags.forEach(function(tag, index) {
        var $element;
        // 判断是否为"东北大学"，则是创建链接元素
        if (tag.text === "东北大学") {
            $element = $('<a>', {
                href: 'https://baike.baidu.com/item/%E4%B8%9C%E5%8C%97%E5%A4%A7%E5%AD%A6/18014',
                target: '_blank',
                rel: 'noopener noreferrer',
                class: 'tag-box'
            });
        } else {
            $element = $('<span>', { class: 'tag-box' });
        }

        var icon = $('<i class="fas fa-' + tag.icon + '"></i>');
        $element.append(icon).append(' ' + tag.text);

        if (index < 2) {
            row1.append($element);
        } else {
            row2.append($element);
        }
    });

    // 将两行加入容器
    tagContainer.append(row1).append(row2);

    // 插入到 .content-box 内部，位于 .motto 下方
    $('.page-header .content-box').append(tagContainer);
    //----END---
});