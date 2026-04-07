document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.querySelector('.content-area');
    const dynamicContent = document.getElementById('dynamic-content');

    const portBtn = document.getElementById("portBtn");
    const submenu = document.getElementById("portSubmenu");
    const arrow = portBtn ? portBtn.querySelector(".arrow") : null;

    const pages = {
        home: `
            <div class="fade-in">
                <p class="greeting">สวัสดีครับ 👋</p>
                <div class="card">
                    <p>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม</p>
                </div>
            </div>
        `,
        about: `
            <div class="fade-in">
                <p class="greeting">ข้อมูลส่วนตัว</p>
                <div class="card">
                    <p><strong>ชื่อ:</strong> นายธนศักดิ์ กลิ่นมาลี (Golf)</p>
                    <p><strong>ชื่อเล่น:</strong> กอล์ฟ (Golf)</p>
                    <p><strong>วันเกิด:</strong> 28 พฤศจิกายน 2541</p>
                    <p><strong>สัญชาติ:</strong> ไทย </p>
                    <p><strong>เชื้อชาติ:</strong> ไทย </p>
                    <p><strong>ศาสนา:</strong> พุทธ </p>
                    <p><strong>ทักษะ และความาสามรถ:</strong> มีความอดทน และทำงานร่วมกับผู้อื่นได้อย่างดี มีความเป็นผู้นำ ใช้โปรแกรมพื้นฐานคอมพิวเตอร์ได้อย่างดี การทำงานภายใต้แรงกดดันได้ดี  สามารถเรียนรู้และพัฒนาตามคำแนะนำ </p>
                </div>
            </div>
        `,
        edu: `
            <div class="fade-in">
                <p class="greeting">การศึกษา</p>
                <div class="card" style="border-left: 5px solid var(--vibrant-primary);">
                    <p><strong>ปริญาตรี : คุรุศาสตร์บัณฑิต</strong></p>
                    <p>สาขา คอมพิวเตอร์</p>
                    <p>เกรดเฉลี่ยน 3.50</p>
                    <p>เกียรตินิยมอันดับ 2</p>
                    <p style="color:var(--vibrant-primary)">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
                <div class="card" style="margin-top:20px; border-left: 5px solid var(--vibrant-accent);">
                    <p><strong>ปริญาตรี : ศิลปศาสตร์บัณฑิต</strong></p>
                    <p>สาขาการพัฒนาชุมชน</p>
                    <p>เกรดเฉลี่ย 2.51</p>
                    <p style="color:var(--vibrant-accent)">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
            </div>
        `,
        port: `
            <div class="fade-in">
                <p class="greeting">แฟ้มสะสมงาน</p>
      
        `,
        contact: `
            <div class="fade-in">
                <p class="greeting">ติดต่อ</p>
                <div class="card">
                    <p><strong>Email:</strong> 654150114Thanasak@mail.com</p>
                    <p><strong>Phone:</strong> 080-0767-351</p>
                </div>
            </div>
        `,

        // =========================
        // 🔥 พื้นที่ผลงานย่อย (ใส่รูปเองตรงนี้)
        // =========================

        port1: `
        <div class="fade-in">
            <p class="greeting"> เกษตรอัจฉริยะ </p>

            <div class="port-grid">

                <!-- 🔽 ใส่รูปตรงนี้ -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work2.jpg"></div>
                    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

                <!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work3.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

		<!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work4.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>


            </div>
        </div>
        `,

        port2: `
        <div class="fade-in">
            <p class="greeting">ผลงานที่ 2</p>

            <div class="port-grid">

		<!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work6.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

		<!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work7.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

            </div>
        </div>
        `,

        port3: `
        <div class="fade-in">
            <p class="greeting">PBRU</p>

            <div class="port-grid">

		<!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work1.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

		<!-- 🔽 ใส่เพิ่ม -->
                <div class="port-item">
                    <div class="port-item"><img src="Images/work5.jpg"></div>
		    <p style="margin-top:8px;">คำอธิบายรูป</p>
                </div>

            </div>
        </div>
        `
    };

    function changePage(pageId) {
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            dynamicContent.innerHTML = pages[pageId] || pages['home'];
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 300);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.id === "portBtn") return;
            if(link.classList.contains('active')) return;
            
            const pageId = link.getAttribute('data-page');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            changePage(pageId);
        });
    });

    if (portBtn) {
        portBtn.addEventListener("click", function (e) {
            e.preventDefault();
            submenu.classList.toggle("show");
            if (arrow) arrow.classList.toggle("rotate");
        });
    }

    document.querySelectorAll(".sub-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pageId = this.getAttribute("data-page");
            changePage(pageId);
            navLinks.forEach(l => l.classList.remove('active'));
        });
    });

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");

    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.port-item')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
            document.body.style.overflow = 'hidden';
        }
        if (e.target.closest('#modalClose') || e.target.id === 'imageModal') {
            modal.style.display = "none";
            document.body.style.overflow = '';
        }
    });

    changePage('home');
});
