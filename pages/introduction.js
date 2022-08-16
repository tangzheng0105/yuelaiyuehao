import Layout from "../components/layout";
import Container from "../components/container";

export default function Introduction() {
    return (<Layout>
        <Container>
            <div className="list_box">
                <h2 className="left_h">公司简介</h2>
                <div className="contents">
                    湖南岳来岳好企业管理有限公司<br /><br />
                    湖南华洛建筑工程有限公司：成立于2017年，房屋建筑施工总承包二级资质，市政公用工程施工总承包三级资质。部分案例有：益阳消防队项目、中建五局三公司长沙市治大院人防工程项目、益阳东部新区站所路项目等。<br /><br />
                    益阳市广业建材有限公司：成立于2016年，主要生产沥青混凝土及摊铺劳务，是安全生产标准化三级企业。部分案例有：益阳319国道、益阳周立波故居、宁乡华强大道、宁乡美宜佳物流园等。<br /><br />
                    会同广业建材有限公司：成立于2017年，主要生产沥青混凝土及摊铺劳务，被评为先进集体。部分案例有：怀化城南路延长线、G209会同绕城公路等。<br /><br />
                    益阳东南混凝土有限公司：成立于2015年，主要生产商品混凝土，取得了ISO9001:2015、ISO14001:2015、ISO45001:2018标准体系认证，是安全生产标准化三级企业。部分案例有：益阳金科集美、益阳数字经济产业园、宁乡好益多乳液等<br /><br />
                    益阳鸿鑫实业有限公司：成立于2016年，主要生产水泥稳定料，拥有现代化农业多功能产业园，正在投资建设建筑垃圾回收利用厂。部分案例有：益阳天意木国、益阳衡鸾线、宁乡华强大道等。<br /><br />
                    益阳市赫山区鸿鑫房地产开发有限公司：成立于2019年，主要从事房地产开发。部分案例有：岳来岳好购物中心等。<br /><br />
                </div>
            </div>
            <div className="news_box">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8">
                            <div className="news_head" data-move-y="-50px">
                                <h2>企业文化</h2>
                                <p>Corporate Culture</p>
                            </div>
                            {/* <div className="col-sm-4 col-md-4 col-mm-6 news_img"
                                style={{ backgroundImage: 'url(images/57344e66ec33d.png)', backgroundSize: 'contain' }}>
                            </div> */}
                            <div className="col-sm-10 col-md-6 col-mm-8">
                                <ul className="news_index" style={{display:'flex',width:'100%'}} data-move-y="200px">
                                    <li>
                                        <span>
                                            <strong>理念</strong>
                                            {/* <i>2013-09</i> */}
                                        </span>
                                        <a title="企业理念">企业理念</a><br />
                                        <em>以人为本 求实创新 服务客户</em>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>宗旨</strong>
                                            {/* <i>2013-05</i> */}
                                        </span>
                                        <a title="企业宗旨">企业宗旨</a><br />
                                        <em>为社会创造价值 为员工创造未来</em>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>愿景</strong>
                                            {/* <i>2013-05</i> */}
                                        </span>
                                        <a title="企业愿景">企业愿景</a><br />
                                        <em>和谐共生 发展创新 打造优质气质</em>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>精神</strong>
                                            {/* <i>2013-09</i> */}
                                        </span>
                                        <a title="企业精神">企业精神</a><br />
                                        <em>团结 诚信 高效 开拓</em>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Layout >
    )


}