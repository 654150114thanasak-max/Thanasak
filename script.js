document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('dynamic-content');

    const pages = {
        home: `
            <div class="fade-in">
                <p class="greeting">สวัสดีครับ 👋</p>
                <div class="card">
                    <p>ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม ในฐานะ <strong>Software Developer / Designer</strong></p>
                </div>
            </div>
        `,
        about: `
            <div class="fade-in">
                <p class="greeting">ข้อมูลส่วนตัว</p>
                <div class="card">
		         <p><strong>ชื่อ:</strong>นาย ธนศักดิ์ กลิ่นมาลี</p>
                    <p><strong>ชื่อเล่น:</strong> กอล์ฟ (Golf)</p>
                    <p><strong>วันเกิด:</strong> 28 พฤศจิกายน 2541</p>
                    <p><strong>สัญชาติ:</strong> สัญชาติ ไทย เชื่อชาติ ไทย ศาสนา พุทธ </p>
            </div>
        `,
        edu: `
            <div class="fade-in">
                <p class="greeting">การศึกษา</p>
                <div class="card" style="margin-bottom: 20px; border-left: 5px solid var(--vibrant-primary);">
                    <p><strong>ปริญาตรี : คุรุศาสตร์บัณฑิต</strong></p>
                    <p>สาขา คอมพิวเตอร์</p>
                    <p>เกรดเฉลี่ยน 3.50</p>
                    <p>เกียรตินิยมอันดับ 2</p>
                    <p style="color: var(--vibrant-primary);">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
                <div class="card" style="border-left: 5px solid var(--vibrant-accent);">
                    <p><strong>ปริญาตรี : ศิลปศาสตร์บัณฑิต</strong></p>
                    <p>สาขาการพัฒนาชุมชน</p>
                    <p>เกรดเฉลี่ย 2.51</p>
                    <p style="color: var(--vibrant-accent);">มหาวิทยาลัยราชภัฏเพชรบุรี</p>
                </div>
            </div>
        `,
        port: `
            <div class="fade-in">
                <p class="greeting">แฟ้มสะสมงาน</p>
                <div class="port-grid">
                    <div class="port-item"><img src="Images/work1.jpg"></div>
                    <div class="port-item"><img src="Images/work2.jpg"></div>
                    <div class="port-item"><img src="Images/work3.jpg"></div>
                    <div class="port-item"><img src="Images/work4.jpg"></div>
		        <div class="port-item"><img src="Images/work5.jpg"></div>
 					<div class="port-item"><img src="Images/work6.jpg"></div>
 					<div class="port-item"><img src="Images/work7.jpg"></div>
		        <div class="port-item"><img src="Images/work8.jpg"></div>
                </div>
            </div>
        `,
        contact: `
            <div class="fade-in">
                <p class="greeting">ติดต่อ</p>
                <div class="card">
                    <p><strong>Email:</strong> 654150114Thanasak@mail.com</p>
                    <p><strong>Phone:</strong> 080-0767-351</p>
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

    // Modal System: เปิดเมื่อคลิกรูป ปิดเมื่อคลิก x หรือ พื้นหลัง
    document.addEventListener('click', (e) => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");

        if (e.target.tagName === 'IMG' && e.target.closest('.port-item')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }

        if (e.target.closest('#modalClose') || e.target.id === 'imageModal') {
            modal.style.display = "none";
        }
    });

    changePage('home');
});
