import Layout from "../components/layout";
import Script from 'next/script'

export default function Home() {
  return (
    <Layout>
      <Script strategy="beforeInteractive" src="/js/bxslider.min.js"></Script>
      <Script strategy="afterInteractive" src="/js/home.js"></Script>
      <Script strategy="afterInteractive" src='/js/jia.js'></Script>
      <div>
        <div className="flash">
          <ul className="bxslider">
            <li><a><img src="images/53007d7931975.jpg" alt="广告一" /></a></li>
            <li><a><img src="images/5300811240d99.jpg" alt="广告二" /></a></li>
          </ul>
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
                    <img align="left" src="images/about.png" alt="公司简介" />
                    <p className="about_contents">
                    湖南岳来岳好企业管理有限公司，旗下有湖南华洛建筑工程有限公司、益阳市广业建材有限公司、会同县广业建材有限公司、益阳东南混凝土有限公司、益阳鸿鑫实业有限公司、益阳市赫山区鸿鑫房地产开发有限公司，是一家集房地产开发、工程承建、建筑材料供应、施工等建筑业务全覆盖的企业。
                    </p>
                  </div>
                  <a className="btn btn-info" role="button">查看详细</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "none" }} className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="product_index">
                <div className="product_head" data-move-y="-30px">
                  <h2>产品中心</h2>
                  <p>Product display</p>
                </div>
                <div className="product_list">
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c196f0537.png" className="img-thumbnail"
                        alt="行车记录仪 白色真爱版WDR宽动态 行车记录仪 白色真爱版WDR宽动态" />
                    </a>
                    <p className="product_title"><a 
                      title="行车记录仪 白色真爱版WDR宽动态 行车记录仪 白色真爱版WDR宽动态">行车记录仪 白色真爱版WDR宽动态 </a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c3850b71b.jpg" className="img-thumbnail" alt="PAPAGO行车记录仪1080P全高清" />
                    </a>
                    <p className="product_title"><a 
                      title="PAPAGO行车记录仪1080P全高清">PAPAGO行车记录仪1080P全高</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300ca7e29f63.jpg" className="img-thumbnail" alt="任我游D588高清画质行车记录仪" />
                    </a>
                    <p className="product_title"><a 
                      title="任我游D588高清画质行车记录仪">任我游D588高清画质行车记录仪</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300cd8b487ab.jpg" className="img-thumbnail" alt="任我游 N568 行车记录仪" />
                    </a>
                    <p className="product_title"><a title="任我游 N568 行车记录仪">任我游 N568 行车记录仪</a>
                    </p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c62e98968.jpg" className="img-thumbnail" alt="爱国者蓝牙后视镜行车记录仪" />
                    </a>
                    <p className="product_title"><a title="爱国者蓝牙后视镜行车记录仪">爱国者蓝牙后视镜行车记录仪</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c769af79e.jpg" className="img-thumbnail" alt="惠普HP F310行车记录仪 极地白" />
                    </a>
                    <p className="product_title"><a title="惠普HP F310行车记录仪 极地白">惠普HP F310行车记录仪
                      极地白</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c8cb76417.jpg" className="img-thumbnail" alt="东风A60专用DVD导航仪" />
                    </a>
                    <p className="product_title"><a title="东风A60专用DVD导航仪">东风A60专用DVD导航仪</a></p>
                  </div>
                  <div className="col-sm-4 col-md-3 col-mm-6 product_img" data-move-y="220px">
                    <a >
                      <img src="images/5300c942ec82e.jpg" className="img-thumbnail" alt="钢铁侠DK-680A车载行车记录仪" />
                    </a>
                    <p className="product_title"><a 
                      title="钢铁侠DK-680A车载行车记录仪">钢铁侠DK-680A车载行车记录仪</a></p>
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
