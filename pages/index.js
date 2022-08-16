import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <Carousel>
          <div>
            <img src="images/banner1.jpg" alt="广告一" />
          </div>
          <div>
            <img src="images/banner2.jpg" alt="广告一" />
          </div>
          <div>
            <img src="images/banner3.jpg" alt="广告一" />
          </div>
          <div>
            <img src="images/banner4.jpg" alt="广告一" />
          </div>
        </Carousel>
        <div className="container" style={{display:'none'}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="product_index">
                <div className="product_head" data-move-y="-30px">
                  <h2>企业资质</h2>
                  <p>Product display</p>
                </div>
                <div className="product_list">
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert1.png" className="img-thumbnail"
                        alt="行车记录仪 白色真爱版WDR宽动态 行车记录仪 白色真爱版WDR宽动态" />
                    </a>       
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert2.png" className="img-thumbnail" alt="PAPAGO行车记录仪1080P全高清" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert3.png" className="img-thumbnail" alt="任我游D588高清画质行车记录仪" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert4.png" className="img-thumbnail" alt="任我游 N568 行车记录仪" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert5.png" className="img-thumbnail" alt="爱国者蓝牙后视镜行车记录仪" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert6.png" className="img-thumbnail" alt="惠普HP F310行车记录仪 极地白" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert7.png" className="img-thumbnail" alt="东风A60专用DVD导航仪" />
                    </a>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/cert8.png" className="img-thumbnail" alt="钢铁侠DK-680A车载行车记录仪" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_index">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="about_head" data-move-y="-50px">
                  <h2>公司简介</h2>
                  <p>Company profile</p>
                </div>
                <div className="about_content" data-move-y="100px">
                  <div>
                    <img align="left" style={{height:'200px'}} src="images/about.png" alt="公司简介" />
                    <p className="about_contents">
                    湖南岳来岳好企业管理有限公司，旗下有湖南华洛建筑工程有限公司、益阳市广业建材有限公司、会同县广业建材有限公司、益阳东南混凝土有限公司、益阳鸿鑫实业有限公司、益阳市赫山区鸿鑫房地产开发有限公司，是一家集房地产开发、工程承建、建筑材料供应、施工等建筑业务全覆盖的企业。
                    </p>
                  </div>
                  <Link href='/introduction'><a className="btn btn-info" style={{marginTop:'40px'}} role="button">查看详细</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="case_box">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="case_head" data-move-y="-30px">
                  <h2>成功案例</h2>
                  <p>Successful case</p>
                </div>
                <div className="case_list">
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="200px">
                    <a>
                      <img src="images/case1.png" className="opacity_img" alt="怀化会同两江一岸" />
                    </a>
                    <p className="product_title"><a title="商业照明案例">怀化会同两江一岸（承建）</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="200px">
                    <a>
                      <img src="images/case2.png" className="opacity_img" alt="宁乡好益多乳业产业园（商砼）" />
                    </a>
                    <p className="product_title"><a title="家居照明案例">宁乡好益多乳业产业园（商砼）</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="200px">
                    <a>
                      <img src="images/case3.png" className="opacity_img" alt="长沙方特东方神话（沥青）" />
                    </a>
                    <p className="product_title"><a title="教育照明案例">长沙方特东方神话（沥青）</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="200px">
                    <a>
                      <img src="images/case4.png" className="opacity_img" alt="教育照明案例" />
                    </a>
                    <p className="product_title"><a title="教育照明案例">宁乡碧桂园月湖湾（沥青）</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </Layout>
  )
}
