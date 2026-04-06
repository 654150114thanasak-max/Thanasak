document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('dynamic-content');

    const pages = {
        home: `
            <div class="fade-in">
                <p class="greeting">สวัสดีครับ 👋</p>
                <h1 style="font-size: 2.6rem; margin-bottom: 20px; font-weight: 700;">ผมคือ <span class="text-gradient">ธนศักดิ์ กลิ่นมาลี</span></h1>
                <div class="card">
                    <p>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม ในฐานะ <strong>Software Developer / Designer</strong> ผมมุ่งมั่นที่จะพัฒนาทักษะและความรู้ใหม่ๆ อยู่เสมอ เพื่อสร้างสรรค์ผลงานที่ตอบโจทย์ผู้ใช้งานและทันสมัยที่สุดครับ</p>
                </div>
                <div style="margin-top: 30px;">
                    <span class="badge">React</span>
                    <span class="badge">JavaScript</span>
                    <span class="badge">UI/UX Design</span>
                    <span class="badge">Figma</span>
                    <span class="badge">Tailwind CSS</span>
                </div>
            </div>
        `,
        about: `
            <div class="fade-in">
                <p class="greeting">ข้อมูลส่วนตัว</p>
                <div class="card info-list">
                    <p><i class="fas fa-id-card" style="color:var(--vibrant-primary)"></i> <strong>ชื่อเล่น:</strong> กอล์ฟ (Golf)</p>
                    <p><i class="fas fa-birthday-cake" style="color:var(--vibrant-primary)"></i> <strong>วันเกิด:</strong> 28 พฤศจิกายน 2541</p>
                    <p><i class="fas fa-id-card" style="color:var(--vibrant-primary)"></i> <strong>อายุ:</strong> 28 ปี | <strong>สัญชาติ:</strong> ไทย</p>
                    <p><i class="fas fa-map-marker-alt" style="color:var(--vibrant-primary)"></i> ตำบลบ่อนอก อำเภอเมือง จังหวัดประจวบคีรีขันธ์ 77210</p>
                </div>
            </div>
        `,
        edu: `
            <div class="fade-in">
                <p class="greeting">การศึกษา</p>
                <div class="card" style="margin-bottom: 20px; border-left: 5px solid var(--vibrant-primary); padding-left: 35px;">
                    <h3 style="color: var(--vibrant-primary); font-size: 1.5rem;">คุรุศาสตร์บัณฑิต สาขาคอมพิวเตอร์</h3>
                    <p><strong>เกียรตินิยมอันดับ 2 (เกรด 3.50)</strong></p>
                    <p>มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
                <div class="card" style="border-left: 5px solid var(--vibrant-accent); padding-left: 35px;">
                    <h3 style="color: var(--vibrant-accent); font-size: 1.5rem;">ศิลปศาสตร์บัณฑิต สาขาการพัฒนาชุมชน</h3>
                    <p>เกรดเฉลี่ย 2.51</p>
                    <p>มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
            </div>
        `,
        port: `
            <div class="fade-in">
                <p class="greeting">แฟ้มสะสมงาน</p>
                <p style="color: var(--text-vibrant-dim);">(Projects & Contributions)</p>
                <div class="port-grid">
                    <div class="port-item"><img src="Images/work1.jpg" alt="Work 1"></div>
                    <div class="port-item"><img src="Images/work2.jpg" alt="Work 2"></div>
                    <div class="port-item"><img src="Images/work3.jpg" alt="Work 3"></div>
                    <div class="port-item"><img src="Images/work4.jpg" alt="Work 4"></div>
                    <div class="port-item"><img src="Images/work5.jpg" alt="Work 5"></div>
                    <div class="port-item"><img src="Images/work6.jpg" alt="Work 6"></div>
                    <div class="port-item"><img src="Images/work7.jpg" alt="Work 7"></div>
                    <div class="port-item"><img src="Images/work8.jpg" alt="Work 8"></div>
                </div>
            </div>
        `,
        contact: `
            <div class="fade-in">
                <p class="greeting">ติดต่อ</p>
                <div class="card contact-list">
                    <p><i class="fas fa-envelope"></i> <strong>Email:</strong> 654150114Thanasak@mail.com</p>
                    <p><i class="fas fa-phone-alt"></i> <strong>Phone:</strong> 080-0767-351</p>
                </div>
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <a href="mailto:654150114Thanasak@mail.com" style="text-decoration: none;" class="badge">Send Email</a>
                    <a href="tel:0800767351" style="text-decoration: none; background: rgba(255, 0, 127, 0.1); color: var(--vibrant-accent); border-color: rgba(255, 0, 127, 0.3);">Call Now</a>
                </div>
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

    // --- Modal System ---
    document.addEventListener('click', (e) => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");

        if (e.target.tagName === 'IMG' && e.target.closest('.port-item')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }

        if (e.target.classList.contains('close-modal') || e.target.id === 'imageModal') {
            modal.style.display = "none";
        }
    });

    // Initial Load
    changePage('home');
});
