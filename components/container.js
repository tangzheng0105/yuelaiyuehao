export default function Container({ children }) {
    return (
        <div className="container">
            <div className="row">
                {/* <!-- right --> */}
                <div className="col-xs-12 col-sm-8 col-md-9" style={{float:"right"}}>
                    {children}
                </div>
                {/* <!-- left --> */}
                <div className="col-xs-12 col-sm-4 col-md-3">
                    <div className="left_nav" id="categories">
                        <h2 className="left_h">栏目导航</h2>
                        <div className="left_nav_ul" id="firstpane">
                            <div className="biglink">
                                <a>公司简介</a><span className="menu_head">+</span>
                                <div className="left_snav_ul menu_body">
                                </div>
                            </div>
                            <div className="biglink">
                                <a>联系我们</a><span className="menu_head">+</span>
                                <div className="left_snav_ul menu_body">
                                </div>
                            </div>
                            <div className="biglink">
                                <a>我们的服务优势</a><span className="menu_head">+</span>
                                <div className="left_snav_ul menu_body">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="left_news">
                        <h2 className="left_h">旗下公司</h2>
                        <ul className="left_news">
                            <li><a title="湖南华洛建筑工程有限公司">湖南华洛建筑工程有限公司</a></li>
                            <li><a title="益阳市广业建材有限公司">益阳市广业建材有限公司</a></li>
                            <li><a title="会同广业建材有限公司">会同广业建材有限公司</a></li>
                            <li><a title="益阳东南混凝土有限公司">益阳东南混凝土有限公司</a></li>
                            <li><a title="益阳鸿鑫实业有限公司">益阳鸿鑫实业有限公司</a></li>
                            <li><a title="益阳市赫山区鸿鑫房地产开发有限公司">益阳市赫山区鸿鑫房地产开发有限公司</a></li>
                        </ul>
                    </div>
                    <div className="index_contact">
                        <h2 className="left_h">联系我们</h2>
                        <p style={{paddingTop:"20px"}}>联系人：李丹</p>
                        <p>手机：18073125675</p>
                        <p>电话：073188888</p>
                        <p>邮箱：27459539@qq.com</p>
                        <p>地址： 湖南省益阳市赫山区岳家桥镇岳家桥社区</p>
                    </div>
                </div>
            </div>
        </div>
    )
}