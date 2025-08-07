document.addEventListener('DOMContentLoaded', function () {
    // 导航
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            // 清除现有下拉菜单
            const existing = this.querySelector('.dropdown-menu');
            if (existing) existing.remove();
            if (this.id == '1') {
                const dropdown = document.createElement('div');
                dropdown.className = 'dropdown-menu';
                dropdown.innerHTML = `
                    <a href="#">机构简介</a>
                    <a href="#">机构设置</a>
                `;
                this.appendChild(dropdown);
                dropdown.style.display = 'block';
            }
            if (this.id == '2') {
                const dropdown = document.createElement('div');
                dropdown.className = 'dropdown-menu';
                dropdown.innerHTML = `
                    <a href="#">新闻</a>
                    <a href="#">通知公告</a>
                `;
                this.appendChild(dropdown);
                dropdown.style.display = 'block';
            }
            if (this.id == '3') {
                const dropdown = document.createElement('div');
                dropdown.className = 'dropdown-menu';
                dropdown.innerHTML = `
                    <a href="#">教学科研平台</a>
                    <a href="#">仪器设备管理</a>
                    <a href="#">大型仪器共享</a>
                    <a href="#">实验室安全</a>
                `;
                this.appendChild(dropdown);
                dropdown.style.display = 'block';
            }
            if (this.id == '4') {
                const dropdown = document.createElement('div');
                dropdown.className = 'dropdown-menu';
                dropdown.innerHTML = `
                    <a href="#">教学实验管理</a>
                    <a href="#">科研平台管理</a>
                    <a href="#">实验室安全</a>
                    <a href="#">设备采购与管理</a>
                    <a href="#">大型仪器设备</a>
                    <a href="#">实验技术人员</a>
                `;
                this.appendChild(dropdown);
                dropdown.style.display = 'block';
            }
            if (this.id == '5') {
                const dropdown = document.createElement('div');
                dropdown.className = 'dropdown-menu';
                dropdown.innerHTML = `
                    <a href="#">设备采购</a>
                    <a href="#">设备维修</a>
                    <a href="#">大型仪器</a>
                    <a href="#">实验室安全</a>
                    <a href="#">实验人员</a>
                    <a href="#">实验平台</a>
                    <a href="#">统计数据报表</a>
                    <a href="#">其他</a>
                `;
                this.appendChild(dropdown);
                dropdown.style.display = 'block';
            }
        });
        item.addEventListener('mouseleave', function () {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) dropdown.remove();
        });
    });

    // 大轮播
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
    // 自动播放
    let autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);
    // 按钮控制
    document.querySelector('.prev-btn').addEventListener('click', () => {
        clearInterval(autoPlay);
        showSlide(currentSlide - 1);
        autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);
    });
    document.querySelector('.next-btn').addEventListener('click', () => {
        clearInterval(autoPlay);
        showSlide(currentSlide + 1);
        autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);
    });
});