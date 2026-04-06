document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('dynamic-content');

    const pages = {
        home: `
            <p class="greeting">สวัสดีครับ !</p>
            <div class="info-grid">
                <strong>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม</strong><br>
                ผมชื่อ ธนศักดิ์ กลิ่นมาลี กำลังพัฒนาทักษะด้าน Web Development 
                และชอบสร้างสรรค์ประสบการณ์ใหม่ๆ บนหน้าเว็บครับ
            </div>
            <button class="action-btn">ดาวน์โหลด Resume</button>
        `,
        about: `
            <p class="greeting">ข้อมูลส่วนตัว</p>
            <div class="info-grid">
                <p><strong>ชื่อ-นามสกุล:</strong> นายธนศักดิ์ กลิ่นมาลี</p>
                <p><strong>ชื่อเล่น:</strong> (ใส่ชื่อเล่น)</p>
                <p><strong>เป้าหมาย:</strong> อยากเป็น Full-stack Developer ที่เก่งกาจ!</p>
            </div>
        `,
        edu: `
            <p class="greeting">การศึกษา</p>
            <div class="info-grid">
                <p><strong>มหาวิทยาลัย:</strong> ระบุชื่อสถานศึกษาของคุณ</p>
                <p><strong>สาขา:</strong> ระบุคณะหรือสาขาวิชา</p>
                <p><strong>ปีที่จบ:</strong> 25XX</p>
            </div>
        `,
        port: `
            <p class="greeting">ผลงานของผม</p>
            <div class="info-grid">
                <p>กำลังรวบรวมโปรเจกต์ที่น่าสนใจ...</p>
                <ul>
                    <li>Project A: Website Portfolio</li>
                    <li>Project B: UI Design Concept</li>
                </ul>
            </div>
        `,
        contact: `
            <p class="greeting">ข้อมูลการติดต่อ</p>
            <div class="info-grid">
                <p><i class="fas fa-envelope"></i> Email: thansak.k@email.com</p>
                <p><i class="fas fa-phone"></i> เบอร์โทร: 0xx-xxx-xxxx</p>
                <p><i class="fab fa-github"></i> GitHub: github.com/thansak</p>
            </div>
        `
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');

            // เปลี่ยนสถานะ Active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // เอฟเฟกต์เปลี่ยนเนื้อหา
            contentArea.style.opacity = '0';
            contentArea.style.transform = 'translateY(10px)';

            setTimeout(() => {
                contentArea.innerHTML = pages[pageId];
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 300);
        });
    });
});
