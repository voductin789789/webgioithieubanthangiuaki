// main-portfolio.js - Interactive functions for Portfolio (Dark Modern Glassmorphism)

// 1. Theme Toggle (Dark & Light Mode)
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
    const savedTheme = localStorage.getItem('user-theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeBtn.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('user-theme', 'dark');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('user-theme', 'light');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// 2. Navigation Active State on Scroll (ScrollSpy)
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 3. Project Filter Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 4. Modal Project Details
const modalOverlay = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBody = document.getElementById('modalContent');
const modalClose = document.getElementById('modalCloseBtn');

const projectsData = {
    'remote-desktop': {
        title: 'Remote Desktop Application',
        course: 'Lập trình Mạng Socket TCP/IP',
        desc: 'Ứng dụng điều khiển máy tính từ xa hoạt động theo mô hình Client - Server qua TCP/IP Socket. Hệ thống truyền phát luồng ảnh chụp màn hình nén và đồng bộ các sự kiện chuột, bàn phím thời gian thực.',
        tech: ['Java SE 21', 'Socket TCP', 'Robot API', 'Multithreading', 'Buffer Compression'],
        highlights: [
            'Kiến trúc Client - Server bắt tay qua ServerSocket cổng chỉ định.',
            'Tách riêng luồng (Thread) nhận ảnh màn hình và luồng gửi sự kiện điều khiển chuột/phím để tránh nghẽn I/O.',
            'Áp dụng thuật toán nén ảnh JPEG và bộ đệm Byte Stream Buffer giúp khung hình truyền mượt mà không trễ lag.'
        ]
    },
    'metro-management': {
        title: 'Hệ Thống Quản Lý Tuyến Metro',
        course: 'Lập trình Hướng đối tượng Java',
        desc: 'Phần mềm quản lý thông tin các trạm ga, lịch trình vận hành và kiểm soát thông tin hành khách theo mô hình phân tầng hướng đối tượng chuẩn OOP.',
        tech: ['Java Core', 'OOP (Inheritance, Polymorphism)', 'File Stream I/O', 'Regex Validator', 'Swing UI'],
        highlights: [
            'Áp dụng trọn vẹn 4 tính chất OOP: Kế thừa, Đóng gói, Đa hình và Trừu tượng.',
            'Xử lý cấu trúc dữ liệu Generic Collections (ArrayList, HashMap) và lưu trữ dữ liệu an toàn ra tệp tin.',
            'Thiết kế giao diện trực quan, kiểm soát lỗi nhập liệu chặt chẽ bằng Exception Handling.'
        ]
    },
    'group-portal': {
        title: 'Hệ Thống Portfolio & Cổng Thông Tin Nhóm 9',
        course: 'Lập trình Web Căn Bản',
        desc: 'Trang cá nhân hiện đại phong cách Dark Glassmorphism kết hợp cổng điều phối nhóm 9 sinh viên. Tuân thủ chuẩn Semantic HTML5, CSS layout hiện đại và tương tác JavaScript thuần.',
        tech: ['HTML5 Semantic', 'CSS Grid & Flexbox', 'JavaScript ES6+', 'Local Storage', 'Glassmorphism UI'],
        highlights: [
            'Giao diện Dark Mode đồng bộ cực đẹp với trang Cổng nhóm 9, hiệu ứng Ambient Gradient & Glassmorphism cao cấp.',
            'Tích hợp chế độ Dark/Light Mode lưu trạng thái người dùng qua localStorage.',
            'Bộ lọc dự án linh hoạt, Popup chi tiết và Form liên hệ có validate dữ liệu JavaScript an toàn.'
        ]
    }
};

function openProjectModal(key) {
    const data = projectsData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    let html = `<div style="margin-bottom: 16px;"><span class="course-badge">${data.course}</span></div>`;
    html += `<h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">CÔNG NGHỆ ÁP DỤNG:</h4>`;
    html += `<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px;">`;
    data.tech.forEach(t => {
        html += `<span class="tech-tag-pill" style="font-size: 0.8rem; padding: 4px 12px;">${t}</span>`;
    });
    html += `</div>`;
    html += `<h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">ĐIỂM NỔI BẬT & BÀI HỌC THỰC TIỄN:</h4>`;
    html += `<ul style="padding-left: 20px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.8;">`;
    data.highlights.forEach(h => {
        html += `<li>${h}</li>`;
    });
    html += `</ul>`;

    modalBody.innerHTML = html;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeProjectModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});

// 5. Contact Form Validation with JavaScript
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameGroup = document.getElementById('groupName');
        const emailGroup = document.getElementById('groupEmail');
        const subjectGroup = document.getElementById('groupSubject');
        const messageGroup = document.getElementById('groupMessage');
        const successAlert = document.getElementById('formSuccessAlert');

        const nameInput = document.getElementById('senderName');
        const emailInput = document.getElementById('senderEmail');
        const subjectInput = document.getElementById('emailSubject');
        const messageInput = document.getElementById('messageBody');

        let isValid = true;

        // Reset error state
        [nameGroup, emailGroup, subjectGroup, messageGroup].forEach(g => g.classList.remove('has-error'));
        successAlert.style.display = 'none';

        // Validate Name
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            nameGroup.classList.add('has-error');
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailGroup.classList.add('has-error');
            isValid = false;
        }

        // Validate Subject
        if (!subjectInput.value.trim()) {
            subjectGroup.classList.add('has-error');
            isValid = false;
        }

        // Validate Message
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            messageGroup.classList.add('has-error');
            isValid = false;
        }

        if (isValid) {
            successAlert.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                successAlert.style.display = 'none';
            }, 6000);
        }
    });
}
