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
				<p><strong>ชื่อเล่น:</strong> กอล์ฟ</p>
				<p><strong>วันเกิด:</strong> 28 พฤศจิกายน 2541</p>
				<p><strong> </strong> อายุ 28 ปี สัญชาติ ไทย เชื่อชาติ ไทย ศาสนา พุทธ</p>
            </div>
        `,
        edu: `
            <p class="greeting">การศึกษา</p>
            <div class="card">
                <p><i class="fas fa-university"></i> <strong>ระดับปริญญาตรี:</strong> ศิลปศาสตร์บัณฑิต 
                        สาขาการพัฒนาชุมชนเกรดเฉลี่ย 2.51 มหาวิทยาลัยราชภัฏเพชรบุรี</p>
		<p><i class="fas fa-university"></i> <strong>ระดับปริญญาตรี:
			</strong>คุรุศาสตร์บัณฑิต
                        สาขา คอมพิวเตอร์เกรดเฉลี่ย 3.50 เกียรตินิยมอันดับ 2 
			มหาวิทยาลัยราชภัฏเพชรบุรี </p>

            </div>
        `,
        port: `
            <p class="greeting">แฟ้มสะสมงาน</p>
            <p style="color: #94a3b8; margin-bottom: 10px;">(CER)</p>
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
        `,
        contact: `
            <p class="greeting">ติดต่อ</p>
            <div class="card">
                <p><i class="fas fa-envelope"></i> <strong>Email:</strong> 654150114Thanasak@mail.com</p>
                <p><i class="fas fa-map-pin"></i> <strong>Address:</strong> 51 หมู่ 5 ตำบลบ่อนอก อำเภอเมือง จังหวัดประจวบคีรีขันธ์ 77210 </p>
		<p><i class="fas fa-phone-alt"></i> <strong>Phone:</strong> 080-0767-351</p>
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

    // --- ระบบคลิกดูรูปขยาย ---
    document.addEventListener('click', (e) => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");

        // ถ้าคลิกที่รูปในคลาส port-item
        if (e.target.tagName === 'IMG' && e.target.closest('.port-item')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }

        // ถ้าคลิกที่ปุ่มปิด หรือพื้นที่ว่าง ให้ปิด Modal
        if (e.target.classList.contains('close-modal') || e.target.id === 'imageModal') {
            modal.style.display = "none";
        }
    });

    changePage('home');
});
