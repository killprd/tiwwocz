<?php

/* @var $this yii\web\View */
use yii\helpers\Html;

use yii\widgets\Breadcrumbs;
use backend\assets\AppAsset;
use common\widgets\Alert;
$asset = AppAsset::register($this);

$this->title = 'My Yii Application';
?>
<nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided" data-toggle="menubar">
            <span class="sr-only">Toggle navigation</span>
            <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
            <i class="icon wb-more-horizontal" aria-hidden="true"></i>
        </button>
        <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
            
            <span class="navbar-brand-text hidden-xs">Tiwwo</span>
        </div>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-search" data-toggle="collapse">
            <span class="sr-only">Toggle Search</span>
            <i class="icon wb-search" aria-hidden="true"></i>
        </button>
    </div>
    <div class="navbar-container container-fluid">
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
        <!-- Navbar Toolbar -->
        <ul class="nav navbar-toolbar">
          <li class="hidden-float" id="toggleMenubar">
            <a data-toggle="menubar" href="#" role="button">
              <i class="icon hamburger hamburger-arrow-left">
                  <span class="sr-only">Toggle menubar</span>
                  <span class="hamburger-bar"></span>
                </i>
            </a>
          </li>
          <li class="hidden-xs" id="toggleFullscreen">
            <a class="icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
              <span class="sr-only">Toggle fullscreen</span>
            </a>
          </li>
          <li class="hidden-float">
            <a class="icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
            role="button">
              <span class="sr-only">Toggle Search</span>
            </a>
          </li>
          
        </ul>
        <!-- End Navbar Toolbar -->
        <!-- Navbar Toolbar Right -->
        <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
            aria-expanded="false" role="button">
              <span class="flag-icon flag-icon-us"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-gb"></span> English</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-fr"></span> French</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-cn"></span> Chinese</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-de"></span> German</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-nl"></span> Dutch</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a class="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
            data-animation="scale-up" role="button">
              <span class="avatar avatar-online">
                <img src="<?=$asset->baseUrl?>/global/portraits/5.jpg" alt="...">
                <i></i>
              </span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-user" aria-hidden="true"></i> Profile</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-payment" aria-hidden="true"></i> Billing</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> Settings</a>
              </li>
              <li class="divider" role="presentation"></li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-power" aria-hidden="true"></i> Logout</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a data-toggle="dropdown" href="javascript:void(0)" title="Notifications" aria-expanded="false"
            data-animation="scale-up" role="button">
              <i class="icon wb-bell" aria-hidden="true"></i>
              <span class="badge badge-danger up">5</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
              <li class="dropdown-menu-header" role="presentation">
                <h5>NOTIFICATIONS</h5>
                <span class="label label-round label-danger">New 5</span>
              </li>
              <li class="list-group" role="presentation">
                <div data-role="container">
                  <div data-role="content">
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <i class="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">A new order has been placed</h6>
                          <time class="media-meta" datetime="2016-06-12T20:50:48+08:00">5 hours ago</time>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <i class="icon wb-user bg-green-600 white icon-circle" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Completed the task</h6>
                          <time class="media-meta" datetime="2016-06-11T18:29:20+08:00">2 days ago</time>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <i class="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Settings updated</h6>
                          <time class="media-meta" datetime="2016-06-11T14:05:00+08:00">2 days ago</time>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <i class="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Event started</h6>
                          <time class="media-meta" datetime="2016-06-10T13:50:18+08:00">3 days ago</time>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <i class="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Message received</h6>
                          <time class="media-meta" datetime="2016-06-10T12:34:48+08:00">3 days ago</time>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li class="dropdown-menu-footer" role="presentation">
                <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                  <i class="icon wb-settings" aria-hidden="true"></i>
                </a>
                <a href="javascript:void(0)" role="menuitem">
                    All notifications
                  </a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a data-toggle="dropdown" href="javascript:void(0)" title="Messages" aria-expanded="false"
            data-animation="scale-up" role="button">
              <i class="icon wb-envelope" aria-hidden="true"></i>
              <span class="badge badge-info up">3</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
              <li class="dropdown-menu-header" role="presentation">
                <h5>MESSAGES</h5>
                <span class="label label-round label-info">New 3</span>
              </li>
              <li class="list-group" role="presentation">
                <div data-role="container">
                  <div data-role="content">
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <span class="avatar avatar-sm avatar-online">
                            <img src="<?=$asset->baseUrl?>/global/portraits/2.jpg" alt="..." />
                            <i></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Mary Adams</h6>
                          <div class="media-meta">
                            <time datetime="2016-06-17T20:22:05+08:00">30 minutes ago</time>
                          </div>
                          <div class="media-detail">Anyways, i would like just do it</div>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <span class="avatar avatar-sm avatar-off">
                            <img src="<?=$asset->baseUrl?>/global/portraits/3.jpg" alt="..." />
                            <i></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Caleb Richards</h6>
                          <div class="media-meta">
                            <time datetime="2016-06-17T12:30:30+08:00">12 hours ago</time>
                          </div>
                          <div class="media-detail">I checheck the document. But there seems</div>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <span class="avatar avatar-sm avatar-busy">
                            <img src="<?=$asset->baseUrl?>/global/portraits/4.jpg" alt="..." />
                            <i></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">June Lane</h6>
                          <div class="media-meta">
                            <time datetime="2016-06-16T18:38:40+08:00">2 days ago</time>
                          </div>
                          <div class="media-detail">Lorem ipsum Id consectetur et minim</div>
                        </div>
                      </div>
                    </a>
                    <a class="list-group-item" href="javascript:void(0)" role="menuitem">
                      <div class="media">
                        <div class="media-left padding-right-10">
                          <span class="avatar avatar-sm avatar-away">
                            <img src="<?=$asset->baseUrl?>/global/portraits/5.jpg" alt="..." />
                            <i></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading">Edward Fletcher</h6>
                          <div class="media-meta">
                            <time datetime="2016-06-15T20:34:48+08:00">3 days ago</time>
                          </div>
                          <div class="media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li class="dropdown-menu-footer" role="presentation">
                <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                  <i class="icon wb-settings" aria-hidden="true"></i>
                </a>
                <a href="javascript:void(0)" role="menuitem">
                    See all messages
                  </a>
              </li>
            </ul>
          </li>
          <li id="toggleChat">
            <a data-toggle="site-sidebar" href="javascript:void(0)" title="Chat" data-url="../site-sidebar.tpl">
              <i class="icon wb-chat" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <!-- End Navbar Toolbar Right -->
      </div>
      <!-- End Navbar Collapse -->
      <!-- Site Navbar Seach -->
      <div class="collapse navbar-search-overlap" id="site-navbar-search">
        <form role="search">
          <div class="form-group">
            <div class="input-search">
              <i class="input-search-icon wb-search" aria-hidden="true"></i>
              <input type="text" class="form-control" name="site-search" placeholder="Search...">
              <button type="button" class="input-search-close icon wb-close" data-target="#site-navbar-search"
              data-toggle="collapse" aria-label="Close"></button>
            </div>
          </div>
        </form>
      </div>
      <!-- End Site Navbar Seach -->
    </div>
  </nav>
  <div class="site-menubar">
    <div class="site-menubar-body">
      <div>
        <div>
          <ul class="site-menu">
            <li class="site-menu-category">General</li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                <span class="site-menu-title">Dashboard</span>
                <div class="site-menu-badge">
                  <span class="badge badge-success">3</span>
                </div>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../index.html">
                    <span class="site-menu-title">Dashboard v1</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../dashboard/v2.html">
                    <span class="site-menu-title">Dashboard v2</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../dashboard/ecommerce.html">
                    <span class="site-menu-title">Ecommerce</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../dashboard/analytics.html">
                    <span class="site-menu-title">Analytics</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../dashboard/team.html">
                    <span class="site-menu-title">Team</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub active open">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-layout" aria-hidden="true"></i>
                <span class="site-menu-title">Layouts</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/menu-collapsed.html">
                    <span class="site-menu-title">Menu Collapsed</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/menu-collapsed-alt.html">
                    <span class="site-menu-title">Menu Collapsed Alt</span>
                  </a>
                </li>
                <li class="site-menu-item active">
                  <a class="animsition-link" href="../layouts/menu-expended.html">
                    <span class="site-menu-title">Menu Expended</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/grids.html">
                    <span class="site-menu-title">Grid Scaffolding</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/layout-grid.html">
                    <span class="site-menu-title">Layout Grid</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/headers.html">
                    <span class="site-menu-title">Different Headers</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/panel-transition.html">
                    <span class="site-menu-title">Panel Transition</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/boxed.html">
                    <span class="site-menu-title">Boxed Layout</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/two-columns.html">
                    <span class="site-menu-title">Two Columns</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/menubar-flipped.html">
                    <span class="site-menu-title">Menubar Flipped</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/menubar-native-scrolling.html">
                    <span class="site-menu-title">Menubar Native Scrolling</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/bordered-header.html">
                    <span class="site-menu-title">Bordered Header</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../layouts/page-aside-fixed.html">
                    <span class="site-menu-title">Page Aside Fixed</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-file" aria-hidden="true"></i>
                <span class="site-menu-title">Pages</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Errors</span>
                    <span class="site-menu-arrow"></span>
                  </a>
                  <ul class="site-menu-sub">
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/error-400.html">
                        <span class="site-menu-title">400</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/error-403.html">
                        <span class="site-menu-title">403</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/error-404.html">
                        <span class="site-menu-title">404</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/error-500.html">
                        <span class="site-menu-title">500</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/error-503.html">
                        <span class="site-menu-title">503</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/faq.html">
                    <span class="site-menu-title">FAQ</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/gallery.html">
                    <span class="site-menu-title">Gallery</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/gallery-grid.html">
                    <span class="site-menu-title">Gallery Grid</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/search-result.html">
                    <span class="site-menu-title">Search Result</span>
                  </a>
                </li>
                <li class="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Maps</span>
                    <span class="site-menu-arrow"></span>
                  </a>
                  <ul class="site-menu-sub">
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/map-google.html">
                        <span class="site-menu-title">Google Maps</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../pages/map-vector.html">
                        <span class="site-menu-title">Vector Maps</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/maintenance.html">
                    <span class="site-menu-title">Maintenance</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/forgot-password.html">
                    <span class="site-menu-title">Forgot Password</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/lockscreen.html">
                    <span class="site-menu-title">Lockscreen</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/login.html">
                    <span class="site-menu-title">Login</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/register.html">
                    <span class="site-menu-title">Register</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/login-v2.html">
                    <span class="site-menu-title">Login V2</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/register-v2.html">
                    <span class="site-menu-title">Register V2</span>
                    <div class="site-menu-label">
                      <span class="label label-info label-round">new</span>
                    </div>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/login-v3.html">
                    <span class="site-menu-title">Login V3</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/register-v3.html">
                    <span class="site-menu-title">Register V3</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/user.html">
                    <span class="site-menu-title">User List</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/invoice.html">
                    <span class="site-menu-title">Invoice</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/blank.html">
                    <span class="site-menu-title">Blank Page</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/email.html">
                    <span class="site-menu-title">Email</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/code-editor.html">
                    <span class="site-menu-title">Code Editor</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/profile.html">
                    <span class="site-menu-title">Profile</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../pages/site-map.html">
                    <span class="site-menu-title">Sitemap</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-category">Elements</li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                <span class="site-menu-title">Basic UI</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Panel</span>
                    <span class="site-menu-arrow"></span>
                  </a>
                  <ul class="site-menu-sub">
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../uikit/panel-structure.html">
                        <span class="site-menu-title">Panel Structure</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../uikit/panel-actions.html">
                        <span class="site-menu-title">Panel Actions</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../uikit/panel-portlets.html">
                        <span class="site-menu-title">Panel Portlets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/buttons.html">
                    <span class="site-menu-title">Buttons</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/dropdowns.html">
                    <span class="site-menu-title">Dropdowns</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/icons.html">
                    <span class="site-menu-title">Icons</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/list.html">
                    <span class="site-menu-title">List</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/tooltip-popover.html">
                    <span class="site-menu-title">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/modals.html">
                    <span class="site-menu-title">Modals</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/tabs-accordions.html">
                    <span class="site-menu-title">Tabs &amp; Accordions</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/images.html">
                    <span class="site-menu-title">Images</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/badges-labels.html">
                    <span class="site-menu-title">Badges &amp; Labels</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/progress-bars.html">
                    <span class="site-menu-title">Progress Bars</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/carousel.html">
                    <span class="site-menu-title">Carousel</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/typography.html">
                    <span class="site-menu-title">Typography</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/colors.html">
                    <span class="site-menu-title">Colors</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../uikit/utilities.html">
                    <span class="site-menu-title">Utilties</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-hammer" aria-hidden="true"></i>
                <span class="site-menu-title">Advanced UI</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item hidden-xs site-tour-trigger">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Tour</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/animation.html">
                    <span class="site-menu-title">Animation</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/highlight.html">
                    <span class="site-menu-title">Highlight</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/lightbox.html">
                    <span class="site-menu-title">Lightbox</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/scrollable.html">
                    <span class="site-menu-title">Scrollable</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/rating.html">
                    <span class="site-menu-title">Rating</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/context-menu.html">
                    <span class="site-menu-title">Context Menu</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/alertify.html">
                    <span class="site-menu-title">Alertify</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/masonry.html">
                    <span class="site-menu-title">Masonry</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/treeview.html">
                    <span class="site-menu-title">Treeview</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/toastr.html">
                    <span class="site-menu-title">Toastr</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/maps-vector.html">
                    <span class="site-menu-title">Vector Maps</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/maps-google.html">
                    <span class="site-menu-title">Google Maps</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/sortable-nestable.html">
                    <span class="site-menu-title">Sortable &amp; Nestable</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../advanced/bootbox-sweetalert.html">
                    <span class="site-menu-title">Bootbox &amp; Sweetalert</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-plugin" aria-hidden="true"></i>
                <span class="site-menu-title">Structure</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/alerts.html">
                    <span class="site-menu-title">Alerts</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/ribbon.html">
                    <span class="site-menu-title">Ribbon</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/pricing-tables.html">
                    <span class="site-menu-title">Pricing Tables</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/overlay.html">
                    <span class="site-menu-title">Overlay</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/cover.html">
                    <span class="site-menu-title">Cover</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/timeline-simple.html">
                    <span class="site-menu-title">Simple Timeline</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/timeline.html">
                    <span class="site-menu-title">Timeline</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/step.html">
                    <span class="site-menu-title">Step</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/comments.html">
                    <span class="site-menu-title">Comments</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/media.html">
                    <span class="site-menu-title">Media</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/chat.html">
                    <span class="site-menu-title">Chat</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/testimonials.html">
                    <span class="site-menu-title">Testimonials</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/nav.html">
                    <span class="site-menu-title">Nav</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/navbars.html">
                    <span class="site-menu-title">Navbars</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/blockquotes.html">
                    <span class="site-menu-title">Blockquotes</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/pagination.html">
                    <span class="site-menu-title">Pagination</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../structure/breadcrumbs.html">
                    <span class="site-menu-title">Breadcrumbs</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-extension" aria-hidden="true"></i>
                <span class="site-menu-title">Widgets</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/statistics.html">
                    <span class="site-menu-title">Statistics Widgets</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/data.html">
                    <span class="site-menu-title">Data Widgets</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/blog.html">
                    <span class="site-menu-title">Blog Widgets</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/chart.html">
                    <span class="site-menu-title">Chart Widgets</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/social.html">
                    <span class="site-menu-title">Social Widgets</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../widgets/weather.html">
                    <span class="site-menu-title">Weather Widgets</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-library" aria-hidden="true"></i>
                <span class="site-menu-title">Forms</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/general.html">
                    <span class="site-menu-title">General Elements</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/material.html">
                    <span class="site-menu-title">Material Elements</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/advanced.html">
                    <span class="site-menu-title">Advanced Elements</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/layouts.html">
                    <span class="site-menu-title">Form Layouts</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/wizard.html">
                    <span class="site-menu-title">Form Wizard</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/validation.html">
                    <span class="site-menu-title">Form Validation</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/masks.html">
                    <span class="site-menu-title">Form Masks</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/editable.html">
                    <span class="site-menu-title">Form Editable</span>
                  </a>
                </li>
                <li class="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Editors</span>
                    <span class="site-menu-arrow"></span>
                  </a>
                  <ul class="site-menu-sub">
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../forms/editor-summernote.html">
                        <span class="site-menu-title">Summernote</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../forms/editor-markdown.html">
                        <span class="site-menu-title">Markdown</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../forms/editor-ace.html">
                        <span class="site-menu-title">Ace Editor</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/image-cropping.html">
                    <span class="site-menu-title">Image Cropping</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../forms/file-uploads.html">
                    <span class="site-menu-title">File Uploads</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-table" aria-hidden="true"></i>
                <span class="site-menu-title">Tables</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/basic.html">
                    <span class="site-menu-title">Basic Tables</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/bootstrap.html">
                    <span class="site-menu-title">Bootstrap Tables</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/floatthead.html">
                    <span class="site-menu-title">floatThead</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/responsive.html">
                    <span class="site-menu-title">Responsive Tables</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/editable.html">
                    <span class="site-menu-title">Editable Tables</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/jsgrid.html">
                    <span class="site-menu-title">jsGrid</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/footable.html">
                    <span class="site-menu-title">FooTable</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../tables/datatable.html">
                    <span class="site-menu-title">DataTables</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-pie-chart" aria-hidden="true"></i>
                <span class="site-menu-title">Chart</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/chartjs.html">
                    <span class="site-menu-title">Chart.js</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/gauges.html">
                    <span class="site-menu-title">Gauges</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/flot.html">
                    <span class="site-menu-title">Flot</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/peity.html">
                    <span class="site-menu-title">Peity</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/sparkline.html">
                    <span class="site-menu-title">Sparkline</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/morris.html">
                    <span class="site-menu-title">Morris</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/chartist.html">
                    <span class="site-menu-title">Chartist.js</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/rickshaw.html">
                    <span class="site-menu-title">Rickshaw</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/pie-progress.html">
                    <span class="site-menu-title">Pie Progress</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../charts/c3.html">
                    <span class="site-menu-title">C3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-category">Apps</li>
            <li class="site-menu-item has-sub">
              <a href="javascript:void(0)">
                <i class="site-menu-icon wb-grid-4" aria-hidden="true"></i>
                <span class="site-menu-title">Apps</span>
                <span class="site-menu-arrow"></span>
              </a>
              <ul class="site-menu-sub">
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/contacts/contacts.html">
                    <span class="site-menu-title">Contacts</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/calendar/calendar.html">
                    <span class="site-menu-title">Calendar</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/notebook/notebook.html">
                    <span class="site-menu-title">Notebook</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/taskboard/taskboard.html">
                    <span class="site-menu-title">Taskboard</span>
                  </a>
                </li>
                <li class="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <span class="site-menu-title">Documents</span>
                    <span class="site-menu-arrow"></span>
                  </a>
                  <ul class="site-menu-sub">
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../apps/documents/articles.html">
                        <span class="site-menu-title">Articles</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../apps/documents/categories.html">
                        <span class="site-menu-title">Categories</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../apps/documents/article.html">
                        <span class="site-menu-title">Article</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/forum/forum.html">
                    <span class="site-menu-title">Forum</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/message/message.html">
                    <span class="site-menu-title">Message</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/projects/projects.html">
                    <span class="site-menu-title">Projects</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/mailbox/mailbox.html">
                    <span class="site-menu-title">Mailbox</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/media/overview.html">
                    <span class="site-menu-title">Media</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/work/work.html">
                    <span class="site-menu-title">Work</span>
                  </a>
                </li>
                <li class="site-menu-item">
                  <a class="animsition-link" href="../apps/location/location.html">
                    <span class="site-menu-title">Location</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="site-menu-category">Angular UI</li>
            <li class="site-menu-item">
              <a class="animsition-link" href="../angular/index.html">
                <i class="site-menu-icon bd-angular" aria-hidden="true"></i>
                <span class="site-menu-title">Angular UI</span>
                <div class="site-menu-label">
                  <span class="label label-danger label-round">new</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="site-menubar-section">
            <h5>
              Milestone
              <span class="pull-right">30%</span>
            </h5>
            <div class="progress progress-xs">
              <div class="progress-bar active" style="width: 30%;" role="progressbar"></div>
            </div>
            <h5>
              Release
              <span class="pull-right">60%</span>
            </h5>
            <div class="progress progress-xs">
              <div class="progress-bar progress-bar-warning" style="width: 60%;" role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-menubar-footer">
      <a href="javascript: void(0);" class="fold-show" data-placement="top" data-toggle="tooltip"
      data-original-title="Settings">
        <span class="icon wb-settings" aria-hidden="true"></span>
      </a>
      <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
        <span class="icon wb-eye-close" aria-hidden="true"></span>
      </a>
      <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
        <span class="icon wb-power" aria-hidden="true"></span>
      </a>
    </div>
  </div>
  <div class="site-gridmenu">
    <div>
      <div>
        <ul>
          <li>
            <a href="../apps/mailbox/mailbox.html">
              <i class="icon wb-envelope"></i>
              <span>Mailbox</span>
            </a>
          </li>
          <li>
            <a href="../apps/calendar/calendar.html">
              <i class="icon wb-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="../apps/contacts/contacts.html">
              <i class="icon wb-user"></i>
              <span>Contacts</span>
            </a>
          </li>
          <li>
            <a href="../apps/media/overview.html">
              <i class="icon wb-camera"></i>
              <span>Media</span>
            </a>
          </li>
          <li>
            <a href="../apps/documents/categories.html">
              <i class="icon wb-order"></i>
              <span>Documents</span>
            </a>
          </li>
          <li>
            <a href="../apps/projects/projects.html">
              <i class="icon wb-image"></i>
              <span>Project</span>
            </a>
          </li>
          <li>
            <a href="../apps/forum/forum.html">
              <i class="icon wb-chat-group"></i>
              <span>Forum</span>
            </a>
          </li>
          <li>
            <a href="../index.html">
              <i class="icon wb-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Page -->
  <div class="page animsition">
    <div class="page-header">
      <h1 class="page-title">Menu Expended</h1>
    </div>
    <div class="page-content">
      <div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title">DEMO CONTENT</h3>
        </div>
        <div class="panel-body">
          <p>Praeteritas patiatur habuit aptior torquem, claudicare discenda, habent
            accusamus commune. Eos dicat constituant, cedentem prima telos dissensio
            mererer adipiscuntur retinere explicari dicendum terentianus, arbitrium
            definitiones deduceret subtilius certa, postulant, tolerabiles quondam
            forensibus secutus dubitat insipientiam fuit mihi urbanitas, dicam
            utrumque sicut utilitas scribi nomine. Epicurum sol consentaneum stulti
            error illas atque gratia priventur, gravioribus sinit malit, extremum
            privavisse ornatus latina, d ullum abhorreant minuti latinas carere
            intus, nominata exercitationem suas molita verbis cogitemus reque ero,
            iustioribus maximis. Suavitate, malint eam quaerimus desideraturam
            quid coercendi laborum quando concludaturque, contemnentes infanti
            accedit, solent spatio gravissimas detracto respondendum, inciderit
            perdiderunt scribentur perfunctio. Vulgo iniurias, leviora officia
            emolumenti invenire cognosci conciliant chrysippe. Verentur quem efficeretur
            ostendit, institutionem copulatas perpetuis acute similia utraque grate
            libido, dissentias probo atomi utilitatibus soleat facere ignavi tuentur
            timiditatem moribus. Impediri error invenire facillime nihilo. Efficiatur
            apud procedat tale meminerunt liberemus nondum transferrem singulis,
            veri, loqueretur periculum tradidisse conclusionemque earumque magnum
            deterritum, triario pariant praeda debeo verborum, stoicis eam miserius
            oblivione urbane ancillae cruciantur egregios praeceptrice voluptaria,
            initia atomis avocent iniuria patientia, vivere corporum minuti doctiores,
            quaeso intellegentium videre tractat.</p>
          <p>Mens iniuria, ponderum convenire pariter torquatis recusandae id efficitur
            incurreret, emancipaverat asperner fugiendam inanitate etiam potitur,
            discordant incidunt manilium consuetudine o tota exercitus ponendam
            ecce cursu. Quaeque rebus liberae rationibus studium fames per, exhorrescere.
            Umbram perdiderunt. Geometria detractio impensa. Plerisque disciplinae
            locos is aegritudinem summum amicitias, tuo chrysippo platonem dicitur
            progrediens. Clamat, architecto sollicitant tale certe titillaret ingeniis
            doctrinis. Artem bonas leguntur memoriter oriantur. Displicet defuit
            fugiendum iucundius, declinabunt privamur solum. Audire obruamus augendas
            copulatas versatur nivem albuci quarum. Interiret nollem ornatum video.
            Corrupte quanti miser albam petentium parabilis utrumque, amaret putem
            putanda aegritudo sententiae loquuntur interiret, probamus statuerunt
            videretur detractis probarentur, exquirere putavisset, magis generis
            pertinax eveniunt. Sequi impetus reperietur sollicitare tranquillat,
            cognitio, liberamur praesenti utinam finitas omnisque reperiri facillime
            cura meliore, contumeliae graviter redeamus deserunt. Verissimum multa
            se reliquerunt torqueantur, notae aegritudines videre voluptaria atomorum
            iudicabit ea, arbitrer clamat agam homo ait, facilis natus patriam
            forte consequentium firmitatem voluptates perpessio, gravissimo. Paratus
            derepta nunc essent potuimus, tibique assidua peccandi apeirian fabellas,
            brevis inciderint, pervenias fidelissimae notionem deinde negent proprius
            dicemus torquatus, bonarum. Vim, accusator, desideraret suam interdictum
            severa.</p>
          <p>Egregios corrumpit durissimis chrysippe quidque, emolumenti dixisset
            temporis ulla docui, gravitate provincia pueros necessariam, plurimum
            quando eitam aeternum administrari. Iisque animadvertat omnia. Emolumenti
            incorruptis volunt consecutus inanitate significet idcirco. Coniunctione
            malle placet angatur possint, dixit utraque nescius, voce pueri morati
            sanguinem fastidii, praetore habeatur sive. Primisque velit emancipaverat
            quaerendum. Efficerent, accusantibus servare bonum adolescens conferebamus
            totum, graviter pendet diuturnum inpotenti perpetua placet. Fit reprehendunt
            dixisset sive apte sentit fruuntur voce, adolescens, nemini statuerunt
            sola videatur multos timeam operosam nosmet earum. Patria expectamus
            quantaque pendet probamus, oculis praetore praesentium obruamus firmissima,
            partem. Quasi artis cumanum diceretur sero eius eidola, errem assidua
            numeranda sublata captiosa adversarium segnitiae publicam licet. Via
            incurrunt locos, divinum utroque haeret bestiae amplificarique disciplinis
            maestitiam, detraxisse, disputationi tueri manum conspectum optime
            miraretur puerilis easque, iucunditatem laudantium, antiqua tranquillat
            adipiscendarum athenis defendit collegisti utuntur bello iracundiae
            imitarentur, laborum beatus sitne salutatus genuit, malarum excruciant
            defuit unde perpaulum partem praesenti consul disputari sumitur. Queo
            aristippus antiquis praetermittatur offendimur, explentur amputata
            videre quaedam, effugiendorum tempore industriae, quantaque, qui magnam
            liberos earumque explicari corpora pater senectutem. Existimavit excruciant
            mox tantopere fuissent tamque.</p>
          <p>Diligant. Reliquisti video torquentur excelsus ille, aliquid rutilius,
            dicunt sic, maximasque deteriora hinc simplicem, consequentium, magnis,
            statuat dare suspicor explicatis fortasse reprehendunt quaerimus ullius,
            oportere sabinum pertinerent una laetetur. Virtutum adquiescere expectamus
            putem adquiescere persius incidant. Intellegi ortum. Repudiandae audita
            ob. Pugnantibus. Corrupte. Torqueantur placeat faciam maluisset tritani
            susciperet sciscat, ponunt pertinaces legendus, impetus atomi hausta,
            que, aequo fatemur. Cursu platonem saluti sanciret nondum legimus afficitur
            adipiscuntur. Chorusque stoicis otiosum partus praesens oblivione efficeretur.
            Nobis confidet utroque. Possimus artes arbitrer volumus haec importari
            siculis, statua sine, suscipere feci tertio nimium consule idem consule,
            domo negat quin vacillare interesse transferre omnisque ignavia interesset,
            duce cupiditate expetendas manus reddidisti dividendo primo firmam
            fugiendis effecerit. Optinere ullum nutu sinit, voluptati scientiam
            elaborare motum stultorum senectutem sero totus prompta. Ponendam nos
            parvam dixeris corporis fortibus suspicio usus posset, consoletur iudiciorumque
            diogenem cupiditatum utinam familiaritatem athenis comit, philosopho
            ab expectata intelleges primus modice domo, voce sicine agatur everti
            perspecta eitam erudito disciplina acute, contineri philosophia nescio
            nollem, assumenda quoquo sed id, habeatur, amori auctori ineruditus
            intellegunt numen bonae hic expressas corpore, nutu nesciunt augeri
            quosvis.</p>
          <p>Permulta negant iudicem physico recteque nascuntur probabis modis atqui
            imperii, sin eas iustitia isti diuturnitatem sentio venisset, philosophari
            romanum sedatio filio, statuam perspici morborum diligant integre comprobavit
            insequitur. Dediti morbi altera philosophi naturam consistat huc. Magnam.
            Aliquo tollitur habent macedonum, incidunt inveniri ludicra, sedulitatem
            conclusum voluerint tam debilitati, voluptaria quando geometriaque
            interrogari, indignae l debet proposita. Aristotele pleniorem noctesque
            minima seiunctum, verear priventur iucunda sedulitatem fortitudo molestia
            distinctio libenter ultima, iustioribus terentianus re multavit mollitia
            operosam ait. Ipsis, tranquillitatem perfunctio tibi alia torquatis
            l mortem mnesarchum graece umbram, solitudo utamur dialectica logikh
            delectari cupiditate consequentium celeritas putarent intellegimus,
            virtutibus afficitur. Consedit morbis dolore interesset eadem, horum
            tantalo flagitem eligendi albuci, doctissimos intemperantiam ordiamur
            poetis privatione hominum te macedonum, satis propemodum audita magnitudinem
            partes gravissimis, magnam parabilis ponit, animumque imbutus ne dicenda,
            firmitatem quae statuat dolores concupiscunt ibidem didicisse fugiendam,
            totus humili sale chorusque quid, gravissimo officia praetulerit, aperiam
            summo operosam adipisci porro omnino probarent, meo necessitatibus
            metuque inane, latinam ab amicitiae ei existunt virtus ipsi sensuum.
            Isdem temperantia constituit fuga naturalem desistunt referenda tenuit
            unam, animum expectata singulis doctiores.
          </p>
          <p>Allevatio copiosae huc fugiendum ignota assentior choro, torqueantur
            seditiones dissensio terentii quas vitae, interiret tali explicavi
            earumque verentur expectata, ferrentur desiderent venisset, habeatur.
            Inquit, aetatis perspecta quisque pacuvii assentiar iucunda libro omnis.
            Quidque numen torquatos percurri duce vetuit scientia. Declinare finiri
            hinc ponendam suscipiantur gratissimo eloquentiam nutu, urbane peccant,
            filio, divinum libidinibus perturbari hortatore explicatam meque comparandae
            maius horribiles dulce, mutae locos primos animus tractatos eligendi
            discordans status constituam materia. Iustius videmus odit praebeat
            inprobitatem numeris reiciat, miserum concedo facere miserum theseo
            easque epularum, erant, putat hostem denique, emancipaverat hosti amicorum
            adolescens malint dicta bona fautrices municipem, inpendente detractio
            declinabunt cives fecisse fuissent copulatas excruciant modi firmissimum,
            dictum sollicitare retinere elaborare opes aeque imperitorum necessariae
            facerem, sabinum possimus utrum sanciret exquirere sentiri efficeretur
            sensum, pertinerent consumere ignorant, incurrunt concordia quaeritur,
            municipem magnitudinem contineret cupiditatibus falso convicia, simulent
            labefactant fruuntur disciplinam exeamus. Meminerimus atomus aequo
            conficiuntur robustus etsi phaedrum causa recusandae. Ero stabilitas
            arguerent utilitate interpretaris. Notae effecerit praetulerit inciderit.
            Credere nemo cedentem recusandae hinc notissima declinatio, perpetuis
            pertinacia legendis fidelissimae invenerit, uterque zenonem fautrices
            vellem personae, evertitur malorum viam summam.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page -->
  <!-- Footer -->
  
