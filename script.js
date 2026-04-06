document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('dynamic-content');

    const pages = {
        home: `
            <p class="greeting">สวัสดีครับ</p>
            <div class="card">
                <p>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม <strong>ธนศักดิ์ กลิ่นมาลี</strong> ผมมุ่งมั่นพัฒนาทักษะด้าน Software และงานออกแบบอย่างต่อเนื่องครับ</p>
            </div>
        `,
        about: `
            <p class="greeting">ข้อมูลส่วนตัว</p>
            <div class="card">
                <p><strong>ชื่อ-นามสกุล:</strong> นายธนศักดิ์ กลิ่นมาลี</p>
                <p><strong>ทักษะ:</strong> HTML, CSS, JavaScript, GitHub, Photoshop</p>
            </div>
        `,
        edu: `
            <p class="greeting">การศึกษา</p>
            <div class="card">
                <p><i class="fas fa-university"></i> <strong>ระดับปริญญาตรี:</strong> มหาวิทยาลัยราชภัฏเพชรบุรี</p>
            </div>
        `,
        port: `
            <p class="greeting">แฟ้มสะสมงาน</p>
            <p style="color: #94a3b8; margin-bottom: 10px;">(คลิกที่รูปเพื่อขยายใหญ่)</p>
            <div class="port-grid">
                <div class="port-item"><img src="Images/work1.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work2.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work3.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work4.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work5.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work6.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work7.jpg" class="zoom-target"></div>
                <div class="port-item"><img src="Images/work8.jpg" class="zoom-target"></div>
            </div>
        `,
        contact: `
            <p class="greeting">ติดต่อ</p>
            <div class="card">
                <p><i class="fas fa-envelope"></i> <strong>Email:</strong> thansak.k@email.com</p>
                <p><i class="fab fa-facebook"></i> <strong>Facebook:</strong> Thansak Klinmalee</p>
            </div>
        `
    };

    function changePage(pageId) {
        contentArea.style.opacity = '0';
        setTimeout(() => {
            contentArea.innerHTML = pages[pageId] || pages['home'];
            contentArea.style.opacity = '1';
        }, 200);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            changePage(pageId);
        });
    });

    // --- ระบบคลิกดูรูปขยาย (ปรับปรุงใหม่) ---
    document.addEventListener('click', (e) => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");

        // 1. ตรวจสอบการคลิกที่รูปภาพ (ใช้ class zoom-target เพื่อความแม่นยำ)
        if (e.target.classList.contains('zoom-target')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
            document.body.style.overflow = "hidden"; // ปิดการ scroll หน้าเว็บหลัก
        }

        // 2. ตรวจสอบการคลิกเพื่อปิด (กดปุ่ม X หรือ คลิกพื้นที่สีดำข้างนอกรูป)
        if (e.target.classList.contains('close-modal') || e.target.id === 'imageModal') {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // เปิดการ scroll หน้าเว็บตามปกติ
        }
    });

    changePage('home');
});
