import * as React from "react"
import { Helmet } from "react-helmet"
import Something from "../images/login.svg";
import './style.css'

const IndexPage = () => {
  return (
    <main className="main-page">
      
      <section className='form-login'>
        <Something />
        <div className="warap-form">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Khóa học lập trình bán chuyên</title>
          </Helmet>
          <div className="line">
          </div>
          <div>
            <h2>Đăng ký học</h2>
            <form className="form-dang-ky-hoc"  data-netlify="true">
              <fieldset>
                <div className="mt-2 shadow-sm">
                  <input tabIndex="0" id="email" name="email" type="email" placeholder="Email" />
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <input id="phoneNumber" name="phoneNumber" type="number" placeholder="Số điện thoại" />
                </div>
              </fieldset>
              <label className="label" for="day" htmlFor="day">Chọn ngày học/ 1 buôi/ tuần/ Tối 19h- 21h /:</label>
              <fieldset>
                <div>
                  <select name="day" id="day">
                    <option value="tue">Thứ 3</option>
                    <option value="thu">Thứ 5</option>
                    <option value="sat">Thứ 7</option>
                    <option value="sun">Chủ nhật</option>
                  </select>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <textarea id="text" name="text" type="text" placeholder="Ghi chú" />
                </div>
              </fieldset>
              <footer>
                <button type="submit" className="sc-bdfBwQ sc-gsTCUz gNQBYK frpQLB">Đăng ký</button>
              </footer>
            </form>
          </div>
        </div>

      </section>
      <section className='text-decreption'>
        <div className="sc-hKgILt bQgATU">
          <header>
            <h1>Hello there !!</h1>
            <p>Mình giới thiệu về khóa học:</p>
          </header>
          <ul>
            <li>
              <h2>Mục đích:</h2>
              <p>+ Mang đến cho các bạn học sinh trải nghiệm như là một lập trình viên chuyên nghiệp</p>
              <p>+ Cung cấp kiến thứ đủ để các bạn thực hiện một trang web</p>
              <p>+ Hướng nghiệp và chia sẽ kinh nghiệm học tập làm việc</p>
            </li>
            <li>
              <h2>Chương trình học:</h2>
              <p>+ Tổng quan về các ngành kỵ thuật và ngành cntt nói riêng, Các sự kiện gần đây ở Đà Nẵng và Miền Trung</p>
              <p>+ Html5, css3, Js,( tùy chọn học thêm python )</p>
              <p>+ Bài tập liên tục theo tiến độ học</p>
              <p>+ Cuối khóa làm bài tập theo nhóm, quản lý dự án với git/ jira</p>
            </li>
            <li>
              <h2>Cách học:</h2>
              <p>+ Chương trình học 3 tháng/ mỗi tuần 1 buổi</p>
              <p>+ Học online chủ yếu, offline 1 tháng/ lần để review kết quả</p>
              <p>+ Tinh thân học thì mình đóng vai trò teamlead, hướng dẫn các bạn tự học tự làm là chính</p>
            </li>
            <li>
              <h2>Giảng viên, học phí:</h2>
              <p>+ Mình hiện đang là teamleader một công ty cntt tại Đà Nẵng</p>
              <p>+ Học phí: 3 tháng=400k, 1 tháng=150k, 1 buổi=40k</p>
              <p>+ Giảm 50% học phí cho các bạn nữ</p>
              <p>+ Đóng lúc nào cũng được, các bạn khó khăn thì ib mình trực tiếp</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
