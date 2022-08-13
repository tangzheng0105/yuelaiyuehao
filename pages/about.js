import Layout from "../components/layout";
import Container from "../components/container";
export default function About() {
    return (<Layout>
        <Container>
            <div className="list_box">
                <h2 className="left_h">联系我们</h2>
                <div>
                    <p style={{ paddingTop: "20px" }}>联系人：李丹</p>
                    <p>手机：18073125675</p>
                    <p>电话：073188888</p>
                    <p>邮箱：27459539@qq.com</p>
                    <p>地址： 湖南省益阳市赫山区岳家桥镇岳家桥社区</p>
                </div>
            </div>
        </Container>
    </Layout >
    )
}