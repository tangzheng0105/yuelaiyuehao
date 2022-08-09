export default function Top() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8">
                            <a><img src="images/53007d5b00000.png" className="logo" alt="企业网站管理系统PHP版V2.0" /></a>
                        </div>
                    </div>
                </div>
                <nav id="top_nav" className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <span id="small_search" className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            <a className="navbar-brand">导航菜单</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><a href='/'>网站首页</a></li>

                                <li><a href='/introduction'>公司简介</a></li>
                                <li className="dropdown">
                                    <a>组织架构</a>
                                    <a id="app_menudown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                    <ul className="dropdown-menu nav_small" role="menu">
                                        <li><a>湖南华洛建筑工程有限公司</a></li>
                                        <li><a>益阳市广业建材有限公司</a></li>
                                        <li><a>会同广业建材有限公司</a></li>
                                        <li><a>益阳鸿鑫实业有限公司</a></li>
                                        <li><a>益阳东南混凝土有限公司</a></li>
                                        <li><a>益阳市赫山区鸿鑫房地产开发有限公司</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a>新闻中心</a>
                                    <a id="app_menudown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                    <ul className="dropdown-menu nav_small" role="menu">
                                        <li><a>公司新闻</a></li><li><a>行业新闻</a></li><li><a>科技创新</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a>公司相册</a>
                                    <a id="app_menudown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                    <ul className="dropdown-menu nav_small" role="menu">
                                        <li><a>员工相册</a></li>
                                        <li><a>客户案例</a></li>
                                    </ul>
                                </li>               
                                <li><a>联系我们</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}