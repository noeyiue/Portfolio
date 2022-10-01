import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <i className='bx bx-test-tube about_icon'></i>
            <h3 className="about_title">Member</h3>
            <span className="about_subtitle">Multimedia Analysis and Discovery LAB</span>
        </div>

        <div className="about_box">
            <i className='bx bx-stats about_icon'></i>
            <h3 className="about_title">Teacher Assistance</h3>
            <span className="about_subtitle">รายวิชาทฤษฎีความน่าจะเป็นสำหรับวิศวกรคอมพิวเตอร์</span>
        </div>

        <div className="about_box">
            <i className='bx bx-briefcase-alt about_icon'></i>
            <h3 className="about_title">Project</h3>
            <span className="about_subtitle">โครงการการสร้างฐานข้อมูลเอกสารทางการเงินด้วย Machine Vision</span>
        </div>
    </div>
  )
}

export default Info