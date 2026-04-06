document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('dynamic-content');

    // 1. ข้อมูลหน้าต่างๆ
    const pages = {
        home: `
            <p class="greeting">สวัสดีครับ</p>
            <div class="card">
                <p>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม <strong>ธนศักดิ์ กลิ่นมาลี</strong> ผมมีความมุ่งมั่นที่จะพัฒนาทักษะด้าน Software และการออกแบบให้ดียิ่งขึ้นในทุกๆ วัน</p>
            </div>
        `,
        about: `
            <p class="greeting">ข้อมูลส่วนตัว</p>
            <div class="card">
                <p><strong>ชื่อ-นามสกุล:</strong> นายธนศักดิ์ กลิ่นมาลี</p>
                <p><strong>ตำแหน่ง:</strong> Software Developer / Designer</p>
                <p><strong>ทักษะ:</strong> HTML, CSS, JavaScript, GitHub, Photoshop</p>
            </div>
        `,
        edu: `
            <p class="greeting">การศึกษา</p>
            <div class="card">
                <p><i class="fas fa-university"></i> <strong>ระดับปริญญาตรี:</strong> มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                <p><i class="fas fa-school"></i> <strong>ระดับมัธยมศึกษา:</strong> โรงเรียนที่ท่านจบการศึกษา</p>
            </div>
        `,
        port: `
            <p class="greeting">แฟ้มสะสมงาน</p>
            <p style="color: #94a3b8; margin-bottom: 15px;">(คลิกที่รูปเพื่อดูขนาดใหญ่)</p>
            <div class="port-grid">
                <div class="port-item"><img src="Images/work1.jpg" alt="ใบประกาศ 1"></div>
                <div class="port-item"><img src="Images/work2.jpg" alt="ใบประกาศ 2"></div>
                <div class="port-item"><img src="Images/work3.jpg" alt="ใบประกาศ 3"></div>
                <div class="port-item"><img src="Images/work4.jpg" alt="ใบประกาศ 4"></div>
                <div class="port-item"><img src="Images/work5.jpg" alt="ใบประกาศ 5"></div>
                <div class="port-item"><img src="Images/work6.jpg" alt="ใบประกาศ 6"></div>
                <div class="port-item"><img src="Images/work7.jpg" alt="ใบประกาศ 7"></div>
            </div>
        `,
        contact: `
            <p class="greeting">ติดต่อ</p>
            <div class="card">
                <p><i class="fas fa-envelope"></i> <strong>Email:</strong> thansak.k@email.com</p>
                <p><i class="fab fa-facebook"></i> <strong>Facebook:</strong> Thansak Klinmalee</p>
                <p><i class="fas fa-map-marker-alt"></i> <strong>ที่อยู่:</strong> จังหวัดเพชรบุรี, ประเทศไทย</p>
            </div>
        `
    };

    // 2. ฟังก์ชันเปลี่ยนหน้า
    function changePage(pageId) {
        contentArea.style.opacity = '0';
        setTimeout(() => {
            contentArea.innerHTML = pages[pageId] || pages['home'];
            contentArea.style.opacity = '1';
        }, 200);
    }

    // 3. ระบบเมนูคลิก
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            changePage(pageId);
        });
    });

    // 4. ระบบคลิกดูรูปขยาย (Image Modal)
    document.addEventListener('click', (e) => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");

        // ถ้าคลิกที่รูปภาพในหน้า Portfolio
        if (e.target.tagName === 'IMG' && e.target.closest('.port-item')) {
            modal.style.display = "flex"; // ใช้ flex เพื่อจัดกลางหน้าจอ
            modalImg.src = e.target.src;
        }

        // ถ้าคลิกที่ปุ่มปิด หรือ พื้นที่ว่างข้างนอกรูป ให้ปิดหน้าต่างขยาย
        if (e.target.classList.contains('close-modal') || e.target.id === 'imageModal') {
            modal.style.display = "none";
        }
    });

    // โหลดหน้าแรกตอนเริ่มต้น
    changePage('home');
});
