<?php

use frontend\assets\AppAsset;
$assets = AppAsset::register($this);
$this->title = 'Tiwwo';
?>
<nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
          data-toggle="menubar">
            <span class="sr-only">Toggle navigation</span>
            <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-collapse"
          data-toggle="collapse">
            <i class="icon wb-more-horizontal" aria-hidden="true"></i>
        </button>
        <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
           
        </div>
        <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-search"
          data-toggle="collapse">
            <span class="sr-only">Toggle Search</span>
            <i class="icon wb-search" aria-hidden="true"></i>
        </button>
    </div>
    <div class="navbar-container container-fluid">
      

        <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
       

            <ol class="breadcrumb breadcrumb-arrow">
                <li><a href="javascript:void(0)">Home</a></li>
                <li><a href="javascript:void(0)">Library</a></li>
                <li class="active">Data</li>
            </ol>

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
                    <img src="<?=$assets->baseUrl?>/global/portraits/5.jpg" alt="...">
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
              
              
            </ul>

        </div>

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
    </div>
  </nav>
  <div class="site-menubar">
    <div class="site-menubar-body">
        <div>
            <div>
                <div class="block_profile">
                    <img src="<?=$assets->baseUrl?>/assets/images/profile.png" class="img-responsive"/>
                    
                </div>
                <div class="block_profile--title">
                        Vlastimil Hak - průvodce liberecem
                </div>
                

                <ul class="site-menu">            
            
              
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
                            
              
           
                </ul>
          
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
          <h1 class="page-title">O mě</h1>
        </div>
        <div class="page-content">
            <div class="panel">           
                <div class="panel-body">
                <p>

                    Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.
Jenže kvůli všudy přítomné trávě jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                
                </p>
                </div>
            </div>



            <div class="row">
                <?= $this->render('//modules/_item',[])?>
                

                
            </div>
        </div>
    </div>
