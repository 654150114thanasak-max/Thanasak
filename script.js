/**
 * Thanasak Portfolio - Main JavaScript
 * จัดเรียงโค้ดใหม่: คงข้อมูลเดิมครบถ้วน + เพิ่มส่วนผลงานเด่น
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ประกาศตัวแปรอ้างอิง DOM Elements ---
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.querySelector('.content-area');
    const dynamicContent = document.getElementById('dynamic-content');
    const portBtn = document.getElementById("portBtn");
    const submenu = document.getElementById("portSubmenu");
    const arrow = portBtn ? portBtn.querySelector(".arrow") : null;

    // --- 2. คลังข้อมูลเนื้อหาแต่ละหน้า (ห้ามตัด/ห้ามลบ ข้อมูลเดิมอยู่ครบ) ---
    const pages = {
        // หน้าหลัก
        home: `
            <div class="fade-in">
                <p class="greeting">สวัสดีครับ 👋</p>
                <div class="card">
                    <p style="font-size: 1.2rem; letter-spacing: 0.5px;">ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม</p>
                </div>
            </div>
        `,
        // ข้อมูลส่วนตัว
        about: `
            <div class="fade-in">
                <p class="greeting">ข้อมูลส่วนตัว</p>
                <div class="card">
                    <p><strong>ชื่อ:</strong> นายธนศักดิ์ กลิ่นมาลี</p>
                    <p><strong>ชื่อเล่น:</strong> กอล์ฟ (Golf)</p>
                    <p><strong>วันเกิด:</strong> 28 พฤศจิกายน 2541</p>
                    <p><strong>สัญชาติ:</strong> ไทย | <strong>เชื้อชาติ:</strong> ไทย | <strong>ศาสนา:</strong> พุทธ</p>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid var(--glass-border-vibrant);">
                    <p><strong>ทักษะและความสามารถ:</strong></p>
                    <ul style="list-style: none; padding-left: 5px; margin-top: 12px;">
                        <li>• มีความอดทนและทำงานร่วมกับผู้อื่นได้อย่างดี</li>
                        <li>• มีความเป็นผู้นำและการทำงานภายใต้แรงกดดันได้ดี</li>
                        <li>• ใช้โปรแกรมพื้นฐานคอมพิวเตอร์ได้อย่างเชี่ยวชาญ</li>
                        <li>• สามารถเรียนรู้และพัฒนาตามคำแนะนำได้อย่างรวดเร็ว</li>
                    </ul>
                </div>
            </div>
        `,
        // การศึกษา
        edu: `
            <div class="fade-in">
                <p class="greeting">การศึกษา</p>
                <div class="card" style="border-left: 5px solid var(--vibrant-primary); margin-bottom: 25px;">
                    <p style="font-size: 1.1rem;"><strong>ปริญญาตรี : คุรุศาสตร์บัณฑิต</strong></p>
                    <p>สาขาคอมพิวเตอร์ | เกรดเฉลี่ย 3.50</p>
                    <p><strong style="color: var(--vibrant-primary);">เกียรตินิยมอันดับ 2</strong></p>
                    <p style="color: var(--text-vibrant-dim);">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
                <div class="card" style="border-left: 5px solid var(--vibrant-accent);">
                    <p style="font-size: 1.1rem;"><strong>ปริญญาตรี : ศิลปศาสตร์บัณฑิต</strong></p>
                    <p>สาขาการพัฒนาชุมชน | เกรดเฉลี่ย 2.51</p>
                    <p style="color: var(--text-vibrant-dim);">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
            </div>
        `,
        // ส่วนผลงานเด่น
        special_project: `
            <div class="fade-in">
                <p class="greeting">ผลงาน</p>
                <div class="port-grid">
                    <div class="port-item"><img src="Images/work.jpg"><p>รอใส่</p></div>
                    <div class="port-item"><img src="Images/work.jpg"><p>รอใส่</p></div>
                    <div class="port-item"><img src="Images/work.jpg"><p>รอใส่</p></div>
                </div>
            </div>
        `,
        // ข้อมูลติดต่อ
        contact: `
            <div class="fade-in">
                <p class="greeting">ติดต่อ</p>
                <div class="card">
                    <p style="margin-bottom: 10px;"><i class="fas fa-envelope" style="color: var(--vibrant-primary); width: 25px;"></i> <strong>Email:</strong> 654150114Thanasak@mail.com</p>
                    <p><i class="fas fa-phone" style="color: var(--vibrant-primary); width: 25px;"></i> <strong>Phone:</strong> 080-0767-351</p>
                </div>
            </div>
        `,
        // รายหมวดหมู่ใบประกาศ (Certificates)
        port1: `<div class="fade-in"><p class="greeting">เกษตรอัจฉริยะ</p><div class="port-grid"><div class="port-item"><img src="Images/work2.jpg"><p>เกษตรอัจฉริยะ 1</p></div><div class="port-item"><img src="Images/work3.jpg"><p>เกษตรอัจฉริยะ 2</p></div><div class="port-item"><img src="Images/work4.jpg"><p>เกษตรอัจฉริยะ 3</p></div></div></div>`,
        port2: `<div class="fade-in"><p class="greeting">CEFR</p><div class="port-grid"><div class="port-item"><img src="Images/work6.jpg"><p>เกียรติบัตร CEFR 1</p></div><div class="port-item"><img src="Images/work7.jpg"><p>เกียรติบัตร CEFR 2</p></div></div></div>`,
        port3: `<div class="fade-in"><p class="greeting">PBRU</p><div class="port-grid"><div class="port-item"><img src="Images/work1.jpg"><p>ผลงาน PBRU 1</p></div><div class="port-item"><img src="Images/work8.jpg"><p>ผลงาน PBRU 2</p></div></div></div>`,
        port4: `<div class="fade-in"><p class="greeting">วุฒิทางลูกเสือ</p><div class="port-grid"><div class="port-item"><img src="Images/work11.jpg"><p>เกียรติบัตรลูกเสือ 1</p></div><div class="port-item"><img src="Images/work12.jpg"><p>เกียรติบัตรลูกเสือ 2</p></div></div></div>`,
        port5: `<div class="fade-in"><p class="greeting">ฝึกประสบการณ์โรงเรียน</p><div class="port-grid"><div class="port-item"><img src="Images/work10.jpg"><p>ภาพการฝึกประสบการณ์</p></div></div></div>`
    };

    // --- 3. ฟังก์ชันสลับหน้า (Page Transition) ---
    function changePage(pageId) {
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            dynamicContent.innerHTML = pages[pageId] || pages['home'];
            contentArea.scrollTop = 0;
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 300);
    }

    // --- 4. จัดการเหตุการณ์คลิก (Event Listeners) ---

    // คลิกเมนูหลัก
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.id === "portBtn" || link.id === "downloadResume") return;

            e.preventDefault();
            const pageId = link.getAttribute('data-page');

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (submenu) submenu.classList.remove("show");
            if (arrow) arrow.classList.remove("rotate");

            changePage(pageId);
        });
    });

    // ปุ่มเปิด/ปิด เมนูใบประกาศ (Submenu)
    if (portBtn) {
        portBtn.addEventListener("click", (e) => {
            e.preventDefault();
            submenu.classList.toggle("show");
            if (arrow) arrow.classList.toggle("rotate");
        });
    }

    // คลิกเมนูย่อย (Sub-links)
    document.querySelectorAll(".sub-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const pageId = this.getAttribute("data-page");

            navLinks.forEach(l => l.classList.remove('active'));
            if (portBtn) portBtn.classList.add('active');

            changePage(pageId);
        });
    });

    // --- 5. ระบบ Modal ขยายรูปภาพ ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");

    document.addEventListener('click', (e) => {
        const portImg = e.target.closest('.port-item img');

        if (portImg) {
            modal.style.display = "flex";
            modalImg.src = portImg.src;
            document.body.style.overflow = 'hidden';
        }

        if (e.target.closest('#modalClose') || e.target.id === 'imageModal') {
            modal.style.display = "none";
            document.body.style.overflow = '';
        }
    });

    // --- 6. ระบบ Download Resume เป็น PDF ---
    const downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const resumeTemplate = `
                <div style="padding: 40px; font-family: 'Kanit', sans-serif; color: #333; line-height: 1.6;">
                    <div style="text-align: center; border-bottom: 2px solid #4facfe; padding-bottom: 20px;">
                        <h1 style="margin: 0;">ธนศักดิ์ กลิ่นมาลี</h1>
                        <p>ครูคอมพิวเตอร์ | 080-0767-351 | 654150114Thanasak@mail.com</p>
                    </div>
                    <div style="margin-top: 25px;">
                        <h3>ประวัติส่วนตัว</h3>
                        <p>วันเกิด: 28 พฤศจิกายน 2541</p>
                        <p>ทักษะ: ความอดทน, การทำงานร่วมกับผู้อื่น, ความเป็นผู้นำ, เรียนรู้งานไว</p>
                    </div>
                    <div style="margin-top: 25px;">
                        <h3>การศึกษา</h3>
                        <p><strong>คุรุศาสตร์บัณฑิต (คอมพิวเตอร์)</strong> - เกรด 3.50 เกียรตินิยมอันดับ 2</p>
                        <p><strong>ศิลปศาสตร์บัณฑิต (การพัฒนาชุมชน)</strong> - เกรด 2.51</p>
                    </div>
                </div>
            `;

            const options = {
                margin: 0.5,
                filename: 'Resume_Thanasak.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().from(resumeTemplate).set(options).save();
        });
    }

    // เริ่มต้นที่หน้า Home
    changePage('home');
});
