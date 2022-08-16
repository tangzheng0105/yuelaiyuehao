import Link from 'next/link'
import Script from 'next/script'

export default function Top() {
    return (
        <>
            <Script src='/js/common.js'></Script>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8">
                            <a><img src="images/logo.jpg" className="logo" alt="企业网站管理系统PHP版V2.0" /></a>
                        </div>
                        <div id="topsearch" className="col-xs-12 col-sm-4 col-md-4">
                            <img src="images/slogon.jpg"  style={{marginTop:'38px',width:'300px'}} alt="企业网站管理系统PHP版V2.0" />
                        </div>
                    </div>

                </div>
                <nav id="top_nav" className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link href='/'><a>网站首页</a></Link></li>

                                <li><Link href='/introduction'><a>公司简介</a></Link></li>
                                <li className="dropdown">
                                    <a>旗下公司</a>
                                    <a id="app_menudown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                    <ul className="dropdown-menu nav_small" role="menu">
                                        <li><Link href='/hualuo'><a>湖南华洛建筑工程有限公司</a></Link></li>
                                        <li><Link href='/guangye'><a>益阳市广业建材有限公司</a></Link></li>
                                        <li><Link href='/guangye2'><a>会同广业建材有限公司</a></Link></li>
                                        <li><Link href='/hongxin'><a>益阳鸿鑫实业有限公司</a></Link></li>
                                        <li><Link href='/dongnan'><a>益阳东南混凝土有限公司</a></Link></li>
                                        <li><Link href='/hongxin2'><a>益阳市赫山区鸿鑫房地产开发有限公司</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href='/case'><a>工程案例</a></Link></li>
                                <li><Link href='/honor'><a>企业荣誉</a></Link></li>
                                <li><Link href='/photo'><a>员工相册</a></Link></li>
                                <li><Link href='/about'><a>联系我们</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}