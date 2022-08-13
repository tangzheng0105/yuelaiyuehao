import Layout from "../components/layout";
import Container from "../components/container";

export default function Introduction() {
    return (<Layout>
        <Container>
            <div className="list_box">
                <h2 className="left_h">工程案例</h2>

                <div className="product_list product_list2">
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case1.png" className="img-thumbnail" alt="怀化会同两江一岸（承建）" />
                        </a>
                        <p className="product_title"><a title="员工员工01">怀化会同两江一岸（承建）</a></p>
                    </div>
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case2.png" className="img-thumbnail" alt="员工员工02" />
                        </a>
                        <p className="product_title"><a title="员工员工02">宁乡好益多乳业产业园（商砼）</a></p>
                    </div>
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case3.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">长沙方特东方神话（沥青）</a></p>
                    </div>
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case4.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">宁乡碧桂园月湖湾（沥青）</a></p>
                    </div>
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case5.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">怀化挥动工业标准厂房（承建）</a></p>
                    </div>
                    <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case6.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">益阳现代农业嘉年华（沥青）</a></p>
                    </div>                 <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case7.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">益阳高新区通信装备及零部件研发生产基地（商砼）</a></p>
                    </div>                 <div className="col-sm-4 col-md-3 col-mm-6 product_img">
                        <a>
                            <img src="images/case8.png" className="img-thumbnail" alt="测试测试测试相册" />
                        </a>
                        <p className="product_title"><a title="测试测试测试相册">湖南美宜产业园（沥青）</a></p>
                    </div>
                </div>

            </div>
        </Container>
    </Layout >
    )


}